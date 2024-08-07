const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    {
        path: 'https://cao-nguyen.github.io/chinhphucnguvanedu/asset/podcast/1.mp3',
        displayName: 'Số phát sóng CH0001: Giá trị của hòn đá',
        cover: 'https://Cao-nguyen.github.io/CNliterature.edu.vn/1.jpg',
        artist: 'Tác phẩm: Google - Thu âm: Lý Cao Nguyên',
    },
    {
        path: 'https://cao-nguyen.github.io/chinhphucnguvanedu/asset/podcast/2.mp3',
        displayName: 'Số phát sóng CH0002: Bà tôi',
        cover: 'https://Cao-nguyen.github.io/CNliterature.edu.vn/2.jpg',
        artist: 'Tác phẩm: Lý Cao Nguyên - Thu âm: Lý Cao Nguyên',
    },
    {
        path: 'https://cao-nguyen.github.io/chinhphucnguvanedu/asset/podcast/3.mp3',
        displayName: 'Số phát sóng CH0003: Ngọn gió của đời tôi',
        cover: 'https://Cao-nguyen.github.io/CNliterature.edu.vn/3.jpg',
        artist: 'Tác phẩm: Nguyễn Thu Hiền - Thu âm: Lý Cao Nguyên',
    },
    {
        path: '4.mp3',
        displayName: 'Số phát sóng: CH0004: Trái tim yêu thương',
        cover: 'https://Cao-nguyen.github.io/CNliterature.edu.vn/4.jpg',
        artist: 'Tác phẩm: Lý Cao Nguyên - Thu âm: Lý Cao Nguyên',
    },
    {
        path: '5.mp3',
        displayName: 'Số phát sóng CH0005: Sau cơn mưa trời lại sáng',
        cover: 'https://Cao-nguyen.github.io/CNliterature.edu.vn/5.jpg',
        artist: 'Tác phẩm: Lý Cao Nguyên - Thu âm: Lý Cao Nguyên',
    },
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    // Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    // Set button hover title
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    // Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Set button hover title
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);


// Khám phá Việt Nam
document.querySelector('.image-container').addEventListener('mouseover', () => {
    console.log('Hovered over image');
});

document.querySelector('.image-container').addEventListener('mouseout', () => {
    console.log('Mouse left the image');
});




