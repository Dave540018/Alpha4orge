import { getTotalStats, unlockAchievement, addXp } from "./player.js";
import { playTone, playNoise, startFootsteps, stopFootsteps, initAudio } from "./audio.js";
import { $, toast, setRaceHeader } from "./ui.js";
import { clearStoryStage, applyStageBackground } from "./story.js";

let raceRunning = false;
let raceAnimation = null;
let currentRandomRace = null;

const practiceStage = {
  id: 0,
  name: "Practice Race",
  distance: 100,
  opponents: 1,
  rewardCoins: 180,
  rewardXp: 90,
  difficulty: 1,
  intro: "Practice race against one rival."
};

let activeStage = practiceStage;

let raceState = {
  boostEnergy: 100,
  boostActive: false,
  boostUsed: false,
  playerPhysics: null,
  rivalPhysics: []
};

export function setActiveStage(stage) {
  activeStage = stage || practiceStage;
  setRaceHeader(stage);

  if (stage) {
    applyStageBackground(stage);
  } else {
    applyStageBackground({
      id: 0,
      name: "Practice Ground",
      theme: "school-morning"
    });
  }

  prepareRace();
}

export function prepareRace() {
  raceRunning = false;
  cancelAnimationFrame(raceAnimation);
  stopFootsteps();

  raceState = {
    boostEnergy: 100,
    boostActive: false,
    boostUsed: false,
    playerPhysics: null,
    rivalPhysics: []
  };

  const stage = $("#raceStage");
  stage.classList.remove("racing", "start-impact");

  $("#playerRunner").style.left = "7%";
  $("#playerRunner").classList.remove("running", "launch");

  generateOpponents(activeStage.opponents);

  $("#countdown").textContent = "";
  $("#distanceHud").textContent = "0";
  $("#speedHud").textContent = "0";
  $("#timeHud").textContent = "0.00";
  $("#staminaHud").textContent = "100";
  $("#boostHud").textContent = "100";
  $("#boostMeter").style.width = "100%";
  $("#raceFeelHud").textContent = "Idle";
  $("#leadIndicator").textContent = "READY";
  $("#boostBtn").disabled = true;
  $("#raceResult").classList.remove("show");
}

function generateOpponents(count) {
  const container = $("#opponentContainer");
  container.innerHTML = "";

  const laneBottoms = [44, 84, 14, 170, 208];

  for (let i = 0; i < count; i++) {
    const runner = document.createElement("div");
    runner.className = "runner rival";
    runner.id = `rival_${i}`;
    runner.style.left = "7%";
    runner.style.bottom = `${laneBottoms[i] || (30 + i * 38)}px`;
    runner.style.zIndex = String(14 - i);

    runner.innerHTML = `
      <div class="hair"></div>
      <div class="head"></div>
      <div class="face-strain"></div>
      <div class="runner-body"></div>
      <div class="bib">${23 + i}</div>
      <div class="arm front"></div>
      <div class="arm back"></div>
      <div class="leg front"><div class="shoe"></div></div>
      <div class="leg back"><div class="shoe"></div></div>
    `;

    container.appendChild(runner);
  }
}

export async function startRace(player, saveAndRender) {
  if (raceRunning) return;
  initAudio();
  prepareRace();
  raceRunning = true;

  const countdown = $("#countdown");
  for (const text of ["3", "2", "1"]) {
    countdown.textContent = text;
    playTone(480, 0.09, "square", 0.04);
    await wait(600);
  }

  countdown.textContent = "GO!";
  playTone(880, 0.18, "sawtooth", 0.05);
  playNoise(0.22, 0.07);
  triggerLaunchEffects();

  await wait(280);
  countdown.textContent = "";
  runRaceLoop(player, saveAndRender);
}

function triggerLaunchEffects() {
  const stage = $("#raceStage");
  const p = $("#playerRunner");
  const label = $("#perfectStart");

  stage.classList.add("start-impact");
  p.classList.add("launch");
  document.querySelectorAll(".runner.rival").forEach(r => r.classList.add("launch"));

  label.classList.remove("show");
  void label.offsetWidth;
  label.classList.add("show");
  createDust();

  setTimeout(() => {
    stage.classList.remove("start-impact");
    p.classList.remove("launch");
    document.querySelectorAll(".runner.rival").forEach(r => r.classList.remove("launch"));
  }, 420);
}

function createDust() {
  const dust = $("#dust");
  dust.innerHTML = "";
  dust.style.opacity = "1";

  for (let i = 0; i < 16; i++) {
    const s = document.createElement("span");
    s.style.left = `${10 + Math.random() * 45}px`;
    s.style.setProperty("--x", `${-40 - Math.random() * 100}px`);
    s.style.setProperty("--y", `${-10 - Math.random() * 55}px`);
    s.style.animationDelay = `${Math.random() * 0.12}s`;
    dust.appendChild(s);
  }

  setTimeout(() => dust.style.opacity = "0", 650);
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function createRunnerPhysics(stats, isPlayer, difficulty = 1, rivalIndex = 0) {
  const reactionDelay = Math.max(0.05, 0.52 - stats.reaction * 0.022 - Math.random() * 0.08);
  const topSpeed = (7.6 + stats.speed * 0.25 + stats.strength * 0.05) * difficulty;
  const acceleration = (3.4 + stats.acceleration * 0.19 + stats.strength * 0.08) * difficulty;
  const focus = stats.focus;

  return {
    name: isPlayer ? "player" : `rival_${rivalIndex}`,
    isPlayer,
    distance: 0,
    speed: 0,
    reactionDelay,
    topSpeed,
    acceleration,
    stamina: 80 + stats.stamina * 8,
    focus,
    staminaLeft: 100,
    finished: false,
    finishTime: null
  };
}

function getDistanceBias(distance) {
  if (distance === 100) return { speed: 1.2, acceleration: 1.2, reaction: 1.15, stamina: 0.9 };
  if (distance === 200) return { speed: 1.1, acceleration: 1.05, reaction: 1.0, stamina: 1.0 };
  if (distance === 400) return { speed: 0.95, acceleration: 0.92, reaction: 0.9, stamina: 1.35 };
  return { speed: 1, acceleration: 1, reaction: 1, stamina: 1 };
}

function applyBias(stats, bias) {
  return {
    speed: stats.speed * bias.speed,
    acceleration: stats.acceleration * bias.acceleration,
    stamina: stats.stamina * bias.stamina,
    strength: stats.strength,
    reaction: stats.reaction * bias.reaction,
    focus: stats.focus
  };
}

function createRivals(stage, player) {
  const rivals = [];
  const bias = getDistanceBias(stage.distance);

  // Random Race opponent: based on current player stats
  if (currentRandomRace && stage.type === "random") {
    const playerStatsForRandom = getTotalStats(player);
    const m = currentRandomRace.opponentMultiplier;

    const randomRivalStats = {
      speed: Math.max(4, Math.round(playerStatsForRandom.speed * m)),
      acceleration: Math.max(4, Math.round(playerStatsForRandom.acceleration * m)),
      stamina: Math.max(4, Math.round(playerStatsForRandom.stamina * m)),
      strength: Math.max(4, Math.round(playerStatsForRandom.strength * m)),
      reaction: Math.max(4, Math.round(playerStatsForRandom.reaction * m)),
      focus: Math.max(4, Math.round(playerStatsForRandom.focus * m))
    };

    rivals.push(
      createRunnerPhysics(
        applyBias(randomRivalStats, bias),
        false,
        1,
        0
      )
    );

    rivals[0].displayName = currentRandomRace.name;

    return rivals;
  }

  // Normal practice/story rivals
  for (let i = 0; i < stage.opponents; i++) {
    const stageBoost = Math.floor(stage.id / 2);

    const base = {
      speed: 8 + stageBoost + Math.floor(player.level / 2) + i,
      acceleration: 8 + stageBoost + Math.floor(player.level / 3) + (i % 2),
      stamina: 8 + stageBoost + Math.floor(player.level / 3) + (stage.distance === 400 ? i + 2 : i),
      strength: 8 + stageBoost + (i % 3),
      reaction: 8 + stageBoost + Math.floor(player.level / 4) + (i % 2),
      focus: 7 + stageBoost + (i % 3)
    };

    rivals.push(
      createRunnerPhysics(
        applyBias(base, bias),
        false,
        stage.difficulty,
        i
      )
    );
  }

  return rivals;
}

function runRaceLoop(player, saveAndRender) {
  const stageEl = $("#raceStage");
  const playerEl = $("#playerRunner");
  const trackWidth = stageEl.clientWidth * 0.76;
  const startLeftPx = stageEl.clientWidth * 0.07;
  const raceDistance = activeStage.distance || 100;
  const bias = getDistanceBias(raceDistance);

  const playerStats = applyBias(getTotalStats(player), bias);
  const p = createRunnerPhysics(playerStats, true, 1, 0);
  const rivals = createRivals(activeStage, player);

  raceState.playerPhysics = p;
  raceState.rivalPhysics = rivals;

  let start = performance.now();
  let last = start;

  stageEl.classList.add("racing");
  playerEl.classList.add("running");
  document.querySelectorAll(".runner.rival").forEach(r => r.classList.add("running"));
  $("#boostBtn").disabled = false;
  startFootsteps();

  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    const elapsed = (now - start) / 1000;
    last = now;

    updateRunnerPhysics(p, dt, elapsed);
    rivals.forEach(r => updateRunnerPhysics(r, dt, elapsed));

    const pLeft = startLeftPx + Math.min(p.distance / raceDistance, 1) * trackWidth;
    playerEl.style.left = `${pLeft}px`;

    rivals.forEach((r, i) => {
      const rivalEl = $(`#rival_${i}`);
      if (!rivalEl) return;
      const rLeft = startLeftPx + Math.min(r.distance / raceDistance, 1) * trackWidth;
      rivalEl.style.left = `${rLeft}px`;
    });

    const bestRivalDistance = Math.max(...rivals.map(r => r.distance));
    const lead = p.distance - bestRivalDistance;

    if (lead > 2) $("#leadIndicator").textContent = `AHEAD +${lead.toFixed(1)}m`;
    else if (lead < -2) $("#leadIndicator").textContent = `BEHIND ${lead.toFixed(1)}m`;
    else $("#leadIndicator").textContent = "NECK & NECK";

    if (raceState.boostActive) {
      raceState.boostEnergy = Math.max(0, raceState.boostEnergy - dt * 80);
    }

    $("#distanceHud").textContent = Math.min(raceDistance, p.distance).toFixed(1);
    $("#speedHud").textContent = p.speed.toFixed(1);
    $("#timeHud").textContent = elapsed.toFixed(2);
    $("#staminaHud").textContent = Math.max(0, p.staminaLeft).toFixed(0);
    $("#boostHud").textContent = Math.max(0, raceState.boostEnergy).toFixed(0);
    $("#boostMeter").style.width = `${Math.max(0, raceState.boostEnergy)}%`;

    if (p.speed > 11) $("#raceFeelHud").textContent = raceState.boostActive ? "BOOST!" : "MAX SPEED";
    else if (p.speed > 7) $("#raceFeelHud").textContent = "PUSH";
    else $("#raceFeelHud").textContent = "BUILDING";

    if (p.distance >= raceDistance && !p.finished) {
      p.finished = true;
      p.finishTime = elapsed;
    }

    rivals.forEach(r => {
      if (r.distance >= raceDistance && !r.finished) {
        r.finished = true;
        r.finishTime = elapsed;
      }
    });

    const allFinished = p.finished && rivals.every(r => r.finished);
    if (allFinished) {
      finishRace(player, p, rivals, saveAndRender);
      return;
    }

    raceAnimation = requestAnimationFrame(frame);
  }

  raceAnimation = requestAnimationFrame(frame);
}

function updateRunnerPhysics(runner, dt, elapsed) {
  if (runner.finished || elapsed < runner.reactionDelay) return;

  let boostFactor = 1;
  let staminaDrainBoost = 1;

  if (runner.isPlayer && raceState.boostActive && raceState.boostEnergy > 0) {
    boostFactor = 1.22;
    staminaDrainBoost = 2.2;
  }

  const staminaDrain = dt * (12 - runner.focus * 0.4) * staminaDrainBoost;
  runner.staminaLeft -= staminaDrain;

  let fatigueFactor = 1;
  if (runner.staminaLeft < 35) fatigueFactor = 0.82;
  if (runner.staminaLeft < 15) fatigueFactor = 0.68;

  const targetSpeed = runner.topSpeed * fatigueFactor * boostFactor;

  if (runner.speed < targetSpeed) {
    runner.speed += runner.acceleration * boostFactor * dt;
  } else {
    runner.speed -= 0.8 * dt;
  }

  runner.speed = Math.max(0, Math.min(runner.speed, targetSpeed));
  runner.distance += runner.speed * dt;
}

function finishRace(player, p, rivals, saveAndRender) {
  raceRunning = false;
  stopFootsteps();

  $("#raceStage").classList.remove("racing");
  $("#playerRunner").classList.remove("running");
  document.querySelectorAll(".runner.rival").forEach(r => r.classList.remove("running"));
  $("#boostBtn").disabled = true;

  unlockAchievement(player, "first_race");
  playNoise(0.28, 0.08);
  playTone(880, 0.1, "triangle", 0.05);
  playTone(660, 0.16, "triangle", 0.04);

  const allResults = [
    { name: "You", type: "player", time: p.finishTime },
    ...rivals.map((r, i) => ({
      name: r.displayName || `Rival ${i + 1}`,
      type: "rival",
      time: r.finishTime
    }))
  ].sort((a, b) => a.time - b.time);

  const position = allResults.findIndex(x => x.type === "player") + 1;
  const won = position === 1;
  const result = $("#raceResult");

  let storyOutcome = null;
  let rewardText = "";
  let nextStoryText = "";

  if (currentRandomRace) {
    if (won) {
      player.wins += 1;
      player.coins += currentRandomRace.rewardCoins;
      addXp(player, currentRandomRace.rewardXp);
      unlockAchievement(player, "first_win");

      rewardText = currentRandomRace.isLegendary
        ? `Legendary random race won! Reward received: ${currentRandomRace.rewardCoins} coins, ${currentRandomRace.rewardXp} XP.`
        : `Random cash race won! Reward received: ${currentRandomRace.rewardCoins} coins, ${currentRandomRace.rewardXp} XP.`;
    } else {
      player.losses += 1;

      const consolationCoins = currentRandomRace.isLegendary ? 40 : 20;
      player.coins += consolationCoins;
      addXp(player, 10);

      rewardText = currentRandomRace.isLegendary
        ? `You lost to a legendary runner. Consolation received: ${consolationCoins} coins, 10 XP.`
        : `Random race lost. Consolation received: ${consolationCoins} coins, 10 XP.`;
    }

    player.trainingFatigue = Math.max(0, (player.trainingFatigue || 0) - 5);

    const rows = allResults
      .map((r, index) => `${index + 1}. ${r.name}: ${r.time.toFixed(2)}s`)
      .join("<br>");

    result.innerHTML = `
      <strong>${won ? "💰 RANDOM RACE COMPLETE!" : "😤 RANDOM RACE LOST!"}</strong><br>
      <strong>Opponent:</strong> ${currentRandomRace.name}<br>
      <strong>Your Position:</strong> #${position}<br>
      <strong>Results:</strong><br>${rows}
      <div class="stage-result-panel"><strong>${rewardText}</strong></div>
    `;

    currentRandomRace = null;
    activeStage = practiceStage;
    setRaceHeader(null);

    result.classList.add("show");
    saveAndRender();
    return;
  }

  if (won) {
    player.wins += 1;
    unlockAchievement(player, "first_win");
    if (player.wins >= 3) unlockAchievement(player, "three_wins");

    if (activeStage.id === 0) {
      player.coins += practiceStage.rewardCoins;
      addXp(player, practiceStage.rewardXp);
      rewardText = `Practice reward received: ${practiceStage.rewardCoins} coins, ${practiceStage.rewardXp} XP.`;
    } else {
      storyOutcome = clearStoryStage(player, activeStage, position, toast);
      rewardText = storyOutcome?.firstClear
        ? `Stage prize received: ${storyOutcome.rewardCoins} coins, ${storyOutcome.rewardXp} XP.`
        : "Replay cleared. Main stage prize was already collected.";
    }
  } else {
    player.losses += 1;
    player.coins += 50;
    addXp(player, 35);
    rewardText = "Consolation received: 50 coins, 35 XP.";

    if (activeStage.id !== 0) {
      storyOutcome = clearStoryStage(player, activeStage, position, toast);
    }
  }

  // Racing gradually recovers fatigue caused by quick training.
  player.trainingFatigue = Math.max(0, (player.trainingFatigue || 0) - 5);

  if (storyOutcome) {
    if (storyOutcome.passed && storyOutcome.nextStage) {
      nextStoryText = `
        <div class="stage-result-panel">
          <strong>Next Stage Intro: ${storyOutcome.nextStage.name}</strong><br>
          ${storyOutcome.nextStage.intro}<br><br>
          <button class="primary-btn" data-story-stage="${storyOutcome.nextStage.id}">Continue to Next Story Race</button>
        </div>
      `;
    } else if (!storyOutcome.passed) {
      nextStoryText = `
        <div class="stage-result-panel">
          <strong>Stage Story:</strong><br>
          ${storyOutcome.stageEndText}<br><br>
          <button class="secondary-btn" data-goto="training">Train Before Retry</button>
          <button class="primary-btn" data-story-stage="${activeStage.id}">Retry This Stage</button>
        </div>
      `;
    } else if (activeStage.id === 10) {
      nextStoryText = `
        <div class="stage-result-panel">
          <strong>Story Completed:</strong><br>
          ${storyOutcome.stageEndText}
        </div>
      `;
    }
  }

  const rows = allResults
    .map((r, index) => `${index + 1}. ${r.name}: ${r.time.toFixed(2)}s`)
    .join("<br>");

  const storyEndText = storyOutcome?.stageEndText
    ? `<div class="stage-result-panel"><strong>Stage End Story:</strong><br>${storyOutcome.stageEndText}<br><br><strong>${rewardText}</strong></div>`
    : `<div class="stage-result-panel"><strong>${rewardText}</strong></div>`;

  result.innerHTML = `
    <strong>${won ? "🏆 YOU WON!" : "😤 TRY AGAIN!"}</strong><br>
    <strong>Your Position:</strong> #${position}<br>
    <strong>Results:</strong><br>${rows}
    ${storyEndText}
    ${nextStoryText}
  `;

  result.classList.add("show");
  saveAndRender();
}
export function activateBoost() {
  if (!raceRunning || raceState.boostUsed || !raceState.playerPhysics) return;

  raceState.boostUsed = true;
  raceState.boostActive = true;
  raceState.boostEnergy = 100;

  $("#boostBtn").disabled = true;
  $("#raceFeelHud").textContent = "BOOST!";

  playTone(220, 0.08, "sawtooth", 0.04);
  playTone(720, 0.18, "sawtooth", 0.035);
  playNoise(0.18, 0.06);
  createDust();

  setTimeout(() => raceState.boostActive = false, 1250);
}

export function setupRandomRace(player, config, toast) {
  const isLegendary = Math.random() < config.legendaryChance;

  let opponentMultiplier;

  if (isLegendary) {
    opponentMultiplier = 1.45 + Math.random() * 0.35;
  } else {
    opponentMultiplier = 0.75 + Math.random() * 0.7;
  }

  const opponentName = isLegendary
    ? config.legendaryNames[Math.floor(Math.random() * config.legendaryNames.length)]
    : config.normalNames[Math.floor(Math.random() * config.normalNames.length)];

  currentRandomRace = {
    id: -1,
    type: "random",
    name: opponentName,
    isLegendary,
    distance: 100,
    opponents: 1,
    rewardCoins: Math.floor(
      config.rewardCoinsMin + Math.random() * (config.rewardCoinsMax - config.rewardCoinsMin)
    ),
    rewardXp: Math.floor(
      config.rewardXpMin + Math.random() * (config.rewardXpMax - config.rewardXpMin)
    ),
    opponentMultiplier,
    difficulty: opponentMultiplier,
    intro: isLegendary
      ? `${opponentName} has entered the track. This is a rare legendary race. Winning will be very difficult.`
      : `${opponentName} challenges you to a quick cash sprint.`
  };

  activeStage = currentRandomRace;

  setRaceHeader(currentRandomRace);
  prepareRace();

  const raceTitle = document.getElementById("raceTitle");
  const raceSubtitle = document.getElementById("raceSubtitle");

  if (raceTitle) {
    raceTitle.textContent = isLegendary ? "Legendary Random Race" : "Random Cash Race";
  }

  if (raceSubtitle) {
    raceSubtitle.innerHTML =
      `${currentRandomRace.intro}<br><strong>Distance:</strong> 100m | <strong>Reward:</strong> ${currentRandomRace.rewardCoins} coins`;
  }

  toast(isLegendary ? "Rare legendary runner appeared!" : "Random race loaded.");
  return currentRandomRace;
}
