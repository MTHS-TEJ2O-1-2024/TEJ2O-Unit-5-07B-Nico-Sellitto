/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nico Sellitto
 * Created on: Oct 2024
 * This program turns a servo
*/

const servoNumber1 = robotbit.Servos.S1

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Turns servo 0 dergrees 
input.onButtonPressed(Button.A, function() {
    robotbit.Servo(servoNumber1, 0)
    basic.clearScreen()
    basic.showString('0')
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Happy)
})

// Turns servo 180 dergrees 
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(servoNumber1, 180)
    basic.clearScreen()
    basic.showString('180')
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Happy)
})
