export const SMARTLINK_URL = "https://www.profitablecpmratenetwork.com/kxhp7p756?key=7e42848b0d850bc014d63178da587f42";

export const SAVE_KEY = "humanDragRaceStoryMode_v2_story_training";

export const defaultPlayer = {
  name: "Runner X",
  category: "Normal",
  coins: 500,
  xp: 0,
  level: 1,
  rank: "Rookie",
  wins: 0,
  losses: 0,
  stats: {
    speed: 5,
    acceleration: 5,
    stamina: 5,
    strength: 5,
    reaction: 5,
    focus: 5
  },
  inventory: [],
  equipped: {
    shoes: null,
    booster: null,
    gadget: null,
    suit: null,
    recovery: null,
    tech: null
  },
  achievements: [],
  soundOn: true,
  storyProgress: 1,
  completedStages: [],
  heavyTrainingReady: false,
  trainingFatigue: 0,
  totalQuickTraining: 0
};

export const shopItems = [
  {
    id: "basic_spikes",
    name: "Basic Sprint Spikes",
    slot: "shoes",
    price: 200,
    bonus: { speed: 2, acceleration: 1 },
    description: "Starter shoes for better grip and speed."
  },
  {
    id: "carbon_spikes",
    name: "Carbon Sprint Shoes",
    slot: "shoes",
    price: 600,
    bonus: { speed: 4, acceleration: 3 },
    description: "Lightweight carbon shoes for serious sprinting."
  },
  {
    id: "grip_launch_spikes",
    name: "Grip Launch Spikes",
    slot: "shoes",
    price: 900,
    bonus: { acceleration: 5, reaction: 2 },
    description: "Built for explosive starts in 100m and 200m races."
  },
  {
    id: "national_carbon_elite",
    name: "National Carbon Elite",
    slot: "shoes",
    price: 1800,
    bonus: { speed: 6, acceleration: 5, focus: 1 },
    description: "Top-level race spikes for championship stages."
  },
  {
    id: "energy_gel",
    name: "Energy Gel Pack",
    slot: "booster",
    price: 250,
    bonus: { stamina: 3 },
    description: "Improves stamina for longer races."
  },
  {
    id: "oxygen_shot",
    name: "Oxygen Shot",
    slot: "booster",
    price: 550,
    bonus: { stamina: 5, focus: 1 },
    description: "Helps delay fatigue during 200m and 400m races."
  },
  {
    id: "nitro_rush_gel",
    name: "Nitro Rush Gel",
    slot: "booster",
    price: 950,
    bonus: { speed: 3, stamina: 4, acceleration: 2 },
    description: "Aggressive race-day booster for high-pressure stages."
  },
  {
    id: "reaction_band",
    name: "Reaction Band",
    slot: "gadget",
    price: 350,
    bonus: { reaction: 3, focus: 1 },
    description: "Helps improve launch timing from the start line."
  },
  {
    id: "power_legs_v1",
    name: "Future Legs V1",
    slot: "gadget",
    price: 1000,
    bonus: { acceleration: 5, strength: 4 },
    description: "Experimental leg-assist gadget. High power upgrade."
  },
  {
    id: "neural_start_chip",
    name: "Neural Start Chip",
    slot: "tech",
    price: 1300,
    bonus: { reaction: 6, focus: 3 },
    description: "Improves start reaction and race composure."
  },
  {
    id: "smart_pace_watch",
    name: "Smart Pace Watch",
    slot: "tech",
    price: 700,
    bonus: { focus: 4, stamina: 2 },
    description: "Keeps rhythm steady when rivals pressure you."
  },
  {
    id: "compression_suit",
    name: "Compression Race Suit",
    slot: "suit",
    price: 800,
    bonus: { stamina: 3, speed: 2 },
    description: "Light race suit that improves sprint efficiency."
  },
  {
    id: "aero_suit",
    name: "Aero Sprint Suit",
    slot: "suit",
    price: 1500,
    bonus: { speed: 5, stamina: 2, focus: 2 },
    description: "Advanced suit for elite speed stages."
  },
  {
    id: "recovery_boots",
    name: "Recovery Boots",
    slot: "recovery",
    price: 650,
    bonus: { stamina: 2, strength: 2 },
    description: "Improves leg recovery and reduces race fatigue effects."
  },
  {
    id: "ice_bath_pass",
    name: "Ice Bath Pass",
    slot: "recovery",
    price: 1100,
    bonus: { stamina: 5, focus: 2 },
    description: "Premium recovery support for repeated story stages."
  }
];

export const awardList = [
  { id: "first_race", name: "First Race", desc: "Complete your first race." },
  { id: "first_win", name: "First Win", desc: "Win your first race." },
  { id: "three_wins", name: "Hat-Trick Runner", desc: "Win 3 races." },
  { id: "first_training", name: "Training Started", desc: "Complete your first training." },
  { id: "quick_training_5", name: "Training Habit", desc: "Complete 5 quick training sessions." },
  { id: "first_item", name: "Gear Collector", desc: "Buy your first item." },
  { id: "level_5", name: "Rising Athlete", desc: "Reach Level 5." },
  { id: "national_champ", name: "National Champion", desc: "Win the National Championship." }
];

export const randomRaceConfig = {
  rewardCoinsMin: 45,
  rewardCoinsMax: 120,
  rewardXpMin: 15,
  rewardXpMax: 40,
  legendaryChance: 0.015,

  normalNames: [
    "Unknown Runner",
    "Street Sprinter",
    "Local Racer",
    "Morning Track Runner",
    "Silent Challenger",
    "Fast Stranger",
    "Training Ground Rival",
    "Lane 4 Runner"
  ],

  legendaryNames: [
    "Lightning Bolt",
    "Olympic Shadow",
    "World Record Ghost",
    "Golden Sprint King"
  ]
};

export const storyStages = [
  {
    id: 1,
    name: "School PT Trial",
    distance: 100,
    opponents: 1,
    rewardCoins: 100,
    rewardXp: 40,
    difficulty: 1.15,
    unlockPosition: 1,
    intro: "You are just another student on the school ground. But today, during the PT sprint test, something inside you wants to prove that you are faster than everyone thinks.",
    endWin: "You crossed the line first. The PT sir notices your speed and tells you to join the school trials.",
    endLose: "You could not win the PT trial today. Train your start and try again.",
    theme: "school-morning"
  },
  {
    id: 2,
    name: "Class Sprint Challenge",
    distance: 100,
    opponents: 2,
    rewardCoins: 130,
    rewardXp: 50,
    difficulty: 1.25,
    unlockPosition: 1,
    intro: "Your classmates now know you are fast. Two of them challenge you after school to see if your first win was just luck.",
    endWin: "You beat your classmates clearly. Your name starts spreading inside the school.",
    endLose: "The class challenge exposed your weakness. Improve speed and acceleration before trying again.",
    theme: "school-bright"
  },
  {
    id: 3,
    name: "Inter-House Qualifier",
    distance: 100,
    opponents: 2,
    rewardCoins: 160,
    rewardXp: 60,
    difficulty: 1.4,
    unlockPosition: 1,
    intro: "Your house captain selects you for the qualifier. The race is no longer casual. You are now running for your team.",
    endWin: "You qualify for the school sports day final. Your house celebrates your victory.",
    endLose: "You failed to qualify this time. Train harder and come back stronger.",
    theme: "house-flags"
  },
  {
    id: 4,
    name: "School Sports Day Final",
    distance: 100,
    opponents: 3,
    rewardCoins: 220,
    rewardXp: 75,
    difficulty: 1.6,
    unlockPosition: 1,
    intro: "The whole school is watching. Teachers, students, and rivals are waiting to see if you can become the fastest runner in school.",
    endWin: "You win the school final. A local coach notices your timing and invites you to the youth meet.",
    endLose: "The school final was intense. Your rivals were stronger than expected. Train and try again.",
    theme: "sports-day"
  },
  {
    id: 5,
    name: "Local Youth Meet",
    distance: 200,
    opponents: 3,
    rewardCoins: 280,
    rewardXp: 95,
    difficulty: 1.85,
    unlockPosition: 1,
    intro: "You step outside school for the first time. The 200m race demands more than pure speed. You need rhythm and stamina.",
    endWin: "You win your first outside-school race. Local athletes now see you as a rising runner.",
    endLose: "You started well but faded in the second half. Build stamina before racing again.",
    theme: "local-ground"
  },
  {
    id: 6,
    name: "Taluk Qualifier",
    distance: 200,
    opponents: 4,
    rewardCoins: 340,
    rewardXp: 110,
    difficulty: 2.1,
    unlockPosition: 1,
    intro: "The Taluk qualifier brings stronger runners from different schools and clubs. Every lane has someone hungry to win.",
    endWin: "You survive the pressure and qualify for the district championship.",
    endLose: "The Taluk runners pushed harder than expected. Train your focus and race again.",
    theme: "taluk-ground"
  },
  {
    id: 7,
    name: "District Championship",
    distance: 200,
    opponents: 4,
    rewardCoins: 420,
    rewardXp: 130,
    difficulty: 2.4,
    unlockPosition: 1,
    intro: "This is no longer a small race. District-level athletes are faster, stronger, and more experienced.",
    endWin: "You win the district race. Your journey is now becoming serious.",
    endLose: "The district championship exposed the gap. Upgrade your gear and train again.",
    theme: "district-stadium"
  },
  {
    id: 8,
    name: "State Selection Trial",
    distance: 400,
    opponents: 4,
    rewardCoins: 520,
    rewardXp: 155,
    difficulty: 2.8,
    unlockPosition: 2,
    intro: "The 400m trial is brutal. Speed alone is not enough anymore. You must control stamina and push through pain.",
    endWin: "You finish inside the required position and earn a place in the State Championship Final.",
    endLose: "You could not survive the 400m pressure. Improve stamina and recovery before trying again.",
    theme: "state-trial"
  },
  {
    id: 9,
    name: "State Championship Final",
    distance: 400,
    opponents: 5,
    rewardCoins: 650,
    rewardXp: 190,
    difficulty: 3.15,
    unlockPosition: 2,
    intro: "The state final is here. Floodlights, pressure, and powerful rivals surround you. A national spot is at stake.",
    endWin: "You finish inside the required position. You are selected for the National Championship.",
    endLose: "You were close, but the state finalists were stronger. Train and return with more power.",
    theme: "state-final"
  },
  {
    id: 10,
    name: "National Championship",
    distance: 400,
    opponents: 5,
    rewardCoins: 900,
    rewardXp: 250,
    difficulty: 3.6,
    unlockPosition: 1,
    intro: "Every race brought you here. The national arena is roaring. This is the race that decides who you become.",
    endWin: "You are the National Champion. From a school PT trial to the biggest stage, your sprint journey becomes legend.",
    endLose: "The national final is the hardest race of your life. Train, upgrade, and return for the title.",
    theme: "national-arena"
  }
];
