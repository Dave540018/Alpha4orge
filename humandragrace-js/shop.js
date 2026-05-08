import { shopItems } from "./data.js";
import { unlockAchievement } from "./player.js";
import { playTone } from "./audio.js";

export function buyItem(player, itemId, toast) {
  const item = shopItems.find(i => i.id === itemId);
  if (!item) return false;

  if (player.inventory.includes(itemId)) {
    toast("You already own this item.");
    return false;
  }

  if (player.coins < item.price) {
    toast("Not enough coins.");
    return false;
  }

  player.coins -= item.price;
  player.inventory.push(itemId);
  unlockAchievement(player, "first_item");
  playTone(880, 0.08, "triangle", 0.04);
  toast(`${item.name} purchased.`);
  return true;
}

export function equipItem(player, itemId, toast) {
  const item = shopItems.find(i => i.id === itemId);
  if (!item || !player.inventory.includes(itemId)) return false;

  player.equipped[item.slot] = itemId;
  toast(`${item.name} equipped.`);
  return true;
}

export function unequipSlot(player, slot, toast) {
  player.equipped[slot] = null;
  toast("Item removed.");
  return true;
}
