const btn = document.querySelector('.btn')
let days = document.querySelector('.days')
let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')
let hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

function countdown() {    
    const newYearDate = new Date('1 Jan 2022')
    const currentTime = new Date()
    let time = (newYearDate - currentTime);
    let hexDays = Math.floor(time/1000/60/60/24);
    let hexHours = Math.floor(time/1000/60/60)%24;
    let hexMinutes = Math.floor(time/1000/60)%60;
    let hexSeconds = Math.floor(time/1000)%60;

    days.innerHTML = hexDays;
    hours.innerHTML = hexHours;
    minutes.innerHTML = hexMinutes;
    seconds.innerHTML = hexSeconds;
    
    changeColor(hexHours,hexMinutes,hexSeconds,hexDays);
}

function changeColor(h,m,s,d) {
    console.log()
    let color = "#" + m + s + Math.floor(h/10) + Math.floor(d%10);
    console.log(color)
    document.body.style.backgroundColor = color;
}

function getRandomColor(){
    let randomColor = '#';
    for(let i=0;i<6;i++){
        randomColor += hexValues[Math.floor(Math.random()*hexValues.length)]
    }
    console.log(randomColor);
    return randomColor;
}

btn.addEventListener('click', function(){
    document.body.style.backgroundColor = getRandomColor();
})
setInterval(countdown,1000);