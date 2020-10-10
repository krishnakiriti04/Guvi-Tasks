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


let x = (<HTMLAudioElement>document.getElementById('audio'));

class MusicPlayer{
    volume:number;
    isPlaying : boolean;
    // trackName;
    trackNo;
    constructor(track_num,track_volume=50){
        this.trackNo = track_num;
        this.volume = track_volume;
    }

    nextTrack(){
        if(this.trackNo < (audiolinks.length -1) && this.trackNo >=0){
            this.trackNo += 1;
            this.setTrack(this.trackNo);
        }
        document.getElementById('h4').innerHTML = `playing track : ${this.trackNo+1} / ${audiolinks.length} ` ;
 //       return this.trackNo;
    }

    prevTrack(){
        if(this.trackNo < (audiolinks.length) && this.trackNo >0 ){
            this.trackNo -= 1;
            this.setTrack(this.trackNo);
        }
        document.getElementById('h4').innerHTML = `playing track : ${this.trackNo +1} / ${audiolinks.length} ` ;
   //     return this.trackNo;
    }

    pauseplay(){
        x.onplaying = ()=>{this.isPlaying = true};
        x.onpause = ()=>{this.isPlaying = false};
        if(this.isPlaying){
            x.pause(); 
            document.getElementById('playStatus').innerHTML = `Audio Paused` ;
        }else{
            x.play();
            document.getElementById('playStatus').innerHTML = `Audio is Playing` ;
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
        x.setAttribute('src',audiolinks[ind]);
    }

    //displayMenu(){
        // let iframe = document.getElementById('iframe');
        // iframe.setAttribute('src',audiolinks[0].toString());


        //function to fill audio links to the table
       // this.tableContent();
  //  }


    // tableContent(){
    //    let table = <HTMLTableElement>document.getElementById('trackList');

    //     for(let i=1;i<=audiolinks.length;i++){
    //         let tr2 = document.createElement('tr');
    //         let td1 = document.createElement('td');
    //         let td2 = document.createElement('td');
    //         td1.innerHTML = i.toString();
    //         td2.innerHTML = audiolinks[i];
    //         tr2.append(td1,td2);
    //         table.appendChild(tr2);
    //     }
    // }
}


let music = new MusicPlayer(4,30);

window.onload = ()=>{
    document.getElementById('audio').setAttribute('src',audiolinks[0]);
}

document.getElementById('next').onclick = ()=>{
    music.nextTrack();
}
document.getElementById('prev').onclick = ()=>{
    music.prevTrack();
} 
document.getElementById('pauseplay').onclick = ()=>{
    music.pauseplay();
}


