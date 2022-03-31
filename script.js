// sound clip array, button creation and play function

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong', 'homer', 'money'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();

        document.getElementById(sound).play();
    } )

    document.getElementById('buttons').appendChild(btn);
})
// set-up to stop clip playing if another is activated
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    })
}