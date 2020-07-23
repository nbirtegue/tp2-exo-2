input.onButtonPressed(Button.A, function () {
    Player1 = Player
    Player += -1
    led.unplot(Player1, 4)
    if (Player < 0) {
        Player = 0
    }
    led.plot(Player, 4)
})
input.onButtonPressed(Button.B, function () {
    Player1 = Player
    Player += 1
    led.unplot(Player1, 4)
    if (Player > 4) {
        Player = 4
    }
    led.plot(Player, 4)
})
let pointX = 0
let Player1 = 0
let Player = 0
Player = 2
led.plot(Player, 4)
let PointY = -1
let Score = 0
basic.forever(function () {
    led.unplot(pointX, PointY)
    led.plot(Player, 4)
    if (PointY == 4) {
        pointX = randint(0, 4)
        PointY = -1
    }
    PointY += 1
    led.plot(pointX, PointY)
    if (PointY == 4 && Player == pointX) {
        Score += 1
    } else if (PointY == 4 && Player != pointX) {
        basic.clearScreen()
        basic.showString("Score:")
        basic.showNumber(Score)
        basic.clearScreen()
        Score = 0
    }
    basic.pause(500)
})
