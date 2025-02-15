// tests go here; this will not be compiled when this package is used as an extension.

// jwc 23-1006-1847
// jwc 23-1019-1900
// jwc 24-0214-0400
// jwc 25-0208-0300 quest_Send_DataOfBot_ToXrayDashboardOfMb_Func

//// jwc 25-0208-0300 y: input.onButtonPressed(Button.A, function () {
//// jwc 25-0208-0300 y:     quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Func(
//// jwc 25-0208-0300 y:         quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
//// jwc 25-0208-0300 y:         50,
//// jwc 25-0208-0300 y:         -50,
//// jwc 25-0208-0300 y:         quest_Turn_Duration_Enum.msec_2000,
//// jwc 25-0208-0300 y:         quest_Debug_Show_Enum.Dashboard_OLED,
//// jwc 25-0208-0300 y:     )
//// jwc 25-0208-0300 y: })
//// jwc 25-0208-0300 y: input.onButtonPressed(Button.B, function () {
//// jwc 25-0208-0300 y:     quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Func(
//// jwc 25-0208-0300 y:         quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
//// jwc 25-0208-0300 y:         -50,
//// jwc 25-0208-0300 y:         50,
//// jwc 25-0208-0300 y:         quest_Turn_Duration_Enum.msec_2000,
//// jwc 25-0208-0300 y:         quest_Debug_Show_Enum.MicroBit_Screen,
//// jwc 25-0208-0300 y:     )
//// jwc 25-0208-0300 y: })

// GroupChannelNum: Valid (1,3) & Invalid (0,0)
//// jwc input.onButtonPressed(Button.AB, function () {
//// jwc y input.onLogoEvent(TouchButtonEvent.Pressed, function() {
input.onButtonPressed(Button.A, function () {
    quest_Dashboard.quest_Send_LoginOfBot_ToXrayDashboardOfMb_Func(
        // randint: inclusive boundaries
        //// jwc y randint(101, 200),
        //// jwc y? randint(-1, 3),
        //// jwc yy 0,1,2,3 randint(0, 3),
        //// jwc yy randint(0, 0),
        randint(0, 3),
        //// jwc y randint(0, 1),
        //// jwc obsolete: quest_Toggle_OnOff_Enum.On,
        //// jwc yy quest_Toggle_OnOff_Enum.On,
        quest_Toggle_OnOff_Enum.Off,
        //// jwc yy quest_Debug_Show_Enum.Dashboard_OLED,
        quest_Debug_Show_Enum.MicroBit_Screen,
    )
    //// jwc ? serial.writeLine('* 0: ' + convertToText(network_GroupChannelOfMe_Base0_Int_QuestGlobal) + " " + convertToText(network_Send_DataOfBot_ToXrayDashboardOfMb_OnOff_Enum_Quest_Global) + " " + convertToText(control.deviceSerialNumber()))
    //// jwc ? serial.writeLine('* 0: ' + convertToText(quest_Pub network_GroupChannelOfMe_Base0_Int_QuestGlobal) + " " + convertToText(network_Send_DataOfBot_ToXrayDashboardOfMb_OnOff_Enum_Quest_Global) + " " + convertToText(control.deviceSerialNumber()))

})
// Valid GroupChannelNum
input.onButtonPressed(Button.B, function () {
    quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func(
        //// jwc y "A:ThisIsADataTest",
        //// jwc y "A:3456789012345678901234567890",
        //// jwc Test Max Len = 19 \/
        "A:34567890123456789",
        quest_Debug_Show_Enum.Dashboard_OLED,
    )
    serial.writeLine('* 5: ' + convertToText(network_GroupChannelOfMe_Base0_Int_QuestGlobal) + " " + convertToText(network_Send_DataOfBot_ToXrayDashboardOfMb_OnOff_Enum_Quest_Global) + " " + convertToText(control.deviceSerialNumber()))
    //// jwc ? serial.writeLine('* 6: ' + convertToText(quest_Public_Variables_N_Constants.network_GroupChannelOfMe_Base0_Int_QuestGlobal_01) + " " + convertToText(quest_Public_Variables_N_Constants_01.prototype.network_GroupChannelOfMe_Base0_Int_QuestGlobal_02))
    serial.writeLine('* 6: ' + convertToText(network_GroupChannelOfMe_Base0_Int_QuestGlobal))
    serial.writeLine('* 6_01: ' + convertToText(quest_Public_Variables_N_Constants.network_GroupChannelOfMe_Base0_Int_QuestGlobal_01))
    serial.writeLine('* 6_11: ' + convertToText(quest_Dashboard.network_GroupChannelOfMe_Base0_Int_QuestGlobal_11))
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
    //// jwc y serial.writeLine('* 1: > L: ' + quest_General.quest_Get_String_WithColumnPadding_AsStringOut_Func(convertToText(randint(0, 999)), 10, quest_String_Justify_Type_Enum.justify_Left) + ' < ')
    //// jwc y serial.writeLine('* 2: > R: ' + quest_General.quest_Get_String_WithColumnPadding_AsStringOut_Func(convertToText(randint(0, 999)), 10, quest_String_Justify_Type_Enum.justify_Right) + ' < ')
    
    //// jwc yy serial.writeLine('* 1: ' + convertToText(network_GroupChannelOfMe_Base0_Int_QuestGlobal) + " " + convertToText(network_Send_DataOfBot_ToXrayDashboardOfMb_Enum_QuestGlobal) + " " + convertToText(control.deviceSerialNumber()))    
    //// jwc yyy serial.writeLine('.')
    serial.writeString('.')
})

// TYJ these will auto-run like an on-start stack
//
/// jwc y basic.showIcon(IconNames.SmallHeart)
quest_Dashboard.showIcon2(IconNames2.SmallHeart2, 0)
//// jwc y quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
//// jwc y basic.showIcon(IconNames.Heart)
quest_Dashboard.showIcon2(IconNames2.Heart2, 0)
quest_Dashboard.showIcon2(IconNames2.Yes2, 0)
quest_Dashboard.showIcon2(IconNames2.No2, 0)

