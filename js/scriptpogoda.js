// Блок з погодою
const den1 = document.querySelector(`#den1`);
const den2 = document.querySelector(`#den2`);
const den3 = document.querySelector(`#den3`);
const den4 = document.querySelector(`#den4`);
const den5 = document.querySelector(`#den5`);
const den6 = document.querySelector(`#den6`);
const den7 = document.querySelector(`#den7`);
const den01 = document.querySelector(`#pills-pon-tab`);
const den02 = document.querySelector(`#pills-profile-tab`);
const den03 = document.querySelector(`#pills-contact-tab`);
const den04 = document.querySelector(`#pills-disabled-tab`);
const den05 = document.querySelector(`#pills-pyat-tab`);
const den06 = document.querySelector(`#pills-sub-tab`);
const den07 = document.querySelector(`#pills-ned-tab`);



function addLeadingZero(d) {
    return (d < 10) ? '0' + d :d;
}

const days = ['Неділя','Понеділок','Вівторок','Середа','Четверг','Пятниця','Субота'];
const mon = ['Січень','Люти','Березань','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень']

function getUserTime(t1 = new Date()){
    //let Y = t1.getFullYear();
    let M = mon[(t1.getMonth())];
    //if (M < 10) M = '0' + M;
    let D = addLeadingZero(t1.getDate());
    let d = days[t1.getDay()];
    //let h = addLeadingZero(t1.getHours());
    //let m = addLeadingZero(t1.getMinutes());

    //console.log(M,D,d);
    return `${d}<br>${D}<br>${M}`;
}
den01.innerHTML = getUserTime();
console.log(getUserTime());


function getUserTime2(t2 = new Date()){
    let M2 = mon[(t2.getMonth())];
    let D2 = addLeadingZero(t2.getDate());
    let d2 = days[t2.getDay()-6];
    return `${d2}<br>${D2}<br>${M2}`;
}
//////

let t3 = new Date();

function getUserTime3(t3 = new Date()){
    t3.setDate(t3.getDate()+1);
    let M3 = mon[(t3.getMonth())];
    let D3 = addLeadingZero(t3.getDate());
    let d3 = days[t3.getDay()-5];
    return `${d3}<br>${D3}<br>${M3}`;
    console.log(d3);
}

console.log(getUserTime3());
//den03.innerHTML = getUserTime3();

console.log(t3);

            ///////////////////////////////// БЛОК ПОГОДИ

    async function loadWeather(e) {

    const server = 'https://api.open-meteo.com/v1/forecast?latitude=49.2517&longitude=26.5947&hourly=temperature_2m,apparent_temperature,cloudcover,windspeed_10m&timezone=Europe%2FMoscow';
    const response = await fetch(server,{
        method: 'GET',
    });
    const responseResult = await response.json();

    if (response.ok) {
        getWeather(responseResult);
    } else {
        weatherBlock.innerHTML = responseResult.message;
    }
}

function getWeather(data){
    // Обробляємо та виводимо данні
    const arrTemp = [data.hourly.temperature_2m];
    const arrAppTemp = [data.hourly.apparent_temperature];
    const arrWind = [data.hourly.windspeed_10m];
    const cloud = [data.hourly.cloudcover];

    //console.log(data);

    //масив через цикл для зміни числа на картинку

    let tet = cloud[0];
    //console.log(tet[6]);
    let t;
    //console.log(tet[t]);
    let forTet=[];

    for (t=0; t<169; t++){
        if (0<=tet[t] && tet[t]<30) {
            forTet[t] = `<img class="img11" src="img/sun.png" alt"">`;
        } else if (30<=tet[t] && tet[t]<60) {
            forTet[t] = `<img class="img11" src="img/Cloudy.png" alt"">`;
        } else if (60<=tet[t] && tet[t]<95) {
            forTet[t] = `<img class="img11" src="img/rain.png" alt"">`;
        } else if (95<=tet[t] && tet[t]<=100) {
            forTet[t] = `<img class="img11" src="img/thunderstorm.png" alt"">`;
        }
    }
    //вставка даних в HTML
    den1.children[1].innerHTML = `00.00<br>${forTet[0]}<br>${Math.round(arrTemp[0][0])}<br>${Math.round(arrAppTemp[0][0])}<br>${arrWind[0][0]}`;
    den1.children[2].innerHTML = `03.00<br>${forTet[3]}<br>${Math.round(arrTemp[0][3])}<br>${Math.round(arrAppTemp[0][3])}<br>${arrWind[0][3]}`;
    den1.children[3].innerHTML = `06.00<br>${forTet[6]}<br>${Math.round(arrTemp[0][6])}<br>${Math.round(arrAppTemp[0][6])}<br>${arrWind[0][6]}`;
    den1.children[4].innerHTML = `09.00<br>${forTet[9]}<br>${Math.round(arrTemp[0][9])}<br>${Math.round(arrAppTemp[0][9])}<br>${arrWind[0][9]}`;
    den1.children[5].innerHTML = `12.00<br>${forTet[12]}<br>${Math.round(arrTemp[0][12])}<br>${Math.round(arrAppTemp[0][12])}<br>${arrWind[0][12]}`;
    den1.children[6].innerHTML = `15.00<br>${forTet[15]}<br>${Math.round(arrTemp[0][15])}<br>${Math.round(arrAppTemp[0][15])}<br>${arrWind[0][15]}`;
    den1.children[7].innerHTML = `18.00<br>${forTet[18]}<br>${Math.round(arrTemp[0][18])}<br>${Math.round(arrAppTemp[0][18])}<br>${arrWind[0][18]}`;
    den1.children[8].innerHTML = `21.00<br>${forTet[21]}<br>${Math.round(arrTemp[0][21])}<br>${Math.round(arrAppTemp[0][21])}<br>${arrWind[0][21]}`;

    den2.children[1].innerHTML = `00.00<br>${forTet[24]}<br>${Math.round(arrTemp[0][24])}<br>${Math.round(arrAppTemp[0][24])}<br>${arrWind[0][24]}`;
    den2.children[2].innerHTML = `03.00<br>${forTet[27]}<br>${Math.round(arrTemp[0][27])}<br>${Math.round(arrAppTemp[0][27])}<br>${arrWind[0][27]}`;
    den2.children[3].innerHTML = `06.00<br>${forTet[30]}<br>${Math.round(arrTemp[0][30])}<br>${Math.round(arrAppTemp[0][30])}<br>${arrWind[0][30]}`;
    den2.children[4].innerHTML = `09.00<br>${forTet[33]}<br>${Math.round(arrTemp[0][33])}<br>${Math.round(arrAppTemp[0][33])}<br>${arrWind[0][33]}`;
    den2.children[5].innerHTML = `12.00<br>${forTet[36]}<br>${Math.round(arrTemp[0][36])}<br>${Math.round(arrAppTemp[0][36])}<br>${arrWind[0][36]}`;
    den2.children[6].innerHTML = `15.00<br>${forTet[39]}<br>${Math.round(arrTemp[0][39])}<br>${Math.round(arrAppTemp[0][39])}<br>${arrWind[0][39]}`;
    den2.children[7].innerHTML = `18.00<br>${forTet[42]}<br>${Math.round(arrTemp[0][42])}<br>${Math.round(arrAppTemp[0][42])}<br>${arrWind[0][42]}`;
    den2.children[8].innerHTML = `21.00<br>${forTet[45]}<br>${Math.round(arrTemp[0][45])}<br>${Math.round(arrAppTemp[0][45])}<br>${arrWind[0][45]}`;

    den3.children[1].innerHTML = `00.00<br>${forTet[48]}<br>${Math.round(arrTemp[0][48])}<br>${Math.round(arrAppTemp[0][48])}<br>${arrWind[0][48]}`;
    den3.children[2].innerHTML = `03.00<br>${forTet[51]}<br>${Math.round(arrTemp[0][51])}<br>${Math.round(arrAppTemp[0][51])}<br>${arrWind[0][51]}`;
    den3.children[3].innerHTML = `06.00<br>${forTet[54]}<br>${Math.round(arrTemp[0][54])}<br>${Math.round(arrAppTemp[0][54])}<br>${arrWind[0][54]}`;
    den3.children[4].innerHTML = `09.00<br>${forTet[57]}<br>${Math.round(arrTemp[0][57])}<br>${Math.round(arrAppTemp[0][57])}<br>${arrWind[0][57]}`;
    den3.children[5].innerHTML = `12.00<br>${forTet[60]}<br>${Math.round(arrTemp[0][60])}<br>${Math.round(arrAppTemp[0][60])}<br>${arrWind[0][60]}`;
    den3.children[6].innerHTML = `15.00<br>${forTet[63]}<br>${Math.round(arrTemp[0][63])}<br>${Math.round(arrAppTemp[0][63])}<br>${arrWind[0][63]}`;
    den3.children[7].innerHTML = `18.00<br>${forTet[66]}<br>${Math.round(arrTemp[0][66])}<br>${Math.round(arrAppTemp[0][66])}<br>${arrWind[0][66]}`;
    den3.children[8].innerHTML = `21.00<br>${forTet[69]}<br>${Math.round(arrTemp[0][69])}<br>${Math.round(arrAppTemp[0][69])}<br>${arrWind[0][69]}`;

    den4.children[1].innerHTML = `00.00<br>${forTet[72]}<br>${Math.round(arrTemp[0][72])}<br>${Math.round(arrAppTemp[0][72])}<br>${arrWind[0][72]}`;
    den4.children[2].innerHTML = `03.00<br>${forTet[75]}<br>${Math.round(arrTemp[0][75])}<br>${Math.round(arrAppTemp[0][75])}<br>${arrWind[0][75]}`;
    den4.children[3].innerHTML = `06.00<br>${forTet[78]}<br>${Math.round(arrTemp[0][78])}<br>${Math.round(arrAppTemp[0][78])}<br>${arrWind[0][78]}`;
    den4.children[4].innerHTML = `09.00<br>${forTet[81]}<br>${Math.round(arrTemp[0][81])}<br>${Math.round(arrAppTemp[0][81])}<br>${arrWind[0][81]}`;
    den4.children[5].innerHTML = `12.00<br>${forTet[84]}<br>${Math.round(arrTemp[0][84])}<br>${Math.round(arrAppTemp[0][84])}<br>${arrWind[0][84]}`;
    den4.children[6].innerHTML = `15.00<br>${forTet[87]}<br>${Math.round(arrTemp[0][87])}<br>${Math.round(arrAppTemp[0][87])}<br>${arrWind[0][87]}`;
    den4.children[7].innerHTML = `18.00<br>${forTet[90]}<br>${Math.round(arrTemp[0][90])}<br>${Math.round(arrAppTemp[0][90])}<br>${arrWind[0][90]}`;
    den4.children[8].innerHTML = `21.00<br>${forTet[93]}<br>${Math.round(arrTemp[0][93])}<br>${Math.round(arrAppTemp[0][93])}<br>${arrWind[0][93]}`;

    den5.children[1].innerHTML = `00.00<br>${forTet[96]}<br>${Math.round(arrTemp[0][96])}<br>${Math.round(arrAppTemp[0][96])}<br>${arrWind[0][96]}`;
    den5.children[2].innerHTML = `03.00<br>${forTet[99]}<br>${Math.round(arrTemp[0][99])}<br>${Math.round(arrAppTemp[0][99])}<br>${arrWind[0][99]}`;
    den5.children[3].innerHTML = `06.00<br>${forTet[102]}<br>${Math.round(arrTemp[0][102])}<br>${Math.round(arrAppTemp[0][102])}<br>${arrWind[0][102]}`;
    den5.children[4].innerHTML = `09.00<br>${forTet[105]}<br>${Math.round(arrTemp[0][105])}<br>${Math.round(arrAppTemp[0][105])}<br>${arrWind[0][105]}`;
    den5.children[5].innerHTML = `12.00<br>${forTet[108]}<br>${Math.round(arrTemp[0][108])}<br>${Math.round(arrAppTemp[0][108])}<br>${arrWind[0][108]}`;
    den5.children[6].innerHTML = `15.00<br>${forTet[111]}<br>${Math.round(arrTemp[0][111])}<br>${Math.round(arrAppTemp[0][111])}<br>${arrWind[0][111]}`;
    den5.children[7].innerHTML = `18.00<br>${forTet[114]}<br>${Math.round(arrTemp[0][114])}<br>${Math.round(arrAppTemp[0][114])}<br>${arrWind[0][114]}`;
    den5.children[8].innerHTML = `21.00<br>${forTet[117]}<br>${Math.round(arrTemp[0][117])}<br>${Math.round(arrAppTemp[0][117])}<br>${arrWind[0][117]}`;

    den6.children[1].innerHTML = `00.00<br>${forTet[120]}<br>${Math.round(arrTemp[0][120])}<br>${Math.round(arrAppTemp[0][120])}<br>${arrWind[0][120]}`;
    den6.children[2].innerHTML = `03.00<br>${forTet[123]}<br>${Math.round(arrTemp[0][123])}<br>${Math.round(arrAppTemp[0][123])}<br>${arrWind[0][123]}`;
    den6.children[3].innerHTML = `06.00<br>${forTet[126]}<br>${Math.round(arrTemp[0][126])}<br>${Math.round(arrAppTemp[0][126])}<br>${arrWind[0][126]}`;
    den6.children[4].innerHTML = `09.00<br>${forTet[129]}<br>${Math.round(arrTemp[0][129])}<br>${Math.round(arrAppTemp[0][129])}<br>${arrWind[0][129]}`;
    den6.children[5].innerHTML = `12.00<br>${forTet[132]}<br>${Math.round(arrTemp[0][132])}<br>${Math.round(arrAppTemp[0][132])}<br>${arrWind[0][132]}`;
    den6.children[6].innerHTML = `15.00<br>${forTet[135]}<br>${Math.round(arrTemp[0][135])}<br>${Math.round(arrAppTemp[0][135])}<br>${arrWind[0][135]}`;
    den6.children[7].innerHTML = `18.00<br>${forTet[138]}<br>${Math.round(arrTemp[0][138])}<br>${Math.round(arrAppTemp[0][138])}<br>${arrWind[0][138]}`;
    den6.children[8].innerHTML = `21.00<br>${forTet[141]}<br>${Math.round(arrTemp[0][141])}<br>${Math.round(arrAppTemp[0][141])}<br>${arrWind[0][141]}`;

    den7.children[1].innerHTML = `00.00<br>${forTet[144]}<br>${Math.round(arrTemp[0][144])}<br>${Math.round(arrAppTemp[0][144])}<br>${arrWind[0][144]}`;
    den7.children[2].innerHTML = `03.00<br>${forTet[147]}<br>${Math.round(arrTemp[0][147])}<br>${Math.round(arrAppTemp[0][147])}<br>${arrWind[0][147]}`;
    den7.children[3].innerHTML = `06.00<br>${forTet[150]}<br>${Math.round(arrTemp[0][150])}<br>${Math.round(arrAppTemp[0][150])}<br>${arrWind[0][150]}`;
    den7.children[4].innerHTML = `09.00<br>${forTet[153]}<br>${Math.round(arrTemp[0][153])}<br>${Math.round(arrAppTemp[0][153])}<br>${arrWind[0][153]}`;
    den7.children[5].innerHTML = `12.00<br>${forTet[156]}<br>${Math.round(arrTemp[0][156])}<br>${Math.round(arrAppTemp[0][156])}<br>${arrWind[0][156]}`;
    den7.children[6].innerHTML = `15.00<br>${forTet[159]}<br>${Math.round(arrTemp[0][159])}<br>${Math.round(arrAppTemp[0][159])}<br>${arrWind[0][159]}`;
    den7.children[7].innerHTML = `18.00<br>${forTet[162]}<br>${Math.round(arrTemp[0][162])}<br>${Math.round(arrAppTemp[0][162])}<br>${arrWind[0][162]}`;
    den7.children[8].innerHTML = `21.00<br>${forTet[165]}<br>${Math.round(arrTemp[0][165])}<br>${Math.round(arrAppTemp[0][165])}<br>${arrWind[0][165]}`;
}
loadWeather();
