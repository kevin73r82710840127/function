function pythagorean (num: number, num2: number) {
    return Math.sqrt(num * num * (num2 * num2))
}
input.onButtonPressed(Button.AB, function () {
    let base = 0
    displaying()
    basic.clearScreen()
    basic.showNumber(pythagorean(height, base))
})
function displaying () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # . #
            . # . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            # # # # #
            `)
    }
}
let height = 0
height = 3
height = 4
