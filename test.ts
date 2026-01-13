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
    //// jwc 25-0627-0900 quest_Dashboard.quest_Send_LoginOfBot_ToXrayDashboardOfMb_Func(
        quest_Dashboard.quest_Dashboard_Network_SendLogin_Func(
        // randint: inclusive boundaries
        //// jwc y randint(101, 200),
        //// jwc y? randint(-1, 3),
        //// jwc yy 0,1,2,3 randint(0, 3),
        //// jwc yy randint(0, 0),
        randint(0, 3),
        //// jwc 25-0627-0900 ""
    )

    //// jwc ? serial.writeLine('* 0: ' + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + " " + convertToText(network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal) + " " + convertToText(control.deviceSerialNumber()))
    serial.writeLine('* test.ts: 00: ' + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + " " + convertToText(control.deviceName()) + " " + convertToText(control.deviceSerialNumber()))

    //// jwc 25-0922-0100 
    //// jwc 25-0922-0120 y let degrees_MAX_INT = 270
    //// jwc 25-0922-0140 n let degrees_MAX_INT = 360
    let degrees_MAX_INT = 270

    //// jwc 25-0809-1400 270/360 = 0.75 >> 0 x 0.75 = 0 | 45 x 0.75 = 33.75 } 90 x 0.75 - 67.5 | 180 x 0.75 = 135 \/\/
    ////
    //// jwc 25-0922-0100wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, 0)
    //// jwc 25-0922-0120 wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, degrees_MAX_INT - 0)
    //// jwc 25-0922-0120 wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, 0)
    //// jwc 25-0922-0140 n wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, degrees_MAX_INT - 0)
    //// jwc 25-0922-0140 n wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S6, 0)
    wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, degrees_MAX_INT - 0)
    wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, 0)
    serial.writeLine('* test.ts: 12a: ' + convertToText(0))
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds) //// jwc 3,2,1, 0.5

    //// jwc 25-0922-0100wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, 33.75)
    //// jwc 25-0922-0120 wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, degrees_MAX_INT - 33.75)
    //// jwc 25-0922-0120 wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, 33.75)
    //// jwc 25-0922-0140 n wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, degrees_MAX_INT - 45)
    //// jwc 25-0922-0140 n wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S6, 45)
    wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, degrees_MAX_INT - 45)
    wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, 45)
    //// jwc 25-0922-0120 serial.writeLine('* test.ts: 12b: ' + convertToText(33.75))
    serial.writeLine('* test.ts: 12b: ' + convertToText(45))
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds) //// jwc 3,2,1, 0.5

    //// jwc 25-0922-0100wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, 67.5)
    //// jwc 25-0922-0120 wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, degrees_MAX_INT - 67.5)
    //// jwc 25-0922-0120 wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, 67.5)
    //// jwc 25-0922-0140 n wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, degrees_MAX_INT - 90)
    //// jwc 25-0922-0140 n wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S6, 90)
    wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, degrees_MAX_INT - 90)
    wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, 90)
    //// jwc 25-0922-0120 serial.writeLine('* test.ts: 12c: ' + convertToText(67.5))
    serial.writeLine('* test.ts: 12c: ' + convertToText(90))
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds) //// jwc 3,2,1, 0.5

    //// jwc 25-0922-0100 for (let i = 0; i <= 270; i += 10) {
    for (let i = 0; i <= degrees_MAX_INT; i += 45) {
       //// jwc 25-0922-0100  y wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, i)
        //// jwc y wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, 270 - i)
        //// jwc 25-0922-0120 wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, degrees_MAX_INT - i)
        //// jwc 25-0922-0140 n wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, degrees_MAX_INT - i)
        wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, degrees_MAX_INT - i)

        //// jwc 25-0922-0120 wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, i)
        //// jwc 25-0922-0140 n wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S6, i)
        wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, i)
        serial.writeLine('* test.ts: 14: ' + convertToText(i))
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds) //// jwc 3,2,1, 0.5
    }
    //// jwc 25-0922-0100 y wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, 0)
    //// jwc 25-0922-0120 wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, degrees_MAX_INT - 0)
    //// jwc 25-0922-0120 wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, 0)
    //// jwc 25-0922-0140 n wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, degrees_MAX_INT - 0)
    //// jwc 25-0922-0140 n wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S6, 0)
    wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, degrees_MAX_INT - 0)
    wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, 0)
    serial.writeLine('* test.ts: 16: ' + convertToText(0))
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(5, quest_Time_Units_Enum.Seconds)
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
    //// jwc 25-0627-0900 quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func(
    quest_Dashboard.quest_Dashboard_Network_SendData_WithMyBotHeader_Func(
        //// jwc y "A:ThisIsADataTest",
        //// jwc y "A:3456789012345678901234567890",
        //// jwc Test Max Len = 19 \/
        //// jwc 25-0628-1400 "A:34567890123456789",
        "A:3456789",
    )
    serial.writeLine('* 5: ' + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + " " + convertToText(network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal) + " " + convertToText(control.deviceSerialNumber()))
    //// jwc ? serial.writeLine('* 6: ' + convertToText(quest_Public_Variables_N_Constants.network_GroupChannel_MyBotId_Base0_Int_QuestGlobal_01) + " " + convertToText(quest_Public_Variables_N_Constants_01.prototype.network_GroupChannel_MyBotId_Base0_Int_QuestGlobal_02))
    serial.writeLine('* 6: ' + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal))
    serial.writeLine('* 6_01: ' + convertToText(quest_Public_Variables_N_Constants.network_GroupChannel_MyBotId_Base0_Int_QuestGlobal_01))
    serial.writeLine('* 6_11: ' + convertToText(quest_Dashboard.network_GroupChannel_MyBotId_Base0_Int_QuestGlobal_11))

    //// jwc 26-0111-1930 let degrees_MAX_INT = 270
    let degrees_MAX_INT = 220

    //// jwc 26-0111-1930 y for (let i = 0; i <= degrees_MAX_INT; i += 45) {
    for (let i = 0; i <= degrees_MAX_INT; i += 5) {
        //// jwc 25-0922-0100  y wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, i)
        //// jwc y wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, 270 - i)
        //// jwc 25-0922-0120 wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, degrees_MAX_INT - i)
        //// jwc 25-0922-0140 n wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, degrees_MAX_INT - i)
        //// jwc y 26-0111-1900 wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, degrees_MAX_INT - i)
        quest_Motors.quest_Set_Degrees_By_Integer_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, i, quest_Debug_Show_Enum.Dashboard_OLED)

        //// jwc 25-0922-0120 wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, i)
        //// jwc 25-0922-0140 n wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S6, i)
        //// jwc y 26-0111-1900 wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, i)
        quest_Motors.quest_Set_Degrees_By_Integer_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right, i, quest_Debug_Show_Enum.Dashboard_OLED)

        serial.writeLine('* test.ts: 26-0111-1: ' + convertToText(i))
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds) //// jwc 3,2,1, 0.5
    }

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
    
    //// jwc 25-1012-2040 Stress Test < Max_Network_Message_Length, so use -100,-100
    //// jwc 25-1012-2040 quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right, 50, 60)
    //// jwc 25-1012-2040 quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
    //// jwc 25-1012-2040 quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right, -50, -60)
    //// jwc 25-1012-2040 quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
    //// jwc 25-1012-2040 quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right, 0, 0)
    //// jwc 25-1012-2040 quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
    //// jwc 25-1012-2040 
    //// jwc 25-1012-2040 quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S3_MotorWheel_Left__S2_MotorWheel_Right, 60, 50)
    //// jwc 25-1012-2040 quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
    //// jwc 25-1012-2040 quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S3_MotorWheel_Left__S2_MotorWheel_Right, -60, -50)
    //// jwc 25-1012-2040 quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
    //// jwc 25-1012-2040 quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S3_MotorWheel_Left__S2_MotorWheel_Right, 0, 0)
    //// jwc 25-1012-2040 quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)

    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right, 100, 0)
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right, 0, 100)
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right, 100, 100)
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right, -100, -100)
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right, 0, 0)
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)

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


    //// jwc 25-1010-2200 n not change past '210',  not 225 >> makes sense 225 + 50 = 270 max-borderline-issue, nor 240, nor 255, nor 270 quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_225, quest_Debug_Show_Enum.Dashboard_OLED)

input.onGesture(Gesture.LogoUp, function () {
    
    quest_Motors.quest_Set_Degrees_By_Menu_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down, quest_Debug_Show_Enum.Dashboard_OLED)
    quest_Motors.quest_Set_Degrees_By_Menu_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right, quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down, quest_Debug_Show_Enum.Dashboard_OLED)

})
input.onGesture(Gesture.ScreenUp, function () {
    //// 25-0922-0150 y quest_Motors.quest_Set_AutoDegrees_ForServoArm_BIG_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down, quest_Debug_Show_Enum.Dashboard_OLED)
    //// 25-0922-0150 y quest_Motors.quest_Set_AutoDegrees_ForServoArm_BIG_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right, quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down, quest_Debug_Show_Enum.Dashboard_OLED)

    //// jwc 25-0922-0300 yy //// jwc 25-0922-0230, 45 >> 55 >> 50
    //// jwc 25-0922-0300 yy wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, 270 - 50)
    //// jwc 25-0922-0300 yy wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, 50)

    //// jwc 25-0805-1600 quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down, quest_Debug_Show_Enum.Dashboard_OLED)
    //// jwc 25-0805-1600 quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right, quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down, quest_Debug_Show_Enum.Dashboard_OLED)
    //// quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down, quest_Debug_Show_Enum.Dashboard_OLED)
   
    //// jwc 25-1010-2100 y quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down, quest_Debug_Show_Enum.Dashboard_OLED)
    //// jwc 25-1010-2100 y quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_180, quest_Debug_Show_Enum.Dashboard_OLED)
    quest_Motors.quest_Set_Degrees_By_Menu_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_090_Up_Half, quest_Debug_Show_Enum.Dashboard_OLED)
    quest_Motors.quest_Set_Degrees_By_Menu_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right, quest_ServoArm_DegreesInDirection_Enum.Degree_090_Up_Half, quest_Debug_Show_Enum.Dashboard_OLED)
})
input.onGesture(Gesture.LogoDown, function () {
    //// 25-0922-0150 y quest_Motors.quest_Set_AutoDegrees_ForServoArm_BIG_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_045_Up_Half, quest_Debug_Show_Enum.Dashboard_OLED)
    //// 25-0922-0150 y quest_Motors.quest_Set_AutoDegrees_ForServoArm_BIG_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right, quest_ServoArm_DegreesInDirection_Enum.Degree_045_Up_Half, quest_Debug_Show_Enum.Dashboard_OLED)

    //// jwc 25-0922-0300 yy //// jwc 25-0922-0230, 90 >> 100 >> 95
    //// jwc 25-0922-0300 yy wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, 270 - 95)
    //// jwc 25-0922-0300 yy wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, 95)
    
    //// jwc 25-0805-1600 quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_045_Up_Half, quest_Debug_Show_Enum.Dashboard_OLED)
    //// jwc 25-0805-1600 quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right, quest_ServoArm_DegreesInDirection_Enum.Degree_045_Up_Half, quest_Debug_Show_Enum.Dashboard_OLED)
    //// jwc 25-1010-1700 quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_045_Up_Half, quest_Debug_Show_Enum.Dashboard_OLED)
    //// jwc 25-1010-1700 quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right, quest_ServoArm_DegreesInDirection_Enum.Degree_045_Up_Half, quest_Debug_Show_Enum.Dashboard_OLED)
   
    //// jwc 25-1010-2100 y quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_180, quest_Debug_Show_Enum.Dashboard_OLED)
    //// jwc 25-1010-2100 y quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_195, quest_Debug_Show_Enum.Dashboard_OLED)
    //// jwc yy quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_210, quest_Debug_Show_Enum.Dashboard_OLED)
    //// jwc nn quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_240, quest_Debug_Show_Enum.Dashboard_OLED)
    //// jwc nn quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_270, quest_Debug_Show_Enum.Dashboard_OLED)
    //// jwc yy quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_195, quest_Debug_Show_Enum.Dashboard_OLED)
    //// jwc 25-1012-2000 yy quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_195, quest_Debug_Show_Enum.Dashboard_OLED)
    //// jwc 25-1012-2000 yy quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right, quest_ServoArm_DegreesInDirection_Enum.Degree_195, quest_Debug_Show_Enum.Dashboard_OLED)
    quest_Motors.quest_Set_Degrees_By_Menu_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_180_Up_Full, quest_Debug_Show_Enum.Dashboard_OLED)
    quest_Motors.quest_Set_Degrees_By_Menu_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right, quest_ServoArm_DegreesInDirection_Enum.Degree_180_Up_Full, quest_Debug_Show_Enum.Dashboard_OLED)

})
input.onGesture(Gesture.ScreenDown, function () {
    //// 25-0922-0150 y quest_Motors.quest_Set_AutoDegrees_ForServoArm_BIG_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_090_Up_Full, quest_Debug_Show_Enum.Dashboard_OLED)
    //// 25-0922-0150 y quest_Motors.quest_Set_AutoDegrees_ForServoArm_BIG_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right, quest_ServoArm_DegreesInDirection_Enum.Degree_090_Up_Full, quest_Debug_Show_Enum.Dashboard_OLED)
    
    //// jwc 25-0922-0300 yy //// jwc 25-0922-0230, 135 >> 145 >> 140
    //// jwc 25-0922-0300 yy wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, 270 - 140)
    //// jwc 25-0922-0300 yy wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, 140)

    //// jwc 25-0805-1600 quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_090_Up_Full, quest_Debug_Show_Enum.Dashboard_OLED)
    //// jwc 25-0805-1600 quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right, quest_ServoArm_DegreesInDirection_Enum.Degree_090_Up_Full, quest_Debug_Show_Enum.Dashboard_OLED)
    //// jwc 25-1010-1700 quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_090_Up_Full, quest_Debug_Show_Enum.Dashboard_OLED)
    //// jwc 25-1010-1700 quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right, quest_ServoArm_DegreesInDirection_Enum.Degree_090_Up_Full, quest_Debug_Show_Enum.Dashboard_OLED)
    
    //// jwc 25-1010-2100 n quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_270, quest_Debug_Show_Enum.Dashboard_OLED)
    //// jwc 25-1010-2200 n quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_255, quest_Debug_Show_Enum.Dashboard_OLED)
    //// jwc 25-1010-2200 n quest_Motors.quest_Set_AutoDegrees_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_225, quest_Debug_Show_Enum.Dashboard_OLED)
    quest_Motors.quest_Set_Degrees_By_Menu_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_210, quest_Debug_Show_Enum.Dashboard_OLED)
    quest_Motors.quest_Set_Degrees_By_Menu_ForServoArm_SMALL_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right, quest_ServoArm_DegreesInDirection_Enum.Degree_210, quest_Debug_Show_Enum.Dashboard_OLED)
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


// TYJ these will auto-run like an on-start stack
//
/// jwc y basic.showIcon(IconNames.SmallHeart)
//// jwc y /// jwc y quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
//// jwc y /// jwc y basic.showIcon(IconNames.Heart)


// Start Stack
// Start Stack
// Start Stack

serial.writeLine("* 00_B: On-Start: test.ts")

//// jwc 26-0112-1950
//// jwc n missing '()': joystickbit.initJoystickBit
//// jwc moved to 'main.ts': joystickbit.initJoystickBit()

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

//// jwc 25-0626-1400 Obsolete Test: quest_Motors.quest_Set_AutoDegrees_ForServoArm_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left, quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down, quest_Debug_Show_Enum.Dashboard_OLED)
//// jwc 25-0626-1400 Obsolete Test: quest_Motors.quest_Set_AutoDegrees_ForServoArm_Func(quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right, quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down, quest_Debug_Show_Enum.Dashboard_OLED)

//// jwc 25-0922-0100
serial.writeLine("* test.ts: 00_B1: " + "|network_GroupChannel_MyBotId_Base0_Int_QuestGlobal:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + "|control.deviceName():" + convertToText(control.deviceName()) + "|control.deviceSerialNumber():" + convertToText(control.deviceSerialNumber()))

//// jwc 25-0809-1400 270/360 = 0.75 >> 0 x 0.75 = 0 | 45 x 0.75 = 33.75 } 90 x 0.75 - 67.5 | 180 x 0.75 = 135 \/\/
////
wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, 0)
wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, 0)

//// jwc 25-1105-1700 Weirdly, the following will not work: No response from Buttons C, D, E, F.  Yet 'robot100_200-RemoteControl-Beginner' does work.  
////
basic.forever(function () {
    //// jwc y serial.writeLine('* 1: > L: ' + quest_General.quest_Get_String_WithColumnPadding_AsStringOut_Func(convertToText(randint(0, 999)), 10, quest_String_Justify_Type_Enum.justify_Left) + ' < ')
    //// jwc y serial.writeLine('* 2: > R: ' + quest_General.quest_Get_String_WithColumnPadding_AsStringOut_Func(convertToText(randint(0, 999)), 10, quest_String_Justify_Type_Enum.justify_Right) + ' < ')

    //// jwc yy serial.writeLine('* 1: ' + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + " " + convertToText(network_Send_DataOfBot_ToXrayDashboardOfMb_Enum_QuestGlobal) + " " + convertToText(control.deviceSerialNumber()))    
    //// jwc yyy serial.writeLine('.')

    serial.writeString("|Button Status:")
    serial.writeNumber(quest_Sensors.quest_Get_Controller_Joystick_ButtonStatus_AsIntOut_Func(quest_Sensors.quest_Get_Controller_Joystick_Button_Status_Enum.Button_C))
    serial.writeNumber(quest_Sensors.quest_Get_Controller_Joystick_ButtonStatus_AsIntOut_Func(quest_Sensors.quest_Get_Controller_Joystick_Button_Status_Enum.Button_D))

    serial.writeString("||Button Pin Status:")
    serial.writeString("|C_P12:")
    serial.writeNumber(pins.digitalReadPin(DigitalPin.P12))
    serial.writeString("|D_P13:")
    serial.writeNumber(pins.digitalReadPin(DigitalPin.P13))


    //// jwc yn only 0: if (pins.digitalReadPin(DigitalPin.P12) == 0) {
    //// jwc yn only 0:     basic.showString("a")
    //// jwc yn only 0: } else if (pins.digitalReadPin(DigitalPin.P12) == 1) {
    //// jwc yn only 0:     basic.showString("A")
    //// jwc yn only 0: } else {
    //// jwc yn only 0:     basic.showString(".")
    //// jwc yn only 0: }
    if (pins.digitalReadPin(DigitalPin.P12) == 1) {
        basic.showString("1")
    } else if (pins.digitalReadPin(DigitalPin.P12) == 0) {
        basic.showString("0")
    } else {
        basic.showString(".")
    }

    serial.writeString("|P12a:")
    serial.writeString(convertToText(joystickbit.getButton(joystickbit.JoystickBitPin.P12)))
    serial.writeString("|P12b:")
    serial.writeString(convertToText(pins.digitalReadPin(DigitalPin.P12)))

    serial.writeString("|P13a:")
    serial.writeString(convertToText(joystickbit.getButton(joystickbit.JoystickBitPin.P13)))
    serial.writeString("|P13b:")
    serial.writeString(convertToText(pins.digitalReadPin(DigitalPin.P13)))

    serial.writeString("|P14a:")
    serial.writeString(convertToText(joystickbit.getButton(joystickbit.JoystickBitPin.P14)))
    serial.writeString("|P14b:")
    serial.writeString(convertToText(pins.digitalReadPin(DigitalPin.P14)))

    serial.writeString("|P15a:")
    serial.writeString(convertToText(joystickbit.getButton(joystickbit.JoystickBitPin.P15)))
    serial.writeString("|P15b:")
    serial.writeString(convertToText(pins.digitalReadPin(DigitalPin.P15)))

   //// jwc 26-0112-1840 y serial.writeString("Z12:")
   //// jwc 26-0112-1840 y serial.writeString(convertToText(joystickbit.getButton(joystickbit.JoystickBitPin.P12)))
   //// jwc 26-0112-1840 y serial.writeString(convertToText(pins.digitalReadPin(DigitalPin.P12)))

   //// jwc 26-0112-1840 y serial.writeString("Z13:")
   //// jwc 26-0112-1840 y serial.writeString(convertToText(joystickbit.getButton(joystickbit.JoystickBitPin.P13)))
   //// jwc 26-0112-1840 y serial.writeString(convertToText(pins.digitalReadPin(DigitalPin.P13)))

   //// jwc 26-0112-1840 y serial.writeString("Z14:")
   //// jwc 26-0112-1840 y serial.writeString(convertToText(joystickbit.getButton(joystickbit.JoystickBitPin.P14)))
   //// jwc 26-0112-1840 y serial.writeString(convertToText(pins.digitalReadPin(DigitalPin.P14)))

   //// jwc 26-0112-1840 y serial.writeString("Z15:")
   //// jwc 26-0112-1840 y serial.writeString(convertToText(joystickbit.getButton(joystickbit.JoystickBitPin.P15)))
   //// jwc 26-0112-1840 y serial.writeString(convertToText(pins.digitalReadPin(DigitalPin.P15)))


   //// jwc 26-0112-1840 y serial.writeString("Y12:")
   //// jwc 26-0112-1840 y serial.writeString(convertToText(joystickbit.getButton(joystickbit.JoystickBitPin.P12)))
   //// jwc 26-0112-1840 y serial.writeString(convertToText(pins.digitalReadPin(DigitalPin.P12)))

   //// jwc 26-0112-1840 y serial.writeString("Y13:")
   //// jwc 26-0112-1840 y serial.writeString(convertToText(joystickbit.getButton(joystickbit.JoystickBitPin.P13)))
   //// jwc 26-0112-1840 y serial.writeString(convertToText(pins.digitalReadPin(DigitalPin.P13)))

   //// jwc 26-0112-1840 y serial.writeString("Y14:")
   //// jwc 26-0112-1840 y serial.writeString(convertToText(joystickbit.getButton(joystickbit.JoystickBitPin.P14)))
   //// jwc 26-0112-1840 y serial.writeString(convertToText(pins.digitalReadPin(DigitalPin.P14)))

   //// jwc 26-0112-1840 y serial.writeString("Y15:")
   //// jwc 26-0112-1840 y serial.writeString(convertToText(joystickbit.getButton(joystickbit.JoystickBitPin.P15)))
   //// jwc 26-0112-1840 y serial.writeString(convertToText(pins.digitalReadPin(DigitalPin.P15)))

    serial.writeLine("")
})