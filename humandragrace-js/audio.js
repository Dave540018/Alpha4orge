let audioCtx = null;
let footstepTimer = null;
let soundProvider = () => true;

export function setSoundProvider(provider) {
  soundProvider = provider;
}

function soundOn() {
  return soundProvider();
}

export function initAudio() {
  if (!soundOn()) return;
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();
}

export function playTone(freq = 440, duration = 0.08, type = "sine", volume = 0.05) {
  if (!soundOn()) return;
  initAudio();

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.value = volume;

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
  osc.stop(audioCtx.currentTime + duration);
}

export function playNoise(duration = 0.12, volume = 0.08) {
  if (!soundOn()) return;
  initAudio();

  const bufferSize = audioCtx.sampleRate * duration;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

  const noise = audioCtx.createBufferSource();
  const gain = audioCtx.createGain();

  gain.gain.value = volume;
  noise.buffer = buffer;
  noise.connect(gain);
  gain.connect(audioCtx.destination);

  noise.start();
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
}

export function startFootsteps() {
  stopFootsteps();
  if (!soundOn()) return;

  footstepTimer = setInterval(() => {
    playTone(85 + Math.random() * 25, 0.035, "square", 0.028);
    if (Math.random() > 0.55) playNoise(0.04, 0.018);
  }, 135);
}

export function stopFootsteps() {
  if (footstepTimer) clearInterval(footstepTimer);
  footstepTimer = null;
}
