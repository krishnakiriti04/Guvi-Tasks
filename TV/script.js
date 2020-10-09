var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var videoLinks = ['https://cdn.videvo.net/videvo_files/video/free/2014-05/small_watermarked/Tree_Bokeh_Background_preview.webm',
    'https://cdn.videvo.net/videvo_files/video/free/2017-12/small_watermarked/171124_B1_HD_001_preview.webm',
    'https://cdn.videvo.net/videvo_files/video/free/2015-02/small_watermarked/Blurry_Trees_Seamless_Loop_01_Videvo_preview.webm',
    'https://cdn.videvo.net/videvo_files/video/free/2015-04/small_watermarked/Ocean_Waves_slow_motion_videvo_preview.webm',
    'https://cdn.videvo.net/videvo_files/video/free/2013-10/small_watermarked/TimelapseClouds01JamaJamon_preview.webm',
    'https://cdn.videvo.net/videvo_files/video/free/2015-04/small_watermarked/Ocean_Waves_slow_motion_videvo_preview.webm',
    'https://cdn.videvo.net/videvo_files/video/free/2015-08/small_watermarked/Dolphin_preview.webm',
    'https://cdn.videvo.net/videvo_files/video/free/2017-12/small_watermarked/170105_2_4K_03_preview.webm',
    'https://cdn.videvo.net/videvo_files/video/free/2014-07/small_watermarked/Saint_Barthelemy_2_preview.webm',
    'https://cdn.videvo.net/videvo_files/video/free/2018-07/small_watermarked/180607_A_101_preview.webm'];
var onoff;
(function (onoff) {
    onoff["tv_on"] = "on";
    onoff["tv_off"] = "off";
})(onoff || (onoff = {}));
var Tv = /** @class */ (function () {
    function Tv(brandName, tv_inches, tv_price, tv_status, channel_num, tv_volume) {
        if (tv_inches === void 0) { tv_inches = 32; }
        if (channel_num === void 0) { channel_num = 1; }
        if (tv_volume === void 0) { tv_volume = 50; }
        this.brand = brandName;
        this.channel = channel_num;
        this.volume = tv_volume;
        this.price = tv_price;
        this.inches = tv_inches;
        this.status = tv_status;
    }
    Tv.prototype.increaseVolume = function () {
        if (this.volume < 99) {
            var sliderVal = document.getElementById('slider');
            var vidvolume = document.getElementById('tv');
            this.volume += 2;
            vidvolume.volume = this.volume / 100;
            sliderVal.value = this.volume.toString();
            label.innerHTML = ": " + slider.value;
            console.log("volume increased to " + this.volume);
        }
    };
    Tv.prototype.decreaseVolume = function () {
        if (this.volume > 1) {
            var sliderVal = document.getElementById('slider');
            var vidvolume = document.getElementById('tv');
            this.volume -= 2;
            ;
            vidvolume.volume = this.volume / 100;
            sliderVal.value = this.volume.toString();
            label.innerHTML = ": " + slider.value;
            console.log("volume decreased to " + this.volume);
        }
    };
    Tv.prototype.setChannel = function (channelNo) {
        if (channelNo < 50 && channelNo > 0) {
            this.channel = channelNo;
            console.log("channel changed to " + this.channel);
        }
    };
    Tv.prototype.resetTV = function () {
        this.status = onoff.tv_off;
        this.channel = 1;
        this.volume = 50;
    };
    Tv.prototype.tvStatus = function () {
        console.log(this.brand + " at channel " + this.channel + " with volume " + this.volume);
    };
    return Tv;
}());
var LED = /** @class */ (function (_super) {
    __extends(LED, _super);
    function LED(brandName, tvInches, refreshRate, thickness, energy_usage, lifespan) {
        if (tvInches === void 0) { tvInches = 32; }
        if (refreshRate === void 0) { refreshRate = 60; }
        if (thickness === void 0) { thickness = 4; }
        var _this = _super.call(this, brandName, tvInches) || this;
        _this.refresh_rate = refreshRate;
        _this.thickness = thickness;
        _this.viewing_angle = {};
        _this.backlights = '';
        return _this;
    }
    LED.prototype.viewingAngle = function (horz, vert) {
        this.viewing_angle = {
            horizontol: horz,
            vertical: vert
        };
    };
    LED.prototype.backlightsType = function (back_light) {
        this.backlights = back_light;
    };
    LED.prototype.displayDetails = function () {
        console.log(this.brand + " TV of " + this.inches + " inches and thickness " + this.thickness + "  has viewangle of " + this.viewing_angle.horizontol + "/" + this.viewing_angle.vertical);
    };
    return LED;
}(Tv));
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
var container = document.createElement('div');
container.setAttribute('class', 'container');
// let jumbo = <HTMLDivElement>document.createElement('div');
// jumbo.setAttribute('class', 'jumbotron text-center bg-dark text-light')
// let h1 = <HTMLDivElement>document.createElement('h1')
// h1.innerHTML = 'Virtual TV';
var div_row = document.createElement('div');
div_row.setAttribute('class', 'row mt-5');
var div_col1 = document.createElement('div');
div_col1.setAttribute('class', 'col-md-8 col-sm-8');
var tv_container = document.createElement('div');
tv_container.setAttribute('class', 'tvdiv');
tv_container.id = 'tv_container';
var div_col2 = document.createElement('div');
div_col2.setAttribute('class', 'col-md-4 col-sm-4');
// <img src="remote.jpg" alt="remote" usemap="#image-map">
var remote_img = document.createElement('img');
remote_img.src = 'remote.jpg';
remote_img.useMap = "#image-map";
remote_img.alt = "Remote";
var remote_map = document.createElement('map');
remote_map.name = "image-map";
remote_map.id = "img-map";
var btn1 = createArea('btn1', '144,73,159,81', 'rect');
var btn2 = createArea('btn2', '169,70,185,78', 'rect');
var btn3 = createArea('btn3', "196,70,209,80", "rect");
var btn4 = createArea('btn4', "143,88,159,101", "rect");
var btn5 = createArea('btn5', '169,89,183,100', 'rect');
var btn6 = createArea('btn6', '194,89,209,100', 'rect');
var btn7 = createArea('btn7', "144,109,159,121", "rect");
var btn8 = createArea('btn8', "170,110,185,122", "rect");
var btn9 = createArea('btn9', "194,110,210,120", "rect");
var volumeup = createArea('volume_up', '145,153,156,164', 'rect');
var volumedown = createArea('volume_down', '144,177,159,188', 'rect');
var channelup = createArea('channel_up', '193,153,212,165', 'rect');
var channeldown = createArea('channel_down', '195,175,209,188', 'rect');
var div_slider = document.createElement('div');
div_slider.setAttribute('class', 'mt-3');
var d1 = document.createElement('div');
d1.setAttribute('class', 'mt-5');
var slider = document.createElement('input');
slider.type = 'range';
slider.min = "1";
slider.max = "100";
slider.value = "50";
slider.id = 'slider';
slider.disabled = true;
slider.name = 'slider';
var d2 = document.createElement('div');
var p = document.createElement('p');
p.id = "ptag";
p.innerHTML = "Channel : " + tv1.channel;
var label = document.createElement('label');
label.setAttribute('for', 'slider');
label.innerHTML = ": " + slider.value;
// jumbo.append(h1);
div_col2.append(remote_img, remote_map);
remote_map.append(btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, volumeup, volumedown, channelup, channeldown);
d1.append(slider, label);
d2.append(p);
div_slider.append(d1, d2);
div_col1.append(tv_container);
div_row.append(div_col1, div_col2);
container.append(div_row, div_slider);
document.body.appendChild(container);
//function to create area element
function createArea(btnid, coords, btnshape) {
    var area = document.createElement('area');
    area.shape = btnshape;
    area.coords = coords;
    area.id = btnid;
    return area;
}
var _loop_1 = function (i) {
    document.getElementById("btn" + i).addEventListener('click', function (e) {
        e.preventDefault();
        tv1.channel = i;
        p.innerHTML = "channel : " + tv1.channel;
        console.log("channel changed to " + tv1.channel);
        appendVideo(videoLinks[i - 1]);
    });
};
//adding event to set channel button
for (var i = 1; i < videoLinks.length; i++) {
    _loop_1(i);
}
//adding event to volume up button
document.getElementById('volume_up').addEventListener('click', function (e) {
    e.preventDefault();
    tv1.increaseVolume();
});
//adding event to volume down button
document.getElementById('volume_down').addEventListener('click', function (e) {
    e.preventDefault();
    tv1.decreaseVolume();
});
//adding event to channel up button
document.getElementById('channel_up').addEventListener('click', function (e) {
    e.preventDefault();
    if (tv1.channel < (videoLinks.length - 1) && tv1.channel >= 0) {
        tv1.channel++;
        p.innerHTML = "channel : " + tv1.channel;
        console.log(tv1.channel);
        appendVideo(videoLinks[tv1.channel]);
    }
    else {
        console.log('no channel found');
    }
});
//adding event to channel down button
document.getElementById('channel_down').addEventListener('click', function (e) {
    e.preventDefault();
    if (tv1.channel < (videoLinks.length) && tv1.channel > 0) {
        tv1.channel--;
        p.innerHTML = "channel : " + tv1.channel;
        console.log(tv1.channel);
        appendVideo(videoLinks[tv1.channel]);
    }
    else {
        console.log('no channel found');
    }
});
//function to append video to the video element
var appendVideo = function (vlink) {
    var tv_box = document.getElementById('tv_container');
    tv_box.innerHTML = '';
    var vid = document.createElement('video');
    // vid.controls = true;
    vid.src = vlink;
    vid.height = 500;
    vid.autoplay = true;
    vid.id = 'tv';
    vid.loop = true;
    vid.setAttribute('class', 'tv');
    tv_box.append(vid);
};
