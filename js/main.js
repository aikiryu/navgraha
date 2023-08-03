//시간계산 및 시계

function clock(){
    let currentTime = new Date();

    let hr = currentTime.getHours(),
        min = currentTime.getMinutes(),
        sec = currentTime.getSeconds(),
        day = currentTime.getDay(),
        date = currentTime.getDate(),
        mon = currentTime.getMonth(),
        year = currentTime.getFullYear();

        let days = ['일','월','화','수','목','금','토']

        if(hr > 12){
            $('.as').text("오후")
            hr -=10;
        }else{
            $('.as').text("오전");
        }

        if(hr==0){
            hr = 12;
        }

        if(hr<10){
            hr = "0"+hr
        }
        if(min<10){
            min = "0"+min
        }
        if(sec<10){
            sec="0"+sec
        }
        
        $('.hr').text(hr);
        $('.min').text(min);

        $('.day').text(days[day]);
        if(date<10){
            date = "0"+date;
        }
        $('.date').text(date);
    
        mon = mon+1;
        if(mon<10){
            mon = "0"+mon;
        }
        $('.month').text(mon);
}

clock();
setInterval(clock,500);


function theme(x){

$('nav .days').children().eq(x)
.addClass('active').siblings()
.removeClass('active');

    let themes = [{
        name : `sun`,
        mainColor : `#fcf7f1`,
        bgColor : `#d2580f`,
        h2 : `태양 - 사하스라라 - 수리야`,
        mandaraCap : `수리야 : 태양 만다라`,
        mandaraImg : `mandara_sun.png`,
        yantraCap : `수리야 얀트라`,
        yantraImg : `yantra_sun.png`,
        chakraEn : `Om Hreem Om`,
        chakraKr : `옴 흐림 옴`,
        astroEn : `Om hram hreem hroum sah suryay namah`,
        astroKr : `옴 흐람 흐림 흐로움 사 수리야이나마하`,
        gayaH3 : `태양 가야트리 만트라`,
        gayaEn : `Om Ashwadhwaja Vidmahe<br>
        Pasa Hasthaya Dheemahi<br>
        Thanno Soorya Prachodayath`,
        gayaKr : `옴 아스와드와자야 비드마히<br>
        파사 하스타야 디마히<br>
        타노 수리야 프라초다얏`
    },{
        name : `mon`,
        mainColor : `#2e3687`,
        bgColor : `#f5f5f5`,
        h2 : `달 - 아즈나 - 찬드라`,
        mandaraCap : `찬드라 : 태음 만다라`,
        mandaraImg : `mandara_mon.png`,
        yantraCap : `찬드라 얀트라`,
        yantraImg : `yantra_mon.png`,
        chakraEn : `Om Kleem Om`,
        chakraKr : `옴 클림 옴`,
        astroEn : `Om shram shreem shraum sah chandray namah`,
        astroKr : `옴 슈람 슈림 슈라움 사 찬드라이 나마하`,
        gayaH3 : `달(태음) 가야트리 만트라`,
        gayaEn : `Om Padmadwajaya Vidmahe<br>
        Hema Roopaya Dheemahi<br>
        Thanno Soma Prachodayath`,
        gayaKr : `옴 파드마드와자야 비드마히<br>
        헤마 루파야 디마히<br>
        타노 소마 프라초다얏`
    },
    {
        name : `tue`,
        mainColor : `#fff`,
        bgColor : `#8c100e`,
        h2 : `화성 - 마니푸라 - 망갈라`,
        mandaraCap : `망갈라 : 화성 만다라`,
        mandaraImg : `mandara_tue.png`,
        yantraCap : `망갈라 얀트라`,
        yantraImg : `yantra_tue.png`,
        chakraEn : `Om Hreem Om`,
        chakraKr : `옴 흐림 옴`,
        astroEn : `Om kram kreem kroum sah bhaumay namah`,
        astroKr : `옴 크람 크림 크로움 사바후마이 나마하`,
        gayaH3 : `화성 가야트리 만트라`,
        gayaEn : `Om Veeradwajaya Vidmahe<br>
        Vighna Hasthaya Dheemahi<br>
        Thanno Bhauma Prachodayath.`,
        gayaKr : `옴 비라드와자야 비드마히<br>
        비그나 하스타야 디마히<br>
        타노 바우마 프라초다얏`
    },{
        name : `wed`,
        mainColor : `#ffffff`,
        bgColor : `#0d4a29`,
        h2 : `수성 - 물라다라 - 붓다`,
        mandaraCap : `붓다 : 수성 만다라`,
        mandaraImg : `mandara_wed.png`,
        yantraCap : `붓다 얀트라`,
        yantraImg : `yantra_wed.png`,
        chakraEn : `Om Im Om`,
        chakraKr : `옴 아임 옴`,
        astroEn : `Om bram breem broum sah budhay namah`,
        astroKr : `옴 브람 브림 브로움 사 부다이나마하`,
        gayaH3 : `수성 가야트리 만트라`,
        gayaEn : `Om Gajadwajaya Vidmahe<br>
        Shuka Hasthaya Dheemahi<br>
        Thanno Budha Prachodayath`,
        gayaKr : `옴 가자드와자야 비드마히<br>
        슈카 하스타야 디마히<br>
        타노 부다 프라초다얏`
    },
    {
        name : `thu`,
        mainColor : `#fcf7f1`,
        bgColor : `#bf840e`,
        h2 : `목성 - 아나하타 - 구루`,
        mandaraCap : `구루 : 목성 만다라`,
        mandaraImg : `mandara_thu.png`,
        yantraCap : `구루 얀트라`,
        yantraImg : `yantra_thu.png`,
        chakraEn : `Om Sreem Om`,
        chakraKr : `옴 스림 옴`,
        astroEn : `Om gram greem groum sah gurave namah`,
        astroKr : `옴 그람 그림 그로움 사 구라베 나마하`,
        gayaH3 : `목성 가야트리 만트라`,
        gayaEn : `Om Vrishabhadwajaya Vidmahe<br>
        Ghrini Hasthaya Dheemahi<br>
        Thanno Guru Prachodayath`,
        gayaKr : `옴 브리샤다드와자야 비드마히<br>
        그리니 하스타야 디마히<br>
        타노 구루 프라초다얏`
    },{
        name : `fri`,
        mainColor : `#aa120b`,
        bgColor : `#eae7d8`,
        h2 : `금성 - 슈크라 - 스와디스타나`,
        mandaraCap : `슈크라 : 금성 만다라`,
        mandaraImg : `mandara_fri.png`,
        yantraCap : `슈크라 얀트라`,
        yantraImg : `yantra_fri.png`,
        chakraEn : `Om Sreem Om`,
        chakraKr : `옴 스림 옴`,
        astroEn : `Om dram dreem droum sah shukray namah`,
        astroKr : `옴 드람 드림 드로움 사 슈크라이 나마하`,
        gayaH3 : `금성 가야트리 만트라`,
        gayaEn : `Om Ashwadwajaya Vidmahe<br>
        Dhanur Hasthaya Dheemahi<br>
        Thanno Shukra Prachodayath`,
        gayaKr : `옴 아스와드와자야 비드마히<br>
        다누르 하스타야 디마히<br>
        타노 슈크라 프라초다얏`
    },
    {
        name : `sat`,
        mainColor : `#fff`,
        bgColor : `#1c1c1e`,
        h2 : `토성 - 비슈다 - 샤니`,
        mandaraCap : `샤니 : 토성 만다라`,
        mandaraImg : `mandara_sat.png`,
        yantraCap : `샤니 얀트라`,
        yantraImg : `yantra_sat.png`,
        chakraEn : `Om Srum Om`,
        chakraKr : `옴 스룸 옴`,
        astroEn : `Om pram preem proum sah shanaischaray namah`,
        astroKr : `옴 프람 프림 프로움 사 샤니스챠라이 나마하`,
        gayaH3 : `토성 가야트리 만트라`,
        gayaEn : `Om Kakadwajaya Vidmahe<br>
        Khadga Hasthaya Dheemahi<br>
        Thanno Manda Prachodayath`,
        gayaKr : `옴 카카드와자야 비드마히<br>
        카드가 하스타야 디마히<br>
        타노 만다 프라초다얏`
    },
    {
        name : `rahu`,
        mainColor : `#fff`,
        bgColor : `#132549`,
        h2 : `용두 - 빈두 - 라후`,
        mandaraCap : `라후 : 용두 만다라`,
        mandaraImg : `mandara_rahu.png`,
        yantraCap : `라후 얀트라`,
        yantraImg : `yantra_rahu.png`,
        chakraEn : `Om Hreem Om`,
        chakraKr : `옴 흐림 옴`,
        astroEn : `Om bhram bhreem bhroum sah rahave namah`,
        astroKr : `옴 브ᄒ람 브ᄒ림 브ᄒ로움 사 라후베 나마하`,
        gayaH3 : `라후 가야트리 만트라`,
        gayaEn : `Om Nagadwajaya Vidmahe<br>
        Padma Hasthaya Dheemahi<br>
        Thanno Rahu Prachodayath`,
        gayaKr : `옴 나가드와자야 비드마히<br>
        파드마 하스타야 디마히<br>
        타노 라후 프라초다얏`
    },
    {
        name : `ketu`,
        mainColor : `#fff`,
        bgColor : `#4e2e21`,
        h2 : `용미 - 소마 - 케투`,
        mandaraCap : `케투 : 용미 만다라`,
        mandaraImg : `mandara_ketu.png`,
        yantraCap : `케투 얀트라`,
        yantraImg : `yantra_ketu.png`,
        chakraEn : `Om Dhum Om`,
        chakraKr : `옴 둠 옴`,
        astroEn : `Om shram shreem shroum sah ketuve namah`,
        astroKr : `옴 싀럄 싀림 싀로움 사 케투베 나마하`,
        gayaH3 : `케투 가야트리 만트라`,
        gayaEn : `Om Ashwadwajaya Vidmahe<br>
        Shoola Hasthaya Dheemahi<br>
        Thanno Ketu Prachodayath`,
        gayaKr : `옴 아스와드야자야 비드마히<br>
        술라 하스타야 디마히<br>
        타노 케두 프라초다얏`
    },
];
    console.log(x);

function paintScreen(){

    if(x == 3 || x == 6 || x == 7 || x == 8){
        $('.rahu_ketu').stop().slideDown();

            if(x == 3){
        $('.rahu_ketu .time').text('저녁');
        $('.rahu_ketu .txt').text('라후');
        $('.rahu_ketu').attr('data-state','rahu');
          }else if(x == 6){
        $('.rahu_ketu .time').text('저녁');
        $('.rahu_ketu .txt').text('케투');
        $('.rahu_ketu').attr('data-state','ketu');
          }else if(x == 7){
            $('.rahu_ketu .time').text('아침');
            $('.rahu_ketu .txt').text('붓다');
            $('.rahu_ketu').attr('data-state','budha');

          }else if(x == 8){
            $('.rahu_ketu .time').text('아침');
            $('.rahu_ketu .txt').text('샤니');
            $('.rahu_ketu').attr('data-state','shani');
          }
  
          
    }else{
        $('.rahu_ketu').hide();
    }


    let dayTit = themes[x].name,
        mainColor = themes[x].mainColor,
        bgColor = themes[x].bgColor,
        h2Tit = themes[x].h2,
        mandaraCap = themes[x].mandaraCap,
        mandaraImg = themes[x].mandaraImg,
        yantraCap = themes[x].yantraCap,
        yantraImg = themes[x].yantraImg,
        chakraEn = themes[x].chakraEn,
        chakraKr = themes[x].chakraKr,
        astroEn = themes[x].astroEn,
        astroKr = themes[x].astroKr,
        gayaH3 = themes[x].gayaH3,
        gayaEn = themes[x].gayaEn,
        gayaKr = themes[x].gayaKr;

     $('#wrap, body').css({
        'backgroundColor' :  bgColor,
        'color' : mainColor
     })
     $('nav .days li').css({
        'borderColor' : mainColor,
        'color' : mainColor,
        'backgroundColor' : 'transparent'
     });
     $('nav .days .active').css({
        'backgroundColor' : mainColor,
        'color' : bgColor
     });
     $('footer').css({
        'color':mainColor
     })


     $('.info h2').text(h2Tit);
     $('.mandaraCaption').text(mandaraCap);
     $('.mandaraImg').find('img').attr('src',`images/${mandaraImg}`);
     $('.yantraCaption').text(yantraCap);
     $('.yantraImg').find('img').attr('src',`images/${yantraImg}`);
     $('.chakra .en').text(chakraEn);
     $('.chakra .kr').text(chakraKr);
     $('.astro .en').text(astroEn);
     $('.astro .kr').text(astroKr);
     $('.gayatri h3').text(gayaH3);
     $('.gayatri .en').html(gayaEn);
     $('.gayatri .kr').html(gayaKr);

     

}//paintScreen()

paintScreen();

}//theme()

let current = new Date();
let currentDay = current.getDay();

theme(currentDay);


$('nav .days').children().click(function(e){
    e.preventDefault();
    let i = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    theme(i);
    
});




$('.rahu_ketu').click(function(){

    let state = $(this).attr('data-state');
    if(state == 'rahu'){
        theme(7);
    }else if(state == 'ketu'){
        theme(8);
    }else if(state == 'budha'){
        theme(3);
    }else if(state == 'shani'){
        theme(6);
    }

})