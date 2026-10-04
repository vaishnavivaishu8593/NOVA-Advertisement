function explore() {
    playNovaSound();
    document.querySelector(".scene-two").classList.add("show");

    setTimeout(() => {
        document.querySelector(".scene-two").scrollIntoView({
            behavior: "smooth"
        });
    }, 100);
}
function restartAd() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
/* STEP 16 - Futuristic sound effect */

function playNovaSound() {
    const audio = new
     (window.AudioContext ||
         window.webkitAudioContext)();
audio.resume();
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(220, audio.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(
        880,
        audio.currentTime + 0.5
    );

    gain.gain.setValueAtTime(0.15, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audio.currentTime + 0.6
    );

    oscillator.connect(gain);
    gain.connect(audio.destination);

    oscillator.start();
    oscillator.stop(audio.currentTime + 0.6);
}
document.addEventListener("mousemove", (e) => {
    const product = document.querySelector(".product-object");

    if (product) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        product.style.transform =
            `translate(${x}px, ${y}px) rotate(-8deg)`;
    }
});
