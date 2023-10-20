// tests go here; this will not be compiled when this package is used as an extension.

// jwc 23-1006-1847
// jwc 23-1019-1900

input.onButtonPressed(Button.A, function () {
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Fn(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        50,
        -50,
        turn_Duration_Enum.msec_2000,
        debug_Show_Enum.Dashboard_OLED,
    )
})
input.onButtonPressed(Button.B, function () {
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Fn(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        -50,
        50,
        turn_Duration_Enum.msec_2000,
        debug_Show_Enum.MicroBit_Screen,
    )
})

input.onGesture(Gesture.TiltLeft, function () {
    quest_Motors.quest_Set_Turn_WithTimer_Fn(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        turn_Type_Enum.Pivot,
        turn_Direction_Enum.right,
        turn_Power_Enum.Lo,
        turn_Duration_Enum.msec_3000,
        debug_Show_Enum.Dashboard_OLED,
    )
})
input.onGesture(Gesture.TiltRight, function () {
    quest_Motors.quest_Set_Turn_WithTimer_Fn(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        turn_Type_Enum.Spin,
        turn_Direction_Enum.left,
        turn_Power_Enum.Mi,
        turn_Duration_Enum.msec_5000,
        debug_Show_Enum.MicroBit_Screen,
    )
})

basic.forever(function () {
    quest_Dashboard.quest_Show_String_For_Oled_BigFont_Fn(
        convertToText(randint(0, 9)),
        0,
        0
    )
        quest_Dashboard.quest_Show_Oled_Cleared_Fn(
        )
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Fn(3, quest_Time_Units_Enum.Seconds)
})