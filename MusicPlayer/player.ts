//list of audio links
let audiolinks = ['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3']


class MusicPlayer{
    volume:number;
    isPlaying : boolean;
    trackNo:number;

    constructor(track_num,track_volume=50){
        this.trackNo = track_num;
        this.volume = track_volume;
    }

    nextTrack(){
        if(this.trackNo < (audiolinks.length -1) && this.trackNo >=0){
            this.isPlaying = false;
            this.trackNo += 1;
            this.setTrack(this.trackNo);
            audio.play();
            h4_status.innerHTML = `Audio is Playing` ;
        }
        h4_track.innerHTML = `Playing track : ${this.trackNo+1} / ${audiolinks.length} ` ;
    }

    prevTrack(){
        if(this.trackNo < (audiolinks.length) && this.trackNo >0 ){
            this.isPlaying = false;
            this.trackNo -= 1;
            this.setTrack(this.trackNo);
            audio.play();
            h4_status.innerHTML = `Audio is Playing` ;
        }
        h4_track.innerHTML = `Playing track : ${this.trackNo +1} / ${audiolinks.length} ` ;
    }

    pauseplay(){
        audio.onplaying = ()=>{this.isPlaying = true};
        audio.onpause = ()=>{this.isPlaying = false};
        if(this.isPlaying){
            audio.pause(); 
            h4_status.innerHTML = `Audio Paused` ;
        }else{
            audio.play();
            h4_status.innerHTML = `Audio is Playing` ;
        } 
    }

    increaseVolume(){
        if(this.volume < 99 && this.trackNo >0){
            this.volume += 1;
        }
        return this.volume;
    }

    decreaseVolume(){
        if(this.volume <100 && this.volume >0 ){
            this.volume -= 1;
        }
        return this.volume;
    }

    setTrack(ind){
        audio.setAttribute('src',audiolinks[ind]);
    }
}
let music = new MusicPlayer(4,30);


//beginning of dom
let div_container = document.createElement('div');
div_container.setAttribute('class','container');

let div_jumbo = document.createElement('div');
div_jumbo.setAttribute('class','jumbotron text-center text-light addbg');

let h1_name = document.createElement('h1');
h1_name.setAttribute('class','text-light name');
h1_name.innerHTML = 'MUSIX'

let h4_sub = document.createElement('h4');
h4_sub.innerHTML='Music on the Go!!!'

let div_row1 = document.createElement('div');
div_row1.setAttribute('class','row mt-3 text-center');

let div_offset = document.createElement('div')
div_offset.setAttribute('class','offset-md-3 col-md-5 col-sm-10');

let searchbar = document.createElement('input');
searchbar.setAttribute('class','form-control p-4');
searchbar.type = 'text';
searchbar.name = "search";
searchbar.id = 'searchbar';
searchbar.placeholder = "Search";

let div_btn = document.createElement('div')
div_btn.setAttribute('class','col-md-2 col-sm-2');

let searchbtn = document.createElement('button');
searchbtn.setAttribute('class','btn btn-info p-3');
searchbtn.innerHTML = 'Search';

let div_row2 = document.createElement('div')
div_row2.setAttribute('class','row justify-content-center text-center');

let div_track = document.createElement('div')

let h4_track = document.createElement('h4');
h4_track.id = 'h4'

let h4_status = document.createElement('h4');
h4_status.id = 'playStatus'

let div_row3 = document.createElement('div')
div_row3.setAttribute('class','row');

let div_img = document.createElement('div')
div_img.setAttribute('class','offset-md-3 col-sm-12 col-xs-12 outer')

let player_img = document.createElement('img');
player_img.setAttribute('src','player.png')
player_img.useMap = "#image-map";
player_img.id = 'playerimg'

let div_audio = document.createElement('div')
div_audio.setAttribute('class','audio-container');

let audio = document.createElement('audio');
audio.id = 'audio';
audio.setAttribute('class','audio');
audio.controls = true;

let map = document.createElement('map')
map.name = 'image-map';

var area1 = createArea('menu',"237,333,30","circle");
var area2 = createArea('next',"311,406,30","circle")
var area3 = createArea('next',"164,408,31","circle")
var area4 = createArea('next',"236,481,34","circle")


div_row2.append(div_track);
div_track.append(h4_track,h4_status);
div_audio.append(audio);
map.append(area1,area2,area3,area4);
div_img.append(player_img,div_audio,map);
div_row3.append(div_img)
div_offset.append(searchbar);
div_btn.append(searchbtn);
div_jumbo.append(h1_name,h4_sub);
div_row1.append(div_offset,div_btn);
div_container.append(div_jumbo,div_row1,div_row2,div_row3);
document.body.append(div_container);


function createArea(id,coords,shape){
    let area = document.createElement('area');
    area.id = id;
    area.alt = id;
    area.title = id;
    area.coords = coords;
    area.shape = shape;
    return area;
}



// event listeners
window.onload = ()=>{
    audio.setAttribute('src',audiolinks[0]);
}

area2.onclick = ()=>{
    music.nextTrack();
}
area3.onclick = ()=>{
    music.prevTrack();
} 
area4.onclick = ()=>{
    music.pauseplay();
}


