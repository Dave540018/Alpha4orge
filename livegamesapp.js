// Jake's Empire: From Rags to Riches - Enhanced Story-Driven Clicker Game
class JakesEmpireGame {
    constructor() {
        this.gameState = {
            money: 0,
            totalEarned: 0,
            totalClicks: 0,
            clickValue: 1,
            incomePerSecond: 0,
            prestigeLevel: 0,
            prestigeBonus: 0,
            lastSaveTime: Date.now(),
            currentTier: 0,
            gameEnded: false,
            endGameShown: false,
            gameStarted: false,
            // Enhanced debt and asset seizure system
            savings: 0,
            debt: 0,
            inDebtMode: false,
            hasInsurance: false,
            insurancePaymentDue: 0,
            emergencyLoanActive: false,
            loanAmount: 0,
            loanInterestRate: 0.25,
            bankruptcyThreshold: -50000,
            assetSeizureActive: false,
            assetsBeingSeized: [],
            highScore: 0,

            // Challenge system state
            marketHealth: 'Stable',
            riskLevel: 'Low',
            activeChallenge: null,
            challengeEndTime: 0,
            competitionActive: false,
            recessionActive: false,
            surviveCount: 0,

            // Enhanced financial system
            consecutiveCrisisSurvival: 0,
            lastCrisisTime: 0,
            tutorialShown: {
                savings: false,
                crisis: false,
                clickLimit: false,
                aiSuper: false
            },
            tutorialActive: false
        };

        // Extended 14-level progression system with AI Superintelligence
        this.tiers = [
            { name: "Street Vendor", threshold: 0, description: "Humble beginnings on the street corner", businessesNeeded: 1 },
            { name: "Small Business Owner", threshold: 1000, description: "First real business location", businessesNeeded: 3 },
            { name: "Local Entrepreneur", threshold: 50000, description: "Multiple city locations", businessesNeeded: 5 },
            { name: "Regional Corporation", threshold: 500000, description: "Multi-state operations", businessesNeeded: 8 },
            { name: "National Company", threshold: 5000000, description: "Coast-to-coast presence", businessesNeeded: 10 },
            { name: "Global Conglomerate", threshold: 50000000, description: "International business empire", businessesNeeded: 12 },
            { name: "Tech Titan", threshold: 500000000, description: "Technology innovation leader", businessesNeeded: 15 },
            { name: "Industry Mogul", threshold: 5000000000, description: "Controls major industries", businessesNeeded: 18 },
            { name: "Economic Powerhouse", threshold: 50000000000, description: "Influences global markets", businessesNeeded: 20 },
            { name: "World Controller", threshold: 500000000000, description: "Wealth rivals nations", businessesNeeded: 22 },
            { name: "Planetary Overlord", threshold: 5000000000000, description: "Space-age business ventures", businessesNeeded: 25 },
            { name: "Galactic Emperor", threshold: 50000000000000, description: "Interstellar empire", businessesNeeded: 28 },
            { name: "Universal Sovereign", threshold: 500000000000000, description: "Ultimate cosmic dominance", businessesNeeded: 30 },
            { name: "AI Superintelligence", threshold: 1000000000000000, description: "Jake transcends humanity through AI mastery", businessesNeeded: 1000 }
        ];
        

        
        // Enhanced crisis system - more frequent and devastating
        this.crisisEvents = {
            financialCollapse: {
                name: "💥 FINANCIAL CRISIS!",
                description: "Without emergency savings, you face catastrophic losses!",
                probability: 0.15,
                frequency: 90000, // 1.5 minutes
                lossRange: [0.8, 0.95],
                triggerCondition: () => this.gameState.savings < (this.gameState.money + this.gameState.savings) * 0.25,
                canUseInsurance: true,
                savingsProtection: 0.7
            },
            industryShutdown: {
                name: "🏭 INDUSTRY SHUTDOWN!",
                description: "Government regulations halt all operations!",
                probability: 0.18,
                frequency: 120000, // 2 minutes
                duration: 300000, // 5 minutes
                canUseInsurance: true,
                lossRange: [0.3, 0.6]
            },
            legalInvestigation: {
                name: "⚖️ LEGAL CRISIS!",
                description: "Massive legal fees drain your wealth!",
                probability: 0.12,
                frequency: 180000, // 3 minutes
                costRange: [0.4, 0.7],
                canUseInsurance: false
            },
            cyberAttack: {
                name: "💻 CYBER ATTACK!",
                description: "Digital infrastructure compromised!",
                probability: 0.15,
                frequency: 150000, // 2.5 minutes
                targets: ["techStartup", "stockTrading", "cryptoMining", "aiResearch"],
                lossRange: [0.5, 0.8],
                canUseInsurance: true
            },
            marketManipulation: {
                name: "📈 MARKET MANIPULATION!",
                description: "Hostile takeover attempts threaten your empire!",
                probability: 0.10,
                frequency: 200000, // 3.3 minutes
                lossRange: [0.6, 0.9],
                canUseInsurance: true,
                triggerCondition: () => this.gameState.totalEarned > 1000000
            }
        };

        // Rebalanced click upgrades - severely limited
        this.clickUpgrades = [
            { id: 'strongFingers', name: 'Stronger Fingers', baseCost: 25, effect: 1.15, type: 'multiply', owned: 0, description: '+15% click value', maxOwned: 8 },
            { id: 'focusTraining', name: 'Focus Training', baseCost: 250, effect: 1.10, type: 'multiply', owned: 0, description: '+10% click value', maxOwned: 8 },
            { id: 'businessAcumen', name: 'Business Acumen', baseCost: 2500, effect: 1.15, type: 'multiply', owned: 0, description: '+15% click value', maxOwned: 8 },
            { id: 'marketInsight', name: 'Market Insight', baseCost: 25000, effect: 1.10, type: 'multiply', owned: 0, description: '+10% click value', maxOwned: 8 },
            { id: 'executiveSkills', name: 'Executive Skills', baseCost: 250000, effect: 1.12, type: 'multiply', owned: 0, description: '+12% click value', maxOwned: 8 },
            { id: 'strategicVision', name: 'Strategic Vision', baseCost: 2500000, effect: 1.15, type: 'multiply', owned: 0, description: '+15% click value', maxOwned: 8 },
            { id: 'neuralInterface', name: 'Neural Interface', baseCost: 25000000, effect: 1.20, type: 'multiply', owned: 0, description: '+20% click value', maxOwned: 8 },
            { id: 'quantumThinking', name: 'Quantum Thinking', baseCost: 250000000, effect: 1.25, type: 'multiply', owned: 0, description: '+25% click value', maxOwned: 8 }
        ];

        this.businesses = [
            { id: 'lemonade', name: 'Lemonade Stand', baseCost: 150, income: 0.6, owned: 0, managerCost: 2500, hasManager: false, riskLevel: 'Low', failureRate: 0.05, permits: false },
            { id: 'coffee', name: 'Coffee Cart', baseCost: 750, income: 3, owned: 0, managerCost: 12500, hasManager: false, riskLevel: 'Low', failureRate: 0.05, permits: false },
            { id: 'foodTruck', name: 'Food Truck', baseCost: 3750, income: 15, owned: 0, managerCost: 62500, hasManager: false, riskLevel: 'Medium', failureRate: 0.1, permits: true },
            { id: 'restaurant', name: 'Restaurant', baseCost: 18750, income: 60, owned: 0, managerCost: 312500, hasManager: false, riskLevel: 'Medium', failureRate: 0.1, permits: true },
            { id: 'retailStore', name: 'Retail Store', baseCost: 93750, income: 300, owned: 0, managerCost: 1562500, hasManager: false, riskLevel: 'Medium', failureRate: 0.1, permits: true },
            { id: 'techStartup', name: 'Tech Startup', baseCost: 468750, income: 1500, owned: 0, managerCost: 7812500, hasManager: false, riskLevel: 'High', failureRate: 0.15, permits: true },
            { id: 'manufacturing', name: 'Manufacturing Plant', baseCost: 2343750, income: 7500, owned: 0, managerCost: 39062500, hasManager: false, riskLevel: 'High', failureRate: 0.15, permits: true },
            { id: 'realEstate', name: 'Real Estate Empire', baseCost: 11718750, income: 37500, owned: 0, managerCost: 195312500, hasManager: false, riskLevel: 'High', failureRate: 0.15, permits: true },
            { id: 'stockTrading', name: 'Investment Firm', baseCost: 58593750, income: 187500, owned: 0, managerCost: 976562500, hasManager: false, riskLevel: 'Extreme', failureRate: 0.25, permits: true },
            { id: 'cryptoMining', name: 'Crypto Mining Farm', baseCost: 292968750, income: 937500, owned: 0, managerCost: 4882812500, hasManager: false, riskLevel: 'Extreme', failureRate: 0.25, permits: true },
            { id: 'biotech', name: 'Biotech Research', baseCost: 1464843750, income: 4687500, owned: 0, managerCost: 24414062500, hasManager: false, riskLevel: 'Extreme', failureRate: 0.25, permits: true },
            { id: 'aerospace', name: 'Aerospace Defense', baseCost: 7324218750, income: 23437500, owned: 0, managerCost: 122070312500, hasManager: false, riskLevel: 'Extreme', failureRate: 0.25, permits: true },
            { id: 'quantumTech', name: 'Quantum Technology', baseCost: 36621093750, income: 117187500, owned: 0, managerCost: 610351562500, hasManager: false, riskLevel: 'Extreme', failureRate: 0.25, permits: true },
            { id: 'spaceTourism', name: 'Space Tourism', baseCost: 183105468750, income: 585937500, owned: 0, managerCost: 3051757812500, hasManager: false, riskLevel: 'Extreme', failureRate: 0.25, permits: true },
            { id: 'aiResearch', name: 'AI Superintelligence', baseCost: 915527343750, income: 2929687500, owned: 0, managerCost: 15258789062500, hasManager: false, riskLevel: 'Extreme', failureRate: 0.25, permits: true }
        ];

        this.achievements = [
            { id: 'firstDollar', name: 'First Dollar', description: 'Earn your first $1', condition: () => this.gameState.totalEarned >= 1, completed: false },
            { id: 'hundredClub', name: 'Hundred Club', description: 'Earn $100', condition: () => this.gameState.totalEarned >= 100, completed: false },
            { id: 'thousandaire', name: 'Thousandaire', description: 'Earn $1,000', condition: () => this.gameState.totalEarned >= 1000, completed: false },
            { id: 'millionaire', name: 'Millionaire', description: 'Earn $1,000,000', condition: () => this.gameState.totalEarned >= 1000000, completed: false },
            { id: 'billionaire', name: 'Billionaire', description: 'Earn $1,000,000,000', condition: () => this.gameState.totalEarned >= 1000000000, completed: false },
            { id: 'businessOwner', name: 'Business Owner', description: 'Buy your first business', condition: () => this.getTotalBusinessesOwned() >= 1, completed: false },
            { id: 'automationMaster', name: 'Automation Master', description: 'Hire your first manager', condition: () => this.businesses.some(b => b.hasManager), completed: false },
            { id: 'speedDemon', name: 'Speed Demon', description: 'Click 1000 times', condition: () => this.gameState.totalClicks >= 1000, completed: false },
            { id: 'empireBuilder', name: 'Empire Builder', description: 'Own 100 total businesses', condition: () => this.getTotalBusinessesOwned() >= 100, completed: false },
            { id: 'clickMaster', name: 'Click Master', description: 'Click 10,000 times', condition: () => this.gameState.totalClicks >= 10000, completed: false }
        ];

        this.multipliers = [
            { id: 'focusBoost', name: 'Focus Boost', cost: 5000, duration: 30000, active: false, remaining: 0, description: '+50% click value for 30 seconds' },
            { id: 'marketingCampaign', name: 'Marketing Campaign', cost: 25000, duration: 60000, active: false, remaining: 0, description: '+75% income for 1 minute' }
        ];

        this.clickCombo = 0;
        this.lastClickTime = 0;
        this.comboTimeout = null;
        
        // Touch-and-hold functionality
        this.isHolding = false;
        this.holdInterval = null;
        this.holdClickRate = 100; // 100ms between clicks = 10 clicks/second
        this.spaceHolding = false;
        this.touchHolding = false;
        
        // Challenge system timers
        this.challengeTimers = {
            marketCrash: 0,
            competition: 0,
            recession: 0,
            equipmentFailure: 0
        };
        
        this.taxThresholds = [10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000];
        this.taxesPaid = [];
        
        // Initialize crisis timers
        this.crisisTimers = {
            financialCollapse: 0,
            industryShutdown: 0,
            legalInvestigation: 0,
            cyberAttack: 0
        };
        
        // Savings interest timer
        this.savingsInterestTimer = 0;
        
        this.init();
    }
    
    // Touch-and-hold functionality methods
    startTouchHold(event) {
        event.preventDefault();
        this.touchHolding = true;
        this.startHolding();
        
        // Add visual feedback
        const button = document.getElementById('moneyButton');
        button.classList.add('holding');
        
        // Haptic feedback if supported
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    }
    
    stopTouchHold(event) {
        event.preventDefault();
        this.touchHolding = false;
        this.stopHolding();
        
        // Remove visual feedback
        const button = document.getElementById('moneyButton');
        button.classList.remove('holding');
    }
    
    startSpaceHold() {
        if (!this.spaceHolding) {
            this.spaceHolding = true;
            this.startHolding();
            
            // Add visual feedback
            const button = document.getElementById('moneyButton');
            button.classList.add('holding');
        }
    }
    
    stopSpaceHold() {
        this.spaceHolding = false;
        this.stopHolding();
        
        // Remove visual feedback
        const button = document.getElementById('moneyButton');
        button.classList.remove('holding');
    }
    
    startHolding() {
        if (!this.isHolding) {
            this.isHolding = true;
            
            // Show hold indicator
            const holdIndicator = document.getElementById('holdIndicator');
            if (holdIndicator) {
                holdIndicator.style.display = 'block';
            }
            
            // Immediate first click
            this.performHoldClick();
            
            // Start continuous clicking
            this.holdInterval = setInterval(() => {
                if (this.isHolding && (this.touchHolding || this.spaceHolding)) {
                    this.performHoldClick();
                } else {
                    this.stopHolding();
                }
            }, this.holdClickRate);
            
            // Play hold start sound
            this.playSound('holdStart');
        }
    }
    
    stopHolding() {
        if (!this.touchHolding && !this.spaceHolding) {
            this.isHolding = false;
            
            // Hide hold indicator
            const holdIndicator = document.getElementById('holdIndicator');
            if (holdIndicator) {
                holdIndicator.style.display = 'none';
            }
            
            if (this.holdInterval) {
                clearInterval(this.holdInterval);
                this.holdInterval = null;
            }
            
            // Play hold stop sound
            this.playSound('holdStop');
        }
    }
    
    performHoldClick() {
        // Same as regular click but optimized for continuous clicking
        const now = Date.now();
        
        // Reduced combo system for hold clicks to prevent excessive bonuses
        if (now - this.lastClickTime < 200) {
            this.clickCombo = Math.min(this.clickCombo + 1, 5); // Capped at 5 for hold clicks
        } else {
            this.clickCombo = 1;
        }
        
        this.lastClickTime = now;
        clearTimeout(this.comboTimeout);
        this.comboTimeout = setTimeout(() => {
            this.clickCombo = 0;
        }, 500);

        let clickValue = this.getClickValue();
        
        // Apply combo bonus (reduced for hold clicks)
        const comboBonus = 1 + (this.clickCombo - 1) * 0.05; // Reduced from 0.1 to 0.05
        clickValue *= comboBonus;
        
        this.addMoney(clickValue);
        this.gameState.totalClicks++;
        
        // Reduced visual feedback for continuous clicks
        if (Math.random() < 0.3) { // Only show particles 30% of the time during hold
            this.createMoneyParticle(clickValue);
        }
        
        // Batch display updates to improve performance during hold mode
        if (this.gameState.totalClicks % 3 === 0) {
            this.updateDisplay();
        }
        
        // Periodic haptic feedback during hold (every 10 clicks)
        if (this.touchHolding && this.gameState.totalClicks % 10 === 0) {
            if (navigator.vibrate) {
                navigator.vibrate(25); // Short vibration
            }
        }
        
        this.checkAchievements();
        this.checkTaxEvents();
    }

    init() {
        this.loadGame();
        this.setupEventListeners();
        

        
        // Auto-save every 30 seconds
        this.startAutoSave();
        
        // Show story modal if game hasn't started
        if (!this.gameState.gameStarted) {
            this.showStoryModal();
        } else {
            this.updateDisplay();
            this.startGameLoop();
            this.checkOfflineEarnings();
            this.showWelcomeBackMessage();
        }
    }
    

    
    showStoryModal() {
        const modal = document.getElementById('storyModal');
        modal.classList.remove('hidden');
    }
    
startJakesJourney() {
        this.gameState.gameStarted = true;
        document.getElementById('storyModal').classList.add('hidden');
        this.updateDisplay();
        this.startGameLoop();
        this.checkOfflineEarnings();
        this.showAchievementNotification('Welcome to Money Clicker Empire!', 'Start clicking to build your business empire!');
        this.playSound('achievement');
    }

    setupEventListeners() {
        // Money button click
        const moneyButton = document.getElementById('moneyButton');
        moneyButton.addEventListener('click', () => this.clickMoney());
        
        // Touch-and-hold events for mobile
        moneyButton.addEventListener('touchstart', (e) => this.startTouchHold(e), { passive: false });
        moneyButton.addEventListener('touchend', (e) => this.stopTouchHold(e), { passive: false });
        moneyButton.addEventListener('touchcancel', (e) => this.stopTouchHold(e), { passive: false });
        
        // Prevent context menu and selection during touch
        moneyButton.addEventListener('contextmenu', (e) => e.preventDefault());
        moneyButton.addEventListener('selectstart', (e) => e.preventDefault());
        
        // Save game button
        document.getElementById('saveGame').addEventListener('click', () => this.saveGame());
        
        // Offline earnings button
        document.getElementById('offlineEarnings').addEventListener('click', () => this.collectOfflineEarnings());
        
        // Prestige button
        document.getElementById('prestigeButton').addEventListener('click', () => this.showPrestigeModal());
        
        // Prestige modal buttons
        document.getElementById('confirmPrestige').addEventListener('click', () => this.confirmPrestige());
        document.getElementById('cancelPrestige').addEventListener('click', () => this.hidePrestigeModal());
        
        // Story modal
        document.getElementById('startGame').addEventListener('click', () => this.startJakesJourney());
        

        // Financial management
        document.getElementById('depositBtn').addEventListener('click', () => this.depositToSavings());
        document.getElementById('withdrawBtn').addEventListener('click', () => this.withdrawFromSavings());
        document.getElementById('insuranceBtn').addEventListener('click', () => this.toggleInsurance());
        
        // Emergency loan
        document.getElementById('emergencyLoan').addEventListener('click', () => this.showLoanModal());
        document.getElementById('acceptLoan').addEventListener('click', () => this.acceptEmergencyLoan());
        document.getElementById('declineLoan').addEventListener('click', () => this.hideLoanModal());
        

        
        // Crisis actions
        document.getElementById('payInsurance').addEventListener('click', () => this.useInsurance());
        document.getElementById('acceptLoss').addEventListener('click', () => this.acceptCrisisLoss());
        
        // Victory modal
        document.getElementById('continueVictory').addEventListener('click', () => this.continueAfterVictory());
        document.getElementById('restartVictory').addEventListener('click', () => this.restartAfterVictory());
        
        // AI Victory modal
        if (document.getElementById('continueAI')) {
            document.getElementById('continueAI').addEventListener('click', () => this.continueAfterAIVictory());
        }
        if (document.getElementById('restartAI')) {
            document.getElementById('restartAI').addEventListener('click', () => this.restartAfterAIVictory());
        }
        
        // Game over modal
        document.getElementById('restartAfterGameOver').addEventListener('click', () => this.restartAfterGameOver());
        
        // End game modal buttons (keeping for compatibility)
        if (document.getElementById('continueGame')) {
            document.getElementById('continueGame').addEventListener('click', () => this.continueGame());
        }
        if (document.getElementById('restartGame')) {
            document.getElementById('restartGame').addEventListener('click', () => this.restartGame());
        }
        
        // Keyboard shortcuts with hold functionality
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' || e.key === ' ') {
                e.preventDefault();
                this.startSpaceHold();
            }
        });
        
        document.addEventListener('keyup', (e) => {
            if (e.code === 'Space' || e.key === ' ') {
                e.preventDefault();
                this.stopSpaceHold();
            }
        });

        // Enhanced auto-save setup handled in startAutoSave()
        
        // Challenge system event listeners
        document.getElementById('challengeButton').addEventListener('click', () => this.handleChallengeButton());
        
        // Prevent accidental page interactions during hold
        document.addEventListener('touchmove', (e) => {
            if (this.touchHolding) {
                e.preventDefault();
            }
        }, { passive: false });
        
        // Handle window blur/focus for hold functionality
        window.addEventListener('blur', () => {
            // Stop holding when window loses focus
            this.stopSpaceHold();
            this.stopTouchHold({ preventDefault: () => {} });
        });
        
        window.addEventListener('focus', () => {
            // Reset hold states when window regains focus
            this.spaceHolding = false;
            this.touchHolding = false;
            this.stopHolding();
        });
    }
    

    // Financial Management System
    depositToSavings() {
        const input = document.getElementById('savingsInput');
        const amount = parseInt(input.value) || 0;
        
        if (amount <= 0 || amount > this.gameState.money) {
            this.showAchievementNotification('Invalid Amount', 'Enter a valid amount within your current funds');
            return;
        }
        
        this.gameState.money -= amount;
        this.gameState.savings += amount;
        input.value = '';
        
        this.updateDisplay();
        this.saveGame(); // Auto-save on financial action
        this.playSound('purchase');
    }
    
    withdrawFromSavings() {
        const input = document.getElementById('savingsInput');
        const amount = parseInt(input.value) || 0;
        
        if (amount <= 0 || amount > this.gameState.savings) {
            this.showAchievementNotification('Invalid Amount', 'Enter a valid amount within your savings');
            return;
        }
        
        this.gameState.savings -= amount;
        this.gameState.money += amount;
        input.value = '';
        
        this.updateDisplay();
        this.saveGame(); // Auto-save on financial action
        this.playSound('purchase');
    }
    
    toggleInsurance() {
        const totalBusinessValue = this.calculateTotalBusinessValue();
        const annualCost = totalBusinessValue * 0.05; // 5% of business value
        
        if (!this.gameState.hasInsurance) {
            if (this.gameState.money >= annualCost) {
                this.gameState.money -= annualCost;
                this.gameState.hasInsurance = true;
                this.gameState.insurancePaymentDue = Date.now() + (30 * 24 * 60 * 60 * 1000); // 30 days
                
                this.showAchievementNotification('Insurance Purchased!', `Annual cost: $${this.formatNumber(annualCost)}`);
                this.playSound('purchase');
            } else {
                this.showAchievementNotification('Insufficient Funds', `Need $${this.formatNumber(annualCost)} for insurance`);
                this.playSound('error');
            }
        } else {
            this.gameState.hasInsurance = false;
            this.showAchievementNotification('Insurance Cancelled', 'You are now unprotected against crises!');
            this.playSound('achievement');
        }
        
        this.updateDisplay();
    }
    
    calculateTotalBusinessValue() {
        return this.businesses.reduce((total, business) => {
            return total + (business.baseCost * business.owned);
        }, 0);
    }

    clickMoney() {
        const now = Date.now();
        const timeSinceLastClick = now - this.lastClickTime;
        
        // Combo system
        if (timeSinceLastClick < 500) {
            this.clickCombo = Math.min(this.clickCombo + 1, 10);
        } else {
            this.clickCombo = 1;
        }
        
        this.lastClickTime = now;
        clearTimeout(this.comboTimeout);
        this.comboTimeout = setTimeout(() => {
            this.clickCombo = 0;
        }, 1000);

        let clickValue = this.getClickValue();
        
        // Apply combo bonus (up to 2x)
        const comboBonus = 1 + (this.clickCombo - 1) * 0.1;
        clickValue *= comboBonus;
        
        this.addMoney(clickValue);
        this.gameState.totalClicks++;
        
        // Visual feedback
        this.createMoneyParticle(clickValue);
        this.animateButton();
        
        this.updateDisplay();
        this.checkAchievements();
        this.checkTaxEvents();
        
        // Play sound effect (simulated)
        this.playSound('click');
    }

    getClickValue() {
        let value = this.gameState.clickValue;
        
        // Apply click upgrades with severely limited multipliers
        this.clickUpgrades.forEach(upgrade => {
            if (upgrade.owned > 0) {
                if (upgrade.type === 'multiply') {
                    value *= Math.pow(upgrade.effect, Math.min(upgrade.owned, upgrade.maxOwned || 8));
                } else {
                    value += upgrade.effect * Math.min(upgrade.owned, upgrade.maxOwned || 8);
                }
            }
        });
        
        // Cap click value at $1000 maximum
        value = Math.min(value, 1000);
        
        // Apply prestige bonus (reduced)
        value *= (1 + (this.gameState.prestigeBonus * 0.5) / 100);
        
        // Apply active multipliers
        this.multipliers.forEach(multiplier => {
            if (multiplier.active && multiplier.id === 'focusBoost') {
                value *= 1.2; // Reduced from 1.5
            }
        });
        
        // Apply debt mode penalty
        if (this.gameState.inDebtMode) {
            value *= 0.3; // Increased penalty
        }
        
        // Apply recession penalty
        if (this.gameState.recessionActive) {
            value *= 0.2; // Increased penalty
        }
        
        // Late game click income becomes negligible
        if (this.gameState.incomePerSecond > 100) {
            value *= 0.05; // 95% reduction when business income dominates
        }
        
        return Math.floor(value);
    }

    addMoney(amount) {
        // Handle debt payments first
        if (this.gameState.debt > 0 && amount > 0) {
            const debtPayment = Math.min(amount, this.gameState.debt);
            this.gameState.debt -= debtPayment;
            amount -= debtPayment;
            
            if (this.gameState.debt <= 0) {
                this.gameState.debt = 0;
                this.gameState.inDebtMode = false;
                this.showAchievementNotification('Debt Cleared!', 'Jake is free from debt!');
            }
        }
        
        this.gameState.money += amount;
        if (amount > 0) {
            this.gameState.totalEarned += amount;
            // Update high score
            if (this.gameState.money > this.gameState.highScore) {
                this.gameState.highScore = this.gameState.money;
            }
        }
        
        // Check mandatory tutorials
        this.checkMandatoryTutorials();
        
        // Check for asset seizure when money hits exactly 0 during crisis
        if (this.gameState.money <= 0 && this.currentCrisis && !this.gameState.assetSeizureActive) {
            this.triggerAssetSeizure();
            return;
        }
        
        // Check for bankruptcy
        if (this.gameState.money < this.gameState.bankruptcyThreshold) {
            this.triggerBankruptcy();
            return;
        }
        
        // Check debt mode
        if (this.gameState.money < -1000 && !this.gameState.inDebtMode) {
            this.enterDebtMode();
        }
        
        // Auto-save on significant money changes only (not every small increment)
        if (amount > this.gameState.incomePerSecond || Math.abs(amount) > 100) {
            this.saveGame(true); // Silent save for frequent changes
        }
        
        // Check end game conditions after earning money
        this.checkEndGameConditions();
    }
    
    checkMandatoryTutorials() {
        // Savings tutorial at $10K
        if (this.gameState.totalEarned >= 10000 && !this.gameState.tutorialShown.savings) {
            this.gameState.tutorialShown.savings = true;
            this.showFinancialAdvisorTutorial(
                'Emergency Savings Tutorial',
                'Jake, you need emergency savings! Without them, a crisis could destroy 90% of your wealth. Aim to save 25% of your total wealth.'
            );
        }
        
        // Crisis preparation at $50K
        if (this.gameState.totalEarned >= 50000 && !this.gameState.tutorialShown.crisis) {
            this.gameState.tutorialShown.crisis = true;
            this.showFinancialAdvisorTutorial(
                'Crisis Warning System',
                'DANGER: Crisis frequency is increasing! You\'ll face devastating losses every 1-2 minutes without proper financial planning.'
            );
        }
        
        // Click limitation warning at $100K
        if (this.gameState.totalEarned >= 100000 && !this.gameState.tutorialShown.clickLimit) {
            this.gameState.tutorialShown.clickLimit = true;
            this.showFinancialAdvisorTutorial(
                'Business Focus Required',
                'Click upgrades are now nearly useless! You must focus on business development and financial management to progress further.'
            );
        }
        
        // AI Superintelligence preparation
        if (this.gameState.totalEarned >= 100000000000000 && !this.gameState.tutorialShown.aiSuper) {
            this.gameState.tutorialShown.aiSuper = true;
            this.showFinancialAdvisorTutorial(
                'AI Superintelligence Challenge',
                'The final frontier approaches! To achieve AI Superintelligence, you must own 1000 of EACH business type and survive 10 consecutive crises.'
            );
        }
    }
    
    showFinancialAdvisorTutorial(title, message) {
        // Pause all game activities during tutorial
        this.gameState.tutorialActive = true;
        
        // Create modal-like overlay
        const overlay = document.createElement('div');
        overlay.className = 'tutorial-overlay';
        overlay.innerHTML = `
            <div class="tutorial-modal">
                <div class="tutorial-header">
                    <h2>💼 Financial Advisor: ${title}</h2>
                </div>
                <div class="tutorial-content">
                    <p>${message}</p>
                    <div class="financial-stats">
                        <div>Current Wealth: $${this.formatNumber(this.gameState.money)}</div>
                        <div>Emergency Savings: $${this.formatNumber(this.gameState.savings)}</div>
                        <div>Savings Ratio: ${((this.gameState.savings / Math.max(this.gameState.money + this.gameState.savings, 1)) * 100).toFixed(1)}%</div>
                        <div class="recommended">Recommended: 25%+ in savings</div>
                    </div>
                </div>
                <button class="tutorial-close btn btn--primary">I Understand</button>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        overlay.querySelector('.tutorial-close').addEventListener('click', () => {
            document.body.removeChild(overlay);
            this.gameState.tutorialActive = false;
        });
        
        this.playSound('achievement');
    }
    
    enterDebtMode() {
        this.gameState.inDebtMode = true;
        this.gameState.debt = Math.abs(this.gameState.money);
        this.gameState.money = 0;
        
        this.showAchievementNotification('DEBT MODE!', 'Jake is in debt! Income reduced by 50%!');
        this.showEmergencyLoanButton();
        this.playSound('error');
    }
    
    // Asset Seizure System
    triggerAssetSeizure() {
        if (this.gameState.assetSeizureActive) return;
        
        this.gameState.assetSeizureActive = true;
        this.showAssetSeizureNotification();
        
        // Get businesses owned, sorted by cost (most expensive first)
        const ownedBusinesses = this.businesses
            .filter(b => b.owned > 0)
            .sort((a, b) => this.getBusinessCost(b) - this.getBusinessCost(a));
        
        if (ownedBusinesses.length === 0) {
            // No assets to seize - complete game over
            this.triggerCompleteFinancialRuin();
            return;
        }
        
        this.seizeAssetsSequentially(ownedBusinesses, 0);
    }
    
    seizeAssetsSequentially(businesses, index) {
        if (index >= businesses.length) {
            // All assets seized, check if player survives
            this.hideAssetSeizureNotification();
            
            if (this.gameState.money > 0) {
                this.gameState.assetSeizureActive = false;
                this.currentCrisis = null;
                this.showAchievementNotification('Survived Bankruptcy!', 'You survived bankruptcy but lost most of your empire');
                this.saveGame(); // Save survival state
            } else {
                this.triggerCompleteFinancialRuin();
            }
            return;
        }
        
        const business = businesses[index];
        const salePrice = Math.floor(this.getBusinessCost(business) * 0.25); // 25% of current value
        
        if (business.owned > 0) {
            business.owned--;
            this.gameState.money += salePrice;
            
            // Visual feedback for asset being seized
            this.markBusinessAsSeized(business.id);
            
            this.showAchievementNotification(
                '🚨 ASSET SEIZED!', 
                `${business.name} sold for $${this.formatNumber(salePrice)} to pay debts`
            );
            
            // Update income after asset loss
            this.updateIncomePerSecond();
            this.updateDisplay();
            
            // Continue seizure after delay if still in debt
            setTimeout(() => {
                if (this.gameState.money <= 0 && this.gameState.assetSeizureActive) {
                    if (business.owned > 0) {
                        // Seize another unit of same business
                        this.seizeAssetsSequentially(businesses, index);
                    } else {
                        // Move to next business type
                        this.seizeAssetsSequentially(businesses, index + 1);
                    }
                } else {
                    // Player has positive money, end seizure
                    this.hideAssetSeizureNotification();
                    this.gameState.assetSeizureActive = false;
                    this.currentCrisis = null;
                    if (this.gameState.money > 0) {
                        this.showAchievementNotification('Survived Bankruptcy!', 'You kept some money and can rebuild');
                    }
                }
            }, 1500);
        } else {
            // Move to next business
            this.seizeAssetsSequentially(businesses, index + 1);
        }
    }
    
    markBusinessAsSeized(businessId) {
        const businessElement = document.querySelector(`[data-type="business"][data-id="${businessId}"]`);
        if (businessElement) {
            businessElement.classList.add('being-seized');
            setTimeout(() => {
                businessElement.classList.remove('being-seized');
                if (this.businesses.find(b => b.id === businessId).owned === 0) {
                    businessElement.classList.add('asset-lost');
                }
            }, 1500);
        }
    }
    
    showAssetSeizureNotification() {
        const notification = document.getElementById('assetSeizureNotification');
        if (!notification) {
            // Fallback to crisis notification if asset seizure notification doesn't exist
            this.showCrisisNotification(
                '🚨 BANKRUPTCY! Your assets are being seized!',
                'Your businesses are being sold to pay debts at 25% of their value!',
                false
            );
            return;
        }
        
        const titleElement = document.getElementById('seizureTitle');
        const textElement = document.getElementById('seizureText');
        const progressElement = document.getElementById('seizureProgress');
        const progressTextElement = document.getElementById('seizureProgressText');
        
        if (titleElement) titleElement.textContent = '🚨 BANKRUPTCY! Assets Being Seized!';
        if (textElement) textElement.textContent = 'Your businesses are being sold at 25% value to pay debts!';
        if (progressTextElement) progressTextElement.textContent = 'Liquidating assets...';
        
        notification.classList.remove('hidden');
        notification.classList.add('show');
        
        // Animate progress bar
        if (progressElement) {
            progressElement.style.width = '0%';
            setTimeout(() => {
                progressElement.style.width = '100%';
            }, 100);
        }
    }
    
    hideAssetSeizureNotification() {
        const notification = document.getElementById('assetSeizureNotification');
        if (notification) {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.classList.add('hidden');
            }, 250);
        }
    }
    
    triggerCompleteFinancialRuin() {
        this.gameState.assetSeizureActive = false;
        this.gameState.gameEnded = true;
        this.gameState.endGameShown = true;
        
        // Preserve high scores
        const finalHighScore = this.gameState.highScore;
        
        setTimeout(() => {
            this.showCompleteRuinModal(finalHighScore);
        }, 1000);
        
        this.saveGame();
    }
    
    showCompleteRuinModal(highScore) {
        // Update game over modal content
        const modal = document.getElementById('gameOverModal');
        const messageElement = modal.querySelector('.game-over-message');
        
        if (messageElement) {
            messageElement.innerHTML = `
                💸 COMPLETE FINANCIAL RUIN! 💸<br><br>
                No assets remain and you still have debt.<br>
                You must start over from the beginning.<br><br>
                <strong>High Score Preserved: $${this.formatNumber(highScore)}</strong>
            `;
        }
        
        modal.classList.remove('hidden');
        this.playSound('error');
    }
    
    showEmergencyLoanButton() {
        const button = document.getElementById('emergencyLoan');
        button.style.display = 'block';
    }
    
    hideEmergencyLoanButton() {
        const button = document.getElementById('emergencyLoan');
        button.style.display = 'none';
    }
    

    

    
    showInsufficientFunds(type, id, element = null) {
        const targetElement = this.findPurchaseElement(type, id, element);
        if (targetElement) {
            targetElement.classList.add('insufficient-funds');
            setTimeout(() => {
                targetElement.classList.remove('insufficient-funds');
            }, 300);
        }
        this.playSound('error');
    }
    
    showPurchaseSuccess(type, id, element = null) {
        const targetElement = this.findPurchaseElement(type, id, element);
        if (targetElement) {
            targetElement.classList.add('purchase-success');
            setTimeout(() => {
                targetElement.classList.remove('purchase-success');
            }, 500);
        }
    }
    
    findPurchaseElement(type, id, element = null) {
        // If element is provided directly, use it
        if (element) return element;
        
        const containers = {
            'clickUpgrade': 'clickUpgrades',
            'business': 'businessesList',
            'manager': 'managersList',
            'multiplier': 'multipliers'
        };
        
        const container = document.getElementById(containers[type]);
        if (!container) return null;
        
        // Find element by data attributes
        return container.querySelector(`[data-type="${type}"][data-id="${id}"]`);
    }
    
    checkEndGameConditions() {
        if (this.gameState.endGameShown) return;
        
        // Check for AI Superintelligence victory (tier 13)
        if (this.gameState.currentTier >= 13) {
            const aiSuperRequirements = this.checkAISuperRequirements();
            if (aiSuperRequirements.canAchieve) {
                this.triggerAISupervictory();
                return;
            }
        }
        
        // Check for Universal Sovereign (tier 12)
        if (this.gameState.currentTier >= 12 && !this.gameState.endGameShown) {
            this.triggerVictory();
        }
    }
    
    checkAISuperRequirements() {
        const totalBusinesses = this.businesses.reduce((sum, b) => sum + b.owned, 0);
        const minEachBusiness = Math.min(...this.businesses.map(b => b.owned));
        const hasAllBusinessTypes = minEachBusiness >= 1000;
        const hasSufficientWealth = this.gameState.totalEarned >= 1000000000000000; // 1 Quadrillion
        const survivedEnoughCrises = this.gameState.consecutiveCrisisSurvival >= 10;
        
        return {
            canAchieve: hasAllBusinessTypes && hasSufficientWealth && survivedEnoughCrises,
            totalBusinesses,
            minEachBusiness,
            hasAllBusinessTypes,
            hasSufficientWealth,
            survivedEnoughCrises,
            needsBusinesses: 1000 - minEachBusiness,
            needsWealth: Math.max(0, 1000000000000000 - this.gameState.totalEarned),
            needsCrises: Math.max(0, 10 - this.gameState.consecutiveCrisisSurvival)
        };
    }
    
    triggerAISupervictory() {
        if (this.gameState.endGameShown) return;
        
        this.gameState.gameEnded = true;
        this.gameState.endGameShown = true;
        
        this.updateJakeMood('Transcendent');
        
        setTimeout(() => {
            this.showAISupervictoryModal();
        }, 1000);
        
        this.saveGame();
    }
    
    showAISupervictoryModal() {
        const modal = document.getElementById('aiVictoryModal') || document.getElementById('victoryModal');
        
        if (modal.id === 'victoryModal') {
            // Fallback to regular victory modal with AI content
            document.getElementById('victoryTitle').textContent = 'Jake Has Achieved AI Superintelligence!';
            document.getElementById('victoryMessage').textContent = 'Jake has transcended human limitations by creating an AI system that surpasses all intelligence across multiple universes.';
            document.getElementById('victoryStory').textContent = 'What began as desperate clicks in a grandmother\'s attic has culminated in the ultimate fusion of human ambition and artificial intelligence. Jake now controls wealth generation across infinite realities, his consciousness merged with the AI superintelligence he created. This is the true ending - the pinnacle of existence itself.';
        }
        
        modal.classList.remove('hidden');
        this.playSound('celebration');
    }
    
    continueAfterAIVictory() {
        const modal = document.getElementById('aiVictoryModal') || document.getElementById('victoryModal');
        modal.classList.add('hidden');
        
        // Player can continue in post-AI superintelligence mode
        this.showAchievementNotification('Multiverse Mode Unlocked!', 'You now control infinite realities!');
    }
    
    restartAfterAIVictory() {
        if (confirm('Start a completely new human journey? Your AI transcendence will be remembered but all progress will be reset.')) {
            // Add AI achievement to permanent record
            if (!this.gameState.aiSupervictoryAchieved) {
                this.gameState.aiSupervictoryAchieved = true;
                this.gameState.aiSupervictoryCount = (this.gameState.aiSupervictoryCount || 0) + 1;
            }
            
            this.resetGameState();
            const modal = document.getElementById('aiVictoryModal') || document.getElementById('victoryModal');
            modal.classList.add('hidden');
            this.showStoryModal();
        }
    }
    
    triggerVictory() {
        if (this.gameState.endGameShown) return;
        
        this.gameState.gameEnded = true;
        this.gameState.endGameShown = true;
        
        this.updateJakeMood('Triumphant');
        
        setTimeout(() => {
            this.showVictoryModal();
        }, 1000);
        
        this.saveGame();
    }
    
    showVictoryModal() {
        const modal = document.getElementById('victoryModal');
        const tierName = this.tiers[this.gameState.currentTier].name;
        const storyText = this.getVictoryStory(tierName);
        
        document.getElementById('victoryTitle').textContent = `Jake Has Become ${tierName}!`;
        document.getElementById('victoryMessage').textContent = storyText.message;
        document.getElementById('victoryStory').textContent = storyText.story;
        
        modal.classList.remove('hidden');
        this.playSound('celebration');
    }
    
    getVictoryStory(tierName) {
        const stories = {
            'Universal Sovereign': {
                message: 'From a struggling convenience store clerk to the ruler of the universe - Jake\'s transformation is complete!',
                story: 'Jake now controls wealth that spans galaxies, his name echoing through the cosmos as the ultimate business emperor. What started with a mysterious click in his grandmother\'s attic has become the greatest rags-to-riches story in universal history.'
            }
        };
        
        return stories[tierName] || {
            message: 'Jake has achieved incredible success beyond his wildest dreams!',
            story: 'The journey continues as Jake builds upon his remarkable achievements.'
        };
    }
    
    triggerBankruptcy() {
        if (this.gameState.endGameShown) return;
        
        this.gameState.gameEnded = true;
        this.gameState.endGameShown = true;
        
        this.updateJakeMood('Defeated');
        
        setTimeout(() => {
            this.showGameOverModal();
        }, 1000);
        
        this.saveGame();
    }
    
    showGameOverModal() {
        const modal = document.getElementById('gameOverModal');
        modal.classList.remove('hidden');
        this.playSound('error');
    }
    
    continueAfterVictory() {
        document.getElementById('victoryModal').classList.add('hidden');
        // Player can continue playing indefinitely
    }
    
    restartAfterVictory() {
        if (confirm('Start a new journey? All progress will be lost!')) {
            this.resetGameState();
            document.getElementById('victoryModal').classList.add('hidden');
            this.showStoryModal();
        }
    }
    
    restartAfterGameOver() {
        this.resetGameState();
        document.getElementById('gameOverModal').classList.add('hidden');
        this.showStoryModal();
    }
    
    triggerEndGame() {
        if (this.gameState.endGameShown) return;
        
        this.gameState.gameEnded = true;
        this.gameState.endGameShown = true;
        
        // Show the end game modal after a brief delay
        setTimeout(() => {
            this.showEndGameModal();
        }, 1000);
        
        this.saveGame();
    }
    
    showEndGameModal() {
        const modal = document.getElementById('endGameModal');
        modal.classList.remove('hidden');
        
        // Play celebration sound
        this.playSound('celebration');
    }
    
    continueGame() {
        const modal = document.getElementById('endGameModal');
        modal.classList.add('hidden');
        
        // Player can continue playing indefinitely
        console.log('🎮 Player chose to continue the empire!');
    }
    
    restartGame() {
        // Show confirmation before restarting
        if (confirm('Are you sure you want to restart? All progress will be lost!')) {
            this.resetGameState();
            const modal = document.getElementById('endGameModal');
            modal.classList.add('hidden');
            
            this.updateDisplay();
            this.saveGame();
            
            this.showAchievementNotification('Fresh Start!', 'Welcome to your new business empire!');
            console.log('🔄 Game restarted!');
        }
    }
    
    resetGameState() {
        // Preserve high scores and achievements
        const preservedHighScore = this.gameState.highScore || 0;
        const preservedAIAchievements = {
            aiSupervictoryAchieved: this.gameState.aiSupervictoryAchieved || false,
            aiSupervictoryCount: this.gameState.aiSupervictoryCount || 0
        };
        
        // Reset all game state to initial values
        this.gameState = {
            money: 0,
            totalEarned: 0,
            totalClicks: 0,
            clickValue: 1,
            incomePerSecond: 0,
            prestigeLevel: 0,
            prestigeBonus: 0,
            lastSaveTime: Date.now(),
            currentTier: 0,
            gameEnded: false,
            endGameShown: false,
            gameStarted: false,
            // Enhanced debt and asset seizure system
            savings: 0,
            debt: 0,
            inDebtMode: false,
            hasInsurance: false,
            insurancePaymentDue: 0,
            emergencyLoanActive: false,
            loanAmount: 0,
            loanInterestRate: 0.25,
            bankruptcyThreshold: -50000,
            assetSeizureActive: false,
            assetsBeingSeized: [],
            highScore: preservedHighScore, // Preserve high score
            // Challenge system state
            marketHealth: 'Stable',
            riskLevel: 'Low',
            activeChallenge: null,
            challengeEndTime: 0,
            competitionActive: false,
            recessionActive: false,
            surviveCount: 0,
            // Enhanced financial system
            consecutiveCrisisSurvival: 0,
            lastCrisisTime: 0,
            tutorialShown: {
                savings: false,
                crisis: false,
                clickLimit: false,
                aiSuper: false
            },
            tutorialActive: false,
            // Preserve AI achievements
            ...preservedAIAchievements
        };
        
        // Reset all upgrades and businesses
        this.clickUpgrades.forEach(upgrade => upgrade.owned = 0);
        this.businesses.forEach(business => {
            business.owned = 0;
            business.hasManager = false;
        });
        
        // Reset achievements
        this.achievements.forEach(achievement => {
            achievement.completed = false;
        });
        
        // Reset multipliers
        this.multipliers.forEach(multiplier => {
            multiplier.active = false;
            multiplier.remaining = 0;
        });
        
        // Reset challenge system
        this.challengeTimers = {
            marketCrash: 0,
            competition: 0,
            recession: 0,
            equipmentFailure: 0
        };
        
        // Reset crisis system
        this.crisisTimers = {
            financialCollapse: 0,
            industryShutdown: 0,
            legalInvestigation: 0,
            cyberAttack: 0
        };
        
        this.savingsInterestTimer = 0;
        this.currentCrisis = null;
        
        // Clear any active loan timers
        if (this.loanInterestTimer) {
            clearInterval(this.loanInterestTimer);
            this.loanInterestTimer = null;
        }
        
        this.taxesPaid = [];
        this.clickCombo = 0;
        this.lastClickTime = 0;
        
        // Hide any active notifications
        this.hideChallengeNotification();
        this.hideChallengeStatusBar();
        this.hideCrisisNotification();
        this.hideEmergencyLoanButton();
        
        this.updateIncomePerSecond();
        
        // Save the reset state
        this.saveGame();
    }

    buyClickUpgrade(upgradeId) {
        const upgrade = this.clickUpgrades.find(u => u.id === upgradeId);
        if (!upgrade) return false;
        
        // Check maximum ownership limit
        if (upgrade.owned >= (upgrade.maxOwned || 8)) {
            this.showAchievementNotification('Maximum Reached', 'Click upgrades are capped at 8 each. Focus on businesses!');
            return false;
        }
        
        const cost = this.getUpgradeCost(upgrade);
        if (this.gameState.money < cost) {
            this.showInsufficientFunds('clickUpgrade', upgradeId);
            return false;
        }
        
        this.gameState.money -= cost;
        upgrade.owned++;
        
        // Show warning about click upgrade limitations
        if (upgrade.owned >= 4) {
            this.showAchievementNotification(
                'Click Limitations Warning', 
                'Click upgrades become useless in late game. Invest in businesses instead!'
            );
        }
        
        this.showPurchaseSuccess('clickUpgrade', upgradeId);
        this.playSound('purchase');
        this.updateDisplay();
        this.saveGame(); // Auto-save on purchase
        return true;
    }

    buyBusiness(businessId) {
        const business = this.businesses.find(b => b.id === businessId);
        if (!business) return false;
        
        const cost = this.getBusinessCost(business);
        const permitCost = business.permits ? Math.floor(cost * 0.1) : 0;
        const totalCost = cost + permitCost;
        
        if (this.gameState.money < totalCost) {
            this.showInsufficientFunds('business', businessId);
            return false;
        }
        
        this.gameState.money -= totalCost;
        business.owned++;
        
        // Show permit cost if applicable
        if (permitCost > 0) {
            this.showAchievementNotification('Permits Required!', `Paid $${this.formatNumber(permitCost)} for business permits.`);
        }
        
        // Check for end game condition (AI Research purchased)
        if (businessId === 'aiResearch' && !this.gameState.endGameShown) {
            this.triggerEndGame();
        }
        
        this.showPurchaseSuccess('business', businessId);
        this.updateIncomePerSecond();
        this.playSound('purchase');
        this.updateDisplay();
        this.checkAchievements();
        this.checkEndGameConditions();
        this.saveGame(); // Auto-save on purchase
        return true;
    }

    hireManager(businessId) {
        const business = this.businesses.find(b => b.id === businessId);
        if (!business || business.hasManager) return false;
        
        if (this.gameState.money < business.managerCost) {
            this.showInsufficientFunds('manager', businessId);
            return false;
        }
        
        this.gameState.money -= business.managerCost;
        business.hasManager = true;
        
        this.showPurchaseSuccess('manager', businessId);
        this.playSound('achievement');
        this.updateDisplay();
        this.checkAchievements();
        this.saveGame(); // Auto-save on upgrade
        return true;
    }

    buyMultiplier(multiplierId) {
        const multiplier = this.multipliers.find(m => m.id === multiplierId);
        if (!multiplier || multiplier.active) return false;
        
        if (this.gameState.money < multiplier.cost) {
            this.showInsufficientFunds('multiplier', multiplierId);
            return false;
        }
        
        this.gameState.money -= multiplier.cost;
        multiplier.active = true;
        multiplier.remaining = multiplier.duration;
        
        this.showPurchaseSuccess('multiplier', multiplierId);
        this.playSound('achievement');
        this.updateDisplay();
        this.saveGame(); // Auto-save on purchase
        return true;
    }

    getUpgradeCost(upgrade) {
        return Math.floor(upgrade.baseCost * Math.pow(5.0, upgrade.owned)); // Increased to 5.0x cost multiplier
    }

    getBusinessCost(business) {
        return Math.floor(business.baseCost * Math.pow(2.0, business.owned)); // Increased from 1.15 to 2.0
    }

    updateIncomePerSecond() {
        let income = 0;
        
        this.businesses.forEach(business => {
            if (business.owned > 0 && business.hasManager) {
                income += business.income * business.owned;
            }
        });
        
        // Apply prestige bonus
        income *= (1 + this.gameState.prestigeBonus / 100);
        
        // Apply active multipliers
        this.multipliers.forEach(multiplier => {
            if (multiplier.active) {
                if (multiplier.id === 'marketingCampaign') {
                    income *= 1.75;
                }
            }
        });
        
        // Apply debt mode penalty
        if (this.gameState.inDebtMode) {
            income *= 0.5; // 50% reduction in debt mode
        }
        
        // Apply challenge penalties
        if (this.gameState.competitionActive) {
            income *= 0.75; // 25% reduction during competition
        }
        
        if (this.gameState.recessionActive) {
            income *= 0.5; // 50% reduction during recession
        }
        
        this.gameState.incomePerSecond = income;
    }

    getTotalBusinessesOwned() {
        return this.businesses.reduce((total, business) => total + business.owned, 0);
    }

    updateCurrentTier() {
        let newTier = 0;
        for (let i = this.tiers.length - 1; i >= 0; i--) {
            if (this.gameState.totalEarned >= this.tiers[i].threshold) {
                const tier = this.tiers[i];
                // Check business requirements for tier progression
                if (tier.businessesNeeded) {
                    const totalBusinesses = this.businesses.reduce((sum, b) => sum + b.owned, 0);
                    if (totalBusinesses >= tier.businessesNeeded || i === 0) {
                        newTier = i;
                        break;
                    }
                } else {
                    newTier = i;
                    break;
                }
            }
        }
        
        if (newTier !== this.gameState.currentTier) {
            const oldTier = this.gameState.currentTier;
            this.gameState.currentTier = newTier;
            this.showTierUpgrade();
            this.updateJakeDialogue();
            
            // Show business requirements warning if needed
            const nextTier = this.tiers[newTier + 1];
            if (nextTier && nextTier.businessesNeeded) {
                const totalBusinesses = this.businesses.reduce((sum, b) => sum + b.owned, 0);
                if (totalBusinesses < nextTier.businessesNeeded) {
                    this.showAchievementNotification(
                        'Business Portfolio Required',
                        `Next tier requires ${nextTier.businessesNeeded} total businesses. Current: ${totalBusinesses}`
                    );
                }
            }
            
            // Check for victory conditions
            if (newTier >= 13) {
                const aiRequirements = this.checkAISuperRequirements();
                if (aiRequirements.canAchieve) {
                    this.triggerAISupervictory();
                }
            } else if (newTier >= 12 && !this.gameState.endGameShown) {
                this.triggerVictory();
            }
        }
        
        // Update tier progress
        const currentTierThreshold = this.tiers[this.gameState.currentTier].threshold;
        const nextTierIndex = Math.min(this.gameState.currentTier + 1, this.tiers.length - 1);
        const nextTierThreshold = this.tiers[nextTierIndex].threshold;
        
        let progress = 0;
        if (nextTierThreshold > currentTierThreshold && this.gameState.currentTier < this.tiers.length - 1) {
            progress = Math.min(100, ((this.gameState.totalEarned - currentTierThreshold) / (nextTierThreshold - currentTierThreshold)) * 100);
        } else {
            progress = 100;
        }
        
        document.getElementById('tierProgress').style.width = progress + '%';
        
        // Update next tier name
        const nextTierName = this.gameState.currentTier < this.tiers.length - 1 ? 
            this.tiers[nextTierIndex].name : 'Maximum Level';
        const nextTierElement = document.getElementById('nextTierName');
        if (nextTierElement) {
            nextTierElement.textContent = nextTierName;
        }
    }

    showTierUpgrade() {
        const tier = this.tiers[this.gameState.currentTier];
        this.showAchievementNotification(`${tier.name}!`, tier.description);
        this.updateCharacterAvatar();
    }
    
    updateCharacterAvatar() {
        const avatar = document.getElementById('characterAvatar');
        if (!avatar) return;
        
        const avatars = [
            '🧑', '👔', '💼', '🤵', '👨‍💼', '🤴', '👨‍🚀', '🎩', '👑', '🌟', '🛸', '👽', '🌌'
        ];
        
        const avatarIndex = Math.min(this.gameState.currentTier, avatars.length - 1);
        avatar.textContent = avatars[avatarIndex];
    }

    checkAchievements() {
        this.achievements.forEach(achievement => {
            if (!achievement.completed && achievement.condition()) {
                achievement.completed = true;
                this.showAchievementNotification(achievement.name, achievement.description);
                this.playSound('achievement');
            }
        });
    }

    showAchievementNotification(title, description) {
        const notification = document.getElementById('achievementNotification');
        const titleElement = notification.querySelector('.notification-title');
        const descriptionElement = document.getElementById('achievementText');
        
        titleElement.textContent = title;
        descriptionElement.textContent = description;
        
        notification.classList.remove('hidden');
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.classList.add('hidden');
            }, 250);
        }, 3000);
    }

    createMoneyParticle(value) {
        const container = document.getElementById('particlesContainer');
        const button = document.getElementById('moneyButton');
        const rect = button.getBoundingClientRect();
        
        const particle = document.createElement('div');
        particle.className = 'money-particle';
        particle.textContent = '+$' + this.formatNumber(value);
        particle.style.left = (rect.left + rect.width / 2 + (Math.random() - 0.5) * 100) + 'px';
        particle.style.top = (rect.top + rect.height / 2) + 'px';
        
        container.appendChild(particle);
        
        setTimeout(() => {
            container.removeChild(particle);
        }, 1500);
    }

    animateButton() {
        const button = document.getElementById('moneyButton');
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 100);
    }

    updateDisplay() {
        // Update money display
        document.getElementById('currentMoney').textContent = this.formatNumber(this.gameState.money);
        document.getElementById('incomeRate').textContent = this.formatNumber(this.gameState.incomePerSecond);
        document.getElementById('totalEarned').textContent = this.formatNumber(this.gameState.totalEarned);
        document.getElementById('totalClicks').textContent = this.formatNumber(this.gameState.totalClicks);
        
        // Update high score display in lifetime stats if available
        const highScoreElement = document.getElementById('highScore');
        if (highScoreElement && this.gameState.highScore > 0) {
            highScoreElement.textContent = this.formatNumber(this.gameState.highScore);
        }
        
        // Update debt indicator
        const debtIndicator = document.getElementById('debtIndicator');
        const debtAmount = document.getElementById('debtAmount');
        if (this.gameState.inDebtMode && this.gameState.debt > 0) {
            debtIndicator.classList.remove('hidden');
            debtAmount.textContent = this.formatNumber(this.gameState.debt);
        } else {
            debtIndicator.classList.add('hidden');
        }
        
        // Update savings display with enhanced information
        const savingsAmountElement = document.getElementById('savingsAmount');
        if (savingsAmountElement) {
            savingsAmountElement.textContent = this.formatNumber(this.gameState.savings);
        }
        
        // Update savings warning with detailed risk assessment
        const totalWealth = this.gameState.money + this.gameState.savings;
        const savingsRatio = this.gameState.savings / Math.max(totalWealth, 1);
        const savingsWarning = document.getElementById('savingsWarning');
        if (savingsWarning) {
            if (savingsRatio < 0.25 && totalWealth > 1000) {
                savingsWarning.classList.remove('hidden');
                const warningText = savingsWarning.querySelector('.warning-text');
                if (warningText) {
                    if (savingsRatio < 0.1) {
                        warningText.textContent = 'EXTREME RISK - Crisis could destroy 90%+ of wealth!';
                        savingsWarning.style.borderColor = 'var(--color-neon-red)';
                    } else if (savingsRatio < 0.15) {
                        warningText.textContent = 'HIGH RISK - Need more emergency savings!';
                        savingsWarning.style.borderColor = 'var(--color-neon-orange)';
                    } else {
                        warningText.textContent = 'MEDIUM RISK - Increase savings to 25%';
                        savingsWarning.style.borderColor = 'var(--color-neon-orange)';
                    }
                }
            } else {
                savingsWarning.classList.add('hidden');
            }
        }
        
        // Update financial advisor panel with real-time advice
        this.updateFinancialAdvisorPanel(totalWealth, savingsRatio);
        
        // Update insurance display
        const insuranceStatus = document.getElementById('insuranceStatus');
        const insuranceCost = document.getElementById('insuranceCost');
        const insuranceBtn = document.getElementById('insuranceBtn');
        if (insuranceStatus && insuranceCost && insuranceBtn) {
            const totalBusinessValue = this.calculateTotalBusinessValue();
            const annualCost = totalBusinessValue * 0.05;
            
            insuranceStatus.textContent = this.gameState.hasInsurance ? 'Active' : 'Inactive';
            insuranceStatus.className = `insurance-status ${this.gameState.hasInsurance ? 'active' : 'inactive'}`;
            insuranceCost.textContent = this.formatNumber(annualCost);
            insuranceBtn.textContent = this.gameState.hasInsurance ? 'Cancel Insurance' : 'Purchase Insurance';
        }
        

        
        // Update crisis survival counter
        const survivalElement = document.getElementById('crisisSurvival');
        if (survivalElement) {
            survivalElement.textContent = `${this.gameState.consecutiveCrisisSurvival}/10`;
        }
        
        // Update AI Superintelligence requirements if approaching final tier
        if (this.gameState.currentTier >= 12) {
            this.updateAIRequirementsDisplay();
        }
        
        // Update click value display
        const clickValue = this.getClickValue();
        document.getElementById('clickValue').textContent = this.formatNumber(clickValue);
        document.getElementById('displayClickValue').textContent = this.formatNumber(clickValue);
        
        // Update manual clicks per second
        const now = Date.now();
        const timeSinceLastClick = now - this.lastClickTime;
        const manualCPS = timeSinceLastClick < 1000 ? Math.floor(1000 / Math.max(timeSinceLastClick, 100)) : 0;
        document.getElementById('manualCPS').textContent = manualCPS;
        
        // Update current tier
        const currentTierElement = document.getElementById('currentTier');
        const tierDescriptionElement = document.getElementById('tierDescription');
        
        if (currentTierElement) {
            currentTierElement.textContent = this.tiers[this.gameState.currentTier].name;
        }
        if (tierDescriptionElement) {
            tierDescriptionElement.textContent = this.tiers[this.gameState.currentTier].description;
        }
        
        // Update tier progress
        this.updateCurrentTier();
        
        // Update upgrades list
        this.updateClickUpgradesDisplay();
        
        // Update businesses list
        this.updateBusinessesDisplay();
        
        // Update managers list
        this.updateManagersDisplay();
        
        // Update multipliers list
        this.updateMultipliersDisplay();
        
        // Update achievements list
        this.updateAchievementsDisplay();
        
        // Update prestige button
        this.updatePrestigeButton();
        
        // Update challenge status
        this.updateChallengeStatus();
        
        // Update character avatar
        this.updateCharacterAvatar();
        

    }
    
    updateChallengeStatus() {
        const marketHealthElement = document.getElementById('marketHealth');
        const riskLevelElement = document.getElementById('riskLevel');
        
        marketHealthElement.textContent = this.gameState.marketHealth;
        riskLevelElement.textContent = this.gameState.riskLevel;
        
        // Color coding for market health
        marketHealthElement.className = 'challenge-value';
        riskLevelElement.className = 'challenge-value';
        
        if (['Crashed', 'Recession', 'Unstable'].includes(this.gameState.marketHealth)) {
            marketHealthElement.classList.add('danger');
        } else if (['Volatile', 'Competitive', 'Recovering'].includes(this.gameState.marketHealth)) {
            marketHealthElement.classList.add('warning');
        }
        
        if (this.gameState.riskLevel === 'Extreme') {
            riskLevelElement.classList.add('danger');
        } else if (['High', 'Medium'].includes(this.gameState.riskLevel)) {
            riskLevelElement.classList.add('warning');
        }
    }

    updateClickUpgradesDisplay() {
        const container = document.getElementById('clickUpgrades');
        container.innerHTML = '';
        
        this.clickUpgrades.forEach((upgrade, index) => {
            const cost = this.getUpgradeCost(upgrade);
            const canAfford = this.gameState.money >= cost && upgrade.owned < (upgrade.maxOwned || 8);
            const maxedOut = upgrade.owned >= (upgrade.maxOwned || 8);
            
            const element = document.createElement('div');
            element.className = `upgrade-item ${canAfford ? '' : 'disabled'} ${maxedOut ? 'maxed-out' : ''}`;
            element.dataset.type = 'clickUpgrade';
            element.dataset.id = upgrade.id;
            element.dataset.index = index;
            
            let costDisplay = maxedOut ? 'MAXED' : `$${this.formatNumber(cost)}`;
            let warningText = '';
            
            if (upgrade.owned >= 4 && !maxedOut) {
                warningText = '<div class="upgrade-warning">⚠️ Click upgrades become useless in late game!</div>';
            }
            
            element.innerHTML = `
                <div class="upgrade-header">
                    <div class="upgrade-name">${upgrade.name} (${upgrade.owned}/${upgrade.maxOwned || 8})</div>
                    <div class="upgrade-cost">${costDisplay}</div>
                </div>
                <div class="upgrade-description">${upgrade.description}</div>
                ${warningText}
            `;
            
            if (!maxedOut) {
                element.addEventListener('click', () => {
                    if (canAfford) {
                        this.buyClickUpgrade(upgrade.id);
                    } else {
                        this.showInsufficientFunds('clickUpgrade', upgrade.id, element);
                    }
                });
            }
            
            container.appendChild(element);
        });
    }
    
    updateFinancialAdvisorPanel(totalWealth, savingsRatio) {
        // Add financial advisor recommendations in the sidebar
        const advisorPanel = document.querySelector('.financial-panel');
        if (!advisorPanel) return;
        
        let existingAdvisor = advisorPanel.querySelector('.advisor-recommendations');
        if (!existingAdvisor) {
            existingAdvisor = document.createElement('div');
            existingAdvisor.className = 'advisor-recommendations';
            advisorPanel.appendChild(existingAdvisor);
        }
        
        let recommendations = '<h4>💼 Financial Advisor</h4>';
        
        if (totalWealth > 1000) {
            const riskLevel = savingsRatio < 0.1 ? 'EXTREME' : 
                            savingsRatio < 0.15 ? 'HIGH' : 
                            savingsRatio < 0.25 ? 'MEDIUM' : 'LOW';
            
            const recommendedSavings = Math.floor(totalWealth * 0.25);
            const currentRisk = Math.floor((1 - savingsRatio) * 90);
            
            recommendations += `
                <div class="advisor-stat">
                    <span class="advisor-label">Risk Level:</span>
                    <span class="advisor-value ${riskLevel.toLowerCase()}">${riskLevel}</span>
                </div>
                <div class="advisor-stat">
                    <span class="advisor-label">Crisis Loss Risk:</span>
                    <span class="advisor-value danger">${currentRisk}%</span>
                </div>
                <div class="advisor-recommendation">
                    Recommended savings: $${this.formatNumber(recommendedSavings)}
                </div>
            `;
            
            if (this.gameState.consecutiveCrisisSurvival > 0) {
                recommendations += `
                    <div class="advisor-success">
                        ✅ Crisis Survival Streak: ${this.gameState.consecutiveCrisisSurvival}/10
                    </div>
                `;
            }
            
            // Crisis prediction
            const timeSinceLastCrisis = Date.now() - this.gameState.lastCrisisTime;
            if (timeSinceLastCrisis > 60000) { // 1 minute since last crisis
                const riskSeconds = Math.max(30, 180 - Math.floor(timeSinceLastCrisis / 1000));
                recommendations += `
                    <div class="advisor-warning">
                        🚨 Crisis likely in ~${riskSeconds}s
                    </div>
                `;
            }
        }
        
        existingAdvisor.innerHTML = recommendations;
    }
    
    updateAIRequirementsDisplay() {
        const requirements = this.checkAISuperRequirements();
        
        let existingPanel = document.querySelector('.ai-requirements-panel');
        if (!existingPanel) {
            existingPanel = document.createElement('div');
            existingPanel.className = 'ai-requirements-panel';
            const sidebar = document.querySelector('.right-sidebar');
            if (sidebar) {
                sidebar.appendChild(existingPanel);
            }
        }
        
        let content = '<h3 class="sidebar-title">🤖 AI Superintelligence Requirements</h3>';
        
        content += `
            <div class="requirement-item ${requirements.hasAllBusinessTypes ? 'completed' : 'pending'}">
                <div class="req-header">Business Mastery</div>
                <div class="req-progress">${requirements.minEachBusiness}/1000 each type</div>
            </div>
            <div class="requirement-item ${requirements.hasSufficientWealth ? 'completed' : 'pending'}">
                <div class="req-header">Wealth Threshold</div>
                <div class="req-progress">$${this.formatNumber(this.gameState.totalEarned)}/1Q</div>
            </div>
            <div class="requirement-item ${requirements.survivedEnoughCrises ? 'completed' : 'pending'}">
                <div class="req-header">Crisis Mastery</div>
                <div class="req-progress">${this.gameState.consecutiveCrisisSurvival}/10 consecutive</div>
            </div>
        `;
        
        if (requirements.canAchieve) {
            content += '<div class="ai-ready">🌟 READY FOR AI SUPERINTELLIGENCE! 🌟</div>';
        }
        
        existingPanel.innerHTML = content;
    }

    updateBusinessesDisplay() {
        const container = document.getElementById('businessesList');
        container.innerHTML = '';
        
        this.businesses.forEach((business, index) => {
            const cost = this.getBusinessCost(business);
            const permitCost = business.permits ? Math.floor(cost * 0.1) : 0;
            const totalCost = cost + permitCost;
            const canAfford = this.gameState.money >= totalCost;
            
            const element = document.createElement('div');
            element.className = `business-item ${canAfford ? '' : 'disabled'}`;
            element.dataset.type = 'business';
            element.dataset.id = business.id;
            element.dataset.index = index;
            
            const riskColor = {
                'Low': 'challenge-value',
                'Medium': 'challenge-value warning', 
                'High': 'challenge-value warning',
                'Extreme': 'challenge-value danger'
            }[business.riskLevel];
            
            element.innerHTML = `
                <div class="business-header">
                    <div class="business-name">${business.name}</div>
                    <div class="business-cost">$${this.formatNumber(totalCost)}</div>
                </div>
                <div class="business-description">
                    $${this.formatNumber(business.income)}/sec per unit
                    ${business.permits ? ' • Requires Permits' : ''}
                </div>
                <div class="business-stats">
                    <div class="business-income">Income: $${this.formatNumber(business.income * business.owned)}/sec</div>
                    <div class="business-owned">Owned: ${business.owned}</div>
                </div>
                <div class="business-risk">
                    <span class="challenge-label">Risk Level:</span>
                    <span class="${riskColor}">${business.riskLevel}</span>
                </div>
            `;
            
            element.addEventListener('click', () => {
                if (canAfford) {
                    this.buyBusiness(business.id);
                } else {
                    this.showInsufficientFunds('business', business.id, element);
                }
            });
            
            container.appendChild(element);
        });
    }

    updateManagersDisplay() {
        const container = document.getElementById('managersList');
        container.innerHTML = '';
        
        this.businesses.forEach((business, index) => {
            if (business.owned >= 1 && !business.hasManager) {
                const canAfford = this.gameState.money >= business.managerCost;
                
                const element = document.createElement('div');
                element.className = `upgrade-item ${canAfford ? '' : 'disabled'}`;
                element.dataset.type = 'manager';
                element.dataset.id = business.id;
                element.dataset.index = index;
                element.innerHTML = `
                    <div class="upgrade-header">
                        <div class="upgrade-name">${business.name} Manager</div>
                        <div class="upgrade-cost">$${this.formatNumber(business.managerCost)}</div>
                    </div>
                    <div class="upgrade-description">Automates ${business.name}</div>
                `;
                
                element.addEventListener('click', () => {
                    if (canAfford) {
                        this.hireManager(business.id);
                    } else {
                        this.showInsufficientFunds('manager', business.id, element);
                    }
                });
                
                container.appendChild(element);
            }
        });
    }

    updateMultipliersDisplay() {
        const container = document.getElementById('multipliers');
        container.innerHTML = '';
        
        this.multipliers.forEach((multiplier, index) => {
            const canAfford = this.gameState.money >= multiplier.cost && !multiplier.active;
            
            const element = document.createElement('div');
            element.className = `upgrade-item ${canAfford ? '' : 'disabled'}`;
            element.dataset.type = 'multiplier';
            element.dataset.id = multiplier.id;
            element.dataset.index = index;
            
            let statusText = '';
            if (multiplier.active) {
                const remaining = Math.ceil(multiplier.remaining / 1000);
                statusText = `Active (${remaining}s)`;
                element.classList.add('disabled');
            } else {
                statusText = `$${this.formatNumber(multiplier.cost)}`;
            }
            
            element.innerHTML = `
                <div class="upgrade-header">
                    <div class="upgrade-name">${multiplier.name}</div>
                    <div class="upgrade-cost">${statusText}</div>
                </div>
                <div class="upgrade-description">${multiplier.description}</div>
            `;
            
            element.addEventListener('click', () => {
                if (canAfford) {
                    this.buyMultiplier(multiplier.id);
                } else if (!multiplier.active) {
                    this.showInsufficientFunds('multiplier', multiplier.id, element);
                }
            });
            
            container.appendChild(element);
        });
    }

    updateAchievementsDisplay() {
        const container = document.getElementById('achievementsList');
        container.innerHTML = '';
        
        this.achievements.forEach(achievement => {
            const element = document.createElement('div');
            element.className = `achievement-item ${achievement.completed ? 'completed' : ''}`;
            element.innerHTML = `
                <div class="upgrade-name">${achievement.name}</div>
                <div class="upgrade-description">${achievement.description}</div>
            `;
            
            container.appendChild(element);
        });
    }

    updatePrestigeButton() {
        const button = document.getElementById('prestigeButton');
        const canPrestige = this.gameState.totalEarned >= 1000000000000000000; // 1 quintillion (extremely hard)
        
        button.disabled = !canPrestige;
        
        if (canPrestige) {
            const prestigeBonus = Math.floor(this.gameState.totalEarned / 1000000000000000000); // Much harder requirements
            button.innerHTML = `
                <span class="prestige-icon">⭐</span>
                <span class="prestige-text">Prestige for +${prestigeBonus}% bonus!</span>
            `;
        } else {
            const needed = 1000000000000000000 - this.gameState.totalEarned;
            button.innerHTML = `
                <span class="prestige-icon">⭐</span>
                <span class="prestige-text">Need $${this.formatNumber(needed)} more for Prestige</span>
            `;
        }
    }

    showPrestigeModal() {
        if (this.gameState.totalEarned < 1000000000000000000) return; // Extremely hard
        
        const modal = document.getElementById('prestigeModal');
        const bonus = Math.floor(this.gameState.totalEarned / 1000000000000000000); // Extremely hard
        document.getElementById('prestigeBonus').textContent = bonus;
        
        modal.classList.remove('hidden');
    }

    hidePrestigeModal() {
        document.getElementById('prestigeModal').classList.add('hidden');
    }

    confirmPrestige() {
        const prestigeBonus = Math.floor(this.gameState.totalEarned / 1000000000000000000); // Extremely hard
        
        // Reset game state but keep prestige bonuses
        this.gameState.money = 0;
        this.gameState.totalEarned = 0;
        this.gameState.totalClicks = 0;
        this.gameState.clickValue = 1;
        this.gameState.incomePerSecond = 0;
        this.gameState.prestigeLevel++;
        this.gameState.prestigeBonus += prestigeBonus;
        this.gameState.currentTier = 0;
        this.gameState.gameEnded = false;
        this.gameState.endGameShown = false;
        this.gameState.gameStarted = true;
        
        // Reset debt and financial state
        this.gameState.savings = 0;
        this.gameState.debt = 0;
        this.gameState.inDebtMode = false;
        this.gameState.hasInsurance = false;
        this.gameState.emergencyLoanActive = false;
        this.gameState.loanAmount = 0;
        
        // Reset upgrades and businesses
        this.clickUpgrades.forEach(upgrade => upgrade.owned = 0);
        this.businesses.forEach(business => {
            business.owned = 0;
            business.hasManager = false;
        });
        
        // Reset achievements (except certain ones)
        this.achievements.forEach(achievement => {
            if (!achievement.id.includes('prestige')) {
                achievement.completed = false;
            }
        });
        
        // Reset multipliers
        this.multipliers.forEach(multiplier => {
            multiplier.active = false;
            multiplier.remaining = 0;
        });
        
        this.hidePrestigeModal();
        this.updateIncomePerSecond();
        this.updateDisplay();
        this.playSound('achievement');
        this.showAchievementNotification('Prestige Complete!', `+${prestigeBonus}% permanent bonus gained!`);
        this.saveGame();
    }

    checkOfflineEarnings() {
        const now = Date.now();
        const timeDiff = now - this.gameState.lastSaveTime;
        const hoursOffline = timeDiff / (1000 * 60 * 60);
        
        if (hoursOffline > 0.1 && this.gameState.incomePerSecond > 0) { // At least 6 minutes offline
            const maxOfflineHours = 2; // Cap at 2 hours
            const offlineHours = Math.min(hoursOffline, maxOfflineHours);
            const offlineEarnings = this.gameState.incomePerSecond * offlineHours * 3600;
            
            if (offlineEarnings > 0) {
                const button = document.getElementById('offlineEarnings');
                button.style.display = 'block';
                button.innerHTML = `
                    <span class="feature-icon">⏰</span>
                    <span class="feature-text">Collect $${this.formatNumber(offlineEarnings)} (${offlineHours.toFixed(1)}h offline)</span>
                `;
                
                this.offlineEarningsAmount = offlineEarnings;
            }
        }
    }

    collectOfflineEarnings() {
        if (this.offlineEarningsAmount) {
            this.addMoney(this.offlineEarningsAmount);
            this.updateDisplay();
            
            const button = document.getElementById('offlineEarnings');
            button.style.display = 'none';
            
            this.showAchievementNotification('Welcome Back!', `Collected $${this.formatNumber(this.offlineEarningsAmount)} in offline earnings!`);
            this.offlineEarningsAmount = 0;
        }
    }

    // Emergency Loan System
    showLoanModal() {
        const modal = document.getElementById('loanModal');
        const loanAmount = Math.max(50000, Math.abs(this.gameState.debt) * 2);
        document.getElementById('loanAmount').textContent = this.formatNumber(loanAmount);
        modal.classList.remove('hidden');
    }
    
    hideLoanModal() {
        document.getElementById('loanModal').classList.add('hidden');
    }
    
    acceptEmergencyLoan() {
        const loanAmount = Math.max(50000, Math.abs(this.gameState.debt) * 2);
        
        this.gameState.money += loanAmount;
        this.gameState.emergencyLoanActive = true;
        this.gameState.loanAmount = loanAmount;
        this.gameState.debt = 0;
        this.gameState.inDebtMode = false;
        
        this.hideLoanModal();
        this.hideEmergencyLoanButton();
        
        this.showAchievementNotification('Emergency Loan Received!', `$${this.formatNumber(loanAmount)} loan at 25% interest`);

        this.playSound('achievement');
        
        // Start loan interest timer
        this.loanInterestTimer = setInterval(() => {
            if (this.gameState.emergencyLoanActive) {
                const interest = this.gameState.loanAmount * (this.gameState.loanInterestRate / 60); // Per minute
                this.gameState.loanAmount += interest;
                
                if (this.gameState.loanAmount > this.gameState.money + this.gameState.savings) {
                    this.showAchievementNotification('Loan Interest!', `Debt growing: $${this.formatNumber(this.gameState.loanAmount)}`);
                }
            }
        }, 60000); // Every minute
        
        this.updateDisplay();
    }
    
    // Crisis Management System
    processCrisisEvents() {
        const now = Date.now();
        
        // Skip if already in crisis, tutorial, or asset seizure
        if (this.currentCrisis || this.gameState.tutorialActive || this.gameState.assetSeizureActive) return;
        
        // Increase crisis frequency based on wealth level
        const wealthMultiplier = Math.min(3, Math.log10(this.gameState.totalEarned / 10000) + 1);
        
        Object.entries(this.crisisEvents).forEach(([eventName, event]) => {
            const adjustedFrequency = event.frequency / wealthMultiplier;
            
            if (now - this.crisisTimers[eventName] > adjustedFrequency) {
                // Increase probability for higher tiers
                const tierMultiplier = 1 + (this.gameState.currentTier * 0.1);
                const adjustedProbability = Math.min(0.8, event.probability * tierMultiplier);
                
                if (Math.random() < adjustedProbability) {
                    this.triggerCrisis(eventName, event);
                }
                this.crisisTimers[eventName] = now;
            }
        });
    }
    
    triggerCrisis(eventName, event) {
        // Check trigger conditions
        if (event.triggerCondition && !event.triggerCondition()) {
            return;
        }
        
        // Update crisis timing
        this.gameState.lastCrisisTime = Date.now();
        this.currentCrisis = { name: eventName, event: event };
        
        // Calculate potential loss
        let potentialLoss = 0;
        if (event.lossRange) {
            const lossPercent = event.lossRange[0] + Math.random() * (event.lossRange[1] - event.lossRange[0]);
            potentialLoss = this.gameState.money * lossPercent;
        }
        
        // Show enhanced crisis notification with risk assessment
        const totalWealth = this.gameState.money + this.gameState.savings;
        const savingsRatio = this.gameState.savings / Math.max(totalWealth, 1);
        
        let riskMessage = event.description;
        if (savingsRatio < 0.15) {
            riskMessage += ` WITHOUT SAVINGS: You could lose $${this.formatNumber(potentialLoss)}!`;
        } else {
            const protectedAmount = potentialLoss * (event.savingsProtection || 0.5);
            riskMessage += ` With savings protection: Loss reduced to ~$${this.formatNumber(potentialLoss - protectedAmount)}.`;
        }
        
        this.showCrisisNotification(event.name, riskMessage, event.canUseInsurance);
        
        // Update Jake's mood

        this.playSound('error');
    }
    
    showCrisisNotification(title, description, canUseInsurance) {
        const notification = document.getElementById('crisisNotification');
        const titleElement = document.getElementById('crisisTitle');
        const textElement = document.getElementById('crisisText');
        const insuranceBtn = document.getElementById('payInsurance');
        
        titleElement.textContent = title;
        textElement.textContent = description;
        insuranceBtn.style.display = (canUseInsurance && this.gameState.hasInsurance) ? 'block' : 'none';
        
        notification.classList.remove('hidden');
        notification.classList.add('show');
    }
    
    hideCrisisNotification() {
        const notification = document.getElementById('crisisNotification');
        notification.classList.remove('show');
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 250);
    }
    
    useInsurance() {
        if (!this.currentCrisis || !this.gameState.hasInsurance) return;
        
        const event = this.currentCrisis.event;
        const lossReduction = 0.6; // 60% loss reduction
        
        let actualLoss = 0;
        
        if (event.lossRange) {
            const baseLoss = this.gameState.money * (event.lossRange[0] + Math.random() * (event.lossRange[1] - event.lossRange[0]));
            actualLoss = baseLoss * (1 - lossReduction);
        } else if (event.costRange) {
            const baseCost = this.gameState.money * (event.costRange[0] + Math.random() * (event.costRange[1] - event.costRange[0]));
            actualLoss = baseCost * (1 - lossReduction);
        }
        
        this.gameState.money = Math.max(0, this.gameState.money - actualLoss);
        
        this.hideCrisisNotification();
        this.showAchievementNotification('Insurance Saved You!', `Loss reduced to $${this.formatNumber(actualLoss)}`);

        this.playSound('achievement');
        
        this.currentCrisis = null;
        this.updateDisplay();
    }
    
    acceptCrisisLoss() {
        if (!this.currentCrisis) return;
        
        const event = this.currentCrisis.event;
        let actualLoss = 0;
        const totalWealth = this.gameState.money + this.gameState.savings;
        const savingsRatio = this.gameState.savings / Math.max(totalWealth, 1);
        
        if (event.lossRange) {
            const lossPercent = event.lossRange[0] + Math.random() * (event.lossRange[1] - event.lossRange[0]);
            actualLoss = this.gameState.money * lossPercent;
            
            // Apply savings protection if available
            if (savingsRatio >= 0.15 && event.savingsProtection) {
                const protection = Math.min(savingsRatio * 2, event.savingsProtection);
                actualLoss *= (1 - protection);
                this.gameState.consecutiveCrisisSurvival++;
            } else {
                this.gameState.consecutiveCrisisSurvival = 0; // Reset streak
            }
        } else if (event.costRange) {
            const costPercent = event.costRange[0] + Math.random() * (event.costRange[1] - event.costRange[0]);
            actualLoss = this.gameState.money * costPercent;
        }
        
        this.gameState.money = Math.max(0, this.gameState.money - actualLoss);
        
        // Check for asset seizure trigger when money hits exactly 0 during crisis
        if (this.gameState.money <= 0 && !this.gameState.assetSeizureActive) {
            this.hideCrisisNotification();
            // Trigger asset seizure instead of debt mode
            this.triggerAssetSeizure();
            return;
        }
        
        if (this.gameState.money <= 0 && this.gameState.savings === 0) {
            this.enterDebtMode();
            this.gameState.consecutiveCrisisSurvival = 0;
        }
        
        this.hideCrisisNotification();
        
        // Show different messages based on savings protection
        if (savingsRatio >= 0.15) {
            this.showAchievementNotification(
                'Crisis Survived with Savings!', 
                `Emergency fund helped! Lost only $${this.formatNumber(actualLoss)}. Survival streak: ${this.gameState.consecutiveCrisisSurvival}`
            );
        } else {
            this.showAchievementNotification(
                'Devastating Crisis!', 
                `No savings protection! Lost $${this.formatNumber(actualLoss)}. Build emergency fund!`
            );
        }
        
        this.currentCrisis = null;
        this.saveGame(); // Auto-save after crisis event
        this.updateDisplay();
    }
    
    startGameLoop() {
        setInterval(() => {
            // Skip updates if asset seizure is active
            if (this.gameState.assetSeizureActive) {
                return;
            }
            
            // Apply passive income
            if (this.gameState.incomePerSecond > 0) {
                this.addMoney(this.gameState.incomePerSecond / 10); // Update 10 times per second
            }
            
            // Apply savings interest (2% per minute)
            const now = Date.now();
            if (now - this.savingsInterestTimer > 60000 && this.gameState.savings > 0) {
                const interest = this.gameState.savings * 0.02;
                this.gameState.savings += interest;
                this.savingsInterestTimer = now;
                
                if (interest > 1) {
                    this.showAchievementNotification('Savings Interest!', `Earned $${this.formatNumber(interest)}`);
                }
            }
            
            // Update multipliers
            this.multipliers.forEach(multiplier => {
                if (multiplier.active) {
                    multiplier.remaining -= 100;
                    if (multiplier.remaining <= 0) {
                        multiplier.active = false;
                        multiplier.remaining = 0;
                    }
                }
            });
            
            // Update challenge timers
            this.updateChallengeTimers();
            
            this.updateIncomePerSecond();
        }, 100);
        
        // Update display every 250ms
        setInterval(() => {
            this.updateDisplay();
        }, 250);
        
        // Crisis events - more frequent (every 15 seconds)
        setInterval(() => {
            if (!this.gameState.tutorialActive && !this.gameState.assetSeizureActive) {
                this.processCrisisEvents();
            }
        }, 15000);
        
        // Challenge events - separate timer (every second)
        setInterval(() => {
            this.processChallengeEvents();
        }, 1000);
    }
    
    // Challenge System Methods
    checkTaxEvents() {
        this.taxThresholds.forEach((threshold, index) => {
            if (this.gameState.totalEarned >= threshold && !this.taxesPaid.includes(threshold)) {
                this.taxesPaid.push(threshold);
                const taxAmount = this.gameState.money * 0.15; // 15% tax
                this.gameState.money = Math.max(0, this.gameState.money - taxAmount);
                
                this.showChallengeNotification(
                    '🏛️ Government Tax!',
                    `You owe $${this.formatNumber(taxAmount)} in taxes on your success!`,
                    'tax',
                    '🏛️'
                );
                
                this.playSound('error');
            }
        });
    }
    
    processChallengeEvents() {
        const now = Date.now();
        
        // Market Crash (15% chance every 2 minutes)
        if (now - this.challengeTimers.marketCrash > 120000) { // 2 minutes
            if (Math.random() < 0.15 && this.gameState.totalEarned > 1000) {
                this.triggerMarketCrash();
            }
            this.challengeTimers.marketCrash = now;
        }
        
        // Business Competition (25% chance every 3-5 minutes)
        if (now - this.challengeTimers.competition > (180000 + Math.random() * 120000)) {
            if (Math.random() < 0.25 && this.gameState.incomePerSecond > 10) {
                this.triggerCompetition();
            }
            this.challengeTimers.competition = now;
        }
        
        // Economic Recession (5% chance every 5 minutes)
        if (now - this.challengeTimers.recession > 300000) { // 5 minutes
            if (Math.random() < 0.05 && this.gameState.totalEarned > 50000) {
                this.triggerRecession();
            }
            this.challengeTimers.recession = now;
        }
        
        // Equipment Failures (random per business)
        if (now - this.challengeTimers.equipmentFailure > 60000) { // Check every minute
            this.checkEquipmentFailures();
            this.challengeTimers.equipmentFailure = now;
        }
        
        // Update market health and risk level
        this.updateMarketConditions();
    }
    
    triggerMarketCrash() {
        const lossPercent = 0.2 + Math.random() * 0.2; // 20-40% loss
        const lossAmount = this.gameState.money * lossPercent;
        this.gameState.money = Math.max(0, this.gameState.money - lossAmount);
        
        this.showChallengeNotification(
            '📉 Market Crash!',
            `Market volatility causes you to lose $${this.formatNumber(lossAmount)}!`,
            'crash',
            '📉'
        );
        
        this.gameState.marketHealth = 'Crashed';
        this.playSound('error');
        
        // Recover market health after some time
        setTimeout(() => {
            this.gameState.marketHealth = 'Recovering';
        }, 30000);
    }
    
    triggerCompetition() {
        this.gameState.competitionActive = true;
        this.gameState.challengeEndTime = Date.now() + 30000; // 30 seconds
        
        this.showChallengeNotification(
            '🏢 Business Competition!',
            'Competitors are stealing your customers! Fight back to restore income!',
            'competition',
            '🏢',
            true // Show fight button
        );
        
        this.showChallengeStatusBar('🏢', 'Competition Active - Income Reduced!', 30);
        this.gameState.marketHealth = 'Competitive';
        this.playSound('error');
    }
    
    triggerRecession() {
        this.gameState.recessionActive = true;
        this.gameState.challengeEndTime = Date.now() + 120000; // 2 minutes
        
        this.showChallengeNotification(
            '📊 Economic Recession!',
            'All income and click values reduced by 50% for 2 minutes!',
            'recession',
            '📊'
        );
        
        this.showChallengeStatusBar('📊', 'Economic Recession Active', 120);
        this.gameState.marketHealth = 'Recession';
        this.gameState.riskLevel = 'Extreme';
        this.playSound('error');
    }
    
    checkEquipmentFailures() {
        this.businesses.forEach(business => {
            if (business.owned > 0 && business.hasManager && Math.random() < business.failureRate) {
                const repairCost = business.baseCost * 0.2; // 20% of original cost
                
                if (this.gameState.money >= repairCost) {
                    this.gameState.money -= repairCost;
                    
                    this.showChallengeNotification(
                        '⚙️ Equipment Failure!',
                        `${business.name} broke down! Paid $${this.formatNumber(repairCost)} for repairs.`,
                        'failure',
                        '⚙️'
                    );
                } else {
                    // Can't afford repairs - business stops producing
                    business.hasManager = false;
                    
                    this.showChallengeNotification(
                        '⚙️ Equipment Failure!',
                        `${business.name} shut down! Can't afford $${this.formatNumber(repairCost)} repairs.`,
                        'failure',
                        '⚙️'
                    );
                }
                
                this.playSound('error');
            }
        });
    }
    
    updateMarketConditions() {
        // Update market health based on various factors
        if (!this.gameState.recessionActive && !this.gameState.competitionActive) {
            const healthStates = ['Excellent', 'Good', 'Stable', 'Volatile', 'Unstable'];
            const totalIncome = this.gameState.incomePerSecond;
            
            if (totalIncome > 1000000) {
                this.gameState.marketHealth = healthStates[Math.floor(Math.random() * 2)]; // Excellent or Good
                this.gameState.riskLevel = 'Medium';
            } else if (totalIncome > 100000) {
                this.gameState.marketHealth = healthStates[1 + Math.floor(Math.random() * 2)]; // Good or Stable  
                this.gameState.riskLevel = 'Medium';
            } else {
                this.gameState.marketHealth = healthStates[2 + Math.floor(Math.random() * 3)]; // Stable, Volatile, or Unstable
                this.gameState.riskLevel = totalIncome > 10000 ? 'Medium' : 'Low';
            }
        }
    }
    
    updateChallengeTimers() {
        const now = Date.now();
        
        // End active challenges
        if (this.gameState.competitionActive && now > this.gameState.challengeEndTime) {
            this.gameState.competitionActive = false;
            this.gameState.marketHealth = 'Stable';
            this.hideChallengeStatusBar();
            this.updateIncomePerSecond();
        }
        
        if (this.gameState.recessionActive && now > this.gameState.challengeEndTime) {
            this.gameState.recessionActive = false;
            this.gameState.marketHealth = 'Recovering';
            this.gameState.riskLevel = 'Medium';
            this.hideChallengeStatusBar();
            this.updateIncomePerSecond();
            
            this.showAchievementNotification('Economic Recovery!', 'The recession has ended. Business is returning to normal.');
        }
    }
    
    handleChallengeButton() {
        if (this.gameState.competitionActive) {
            // Fight competition costs money but ends challenge early
            const fightCost = this.gameState.incomePerSecond * 5; // 5 seconds of income
            
            if (this.gameState.money >= fightCost) {
                this.gameState.money -= fightCost;
                this.gameState.competitionActive = false;
                this.gameState.marketHealth = 'Competitive';
                this.hideChallengeStatusBar();
                this.hideChallengeNotification();
                this.updateIncomePerSecond();
                
                this.showAchievementNotification('Victory!', 'You successfully fought off the competition!');
                this.playSound('achievement');
            } else {
                this.showAchievementNotification('Insufficient Funds!', `Need $${this.formatNumber(fightCost)} to fight competition.`);
                this.playSound('error');
            }
        }
    }
    
    showChallengeNotification(title, description, type, icon, showButton = false) {
        const notification = document.getElementById('challengeNotification');
        const titleElement = document.getElementById('challengeTitle');
        const textElement = document.getElementById('challengeText');
        const iconElement = document.getElementById('challengeIcon');
        const buttonElement = document.getElementById('challengeButton');
        
        titleElement.textContent = title;
        textElement.textContent = description;
        iconElement.textContent = icon;
        buttonElement.style.display = showButton ? 'block' : 'none';
        
        notification.classList.remove('hidden');
        notification.classList.add('show');
        
        // Auto-hide after 5 seconds (unless it's a competition that needs action)
        if (!showButton) {
            setTimeout(() => {
                this.hideChallengeNotification();
            }, 5000);
        }
    }
    
    hideChallengeNotification() {
        const notification = document.getElementById('challengeNotification');
        notification.classList.remove('show');
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 250);
    }
    
    showChallengeStatusBar(icon, text, duration) {
        const statusBar = document.getElementById('challengeStatusBar');
        const iconElement = document.getElementById('statusIcon');
        const textElement = document.getElementById('statusText');
        const timerElement = document.getElementById('statusTimer');
        
        iconElement.textContent = icon;
        textElement.textContent = text;
        timerElement.textContent = duration + 's';
        
        statusBar.classList.remove('hidden');
        statusBar.classList.add('show');
        
        // Update timer every second
        const timerInterval = setInterval(() => {
            duration--;
            if (duration > 0) {
                timerElement.textContent = duration + 's';
            } else {
                clearInterval(timerInterval);
                this.hideChallengeStatusBar();
            }
        }, 1000);
    }
    
    hideChallengeStatusBar() {
        const statusBar = document.getElementById('challengeStatusBar');
        statusBar.classList.remove('show');
        setTimeout(() => {
            statusBar.classList.add('hidden');
        }, 250);
    }

    formatNumber(num) {
        if (num < 1000) return Math.floor(num).toString();
        if (num < 1000000) return (num / 1000).toFixed(1) + 'K';
        if (num < 1000000000) return (num / 1000000).toFixed(1) + 'M';
        if (num < 1000000000000) return (num / 1000000000).toFixed(1) + 'B';
        if (num < 1000000000000000) return (num / 1000000000000).toFixed(1) + 'T';
        if (num < 1000000000000000000) return (num / 1000000000000000).toFixed(1) + 'Qa';
        return num.toExponential(2);
    }

    playSound(type) {
        // Simulated sound effects
        switch (type) {
            case 'click':
                console.log('🔊 Cha-ching!');
                break;
            case 'purchase':
                console.log('🔊 Success chime!');
                break;
            case 'achievement':
                console.log('🔊 Achievement fanfare!');
                break;
            case 'error':
                console.log('🔊 Error buzz!');
                break;
            case 'celebration':
                console.log('🎉 Celebration music!');
                break;
        }
    }

    saveGame(silent = false) {
        this.gameState.lastSaveTime = Date.now();
        const saveData = {
            gameState: this.gameState,
            clickUpgrades: this.clickUpgrades,
            businesses: this.businesses,
            achievements: this.achievements,
            multipliers: this.multipliers,
            challengeTimers: this.challengeTimers,
            crisisTimers: this.crisisTimers,
            taxesPaid: this.taxesPaid,
            version: '6.0' // Updated version with light theme only
        };
        
        // Use in-memory storage only (sandbox environment restriction)
        this.savedGame = saveData;
        console.log('💾 Game saved successfully to cache!');
        
        // Show visual feedback for manual saves only
        if (!silent) {
            const saveButton = document.getElementById('saveGame');
            if (saveButton) {
                const originalText = saveButton.innerHTML;
                saveButton.innerHTML = '<span class="feature-icon">✓</span><span class="feature-text">Saved!</span>';
                saveButton.style.background = 'var(--color-simple-success)';
                
                setTimeout(() => {
                    saveButton.innerHTML = originalText;
                    saveButton.style.background = '';
                }, 1000);
            }
            
            // Show auto-save indicator for manual saves
            this.showAutoSaveIndicator();
        }
    }
    
    showAutoSaveIndicator() {
        const indicator = document.getElementById('autoSaveIndicator');
        if (indicator) {
            indicator.style.display = 'block';
            setTimeout(() => {
                indicator.style.display = 'none';
            }, 2000);
        }
    }

    loadGame() {
        try {
            let data = null;
            
            // Use in-memory storage only (sandbox environment restriction)
            if (this.savedGame) {
                data = this.savedGame;
            }
            
            if (data) {
                // Ensure all new properties are properly loaded with defaults
                this.gameState = { 
                    money: 0,
                    totalEarned: 0,
                    totalClicks: 0,
                    clickValue: 1,
                    incomePerSecond: 0,
                    prestigeLevel: 0,
                    prestigeBonus: 0,
                    lastSaveTime: Date.now(),
                    currentTier: 0,
                    gameEnded: false,
                    endGameShown: false,
                    gameStarted: false,
                    // Enhanced debt and asset seizure system defaults
                    savings: 0,
                    debt: 0,
                    inDebtMode: false,
                    hasInsurance: false,
                    insurancePaymentDue: 0,
                    emergencyLoanActive: false,
                    loanAmount: 0,
                    loanInterestRate: 0.25,
                    bankruptcyThreshold: -50000,
                    assetSeizureActive: false,
                    assetsBeingSeized: [],
                    highScore: 0,
                    // Challenge system defaults
                    marketHealth: 'Stable',
                    riskLevel: 'Low',
                    activeChallenge: null,
                    challengeEndTime: 0,
                    competitionActive: false,
                    recessionActive: false,
                    surviveCount: 0,
                    // Enhanced financial system defaults
                    consecutiveCrisisSurvival: 0,
                    lastCrisisTime: 0,
                    tutorialShown: {
                        savings: false,
                        crisis: false,
                        clickLimit: false,
                        aiSuper: false
                    },
                    tutorialActive: false,
                    ...data.gameState 
                };
                
                // Load challenge system data
                this.challengeTimers = data.challengeTimers || {
                    marketCrash: 0,
                    competition: 0,
                    recession: 0,
                    equipmentFailure: 0
                };
                
                // Load crisis system data
                this.crisisTimers = data.crisisTimers || {
                    financialCollapse: 0,
                    industryShutdown: 0,
                    legalInvestigation: 0,
                    cyberAttack: 0
                };
                
                this.savingsInterestTimer = 0;
                this.taxesPaid = data.taxesPaid || [];
                
                this.clickUpgrades = data.clickUpgrades || this.clickUpgrades;
                this.businesses = data.businesses || this.businesses;
                this.achievements = data.achievements || this.achievements;
                this.multipliers = data.multipliers || this.multipliers;
                
                this.updateIncomePerSecond();
                console.log('📁 Game loaded successfully from cache!');
                
                // Show AI achievement notification if applicable
                if (this.gameState.aiSupervictoryAchieved && this.gameState.aiSupervictoryCount > 0) {
                    setTimeout(() => {
                        this.showAchievementNotification(
                            `AI Superintelligence Legend!`, 
                            `You've achieved AI transcendence ${this.gameState.aiSupervictoryCount} time${this.gameState.aiSupervictoryCount > 1 ? 's' : ''}!`
                        );
                    }, 3000);
                }
                
                // Check if game was already ended
                if (this.gameState.gameEnded && !this.gameState.endGameShown) {
                    if (this.gameState.currentTier >= 13) {
                        setTimeout(() => this.showAISupervictoryModal(), 2000);
                    } else if (this.gameState.currentTier >= 12) {
                        setTimeout(() => this.showVictoryModal(), 2000);
                    } else {
                        setTimeout(() => this.showGameOverModal(), 2000);
                    }
                }
            } else {
                console.log('📁 No saved game found, starting fresh!');
            }
            document.body.removeAttribute('data-theme');
        } catch (error) {
            console.warn('⚠️ Load failed, starting fresh game:', error);
            // Start with default values if loading fails
        }
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.game = new JakesEmpireGame();
    console.log('🚀 Jake\'s Empire: From Rags to AI Superintelligence Started!');
    console.log('💡 Enhanced Challenge Tips:');
    console.log('  • Press SPACE to click faster (but click upgrades are severely limited)!');
    console.log('  • Keep 25%+ of wealth in emergency savings - MANDATORY for survival');
    console.log('  • Crisis events every 1-2 minutes can destroy 80-95% of wealth');
    console.log('  • Buy insurance to reduce crisis losses');
    console.log('  • Watch Jake\'s mood and financial advisor warnings');
    console.log('  • Business development is the ONLY path to success');
    console.log('💾 Game auto-saves every 30 seconds');
    console.log('🎯 ULTIMATE Goal: Help Jake achieve AI Superintelligence!');
    console.log('🤖 Final requirements: 1000 of each business + 10 crisis survivals + $1Q wealth');
});