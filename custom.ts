/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

// *** IMPORTANT NOTES ***
//
// * Naming Scheme
//   ** global_Variable_Etc_Quest_Global
//   ** local_variable_etc
//   ** name_Space_Etc (since treated like an class/object, so like a 'global_Variable')
//
// * Functions Listed First_In (Here BackEnd): Listed Last_Out (There FrontEnd)
// * Move all test code from 'maint.blocks/.ts' to 'test.ts' for final publish
// * Quest will use namespace weight of 51 (50 bad) to 69 to below Standard Namespace 'LED' 
//   ** but above any 3rd Party Namespaces to avoid competinbg confusion
// * Proactive approach to Commenting:
//   ** With more upfront transperency w/ 3 note levels: gray, green, blue, 
//   ** less need for debugging/troubleshooting notes - thus 1 level: yellow
// * For full/complete upload to Github, press 'Github' button 
//   ** while in any file within JavaScript mode, not 'Blocks' mode
// * Note any edits is saved real-time since a cloud-editor, even before Github upload
// * TYJ 1 sec spin ~ 45 deg, 2 sec spin ~ 90 deg, 2 sec spin ~ 180, 4 sec spin ~ 360, thus sufficient to max 5 sec spin
// * x2 '//' = '////jwc y' is better comment-out than standard x3 '//////jwc y', since latter too long to add and delete
// * Successive two '_' special formatting to italics, so use '\\_' to deactivate special character processing
// * To force Front_End UX to update from Back_End Code, good to use Browser_Refresh and will not lose Back_End Code 
//   (even though not 'github-ed' yet) 
// * Colors
//   ** http://www.baskent.edu.tr/~tkaracay/etudio/agora/nnn/html_colors.htm#:~:text=aqua%2C%20black%2C%20blue%2C%20fuchsia,for%20the%20same%20color%20name.
//   ** https://www.rapidtables.com/web/color/RGB_Color.html
//   ** https://www.indezine.com/products/powerpoint/learn/color/color-rgb.html
//   ** https://htmlcolorcodes.com/


// enum MyEnum {
//    //% block="one"
//    One,
//    //% block="two"
//    Two
// }

//// jwc y obsolete: enum quest_Toggle_OnOff_Enum {
//// jwc y obsolete:     //% block="On"
//// jwc y obsolete:     On,
//// jwc y obsolete:     //% block="Off"
//// jwc y obsolete:     Off,
//// jwc y obsolete: }

enum quest_PortGroup_BlueRedBlack_PortIds_Enum {
    //% block="S1_MotorLeft__S0_MotorRight"
    S1_MotorLeft__S0_MotorRight,
    //% block="S3_MotorLeft__S2_MotorRight"
    S3_MotorLeft__S2_MotorRight,
}

enum quest_Time_Units_Enum {
    //% block="seconds"
    Seconds,
    //% block="milliseconds"
    Milliseconds,
}

enum quest_Motion_Direction_Enum {
    //% block="Forward"
    Forward,
    //% block="Backward"
    Backward,
    //% block="Left"
    Left,
    //% block="Right"
    Right,
    //% block="Stop"
    Stop,
}

enum quest_Turn_Duration_Enum {
    //% block="20 msec"
    msec_20,
    //% block="40 msec"
    msec_40,
    //% block="60 msec"
    msec_60,
    //% block="80 msec"
    msec_80,
    //% block="100 msec"
    msec_100,
    //% block="200 msec"
    msec_200,
    //% block="400 msec"
    msec_400,
    //% block="600 msec"
    msec_600,
    //% block="800 msec"
    msec_800,
    //% block="1000 msec(1 sec)"
    msec_1000,
    //% block="2000 msec(2 sec)"
    msec_2000,
    //% block="3000 msec(3 sec)"
    msec_3000,
    //% block="4000 msec(4 sec)"
    msec_4000,
    //% block="5000 msec(5 sec)"
    msec_5000,
}

////jwc yy ////jwc y // 'Spin' as default since is more bi-directional (left and right capable)
////jwc yy // 'Pivot' as default since is slower for more accurate turns
////jwc yy enum turn_Type_03_Enum {
////jwc yy     //% block="Pivot(One Wheel Rotates While Other Wheel Rotates_Not)"
////jwc yy     Pivot,
////jwc yy     //% block="Spin(Both Wheels Rotate in Opposite Directions)"
////jwc yy     Spin,
////jwc yy }
////jwc y // 'Spin' as default since is more bi-directional (left and right capable)
// 'Pivot' as default since is slower for more accurate turns
enum quest_Turn_Type_Enum {
    //% block="Pivot(One Wheel Rotates While Other Wheel Rotates_Not)"
    Pivot,
    //% block="Spin(Both Wheels Rotate in Opposite Directions)"
    Spin,
}

enum quest_Turn_Direction_Enum {
    //% block="right"
    right,
    //% block="left"
    left,
}
enum quest_Turn_Power_Enum {
    //% block="Lo(30%)"
    Lo,
    //% block="Mi(65%)"
    Mi,
    //% block="Hi(100%)"
    Hi,
}

enum quest_Debug_Show_Enum {
    //% block="Off"
    Off,
    //% block="Dashboard_OLED"
    Dashboard_OLED,
    //% block="MicroBit_Screen"
    MicroBit_Screen,
}

enum quest_Controller_Joystick_Directional_AngelDegree_Increment_Enum {
    //% block="degree_90"
    degree_90,
    //% block="degree_45"
    degree_45,
    //% block="degree_30"
    degree_30,
}

enum quest_String_Justify_Type_Enum {
    //% block="justify_Left"
    justify_Left,
    //% block="justify_Right"
    justify_Right,
}

// * Though it seems that can define global vars here, but not advised 
// ** since memory storage would be safer within 'namespace'
//
///y let deviceType_Bot_Bool_QuestGlobal = false
///y let deviceType_Controller_Bool_QuestGlobal = true
// * Go ahead and define here, since multiple 'namespaces'
//
// * Global Variables & Constants
//
// * Default to Bot and not to Controller for most basic total 1 'micro:bit' setup (No Controller: Autonomous)
//
//////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks': let deviceType_Bot_Bool = true
//////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks': let deviceType_Controller_Bool = false
let deviceType_Bot_Bool_QuestGlobal = true
let deviceType_Controller_Bool_QuestGlobal = false
//
let network_GroupChannelOfMe_Base0_Int_QuestGlobal = 0
//// jwc obsolete: let network_Send_DataOfBot_ToXrayDashboardOfMb_Enum_QuestGlobal = quest_Toggle_OnOff_Enum.On
let network_Send_DataOfBot_ToXrayDashboardOfMb_Enum_QuestGlobal = true
// "IMPORTANT: Network Message will be cut off beyond Max Length"
let network_Message_LENGTH_MAX_INT = 18
let network_GroupChannel_Of_XrayDashboardOfMb_BASE0_INT = 255

//
let _debug_Serial_Print_Bool_QuestGlobal = false
//
let motor_Power_No_QuestGlobal = 0
let motor_Power_Lo_QuestGlobal = 30
let motor_Power_Mi_QuestGlobal = 65
let motor_Power_Hi_QuestGlobal = 100

///y //% weight=100 color=#0fbc11 icon=""
///y //% weight=100 color=#0000ff icon="\uf5b8"
///y //% weight=100 color=#0000ff icon="\uf005"
/// was 90
///n //% weight=99 color=#808080 icon=""
///y //% weight=99 color=#808080 icon="uf005"
/// 91
//
// Teal #008080 rgb(0, 128, 128)
// Green #008000 rgb(0, 128, 0)
// Brown #7f3f00 rgb(127, 63, 0)
//
/**
 * quest_Dashboard blocks
 */
//% weight=65 color=#7f3f00 icon="Q"
namespace quest_Dashboard {
    // OLED12864_I2C: Setup
    //
    OLED12864_I2C.init(60)
    OLED12864_I2C.on()
    OLED12864_I2C.zoom(false)
    OLED12864_I2C.clear()

    /**
    * quest_Show_Oled_Cleared_Fn
    */
    //% block="show oled cleared"
    //% weight=53 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_Oled_Cleared_Func() {
        OLED12864_I2C.clear()
    }
    /**
    * quest_Show_String_For_Oled_BigFont_Fn
    * @param textStrIn string
    * @param xColBase0In number
    * @param yRowBase0In number
    */
    ////jwc y //% block="show oled big_font (AutoSetup I2cAddress=60, SCL=Pin19, SDA=Pin20)|textStrIn: $textStrIn|xColBase0In[0..11]: $xColBase0In|yRowBase0In[0..3]: $yRowBase0In"
    //% '\\' escape character to deactivate special character processing
    //% block="show oled big_font (AutoSetup I2cAddress=60, SCL=Pin19, SDA=Pin20)|text\\_Str\\_In: $textStrIn|x\\_Col\\_Base0\\_In[0..11]: $xColBase0In|y\\_Row\\_Base0\\_In[0..3]: $yRowBase0In"
    //% xColBase0In.min=0 xColBase0In.max=11
    //% yRowBase0In.min=0 yRowBase0In.max=3
    //% weight=52 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Oled_BigFont_Func(textStrIn: string, xColBase0In: number, yRowBase0In: number) {
        // Default Values
        let colorIntIn = 1 // default
        let textStrInLenMAX = 12  // Char Max with Zoom:On

        let textStrInLen = textStrIn.length

        // post blank-pad 'textStrIn' to full text width max
        //
        while (textStrIn.length < textStrInLenMAX) {
            textStrIn += " "
        }

        // always setup 'zoom'_in appropriately
        OLED12864_I2C.zoom(true)

        OLED12864_I2C.showString(
            xColBase0In,
            yRowBase0In,
            textStrIn,
            colorIntIn
        )
    }
    /**
     * quest_Show_String_For_Oled_SmallFont_Fn
     * @param textStrIn string
     * @param xColBase0In number
     * @param yRowBase0In number
     */
    //% '\\' escape character to deactivate special character processing
    //% block="show oled small_font (AutoSetup I2cAddress=60, SCL=Pin19, SDA=Pin20)|text\\_Str\\_In: $textStrIn|x\\_Col\\_Base0\\_In[0..24]: $xColBase0In|y\\_Row\\_Base0\\_In[0..7]: $yRowBase0In"
    //% xColBase0In.min=0 xColBase0In.max=24
    //% yRowBase0In.min=0 yRowBase0In.max=7
    //% weight=51 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Oled_SmallFont_Func(textStrIn: string, xColBase0In: number, yRowBase0In: number) {
        // Default Values
        let colorIntIn = 1 // default
        let textStrInLenMAX = 25  // Char Max with Zoom:Off

        let textStrInLen = textStrIn.length

        // post blank-pad 'textStrIn' to full text width max
        //
        while (textStrIn.length < textStrInLenMAX) {
            textStrIn += " "
        }

        // always setup 'zoom'_in appropriately
        OLED12864_I2C.zoom(false)

        OLED12864_I2C.showString(
            xColBase0In,
            yRowBase0In,
            textStrIn,
            colorIntIn
        )
    }


    //// jwc oyy /**
    //// jwc oyy  * quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Fn
    //// jwc oyy  * @param portIdsIn quest_PortGroup_BlueRedBlack_PortIds_Enum
    //// jwc oyy  * @param powerLeftIn number
    //// jwc oyy  * @param powerRightIn number
    //// jwc oyy  * @param turn_Duration_In quest_Turn_Duration_Enum
    //// jwc oyy  * @param debug_Show_In quest_Debug_Show_Enum
    //// jwc oyy  *
    //// jwc oyy  */

    ////jwc o //% block="set servo_motors w/ timer: $portIdsIn|@ left motor power: $powerLeftIn|@ right motor power: $powerRightIn|turn_Duration_In $turn_Duration_In"
    ////jwc y //% block="set servo_motors w/ timer:|* ports: $portIdsIn|* left motor power: $powerLeftIn|* right motor power: $powerRightIn|* turn_Duration: $turn_Duration_In"
    ////jwc y //% block="set manual'_servo\\_motors w/ timer:|* ports: $portIdsIn|* left motor power: $powerLeftIn|* right motor power: $powerRightIn|* turn_Duration: $turn_Duration_In"
    ////jwc y //% block="set manual\\_servo\\_motors w/ timer:|* ports: $portIdsIn|* left_motor power: $powerLeftIn|* right_motor power: $powerRightIn|* turn_Duration: $turn_Duration_In"

    ////jwc y //% block="set manual\\_servo\\_motors w/ timer:|* ports: $portIdsIn|* left_motor power: $powerLeftIn|* right_motor power: $powerRightIn|* turn_Duration: $turn_Duration_In|* debug_Show: $debug_Show_In"
    ////
    //// jwc o export function quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Func(portIdsIn: quest_PortGroup_BlueRedBlack_PortIds_Enum, powerLeftIn: number, powerRightIn: number, turn_Duration_In: quest_Turn_Duration_Enum, debug_Show_In: quest_Debug_Show_Enum): void {
    ////
    //// jwc oyy //% block="set manual\\_servo\\_motors w/ timer:|* ports: $portIdsIn|* left_motor power\\_\\%: $powerLeftIn|* right_motor power\\_\\%: $powerRightIn|* turn_Duration: $turn_Duration_In|* debug_Show: $debug_Show_In"
    //// jwc oyy //% powerLeftIn.min=-100 powerLeftIn.max=100
    //// jwc oyy //% powerRightIn.min=-100 powerRightIn.max=100
    ////

    /**
     * quest_Send_DataOfBot_ToXrayDashboardOfMb_Func
     * @param network_GroupChannelOfMe_Base0_IntIn number
     * @param send_DataOfBot_ToXrayDashboardOfMb_On_Bool_In boolean
     * @param debug_Show_In quest_Debug_Show_Enum
     *
     */
    // '\\' = escape character to deactivate following special character
    //% block="set quest\\_Send\\_DataOfBot\\_ToXrayDashboardOfMb\\_Func:|* network_GroupChannelOfMe_Base0_IntIn: $network_GroupChannelOfMe_Base0_IntIn|* send_DataOfBot_ToXrayDashboardOfMb_On_Bool_In: $send_DataOfBot_ToXrayDashboardOfMb_On_Bool_In|* debug_Show_In: $debug_Show_In"
    //% network_GroupChannelOfMe_Base0_IntIn.min=0 network_GroupChannelOfMe_Base0_IntIn.max=254
    //% weight=50 blockGap=8
    //% inlineInputMode=external
    export function quest_Send_DataOfBot_ToXrayDashboardOfMb_Func(network_GroupChannelOfMe_Base0_IntIn: number, send_DataOfBot_ToXrayDashboardOfMb_On_Bool_In: boolean, debug_Show_In: quest_Debug_Show_Enum): void {
        ///jwc y if(quest_Debug_Show_Enum)
        ///jwc y basic.showIcon(IconNames.SmallHeart)

        let network_GroupChannelOfMe_Base0_Int_QuestGlobal = network_GroupChannelOfMe_Base0_IntIn
        let network_Send_DataOfBot_ToXrayDashboardOfMb_Enum_QuestGlobal = send_DataOfBot_ToXrayDashboardOfMb_On_Bool_In

        let network_Message_Str = ""

        //// jwc yy: allow '1' be legal for simplicity: if (network_GroupChannelOfMe_Base0_Int_QuestGlobal == 0 || network_GroupChannelOfMe_Base0_Int_QuestGlobal == 1 || network_GroupChannelOfMe_Base0_Int_QuestGlobal == 255) {
            if (network_GroupChannelOfMe_Base0_Int_QuestGlobal == 0 || network_GroupChannelOfMe_Base0_Int_QuestGlobal == 255) {
            //// jwc n network_GroupChannelOfMe_Base0_Int_QuestGlobal = convertToText(control.deviceSerialNumber()).substr(convertToText(control.deviceSerialNumber()).length - 2, 2)
            serial.writeLine("* 10- " + convertToText(network_GroupChannelOfMe_Base0_Int_QuestGlobal) + " " + convertToText(Math.abs(control.deviceSerialNumber() % 100)) + " " + convertToText(100 + Math.abs(control.deviceSerialNumber() % 100)) + " " + convertToText(control.deviceSerialNumber()))
            network_GroupChannelOfMe_Base0_Int_QuestGlobal = 100 + Math.abs(control.deviceSerialNumber() % 100)
            serial.writeLine("* 10+ " + convertToText(network_GroupChannelOfMe_Base0_Int_QuestGlobal))
        }

        // diagnostics
        switch (debug_Show_In) {
            case quest_Debug_Show_Enum.Dashboard_OLED:
                quest_Dashboard.quest_Show_Oled_Cleared_Func()
                
                quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(convertToText(network_GroupChannelOfMe_Base0_IntIn) + " " + convertToText(send_DataOfBot_ToXrayDashboardOfMb_On_Bool_In) + " " + convertToText(debug_Show_In), 0, 0)
                quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(convertToText(network_GroupChannelOfMe_Base0_Int_QuestGlobal) + " " + convertToText(network_Send_DataOfBot_ToXrayDashboardOfMb_Enum_QuestGlobal) + " " + convertToText(debug_Show_In), 0, 1)

                quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(convertToText(network_GroupChannelOfMe_Base0_Int_QuestGlobal) + " " + convertToText(network_Send_DataOfBot_ToXrayDashboardOfMb_Enum_QuestGlobal) + " " + convertToText(control.deviceSerialNumber()), 0, 2)

                serial.writeLine('* 20: ' + convertToText(network_GroupChannelOfMe_Base0_IntIn)            + " " + convertToText(send_DataOfBot_ToXrayDashboardOfMb_On_Bool_In)         + " " + convertToText(debug_Show_In))
                serial.writeLine('* 30: ' + convertToText(network_GroupChannelOfMe_Base0_Int_QuestGlobal) + " " + convertToText(network_Send_DataOfBot_ToXrayDashboardOfMb_Enum_QuestGlobal) + " " + convertToText(debug_Show_In))

                break  // out of these case statements
            case quest_Debug_Show_Enum.MicroBit_Screen:
                // diagnostics
                basic.showIcon(IconNames.Happy)

                break  // out of these case statements
            case quest_Debug_Show_Enum.Off:

                break  // out of these case statements
            default:
                if (_debug_Serial_Print_Bool_QuestGlobal) {
                    serial.writeLine("* ERROR: 25-0208-0300: quest_Send_DataOfBot_ToXrayDashboardOfMb_Func: " + network_GroupChannelOfMe_Base0_IntIn + " " + send_DataOfBot_ToXrayDashboardOfMb_On_Bool_In + " " + debug_Show_In)
                }
                break
        }
        //// jwc y serial.writeLine(" *80: L: " + quest_General.quest_Get_String_WithColumnPadding_AsStringOut_Func(convertToText(randint(0, 999)), 10, quest_String_Justify_Type_Enum.justify_Left) + " < ")
        //// jwc y serial.writeLine(' *90: R: ' + quest_General.quest_Get_String_WithColumnPadding_AsStringOut_Func(convertToText(randint(0, 999)), 10, quest_String_Justify_Type_Enum.justify_Right) + ' < ')

        //// jwc send data

        if (true) {
            quest_Note_3.quest_Show_String_For_Note_Small_Func(
                "Not end w/'delimiter' or will create a fake key_value pair at receiving end"
            )
            // network_Message_Str = "" + convertToText(network_GroupChannelOfMe_Base0_Int_QuestGlobal) + ":" + convertToText(input.lightLevel()) + ":" + convertToText(input.temperature()) + ":" + convertToText(0)
            // network_Message_Str = "ID:" + convertToText(botGroupChannelNum_Int) + ", TE:" + convertToText(input.temperature()) + ", LI:" + convertToText(input.lightLevel()) + ", CO:" + convertToText(input.compassHeading()) + ", MX:" + convertToText(input.magneticForce(Dimension.X)) + ", MY:" + convertToText(input.magneticForce(Dimension.Y)) + ", MZ:" + convertToText(input.magneticForce(Dimension.Z)) + ", MT:" + convertToText(input.magneticForce(Dimension.Strength))
            // 'Z:' = Register Header
            network_Message_Str = "Z:" + convertToText(network_GroupChannelOfMe_Base0_Int_QuestGlobal) + ",L:" + convertToText(randint(1, 999)) + ",R:" + convertToText(randint(1, 999))
            quest_Note_3.quest_Show_String_For_Note_Big_Func(
                "Network_Message Max Length or will be cut off"
            )
            if (network_Message_Str.length > network_Message_LENGTH_MAX_INT) {
                basic.showString("ERROR: 25-0209-0400 Network Message > Max Len.")
            }
            radio.setGroup(network_GroupChannel_Of_XrayDashboardOfMb_BASE0_INT)
            radio.sendString(network_Message_Str)
            radio.setGroup(network_GroupChannelOfMe_Base0_Int_QuestGlobal)
            if (debug_Show_In) {
                serial.writeLine("* 40: network_Message_Str: " + network_Message_Str)
            }
        }

    }




}

//////jwc y //% weight=67 color=#ff7f00 icon="Q"
//////jwc y //% weight=56 color=#7f7f00 icon="Q"
//////jwc y brown: //% weight=67 color=#7f3f00 icon="Q"
//
// Orange #ff7f00 rgb(255, 127, 0)
//
/**
 * quest_Timer blocks
 */
//% weight=67 color=#7f7f00 icon="Q"
namespace quest_Timer {
    /**
     * quest_Set_ContinueCurrentState_CountdownTimer_Fn
     * @param countdownTimer number
     * @param timeUnits quest_Time_Units_Enum
     */
    //% block="set current_state to continue for: $countdownTimer $timeUnits"
    //% weight=70 blockGap=8
    //// y countdownTimer.min=0 countdownTimer.max=5000
    export function quest_Set_ContinueCurrentState_CountdownTimer_Func(countdownTimer: number, timeUnits: quest_Time_Units_Enum): void {
        let countdownTimerNew = 0
        // Minimum border check
        if (countdownTimer < 0) { countdownTimer = 0 }
        if (timeUnits == quest_Time_Units_Enum.Seconds) {
            countdownTimerNew = countdownTimer * 1000
            basic.pause(countdownTimerNew)
        } else if (timeUnits == quest_Time_Units_Enum.Milliseconds) {
            countdownTimerNew = countdownTimer
            basic.pause(countdownTimerNew)
        }
    }
}

//
// color=#808080 = Gray: rgb(128, 128, 128)
// color=#3f3f3f = Dark Gray: rgb(63, 63, 63)
// ** to better differentiate vs. Silver Note
// * Gray like a 'black/gray box' which needs more transparency
//
/**
 * quest_General blocks
 */
//% weight=63 color=#3f3f3f icon="Q"
namespace quest_General {
    /**
    * quest_Get_Number_WithColumnPadding_AsStringOut_Fn
    * @param number_in number
    * @param string_len_max_in number
    * @param decimal_places_in number
    */
    ////jwc m //% block="get number with_column_padding as_string_out|number_in: $number_in|string_len_max_in: $string_len_max_in|decimal_places_in  $decimal_places_in"
    // '\\' escape character to deactivate special character processing
    //% block="get number w/ column\\_padding as string\\_out|number_in: $number_in|string\\_len\\_max\\_in: $string_len_max_in|decimal\\_places\\_in  $decimal_places_in"
    //% weight=62 blockGap=8
    //% inlineInputMode=external
    export function quest_Get_Number_WithColumnPadding_AsStringOut_Func(number_in: number, string_len_max_in: number, decimal_places_in: number = 0) {
        let local_number_with_fixed_decimal_deci = Math.round(number_in * 10 ** decimal_places_in) / 10 ** decimal_places_in

        let local_string_out = convertToText(local_number_with_fixed_decimal_deci)

        let local_loop_count_max = string_len_max_in - local_string_out.length

        for (let index = 0; index < local_loop_count_max; index++) {
            local_string_out = " " + local_string_out
        }
        return local_string_out
    }
    
    /**
    * quest_Get_String_WithColumnPadding_AsStringOut_Fn
    * @param string_in string
    * @param string_len_max_in number
    * @param string_justify_type_in quest_String_Justify_Type_Enum
    */
    // '\\' escape character to deactivate special character processing
    //% block="get string w/ column\\_padding as string\\_out|string_in: $string_in|string\\_len\\_max\\_in: $string_len_max_in|string\\_justify\\_type\\_in: $string_justify_type_in"
    //% weight=60 blockGap=8
    //% inlineInputMode=external
    export function quest_Get_String_WithColumnPadding_AsStringOut_Func(string_in: string, string_len_max_in: number, string_justify_type_in: quest_String_Justify_Type_Enum) {
        let local_string_out = string_in

        let local_loop_count_max = string_len_max_in - local_string_out.length

        for (let index = 0; index < local_loop_count_max; index++) {
            if(string_justify_type_in == quest_String_Justify_Type_Enum.justify_Left){
                ////jwc y good test: local_string_out = local_string_out + "."
                local_string_out = local_string_out + " "
            }
            else if(string_justify_type_in == quest_String_Justify_Type_Enum.justify_Right) {
                ////jwc y good test: local_string_out = "." + local_string_out
                local_string_out = " " + local_string_out
            }
            ///jwc y good test: else {
            ///jwc y good test:     local_string_out = local_string_out + "."
            ///jwc y good test: }
        }
        return local_string_out
    }
}

//
//
// 1: Silver #C0C0C0 rgb(192, 192, 192)
// 2: Lime #00FF00 rgb(0, 255, 0)
// 3: Aqua #00FFFF rgb(0, 255, 255)
// 4: Yellow #FFFF00 rgb(255, 255, 0)
// 5: Red #FF0000 rgb(255,0,0)

// https://htmlcolorcodes.com/
// List of common HTML color codes
// COLOR	NAME	HEX CODE	RGB CODE
// White	#FFFFFF	rgb(255, 255, 255)
// Silver	#C0C0C0	rgb(192, 192, 192)
// Gray	#808080	rgb(128, 128, 128)
// Black	#000000	rgb(0, 0, 0)
// Red	#FF0000	rgb(255, 0, 0)
// Maroon	#800000	rgb(128, 0, 0)
// Yellow	#FFFF00	rgb(255, 255, 0)
// Olive	#808000	rgb(128, 128, 0)
// Lime	#00FF00	rgb(0, 255, 0)
// Green	#008000	rgb(0, 128, 0)
// Aqua	#00FFFF	rgb(0, 255, 255)
// Teal	#008080	rgb(0, 128, 128)
// Blue	#0000FF	rgb(0, 0, 255)
// Navy	#000080	rgb(0,  0, 128)
// Fuchsia	#FF00FF	rgb(255, 0, 255)
// Purple	#800080	rgb(128, 0, 128)

//
//

/**
 * quest_Note_1 blocks
 */
//% weight=56 color=#C0C0C0 icon="Q"
namespace quest_Note_1 {
    /**
     * quest_Show_String_For_Note_Small_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block="note\\_small: $textStrIn"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Small_Func(textStrIn: string) {
    }
    // * Add space in front of '|' such as ' |' creates reliable 1row spacing
    /**
     * quest_Show_String_For_Note_Big_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block=" |note\\_big: $textStrIn |"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Big_Func(textStrIn: string) {
    }
}

/**
 * quest_Note_2 blocks
 */
//% weight=55 color=#00FF00 icon="Q"
namespace quest_Note_2 {
    /**
     * quest_Show_String_For_Note_Small_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block="note\\_small: $textStrIn"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Small_Func(textStrIn: string) {
    }
    // * Add space in front of '|' such as ' |' creates reliable 1row spacing
    /**
     * quest_Show_String_For_Note_Big_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block=" |note\\_big: $textStrIn |"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Big_Func(textStrIn: string) {
    }
}

/**
 * quest_Note_3 blocks
 */
////jwc y //% weight=53 color=#00FFFF icon="Q"
////jwc ? confused with blue 'call function' //% weight=54 color=#0000FF icon="Q"
//% weight=54 color=#000080 icon="Q"
namespace quest_Note_3 {
    /**
     * quest_Show_String_For_Note_Small_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block="note\\_small: $textStrIn"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Small_Func(textStrIn: string) {
    }
    // * Add space in front of '|' such as ' |' creates reliable 1row spacing
    /**
     * quest_Show_String_For_Note_Big_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block=" |note\\_big: $textStrIn |"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Big_Func(textStrIn: string) {
    }
}

//////jwc y //% weight=56 color=#FFFF00 icon="Q"
//////jwc y //% weight=56 color=#7F7F00 icon="Q"
//////jwc y //% weight=52 color=#ffff00 icon="Q"

/**
 * quest_Note_4 blocks
 */
//% weight=53 color=#ff7f00 icon="Q"
namespace quest_Note_4 {
    /**
     * quest_Show_String_For_Note_Small_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block="note\\_small: $textStrIn"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Small_Func(textStrIn: string) {
    }
    // * Add space in front of '|' such as ' |' creates reliable 1row spacing
    /**
     * quest_Show_String_For_Note_Big_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block=" |note\\_big: $textStrIn |"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Big_Func(textStrIn: string) {
    }
}

//////jwc y //% weight=55 color=#FF0000 icon="Q"
/**
 * quest_Note_5 blocks
 */
///jwc n below Quest_Note_1 //% weight=55 color=#ff7f00 icon="Q"
///jwc y //% weight=51 color=#ff7f00 icon="Q"
///jwc y //% weight=51 below Note_4 color=#ff7f00 icon="Q"
///jwc //% weight=50 color=#ff7f00 icon="Q"
///jwc //% weight=50 color=#ff7f00 icon="Q"
///jwc //% weight=49 color=#ff7f00 icon="Q"
///jwc //% weight=51 color=#ff7f00 icon="Q"
///jwc n same //% weight=45 color=#ff7f00 icon="Q"
///jwc n below 'wuKong' //% weight=40 color=#ff7f00 icon="Q"
///jwc below oled //% weight=20 c'olor=#ff7f00 icon="Q"
///jwc //% weight=50.5 color=#ff7f00 icon="Q"
// jwc 21,22,30,40,45,50, 50.5: below 'wuKong'
// jwc 51 below 'Quest_Note_4'
//% weight=52 color=#FF00FF icon="Q"
namespace quest_Note_5 {
    /**
     * quest_Show_String_For_Note_Small_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block="note\\_small: $textStrIn"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Small_Func(textStrIn: string) {
    }
    // * Add space in front of '|' such as ' |' creates reliable 1row spacing
    /**
     * quest_Show_String_For_Note_Big_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block=" |note\\_big: $textStrIn |"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Big_Func(textStrIn: string) {
    }
}

//% weight=51 color=#000000 icon="Q"
namespace quest_Note_6 {
    /**
     * quest_Show_String_For_Note_Small_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block="note\\_small: $textStrIn"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Small_Func(textStrIn: string) {
    }
    // * Add space in front of '|' such as ' |' creates reliable 1row spacing
    /**
     * quest_Show_String_For_Note_Big_Fn
     * @param textStrIn string
     */
    // '\\' escape character to deactivate special character processing
    //% block=" |note\\_big: $textStrIn |"
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_String_For_Note_Big_Func(textStrIn: string) {
    }
}

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

    ////jwc y export function quest_Show_MotionDirection_Func(motionDirectionIn: quest_Motion_Direction_Enum): void {
    ////jwc no longer an external block: /**
    ////jwc no longer an external block:  * quest_Show_MotionDirection_Fn
    ////jwc no longer an external block:  * @param motionDirectionIn quest_Motion_Direction_Enum
    ////jwc no longer an external block:  */
    ////jwc no longer an external block: //% block="show motion_direction: $motionDirectionIn"
    ////jwc no longer an external block: //% weight=81 blockGap=8
    function quest_Show_MotionDirection_Func(motionDirectionIn: quest_Motion_Direction_Enum): void {
        switch (motionDirectionIn) {
            // * if on 'bot', then 5x5LED is upside-down - so Yes_Flip graphics
            // * if on 'controller', then 5x5 is rightside-up - so No_Flip graphics
            //
            case quest_Motion_Direction_Enum.Forward:
                if (deviceType_Bot_Bool_QuestGlobal) {
                    led.plot(2, 4)
                    /*basic.showLeds(`
                            . . # . .
                            . . # . .
                            # # # # #
                            . # # # .
                            . . # . .
                            `)
                    */
                }
                else if (deviceType_Controller_Bool_QuestGlobal) {
                    led.plot(2, 0)
                    /*basic.showLeds(`
                            . . # . .
                            . # # # .
                            # # # # #
                            . . # . .
                            . . # . .
                            `)
                    */
                }
                OLED12864_I2C.showString(
                    0,
                    0,
                    "^",
                    1
                )
                break
            case quest_Motion_Direction_Enum.Backward:
                if (deviceType_Bot_Bool_QuestGlobal) {
                    led.plot(2, 0)
                    /*basic.showLeds(`
                            . . # . .
                            . # # # .
                            # # # # #
                            . . # . .
                            . . # . .
                            `)
                    */
                }
                else if (deviceType_Controller_Bool_QuestGlobal) {
                    led.plot(2, 4)
                    /*basic.showLeds(`
                            . . # . .
                            . . # . .
                            # # # # #
                            . # # # .
                            . . # . .
                            `)
                    */
                }
                OLED12864_I2C.showString(
                    0,
                    0,
                    "v",
                    1
                )
                break
            case quest_Motion_Direction_Enum.Left:
                if (deviceType_Bot_Bool_QuestGlobal) {
                    led.plot(4, 2)
                    /*basic.showLeds(`
                            . . # . .
                            . . # # .
                            # # # # #
                            . . # # .
                            . . # . .
                            `)
                    */
                }
                else if (deviceType_Controller_Bool_QuestGlobal) {
                    led.plot(0, 2)
                    /*basic.showLeds(`
                            . . # . .
                            . # # . .
                            # # # # #
                            . # # . .
                            . . # . .
                            `)
                    */
                }
                OLED12864_I2C.showString(
                    0,
                    0,
                    "<",
                    1
                )
                break
            case quest_Motion_Direction_Enum.Right:
                if (deviceType_Bot_Bool_QuestGlobal) {
                    led.plot(0, 2)
                    /*basic.showLeds(`
                            . . # . .
                            . # # . .
                            # # # # #
                            . # # . .
                            . . # . .
                            `)
                    */
                }
                else if (deviceType_Controller_Bool_QuestGlobal) {
                    led.plot(4, 2)
                    /*basic.showLeds(`
                            . . # . .
                            . . # # .
                            # # # # #
                            . . # # .
                            . . # . .
                            `)
                    */
                }
                OLED12864_I2C.showString(
                    0,
                    0,
                    ">",
                    1
                )
                break
            case quest_Motion_Direction_Enum.Stop:
                led.plot(2, 2)
                /*basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
                        `)
                */
                OLED12864_I2C.showString(
                    0,
                    0,
                    ".",
                    1
                )
                break
            default:
                basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
                OLED12864_I2C.showString(
                    0,
                    0,
                    "?",
                    1
                )
                break
        }
    }

    /**
     * quest_Set_PowerMotorsViaBlueRedBlackPins_Fn
     * @param portIdsIn quest_PortGroup_BlueRedBlack_PortIds_Enum
     * @param powerLeftIn number
     * @param powerRightIn number
     */
    ////jwc yy //% block="set manual:servo_motors:|* ports: $portIdsIn|* left motor power: $powerLeftIn|* right motor power: $powerRightIn"
    // '\\' = escape character to deactivate following special character
    ////jwc y //% block="set manual\\_servo\\_motors:|* ports: $portIdsIn|* left_motor power: $powerLeftIn|* right_motor power: $powerRightIn"
    //% block="set manual\\_servo\\_motors:|* ports: $portIdsIn|* left_motor power\\_\\%: $powerLeftIn|* right_motor power\\_\\%: $powerRightIn"
    //% powerLeftIn.min=-100 powerLeftIn.max=100
    //% powerRightIn.min=-100 powerRightIn.max=100
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Set_PowerMotorsViaBlueRedBlackPins_Func(portIdsIn: quest_PortGroup_BlueRedBlack_PortIds_Enum, powerLeftIn: number, powerRightIn: number): void {

        // Motor-Left Conversion: Same Rotational Direction
        let motor_Power_L = Math.map(powerLeftIn, -100, 100, 0, 360)
        // Motor-Right Conversion: Opposite Rotational Direction
        let motor_Power_R = Math.map(powerRightIn, -100, 100, 360, 0)

        switch (portIdsIn) {
            case quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight:
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, motor_Power_L)
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, motor_Power_R)
                if (_debug_Serial_Print_Bool_QuestGlobal) {
                    serial.writeLine("* quest_PowerMotorsViaBlueRedBlackPins_Fn: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                }
                break
            case quest_PortGroup_BlueRedBlack_PortIds_Enum.S3_MotorLeft__S2_MotorRight:
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S3, motor_Power_L)
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, motor_Power_R)
                if (_debug_Serial_Print_Bool_QuestGlobal) {
                    serial.writeLine("* quest_PowerMotorsViaBlueRedBlackPins_Fn: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                }
                break
            default:
                if (_debug_Serial_Print_Bool_QuestGlobal) {
                    serial.writeLine("* ERROR: quest_PowerMotorsViaBlueRedBlackPins_Fn: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                }
                break
        }
    }

    /**
     * quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Fn
     * @param portIdsIn quest_PortGroup_BlueRedBlack_PortIds_Enum
     * @param powerLeftIn number
     * @param powerRightIn number
     * @param turn_Duration_In quest_Turn_Duration_Enum
     * @param debug_Show_In quest_Debug_Show_Enum
     *
     */
    ////jwc o //% block="set servo_motors w/ timer: $portIdsIn|@ left motor power: $powerLeftIn|@ right motor power: $powerRightIn|turn_Duration_In $turn_Duration_In"
    ////jwc y //% block="set servo_motors w/ timer:|* ports: $portIdsIn|* left motor power: $powerLeftIn|* right motor power: $powerRightIn|* turn_Duration: $turn_Duration_In"
    ////jwc y //% block="set manual'_servo\\_motors w/ timer:|* ports: $portIdsIn|* left motor power: $powerLeftIn|* right motor power: $powerRightIn|* turn_Duration: $turn_Duration_In"
    ////jwc y //% block="set manual\\_servo\\_motors w/ timer:|* ports: $portIdsIn|* left_motor power: $powerLeftIn|* right_motor power: $powerRightIn|* turn_Duration: $turn_Duration_In"
    // '\\' = escape character to deactivate following special character
    ////jwc y //% block="set manual\\_servo\\_motors w/ timer:|* ports: $portIdsIn|* left_motor power: $powerLeftIn|* right_motor power: $powerRightIn|* turn_Duration: $turn_Duration_In|* debug_Show: $debug_Show_In"
    //% block="set manual\\_servo\\_motors w/ timer:|* ports: $portIdsIn|* left_motor power\\_\\%: $powerLeftIn|* right_motor power\\_\\%: $powerRightIn|* turn_Duration: $turn_Duration_In|* debug_Show: $debug_Show_In"
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
            case quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight:
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, motor_Power_L)
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, motor_Power_R)
                if (_debug_Serial_Print_Bool_QuestGlobal) {
                    serial.writeLine("* quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Fn: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                }
                break
            case quest_PortGroup_BlueRedBlack_PortIds_Enum.S3_MotorLeft__S2_MotorRight:
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S3, motor_Power_L)
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, motor_Power_R)
                if (_debug_Serial_Print_Bool_QuestGlobal) {
                    serial.writeLine("* quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Fn: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                }
                break
            default:
                if (_debug_Serial_Print_Bool_QuestGlobal) {
                    serial.writeLine("* ERROR: quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Fn: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                }
                break
        }

        // diagnostics
        switch (debug_Show_In) {
            case quest_Debug_Show_Enum.Dashboard_OLED:
                quest_Dashboard.quest_Show_Oled_Cleared_Func()
                quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(convertToText(motor_Power_L) + " " + convertToText(motor_Power_R) + " " + convertToText(turn_Duration), 0, 0)

                break  // out of these case statements
            case quest_Debug_Show_Enum.MicroBit_Screen:
                // diagnostics
                basic.showIcon(IconNames.Happy)

                break  // out of these case statements
            case quest_Debug_Show_Enum.Off:

                break  // out of these case statements
            default:
                if (_debug_Serial_Print_Bool_QuestGlobal) {
                    serial.writeLine("* ERROR: quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Fn: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                }
                break
        }

        // timer
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(turn_Duration, quest_Time_Units_Enum.Milliseconds)
        // stop
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(portIdsIn, 0, 0)
    }

    /**
    * quest_Set_Turn_WithTimer_Fn
    * @param port_Ids_In quest_PortGroup_BlueRedBlack_PortIds_Enum
    * @param turn_Type_In quest_Turn_Type_Enum
    * @param turn_Direction_In quest_Turn_Direction_Enum
    * @param turn_Power_In quest_Turn_Power_Enum
    * @param turn_Duration_In quest_Turn_Duration_Enum
    * @param debug_Show_In quest_Debug_Show_Enum

    */
    ////jwc y //% block="set auto_turn w/ timer:|* ports: $port_Ids_In|* turn_Type: $turn_Type_In|* turn_Direction: $turn_Direction_In|* turn_Power: $turn_Power_In|* turn_Duration: $turn_Duration_In"
    //% block="set auto_turn w/ timer:|* ports: $port_Ids_In|* turn_Type: $turn_Type_In|* turn_Direction: $turn_Direction_In|* turn_Power: $turn_Power_In|* turn_Duration: $turn_Duration_In|* debug_Show: $debug_Show_In"
    //% weight=60 blockGap=8
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
                        quest_Show_MotionDirection_Func(quest_Motion_Direction_Enum.Left)
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
                        quest_Show_MotionDirection_Func(quest_Motion_Direction_Enum.Right)
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
                        quest_Show_MotionDirection_Func(quest_Motion_Direction_Enum.Left)
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
                        quest_Show_MotionDirection_Func(quest_Motion_Direction_Enum.Right)
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

        // diagnostics
        switch (debug_Show_In) {
            case quest_Debug_Show_Enum.Dashboard_OLED:
                quest_Dashboard.quest_Show_Oled_Cleared_Func()
                quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(convertToText(motor_Power_L) + " " + convertToText(motor_Power_R) + " " + convertToText(turn_Duration), 0, 0)

                break  // out of these case statements
            case quest_Debug_Show_Enum.MicroBit_Screen:
                // diagnostics
                basic.showIcon(IconNames.Fabulous)

                break  // out of these case statements
            case quest_Debug_Show_Enum.Off:

                break  // out of these case statements
            default:
                if (_debug_Serial_Print_Bool_QuestGlobal) {
                    serial.writeLine("* ERROR: quest_Set_Turn_WithTimer_Fn: " + motor_Power_L + " " + motor_Power_R + " " + turn_Duration)
                }
                break
        }

        // turn
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(port_Ids_In, motor_Power_L, motor_Power_R)
        // timer
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(turn_Duration, quest_Time_Units_Enum.Milliseconds)
        // stop
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(port_Ids_In, 0, 0)

    }

    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks': /**
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':  * set_Settings_Fn
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':  * @param deviceTypeBotBoolIn boolean
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':  * @param deviceTypeControllerBoolIn boolean
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':  */
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks': //% block="set settings(required in 'on start' stack):|* 'deviceType_Bot_Bool': $deviceTypeBotBoolIn|'deviceType_Controller_Bool': $deviceTypeControllerBoolIn"
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks': //% weight=100 blockGap=8
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks': //% inlineInputMode=external
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks': export function set_Settings_Func(deviceTypeBotBoolIn: boolean, deviceTypeControllerBoolIn: boolean): void {
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks': 
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':     deviceType_Bot_Bool = deviceTypeBotBoolIn
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':     deviceType_Controller_Bool = deviceTypeControllerBoolIn
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks': 
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':     OLED12864_I2C.showString(
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':         0,
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':         1,
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':         "B:" + convertToText(deviceType_Bot_Bool) + ", C:" + convertToText(deviceType_Controller_Bool),
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':         1
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':     )
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks': }

}

// dark blue #0000ff TOO DARK, CANNOT SEE BLACK BOUNDARY LINES
// light blue rgb(127, 190, 255) #7fbeff TOO LIGHT
// less_light blue rgb(0, 127, 255) ##007fff to dark that matches other groups
// rgb(127,127,255)  #7f7fff Good Purple to not drown out blue_borderlines
// rgb(191,191,255)  #bfbfff Good Purple to not drown out blue_borderlines
// * not too dark since would cover thin-black-boundaries
/**
 * quest_Sensors blocks
 */
//% weight=68 color=#bfbfff icon="Q"
namespace quest_Sensors {
    /// //
    /// // * Global Variables Q Constants
    /// //
    /// // * Default to Bot and not to Controller for most basic total 1 'micro:bit' setup (No Controller)
    /// //
    /// let deviceType_Bot_Bool_QuestGlobal = true
    /// let deviceType_Controller_Bool_QuestGlobal = false
    /// //
    /// let _debug_Serial_Print_Bool_QuestGlobal = false

    /**
    * quest_Get_Controller_Joystick_Directional_AngleDegree_IncrementOfDegree90_AsIntOut_Func
    */
    // '\\' escape character to deactivate special character processing
    //% block="get controller\\_joystick directional angle\\_degree increment\\_of\\_degree\\_90 as int\\_out|"
    //% weight=89 blockGap=8
    //% inlineInputMode=external
    export function quest_Get_Controller_Joystick_Directional_AngleDegree_IncrementOfDegree90_AsIntOut_Func() {

        let _local_converted_value_int_out = 0
        let angle_degree_increment_in = 90

        let controller_Joystick__Raw_OriginAtBottomRight__X_Int = joystickbit.getRockerValue(joystickbit.rockerType.X)
        let controller_Joystick__Raw_OriginAtBottomRight__Y_Int = joystickbit.getRockerValue(joystickbit.rockerType.Y)

        let controller_Joystick__Raw_OriginAtBottomRight__XandY_Center = 512
        let cartesian_side_adjacent_x_int_in = (controller_Joystick__Raw_OriginAtBottomRight__X_Int - controller_Joystick__Raw_OriginAtBottomRight__XandY_Center) * -1
        let cartesian_side_opposite_y_int_in = (controller_Joystick__Raw_OriginAtBottomRight__Y_Int - controller_Joystick__Raw_OriginAtBottomRight__XandY_Center) * 1

        if (_debug_Serial_Print_Bool_QuestGlobal) {
            serial.writeString("> Convert::" + " Side_Adjacent: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
                cartesian_side_adjacent_x_int_in,
                5,
                0
            ) + " Side_Opposite: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
                cartesian_side_opposite_y_int_in,
                5,
                0
            ))
        }
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Convert to radians"
        )
        _local_converted_value_int_out = Math.atan2(cartesian_side_opposite_y_int_in, cartesian_side_adjacent_x_int_in)
        serial.writeString(" Angle:: Radians: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
            _local_converted_value_int_out,
            10,
            4
        ))
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Convert to degrees"
        )
        _local_converted_value_int_out = _local_converted_value_int_out * (180 / 3.1416)
        if (_local_converted_value_int_out < 0) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "If < 0, then keep > 0"
            )
            _local_converted_value_int_out = _local_converted_value_int_out + 360
        }
        if (_debug_Serial_Print_Bool_QuestGlobal) {
            serial.writeString(" Degrees:: Raw: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
                _local_converted_value_int_out,
                5,
                1
            ))
        }    
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Convert to degrees as incremented by passed_in_argument"
        )
        _local_converted_value_int_out = Math.idiv(_local_converted_value_int_out, angle_degree_increment_in) + Math.round(_local_converted_value_int_out % angle_degree_increment_in / angle_degree_increment_in)
        if (_debug_Serial_Print_Bool_QuestGlobal) {
            serial.writeString(" Incremented: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
                _local_converted_value_int_out,
                5,
                1
            ) + " * " + angle_degree_increment_in)
        }
        _local_converted_value_int_out = _local_converted_value_int_out * angle_degree_increment_in
        if (_debug_Serial_Print_Bool_QuestGlobal) {
            serial.writeString(" = " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
                _local_converted_value_int_out,
                5,
                1
            ))
        }
        ////jwc debug: if (false) {
        ////jwc debug:     serial.writeNumbers([Math.atan2(1, 1), Math.atan2(1.732, 1), Math.atan2(1, 1.732)])
        ////jwc debug: }
        if (_debug_Serial_Print_Bool_QuestGlobal) {
            serial.writeLine("")
        }
        return _local_converted_value_int_out
    }

    /**
    * quest_Get_Controller_Joystick_Directional_AngleDegree_IncrementOf_AsIntOut_Func
    * @param angle_degree_increment_in quest_Controller_Joystick_Directional_AngelDegree_Increment_Enum
    */
    // '\\' escape character to deactivate special character processing
    //% block="get controller\\_joystick directional angle\\_degree:| * increment\\_of: $angle_degree_increment_enum_in as int\\_out|"
    //% weight=87 blockGap=8
    //% inlineInputMode=external
    export function quest_Get_Controller_Joystick_Directional_AngleDegree_IncrementOf_AsIntOut_Func(angle_degree_increment_enum_in: quest_Controller_Joystick_Directional_AngelDegree_Increment_Enum) {

        let _local_converted_value_int_out = 0
        ////jwc o let angle_degree_increment_in = 90
        let angle_degree_increment_in = 0

        switch (angle_degree_increment_enum_in) {
            case quest_Controller_Joystick_Directional_AngelDegree_Increment_Enum.degree_90:
                angle_degree_increment_in = 90
                break  // out of these case statements
            case quest_Controller_Joystick_Directional_AngelDegree_Increment_Enum.degree_45:
                angle_degree_increment_in = 45
                break  // out of these case statements
            case quest_Controller_Joystick_Directional_AngelDegree_Increment_Enum.degree_30:
                angle_degree_increment_in = 30
                break  // out of these case statements
        }

        let controller_Joystick__Raw_OriginAtBottomRight__X_Int = joystickbit.getRockerValue(joystickbit.rockerType.X)
        let controller_Joystick__Raw_OriginAtBottomRight__Y_Int = joystickbit.getRockerValue(joystickbit.rockerType.Y)

        let controller_Joystick__Raw_OriginAtBottomRight__XandY_Center = 512
        let cartesian_side_adjacent_x_int_in = (controller_Joystick__Raw_OriginAtBottomRight__X_Int - controller_Joystick__Raw_OriginAtBottomRight__XandY_Center) * -1
        let cartesian_side_opposite_y_int_in = (controller_Joystick__Raw_OriginAtBottomRight__Y_Int - controller_Joystick__Raw_OriginAtBottomRight__XandY_Center) * 1

        if (_debug_Serial_Print_Bool_QuestGlobal) {
            serial.writeString("> Convert::" + " Side_Adjacent: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
                cartesian_side_adjacent_x_int_in,
                5,
                0
            ) + " Side_Opposite: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
                cartesian_side_opposite_y_int_in,
                5,
                0
            ))
        }
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Convert to radians"
        )
        _local_converted_value_int_out = Math.atan2(cartesian_side_opposite_y_int_in, cartesian_side_adjacent_x_int_in)
        if (_debug_Serial_Print_Bool_QuestGlobal) {
            serial.writeString(" Angle:: Radians: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
                _local_converted_value_int_out,
                10,
                4
            ))
        }
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Convert to degrees"
        )
        _local_converted_value_int_out = _local_converted_value_int_out * (180 / 3.1416)
        if (_local_converted_value_int_out < 0) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "If < 0, then keep > 0"
            )
            _local_converted_value_int_out = _local_converted_value_int_out + 360
        }
        if (_debug_Serial_Print_Bool_QuestGlobal) {
            serial.writeString(" Degrees:: Raw: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
                _local_converted_value_int_out,
                5,
                1
            ))
        }
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Convert to degrees as incremented by passed_in_argument"
        )
        _local_converted_value_int_out = Math.idiv(_local_converted_value_int_out, angle_degree_increment_in) + Math.round(_local_converted_value_int_out % angle_degree_increment_in / angle_degree_increment_in)
        if (_debug_Serial_Print_Bool_QuestGlobal) {
            serial.writeString(" Incremented: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
                _local_converted_value_int_out,
                5,
                1
            ) + " * " + angle_degree_increment_in)
        }
        _local_converted_value_int_out = _local_converted_value_int_out * angle_degree_increment_in
        if (_debug_Serial_Print_Bool_QuestGlobal) {
            serial.writeString(" = " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
                _local_converted_value_int_out,
                5,
                1
            ))
        }
        ////jwc debug: if (false) {
        ////jwc debug:     serial.writeNumbers([Math.atan2(1, 1), Math.atan2(1.732, 1), Math.atan2(1, 1.732)])
        ////jwc debug: }
        if (_debug_Serial_Print_Bool_QuestGlobal) {
            serial.writeLine("")
        }
        return _local_converted_value_int_out
    }

    /**
    * quest_Get_Controller_Joystick_Directional_MagnitudePixel_AsIntOut_Func
    */
    // '\\' escape character to deactivate special character processing
    //% block="get controller\\_joystick directional magnitude\\_pixel as int\\_out|"
    //% weight=85 blockGap=8
    //% inlineInputMode=external
    export function quest_Get_Controller_Joystick_Directional_MagnitudePixel_AsIntOut_Func() {
   
        let _local_converted_value_int_out = 0

        let controller_Joystick__Raw_OriginAtBottomRight__X_Int = joystickbit.getRockerValue(joystickbit.rockerType.X)
        let controller_Joystick__Raw_OriginAtBottomRight__Y_Int = joystickbit.getRockerValue(joystickbit.rockerType.Y)

        let controller_Joystick__Raw_OriginAtBottomRight__XandY_Center = 512
        let cartesian_side_adjacent_x_int_in = (controller_Joystick__Raw_OriginAtBottomRight__X_Int - controller_Joystick__Raw_OriginAtBottomRight__XandY_Center) * -1
        let cartesian_side_opposite_y_int_in = (controller_Joystick__Raw_OriginAtBottomRight__Y_Int - controller_Joystick__Raw_OriginAtBottomRight__XandY_Center) * 1

        if (_debug_Serial_Print_Bool_QuestGlobal) {
            serial.writeString("> Convert::" + " Side_Adjacent: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
                cartesian_side_adjacent_x_int_in,
                5,
                0
            ) + " Side_Opposite: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
                cartesian_side_opposite_y_int_in,
                5,
                0
            ))
        }
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Calculate radius (pixels)"
        )
        _local_converted_value_int_out = Math.sqrt(cartesian_side_adjacent_x_int_in ** 2 + cartesian_side_opposite_y_int_in ** 2)
        if (_debug_Serial_Print_Bool_QuestGlobal) {
            serial.writeString(" Radius: " + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
                _local_converted_value_int_out,
                10,
                4
            ))
            serial.writeLine("")
        }
        return _local_converted_value_int_out
    }

    /**
     * quest_Show_Light_Sensor_Fn
     * @param rawSensorReadMaxIn number, eg: 255
     */
    // '\\' = escape character to deactivate following special character
    //% block="show light\\_sensor\\_value:|* rawSensorReadMaxIn: $rawSensorReadMaxIn"
    //% rawSensorReadMaxIn.min=0 rawSensorReadMaxIn.max=255
    //% weight=81 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_Light_Sensor_Func(rawSensorReadMaxIn: number = 255): void {
        led.plotBarGraph(input.lightLevel(), rawSensorReadMaxIn)
    }

    /**
     * quest_Show_Magnet_Sensor_Fn
     * @param rawSensorReadMaxIn number, eg: 2000
     */
    // '\\' = escape character to deactivate following special character
    //% block="show magnet\\_sensor\\_value:|* rawSensorReadMaxIn: $rawSensorReadMaxIn"
    //% rawSensorReadMaxIn.min=0 rawSensorReadMaxIn.max=2000
    //% weight=80 blockGap=8
    //% inlineInputMode=external
    export function quest_Show_Magnet_Sensor_Func(rawSensorReadMaxIn: number = 2000): void {
        led.plotBarGraph(input.magneticForce(Dimension.Strength), rawSensorReadMaxIn)
    }

}