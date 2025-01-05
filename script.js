window.addEventListener("DOMContentLoaded", function () {

    const startBtn = document.querySelector("#start")
    const stopBtn = document.querySelector("#stop")
    const resetBtn = document.querySelector("#reset")
    const second = document.querySelector("#sec")
    const minuts = document.querySelector("#min")
    const hrs = document.querySelector("#hrs")
    let hr = 0
    let min = 0
    let sec = 0
    let intervalId;
    function startInterval() {
        clearInterval(intervalId)
        intervalId = setInterval(() => {
            sec++
            if (sec >= 60) {
                sec = 0
                min++
            }
            if (min >= 60) {
                min = 0
                hr++
            }
            let secInString = String(sec).padStart(2, "0")
            second.innerHTML = secInString
            let minInString = String(min).padStart(2, "0")
            minuts.innerHTML = minInString
            let hrInString = String(hr).padStart(2, "0")
            hrs.innerHTML = hrInString
        }, 1000);
    }
    startBtn.addEventListener("click", function () {
        startInterval()
    })
    stopBtn.addEventListener("click", function () {
        clearInterval(intervalId)
    })
    resetBtn.addEventListener("click", function () {
        sec = 0
        min = 0
        hr = 0
        second.innerHTML = "00"
        minuts.innerHTML = "00"
        hrs.innerHTML = "00"
        clearInterval(intervalId)
    })

})