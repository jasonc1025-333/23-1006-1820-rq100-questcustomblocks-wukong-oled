// tests go here; this will not be compiled when this package is used as an extension.

// jwc 23-1006-1847
// jwc 23-1019-1900
// jwc 24-0214-0400

input.onButtonPressed(Button.A, function () {
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        50,
        -50,
        quest_Turn_Duration_Enum.msec_2000,
        quest_Debug_Show_Enum.Dashboard_OLED,
    )
})
input.onButtonPressed(Button.B, function () {
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        -50,
        50,
        quest_Turn_Duration_Enum.msec_2000,
        quest_Debug_Show_Enum.MicroBit_Screen,
    )
})

input.onGesture(Gesture.TiltLeft, function () {
    quest_Motors.quest_Set_Turn_WithTimer_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        quest_Turn_Type_Enum.Pivot,
        quest_Turn_Direction_Enum.right,
        quest_Turn_Power_Enum.Lo,
        quest_Turn_Duration_Enum.msec_3000,
        quest_Debug_Show_Enum.Dashboard_OLED,
    )
})
input.onGesture(Gesture.TiltRight, function () {
    quest_Motors.quest_Set_Turn_WithTimer_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        quest_Turn_Type_Enum.Spin,
        quest_Turn_Direction_Enum.left,
        quest_Turn_Power_Enum.Mi,
        quest_Turn_Duration_Enum.msec_5000,
        quest_Debug_Show_Enum.MicroBit_Screen,
    )
})

basic.forever(function () {
    quest_Dashboard.quest_Show_String_For_Oled_BigFont_Func(
        convertToText(randint(0, 9)),
        0,
        0
    )
        quest_Dashboard.quest_Show_Oled_Cleared_Func(
        )
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
})

////jwc y basic.forever(function () {
////jwc y     serial.writeLine(' > quest_Sensors.quest_Get_Controller_Joystick_Directional_AngleDegree_IncrementOf90_AsIntOut_Func: ' + convertToText(quest_Sensors.quest_Get_Controller_Joystick_Directional_AngleDegree_IncrementOfDegree90_AsIntOut_Func()))
////jwc y     serial.writeLine(' > quest_Sensors.quest_Get_Controller_Joystick_Directional_MagnitudePixel_AsIntOut_Func(): ' + convertToText(quest_Sensors.quest_Get_Controller_Joystick_Directional_MagnitudePixel_AsIntOut_Func()))
////jwc y })

basic.forever(function () {
    serial.writeLine(' > L: ' + quest_General.quest_Get_String_WithColumnPadding_AsStringOut_Func(convertToText(randint(0, 999)), 10, quest_String_Justify_Type_Enum.justify_Left) + ' < ')
    serial.writeLine(' > R: ' + quest_General.quest_Get_String_WithColumnPadding_AsStringOut_Func(convertToText(randint(0, 999)), 10, quest_String_Justify_Type_Enum.justify_Right) + ' < ')
})
