import { SMARTLINK_URL } from "./data.js";
import { addXp, unlockAchievement } from "./player.js";
import { playTone, playNoise } from "./audio.js";

const quickTrainingPlans = {
  speed: {
    title: "Quick Sprint Training",
    seconds: 15,
    fatigue: 8,
    gains: { speed: 1, acceleration: 1 },
    message: "+1 Speed, +1 Acceleration"
  },
  reaction: {
    title: "Quick Start Training",
    seconds: 16,
    fatigue: 9,
    gains: { reaction: 1, strength: 1 },
    message: "+1 Reaction, +1 Strength"
  },
  stamina: {
    title: "Quick Endurance Training",
    seconds: 20,
    fatigue: 12,
    gains: { stamina: 1, focus: 1 },
    message: "+1 Stamina, +1 Focus"
  }
};

let quickTrainingRunning = false;
let quickTrainingTimer = null;

export function isQuickTrainingRunning() {
  return quickTrainingRunning;
}

export function startQuickTraining(player, type, hooks) {
  const plan = quickTrainingPlans[type];
  if (!plan) return false;

  if (quickTrainingRunning) {
    hooks.toast("Quick training is already running.");
    return false;
  }

  quickTrainingRunning = true;
  let remaining = plan.seconds;

  hooks.onStart?.(plan, remaining);
  playTone(520, 0.08, "triangle", 0.035);

  quickTrainingTimer = setInterval(() => {
    remaining -= 1;
    hooks.onTick?.(plan, remaining);

    if (remaining % 3 === 0) {
      playTone(95 + Math.random() * 25, 0.035, "square", 0.018);
    }

    if (remaining <= 0) {
      clearInterval(quickTrainingTimer);
      quickTrainingTimer = null;
      quickTrainingRunning = false;

      Object.entries(plan.gains).forEach(([stat, value]) => {
        player.stats[stat] = (player.stats[stat] || 0) + value;
      });

      player.trainingFatigue = Math.min(40, (player.trainingFatigue || 0) + plan.fatigue);
      player.totalQuickTraining = (player.totalQuickTraining || 0) + 1;

      addXp(player, 18);
      unlockAchievement(player, "first_training");
      if (player.totalQuickTraining >= 5) unlockAchievement(player, "quick_training_5");

      playNoise(0.1, 0.045);
      playTone(720, 0.12, "triangle", 0.05);
      hooks.onComplete?.(plan);
    }
  }, 1000);

  return true;
}

export function openHeavyTrainingAd(player, toast) {
  const confirmOpen = confirm(
    "Heavy Training is optional.\n\nPress OK to open sponsor training in a new tab.\nAfter returning, press 'Claim Heavy Training Reward'."
  );

  if (!confirmOpen) {
    toast("Heavy training skipped.");
    return false;
  }

  window.open(SMARTLINK_URL, "_blank", "noopener,noreferrer");
  player.heavyTrainingReady = true;
  toast("Sponsor training opened. Return and claim your reward.");
  return true;
}

export function claimHeavyTraining(player, toast) {
  if (!player.heavyTrainingReady) {
    toast("Open sponsor training first if you want heavy training.");
    return false;
  }

  player.stats.speed += 2;
  player.stats.acceleration += 2;
  player.stats.stamina += 2;
  player.stats.strength += 1;
  player.stats.focus += 1;
  player.trainingFatigue = Math.max(0, (player.trainingFatigue || 0) - 8);

  addXp(player, 45);
  unlockAchievement(player, "first_training");
  player.heavyTrainingReady = false;

  playTone(720, 0.12, "triangle", 0.05);
  toast("Heavy training reward claimed instantly. No timer added.");
  return true;
}
