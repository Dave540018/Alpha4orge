import { shopItems } from "./data.js";

export function getCategoryBonus(player) {
  const bonuses = { Normal: 0, Rare: 1, Elite: 2, Epic: 3, Legendary: 5 };
  return bonuses[player.category] || 0;
}

export function getTotalStats(player) {
  const total = { ...player.stats };
  const categoryBonus = getCategoryBonus(player);

  Object.keys(total).forEach(k => total[k] += categoryBonus);

  Object.values(player.equipped).forEach(itemId => {
    if (!itemId) return;
    const item = shopItems.find(i => i.id === itemId);
    if (!item) return;

    Object.entries(item.bonus).forEach(([stat, value]) => {
      total[stat] = (total[stat] || 0) + value;
    });
  });

  const fatiguePenalty = Math.floor((player.trainingFatigue || 0) / 5);
  if (fatiguePenalty > 0) {
    total.stamina = Math.max(1, total.stamina - fatiguePenalty);
    total.focus = Math.max(1, total.focus - Math.floor(fatiguePenalty / 2));
  }

  return total;
}

export function unlockAchievement(player, id) {
  if (!player.achievements.includes(id)) {
    player.achievements.push(id);
  }
}

export function getRank(player) {
  if (player.completedStages.includes(10)) return "National Champion";
  if (player.level >= 15) return "Legend";
  if (player.level >= 10) return "Pro";
  if (player.level >= 5) return "Challenger";
  if (player.wins >= 3) return "Sprinter";
  return "Rookie";
}

export function addXp(player, amount) {
  player.xp += amount;

  while (player.xp >= player.level * 120) {
    player.xp -= player.level * 120;
    player.level += 1;
    player.coins += 100;
  }

  if (player.level >= 5) unlockAchievement(player, "level_5");
  player.rank = getRank(player);
}

export function getRunnerTypeFromStats(player) {
  const stats = player.stats;

  const total =
    stats.speed +
    stats.acceleration +
    stats.stamina +
    stats.strength +
    stats.reaction +
    stats.focus;

  const average = total / 6;

  if (average >= 28) return "Legendary Runner";
  if (average >= 22) return "Epic Runner";
  if (average >= 17) return "Elite Runner";
  if (average >= 12) return "Rare Runner";
  return "Normal Runner";
}