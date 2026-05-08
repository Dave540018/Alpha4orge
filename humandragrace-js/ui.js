import { shopItems, awardList, storyStages } from "./data.js";
import { getTotalStats, getRunnerTypeFromStats } from "./player.js";


export function $(selector) {
  return document.querySelector(selector);
}

export function $all(selector) {
  return [...document.querySelectorAll(selector)];
}

export function toast(message) {
  const box = $("#toast");
  box.textContent = message;
  box.classList.add("show");
  setTimeout(() => box.classList.remove("show"), 2200);
}

export function showScreen(id) {
  $all(".screen").forEach(s => s.classList.remove("active"));
  $(`#${id}`).classList.add("active");

  $all(".nav button").forEach(b => b.classList.remove("active"));
  const nav = $(`.nav button[data-screen="${id}"]`);
  if (nav) nav.classList.add("active");
}

export function renderAll(player) {
  $("#coinsTop").textContent = player.coins;
  $("#levelTop").textContent = player.level;
  $("#rankTop").textContent = player.rank;
  $("#sideName").textContent = player.name;
    const autoType = getRunnerTypeFromStats(player);

  $("#sideCategory").textContent = autoType;
  $("#runnerNameInput").value = player.name;

  const autoRunnerType = $("#autoRunnerType");
  if (autoRunnerType) autoRunnerType.textContent = autoType;

  $("#soundState").textContent = player.soundOn ? "ON" : "OFF";

  renderStats(player);
  renderShop(player);
  renderInventory(player);
  renderAwards(player);
  renderStoryStages(player);
  renderTrainingStatus(player);
}

function renderStats(player) {
  const stats = getTotalStats(player);
  const statList = $("#statList");
  statList.innerHTML = "";

  Object.entries(stats).forEach(([key, value]) => {
    const row = document.createElement("div");
    row.className = "stat-row";
    row.innerHTML = `
      <strong>${capitalize(key)}</strong>
      <div class="bar"><span style="width:${Math.min(value * 6, 100)}%"></span></div>
      <strong>${value}</strong>
    `;
    statList.appendChild(row);
  });
}

function renderShop(player) {
  const grid = $("#shopGrid");
  grid.innerHTML = "";

  shopItems.forEach(item => {
    const owned = player.inventory.includes(item.id);
    const card = document.createElement("div");
    card.className = "card shop-item";
    card.innerHTML = `
      <span class="tag">${item.slot.toUpperCase()}</span>
      <h3>${item.name}</h3>
      <p class="muted">${item.description}</p>
      <p><strong>Bonus:</strong> ${formatBonus(item.bonus)}</p>
      <p><strong>Price:</strong> ${item.price} coins</p>
      <button class="${owned ? "secondary-btn" : "primary-btn"}" data-buy-item="${item.id}">
        ${owned ? "Owned" : "Buy"}
      </button>
    `;
    grid.appendChild(card);
  });
}

function renderInventory(player) {
  const grid = $("#inventoryGrid");
  grid.innerHTML = "";

  if (player.inventory.length === 0) {
    grid.innerHTML = `<div class="card"><h3>No items yet</h3><p class="muted">Buy gear from the shop first.</p></div>`;
    return;
  }

  player.inventory.forEach(itemId => {
    const item = shopItems.find(i => i.id === itemId);
    if (!item) return;

    const equipped = player.equipped[item.slot] === item.id;
    const card = document.createElement("div");
    card.className = "card shop-item";
    card.innerHTML = `
      <span class="tag">${equipped ? "EQUIPPED" : item.slot.toUpperCase()}</span>
      <h3>${item.name}</h3>
      <p class="muted">${item.description}</p>
      <p><strong>Bonus:</strong> ${formatBonus(item.bonus)}</p>
      ${equipped
        ? `<button class="secondary-btn" data-unequip-slot="${item.slot}">Unequip</button>`
        : `<button class="primary-btn" data-equip-item="${item.id}">Equip</button>`}
    `;
    grid.appendChild(card);
  });
}

function renderAwards(player) {
  const grid = $("#awardsGrid");
  grid.innerHTML = "";

  awardList.forEach(award => {
    const unlocked = player.achievements.includes(award.id);
    const card = document.createElement("div");
    card.className = "card";
    card.style.opacity = unlocked ? "1" : "0.45";
    card.innerHTML = `
      <h3>${unlocked ? "🏅" : "🔒"} ${award.name}</h3>
      <p class="muted">${award.desc}</p>
      <p style="margin-top:10px;"><strong>${unlocked ? "Unlocked" : "Locked"}</strong></p>
    `;
    grid.appendChild(card);
  });
}


function renderTrainingStatus(player) {
  const fatigueText = $("#fatigueText");
  if (!fatigueText) return;

  const fatigue = player.trainingFatigue || 0;
  const level = fatigue >= 30 ? "High" : fatigue >= 15 ? "Medium" : fatigue > 0 ? "Low" : "Fresh";
  fatigueText.textContent = `Fatigue: ${fatigue} / 40 (${level})`;
}

export function setQuickTrainingVisual(plan, remaining, phase = "idle") {
  const box = $("#quickTrainingBox");
  const title = $("#quickTrainingTitle");
  const timer = $("#quickTrainingTimer");
  const progress = $("#quickTrainingProgress");

  if (!box || !title || !timer || !progress) return;

  if (!plan) {
    box.classList.remove("running");
    title.textContent = "Ready for quick training";
    timer.textContent = "Choose a drill";
    progress.style.width = "0%";
    return;
  }

  if (phase === "start" || phase === "tick") {
    box.classList.add("running");
    const done = Math.max(0, plan.seconds - remaining);
    const pct = Math.min(100, (done / plan.seconds) * 100);
    title.textContent = plan.title;
    timer.textContent = `${Math.max(0, remaining)} seconds left — ${plan.message}`;
    progress.style.width = `${pct}%`;
  }

  if (phase === "complete") {
    box.classList.remove("running");
    title.textContent = `${plan.title} complete!`;
    timer.textContent = `${plan.message} added. Fatigue increased.`;
    progress.style.width = "100%";
  }
}

function renderStoryStages(player) {
  const container = $("#storyStageList");
  container.innerHTML = "";

  const currentStage = storyStages.find(stage => stage.id === player.storyProgress) || storyStages[storyStages.length - 1];
  if (currentStage) {
    const completed = player.completedStages.includes(currentStage.id);
    const focusCard = document.createElement("div");
    focusCard.className = "card story-card-main";
    focusCard.innerHTML = `
      <div class="story-step-label">Current Story Chapter</div>
      <span class="tag">${currentStage.distance}M / ${currentStage.opponents} OPPONENT${currentStage.opponents > 1 ? "S" : ""}</span>
      <h3>${completed ? "✅" : "🔥"} Stage ${currentStage.id}: ${currentStage.name}</h3>
      <p class="muted">${currentStage.intro}</p>
      <p><strong>Goal:</strong> Finish #${currentStage.unlockPosition || 1} to unlock the next stage.</p>
      <p><strong>Stage Prize:</strong> ${currentStage.rewardCoins} coins, ${currentStage.rewardXp} XP</p>
      <button class="primary-btn" data-story-stage="${currentStage.id}">Read Story & Start Race</button>
    `;
    container.appendChild(focusCard);
  }

  storyStages.forEach(stage => {
    const unlocked = stage.id <= player.storyProgress;
    const completed = player.completedStages.includes(stage.id);

    const card = document.createElement("div");
    card.className = "card";
    card.style.opacity = unlocked ? "1" : "0.45";

    card.innerHTML = `
      <span class="tag">${stage.distance}M / ${stage.opponents} OPPONENT${stage.opponents > 1 ? "S" : ""}</span>
      <h3>${completed ? "✅" : unlocked ? "🏁" : "🔒"} Stage ${stage.id}: ${stage.name}</h3>
      <p class="muted">${stage.intro}</p>
      <p><strong>Required:</strong> #${stage.unlockPosition || 1} finish</p>
      <p><strong>Prize:</strong> ${stage.rewardCoins} coins, ${stage.rewardXp} XP</p>
      <button class="${unlocked ? "primary-btn" : "secondary-btn"}" ${unlocked ? "" : "disabled"} data-story-stage="${stage.id}">
        ${completed ? "Replay Story Race" : unlocked ? "Read Story & Race" : "Locked"}
      </button>
    `;

    container.appendChild(card);
  });
}

export function setRaceHeader(stage) {
  if (!stage) {
    $("#raceTitle").textContent = "Practice Race";
    $("#raceSubtitle").textContent = "100m practice race against one rival.";
    $("#rushWord").textContent = "FULL SPEED";
    return;
  }

  $("#raceTitle").textContent = `Stage ${stage.id}: ${stage.name}`;
  $("#raceSubtitle").innerHTML = `<strong>Story:</strong> ${stage.intro}<br><strong>Distance:</strong> ${stage.distance}m | <strong>Opponents:</strong> ${stage.opponents} | <strong>Goal:</strong> Finish #${stage.unlockPosition || 1}`;
  $("#rushWord").textContent = stage.id === 10 ? "NATIONAL FINAL" : stage.name.toUpperCase();
}

function formatBonus(bonus) {
  return Object.entries(bonus).map(([k, v]) => `+${v} ${capitalize(k)}`).join(", ");
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
