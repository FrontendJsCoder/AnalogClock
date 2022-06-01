//Variables
let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('seconds')

//Setting the clock
let set_clock = setInterval(() => {
    let date_now = new Date();

    let hr = date_now.getHours();
    let min = date_now.getMinutes();
    let sec = date_now.getSeconds();
})