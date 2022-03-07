import configData from '../data.json' assert {type: 'json'};
let data = {
    daily: document.querySelector('.daily'),
    weekly:  document.querySelector('.weekly'),
    monthly:  document.querySelector('.monthly')
}

const currentInfo = document.querySelectorAll('.current');
const previousInfo = document.querySelectorAll('.previous');

data.daily.addEventListener('click',getdaily);
data.weekly.addEventListener('click',getWeekly);
data.monthly.addEventListener('click',getMonthly);

getdaily();

function getdaily() {
   
    currentInfo.forEach((e, ind) => {
        e.textContent =  `${configData[ind].timeframes.daily.current}hrs`;
        
    })
    previousInfo.forEach((e, ind) => {
        e.textContent =  `Last Week - ${configData[ind].timeframes.daily.previous}`;
        
    })    
}
function getWeekly() {
   
    currentInfo.forEach((e, ind) => {
        e.textContent =  `${configData[ind].timeframes.weekly.current}hrs`;
        
    })
    previousInfo.forEach((e, ind) => {
        e.textContent =  `Last Week - ${configData[ind].timeframes.weekly.previous}`;
        
    })    
}
function getMonthly() {
   
    currentInfo.forEach((e, ind) => {
        e.textContent =  `${configData[ind].timeframes.monthly.current}hrs`;
        
    })
    previousInfo.forEach((e, ind) => {
        e.textContent =  `Last Week - ${configData[ind].timeframes.monthly.previous}`;
        
    })    
}

