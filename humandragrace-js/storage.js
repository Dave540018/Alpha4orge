import { SAVE_KEY, defaultPlayer } from "./data.js";

export function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

function mergePlayerSave(saved) {
  const base = cloneData(defaultPlayer);
  return {
    ...base,
    ...saved,
    stats: { ...base.stats, ...(saved.stats || {}) },
    equipped: { ...base.equipped, ...(saved.equipped || {}) },
    inventory: Array.isArray(saved.inventory) ? saved.inventory : base.inventory,
    achievements: Array.isArray(saved.achievements) ? saved.achievements : base.achievements,
    completedStages: Array.isArray(saved.completedStages) ? saved.completedStages : base.completedStages
  };
}

export function loadGame() {
  const saved = localStorage.getItem(SAVE_KEY);
  if (!saved) return cloneData(defaultPlayer);

  try {
    return mergePlayerSave(JSON.parse(saved));
  } catch {
    return cloneData(defaultPlayer);
  }
}

export function saveGame(player) {
  localStorage.setItem(SAVE_KEY, JSON.stringify(player));
}

export function resetSavedGame() {
  localStorage.removeItem(SAVE_KEY);
}
