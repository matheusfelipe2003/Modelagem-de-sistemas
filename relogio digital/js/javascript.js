// ATIVIDADE PONTUADA TURMA 88434
//Alunos: Anderson Sampaio, Leonardo Paixão e Matheus Felipe


let horas = document.getElementById('horas');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let ampm = document.getElementById('ampm');

let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let hr_ponto = document.querySelector(' .hr_ponto');
let min_ponto = document.querySelector(' .min_ponto');
let seg_ponto = document.querySelector(' .seg_ponto');

setInterval(() =>{
    console.log('óla');
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let amdDmd  = h >= 12 ? 'PM' : 'AM';
    
    if(h > 12) {
         h = h - 12;
    }
    
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;
    
    console.log(amdDmd);
    
    horas.innerHTML = h + '<br><span>Horas</span>';
    minutos.innerHTML = m + '<br><span>Minutos</span>';
    segundos.innerHTML = s + '<br><span>Segundos</span>';
    ampm.innerHTML = amdDmd;

    hh.style.strokeDashoffset =  440 - ( 440 * h) / 12;
    mm.style.strokeDashoffset =  440 - ( 440 * m) / 60;
    ss.style.strokeDashoffset =  440 - ( 440 * s) / 60;

    hr_ponto.style.transform = `rotate(${h * 30}deg)`
    min_ponto.style.transform = `rotate(${m * 6}deg)`
    seg_ponto.style.transform = `rotate(${s * 6}deg)`

})