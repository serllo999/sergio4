basic.forever(function () {
    if (input.soundLevel() > 76) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
