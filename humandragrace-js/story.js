import { storyStages } from "./data.js";
import { addXp, unlockAchievement } from "./player.js";

export let currentStoryStage = null;

export function getStageById(stageId) {
  return storyStages.find(s => s.id === Number(stageId)) || null;
}

export function getNextStage(stage) {
  if (!stage) return null;
  return storyStages.find(s => s.id === stage.id + 1) || null;
}

export function loadStoryStage(player, stageId, toast) {
  const stage = getStageById(stageId);
  if (!stage) return null;

  if (stage.id > player.storyProgress) {
    toast("This stage is locked.");
    return null;
  }

  currentStoryStage = stage;
  toast(`Story loaded: ${stage.name}. Read the intro, then start the race.`);
  return stage;
}

export function clearStoryStage(player, stage, position, toast) {
  if (!stage) return null;

  const requiredPosition = stage.unlockPosition || 1;
  const passed = position <= requiredPosition;
  const nextStage = getNextStage(stage);

  if (passed) {
    const firstClear = !player.completedStages.includes(stage.id);

    if (firstClear) {
      player.completedStages.push(stage.id);
      player.coins += stage.rewardCoins;
      addXp(player, stage.rewardXp);
    }

    if (player.storyProgress === stage.id && stage.id < storyStages.length) {
      player.storyProgress += 1;
    }

    if (stage.id === 10) {
      unlockAchievement(player, "national_champ");
      toast("National Champion! You completed the story mode.");
    } else {
      toast(firstClear ? "Stage cleared! Prize received and next story unlocked." : "Stage replay cleared.");
    }

    return {
      passed: true,
      firstClear,
      rewardCoins: firstClear ? stage.rewardCoins : 0,
      rewardXp: firstClear ? stage.rewardXp : 0,
      stageEndText: stage.endWin,
      nextStage
    };
  }

  toast(`You finished #${position}. Required position is #${requiredPosition}.`);
  return {
    passed: false,
    firstClear: false,
    rewardCoins: 50,
    rewardXp: 35,
    stageEndText: stage.endLose,
    nextStage: stage
  };
}

export function applyStageBackground(stage) {
  const raceStage = document.getElementById("raceStage");
  const overlay = document.getElementById("bgOverlayText");
  const rushWord = document.getElementById("rushWord");

  if (!raceStage || !stage) return;

  const themeClasses = [
    "theme-school-morning",
    "theme-school-bright",
    "theme-house-flags",
    "theme-sports-day",
    "theme-local-ground",
    "theme-taluk-ground",
    "theme-district-stadium",
    "theme-state-trial",
    "theme-state-final",
    "theme-national-arena"
  ];

  raceStage.classList.remove(...themeClasses);

  const themeClass = stage.theme?.startsWith("theme-")
    ? stage.theme
    : `theme-${stage.theme || "school-morning"}`;

  raceStage.classList.add(themeClass);

  if (overlay) {
    overlay.textContent = stage.name || "Practice Ground";
  }

  if (rushWord) {
    if (stage.id <= 2) rushWord.textContent = "SCHOOL START";
    else if (stage.id <= 4) rushWord.textContent = "HOUSE RIVALRY";
    else if (stage.id <= 6) rushWord.textContent = "RISING SPEED";
    else if (stage.id <= 8) rushWord.textContent = "PUSH HARD";
    else if (stage.id === 9) rushWord.textContent = "STATE FINAL";
    else rushWord.textContent = "NATIONAL FINAL";
  }
}