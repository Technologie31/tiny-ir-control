Mbit_IR.onPressEvent(RemoteButton.Power, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
})
Mbit_IR.onPressEvent(RemoteButton.TRight, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 80)
    basic.pause(100)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.Right, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, 80)
    basic.pause(100)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.Up, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 80)
    basic.pause(100)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.Left, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, 80)
    basic.pause(100)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.Down, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 80)
    basic.pause(100)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.TLeft, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 80)
    basic.pause(100)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.NUM3, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Cyan)
})
Mbit_IR.onPressEvent(RemoteButton.NUM5, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.White)
})
Mbit_IR.onPressEvent(RemoteButton.NUM2, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
})
Mbit_IR.onPressEvent(RemoteButton.BEEP, function () {
	
})
Mbit_IR.onPressEvent(RemoteButton.NUM1, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
})
Mbit_IR.onPressEvent(RemoteButton.NUM6, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Blue)
})
Mbit_IR.onPressEvent(RemoteButton.NUM4, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Yellow)
})
Mbit_IR.init(Pins.P8)
basic.forever(function () {
    basic.showIcon(IconNames.House)
})
