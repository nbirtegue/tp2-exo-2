input.onButtonPressed(Button.A, function () {
    led.unplot(player, 4)
    player += -1
    if (player < 0) {
        player = 0
    }
    led.plot(player, 4)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(player, 4)
    player += 1
    if (player > 4) {
        player = 4
    }
    led.plot(player, 4)
})
let score = 0
let player = 0
player = 2
led.plot(player, 4)
let PointX = randint(0, 4)
let PointY = -1
let speed = 500
basic.forever(function () {
    led.unplot(PointX, PointY)
    led.plot(player, 4)
    if (PointY == 4) {
        PointX = randint(0, 4)
        PointY = -1
    }
    PointY += 1
    led.plot(PointX, PointY)
    basic.pause(speed)
    if (PointY >= 4 && player == PointX) {
        score += 1
    } else if (PointY >= 4 && player != PointX) {
        basic.clearScreen()
        basic.showString("score:")
        basic.showNumber(score)
        player = 2
        score = 0
        basic.clearScreen()
    }
    if (score == 5) {
        speed = 450
    } else if (score == 10) {
        speed = 300
    } else if (score == 15) {
        speed = 250
    } else if (score == 20) {
        speed = 200
    } else if (score == 25) {
        speed = 150
    } else if (score == 0) {
        speed = 500
    }
})
