let second = document.querySelector(".sec")
let minute = document.querySelector(".min")
let hour = document.querySelector(".hour")

let dateSec = new Date().getSeconds() * 6
let dateMin = new Date().getMinutes() * 6 
let dateHour = (new Date().getHours() - 12) * 6 * 5

function timer(){
    second.style.transform = `rotate(${dateSec }deg)`
    minute.style.transform = `rotate(${dateMin }deg)`
    hour.style.transform = `rotate(${dateHour }deg)`
    
    setInterval(function(){
        second.style.transform = `rotate(${dateSec += 6 }deg)`
        // += 6 because 360deg / 60 sec = 6
    }, 1000)

    setInterval(function(){
        minute.style.transform = `rotate(${dateMin += 6 }deg)`
    } , 60000)
    
    setInterval(function(){
        // += 30 because timer 12 hour for 360 deg
        hour.style.transform = `rotate(${dateHour += 30 }deg)`
    } , 360000)
    
}
    
timer()