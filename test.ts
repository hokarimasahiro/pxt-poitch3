music.rest(music.beat(BeatFraction.Whole))
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        led.plot(0, 2)
        music.ringTone(262)
    } else if (poitch3.testSwitch(DigitalPin.P8)) {
        led.plot(1, 4)
        music.ringTone(294)
    } else if (input.pinIsPressed(TouchPin.P1)) {
        led.plot(1, 2)
        music.ringTone(330)
    } else if (poitch3.testSwitch(DigitalPin.P12)) {
        led.plot(2, 4)
        music.ringTone(349)
    } else if (input.pinIsPressed(TouchPin.P2)) {
        led.plot(2, 2)
        music.ringTone(392)
    } else if (poitch3.testSwitch(DigitalPin.P13)) {
        led.plot(3, 4)
        music.ringTone(440)
    } else if (poitch3.testSwitch(DigitalPin.P16)) {
        led.plot(4, 4)
        music.ringTone(494)
    } else if (input.buttonIsPressed(Button.B)) {
        led.plot(4, 2)
        music.ringTone(523)
    } else {
        basic.clearScreen()
        music.rest(music.beat(BeatFraction.Sixteenth))
    }
})
