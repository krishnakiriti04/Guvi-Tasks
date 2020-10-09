let videoLinks = ['https://cdn.videvo.net/videvo_files/video/free/2014-05/small_watermarked/Tree_Bokeh_Background_preview.webm',
    'https://cdn.videvo.net/videvo_files/video/free/2017-12/small_watermarked/171124_B1_HD_001_preview.webm',
    'https://cdn.videvo.net/videvo_files/video/free/2015-02/small_watermarked/Blurry_Trees_Seamless_Loop_01_Videvo_preview.webm',
    'https://cdn.videvo.net/videvo_files/video/free/2015-04/small_watermarked/Ocean_Waves_slow_motion_videvo_preview.webm',
    'https://cdn.videvo.net/videvo_files/video/free/2013-10/small_watermarked/TimelapseClouds01JamaJamon_preview.webm',
    'https://cdn.videvo.net/videvo_files/video/free/2015-04/small_watermarked/Ocean_Waves_slow_motion_videvo_preview.webm',
    'https://cdn.videvo.net/videvo_files/video/free/2015-08/small_watermarked/Dolphin_preview.webm',
    'https://cdn.videvo.net/videvo_files/video/free/2017-12/small_watermarked/170105_2_4K_03_preview.webm',
    'https://cdn.videvo.net/videvo_files/video/free/2014-07/small_watermarked/Saint_Barthelemy_2_preview.webm',
'https://cdn.videvo.net/videvo_files/video/free/2018-07/small_watermarked/180607_A_101_preview.webm']


enum onoff {
    tv_on = 'on',
    tv_off = 'off'
}

class Tv {
    public brand: string;
    public channel: number;
    public price;
    public inches;
    public status: string;
    public volume: number;
    constructor(brandName, tv_inches = 32, tv_price?, tv_status?, channel_num = 1, tv_volume = 50) {
        this.brand = brandName;
        this.channel = channel_num;
        this.volume = tv_volume;
        this.price = tv_price;
        this.inches = tv_inches;
        this.status = tv_status;
    }

    increaseVolume() {
        if (this.volume < 99) {
            let sliderVal = (<HTMLInputElement>document.getElementById('slider'));
            let vidvolume = (<HTMLVideoElement>document.getElementById('tv'));
            this.volume += 2;
            vidvolume.volume = this.volume / 100;
            sliderVal.value = this.volume.toString();
            label.innerHTML = `: ${slider.value}`
            console.log(`volume increased to ${this.volume}`);
        }
    }

    decreaseVolume() {
        if (this.volume > 1) {
            let sliderVal = (<HTMLInputElement>document.getElementById('slider'));
            let vidvolume = (<HTMLVideoElement>document.getElementById('tv'));
            this.volume -= 2;;
            vidvolume.volume = this.volume / 100;
            sliderVal.value = this.volume.toString();
            label.innerHTML = `: ${slider.value}`
            console.log(`volume decreased to ${this.volume}`);
        }
    }

    setChannel(channelNo: number) {
        if (channelNo < 50 && channelNo > 0) {
            this.channel = channelNo;
            console.log(`channel changed to ${this.channel}`);
        }
    }

    resetTV() {
        this.status = onoff.tv_off;
        this.channel = 1;
        this.volume = 50;
    }

    tvStatus() {
        console.log(`${this.brand} at channel ${this.channel} with volume ${this.volume}`);
    }
}


class LED extends Tv {
    thickness;
    energy;
    lifespan;
    refresh_rate;
    viewing_angle;
    backlights;
    constructor(brandName, tvInches = 32, refreshRate = 60, thickness = 4, energy_usage?, lifespan?) {
        super(brandName,tvInches);
        this.refresh_rate = refreshRate;
        this.thickness = thickness;
        this.viewing_angle = {};
        this.backlights = '';
    }

    viewingAngle(horz, vert) {
        this.viewing_angle = {
            horizontol: horz,
            vertical: vert
        }
    }

    backlightsType(back_light) {
        this.backlights = back_light;
    }

    displayDetails() {
        console.log(`${this.brand} TV of ${this.inches} inches and thickness ${this.thickness}  has viewangle of ${this.viewing_angle.horizontol}/${this.viewing_angle.vertical}`);
    }
}


// var newTv = new Tv('Samsung');

// newTv.setChannel(20);
// newTv.increaseVolume();
// console.log(newTv.volume,newTv.channel)

// newTv.resetTV();

// newTv.tvStatus();


// var ledtv = new LED('Panasonic',60,5,1,10)
// ledtv.backlightsType('LCD');
// ledtv.viewingAngle(150,110);
// ledtv.displayDetails()

var tv1 = new Tv('LG', 32, 10000, 'on', 3, 56);

//UI
let container = <HTMLDivElement><HTMLDivElement>document.createElement('div');
container.setAttribute('class', 'container')

// let jumbo = <HTMLDivElement>document.createElement('div');
// jumbo.setAttribute('class', 'jumbotron text-center bg-dark text-light')

// let h1 = <HTMLDivElement>document.createElement('h1')
// h1.innerHTML = 'Virtual TV';

let div_row = <HTMLDivElement>document.createElement('div');
div_row.setAttribute('class', 'row mt-5')

let div_col1 = <HTMLDivElement>document.createElement('div');
div_col1.setAttribute('class', 'col-md-8 col-sm-8')

let tv_container = <HTMLDivElement>document.createElement('div')
tv_container.setAttribute('class', 'tvdiv');
tv_container.id = 'tv_container'

let div_col2 = <HTMLDivElement>document.createElement('div');
div_col2.setAttribute('class', 'col-md-4 col-sm-4')

// <img src="remote.jpg" alt="remote" usemap="#image-map">
let remote_img = <HTMLImageElement>document.createElement('img');
remote_img.src = 'remote.jpg';
remote_img.useMap = "#image-map"
remote_img.alt = "Remote";

let remote_map = <HTMLMapElement>document.createElement('map');
remote_map.name = "image-map";
remote_map.id = "img-map";

let btn1 = createArea('btn1', '144,73,159,81', 'rect')
let btn2 = createArea('btn2', '169,70,185,78', 'rect');
let btn3 = createArea('btn3', "196,70,209,80", "rect");
let btn4 = createArea('btn4', "143,88,159,101", "rect");
let btn5 = createArea('btn5', '169,89,183,100', 'rect')
let btn6 = createArea('btn6', '194,89,209,100', 'rect');
let btn7 = createArea('btn7', "144,109,159,121", "rect");
let btn8 = createArea('btn8', "170,110,185,122", "rect");
let btn9 = createArea('btn9', "194,110,210,120", "rect");
let volumeup = createArea('volume_up', '145,153,156,164', 'rect');
let volumedown = createArea('volume_down', '144,177,159,188', 'rect');
let channelup = createArea('channel_up', '193,153,212,165', 'rect');
let channeldown = createArea('channel_down', '195,175,209,188', 'rect');

let div_slider = <HTMLDivElement>document.createElement('div');
div_slider.setAttribute('class', 'mt-3')

let d1 = document.createElement('div');
d1.setAttribute('class','mt-5')

let slider = document.createElement('input');
slider.type = 'range'
slider.min = "1";
slider.max = "100";
slider.value = "50";
slider.id = 'slider';
slider.disabled = true;
slider.name = 'slider';

let d2 = document.createElement('div');

let p = document.createElement('p');
p.id = "ptag"
p.innerHTML = `Channel : ${tv1.channel}`

let label = document.createElement('label');
label.setAttribute('for', 'slider');
label.innerHTML = `: ${slider.value}`;

// jumbo.append(h1);
div_col2.append(remote_img, remote_map);
remote_map.append(btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, volumeup, volumedown, channelup, channeldown);
d1.append(slider, label);
d2.append(p);
div_slider.append(d1, d2);
div_col1.append(tv_container);
div_row.append(div_col1, div_col2);
container.append( div_row, div_slider);
<HTMLDivElement>document.body.appendChild(container);

//function to create area element
function createArea(btnid, coords, btnshape) {
    let area = <HTMLAreaElement>document.createElement('area');
    area.shape = btnshape;
    area.coords = coords;
    area.id = btnid;
    return area;
}

//adding event to set channel button
for (let i = 1; i < videoLinks.length; i++) {
    document.getElementById(`btn${i}`).addEventListener('click', (e) => {
        e.preventDefault();
        tv1.channel = i;
        p.innerHTML = `channel : ${tv1.channel}`
        console.log(`channel changed to ${tv1.channel}`);
        appendVideo(videoLinks[i-1]);
    })
}

//adding event to volume up button
document.getElementById('volume_up').addEventListener('click', (e) => {
    e.preventDefault();
    tv1.increaseVolume();
})

//adding event to volume down button
document.getElementById('volume_down').addEventListener('click', (e) => {
    e.preventDefault();
    tv1.decreaseVolume();
})

//adding event to channel up button
document.getElementById('channel_up').addEventListener('click', (e) => {
    e.preventDefault();
    if (tv1.channel < (videoLinks.length - 1) && tv1.channel >= 0) {
        tv1.channel++;
        p.innerHTML = `channel : ${tv1.channel}`
        console.log(tv1.channel);
        appendVideo(videoLinks[tv1.channel]);
    }
    else {
        console.log('no channel found');
    }

})

//adding event to channel down button
document.getElementById('channel_down').addEventListener('click', (e) => {
    e.preventDefault();
    if (tv1.channel < (videoLinks.length) && tv1.channel > 0) {
        tv1.channel--;
        p.innerHTML = `channel : ${tv1.channel}`
        console.log(tv1.channel);
        appendVideo(videoLinks[tv1.channel]);
    }
    else {
        console.log('no channel found');
    }

})

//function to append video to the video element
let appendVideo = (vlink) => {
    var tv_box = <HTMLDivElement>document.getElementById('tv_container');
    tv_box.innerHTML = '';
    let vid = <HTMLVideoElement>document.createElement('video');
    // vid.controls = true;
    vid.src = vlink;
    vid.height = 500;
    vid.autoplay = true;
    vid.id = 'tv';
    vid.loop = true;
    vid.setAttribute('class', 'tv');
    tv_box.append(vid);
}
