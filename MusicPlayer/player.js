var audiolinks = ['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'];
var x = document.getElementById('audio');
var MusicPlayer = /** @class */ (function () {
    function MusicPlayer(track_num, track_volume) {
        if (track_volume === void 0) { track_volume = 50; }
        this.trackNo = track_num;
        this.volume = track_volume;
    }
    MusicPlayer.prototype.nextTrack = function () {
        if (this.trackNo < (audiolinks.length - 1) && this.trackNo >= 0) {
            this.trackNo += 1;
            this.setTrack(this.trackNo);
        }
        document.getElementById('h4').innerHTML = "playing track : " + (this.trackNo + 1) + " / " + audiolinks.length + " ";
        //       return this.trackNo;
    };
    MusicPlayer.prototype.prevTrack = function () {
        if (this.trackNo < (audiolinks.length) && this.trackNo > 0) {
            this.trackNo -= 1;
            this.setTrack(this.trackNo);
        }
        document.getElementById('h4').innerHTML = "playing track : " + (this.trackNo + 1) + " / " + audiolinks.length + " ";
        //     return this.trackNo;
    };
    MusicPlayer.prototype.pauseplay = function () {
        var _this = this;
        x.onplaying = function () { _this.isPlaying = true; };
        x.onpause = function () { _this.isPlaying = false; };
        if (this.isPlaying) {
            x.pause();
            document.getElementById('playStatus').innerHTML = "Audio Paused";
        }
        else {
            x.play();
            document.getElementById('playStatus').innerHTML = "Audio is Playing";
        }
    };
    MusicPlayer.prototype.increaseVolume = function () {
        if (this.volume < 99 && this.trackNo > 0) {
            this.volume += 1;
        }
        return this.volume;
    };
    MusicPlayer.prototype.decreaseVolume = function () {
        if (this.volume < 100 && this.volume > 0) {
            this.volume -= 1;
        }
        return this.volume;
    };
    MusicPlayer.prototype.setTrack = function (ind) {
        x.setAttribute('src', audiolinks[ind]);
    };
    return MusicPlayer;
}());
var music = new MusicPlayer(4, 30);
window.onload = function () {
    document.getElementById('audio').setAttribute('src', audiolinks[0]);
};
document.getElementById('next').onclick = function () {
    music.nextTrack();
};
document.getElementById('prev').onclick = function () {
    music.prevTrack();
};
document.getElementById('pauseplay').onclick = function () {
    music.pauseplay();
};
