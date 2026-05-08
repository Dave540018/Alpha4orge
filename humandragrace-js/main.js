import { loadGame, saveGame, resetSavedGame, cloneData } from "./storage.js";
import { defaultPlayer, randomRaceConfig } from "./data.js";
import { renderAll, showScreen, toast, $, $all, setQuickTrainingVisual } from "./ui.js";
import { getRank } from "./player.js";
import { setSoundProvider } from "./audio.js";
import { buyItem, equipItem, unequipSlot } from "./shop.js";
import { startQuickTraining, openHeavyTrainingAd, claimHeavyTraining, isQuickTrainingRunning } from "./training.js";
import { loadStoryStage } from "./story.js";
import { setActiveStage, prepareRace, startRace, activateBoost, setupRandomRace } from "./race.js";


let player = loadGame();

setSoundProvider(() => player.soundOn);

function saveAndRender() {
  player.rank = getRank(player);
  saveGame(player);
  renderAll(player);
}

function updateProfile() {
  const name = document.getElementById("runnerNameInput").value.trim();

  if (name.length >= 2) {
    player.name = name;
  }

  saveAndRender();
  toast("Profile saved.");
}

function resetGame() {
  if (!confirm("Reset all saved progress?")) return;
  resetSavedGame();
  player = cloneData(defaultPlayer);
  setActiveStage(null);
  saveAndRender();
  toast("Game save reset.");
}

function toggleSound() {
  player.soundOn = !player.soundOn;
  saveAndRender();
  toast(`Sound ${player.soundOn ? "ON" : "OFF"}.`);
}

function attachEvents() {
  $all(".nav button").forEach(button => {
    button.addEventListener("click", () => showScreen(button.dataset.screen));
  });

  $all("[data-goto]").forEach(button => {
    button.addEventListener("click", () => showScreen(button.dataset.goto));
  });

  $("#saveProfileBtn").addEventListener("click", updateProfile);
  $("#resetGameBtn").addEventListener("click", resetGame);
  $("#soundBtn").addEventListener("click", toggleSound);
  $("#startRaceBtn").addEventListener("click", () => startRace(player, saveAndRender));
  $("#resetTrackBtn").addEventListener("click", prepareRace);
  $("#boostBtn").addEventListener("click", activateBoost);

  const startRandomRaceBtn = document.getElementById("startRandomRaceBtn");

  if (startRandomRaceBtn) {
    startRandomRaceBtn.addEventListener("click", () => {
      setupRandomRace(player, randomRaceConfig, toast);
      showScreen("race");
    });
  }

  $("#openHeavyTrainingBtn").addEventListener("click", () => {
    if (openHeavyTrainingAd(player, toast)) saveAndRender();
  });

  $("#claimHeavyTrainingBtn").addEventListener("click", () => {
    if (claimHeavyTraining(player, toast)) saveAndRender();
  });

  document.addEventListener("click", event => {
    const gotoBtn = event.target.closest("[data-goto]");
    if (gotoBtn) {
      showScreen(gotoBtn.dataset.goto);
      return;
    }

    const storyBtn = event.target.closest("[data-story-stage]");
    if (storyBtn) {
      const stage = loadStoryStage(player, Number(storyBtn.dataset.storyStage), toast);
      if (stage) {
        setActiveStage(stage);
        showScreen("race");
      }
      return;
    }

    const buyBtn = event.target.closest("[data-buy-item]");
    if (buyBtn) {
      if (buyItem(player, buyBtn.dataset.buyItem, toast)) saveAndRender();
      return;
    }

    const equipBtn = event.target.closest("[data-equip-item]");
    if (equipBtn) {
      if (equipItem(player, equipBtn.dataset.equipItem, toast)) saveAndRender();
      return;
    }

    const unequipBtn = event.target.closest("[data-unequip-slot]");
    if (unequipBtn) {
      if (unequipSlot(player, unequipBtn.dataset.unequipSlot, toast)) saveAndRender();
      return;
    }

    const quickBtn = event.target.closest("[data-quick-training]");
    if (quickBtn) {
      if (isQuickTrainingRunning()) {
        toast("Training already in progress. Wait for the timer to finish.");
        return;
      }

      startQuickTraining(player, quickBtn.dataset.quickTraining, {
        toast,
        onStart: (plan, remaining) => {
          setQuickTrainingVisual(plan, remaining, "start");
          toast(`${plan.title} started. Keep running for ${plan.seconds} seconds.`);
        },
        onTick: (plan, remaining) => setQuickTrainingVisual(plan, remaining, "tick"),
        onComplete: plan => {
          setQuickTrainingVisual(plan, 0, "complete");
          saveAndRender();
          toast(`${plan.title} complete. ${plan.message}. Fatigue increased.`);
        }
      });
    }
  });
}

attachEvents();
setActiveStage(null);
saveAndRender();
prepareRace();
