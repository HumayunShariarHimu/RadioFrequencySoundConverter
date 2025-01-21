document.getElementById('playSound').addEventListener('click', function () {
  const frequency = parseFloat(document.getElementById('frequency').value);
  const message = document.getElementById('message');

  if (isNaN(frequency) || frequency <= 0) {
    message.textContent = 'Please enter a valid frequency (Hz).';
    return;
  }

  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();

  oscillator.type = 'sine'; // You can change to 'square', 'sawtooth', or 'triangle'
  oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
  oscillator.connect(audioCtx.destination);
  oscillator.start();

  message.textContent = `Playing sound at ${frequency} Hz...`;

  // Stop the sound after 2 seconds
  setTimeout(() => {
    oscillator.stop();
    message.textContent = 'Sound stopped.';
  }, 2000);
});