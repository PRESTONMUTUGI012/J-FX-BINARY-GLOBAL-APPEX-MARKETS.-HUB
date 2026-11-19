const DERIV_APP_ID = "34ZfveN7Be9dqW8mOCJAe";
const AFFILIATE_TOKEN = "3A2CFHPG722B";

const DEFAULT_MINUTE_TIMEFRAMES = ['1', '2', '3', '5', '10', '15', '30'];
const COMPULSORY_SHIFT_SECONDS = 8;

const exhaustiveAssets = [
    { symbol: '1HZ100V', name: 'Volatility 100 (1s)', market: 'volatility_1s', pip: 2, base: 1428.64, tv: 'DERIV:1HZ100V' },
    { symbol: '1HZ10V', name: 'Volatility 10 (1s)', market: 'volatility_1s', pip: 2, base: 9452.18, tv: 'DERIV:1HZ10V' },
    { symbol: '1HZ25V', name: 'Volatility 25 (1s)', market: 'volatility_1s', pip: 2, base: 5320.45, tv: 'DERIV:1HZ25V' },
    { symbol: '1HZ50V', name: 'Volatility 50 (1s)', market: 'volatility_1s', pip: 2, base: 48912.34, tv: 'DERIV:1HZ50V' },
    { symbol: '1HZ75V', name: 'Volatility 75 (1s)', market: 'volatility_1s', pip: 2, base: 12450.80, tv: 'DERIV:1HZ75V' },
    { symbol: 'R_10', name: 'Volatility 10', market: 'volatility', pip: 3, base: 6321.450, tv: 'DERIV:R_10' },
    { symbol: 'R_25', name: 'Volatility 25', market: 'volatility', pip: 3, base: 3120.100, tv: 'DERIV:R_25' },
    { symbol: 'R_50', name: 'Volatility 50', market: 'volatility', pip: 3, base: 2450.750, tv: 'DERIV:R_50' },
    { symbol: 'R_75', name: 'Volatility 75', market: 'volatility', pip: 3, base: 8940.200, tv: 'DERIV:R_75' },
    { symbol: 'R_100', name: 'Volatility 100', market: 'volatility', pip: 3, base: 4120.900, tv: 'DERIV:R_100' },
    { symbol: 'BOOM500', name: 'Boom 500 Index', market: 'boom_crash', pip: 2, base: 4125.80, tv: 'DERIV:BOOM500' },
    { symbol: 'BOOM1000', name: 'Boom 1000 Index', market: 'boom_crash', pip: 2, base: 11450.20, tv: 'DERIV:BOOM1000' },
    { symbol: 'CRASH500', name: 'Crash 500 Index', market: 'boom_crash', pip: 2, base: 5820.10, tv: 'DERIV:CRASH500' },
    { symbol: 'CRASH1000', name: 'Crash 1000 Index', market: 'boom_crash', pip: 2, base: 7840.15, tv: 'DERIV:CRASH1000' },
    { symbol: 'JD10', name: 'Jump 10 Index', market: 'jump', pip: 2, base: 1240.50, tv: 'DERIV:JD10' },
    { symbol: 'JD25', name: 'Jump 25 Index', market: 'jump', pip: 2, base: 2150.80, tv: 'DERIV:JD25' },
    { symbol: 'JD50', name: 'Jump 50 Index', market: 'jump', pip: 2, base: 3420.10, tv: 'DERIV:JD50' },
    { symbol: 'JD75', name: 'Jump 75 Index', market: 'jump', pip: 2, base: 5120.40, tv: 'DERIV:JD75' },
    { symbol: 'JD100', name: 'Jump 100 Index', market: 'jump', pip: 2, base: 8940.20, tv: 'DERIV:JD100' },
    { symbol: 'NVDA', name: 'NVIDIA', market: 'stocks', pip: 2, base: 142.50, tv: 'NASDAQ:NVDA' },
    { symbol: 'TSLA', name: 'Tesla', market: 'stocks', pip: 2, base: 215.40, tv: 'NASDAQ:TSLA' },
    { symbol: 'AAPL', name: 'Apple', market: 'stocks', pip: 2, base: 228.60, tv: 'NASDAQ:AAPL' },
    { symbol: 'MSFT', name: 'Microsoft', market: 'stocks', pip: 2, base: 425.80, tv: 'NASDAQ:MSFT' },
    { symbol: 'AMZN', name: 'Amazon', market: 'stocks', pip: 2, base: 195.20, tv: 'NASDAQ:AMZN' },
    { symbol: 'GOOGL', name: 'Google', market: 'stocks', pip: 2, base: 178.40, tv: 'NASDAQ:GOOGL' },
    { symbol: 'META', name: 'Meta', market: 'stocks', pip: 2, base: 560.10, tv: 'NASDAQ:META' },
    { symbol: 'NFLX', name: 'Netflix', market: 'stocks', pip: 2, base: 742.30, tv: 'NASDAQ:NFLX' },
    { symbol: 'SPY', name: 'SPY ETF', market: 'stocks', pip: 2, base: 585.50, tv: 'AMEX:SPY' },
    { symbol: 'QQQ', name: 'QQQ ETF', market: 'stocks', pip: 2, base: 502.10, tv: 'NASDAQ:QQQ' },
    { symbol: 'frxEURUSD', name: 'EUR/USD', market: 'forex', pip: 5, base: 1.08450, tv: 'FX:EURUSD' },
    { symbol: 'frxGBPUSD', name: 'GBP/USD', market: 'forex', pip: 5, base: 1.27140, tv: 'FX:GBPUSD' },
    { symbol: 'frxUSDJPY', name: 'USD/JPY', market: 'forex', pip: 3, base: 153.420, tv: 'FX:USDJPY' },
    { symbol: 'frxAUDUSD', name: 'AUD/USD', market: 'forex', pip: 5, base: 0.65840, tv: 'FX:AUDUSD' },
    { symbol: 'frxUSDCAD', name: 'USD/CAD', market: 'forex', pip: 5, base: 1.38910, tv: 'FX:USDCAD' },
    { symbol: 'frxNZDUSD', name: 'NZD/USD', market: 'forex', pip: 5, base: 0.59840, tv: 'FX:NZDUSD' },
    { symbol: 'frxEURGBP', name: 'EUR/GBP', market: 'forex', pip: 5, base: 0.85310, tv: 'FX:EURGBP' },
    { symbol: 'frxUSDCHF', name: 'USD/CHF', market: 'forex', pip: 5, base: 0.88410, tv: 'FX:USDCHF' },
    { symbol: 'frxAUDJPY', name: 'AUD/JPY', market: 'forex', pip: 3, base: 101.200, tv: 'FX:AUDJPY' },
    { symbol: 'frxGBPJPY', name: 'GBP/JPY', market: 'forex', pip: 3, base: 194.800, tv: 'FX:GBPJPY' },
    { symbol: 'frxXAUUSD', name: 'Gold/USD', market: 'commodities', pip: 2, base: 2742.85, tv: 'OANDA:XAUUSD' },
    { symbol: 'frxXAGUSD', name: 'Silver/USD', market: 'commodities', pip: 3, base: 32.410, tv: 'OANDA:XAGUSD' },
    { symbol: 'frxWTIUSD', name: 'Crude Oil', market: 'commodities', pip: 2, base: 71.45, tv: 'TVC:USOIL' },
    { symbol: 'UK Brent', name: 'UK Brent', market: 'commodities', pip: 2, base: 75.80, tv: 'TVC:UKOIL' },
    { symbol: 'Copper', name: 'Copper', market: 'commodities', pip: 3, base: 4.150, tv: 'COMEX:HG1!' },
    { symbol: 'cryBTCUSD', name: 'BTC/USD', market: 'crypto', pip: 2, base: 89420.50, tv: 'BINANCE:BTCUSDT' },
    { symbol: 'cryETHUSD', name: 'ETH/USD', market: 'crypto', pip: 2, base: 3145.80, tv: 'BINANCE:ETHUSDT' },
    { symbol: 'cryLTCUSD', name: 'LTC/USD', market: 'crypto', pip: 2, base: 84.25, tv: 'BINANCE:LTCUSDT' }
];

const ALL_STRATEGY_TEMPLATES = [
    { group: 'digits', type: 'DIFF', name: 'DIFFERS', hitBase: '~90%', hitNum: 90, payoutMult: 0.095, api: 'DIGITDIFF', paramLabel: '1 Tick', ticks: 1, runs: 4, boatId: 9 },
    { group: 'digits', type: 'OVER_0', name: 'OVER 0', hitBase: '~90%', hitNum: 90, payoutMult: 0.09, api: 'DIGITOVER', paramLabel: '1 Tick', ticks: 1, runs: 4, boatId: 8, barrier: '0' },
    { group: 'digits', type: 'UNDER_9', name: 'UNDER 9', hitBase: '~90%', hitNum: 90, payoutMult: 0.09, api: 'DIGITUNDER', paramLabel: '1 Tick', ticks: 1, runs: 4, boatId: 8, barrier: '9' },
    { group: 'digits', type: 'OVER_1', name: 'OVER 1', hitBase: '~80%', hitNum: 80, payoutMult: 0.21, api: 'DIGITOVER', paramLabel: '2 Ticks', ticks: 2, runs: 3, boatId: 8, barrier: '1' },
    { group: 'digits', type: 'UNDER_8', name: 'UNDER 8', hitBase: '~80%', hitNum: 80, payoutMult: 0.21, api: 'DIGITUNDER', paramLabel: '2 Ticks', ticks: 2, runs: 3, boatId: 8, barrier: '8' },
    { group: 'digits', type: 'OVER_2', name: 'OVER 2', hitBase: '~70%', hitNum: 70, payoutMult: 0.36, api: 'DIGITOVER', paramLabel: '3 Ticks', ticks: 3, runs: 3, boatId: 8, barrier: '2' },
    { group: 'digits', type: 'UNDER_7', name: 'UNDER 7', hitBase: '~70%', hitNum: 70, payoutMult: 0.36, api: 'DIGITUNDER', paramLabel: '3 Ticks', ticks: 3, runs: 3, boatId: 8, barrier: '7' },
    { group: 'digits', type: 'OVER_3', name: 'OVER 3', hitBase: '~60%', hitNum: 60, payoutMult: 0.56, api: 'DIGITOVER', paramLabel: '3 Ticks', ticks: 3, runs: 3, boatId: 8, barrier: '3' },
    { group: 'digits', type: 'UNDER_6', name: 'UNDER 6', hitBase: '~60%', hitNum: 60, payoutMult: 0.56, api: 'DIGITUNDER', paramLabel: '3 Ticks', ticks: 3, runs: 3, boatId: 8, barrier: '6' },
    { group: 'digits', type: 'EVEN', name: 'EVEN', hitBase: '~50%', hitNum: 50, payoutMult: 0.90, api: 'DIGITEVEN', paramLabel: '3 Ticks', ticks: 3, runs: 3, boatId: 6 },
    { group: 'digits', type: 'ODD', name: 'ODD', hitBase: '~50%', hitNum: 50, payoutMult: 0.90, api: 'DIGITODD', paramLabel: '3 Ticks', ticks: 3, runs: 3, boatId: 6 },
    { group: 'digits', type: 'OVER_4', name: 'OVER 4', hitBase: '~50%', hitNum: 50, payoutMult: 0.88, api: 'DIGITOVER', paramLabel: '3 Ticks', ticks: 3, runs: 3, boatId: 8, barrier: '4' },
    { group: 'digits', type: 'UNDER_5', name: 'UNDER 5', hitBase: '~50%', hitNum: 50, payoutMult: 0.88, api: 'DIGITUNDER', paramLabel: '3 Ticks', ticks: 3, runs: 3, boatId: 8, barrier: '5' },
    { group: 'digits', type: 'OVER_5', name: 'OVER 5', hitBase: '~40%', hitNum: 40, payoutMult: 1.35, api: 'DIGITOVER', paramLabel: '3 Ticks', ticks: 3, runs: 2, boatId: 8, barrier: '5' },
    { group: 'digits', type: 'UNDER_4', name: 'UNDER 4', hitBase: '~40%', hitNum: 40, payoutMult: 1.35, api: 'DIGITUNDER', paramLabel: '3 Ticks', ticks: 3, runs: 2, boatId: 8, barrier: '4' },
    { group: 'digits', type: 'OVER_6', name: 'OVER 6', hitBase: '~30%', hitNum: 30, payoutMult: 2.15, api: 'DIGITOVER', paramLabel: '3 Ticks', ticks: 3, runs: 2, boatId: 8, barrier: '6' },
    { group: 'digits', type: 'UNDER_3', name: 'UNDER 3', hitBase: '~30%', hitNum: 30, payoutMult: 2.15, api: 'DIGITUNDER', paramLabel: '3 Ticks', ticks: 3, runs: 2, boatId: 8, barrier: '3' },
    { group: 'digits', type: 'OVER_7', name: 'OVER 7', hitBase: '~20%', hitNum: 20, payoutMult: 3.60, api: 'DIGITOVER', paramLabel: '3 Ticks', ticks: 3, runs: 2, boatId: 8, barrier: '7' },
    { group: 'digits', type: 'UNDER_2', name: 'UNDER 2', hitBase: '~20%', hitNum: 20, payoutMult: 3.60, api: 'DIGITUNDER', paramLabel: '3 Ticks', ticks: 3, runs: 2, boatId: 8, barrier: '2' },
    { group: 'digits', type: 'MATCH', name: 'MATCHES', hitBase: '~10%', hitNum: 10, payoutMult: 8.50, api: 'DIGITMATCH', paramLabel: '1 Tick', ticks: 1, runs: 2, boatId: 9 },

    { group: 'accu', type: 'ACCU_1', name: 'ACCU 1% GROWTH', hitBase: 'Range 1%', hitNum: 78, payoutMult: 0.15, api: 'ACCU', paramLabel: '1% Growth', ticks: 5, runs: 2, boatId: 7, barrier: '0.01' },
    { group: 'accu', type: 'ACCU_2', name: 'ACCU 2% GROWTH', hitBase: 'Range 2%', hitNum: 74, payoutMult: 0.25, api: 'ACCU', paramLabel: '2% Growth', ticks: 5, runs: 2, boatId: 7, barrier: '0.02' },
    { group: 'accu', type: 'ACCU_3', name: 'ACCU 3% GROWTH', hitBase: 'Range 3%', hitNum: 70, payoutMult: 0.35, api: 'ACCU', paramLabel: '3% Growth', ticks: 5, runs: 2, boatId: 7, barrier: '0.03' },
    { group: 'accu', type: 'ACCU_4', name: 'ACCU 4% GROWTH', hitBase: 'Range 4%', hitNum: 66, payoutMult: 0.48, api: 'ACCU', paramLabel: '4% Growth', ticks: 5, runs: 2, boatId: 7, barrier: '0.04' },
    { group: 'accu', type: 'ACCU_5', name: 'ACCU 5% GROWTH', hitBase: 'Range 5%', hitNum: 62, payoutMult: 0.62, api: 'ACCU', paramLabel: '5% Growth', ticks: 5, runs: 2, boatId: 7, barrier: '0.05' },

    { group: 'mult', type: 'MULT', name: 'MULTIPLIER UP', hitBase: 'Trend Filter', hitNum: 55, payoutMult: 0.85, api: 'MULTUP', paramLabel: 'Mult x100', ticks: 5, runs: 2, boatId: 5 },

    { group: 'dir', type: 'CALL', name: 'RISE / CALL', hitBase: '~50%+', hitNum: 53, payoutMult: 0.88, api: 'CALL', paramLabel: '5 Ticks', ticks: 5, runs: 2, boatId: 2 },
    { group: 'dir', type: 'PUT', name: 'FALL / PUT', hitBase: '~50%+', hitNum: 53, payoutMult: 0.88, api: 'PUT', paramLabel: '5 Ticks', ticks: 5, runs: 2, boatId: 2 }
];

let currentCategory = 'all';
let currentContractGroup = 'all';
let currentSymbol = exhaustiveAssets[0].symbol;
let activeCandleTf = '5';
let shiftTimer = null;
let shiftCountdown = COMPULSORY_SHIFT_SECONDS;
let cooldownUntil = 0;
let marketDataStore = {};
let activeAccountMode = 'demo';
let simulatedBalance = 1000.00;
let sessionNetPnl = 0;
let sessionWins = 0;
let sessionLosses = 0;
let consecutiveLosses = 0;
let lastExecutionTimestamp = 0;
let activeAutomationMode = null;

function computeIndicatorsFromHistory(prices, fallbackAdx = 26) {
    if (!prices || prices.length < 16) {
        return {
            adx: fallbackAdx,
            plusDI: 26,
            minusDI: 16,
            rsi: 54.0,
            emaBias: 'BULLISH'
        };
    }

    const recent = prices.slice(-30);
    let gains = 0;
    let losses = 0;
    let upMoves = 0;
    let downMoves = 0;

    for (let i = 1; i < recent.length; i++) {
        const diff = recent[i] - recent[i - 1];
        if (diff > 0) {
            gains += diff;
            upMoves += diff;
        } else if (diff < 0) {
            losses += Math.abs(diff);
            downMoves += Math.abs(diff);
        }
    }

    const rs = losses === 0 ? 10 : gains / losses;
    const rsi = Number((100 - (100 / (1 + rs))).toFixed(1));

    const totalMove = upMoves + downMoves || 1;
    const plusDI = Math.round((upMoves / totalMove) * 55);
    const minusDI = Math.round((downMoves / totalMove) * 55);
    const dx = Math.abs(plusDI - minusDI) / Math.max(1, plusDI + minusDI);
    const adx = Number(Math.min(48, Math.max(14, 18 + dx * 32)).toFixed(1));

    const k = 2 / (20 + 1);
    let ema = recent[0];
    for (let i = 1; i < recent.length; i++) {
        ema = recent[i] * k + ema * (1 - k);
    }
    const latestPrice = recent[recent.length - 1];
    const emaBias = latestPrice >= ema ? 'BULLISH' : 'BEARISH';

    return { adx, plusDI, minusDI, rsi, emaBias };
}

exhaustiveAssets.forEach((a, idx) => {
    const tf = DEFAULT_MINUTE_TIMEFRAMES[idx % DEFAULT_MINUTE_TIMEFRAMES.length];
    const strat = ALL_STRATEGY_TEMPLATES[idx % ALL_STRATEGY_TEMPLATES.length];
    const digit = (idx * 3 + 2) % 10;

    const adxVal = Number((22 + ((idx * 4.1) % 19)).toFixed(1));
    const wickVal = Number((0.20 + ((idx * 0.05) % 0.28)).toFixed(2));
    const counts = new Array(10).fill(10);
    counts[digit] = 6;

    marketDataStore[a.symbol] = {
        name: a.name,
        pip: a.pip,
        price: a.base.toFixed(a.pip),
        priceHistory: [a.base],
        recentDigits: [],
        digitCounts: counts,
        timeframe: tf,
        ticks: strat.ticks,
        runsTarget: strat.runs,
        runsCompleted: 0,
        feederDigit: digit,
        strategy: { ...strat },
        adx: adxVal,
        plusDI: 28,
        minusDI: 16,
        rsi: 55.2,
        emaBias: 'BULLISH',
        wickRatio: wickVal,
        lastTickDir: 'up'
    };
});

function evaluateConditionFilters(st) {
    const minAdx = parseFloat(document.getElementById('filter-min-adx')?.value) || 20;
    const maxWick = parseFloat(document.getElementById('filter-max-wick')?.value) || 0.50;
    const maxDigitPct = parseFloat(document.getElementById('filter-max-digit-pct')?.value) || 10;

    const totalDigits = st.digitCounts.reduce((a, b) => a + b, 0) || 1;
    const feederPct = Math.round((st.digitCounts[st.feederDigit] / totalDigits) * 100);

    const adxPass = st.adx >= minAdx;
    const wickPass = st.wickRatio <= maxWick;
    const digitPass = feederPct <= maxDigitPct;

    const reasons = [];
    if (!adxPass) reasons.push(`ADX ${st.adx} < ${minAdx}`);
    if (!wickPass) reasons.push(`Wick ${st.wickRatio} > ${maxWick}`);
    if (!digitPass) reasons.push(`Digit ${feederPct}% > ${maxDigitPct}%`);

    return {
        passed: adxPass && wickPass && digitPass,
        feederPct,
        reasonText: reasons.length === 0
            ? `PASS (ADX ${st.adx} • RSI ${st.rsi} • ${st.emaBias})`
            : `SKIP (${reasons.join(' • ')})`
    };
}

function calculateExpectancyMath(st, stake) {
    const payoutMult = st.strategy.payoutMult;
    const winAmt = Number((stake * payoutMult).toFixed(2));
    const breakEvenPct = ((1 / (1 + payoutMult)) * 100).toFixed(1);
    const winsPerLoss = (1 / payoutMult).toFixed(1);
    const fullRunProfit = Number((winAmt * st.runsTarget).toFixed(2));
    const isSteepAsymmetry = payoutMult < 0.25;

    return {
        winAmt,
        breakEvenPct,
        winsPerLoss,
        fullRunProfit,
        isSteepAsymmetry
    };
}

function refreshAllFilterStatuses() {
    updateSignalUI(currentSymbol);
    renderScanner();
}

function logTransaction(msg, isHighlight = false) {
    const logContainer = document.getElementById('live-transaction-log');
    if (!logContainer) return;
    if (logContainer.querySelector('.italic')) logContainer.innerHTML = '';

    const time = new Date().toLocaleTimeString();
    const row = document.createElement('div');
    row.className = isHighlight
        ? 'p-1.5 rounded bg-emerald-950/80 border border-fxgreen text-fxgreen font-bold'
        : 'p-1 rounded bg-slate-950 border border-slate-800/80 text-slate-300';
    row.innerText = `[${time}] ${msg}`;
    logContainer.prepend(row);
    if (logContainer.children.length > 25) logContainer.lastChild.remove();
}

function dismissSplash() {
    const s = document.getElementById('splash-screen');
    if (s) { s.style.opacity = '0'; setTimeout(() => s.style.display = 'none', 300); }
}

function authDeriv() {
    if (window.derivApiInstance) {
        window.derivApiInstance.startOAuthLogin(AFFILIATE_TOKEN);
    }
}

function openDerivCashier(action) {
    const cashierUrl = action === 'withdraw'
        ? 'https://app.deriv.com/account/cashier/withdrawal'
        : 'https://app.deriv.com/account/cashier/deposit';
    window.open(cashierUrl, '_blank');
}

async function handleAccountSelect(accountId) {
    if (window.derivApiInstance && accountId) {
        const ok = await window.derivApiInstance.connectAuthenticatedWebSocket(accountId);
        if (ok) {
            const acc = window.derivApiInstance.accounts.find(a => a.account === accountId);
            const mode = acc && !acc.isVirtual ? 'real' : 'demo';
            activeAccountMode = mode;
            document.getElementById('btn-demo').className = mode === 'demo' ? "px-3 py-1 rounded-lg font-bold bg-emerald-600 text-white transition" : "px-3 py-1 rounded-lg font-semibold text-slate-400";
            document.getElementById('btn-real').className = mode === 'real' ? "px-3 py-1 rounded-lg font-bold bg-gold text-slate-950 transition" : "px-3 py-1 rounded-lg font-semibold text-slate-400";
            document.getElementById('account-id-label').innerText = mode === 'real' ? 'Real Balance' : 'Demo Balance';
            logTransaction(`Connected OTP WebSocket to account ${accountId}`, true);
        }
    }
}

async function setMode(mode) {
    activeAccountMode = mode;
    document.getElementById('btn-demo').className = mode === 'demo' ? "px-3 py-1 rounded-lg font-bold bg-emerald-600 text-white transition" : "px-3 py-1 rounded-lg font-semibold text-slate-400";
    document.getElementById('btn-real').className = mode === 'real' ? "px-3 py-1 rounded-lg font-bold bg-gold text-slate-950 transition" : "px-3 py-1 rounded-lg font-semibold text-slate-400";
    document.getElementById('account-id-label').innerText = mode === 'real' ? 'Real Balance' : 'Demo Balance';

    if (window.derivApiInstance) {
        const switched = await window.derivApiInstance.switchAccountMode(mode);
        if (switched) {
            const sel = document.getElementById('account-selector');
            if (sel) sel.value = switched.account;
            logTransaction(`Switched to ${mode.toUpperCase()} Account (${switched.account})`, true);
        }
    }
}

function switchContractGroup(group) {
    currentContractGroup = group;
    ['all', 'digits', 'accu', 'mult', 'dir'].forEach(g => {
        const btn = document.getElementById(`cg-${g}`);
        if (btn) {
            btn.className = g === group
                ? "bg-cyan-600 text-white font-bold py-1 px-1 rounded"
                : "bg-slate-900 text-slate-300 py-1 px-1 rounded border border-slate-800";
        }
    });
    renderScanner();
}

function switchCategory(cat) {
    currentCategory = cat;
    ['all', 'volatility_1s', 'volatility', 'boom_crash', 'jump', 'stocks', 'forex', 'commodities', 'crypto'].forEach(c => {
        const btn = document.getElementById(`cat-${c}`);
        if (btn) {
            btn.className = c === cat ? "bg-emerald-600 text-white font-bold py-1.5 px-1 rounded-lg transition" : "bg-slate-900 text-slate-300 py-1.5 px-1 rounded-lg transition border border-slate-800";
        }
    });
    renderScanner();
}

function changeChartTimeframe(tf, syncState = true) {
    activeCandleTf = String(tf);
    document.querySelectorAll('.tf-btn').forEach(btn => {
        btn.className = btn.dataset.tf === activeCandleTf
            ? "tf-btn px-2 py-1 rounded bg-emerald-600 text-white font-bold"
            : "tf-btn px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300";
    });
    if (syncState && marketDataStore[currentSymbol]) {
        marketDataStore[currentSymbol].timeframe = activeCandleTf;
        updateSignalUI(currentSymbol);
    }
    initTradingView(currentSymbol, activeCandleTf);
}

function toggleChartFullscreen() {
    const w = document.getElementById('chart-card-wrapper');
    w.classList.toggle('fixed'); w.classList.toggle('inset-4'); w.classList.toggle('z-50');
}

function initTradingView(sym, tf = '5') {
    const c = document.getElementById('tradingview_advanced_chart');
    if (!c || typeof TradingView === 'undefined') return;
    c.innerHTML = '';
    const assetObj = exhaustiveAssets.find(a => a.symbol === sym);
    const tvSym = (assetObj && assetObj.tv && !assetObj.tv.startsWith('DERIV:')) ? assetObj.tv : "FX:EURUSD";

    new TradingView.widget({
        width: "100%",
        height: "100%",
        symbol: tvSym,
        interval: tf,
        timezone: "Africa/Nairobi",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#030712",
        studies: [
            "STD;EMA",
            "STD;RSI",
            "STD;Directional_Movement"
        ],
        container_id: "tradingview_advanced_chart"
    });
}

function computeFirmFeederDigit(st) {
    let minCount = Infinity;
    let bestDigit = st.feederDigit;
    st.digitCounts.forEach((cnt, d) => {
        if (cnt < minCount) {
            minCount = cnt;
            bestDigit = d;
        }
    });
    return bestDigit;
}

function buildCommandString(sym, st, filterRes) {
    const maxStreak = parseInt(document.getElementById('max-loss-streak')?.value, 10) || 2;
    return `SCAN_SIGNAL(Asset=${sym}, Type=${st.strategy.api}, Setup=${st.strategy.name}, Digit=${st.feederDigit}, TF=${st.timeframe}m, ADX=${st.adx}, RSI=${st.rsi}, Shift=COMPULSORY, Filter=${filterRes.passed ? 'PASS' : 'SKIP'}, MaxLossStreak=${maxStreak})`;
}

function updatePnlDisplay() {
    const badge = document.getElementById('pnl-summary-badge');
    const scoreEl = document.getElementById('metric-score');
    const streakEl = document.getElementById('noise-readout');
    const maxStreak = parseInt(document.getElementById('max-loss-streak')?.value, 10) || 2;

    if (badge) {
        const sign = sessionNetPnl >= 0 ? '+' : '';
        badge.innerText = `NET P&L: ${sign}$${sessionNetPnl.toFixed(2)}`;
        badge.className = sessionNetPnl >= 0
            ? "text-[10px] font-bold text-slate-950 bg-fxgreen px-2.5 py-1 rounded"
            : "text-[10px] font-bold text-white bg-rose-600 px-2.5 py-1 rounded";
    }
    if (scoreEl) {
        scoreEl.innerText = `${sessionWins}W / ${sessionLosses}L`;
    }
    if (streakEl) {
        streakEl.innerText = `${consecutiveLosses}/${maxStreak}`;
    }
}

function updateSignalUI(sym) {
    const st = marketDataStore[sym];
    if (!st) return;

    const stake = parseFloat(document.getElementById('manual-stake')?.value) || 1.00;
    const filterRes = evaluateConditionFilters(st);
    const expMath = calculateExpectancyMath(st, stake);
    const cmdStr = buildCommandString(sym, st, filterRes);

    if (typeof highlightActiveBoat === 'function') {
        highlightActiveBoat(st.strategy.boatId);
    }

    const filterBadge = document.getElementById('side-signal-live-badge');
    if (filterBadge) {
        filterBadge.innerText = filterRes.passed ? 'FILTER: PASS' : 'FILTER: SKIP';
        filterBadge.className = filterRes.passed
            ? 'text-[9px] font-black bg-fxgreen text-slate-950 px-2 py-0.5 rounded'
            : 'text-[9px] font-black bg-rose-600 text-white px-2 py-0.5 rounded';
    }

    document.getElementById('chart-title-label').innerText = `${st.name} (${sym}) • ${st.timeframe}m + ${st.strategy.name}`;
    document.getElementById('live-tick-symbol-tag').innerText = sym;
    document.getElementById('adaptive-shift-status').innerText = `Compulsory Shift -> ${st.name} | ${st.strategy.name} (${st.strategy.hitBase}) | ADX ${st.adx} • RSI ${st.rsi} • ${st.emaBias}`;

    document.getElementById('side-sig-asset').innerText = sym;
    document.getElementById('side-sig-contract').innerText = `${st.strategy.name} • ${st.strategy.hitBase}`;
    document.getElementById('side-sig-candle').innerText = `${st.timeframe}m Candle`;
    document.getElementById('side-sig-ticks').innerText = st.strategy.paramLabel;
    document.getElementById('side-sig-feeder').innerText = `[ ${st.feederDigit} ]`;
    document.getElementById('side-sig-runs').innerText = `${st.runsCompleted} / ${st.runsTarget} Runs`;
    document.getElementById('side-sig-boat').innerText = aiBoatsDirectory[st.strategy.boatId].name;
    document.getElementById('side-sig-command').innerText = cmdStr;

    const expBox = document.getElementById('expectancy-warning-box');
    const expBe = document.getElementById('exp-breakeven-rate');
    const expText = document.getElementById('exp-asymmetry-text');
    const expVerdict = document.getElementById('exp-filter-verdict');

    if (expBe && expText && expVerdict && expBox) {
        expBe.innerText = `BE: ${expMath.breakEvenPct}%`;
        expText.innerText = `Win +$${expMath.winAmt.toFixed(2)} vs Loss -$${stake.toFixed(2)}. Full ${st.runsTarget}-run gain: +$${expMath.fullRunProfit.toFixed(2)} | 1 loss erases ~${expMath.winsPerLoss} wins.`;
        expVerdict.innerText = `Indicator Gate: ${filterRes.reasonText}`;
        expVerdict.className = filterRes.passed ? 'text-[9px] font-bold text-fxgreen' : 'text-[9px] font-bold text-rose-400';

        expBox.className = !filterRes.passed
            ? 'bg-rose-950/70 border border-rose-500 rounded-xl p-2.5 space-y-1 text-[10px]'
            : (expMath.isSteepAsymmetry
                ? 'bg-amber-950/60 border border-amber-500/70 rounded-xl p-2.5 space-y-1 text-[10px]'
                : 'bg-emerald-950/50 border border-emerald-500/50 rounded-xl p-2.5 space-y-1 text-[10px]');
    }

    document.getElementById('man-asset').innerText = sym;
    document.getElementById('man-strat').innerText = `${st.strategy.name} [${st.feederDigit}]`;
    document.getElementById('man-trigger').innerText = `${st.timeframe}m • ${st.strategy.paramLabel} • ${st.runsTarget} Runs`;

    document.getElementById('stable-entry-digit-display').innerText = `[ ${st.feederDigit} ]`;
    document.getElementById('momentum-readout').innerText = `${st.timeframe}m`;
    document.getElementById('streak-lock-badge').innerText = `RUNS: ${st.runsCompleted}/${st.runsTarget}`;

    document.getElementById('metric-adx').innerText = st.adx;
    document.getElementById('metric-dmi').innerText = `${st.plusDI} / ${st.minusDI}`;
    document.getElementById('metric-rsi').innerText = st.rsi;
    const emaEl = document.getElementById('metric-ema');
    if (emaEl) {
        emaEl.innerText = st.emaBias;
        emaEl.className = st.emaBias === 'BULLISH' ? 'text-fxgreen font-bold' : 'text-rose-400 font-bold';
    }
    document.getElementById('metric-wick').innerText = `${st.wickRatio} / ${(1 - st.wickRatio).toFixed(2)}`;

    updatePnlDisplay();
    renderDigitHeatmap(st);
}

function getStrategyPool() {
    const highHitBias = document.getElementById('high-hit-bias-toggle')?.checked;
    let pool = currentContractGroup === 'all'
        ? ALL_STRATEGY_TEMPLATES
        : ALL_STRATEGY_TEMPLATES.filter(s => s.group === currentContractGroup);

    if (highHitBias && currentContractGroup === 'all') {
        const highHitSet = pool.filter(s => s.hitNum >= 75);
        if (highHitSet.length > 0) pool = highHitSet;
    }
    return pool.length > 0 ? pool : ALL_STRATEGY_TEMPLATES;
}

function selectSymbol(sym, name, rotateStrategy = false) {
    currentSymbol = sym;
    shiftCountdown = COMPULSORY_SHIFT_SECONDS;
    const st = marketDataStore[sym];
    if (!st) return;

    st.runsCompleted = 0;
    if (rotateStrategy) {
        const pool = getStrategyPool();
        const currentIdxInPool = pool.findIndex(s => s.type === st.strategy.type);
        const nextStrat = pool[(currentIdxInPool + 1) % pool.length];
        st.strategy = { ...nextStrat };
        st.runsTarget = nextStrat.runs;
        st.ticks = nextStrat.ticks;
        st.timeframe = DEFAULT_MINUTE_TIMEFRAMES[Math.floor(Math.random() * DEFAULT_MINUTE_TIMEFRAMES.length)];
        st.feederDigit = computeFirmFeederDigit(st);
    }

    activeCandleTf = st.timeframe;
    changeChartTimeframe(activeCandleTf, false);
    updateSignalUI(sym);

    const filterRes = evaluateConditionFilters(st);
    logTransaction(`Compulsory Shift -> ${name} (${sym}) | ${st.strategy.name} (${st.strategy.hitBase}) | Digit [${st.feederDigit}] | ${filterRes.reasonText}`, filterRes.passed);

    if (window.derivApiInstance) {
        window.derivApiInstance.subscribeTicks(sym, handleTick);
    }
    renderScanner();
}

function pickBestCandidateAsset() {
    const pool = currentCategory === 'all' ? exhaustiveAssets : exhaustiveAssets.filter(a => a.market === currentCategory);
    const qualifiedPool = pool.filter(a => a.symbol !== currentSymbol && evaluateConditionFilters(marketDataStore[a.symbol]).passed);
    const searchPool = qualifiedPool.length > 0 ? qualifiedPool : pool.filter(a => a.symbol !== currentSymbol);

    if (searchPool.length === 0) return pool[0];
    searchPool.sort((a, b) => {
        const scoreB = marketDataStore[b.symbol].strategy.hitNum + marketDataStore[b.symbol].adx;
        const scoreA = marketDataStore[a.symbol].strategy.hitNum + marketDataStore[a.symbol].adx;
        return scoreB - scoreA;
    });
    return searchPool[0];
}

function forceNextMarketShift() {
    const candidate = pickBestCandidateAsset();
    if (candidate) {
        selectSymbol(candidate.symbol, candidate.name, true);
    }
}

function startCompulsoryScannerLoop() {
    if (shiftTimer) clearInterval(shiftTimer);
    shiftCountdown = COMPULSORY_SHIFT_SECONDS;

    shiftTimer = setInterval(() => {
        shiftCountdown--;
        const pill = document.getElementById('shift-countdown-pill');
        if (pill) pill.innerText = `${Math.max(1, shiftCountdown)}s`;

        if (shiftCountdown <= 0) {
            shiftCountdown = COMPULSORY_SHIFT_SECONDS;
            forceNextMarketShift();
        }
    }, 1000);
}

function renderDigitHeatmap(st) {
    const container = document.getElementById('digit-frequency-bar');
    if (!container) return;
    const total = st.digitCounts.reduce((a, b) => a + b, 0) || 1;
    container.innerHTML = st.digitCounts.map((cnt, d) => {
        const pct = Math.round((cnt / total) * 100);
        const isTarget = d === st.feederDigit;
        return `
            <div class="p-1 rounded border ${isTarget ? 'bg-emerald-950 border-fxgreen text-fxgreen font-black' : 'bg-slate-950 border-slate-800 text-slate-400'}">
                <div>D${d}</div>
                <div class="text-[9px]">${pct}%</div>
            </div>
        `;
    }).join('');
}

function renderScanner() {
    const list = document.getElementById('scanner-market-list');
    if (!list) return;
    list.innerHTML = '';

    const highHitBias = document.getElementById('high-hit-bias-toggle')?.checked;
    let filtered = currentCategory === 'all' ? exhaustiveAssets : exhaustiveAssets.filter(a => a.market === currentCategory);

    if (currentContractGroup !== 'all') {
        const grpMatches = filtered.filter(a => marketDataStore[a.symbol].strategy.group === currentContractGroup);
        if (grpMatches.length > 0) filtered = grpMatches;
    }

    if (highHitBias) {
        const hitMatches = filtered.filter(a => marketDataStore[a.symbol].strategy.hitNum >= 75);
        if (hitMatches.length > 0) filtered = hitMatches;
    }

    const sorted = [...filtered].sort((a, b) => {
        const diff = marketDataStore[b.symbol].strategy.hitNum - marketDataStore[a.symbol].strategy.hitNum;
        return diff !== 0 ? diff : marketDataStore[b.symbol].adx - marketDataStore[a.symbol].adx;
    });

    sorted.forEach(m => {
        const st = marketDataStore[m.symbol];
        const filterRes = evaluateConditionFilters(st);
        const isSel = m.symbol === currentSymbol;
        const tickColor = st.lastTickDir === 'up' ? 'tick-up' : 'tick-down';

        const div = document.createElement('div');
        div.onclick = () => selectSymbol(m.symbol, m.name, true);
        div.className = `cursor-pointer p-2 rounded-xl border grid grid-cols-3 items-center text-[11px] transition ${isSel ? 'bg-emerald-950/70 border-fxgreen shadow-[0_0_10px_rgba(0,255,136,0.3)]' : 'bg-slate-900 border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850'}`;
        div.innerHTML = `
            <div><div class="font-bold text-white truncate">${m.name}</div><div class="text-[9px] text-cyan-400">${st.timeframe}m • ADX ${st.adx}</div></div>
            <div class="text-right"><div class="font-bold font-mono ${tickColor}" id="price-${m.symbol}">${st.price}</div><div class="text-[9px] text-gold truncate">${st.strategy.name}</div></div>
            <div class="text-right font-mono"><div class="${filterRes.passed ? 'text-fxgreen' : 'text-rose-400'} font-bold text-[10px]">${st.strategy.hitBase} • ${filterRes.passed ? 'PASS' : 'SKIP'}</div><div class="text-[9px] text-emerald-400">Digit [${st.feederDigit}]</div></div>
        `;
        list.appendChild(div);
    });
}

function haltWithGuardrail(reason) {
    activeAutomationMode = null;
    document.getElementById('tx-status-pill').innerText = `🛑 Guardrail Halt & Shift: ${reason}`;
    logTransaction(`GUARDRAIL HALT (${reason}) — Compulsory Shift Triggered — courtesy of ELHADARTGLOBALFX`, true);
    if (typeof triggerProfitAlert === 'function') {
        triggerProfitAlert(reason, sessionNetPnl);
    }
    forceNextMarketShift();
}

function settleSimulatedOutcome(stake, strategy) {
    const winProb = Math.min(0.92, Math.max(0.15, (strategy.hitNum || 50) / 100));
    const isWin = Math.random() < winProb;

    if (isWin) {
        const profit = Number((stake * strategy.payoutMult).toFixed(2));
        sessionWins++;
        consecutiveLosses = 0;
        sessionNetPnl = Number((sessionNetPnl + profit).toFixed(2));
        simulatedBalance = Number((simulatedBalance + profit).toFixed(2));
        return { isWin: true, delta: profit };
    } else {
        const loss = Number(stake.toFixed(2));
        sessionLosses++;
        consecutiveLosses++;
        sessionNetPnl = Number((sessionNetPnl - loss).toFixed(2));
        simulatedBalance = Number(Math.max(0, simulatedBalance - loss).toFixed(2));
        return { isWin: false, delta: -loss };
    }
}

function handleTick(tick) {
    const sym = tick.symbol;
    const q = Number(tick.quote);
    if (isNaN(q)) return;

    const st = marketDataStore[sym];
    if (!st) return;

    const prevPrice = parseFloat(st.price);
    st.price = q.toFixed(tick.pip_size || st.pip || 2);
    st.lastTickDir = q >= prevPrice ? 'up' : 'down';

    st.priceHistory.push(q);
    if (st.priceHistory.length > 40) st.priceHistory.shift();

    const ind = computeIndicatorsFromHistory(st.priceHistory, st.adx);
    st.adx = ind.adx;
    st.plusDI = ind.plusDI;
    st.minusDI = ind.minusDI;
    st.rsi = ind.rsi;
    st.emaBias = ind.emaBias;

    const liveDigit = parseInt(st.price.slice(-1), 10);
    if (!isNaN(liveDigit)) {
        st.recentDigits.push(liveDigit);
        if (st.recentDigits.length > 100) st.recentDigits.shift();
        if (st.recentDigits.length >= 25) {
            st.digitCounts = new Array(10).fill(0);
            st.recentDigits.forEach(d => st.digitCounts[d]++);
        }
    }

    const priceEl = document.getElementById(`price-${sym}`);
    if (priceEl) {
        priceEl.innerText = st.price;
        priceEl.className = `font-bold font-mono ${st.lastTickDir === 'up' ? 'tick-up' : 'tick-down'}`;
    }

    if (sym === currentSymbol) {
        const bigQuoteEl = document.getElementById('live-big-quote');
        const bigDigitEl = document.getElementById('live-last-digit-badge');
        if (bigQuoteEl) {
            bigQuoteEl.innerText = st.price;
            bigQuoteEl.className = st.lastTickDir === 'up' ? 'text-fxgreen font-black' : 'text-rose-400 font-black';
        }
        if (bigDigitEl && !isNaN(liveDigit)) {
            bigDigitEl.innerText = liveDigit;
        }
        document.getElementById('metric-adx').innerText = st.adx;
        document.getElementById('metric-dmi').innerText = `${st.plusDI} / ${st.minusDI}`;
        document.getElementById('metric-rsi').innerText = st.rsi;
        const emaEl = document.getElementById('metric-ema');
        if (emaEl) {
            emaEl.innerText = st.emaBias;
            emaEl.className = st.emaBias === 'BULLISH' ? 'text-fxgreen font-bold' : 'text-rose-400 font-bold';
        }
        renderDigitHeatmap(st);

        const now = Date.now();
        const maxStreak = parseInt(document.getElementById('max-loss-streak')?.value, 10) || 2;
        const maxStopLoss = parseFloat(document.getElementById('session-stop-loss')?.value) || 5.00;
        const cooldownSec = parseInt(document.getElementById('loss-cooldown-sec')?.value, 10) || 4;

        if (activeAutomationMode && now >= cooldownUntil && (now - lastExecutionTimestamp > 1000)) {
            const filterCheck = evaluateConditionFilters(st);
            if (!filterCheck.passed) {
                logTransaction(`Indicator Filter skipped ${sym} (${filterCheck.reasonText}) — Compulsory Shifting...`);
                lastExecutionTimestamp = now;
                forceNextMarketShift();
                return;
            }

            lastExecutionTimestamp = now;
            st.runsCompleted++;

            const stake = activeAutomationMode === 'BULK'
                ? (parseFloat(document.getElementById('bulk-stake').value) || 1.00)
                : (parseFloat(document.getElementById('manual-stake').value) || 1.00);

            const executorName = activeAutomationMode === 'BOAT'
                ? aiBoatsDirectory[currentActiveBoat].name
                : `${activeAutomationMode} GUARDED`;

            if (!window.derivApiInstance || !window.derivApiInstance.isAuthorized) {
                const outcome = settleSimulatedOutcome(stake, st.strategy);
                document.getElementById('account-balance').innerText = `$${simulatedBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
                const tag = outcome.isWin ? `WIN +$${outcome.delta.toFixed(2)}` : `LOSS -$${Math.abs(outcome.delta).toFixed(2)}`;
                logTransaction(`Run ${st.runsCompleted}/${st.runsTarget} | ${executorName} | ${sym} ${st.strategy.name} [${st.feederDigit}] | ${tag}`, !outcome.isWin);

                if (!outcome.isWin) {
                    cooldownUntil = now + (cooldownSec * 1000);
                    if (consecutiveLosses >= maxStreak) {
                        haltWithGuardrail(`Max Loss Streak (${maxStreak}) Hit`);
                        return;
                    }
                    if (sessionNetPnl <= -Math.abs(maxStopLoss)) {
                        haltWithGuardrail(`Session Stop-Loss (-$${Math.abs(maxStopLoss).toFixed(2)}) Hit`);
                        return;
                    }
                }
            } else {
                window.derivApiInstance.buyContract({
                    symbol: sym,
                    contractType: st.strategy.api,
                    stake: stake,
                    duration: st.ticks,
                    durationUnit: 't',
                    barrier: st.strategy.barrier || (st.strategy.api.startsWith('DIGIT') ? String(st.feederDigit) : null)
                });
                logTransaction(`Run ${st.runsCompleted}/${st.runsTarget} | ${executorName} | Order sent on ${sym} (${st.strategy.name}, flat $${stake.toFixed(2)})`);
            }

            updateSignalUI(sym);

            if (activeAutomationMode && st.runsCompleted >= st.runsTarget) {
                const prevMode = activeAutomationMode;
                st.runsCompleted = 0;
                if (prevMode === 'BULK') {
                    logTransaction(`Run cap completed on ${sym} — Compulsory Shifting to next qualified asset...`, true);
                    forceNextMarketShift();
                } else {
                    activeAutomationMode = null;
                    document.getElementById('tx-status-pill').innerText = "Run Cap Reached • Compulsory Shift";
                    logTransaction(`Run cap completed (${executorName}) — Compulsory Shifting — courtesy of ELHADARTGLOBALFX`, true);
                    forceNextMarketShift();
                }
            }
        }
    }
}

function executeAutomatedManualTrade() {
    const st = marketDataStore[currentSymbol];
    const filterCheck = evaluateConditionFilters(st);
    if (!filterCheck.passed) {
        logTransaction(`Indicator Filter blocked ${currentSymbol} (${filterCheck.reasonText}) — Compulsory Shifting to qualified asset...`, true);
        forceNextMarketShift();
        return;
    }
    st.runsCompleted = 0;
    consecutiveLosses = 0;
    cooldownUntil = 0;
    activeAutomationMode = 'MANUAL';
    document.getElementById('tx-status-pill').innerText = `🟢 Guarded Manual (${currentSymbol} • ${st.runsTarget} Runs)...`;
    logTransaction(`Started Guarded Manual Run on ${currentSymbol} | ${st.strategy.name} [${st.feederDigit}] | ${filterCheck.reasonText}`, true);
}

function executeAutomatedBulkTrade() {
    const count = parseInt(document.getElementById('bulk-count').value, 10) || 5;
    const topAssets = exhaustiveAssets
        .filter(a => evaluateConditionFilters(marketDataStore[a.symbol]).passed)
        .sort((a, b) => marketDataStore[b.symbol].strategy.hitNum - marketDataStore[a.symbol].strategy.hitNum)
        .slice(0, count);

    if (topAssets.length === 0) {
        logTransaction("Blocked Bulk Basket: No markets currently pass the indicator filters.", true);
        return;
    }

    selectSymbol(topAssets[0].symbol, topAssets[0].name, false);
    marketDataStore[currentSymbol].runsCompleted = 0;
    consecutiveLosses = 0;
    cooldownUntil = 0;
    activeAutomationMode = 'BULK';
    document.getElementById('tx-status-pill').innerText = `🟢 Compulsory Bulk (${topAssets.map(a => a.symbol).join(', ')})...`;
    logTransaction(`Armed Compulsory Bulk Basket (${topAssets.length} markets): ${topAssets.map(a => a.symbol).join(', ')}`, true);
}

function startBoatAutomation(boatId) {
    const st = marketDataStore[currentSymbol];
    const filterCheck = evaluateConditionFilters(st);
    if (!filterCheck.passed) {
        logTransaction(`Indicator Filter blocked ${aiBoatsDirectory[boatId].name} on ${currentSymbol} — Compulsory Shifting...`, true);
        forceNextMarketShift();
        return;
    }
    st.runsCompleted = 0;
    consecutiveLosses = 0;
    cooldownUntil = 0;
    activeAutomationMode = 'BOAT';
    document.getElementById('tx-status-pill').innerText = `🟢 ${aiBoatsDirectory[boatId].name} Guarded...`;
    logTransaction(`Running ${aiBoatsDirectory[boatId].name} on ${currentSymbol} | ${filterCheck.reasonText}`, true);
}

function stopAllAutomation() {
    activeAutomationMode = null;
    if (marketDataStore[currentSymbol]) {
        marketDataStore[currentSymbol].runsCompleted = 0;
        updateSignalUI(currentSymbol);
    }
    document.getElementById('tx-status-pill').innerText = "🛑 Runs Stopped • Compulsory Shift Active";
    logTransaction("All automated runs halted manually. Compulsory market shifting remains active.", true);
}

function copySideSignalSettings() {
    const st = marketDataStore[currentSymbol];
    const stake = parseFloat(document.getElementById('manual-stake')?.value) || 1.00;
    const filterRes = evaluateConditionFilters(st);
    const expMath = calculateExpectancyMath(st, stake);
    const cmd = buildCommandString(currentSymbol, st, filterRes);
    const summary = `ELHADARTGLOBALFX INDICATOR & COMPULSORY SHIFT SIGNAL\nAsset: ${st.name} (${currentSymbol})\nSetup: ${st.strategy.name} (${st.strategy.hitBase})\nIndicators: ADX ${st.adx} | +DI/-DI ${st.plusDI}/${st.minusDI} | RSI ${st.rsi} | EMA20 ${st.emaBias}\nBreak-Even Win Rate: ${expMath.breakEvenPct}% (1 loss erases ~${expMath.winsPerLoss} wins)\nIndicator Gate: ${filterRes.reasonText}\nFeeder Digit: [${st.feederDigit}] | Minute TF: ${st.timeframe}m | Shift: COMPULSORY\nCommand: ${cmd}`;
    navigator.clipboard?.writeText(summary);
    alert(`📋 Copied Signal & Indicator Brief:\n\n${summary}`);
}

function bootPlatform() {
    let totalSeconds = 90;
    const pBar = document.getElementById('splash-progress-bar');
    const cTxt = document.getElementById('splash-countdown-text');

    const countdownInterval = setInterval(() => {
        totalSeconds--;
        const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
        const secs = String(totalSeconds % 60).padStart(2, '0');
        if (cTxt) cTxt.innerText = `Loading Bloodline: ${mins}:${secs} (Live Ticks Active)`;
        if (pBar) pBar.style.width = `${((90 - totalSeconds) / 90) * 100}%`;

        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
            dismissSplash();
        }
    }, 1000);

    document.getElementById('header-asset-count').innerText = `${exhaustiveAssets.length} Markets • Live ADX/DMI/RSI/EMA • Compulsory Shift`;
    selectSymbol('1HZ100V', 'Volatility 100 (1s)', false);
    renderScanner();
    startCompulsoryScannerLoop();

    if (typeof DerivAPIConnector !== 'undefined') {
        const api = new DerivAPIConnector(DERIV_APP_ID);
        window.derivApiInstance = api;
        api.onAccountsLoaded = (accounts, selectedId) => {
            const sel = document.getElementById('account-selector');
            if (sel && accounts.length > 0) {
                sel.innerHTML = accounts.map(a => `<option value="${a.account}" ${a.account === selectedId ? 'selected' : ''}>${a.account} (${a.isVirtual ? 'Demo' : 'Real'})</option>`).join('');
                sel.classList.remove('hidden');
            }
        };
        api.onBalanceUpdate = (b) => {
            document.getElementById('account-balance').innerText = `$${Number(b.balance).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
            const badge = document.getElementById('oauth-connection-badge');
            if (badge && b.loginid) {
                badge.innerText = `🟢 Connected (${b.loginid})`;
                badge.className = "text-[10px] font-mono font-bold text-fxgreen bg-emerald-950 px-2.5 py-1 rounded border border-fxgreen/40";
            }
        };
        api.onContractPurchased = (buyData) => {
            logTransaction(`Deriv Contract #${buyData.contract_id} Executed | Payout: $${buyData.payout}`);
        };
        api.connect(exhaustiveAssets).then(() => {
            api.subscribeTicks(currentSymbol, handleTick);
            api.subscribeMultipleTicks(exhaustiveAssets.map(a => a.symbol), handleTick);
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootPlatform);
} else {
    bootPlatform();
}
