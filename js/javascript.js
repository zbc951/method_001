$(function(){
    var li = document.getElementsByClassName('line');
    var li2 = document.getElementsByClassName('line2');
    var li3 = document.getElementsByClassName('line3');
    var liBox = document.getElementsByClassName('lineBox');
    var liBox2 = document.getElementsByClassName('lineBox2');
    var liBox3 = document.getElementsByClassName('lineBox3');
    var li_p = $('.line p');
    var li_p2 = $('.line2 p');
    var li_p3 = $('.line3 p');
    var li_Total = li.length;

    function getRandom(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }

    liBox[0].style.height = getRandom(400,600) + "px";
    liBox2[0].style.height = getRandom(200,500) + "px";
    liBox3[0].style.height = getRandom(300,700) + "px";

    for(i = 0;i <li_Total;i++){
        li[i].style.transitionDuration = 0.5 + 0.05*i + "s";
        li_p[i].style.transitionDuration = 0.7 + 0.05*i + "s";
        li2[i].style.transitionDuration = 0.3 + 0.05*i + "s";
        li_p2[i].style.transitionDuration = 0.5 + 0.05*i + "s";
        li3[i].style.transitionDuration = 0.2 + 0.05*i + "s";
        li_p3[i].style.transitionDuration = 0.4 + 0.05*i + "s";
    }

    for(c = 0;c <li_Total;c++){
        li[c].style.width = getRandom(100,300) + "%";
        li[c].style.height = getRandom(10,30) + "px";
        li2[c].style.width = getRandom(100,300) + "%";
        li2[c].style.height = getRandom(10,30) + "px";
        li3[c].style.width = getRandom(100,300) + "%";
        li3[c].style.height = getRandom(10,30) + "px";
        setTimeout(function(){
            $(li_p).css('width','0%');
            $(li_p2).css('width','0%');
            $(li_p3).css('width','0%');
        },400);
    }
})

$(function(){
    setTimeout(function(){
        $('.lineDrawing').addClass('display');

        var lineDrawing = anime({
            targets: '.lineDrawing .lines path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1000,
            delay: function(el, i) { return i * 500 },
        });
    },850)
})