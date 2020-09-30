window.onload = function() {

    var txt = document.getElementById('text');
    var msg = document.getElementById('msg');
    msg.style.visibility = 'hidden';

    txt.innerHTML = 10;
    setTimeout(function() {
        txt.innerHTML = 9;
        setTimeout(function() {
            txt.innerHTML = 8;
            setTimeout(function() {
                txt.innerHTML = 7;
                setTimeout(function() {
                    txt.innerHTML = 6;
                    setTimeout(function() {
                        txt.innerHTML = 5;
                        setTimeout(function() {
                            txt.innerHTML = 4;
                            setTimeout(function() {
                                txt.innerHTML = 3;
                                setTimeout(function() {
                                    txt.innerHTML = 2;
                                    setTimeout(function() {
                                        txt.innerHTML = 1;
                                        setTimeout(function() {
                                            msg.style.visibility = 'visible';
                                            txt.style.visibility = 'hidden';
                                            // setTimeout(function() {
                                            //     msg.style.visibility = 'hidden';
                                            // }, 3000)
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)

}