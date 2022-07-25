var h = 0;
var m = 0;
var s = 0;

var tempo = 1000; /*quantos milessimos valem um segundo*/
var cron;

function comecar(){
    cron =  setInterval(() => { timer(); }, tempo);
}

function pausar(){
    clearInterval(cron);
}

function parar(){
    clearInterval(cron);
        h = 0;
        m = 0;
        s = 0;
        document.getElementById('contador').innerText = '00:00:00';
}

//CONTAGEM DO TEMPO 
function timer(){
    s++;
    if(s == 60){
        s = 0;
        m++;
            if(m == 60){
                    m = 0;
                    h++
            }
    }

    var format = (h < 10 ? '0' + h : h) + ":" + (m < 10 ? '0' + m : m) + ":" + (s < 10? '0' + s : s) ;
    document.getElementById('contador').innerText = format;
    return format;
}