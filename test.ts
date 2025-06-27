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
    //// jwc 25-0626-1400 quest_Dashboard.quest_Send_LoginOfBot_ToXrayDashboardOfMb_Func(
    //// jwc 25-0626-1400     // randint: inclusive boundaries
    //// jwc 25-0626-1400     //// jwc y randint(101, 200),
    //// jwc 25-0626-1400     //// jwc y? randint(-1, 3),
    //// jwc 25-0626-1400     //// jwc yy 0,1,2,3 randint(0, 3),
    //// jwc 25-0626-1400     //// jwc yy randint(0, 0),
    //// jwc 25-0626-1400     randint(0, 3),
    //// jwc 25-0626-1400     //// jwc y randint(0, 1),
    //// jwc 25-0626-1400     //// jwc obsolete: quest_Toggle_OnOff_Enum.On,
    //// jwc 25-0626-1400     //// jwc yy quest_Toggle_OnOff_Enum.On,
    //// jwc 25-0626-1400     //// jwc y quest_Toggle_OnOff_Enum.Off,
    //// jwc 25-0626-1400     quest_Toggle_OnOff_Enum.On,
    //// jwc 25-0626-1400     //// jwc yy quest_Debug_Show_Enum.Dashboard_OLED,
    //// jwc 25-0626-1400     //// jwc y quest_Debug_Show_Enum.MicroBit_Screen,
    //// jwc 25-0626-1400     quest_Debug_Show_Enum.Dashboard_OLED,
    //// jwc 25-0626-1400 )
    quest_Dashboard.quest_Send_LoginOfBot_ToXrayDashboardOfMb_Func(
        // randint: inclusive boundaries
        //// jwc y randint(101, 200),
        //// jwc y? randint(-1, 3),
        //// jwc yy 0,1,2,3 randint(0, 3),
        //// jwc yy randint(0, 0),
        randint(0, 3)
    )

    //// jwc ? serial.writeLine('* 0: ' + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + " " + convertToText(network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal) + " " + convertToText(control.deviceSerialNumber()))
    serial.writeLine('* test.ts: 00: ' + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + " " + convertToText(control.deviceName()) + " " + convertToText(control.deviceSerialNumber()))

})
// Valid GroupChannelNum
input.onButtonPressed(Button.B, function () {
    //// jwc 25-0626-1400 quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func(
    //// jwc 25-0626-1400     //// jwc y "A:ThisIsADataTest",
    //// jwc 25-0626-1400     //// jwc y "A:3456789012345678901234567890",
    //// jwc 25-0626-1400     //// jwc Test Max Len = 19 \/
    //// jwc 25-0626-1400     "A:34567890123456789",
    //// jwc 25-0626-1400     quest_Debug_Show_Enum.Dashboard_OLED,
    //// jwc 25-0626-1400 )
    quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func(
        //// jwc y "A:ThisIsADataTest",
        //// jwc y "A:3456789012345678901234567890",
        //// jwc Test Max Len = 19 \/
        "A:34567890123456789",
    )
    serial.writeLine('* 5: ' + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + " " + convertToText(network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal) + " " + convertToText(control.deviceSerialNumber()))
    //// jwc ? serial.writeLine('* 6: ' + convertToText(quest_Public_Variables_N_Constants.network_GroupChannel_MyBotId_Base0_Int_QuestGlobal_01) + " " + convertToText(quest_Public_Variables_N_Constants_01.prototype.network_GroupChannel_MyBotId_Base0_Int_QuestGlobal_02))
    serial.writeLine('* 6: ' + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal))
    serial.writeLine('* 6_01: ' + convertToText(quest_Public_Variables_N_Constants.network_GroupChannel_MyBotId_Base0_Int_QuestGlobal_01))
    serial.writeLine('* 6_11: ' + convertToText(quest_Dashboard.network_GroupChannel_MyBotId_Base0_Int_QuestGlobal_11))
})

input.onGesture(Gesture.TiltLeft, function () {
    //// jwc 25-0626-1900 quest_Motors.quest_Set_Turn_WithTimer_Func(
    //// jwc 25-0626-1900     quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
    //// jwc 25-0626-1900     quest_Turn_Type_Enum.Pivot,
    //// jwc 25-0626-1900     quest_Turn_Direction_Enum.right,
    //// jwc 25-0626-1900     quest_Turn_Power_Enum.Lo,
    //// jwc 25-0626-1900     quest_Turn_Duration_Enum.msec_3000,
    //// jwc 25-0626-1900     quest_Debug_Show_Enum.Dashboard_OLED,
    //// jwc 25-0626-1900 )
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right, 50, 60)
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S3_MotorWheel_Left__S2_MotorWheel_Right, -60, -50)
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right, 0, 0)


})
input.onGesture(Gesture.TiltRight, function () {
    //// jwc 25-0626-1900 quest_Motors.quest_Set_Turn_WithTimer_Func(
    //// jwc 25-0626-1900     quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right,
    //// jwc 25-0626-1900     quest_Turn_Type_Enum.Spin,
    //// jwc 25-0626-1900     quest_Turn_Direction_Enum.left,
    //// jwc 25-0626-1900     quest_Turn_Power_Enum.Mi,
    //// jwc 25-0626-1900     quest_Turn_Duration_Enum.msec_5000,
    //// jwc 25-0626-1900     quest_Debug_Show_Enum.MicroBit_Screen,
    //// jwc 25-0626-1900 )
})
input.onGesture(Gesture.LogoUp, function () {
    quest_Motors.quest_Set_AutoDegrees_ForServoArm_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArmBeam_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_000, quest_Debug_Show_Enum.Dashboard_OLED)
    quest_Motors.quest_Set_AutoDegrees_ForServoArm_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArmBeam_Right, quest_ServoArm_DegreesInDirection_Enum.Degree_000, quest_Debug_Show_Enum.Dashboard_OLED)
})
input.onGesture(Gesture.LogoDown, function () {
    quest_Motors.quest_Set_AutoDegrees_ForServoArm_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArmBeam_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_045, quest_Debug_Show_Enum.Dashboard_OLED)
    quest_Motors.quest_Set_AutoDegrees_ForServoArm_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArmBeam_Right, quest_ServoArm_DegreesInDirection_Enum.Degree_045, quest_Debug_Show_Enum.Dashboard_OLED)
})
input.onGesture(Gesture.ScreenDown, function () {
    quest_Motors.quest_Set_AutoDegrees_ForServoArm_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArmBeam_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_090, quest_Debug_Show_Enum.Dashboard_OLED)
    quest_Motors.quest_Set_AutoDegrees_ForServoArm_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArmBeam_Right, quest_ServoArm_DegreesInDirection_Enum.Degree_090, quest_Debug_Show_Enum.Dashboard_OLED)
})


//// jwc y basic.forever(function () {
//// jwc y     quest_Dashboard.quest_Show_String_For_Oled_BigFont_Func(
//// jwc y         convertToText(randint(0, 9)),
//// jwc y         0,
//// jwc y         0
//// jwc y     )
//// jwc y         quest_Dashboard.quest_Show_Oled_Cleared_Func(
//// jwc y         )
//// jwc y         quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
//// jwc y })

////jwc y basic.forever(function () {
////jwc y     serial.writeLine(' > quest_Sensors.quest_Get_Controller_Joystick_Directional_AngleDegree_IncrementOf90_AsIntOut_Func: ' + convertToText(quest_Sensors.quest_Get_Controller_Joystick_Directional_AngleDegree_IncrementOfDegree90_AsIntOut_Func()))
////jwc y     serial.writeLine(' > quest_Sensors.quest_Get_Controller_Joystick_Directional_MagnitudePixel_AsIntOut_Func(): ' + convertToText(quest_Sensors.quest_Get_Controller_Joystick_Directional_MagnitudePixel_AsIntOut_Func()))
////jwc y })

basic.forever(function () {
    //// jwc y serial.writeLine('* 1: > L: ' + quest_General.quest_Get_String_WithColumnPadding_AsStringOut_Func(convertToText(randint(0, 999)), 10, quest_String_Justify_Type_Enum.justify_Left) + ' < ')
    //// jwc y serial.writeLine('* 2: > R: ' + quest_General.quest_Get_String_WithColumnPadding_AsStringOut_Func(convertToText(randint(0, 999)), 10, quest_String_Justify_Type_Enum.justify_Right) + ' < ')
    
    //// jwc yy serial.writeLine('* 1: ' + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + " " + convertToText(network_Send_DataOfBot_ToXrayDashboardOfMb_Enum_QuestGlobal) + " " + convertToText(control.deviceSerialNumber()))    
    //// jwc yyy serial.writeLine('.')
    serial.writeString('.')
})

// TYJ these will auto-run like an on-start stack
//
/// jwc y basic.showIcon(IconNames.SmallHeart)
//// jwc y /// jwc y quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
//// jwc y /// jwc y basic.showIcon(IconNames.Heart)


// Start Stack
serial.writeLine("* 00_B: On-Start: test.ts")

quest_Dashboard.quest_Show_Oled_Cleared_Func()
quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("0", 0, 0)
quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("1", 0, 1)
quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("2", 0, 2)
quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("3", 0, 3)
//// jwc ? quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("4", 0, 4)
quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("5", 0, 5)
quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("6", 0, 6)
quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("7", 0, 7)
quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(5, quest_Time_Units_Enum.Seconds)

//// jwc 25-0626-1400 Obsolete Test: quest_Motors.quest_Set_AutoDegrees_ForServoArm_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArmBeam_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_000, quest_Debug_Show_Enum.Dashboard_OLED)
//// jwc 25-0626-1400 Obsolete Test: quest_Motors.quest_Set_AutoDegrees_ForServoArm_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArmBeam_Right, quest_ServoArm_DegreesInDirection_Enum.Degree_000, quest_Debug_Show_Enum.Dashboard_OLED)
