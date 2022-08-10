//Declarando as variáveis

let hour = 0
let minute = 0
let second = 0
let millisecond = 0

let cronometro

document.form_main.start.onclick = () => start()
document.form_main.pause.onclick = () => pause()
document.form_main.reset.onclick = () => reset()

//Funções de start, pause e reset

function start() {

    pause()
    cronometro = setInterval(() => { timer() }, 10)

}

function pause() {

    clearInterval(cronometro)

}

function reset() {

    hour = 0
    minute = 0
    second = 0
    millisecond = 0

    document.getElementById('hour').innerHTML = '00'
    document.getElementById('minute').innerHTML = '00'
    document.getElementById('second').innerHTML = '00'
    document.getElementById('millisecond').innerHTML = '000'

}

//Timer

function timer() {

    if ((millisecond += 10) == 1000) {
        millisecond = 0
        second++
    }

    if (second == 60) {
        second = 0
        minute++
    }

    if (minute == 60) {
        minute = 0
        hour++
    }

    document.getElementById('hour').innerHTML = returnData(hour)
    document.getElementById('minute').innerHTML = returnData(minute)
    document.getElementById('second').innerHTML = returnData(second)
    document.getElementById('millisecond').innerHTML = returnData(millisecond)

}

function returnData(input) {

    return input > 10 ? input : `0${input}`

}