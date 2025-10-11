//
// custom_Motors.ts
//

////jwc y //% weight=51 color=#7f7fff icon="Q"
// dark blue #0000ff TOO DARK, CANNOT SEE BLACK BOUNDARY LINES
// light blue rgb(127, 190, 255) #7fbeff TOO LIGHT
// less_light blue rgb(0, 127, 255) ##007fff to dark that matches other groups
// rgb(127,127,255)  #7f7fff Good Purple to not drown out blue_borderlines
// rgb(191,191,255)  #bfbfff Good Purple to not drown out blue_borderlines
// * not too dark since would cover thin-black-boundaries

/**
 * quest_Motors blocks
 */
//% weight=69 color=#7f7fff icon="Q"
namespace quest_Motors {
    /// //
    /// // * Global Variables Q Constants
    /// //
    /// // * Default to Bot and not to Controller for most basic total 1 'micro:bit' setup (No Controller)
    /// //
    /// let deviceType_Bot_Bool_QuestGlobal = true
    /// let deviceType_Controller_Bool_QuestGlobal = false
    /// //
    /// let _debug_Serial_Print_Bool_QuestGlobal = false


    ////jwc yy //% block="set manual:servo_motors:|* ports: $portIdsIn|* left motor power: $powerLeftIn|* right motor power: $powerRightIn"
    // '\\' = escape character to deactivate following special character
    ////jwc y //% block="set manual\\_servo\\_motors:|* ports: $portIdsIn|* left_motor power: $powerLeftIn|* right_motor power: $powerRightIn"
    ////jwc 25-0805-1500 //% block="set manual\\_servo\\_motors:|* ports: $portIdsIn|* left_motor power\\_\\%: $powerLeftIn|* right_motor power\\_\\%: $powerRightIn"

    /**
     * quest_Set_PowerMotorsViaBlueRedBlackPins_Fn
     * @param portIdsIn quest_PortGroup_BlueRedBlack_PortIds_Enum
     * @param powerLeftIn number
     * @param powerRightIn number
     */
    //% block="set manual\\_servo\\_motor\\_wheels:|* ports: $portIdsIn|* left_motor power\\_\\%: $powerLeftIn|* right_motor power\\_\\%: $powerRightIn"
    //% powerLeftIn.min=-100 powerLeftIn.max=100
    //% powerRightIn.min=-100 powerRightIn.max=100
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Set_PowerMotorsViaBlueRedBlackPins_Func(portIdsIn: quest_PortGroup_BlueRedBlack_PortIds_Enum, powerLeftIn: number, powerRightIn: number): void {

        // Motor-Left Conversion: Same Rotational Direction
        let motor_Power_L = Math.map(powerLeftIn, -100, 100, 0, 360)
        // Motor-Right Conversion: Opposite Rotational Direction
        let motor_Power_R = Math.map(powerRightIn, -100, 100, 360, 0)

        let network_Message_Str = ""
        let message_Mini_Network_Str = ""
        let message_Full_Display_Str = ""


        switch (portIdsIn) {
            case quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right:
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, motor_Power_L)
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, motor_Power_R)
                //// * jwc 25-0626-1400 if (network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal == quest_Toggle_OnOff_Enum.On) {
                //// * jwc 25-0626-1400     //// jwc y quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("A:" + convertToText(network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL +",L:" + convertToText(powerLeftIn) +",R:" + convertToText(powerRightIn)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// * jwc 25-0626-1400     //// * jwc 25-0626-1400 quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("A:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",L:" + convertToText(powerLeftIn) + ",R:" + convertToText(powerRightIn)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// * jwc 25-0626-1400 }

                //// jwc 25-0627-0900 network_Message_Str = "WL: " + convertToText(powerLeftIn) + ", WR: " + convertToText(powerRightIn)
                //// jwc 25-0628-1400 message_Mini_Network_Str = "WL:" + convertToText(powerLeftIn) + ", WR:" + convertToText(powerRightIn)
                message_Mini_Network_Str = "1" + convertToText(powerLeftIn) + "0" + convertToText(powerRightIn)
                message_Full_Display_Str = "Wheel_L: " + convertToText(powerLeftIn) + ", Wheel_R: " + convertToText(powerRightIn)

                //// jwc 25-0627-0900 quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("B:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + ",WL:" + convertToText(powerLeftIn) + ",WR:" + convertToText(powerRightIn))

                //// jwc 25-0627-0900 //// jwc y quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("B:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + ",WL:" + convertToText(powerLeftIn) + ",WR:" + convertToText(powerRightIn), 0, 2)
                //// jwc 25-0627-0900 quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("B:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + ",Wheel_L:" + convertToText(powerLeftIn) + ",Wheel_R:" + convertToText(powerRightIn), 0, 2)
                //// jwc 25-0627-0900 if (_debug_Serial_Print_Bool_QuestGlobal) {
                //// jwc 25-0627-0900     //// * jwc 25-0626-1400 serial.writeLine("* quest_Set_PowerMotorsViaBlueRedBlackPins_Func: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                //// jwc 25-0627-0900     serial.writeLine                                     ("B:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + ",WL:" + convertToText(powerLeftIn) + ",WR:" + convertToText(powerRightIn))
                //// jwc 25-0627-0900 }
                break
            case quest_PortGroup_BlueRedBlack_PortIds_Enum.S3_MotorWheel_Left__S2_MotorWheel_Right:
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S3, motor_Power_L)
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, motor_Power_R)
                //// * jwc 25-0626-1400 if (network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal == quest_Toggle_OnOff_Enum.On) {
                //// * jwc 25-0626-1400     //// jwc y quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("D:" + convertToText(network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL +",L:" + convertToText(powerLeftIn) +",R:" + convertToText(powerRightIn)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// * jwc 25-0626-1400     //// * jwc 25-0626-1400 quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("B:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal +",L:" + convertToText(powerLeftIn) +",R:" + convertToText(powerRightIn)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// * jwc 25-0626-1400 }

                //// jwc 25-0627-0900 quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("D:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + ",WL2:" + convertToText(powerLeftIn) + ",WR2:" + convertToText(powerRightIn))
                //// jwc 25-0628-1400 message_Mini_Network_Str = "W2L:" + convertToText(powerLeftIn) + ", W2R:" + convertToText(powerRightIn)
                message_Mini_Network_Str = "3" + convertToText(powerLeftIn) + "2" + convertToText(powerRightIn)
                message_Full_Display_Str = "Wheel_2_L: " + convertToText(powerLeftIn) + ", Wheel_2_R: " + convertToText(powerRightIn)


                //// jwc 25-0627-0900 //// jwc y quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("D:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + ",WL2:" + convertToText(powerLeftIn) + ",WR2:" + convertToText(powerRightIn), 0, 4)
                //// jwc 25-0627-0900 quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("D:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + ",Whee_L2:" + convertToText(powerLeftIn) + ",Whee_R2:" + convertToText(powerRightIn), 0, 4)
                //// jwc 25-0627-0900 if (_debug_Serial_Print_Bool_QuestGlobal) {
                //// jwc 25-0627-0900     //// * jwc 25-0626-1400 serial.writeLine("* quest_Set_PowerMotorsViaBlueRedBlackPins_Func: "+ powerLeftIn +" "+ powerRightIn +" >> "+ motor_Power_L +" "+ motor_Power_R)
                //// jwc 25-0627-0900     serial.writeLine("D:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + ",WL2:" + convertToText(powerLeftIn) + ",WR2:" + convertToText(powerRightIn))
                //// jwc 25-0627-0900 }
                break
            default:
                //// * jwc 25-0626-1400 if (network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal) {
                //// * jwc 25-0626-1400     quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("ERROR:  25-0209-0822: "+ convertToText(network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL +",L:" + convertToText(powerLeftIn) +",R:" + convertToText(powerRightIn)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// * jwc 25-0626-1400 }

                message_Mini_Network_Str = "* ERROR: 25-0209-0820: quest_Set_PowerMotorsViaBlueRedBlackPins_Func: " + powerLeftIn + " " + powerRightIn
                message_Full_Display_Str = "* ERROR: 25-0209-0821: quest_Set_PowerMotorsViaBlueRedBlackPins_Func: " + powerLeftIn + " " + powerRightIn

                //// jwc 25-0627-0900 quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("D:" + "ERROR: 25-0209-0822: quest_Set_PowerMotorsViaBlueRedBlackPins_Func: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                //// jwc 25-0627-0900 if (_debug_Serial_Print_Bool_QuestGlobal) {
                //// jwc 25-0627-0900     //// jwc 25-0627-0900 serial.writeLine("* ERROR: 25-0209-0820: quest_Set_PowerMotorsViaBlueRedBlackPins_Func: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                //// jwc 25-0627-0900     serial.writeLine("* ERROR: 25-0209-0820: quest_Set_PowerMotorsViaBlueRedBlackPins_Func: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                //// jwc 25-0627-0900 }
                break
        }

        quest_Dashboard.quest_Dashboard_Network_SendData_WithMyBotHeader_Func(message_Mini_Network_Str)

        quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(message_Full_Display_Str, 0, 1)

        if (_debug_Serial_Print_Bool_QuestGlobal) {
            //// jwc 25-0627-0900 serial.writeLine("*A:" + convertToText(network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL) + "<<" + network_Message_Str + "|" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal))
            //// jwc 25-0627-0900 serial.writeLine("* quest_Dashboard_Network_SendLogin_Func: '" + network_Message_Str + "'")
            serial.writeLine("* quest_Set_PowerMotorsViaBlueRedBlackPins_Func: '" + message_Full_Display_Str + "'")
        }
    }

    ////jwc o //% block="set servo_motors w/ timer: $portIdsIn|@ left motor power: $powerLeftIn|@ right motor power: $powerRightIn|turn_Duration_In $turn_Duration_In"
    ////jwc y //% block="set servo_motors w/ timer:|* ports: $portIdsIn|* left motor power: $powerLeftIn|* right motor power: $powerRightIn|* turn_Duration: $turn_Duration_In"
    ////jwc y //% block="set manual'_servo\\_motors w/ timer:|* ports: $portIdsIn|* left motor power: $powerLeftIn|* right motor power: $powerRightIn|* turn_Duration: $turn_Duration_In"
    ////jwc y //% block="set manual\\_servo\\_motors w/ timer:|* ports: $portIdsIn|* left_motor power: $powerLeftIn|* right_motor power: $powerRightIn|* turn_Duration: $turn_Duration_In"
    // '\\' = escape character to deactivate following special character
    ////jwc y //% block="set manual\\_servo\\_motors w/ timer:|* ports: $portIdsIn|* left_motor power: $powerLeftIn|* right_motor power: $powerRightIn|* turn_Duration: $turn_Duration_In|* debug_Show: $debug_Show_In"
    ////jwc 25-0805-1500 //% block="set manual\\_servo\\_motors w/ timer:|* ports: $portIdsIn|* left_motor power\\_\\%: $powerLeftIn|* right_motor power\\_\\%: $powerRightIn|* turn_Duration: $turn_Duration_In|* debug_Show: $debug_Show_In"

    /**
     * quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Fn
     * @param portIdsIn quest_PortGroup_BlueRedBlack_PortIds_Enum
     * @param powerLeftIn number
     * @param powerRightIn number
     * @param turn_Duration_In quest_Turn_Duration_Enum
     * @param debug_Show_In quest_Debug_Show_Enum
     *
     */
    //% block="set manual\\_servo\\_motor\\_wheels w/ timer:|* ports: $portIdsIn|* left_motor power\\_\\%: $powerLeftIn|* right_motor power\\_\\%: $powerRightIn|* turn_Duration: $turn_Duration_In|* debug_Show: $debug_Show_In"
    //% powerLeftIn.min=-100 powerLeftIn.max=100
    //% powerRightIn.min=-100 powerRightIn.max=100
    //% weight=78 blockGap=8
    //% inlineInputMode=external
    export function quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Func(portIdsIn: quest_PortGroup_BlueRedBlack_PortIds_Enum, powerLeftIn: number, powerRightIn: number, turn_Duration_In: quest_Turn_Duration_Enum, debug_Show_In: quest_Debug_Show_Enum): void {

        ///jwc y if(quest_Debug_Show_Enum)
        ///jwc y basic.showIcon(IconNames.SmallHeart)

        // Motor-Left Conversion: Same Rotational Direction
        let motor_Power_L = Math.map(powerLeftIn, -100, 100, 0, 360)
        // Motor-Right Conversion: Opposite Rotational Direction
        let motor_Power_R = Math.map(powerRightIn, -100, 100, 360, 0)

        let turn_Duration = 0

        switch (turn_Duration_In) {
            case quest_Turn_Duration_Enum.msec_20:
                turn_Duration = 20
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_40:
                turn_Duration = 40
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_60:
                turn_Duration = 60
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_80:
                turn_Duration = 80
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_100:
                turn_Duration = 100
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_200:
                turn_Duration = 200
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_400:
                turn_Duration = 400
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_600:
                turn_Duration = 600
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_800:
                turn_Duration = 800
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_1000:
                turn_Duration = 1000
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_2000:
                turn_Duration = 2000
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_3000:
                turn_Duration = 3000
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_4000:
                turn_Duration = 4000
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_5000:
                turn_Duration = 5000
                break  // out of these case statements
        }

        switch (portIdsIn) {
            case quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right:
                //// jwc y \/ wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, motor_Power_L)
                //// jwc y \/ wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, motor_Power_R)
                quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(portIdsIn, motor_Power_L, motor_Power_R)
                //// jwc 25-0325-1600 Obsolete: if (network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal == quest_Toggle_OnOff_Enum.On) {
                //// jwc 25-0325-1600 Obsolete:     quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("A:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal +",L:" + convertToText(powerLeftIn) +",R:" + convertToText(powerRightIn)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// jwc 25-0325-1600 Obsolete: }
                //// jwc 25-0325-1600 Obsolete: if (_debug_Serial_Print_Bool_QuestGlobal) {
                //// jwc 25-0325-1600 Obsolete:     serial.writeLine("* quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Func: "+ powerLeftIn +" "+ powerRightIn +" >> "+ motor_Power_L +" "+ motor_Power_R)
                //// jwc 25-0325-1600 Obsolete: }
                break
            case quest_PortGroup_BlueRedBlack_PortIds_Enum.S3_MotorWheel_Left__S2_MotorWheel_Right:
                //// jwc y \/ wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S3, motor_Power_L)
                //// jwc y \/ wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, motor_Power_R)
                quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(portIdsIn, motor_Power_L, motor_Power_R)
                //// jwc 25-0325-1600 Obsolete: if (network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal == quest_Toggle_OnOff_Enum.On) {
                //// jwc 25-0325-1600 Obsolete:     quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("D:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal +",L:" + convertToText(powerLeftIn) +",R:" + convertToText(powerRightIn)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// jwc 25-0325-1600 Obsolete: }
                //// jwc 25-0325-1600 Obsolete: if (_debug_Serial_Print_Bool_QuestGlobal) {
                //// jwc 25-0325-1600 Obsolete:     serial.writeLine("* quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Func: "+ powerLeftIn +" "+ powerRightIn +" >> "+ motor_Power_L +" "+ motor_Power_R)
                //// jwc 25-0325-1600 Obsolete: }
                break
            default:
                if (_debug_Serial_Print_Bool_QuestGlobal) {
                    serial.writeLine("* ERROR: 25-0209-0920 quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Func: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                }
                break
        }

        //// jwc 25-0626-1400 // diagnostics
        //// jwc 25-0626-1400 switch (debug_Show_In) {
        //// jwc 25-0626-1400     case quest_Debug_Show_Enum.Dashboard_OLED:
        //// jwc 25-0626-1400         //// jwc 25-0626-1830 Only clear target-row: quest_Dashboard.quest_Show_Oled_Cleared_Func()
        //// jwc 25-0626-1400         quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(convertToText(motor_Power_L) +" "+ convertToText(motor_Power_R) +" "+ convertToText(turn_Duration), 0, 0)
        //// jwc 25-0626-1400 
        //// jwc 25-0626-1400         break  // out of these case statements
        //// jwc 25-0626-1400     case quest_Debug_Show_Enum.MicroBit_Screen:
        //// jwc 25-0626-1400         // diagnostics
        //// jwc 25-0626-1400         basic.showIcon(IconNames.Happy)
        //// jwc 25-0626-1400 
        //// jwc 25-0626-1400         break  // out of these case statements
        //// jwc 25-0626-1400     case quest_Debug_Show_Enum.Off:
        //// jwc 25-0626-1400 
        //// jwc 25-0626-1400         break  // out of these case statements
        //// jwc 25-0626-1400     default:
        //// jwc 25-0626-1400         if (_debug_Serial_Print_Bool_QuestGlobal) {
        //// jwc 25-0626-1400             serial.writeLine("* ERROR: 25-0209-0922 quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Fn: "+ powerLeftIn +" "+ powerRightIn +" >> "+ motor_Power_L +" "+ motor_Power_R)
        //// jwc 25-0626-1400         }
        //// jwc 25-0626-1400         break
        //// jwc 25-0626-1400 }

        // timer
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(turn_Duration, quest_Time_Units_Enum.Milliseconds)
        // stop
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(portIdsIn, 0, 0)
    }

    ////jwc y //% block="set auto_turn w/ timer:|* ports: $port_Ids_In|* turn_Type: $turn_Type_In|* turn_Direction: $turn_Direction_In|* turn_Power: $turn_Power_In|* turn_Duration: $turn_Duration_In"
    ////jwc 25-0805-1500 //% block="set auto_turn w/ timer:|* ports: $port_Ids_In|* turn_Type: $turn_Type_In|* turn_Direction: $turn_Direction_In|* turn_Power: $turn_Power_In|* turn_Duration: $turn_Duration_In|* debug_Show: $debug_Show_In"

    /**
    * quest_Set_Turn_WithTimer_Fn
    * @param port_Ids_In quest_PortGroup_BlueRedBlack_PortIds_Enum
    * @param turn_Type_In quest_Turn_Type_Enum
    * @param turn_Direction_In quest_Turn_Direction_Enum
    * @param turn_Power_In quest_Turn_Power_Enum
    * @param turn_Duration_In quest_Turn_Duration_Enum
    * @param debug_Show_In quest_Debug_Show_Enum
    */
    //% block="set auto\\_servo\\_motor\\_wheels\\_turn w/ timer:|* ports: $port_Ids_In|* turn_Type: $turn_Type_In|* turn_Direction: $turn_Direction_In|* turn_Power: $turn_Power_In|* turn_Duration: $turn_Duration_In|* debug_Show: $debug_Show_In"
    //% weight=76 blockGap=8
    //% inlineInputMode=external
    export function quest_Set_Turn_WithTimer_Func(port_Ids_In: quest_PortGroup_BlueRedBlack_PortIds_Enum, turn_Type_In: quest_Turn_Type_Enum, turn_Direction_In: quest_Turn_Direction_Enum, turn_Power_In: quest_Turn_Power_Enum, turn_Duration_In: quest_Turn_Duration_Enum, debug_Show_In: quest_Debug_Show_Enum): void {

        ///jwc y if(quest_Debug_Show_Enum)
        ///jwc y basic.showIcon(IconNames.SmallHeart)

        let motor_Power_L = 0
        let motor_Power_R = 0

        let turn_Duration = 0

        switch (turn_Type_In) {
            //////jwc y case quest_Turn_Type_Enum.Pivot:
            ////jwc n case turn_Type_02_Enum.Pivot:
            case quest_Turn_Type_Enum.Pivot:

                switch (turn_Direction_In) {
                    case quest_Turn_Direction_Enum.left:

                        switch (turn_Power_In) {
                            case quest_Turn_Power_Enum.Lo:
                                motor_Power_L = motor_Power_No_QuestGlobal
                                motor_Power_R = motor_Power_Lo_QuestGlobal
                                break  // out of these case statements
                            case quest_Turn_Power_Enum.Mi:
                                motor_Power_L = motor_Power_No_QuestGlobal
                                motor_Power_R = motor_Power_Mi_QuestGlobal
                                break  // out of these case statements
                            case quest_Turn_Power_Enum.Hi:
                                motor_Power_L = motor_Power_No_QuestGlobal
                                motor_Power_R = motor_Power_Hi_QuestGlobal
                                break  // out of these case statements
                        }
                        //////jwc y quest_Dashboard.quest_Show_MotionDirection_Func(quest_Motion_Direction_Enum.Left)
                        //////jwc n this.quest_Show_MotionDirection_Func(quest_Motion_Direction_Enum.Left)
                        //////jwc 25-0325-1600: obsolete: quest_Show_MotionDirection_Func(quest_Motion_Direction_Enum.Left)
                        break  // out of these case statements

                    case quest_Turn_Direction_Enum.right:

                        switch (turn_Power_In) {
                            case quest_Turn_Power_Enum.Lo:
                                motor_Power_L = motor_Power_Lo_QuestGlobal
                                motor_Power_R = motor_Power_No_QuestGlobal
                                break  // out of these case statements
                            case quest_Turn_Power_Enum.Mi:
                                motor_Power_L = motor_Power_Mi_QuestGlobal
                                motor_Power_R = motor_Power_No_QuestGlobal
                                break  // out of these case statements
                            case quest_Turn_Power_Enum.Hi:
                                motor_Power_L = motor_Power_Hi_QuestGlobal
                                motor_Power_R = motor_Power_No_QuestGlobal
                                break  // out of these case statements
                        }
                        //////jwc y quest_Dashboard.quest_Show_MotionDirection_Func(quest_Motion_Direction_Enum.Right)
                        //////jwc n this.quest_Show_MotionDirection_Func(quest_Motion_Direction_Enum.Right)
                        //////jwc 25-0325-1600: obsolete: quest_Show_MotionDirection_Func(quest_Motion_Direction_Enum.Right)
                        break  // out of these case statements
                }
                break  // out of these case statements

            ////jwc y TODO case quest_Turn_Type_Enum.Spin:
            ////jwc n case turn_Type_02_Enum.Spin:
            case quest_Turn_Type_Enum.Spin:

                switch (turn_Direction_In) {
                    case quest_Turn_Direction_Enum.left:

                        switch (turn_Power_In) {
                            case quest_Turn_Power_Enum.Lo:
                                motor_Power_L = motor_Power_Lo_QuestGlobal * (-1)
                                motor_Power_R = motor_Power_Lo_QuestGlobal
                                break  // out of these case statements
                            case quest_Turn_Power_Enum.Mi:
                                motor_Power_L = motor_Power_Mi_QuestGlobal * (-1)
                                motor_Power_R = motor_Power_Mi_QuestGlobal
                                break  // out of these case statements
                            case quest_Turn_Power_Enum.Hi:
                                motor_Power_L = motor_Power_Hi_QuestGlobal * (-1)
                                motor_Power_R = motor_Power_Hi_QuestGlobal
                                break  // out of these case statements
                        }
                        //////jwc y quest_Dashboard.quest_Show_MotionDirection_Func(quest_Motion_Direction_Enum.Left)
                        //////jwc n this.quest_Show_MotionDirection_Func(quest_Motion_Direction_Enum.Left)
                        //////jwc 25-0325-1600: obsolete: quest_Show_MotionDirection_Func(quest_Motion_Direction_Enum.Left)
                        break  // out of these case statements

                    case quest_Turn_Direction_Enum.right:

                        switch (turn_Power_In) {
                            case quest_Turn_Power_Enum.Lo:
                                motor_Power_L = motor_Power_Lo_QuestGlobal
                                motor_Power_R = motor_Power_Lo_QuestGlobal * (-1)
                                break  // out of these case statements
                            case quest_Turn_Power_Enum.Mi:
                                motor_Power_L = motor_Power_Mi_QuestGlobal
                                motor_Power_R = motor_Power_Mi_QuestGlobal * (-1)
                                break  // out of these case statements
                            case quest_Turn_Power_Enum.Hi:
                                motor_Power_L = motor_Power_Hi_QuestGlobal
                                motor_Power_R = motor_Power_Hi_QuestGlobal * (-1)
                                break  // out of these case statements
                        }
                        //////jwc y quest_Dashboard.quest_Show_MotionDirection_Func(quest_Motion_Direction_Enum.Right)
                        //////jwc n this.quest_Show_MotionDirection_Func(quest_Motion_Direction_Enum.Right)
                        //////jwc 25-0325-1600: obsolete: quest_Show_MotionDirection_Func(quest_Motion_Direction_Enum.Right)
                        break  // out of these case statements
                }
                break  // out of these case statements
        }

        switch (turn_Duration_In) {
            case quest_Turn_Duration_Enum.msec_20:
                turn_Duration = 20
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_40:
                turn_Duration = 40
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_60:
                turn_Duration = 60
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_80:
                turn_Duration = 80
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_100:
                turn_Duration = 100
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_200:
                turn_Duration = 200
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_400:
                turn_Duration = 400
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_600:
                turn_Duration = 600
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_800:
                turn_Duration = 800
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_1000:
                turn_Duration = 1000
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_2000:
                turn_Duration = 2000
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_3000:
                turn_Duration = 3000
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_4000:
                turn_Duration = 4000
                break  // out of these case statements
            case quest_Turn_Duration_Enum.msec_5000:
                turn_Duration = 5000
                break  // out of these case statements
        }

        //// jwc 25-0628-1400 // diagnostics
        //// jwc 25-0628-1400 switch (debug_Show_In) {
        //// jwc 25-0628-1400     case quest_Debug_Show_Enum.Dashboard_OLED:
        //// jwc 25-0628-1400         //// jwc 25-0626-1830 Only clear target-row: quest_Dashboard.quest_Show_Oled_Cleared_Func()
        //// jwc 25-0628-1400         quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(convertToText(motor_Power_L) +" "+ convertToText(motor_Power_R) +" "+ convertToText(turn_Duration), 0, 3)
        //// jwc 25-0628-1400 
        //// jwc 25-0628-1400         break  // out of these case statements
        //// jwc 25-0628-1400     case quest_Debug_Show_Enum.MicroBit_Screen:
        //// jwc 25-0628-1400         // diagnostics
        //// jwc 25-0628-1400         basic.showIcon(IconNames.Fabulous)
        //// jwc 25-0628-1400 
        //// jwc 25-0628-1400         break  // out of these case statements
        //// jwc 25-0628-1400     case quest_Debug_Show_Enum.Off:
        //// jwc 25-0628-1400 
        //// jwc 25-0628-1400         break  // out of these case statements
        //// jwc 25-0628-1400     default:
        //// jwc 25-0628-1400         if (_debug_Serial_Print_Bool_QuestGlobal) {
        //// jwc 25-0628-1400             serial.writeLine("* ERROR: 25-0209-1020: quest_Set_Turn_WithTimer_Func: "+ motor_Power_L +" "+ motor_Power_R +" "+ turn_Duration)
        //// jwc 25-0628-1400         }
        //// jwc 25-0628-1400         break
        //// jwc 25-0628-1400 }

        // turn
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(port_Ids_In, motor_Power_L, motor_Power_R)
        // timer
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(turn_Duration, quest_Time_Units_Enum.Milliseconds)
        // stop
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(port_Ids_In, 0, 0)

    }

    //// jwc y 25-0805-2000 //% block="set auto_servo_arm_BIG|* port_Id_In: $port_Id_In|* servoArm_DegreesInDirection_Enum_In: $servoArm_DegreesInDirection_Enum_In|* debug_Show_In: $debug_Show_In|* OrangeWire=BluePin(S), RedWire=RedPin(V), BrownWire=BlackPin(G)|* Battery>=75%|* Power-Off When Wiring"
    //// jwc y 25-0806-0050 //% block="set auto_servo_arm_BIG|* port_Id_In: $port_Id_In|* servoArm_DegreesInDirection_Enum_In: $servoArm_DegreesInDirection_Enum_In|* debug_Show_In: $debug_Show_In|Key Tips: |  - Orange Wire = Blue Pin (Signal)|  - Red Wire = Red Pin (Volt)|  - Brown Wire = Black Pin (Ground)|  - When Wiring, Power-Off |  - When Operating, Battery >= 75\\%"
    //// jwc y 25-1011-1540 //% block="set auto_servo_arm_SMALL|* port_Id_In: $port_Id_In|* servoArm_DegreesInDirection_Enum_In: $servoArm_DegreesInDirection_Enum_In|* debug_Show_In: $debug_Show_In|Key Tips: |  - OrangeW.ire=BlueP.in(S), RedW.=RedP.(V), BrownW.=BlackP.(G)|  - S=Signal, V=Volts, G=Ground|  - When Wiring, Power-Off -&- When Operating, Battery >= 75\\%"


    /**
    * quest_Set_AutoDegrees_ForServoArm_SMALL_Func
    * @param port_Id_In quest_PortGroup_ServoArm_PortId_Enum
    * @param servoArm_DegreesInDirection_Enum_In quest_ServoArm_DegreesInDirection_Enum
    * @param debug_Show_In quest_Debug_Show_Enum

    */
    //% block="set auto_servo_arm_SMALL|* port_Id_In: $port_Id_In|* servoArm_DegreesInDirection_Enum_In: $servoArm_DegreesInDirection_Enum_In|* debug_Show_In: $debug_Show_In|Key Tips: |  - White-Axle-Nub Towards Bot's Front for Code-Sync|  - OrangeW.ire=BlueP.in(S), RedW.=RedP.(V), BrownW.=BlackP.(G)|  - S=Signal, V=Volts, G=Ground|  - When Wiring, Power-Off -&- When Operating, Battery >= 75\\%"
    //% weight=74 blockGap=8
    //% inlineInputMode=external
    export function quest_Set_AutoDegrees_ForServoArm_SMALL_Func(port_Id_In: quest_PortSingle_ServoArmBeam_PortId_Enum, servoArm_DegreesInDirection_Enum_In: quest_ServoArm_DegreesInDirection_Enum, debug_Show_In: quest_Debug_Show_Enum): void {

        ///jwc y if(quest_Debug_Show_Enum)
        ///jwc y basic.showIcon(IconNames.SmallHeart)

        let network_Message_Str = ""
        let message_Mini_Network_Str = ""
        let message_Full_Display_Str = ""


        //// jwc 25-0809-1450 y: //// jwc 25-0809-1400 270/360 = 0.75 >> 0 x 0.75 = 0 | 45 x 0.75 = 33.75 } 90 x 0.75 - 67.5 | 180 x 0.75 = 135 \/\/
        //// jwc 25-0809-1450 y: ////
        //// jwc 25-0809-1450 y: wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, 0)
        //// jwc 25-0809-1450 y: wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, 0)
        //// jwc 25-0809-1450 y: serial.writeLine('* test.ts: 12: ' + convertToText(0))
        //// jwc 25-0809-1450 y: quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds) //// jwc 3,2,1, 0.5
        //// jwc 25-0809-1450 y: 
        //// jwc 25-0809-1450 y: wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, 33.75)
        //// jwc 25-0809-1450 y: wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, 33.75)
        //// jwc 25-0809-1450 y: serial.writeLine('* test.ts: 12: ' + convertToText(33.75))
        //// jwc 25-0809-1450 y: quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds) //// jwc 3,2,1, 0.5
        //// jwc 25-0809-1450 y: 
        //// jwc 25-0809-1450 y: wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, 67.5)
        //// jwc 25-0809-1450 y: wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, 67.5)
        //// jwc 25-0809-1450 y: serial.writeLine('* test.ts: 12: ' + convertToText(67.5))
        //// jwc 25-0809-1450 y: quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds) //// jwc 3,2,1, 0.5


        let servoArm_Degrees_Local = 0
        //// 25-0922-0250 
        let servoArm_Degrees_Max = 270
        let servoArm_Degrees_Offset_For_Down = 50

        switch (port_Id_In) {
            case quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArm_Left:

                switch (servoArm_DegreesInDirection_Enum_In) {
                    //// jwc 25-1010-1700 case quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down:
                    //// jwc 25-1010-1700     //// jwc y servoArm_Degrees_Local = 90
                    //// jwc 25-1010-1700     //// jwc 25-0625-1800 servoArm_Degrees_Local = 135
                    //// jwc 25-1010-1700     //// jwc 25-0808-1800 New Servo Positoning \/ 
                    //// jwc 25-1010-1700     //// 25-0922-0250 servoArm_Degrees_Local = 0
                    //// jwc 25-1010-1700     servoArm_Degrees_Local = servoArm_Degrees_Max - 50
                    //// jwc 25-1010-1700     break  // out of these case statements
                    //// jwc 25-1010-1700 case quest_ServoArm_DegreesInDirection_Enum.Degree_045_Up_Half:
                    //// jwc 25-1010-1700     //// jwc 25-0625-1800 servoArm_Degrees_Local = 180
                    //// jwc 25-1010-1700     //// jwc 25-0808-1800 New Servo Positoning \/ 
                    //// jwc 25-1010-1700     //// 25-0922-0250 servoArm_Degrees_Local = 33.75
                    //// jwc 25-1010-1700     servoArm_Degrees_Local = servoArm_Degrees_Max - 95
                    //// jwc 25-1010-1700     break  // out of these case statements
                    //// jwc 25-1010-1700 case quest_ServoArm_DegreesInDirection_Enum.Degree_090_Up_Full:
                    //// jwc 25-1010-1700     //// jwc y servoArm_Degrees_Local = 45
                    //// jwc 25-1010-1700     //// jwc 25-0625-1800 servoArm_Degrees_Local = 90
                    //// jwc 25-1010-1700     //// jwc 25-0808-1800 New Servo Positoning \/ 
                    //// jwc 25-1010-1700     //// 25-0922-0250 servoArm_Degrees_Local = 67.5
                    //// jwc 25-1010-1700     servoArm_Degrees_Local = servoArm_Degrees_Max - 140
                    //// jwc 25-1010-1700     break  // out of these case statements

                    //// Delta of 50-degrees
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down:
                        servoArm_Degrees_Local = servoArm_Degrees_Max - 50
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_015:
                        servoArm_Degrees_Local = servoArm_Degrees_Max - 65
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_030:
                        servoArm_Degrees_Local = servoArm_Degrees_Max - 80
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_045_Up_Half:
                        servoArm_Degrees_Local = servoArm_Degrees_Max - 95
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_060:
                        servoArm_Degrees_Local = servoArm_Degrees_Max - 110
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_075:
                        servoArm_Degrees_Local = servoArm_Degrees_Max - 125
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_090_Up_Full:
                        servoArm_Degrees_Local = servoArm_Degrees_Max - 140
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_105:
                        servoArm_Degrees_Local = servoArm_Degrees_Max - 155
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_120:
                        servoArm_Degrees_Local = servoArm_Degrees_Max - 170
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_135:
                        servoArm_Degrees_Local = servoArm_Degrees_Max - 185
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_150:
                        servoArm_Degrees_Local = servoArm_Degrees_Max - 200
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_165:
                        servoArm_Degrees_Local = servoArm_Degrees_Max - 215
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_180:
                        servoArm_Degrees_Local = servoArm_Degrees_Max - 230
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_195:
                        servoArm_Degrees_Local = servoArm_Degrees_Max - 245
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_210:
                        servoArm_Degrees_Local = servoArm_Degrees_Max - 260
                        break  // out of these case statements
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225" case quest_ServoArm_DegreesInDirection_Enum.Degree_225:
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225"     //// jwc 25-1010-2210 n since below 0 min >> -5:  servoArm_Degrees_Local = servoArm_Degrees_Max - 275
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225"     servoArm_Degrees_Local = servoArm_Degrees_Max - 270
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225"     break  // out of these case statements
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225" case quest_ServoArm_DegreesInDirection_Enum.Degree_240:
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225"     servoArm_Degrees_Local = servoArm_Degrees_Max - 290
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225"     break  // out of these case statements
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225" case quest_ServoArm_DegreesInDirection_Enum.Degree_255:
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225"     servoArm_Degrees_Local = servoArm_Degrees_Max - 205
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225"     break  // out of these case statements
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225" case quest_ServoArm_DegreesInDirection_Enum.Degree_270:
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225"     servoArm_Degrees_Local = servoArm_Degrees_Max - 220
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225"     break  // out of these case statements

                }
                //// jwc 25-0720-1800 switch from large-gray to small-gray: wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, servoArm_Degrees_Local)
                wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S7, servoArm_Degrees_Local)
                //// jwc 25-0626-1400 if (network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal == quest_Toggle_OnOff_Enum.On) {
                //// jwc 25-0626-1400     //// jwc y quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("A:" + convertToText(network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL +",L:" + convertToText(powerLeftIn) +",R:" + convertToText(powerRightIn)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// jwc 25-0626-1400     //// jwc ny quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("C:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",Arm_Port:" + convertToText(port_Id_In) + ",Arm_Deg:" + convertToText(servoArm_DegreesInDirection_Enum_In)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// jwc 25-0626-1400     //// jwc 25-0325-1600 obsolete: quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("C:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",P:" + convertToText(port_Id_In) + ",D:" + convertToText(servoArm_DegreesInDirection_Enum_In)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// jwc 25-0626-1400     quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func( "C:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",L_S7:" + convertToText(servoArm_DegreesInDirection_Enum_In)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// jwc 25-0626-1400 }
                //// jwc 25-0627-0900 quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("C:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",L_S7:" + convertToText(servoArm_DegreesInDirection_Enum_In)))
                //// jwc 25-0628-1400 quest_Dashboard.quest_Dashboard_Network_SendData_WithMyBotHeader_Func("C:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",L_S7:" + convertToText(servoArm_DegreesInDirection_Enum_In)))

                message_Mini_Network_Str = "7" + convertToText(servoArm_DegreesInDirection_Enum_In)
                message_Full_Display_Str = "Arm_L: " + convertToText(servoArm_DegreesInDirection_Enum_In)
                // Special Location: For 'Arm_L" 
                quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(message_Full_Display_Str, 0, 3)

                //// jwc 25-0628-1400 if (_debug_Serial_Print_Bool_QuestGlobal) {
                //// jwc 25-0628-1400     //// jwc o serial.writeLine("* quest_Set_AutoDegrees_ForServoArm_Func: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                //// jwc 25-0628-1400     //// jwc 25-0325-1600 obsolete: serial.writeLine("* quest_Set_AutoDegrees_ForServoArm_Func: " + "C:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",Arm_Port:" + convertToText(port_Id_In) + ",Arm_Deg:" + convertToText(servoArm_DegreesInDirection_Enum_In)))
                //// jwc 25-0628-1400     //// jwc y serial.writeLine("* quest_Set_AutoDegrees_ForServoArm_Func: " + "C:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",L_S7:" + convertToText(servoArm_DegreesInDirection_Enum_In)))
                //// jwc 25-0628-1400     serial.writeLine("* quest_Set_AutoDegrees_ForServoArm_Func: " + message_Full_Display_Str)
                //// jwc 25-0628-1400 }
                break  // out of these case statements

            case quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArm_Right:

                switch (servoArm_DegreesInDirection_Enum_In) {
                    //// jwc 25-1010-1700 case quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down:
                    //// jwc 25-1010-1700     //// jwc y servoArm_Degrees_Local = 90
                    //// jwc 25-1010-1700     //// jwc 25-0625-1800 servoArm_Degrees_Local = 45
                    //// jwc 25-1010-1700     //// jwc 25-0808-1800 New Servo Positoning \/ 
                    //// jwc 25-1010-1700     //// 25-0922-0250 servoArm_Degrees_Local = 0
                    //// jwc 25-1010-1700     servoArm_Degrees_Local = 50
                    //// jwc 25-1010-1700     break  // out of these case statements
                    //// jwc 25-1010-1700 case quest_ServoArm_DegreesInDirection_Enum.Degree_045_Up_Half:
                    //// jwc 25-1010-1700     //// jwc 25-0625-1800 servoArm_Degrees_Local = 0
                    //// jwc 25-1010-1700     //// jwc 25-0808-1800 New Servo Positoning \/ 
                    //// jwc 25-1010-1700     //// 25-0922-0250 servoArm_Degrees_Local = 33.75
                    //// jwc 25-1010-1700     servoArm_Degrees_Local = 95
                    //// jwc 25-1010-1700     break  // out of these case statements
                    //// jwc 25-1010-1700 case quest_ServoArm_DegreesInDirection_Enum.Degree_090_Up_Full:
                    //// jwc 25-1010-1700     //// jwc y servoArm_Degrees_Local = 135
                    //// jwc 25-1010-1700     //// jwc 25-0625-1800 servoArm_Degrees_Local = 90
                    //// jwc 25-1010-1700     //// jwc 25-0808-1800 New Servo Positoning \/ 
                    //// jwc 25-1010-1700     //// 25-0922-0250 servoArm_Degrees_Local = 67.5
                    //// jwc 25-1010-1700     servoArm_Degrees_Local = 140
                    //// jwc 25-1010-1700     break  // out of these case statements

                    case quest_ServoArm_DegreesInDirection_Enum.Degree_000_Down:
                        servoArm_Degrees_Local = 50
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_015:
                        servoArm_Degrees_Local = 65
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_030:
                        servoArm_Degrees_Local = 80
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_045_Up_Half:
                        servoArm_Degrees_Local = 95
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_060:
                        servoArm_Degrees_Local = 110
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_075:
                        servoArm_Degrees_Local = 125
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_090_Up_Full:
                        servoArm_Degrees_Local = 140
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_105:
                        servoArm_Degrees_Local = 155
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_120:
                        servoArm_Degrees_Local = 170
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_135:
                        servoArm_Degrees_Local = 185
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_150:
                        servoArm_Degrees_Local = 200
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_165:
                        servoArm_Degrees_Local = 215
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_180:
                        servoArm_Degrees_Local = 230
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_195:
                        servoArm_Degrees_Local = 245
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_210:
                        servoArm_Degrees_Local = 260
                        break  // out of these case statements
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225" case quest_ServoArm_DegreesInDirection_Enum.Degree_225:
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225"     //// jwc 25-1010-2210 n since below 0 min >> -5:  servoArm_Degrees_Local = servoArm_Degrees_Max - 275
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225"     servoArm_Degrees_Local = servoArm_Degrees_Max - 270
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225"     break  // out of these case statements
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225" case quest_ServoArm_DegreesInDirection_Enum.Degree_240:
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225"     servoArm_Degrees_Local = servoArm_Degrees_Max - 290
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225"     break  // out of these case statements
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225" case quest_ServoArm_DegreesInDirection_Enum.Degree_255:
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225"     servoArm_Degrees_Local = servoArm_Degrees_Max - 205
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225"     break  // out of these case statements
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225" case quest_ServoArm_DegreesInDirection_Enum.Degree_270:
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225"     servoArm_Degrees_Local = servoArm_Degrees_Max - 220
                    //// jwc 25-1010-1700 225 + 50 = 275 > 270_Max, so will not work: //% block="Degree_225"     break  // out of these case statements

                }
                //// jwc 25-0720-1800 switch from large-gray to small-gray: wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S6, servoArm_Degrees_Local)
                wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S6, servoArm_Degrees_Local)
                //// jwc 25-0626-1400 if (network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal == quest_Toggle_OnOff_Enum.On) {
                //// jwc 25-0626-1400     //// jwc y quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("A:" + convertToText(network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL +",L:" + convertToText(powerLeftIn) +",R:" + convertToText(powerRightIn)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// jwc 25-0626-1400     //// jwc ny quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("C:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",Arm_Port:" + convertToText(port_Id_In) + ",Arm_Deg:" + convertToText(servoArm_DegreesInDirection_Enum_In)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// jwc 25-0626-1400     //// jwc 25-0325-1600 obsolete: quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("C:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",P:" + convertToText(port_Id_In) + ",D:" + convertToText(servoArm_DegreesInDirection_Enum_In)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// jwc 25-0626-1400      quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("D:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",R_S6:" + convertToText(servoArm_DegreesInDirection_Enum_In)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// jwc 25-0626-1400 }
                //// jwc 25-0627-0900 quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("D:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",R_S6:" + convertToText(servoArm_DegreesInDirection_Enum_In)))
                //// jwc 25-0628-1400 quest_Dashboard.quest_Dashboard_Network_SendData_WithMyBotHeader_Func("D:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",R_S6:" + convertToText(servoArm_DegreesInDirection_Enum_In)))

                message_Mini_Network_Str = "6" + convertToText(servoArm_DegreesInDirection_Enum_In)
                message_Full_Display_Str = "Arm_R: " + convertToText(servoArm_DegreesInDirection_Enum_In)
                // Special Location: For 'Arm_R"
                quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(message_Full_Display_Str, 10, 3)

                //// jwc 25-0628-1400 if (_debug_Serial_Print_Bool_QuestGlobal) {
                //// jwc 25-0628-1400     //// jwc o serial.writeLine("* quest_Set_AutoDegrees_ForServoArm_Func: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                //// jwc 25-0628-1400     //// jwc 25-0325-1600 obsolete: serial.writeLine("* quest_Set_AutoDegrees_ForServoArm_Func: " + "C:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",Arm_Port:" + convertToText(port_Id_In) + ",Arm_Deg:" + convertToText(servoArm_DegreesInDirection_Enum_In)))
                //// jwc 25-0628-1400     serial.writeLine("* quest_Set_AutoDegrees_ForServoArm_Func: " + "D:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",R_S6:" + convertToText(servoArm_DegreesInDirection_Enum_In)))
                //// jwc 25-0628-1400 }
                break  // out of these case statements 
        }

        quest_Dashboard.quest_Dashboard_Network_SendData_WithMyBotHeader_Func(message_Mini_Network_Str)

        if (_debug_Serial_Print_Bool_QuestGlobal) {
            //// jwc 25-0627-0900 serial.writeLine("*A:" + convertToText(network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL) + "<<" + network_Message_Str + "|" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal))
            //// jwc 25-0627-0900 serial.writeLine("* quest_Dashboard_Network_SendLogin_Func: '" + network_Message_Str + "'")
            serial.writeLine("* quest_Set_AutoDegrees_ForServoArm_Func: '" + message_Full_Display_Str + "'")
        }

        //// jwc 25-0626-1200 // diagnostics
        //// jwc 25-0626-1200 switch (debug_Show_In) {
        //// jwc 25-0626-1200     case quest_Debug_Show_Enum.Dashboard_OLED:
        //// jwc 25-0626-1200         //// jwc 25-0626-1830 Only clear target-row: quest_Dashboard.quest_Show_Oled_Cleared_Func()
        //// jwc 25-0626-1200         //// jwc 25-0626-1400 quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("CD:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",Arm_Port:" + convertToText(port_Id_In) + ",Arm_Deg:" + convertToText(servoArm_DegreesInDirection_Enum_In)), 0, 0)
        //// jwc 25-0626-1200         quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("CD:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",Arm_Port:" + convertToText(port_Id_In) + ",Arm_Deg:" + convertToText(servoArm_DegreesInDirection_Enum_In)), 0, 3)
        //// jwc 25-0626-1200 
        //// jwc 25-0626-1200         break  // out of these case statements
        //// jwc 25-0626-1200     case quest_Debug_Show_Enum.MicroBit_Screen:
        //// jwc 25-0626-1200         // diagnostics
        //// jwc 25-0626-1200         basic.showIcon(IconNames.Fabulous)
        //// jwc 25-0626-1200 
        //// jwc 25-0626-1200         break  // out of these case statements
        //// jwc 25-0626-1200     case quest_Debug_Show_Enum.Off:
        //// jwc 25-0626-1200 
        //// jwc 25-0626-1200         break  // out of these case statements
        //// jwc 25-0626-1200     default:
        //// jwc 25-0626-1200         if (_debug_Serial_Print_Bool_QuestGlobal) {
        //// jwc 25-0626-1200             serial.writeLine("* ERROR: 25-0309-0900: quest_Set_AutoDegrees_ForServoArm_Func: " + "C:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",Arm_Port:" + convertToText(port_Id_In) + ",Arm_Deg:" + convertToText(servoArm_DegreesInDirection_Enum_In)))
        //// jwc 25-0626-1200         }
        //// jwc 25-0626-1200         break
        //// jwc 25-0626-1200 }
    }

}
