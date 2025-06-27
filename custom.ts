// jwc Version Log
// (v0.24.1, 25-0627-0010)
// (v0.23.1, 25-0424-1430)

/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

// *** IMPORTANT NOTES ***
//
// * Naming Scheme
//   ** global_Variable_Etc_QuestGlobal
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
// * jwc 25-0209-0730 Need to refresh web-browser to see changes in front-end (create/change coding blocks)
// * jwc 25-0209-0800 
//   * quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func(
//     * "A:" : Motor-Rear-Left, Motor-Rear-Right
//     * "B:" : Sensor-Light, Sensor-Magnet
//     * "C:" : Servo-Left, Servo-Right
//     * "D:" : Motor-Front-Left, Motor-Front-Right
// * jwc 25-0210-0620 TYJ Global Variables can be possible, persistent for Mb Code by Student
//   * network_GroupChannel_MyBotId_Base0_Int_QuestGlobal
//   * quest_Public_Variables_N_Constants.network_GroupChannel_MyBotId_Base0_Int_QuestGlobal_01
//   * quest_Dashboard.network_GroupChannel_MyBotId_Base0_Int_QuestGlobal_11
// * jwc 25-0210-1500 TYJ 19 Char Max for MbRadioNetwork
// * jwc 25-0625-1750
//   * Oled Fix
//   * 'S1_MotorLeft__S0_MotorRight' -> 'S1_MotorWheel_Left__S0_MotorWheel_Right'
//   * 'S3_MotorLeft__S2_MotorRight' -> 'S3_MotorWheel_Left__S2_MotorWheel_Right'
//   * 'quest_PortSingle_ServoArm_PortId_Enum' -> 'quest_PortSingle_ServoArmBeam_PortId_Enum'
//     * 'S7_ServoArm_Left' -> 'S7_ServoArmBeam_Left'
//     * 'S6_ServoArm_Right' -> 'S6_ServoArmBeam_Right'
//   * Network Driver Dashboard
// * jwc 25-0626-1400 Fix 'quest_Send_LoginOfBot...', 'quest_Send_DataOfBot...'


// enum MyEnum {
//    //% block="one"
//    One,
//    //% block="two"
//    Two
// }

enum quest_Toggle_OnOff_Enum {
    //% block="On"
    On,
    //% block="Off"
    Off,
}

enum quest_PortGroup_BlueRedBlack_PortIds_Enum {
    //% block="S1_MotorWheel_Left__S0_MotorWheel_Right"
    S1_MotorWheel_Left__S0_MotorWheel_Right,
    //% block="S3_MotorWheel_Left__S2_MotorWheel_Right"
    S3_MotorWheel_Left__S2_MotorWheel_Right,
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

enum quest_PortSingle_ServoArmBeam_PortId_Enum {
    //% block="S7_ServoArmBeam_Left"
    S7_ServoArmBeam_Left,
    //% block="S6_ServoArmBeam_Right"
    S6_ServoArmBeam_Right,
}

enum quest_ServoArm_DegreesInDirection_Enum {
    //% block="Degree_000"
    Degree_000,
    //% block="Degree_045"
    Degree_045,
    //% block="Degree_090"
    Degree_090,
}

enum quest_Controller_Joystick_Directional_AngelDegree_Increment_Enum {
    //% block="degree_90"
    degree_90,
    //% block="degree_45"
    degree_45,
    //% block="degree_30"
    degree_30,
}

enum quest_Debug_Show_Enum {
    //% block="Dashboard_OLED"
    Dashboard_OLED,
    //% block="MicroBit_Screen"
    MicroBit_Screen,
    //% block="Off"
    Off,
}

enum quest_String_Justify_Type_Enum {
    //% block="justify_Left"
    justify_Left,
    //% block="justify_Right"
    justify_Right,
}


input.onLogoEvent(TouchButtonEvent.LongPressed, function () {

    basic.showString("Z")
    basic.showNumber(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal)

})


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
//// jwc yy Global Variable, and not need namespace-prefix to access :)+
let network_GroupChannel_MyBotId_Base0_Int_QuestGlobal = 0
let network_GroupChannel_MyBotId_ManualSet_Override_Bool_QuestGlobal = false
let network_GroupChannel_MyBotId_AutoSet_Default_Bool_QuestGlobal = false

let network_DeviceSerialId_MyBotId_Str_QuestGlobal = ""

//// jwc n public network_GroupChannel_MyBotId_Base0_Int_QuestGlobal
//// jwc n var network_GroupChannel_MyBotId_Base0_Int_QuestGlobal


//// jwc obsolete: let network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal = quest_Toggle_OnOff_Enum.On
//// jwc n seems to only have default of non-number types: let network_Send_DataOfBot_ToXrayDashboardOfMb_On_Bool_QuestGlobal = true

//// jwc 25-0626-1400 Default On, User can disable via setup-block
let network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal = quest_Toggle_OnOff_Enum.On
//// jwc 25-0626-1400 Default On, User can disable via setup-block
let local_Send_DataOfBot_ToXrayDashboardMini_OnLocalOled_OnOff_Enum_QuestGlobal = quest_Toggle_OnOff_Enum.On

let network_Send_LoginOfBot_ToXrayDashboard_OnRemoteDisplay_Bool_QuestGlobal = false

// "IMPORTANT: Network Message will be cut off beyond Max Length"
//// jwc y let network_Message_LENGTH_MAX_INT_QUESTGLOBAL = 18
let network_Message_LENGTH_MAX_INT_QUESTGLOBAL = 19
let network_Message_Old_Str_QuestGlobal = ""

let network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL = 255

//
//// jwc 25-0626-1800 \/ let _debug_Serial_Print_Bool_QuestGlobal = false
let _debug_Serial_Print_Bool_QuestGlobal = true
//
let motor_Power_No_QuestGlobal = 0
let motor_Power_Lo_QuestGlobal = 30
let motor_Power_Mi_QuestGlobal = 65
let motor_Power_Hi_QuestGlobal = 100


//
// TYJ these will auto-run like an on-start stack
//

/// jwc y basic.showIcon(IconNames.SmallHeart)
//// jwc y basic.showIcon(IconNames.SmallHeart, 0)
//// jwc y quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
//// jwc y basic.showIcon(IconNames.Heart)
//// jwc y basic.showIcon(IconNames.Heart, 0)
//// jwc y quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)

//// jwc only for Bot but not for Controller-Joystick: // jwc since 'micro:bit' upside-down (reverse-direction) re: bot's forward-direction, then flip display upside-down
//// jwc only for Bot but not for Controller-Joystick: display.rotateTo(display.Direction.UpsideDown)

//// jwc ? cause motor-left to reverse? quest_Dashboard.quest_Send_LoginOfBot_ToXrayDashboardOfMb_Func(0, quest_Toggle_OnOff_Enum.On, quest_Debug_Show_Enum.Dashboard_OLED)

serial.writeLine("")  // Insure starting a new line
serial.writeLine("* 00_A: On-Start: custom.ts")



//// jwc n NOT WORK, SINCE ONLY CREATES 'PROTOTYPE': class quest_Public_Variables_N_Constants_01 {
//// jwc n NOT WORK, SINCE ONLY CREATES 'PROTOTYPE':     public network_GroupChannel_MyBotId_Base0_Int_QuestGlobal_02: number
//// jwc n NOT WORK, SINCE ONLY CREATES 'PROTOTYPE': }


//// jwc yy \/ TESTING-ONLY, NOT FINAL yet needs 'quest_Public_Variables_N_Constants.' namespace-prefix to access
namespace quest_Public_Variables_N_Constants {
    export let network_GroupChannel_MyBotId_Base0_Int_QuestGlobal_01 = 0
}


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

    //// jwc yy public persistent variable, yet needs 'quest_Dashboard.' namespace-prefix to access \/
    export let network_GroupChannel_MyBotId_Base0_Int_QuestGlobal_11 = 0

    //// jwc n export network_GroupChannel_MyBotId_Base0_Int_QuestGlobal_03

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
        //// jwc y? move down half-row: 64/8 = 8px >> / 2 = 4px: \/ OLED12864_I2C.hline(0, 32, 128, 1)
        // Divider Line between Upper-System's TextArea and Lower-Human's TextArea
        OLED12864_I2C.hline(0, 36, 128, 1)
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
    //// jwc 25-0626-1400 Only provide SmallFont since Oled Default Size: export function quest_Show_String_For_Oled_BigFont_Func(textStrIn: string, xColBase0In: number, yRowBase0In: number) {
    function quest_Show_String_For_Oled_BigFont_Func(textStrIn: string, xColBase0In: number, yRowBase0In: number) {
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


    //// jwc y //% weight=50 blockGap=8
    //// jwc 25-0626-2250 export function quest_Show_GroupChannelOfMe_Func(debug_Show_In: quest_Debug_Show_Enum): void {


    /**
     * quest_Show_GroupChannelOfMe_Func
     * @param debug_Show_In quest_Debug_Show_Enum
     *
     */
    // '\\' = escape character to deactivate following special character
    //% block="set quest\\_Show\\_GroupChannelOfMe\\_Func:|* debug_Show_In: $debug_Show_In"
    //% weight=50 blockGap=8
    //% inlineInputMode=external
    export function quest_Get_GroupChannelOfMe_Func(debug_Show_In: quest_Debug_Show_Enum){
        ///jwc y if(quest_Debug_Show_Enum)
        ///jwc y basic.showIcon(IconNames.SmallHeart)
        return network_GroupChannel_MyBotId_Base0_Int_QuestGlobal
    }


    //// jwc 25-0626-1400 @param send_DataOfBot_ToXrayDashboardOfMb_OnOff_Enum_In quest_Toggle_OnOff_Enum
    //// jwc 25-0626-1400 @param debug_Show_In quest_Debug_Show_Enum
    //// jwc 25-0626-1400 //% block="set quest\\_Send\\_LoginOfBot\\_ToXrayDashboardOfMb\\_Func:|* network_GroupChannel_MyBotId_Base0_IntIn: $network_GroupChannel_MyBotId_Base0_IntIn|* send_DataOfBot_ToXrayDashboardOfMb_OnOff_Enum_In: $send_DataOfBot_ToXrayDashboardOfMb_OnOff_Enum_In|* debug_Show_In: $debug_Show_In"
    //// jwc y //% weight=50 blockGap=8

    /**
     * quest_Send_LoginOfBot_ToXrayDashboardOfMb_Func
     * @param network_GroupChannel_MyBotId_Base0_IntIn number
     *
     */
    // '\\' = escape character to deactivate following special character
    //% block="set quest\\_Send\\_LoginOfBot\\_ToXrayDashboardOfMb\\_Func:|* network_GroupChannel_MyBotId_Base0_IntIn: $network_GroupChannel_MyBotId_Base0_IntIn"
    //% network_GroupChannel_MyBotId_Base0_IntIn.min=0 network_GroupChannel_MyBotId_Base0_IntIn.max=254
    //% weight=49 blockGap=8
    //% inlineInputMode=external
    //// jwc n default only seems to work w/ number: export function quest_Send_LoginOfBot_ToXrayDashboardOfMb_Func(network_GroupChannel_MyBotId_Base0_IntIn: number, send_DataOfBot_ToXrayDashboardOfMb_OnOff_Enum_In: boolean = true, debug_Show_In: quest_Debug_Show_Enum = quest_Debug_Show_Enum.Dashboard_OLED): void {
    //// jwc 25-0626-1400 export function quest_Send_LoginOfBot_ToXrayDashboardOfMb_Func(network_GroupChannel_MyBotId_Base0_IntIn: number, send_DataOfBot_ToXrayDashboardOfMb_OnOff_Enum_In: quest_Toggle_OnOff_Enum, debug_Show_In: quest_Debug_Show_Enum): void {
    export function quest_Send_LoginOfBot_ToXrayDashboardOfMb_Func(network_GroupChannel_MyBotId_Base0_IntIn: number): void {
        ///jwc y if(quest_Debug_Show_Enum)
        ///jwc y basic.showIcon(IconNames.SmallHeart)

        serial.writeLine("")  //// create a newline to start debug-report

        //// jwc 25-0626-1400 serial.writeLine("* 10-: " + convertToText(network_GroupChannel_MyBotId_Base0_IntIn) + " >> " + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + " | " + convertToText(send_DataOfBot_ToXrayDashboardOfMb_OnOff_Enum_In) + " >> " + convertToText(send_DataOfBot_ToXrayDashboardOfMb_OnOff_Enum_In) + " | " + convertToText(debug_Show_In))
//// jwc 25-0626-1400 serial.writeLine("* 10-: " + convertToText(network_GroupChannel_MyBotId_Base0_IntIn) + " >> " + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal))
        network_GroupChannel_MyBotId_Base0_Int_QuestGlobal = network_GroupChannel_MyBotId_Base0_IntIn

        network_DeviceSerialId_MyBotId_Str_QuestGlobal = control.deviceName()

//// jwc 25-0626-1400 network_GroupChannel_MyBotId_ManualSet_Override_Bool_QuestGlobal = true
//// jwc 25-0626-1400 network_GroupChannel_MyBotId_AutoSet_Default_Bool_QuestGlobal = false

        // * For Remote-Control, This should work well, as Bot-Code should call this func: 'quest_Send_LoginOfBot_ToXrayDashboardOfMb_Func()' with Staff-Assigned GroupChannel_BotId_#
        //// jwc 25-0626-1400 let network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal = send_DataOfBot_ToXrayDashboardOfMb_OnOff_Enum_In

        //// jwc 25-0626-1400 serial.writeLine("* 10+: " + convertToText(network_GroupChannel_MyBotId_Base0_IntIn) + " >> " + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + " | " + convertToText(send_DataOfBot_ToXrayDashboardOfMb_OnOff_Enum_In) + " >> " + convertToText(send_DataOfBot_ToXrayDashboardOfMb_OnOff_Enum_In) + " | " + convertToText(debug_Show_In))
        //// jwc serial.writeLine("* 10: "+ convertToText(network_GroupChannel_MyBotId_Base0_IntIn) +" >> "+ convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) +" | "+ convertToText(send_DataOfBot_ToXrayDashboardOfMb_OnOff_Enum_In) +" >> "+ convertToText(send_DataOfBot_ToXrayDashboardOfMb_OnOff_Enum_In) +" | "+ convertToText(debug_Show_In))
        //// jwc y serial.writeLine("* 11: "+ convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) +" | "+ convertToText(network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal))

//// jwc 25-0626-1400         let network_Message_Str = ""

        //// jwc yy: allow '1' be legal for simplicity: if (network_GroupChannel_MyBotId_Base0_Int_QuestGlobal == 0 || network_GroupChannel_MyBotId_Base0_Int_QuestGlobal == 1 || network_GroupChannel_MyBotId_Base0_Int_QuestGlobal == 255) {
        //// jwc oy if (network_GroupChannel_MyBotId_Base0_Int_QuestGlobal == 0 || network_GroupChannel_MyBotId_Base0_Int_QuestGlobal == 255) {
        // * Unconditionally create 4-Digit Z#### to be separate from Staff-Assigned GroupChannel_BotId_# \/
        //// jwc ? if (true) {
        // * For Autonomous, most likely 'network_GroupChannel_MyBotId_Base0_Int_QuestGlobal' == 0, so auto-create one
//// jwc 25-0626-1400         if (network_GroupChannel_MyBotId_Base0_Int_QuestGlobal <= 0 || network_GroupChannel_MyBotId_Base0_Int_QuestGlobal >= 255) {
//// jwc 25-0626-1400 
//// jwc 25-0626-1400             //// jwc n network_GroupChannel_MyBotId_Base0_Int_QuestGlobal = convertToText(control.deviceSerialNumber()).substr(convertToText(control.deviceSerialNumber()).length - 2, 2)
//// jwc 25-0626-1400             //// jwc y increase to 3-digits: serial.writeLine("* 20- "+ convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) +" "+ convertToText(Math.abs(control.deviceSerialNumber() % 100)) +" "+ convertToText(100 + Math.abs(control.deviceSerialNumber() % 100)) +" "+ convertToText(control.deviceSerialNumber()))
//// jwc 25-0626-1400             serial.writeLine("* 20- " + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + " " + convertToText(Math.abs(control.deviceSerialNumber() % 1000)) + " " + convertToText(control.deviceSerialNumber()))
//// jwc 25-0626-1400             //// jwc y increase to 3-digits \/ network_GroupChannel_MyBotId_Base0_Int_QuestGlobal = 100 + Math.abs(control.deviceSerialNumber() % 100)
//// jwc 25-0626-1400             //// jwc yy network_GroupChannel_MyBotId_Base0_Int_QuestGlobal = Math.abs(control.deviceSerialNumber() % 1000)
//// jwc 25-0626-1400 
//// jwc 25-0626-1400             //// jwc add leading zeroes by adding '1000'
//// jwc 25-0626-1400             network_GroupChannel_MyBotId_Base0_Int_QuestGlobal = Math.abs(control.deviceSerialNumber() % 1000) + 1000
//// jwc 25-0626-1400 
//// jwc 25-0626-1400             network_GroupChannel_MyBotId_ManualSet_Override_Bool_QuestGlobal = false
//// jwc 25-0626-1400             network_GroupChannel_MyBotId_AutoSet_Default_Bool_QuestGlobal = true
//// jwc 25-0626-1400 
//// jwc 25-0626-1400             serial.writeLine("* 20+ " + "Z" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal))
//// jwc 25-0626-1400         }

        //// jwc only show on demand, like long-press-Logo: // Show 'network_GroupChannel_MyBotId_Base0_Int_QuestGlobal'
        //// jwc only show on demand, like long-press-Logo: basic.showString(convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal))

        //// jwc Interim Testing Local/Global Scope of Variables: \/\/
        ////
        quest_Public_Variables_N_Constants.network_GroupChannel_MyBotId_Base0_Int_QuestGlobal_01 = network_GroupChannel_MyBotId_Base0_Int_QuestGlobal
        //// jwc ? quest_Public_Variables_N_Constants_01.prototype.network_GroupChannel_MyBotId_Base0_Int_QuestGlobal_02 = network_GroupChannel_MyBotId_Base0_Int_QuestGlobal
        network_GroupChannel_MyBotId_Base0_Int_QuestGlobal_11 = network_GroupChannel_MyBotId_Base0_Int_QuestGlobal

//// jwc 25-0626-1400        // diagnostics
//// jwc 25-0626-1400        switch (debug_Show_In) {
//// jwc 25-0626-1400            case quest_Debug_Show_Enum.Dashboard_OLED:
//// jwc 25-0626-1400                quest_Dashboard.quest_Show_Oled_Cleared_Func()
//// jwc 25-0626-1400 
//// jwc 25-0626-1400                quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(convertToText(network_GroupChannel_MyBotId_Base0_IntIn) + " " + convertToText(send_DataOfBot_ToXrayDashboardOfMb_OnOff_Enum_In) + " " + convertToText(debug_Show_In), 0, 0)
//// jwc 25-0626-1400                quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + " " + convertToText(network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal) + " " + convertToText(debug_Show_In), 0, 1)
//// jwc 25-0626-1400 
//// jwc 25-0626-1400                quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + " " + convertToText(network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal) + " " + convertToText(control.deviceSerialNumber()), 0, 2)
//// jwc 25-0626-1400 
//// jwc 25-0626-1400                //// jwc y serial.writeLine('* 30: ' + convertToText(network_GroupChannel_MyBotId_Base0_IntIn)            +" "+ convertToText(send_DataOfBot_ToXrayDashboardOfMb_OnOff_Enum_In)         +" "+ convertToText(debug_Show_In))
//// jwc 25-0626-1400                //// jwc y serial.writeLine('* 31: ' + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) +" "+ convertToText(network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal) +" "+ convertToText(debug_Show_In))
//// jwc 25-0626-1400                serial.writeLine("* 30: " + convertToText(network_GroupChannel_MyBotId_Base0_IntIn) + " >> " + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + " | " + convertToText(send_DataOfBot_ToXrayDashboardOfMb_OnOff_Enum_In) + " >> " + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + " | " + convertToText(debug_Show_In))
//// jwc 25-0626-1400 
//// jwc 25-0626-1400                break  // out of these case statements
//// jwc 25-0626-1400            case quest_Debug_Show_Enum.MicroBit_Screen:
//// jwc 25-0626-1400                // diagnostics
//// jwc 25-0626-1400                basic.showIcon(IconNames.Happy)
//// jwc 25-0626-1400 
//// jwc 25-0626-1400                break  // out of these case statements
//// jwc 25-0626-1400            case quest_Debug_Show_Enum.Off:
//// jwc 25-0626-1400 
//// jwc 25-0626-1400                break  // out of these case statements
//// jwc 25-0626-1400            default:
//// jwc 25-0626-1400                if (_debug_Serial_Print_Bool_QuestGlobal) {
//// jwc 25-0626-1400                    serial.writeLine("* ERROR: 25-0208-0300: quest_Send_LoginOfBot_ToXrayDashboardOfMb_Func: " + network_GroupChannel_MyBotId_Base0_IntIn + " " + send_DataOfBot_ToXrayDashboardOfMb_OnOff_Enum_In + " " + debug_Show_In)
//// jwc 25-0626-1400                }
//// jwc 25-0626-1400                break
//// jwc 25-0626-1400        }
        //// jwc y serial.writeLine(" *80: L: "+ quest_General.quest_Get_String_WithColumnPadding_AsStringOut_Func(convertToText(randint(0, 999)), 10, quest_String_Justify_Type_Enum.justify_Left) +" < ")
        //// jwc y serial.writeLine(' *90: R: ' + quest_General.quest_Get_String_WithColumnPadding_AsStringOut_Func(convertToText(randint(0, 999)), 10, quest_String_Justify_Type_Enum.justify_Right) + ' < ')

        //// jwc send data

        if (true) {
            quest_Note_3.quest_Show_String_For_Note_Small_Func(
                "Not end w/'delimiter' or will create a fake key_value pair at receiving end"
            )
            let network_Message_Str = ""

            // network_Message_Str = "" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) +":" + convertToText(input.lightLevel()) +":" + convertToText(input.temperature()) +":" + convertToText(0)
            // network_Message_Str = "ID:" + convertToText(botGroupChannelNum_Int) +", TE:" + convertToText(input.temperature()) +", LI:" + convertToText(input.lightLevel()) +", CO:" + convertToText(input.compassHeading()) +", MX:" + convertToText(input.magneticForce(Dimension.X)) +", MY:" + convertToText(input.magneticForce(Dimension.Y)) +", MZ:" + convertToText(input.magneticForce(Dimension.Z)) +", MT:" + convertToText(input.magneticForce(Dimension.Strength))
            // 'Z:' = Register Header
            // * 
            //// jwc 25-0626-1400 network_Message_Str = "Z:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + ",L:+" + convertToText(randint(1, 100)) + ",R:-" + convertToText(randint(1, 100))
            network_Message_Str = "A:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + ",SerId:" + network_DeviceSerialId_MyBotId_Str_QuestGlobal

            quest_Note_3.quest_Show_String_For_Note_Big_Func(
                "Network_Message Max Length or will be cut off"
            )
            if (network_Message_Str.length > network_Message_LENGTH_MAX_INT_QUESTGLOBAL) {
                basic.showString("ERROR: 25-0209-0400 Network Message > Max Len.")
            }
            radio.setGroup(network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL)
            radio.sendString(network_Message_Str)
            radio.setGroup(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal)

            network_Send_LoginOfBot_ToXrayDashboard_OnRemoteDisplay_Bool_QuestGlobal = true

            //// jwc 25-0626-1400 if (debug_Show_In == quest_Debug_Show_Enum.Dashboard_OLED) {
            //// jwc 25-0626-1400     //// jwc o quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("* 40: network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL: "+ network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL +" | network_Message_Str: "+ network_Message_Str, 0, 3)
            //// jwc 25-0626-1400     //// jwc o serial.writeLine("* 40: network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL: "+ network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL +" | network_Message_Str: "+ network_Message_Str)
            //// jwc 25-0626-1400     quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("* 38A: network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL: " + network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL + " | network_GroupChannel_MyBotId_Base0_Int_QuestGlobal: " + network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + " | network_Message_Str: " + network_Message_Str, 0, 3)
            //// jwc 25-0626-1400     serial.writeLine("* 38B: network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL: " + network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL + " | network_GroupChannel_MyBotId_Base0_Int_QuestGlobal: " + network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + " | network_Message_Str: " + network_Message_Str)
            //// jwc 25-0626-1400 }

            //// jwc 25-0626-1400 quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("* 38A: network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL: " + network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL + " | network_GroupChannel_MyBotId_Base0_Int_QuestGlobal: " + network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + " | network_Message_Str: " + network_Message_Str, 0, 3)
            //// jwc 25-0626-1400 serial.writeLine("* 38B: network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL: " + network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL + " | network_GroupChannel_MyBotId_Base0_Int_QuestGlobal: " + network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + " | network_Message_Str: " + network_Message_Str)
            quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("*0:" + convertToText(network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL) + "<<" + network_Message_Str + "|" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal), 0, 0)
            if (_debug_Serial_Print_Bool_QuestGlobal) {
                serial.writeLine                                     ("*0:" + convertToText(network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL) + "<<" + network_Message_Str + "|" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal))
            }
        }
    }

    //// jwc yy export function quest_Send_DataOfBot_ToXrayDashboardOfMb_Func(network_GroupChannel_MyBotId_Base0_IntIn: number, send_DataOfBot_ToXrayDashboardOfMb_OnOff_Enum_In: boolean, debug_Show_In: quest_Debug_Show_Enum): void {
    //// jwc y //% weight=50 blockGap=8

    //// jwc 25-0626-1400 * @param debug_Show_In quest_Debug_Show_Enum
    //// jwc 25-0626-1400 //% block="set quest\\_Send\\_DataOfBot\\_ToXrayDashboardOfMb\\_Func:|* send_DataOfBot_ToXrayDashboardOfMb_Message_String: $send_DataOfBot_ToXrayDashboardOfMb_Message_String|* debug_Show_In: $debug_Show_In"


    /**
     * quest_Send_DataOfBot_ToXrayDashboardOfMb_Func
     * @param send_DataOfBot_ToXrayDashboardOfMb_Message_String string
     *
     */
    // '\\' = escape character to deactivate following special character
    //% block="set quest\\_Send\\_DataOfBot\\_ToXrayDashboardOfMb\\_Func:|* send_DataOfBot_ToXrayDashboardOfMb_Message_String: $send_DataOfBot_ToXrayDashboardOfMb_Message_String|* debug_Show_In: $debug_Show_In"
    //% weight=48 blockGap=8
    //% inlineInputMode=external
    //// jwc n default: export function quest_Send_DataOfBot_ToXrayDashboardOfMb_Func(send_DataOfBot_ToXrayDashboardOfMb_Message_String: string, debug_Show_In: quest_Debug_Show_Enum = quest_Debug_Show_Enum.Dashboard_OLED): void {
    //// jwc n default only seems to work w/ number: export function quest_Send_DataOfBot_ToXrayDashboardOfMb_Func(send_DataOfBot_ToXrayDashboardOfMb_Message_String: string, debug_Show_In: quest_Debug_Show_Enum = quest_Debug_Show_Enum.Dashboard_OLED): void {
    //// jwc 25-0626-1400 export function quest_Send_DataOfBot_ToXrayDashboardOfMb_Func(send_DataOfBot_ToXrayDashboardOfMb_Message_String: string, debug_Show_In: quest_Debug_Show_Enum): void {
    export function quest_Send_DataOfBot_ToXrayDashboardOfMb_Func(send_DataOfBot_ToXrayDashboardOfMb_Message_String: string): void {
        ///jwc y if(quest_Debug_Show_Enum)
        ///jwc y basic.showIcon(IconNames.SmallHeart)

        serial.writeLine("")  //// create a newline to start debug-report

        let network_Message_Str = send_DataOfBot_ToXrayDashboardOfMb_Message_String

        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION // Avoid sending redundant messages to not overload network
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION if (network_Message_Str != network_Message_Old_Str_QuestGlobal){
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION 
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     //// jwc 25-0626-1400 serial.writeLine("* 50: " + convertToText(send_DataOfBot_ToXrayDashboardOfMb_Message_String) + " | " + convertToText(debug_Show_In))
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     //// jwc 25-0626-1400 serial.writeLine("* 51: " + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + " : " + convertToText(network_GroupChannel_MyBotId_ManualSet_Override_Bool_QuestGlobal) + " , " + convertToText(network_GroupChannel_MyBotId_AutoSet_Default_Bool_QuestGlobal) + " | " + convertToText(network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal))
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     //// jwc 25-0626-1400 
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     //// jwc 25-0626-1400 
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     //// jwc 25-0626-1400 serial.writeLine("* 55: " + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal))
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     //// jwc 25-0626-1400 serial.writeLine("* 55_01: " + convertToText(quest_Public_Variables_N_Constants.network_GroupChannel_MyBotId_Base0_Int_QuestGlobal_01))
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     //// jwc 25-0626-1400 //// jwc ? serial.writeLine(" 55_02: "+ convertToText(quest_Public_Variables_N_Constants_01.prototype.network_GroupChannel_MyBotId_Base0_Int_QuestGlobal_02))
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     //// jwc 25-0626-1400 serial.writeLine("* 55_11: " + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal_11))
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION 
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     // * AutoGen as needed
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     //// jwc 25-0626-1400 if (!(network_GroupChannel_MyBotId_ManualSet_Override_Bool_QuestGlobal) && !(network_GroupChannel_MyBotId_AutoSet_Default_Bool_QuestGlobal)) {
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     //// jwc 25-0626-1400     quest_Dashboard.quest_Send_LoginOfBot_ToXrayDashboardOfMb_Func(
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     //// jwc 25-0626-1400         0,
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     //// jwc 25-0626-1400         //// jwc y randint(0, 1),
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     //// jwc 25-0626-1400         //// jwc obsolete: quest_Toggle_OnOff_Enum.On,
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     //// jwc 25-0626-1400         //// jwc yy quest_Toggle_OnOff_Enum.On,
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     //// jwc 25-0626-1400         //// jwc y quest_Toggle_OnOff_Enum.Off,
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     //// jwc 25-0626-1400         quest_Toggle_OnOff_Enum.On,
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     //// jwc 25-0626-1400         //// jwc yy quest_Debug_Show_Enum.Dashboard_OLED,
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     //// jwc 25-0626-1400         //// jwc y quest_Debug_Show_Enum.MicroBit_Screen,
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     //// jwc 25-0626-1400         quest_Debug_Show_Enum.Dashboard_OLED,
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     //// jwc 25-0626-1400     )
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     //// jwc 25-0626-1400 }
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     if (!(network_GroupChannel_MyBotId_ManualSet_Override_Bool_QuestGlobal) && !(network_GroupChannel_MyBotId_AutoSet_Default_Bool_QuestGlobal)) {
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION         quest_Dashboard.quest_Send_LoginOfBot_ToXrayDashboardOfMb_Func(0)
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     }
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION 
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     //// jwc send data
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION 
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     if (true) {
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION         quest_Note_3.quest_Show_String_For_Note_Small_Func(
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION             "Not end w/'delimiter' or will create a fake key_value pair at receiving end"
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION         )
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION         quest_Note_3.quest_Show_String_For_Note_Big_Func(
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION             "Network_Message Max Length or will be cut off"
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION         )
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION         if (network_Message_Str.length > network_Message_LENGTH_MAX_INT_QUESTGLOBAL) {
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION             basic.showString("ERROR: 25-0209-0410 Network Message > Max Len.")
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION         }
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION         radio.setGroup(network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL)
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION         radio.sendString(network_Message_Str)
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION         radio.setGroup(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal)
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION         //// jwc 25-0626-1400 if (debug_Show_In = quest_Debug_Show_Enum.Dashboard_OLED) {
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION         //// jwc 25-0626-1400     //// jwc o quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("* 40: network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL: " + network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL + " | network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL: " + network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL + " | network_Message_Str: " + network_Message_Str, 0, 3)
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION         //// jwc 25-0626-1400     //// jwc o serial.writeLine("* 53: network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL: " + network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL + " | network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL: " + network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL + " | network_Message_Str: " + network_Message_Str)
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION         //// jwc 25-0626-1400     //// jwc 25-0626-1400 quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("* 58A: network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL: " + network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL + " | network_GroupChannel_MyBotId_Base0_Int_QuestGlobal: " + network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + " | network_Message_Str: " + network_Message_Str, 0, 3)
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION         //// jwc 25-0626-1400     //// jwc 25-0626-1400 serial.writeLine("* 58B: network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL: " + network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL + " | network_GroupChannel_MyBotId_Base0_Int_QuestGlobal: " + network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + " | network_Message_Str: " + network_Message_Str)
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION         //// jwc 25-0626-1400 }
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION         quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("* 20: " + convertToText(network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL) + " << " + network_Message_Str + " | " + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal), 0, 1)
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION         if (_debug_Serial_Print_Bool_QuestGlobal) {
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION             serial.writeLine                                     ("* 20: " + convertToText(network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL) + " << " + network_Message_Str + " | " + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal))
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION         }
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     }
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     //// jwc to prevent redundant data on dashboard, to mitigate network traffic
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     network_Message_Old_Str_QuestGlobal = network_Message_Str
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION } else {
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION 
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION     serial.writeLine("* 25: Cannot send redundant data: " + convertToText(network_Message_Str) + " == " + convertToText(network_Message_Old_Str_QuestGlobal))
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION 
        //// jwc 25-0626-1400 OK TO SEND REDUNDANT DATA, WILL FILTER AT DESTINATION }

        //// jwc 25-0626-1400 serial.writeLine("* 50: " + convertToText(send_DataOfBot_ToXrayDashboardOfMb_Message_String) + " | " + convertToText(debug_Show_In))
        //// jwc 25-0626-1400 serial.writeLine("* 51: " + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + " : " + convertToText(network_GroupChannel_MyBotId_ManualSet_Override_Bool_QuestGlobal) + " , " + convertToText(network_GroupChannel_MyBotId_AutoSet_Default_Bool_QuestGlobal) + " | " + convertToText(network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal))
        //// jwc 25-0626-1400 
        //// jwc 25-0626-1400 
        //// jwc 25-0626-1400 serial.writeLine("* 55: " + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal))
        //// jwc 25-0626-1400 serial.writeLine("* 55_01: " + convertToText(quest_Public_Variables_N_Constants.network_GroupChannel_MyBotId_Base0_Int_QuestGlobal_01))
        //// jwc 25-0626-1400 //// jwc ? serial.writeLine(" 55_02: "+ convertToText(quest_Public_Variables_N_Constants_01.prototype.network_GroupChannel_MyBotId_Base0_Int_QuestGlobal_02))
        //// jwc 25-0626-1400 serial.writeLine("* 55_11: " + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal_11))

        // * AutoGen as needed
        //// jwc 25-0626-1400 if (!(network_GroupChannel_MyBotId_ManualSet_Override_Bool_QuestGlobal) && !(network_GroupChannel_MyBotId_AutoSet_Default_Bool_QuestGlobal)) {
        //// jwc 25-0626-1400     quest_Dashboard.quest_Send_LoginOfBot_ToXrayDashboardOfMb_Func(
        //// jwc 25-0626-1400         0,
        //// jwc 25-0626-1400         //// jwc y randint(0, 1),
        //// jwc 25-0626-1400         //// jwc obsolete: quest_Toggle_OnOff_Enum.On,
        //// jwc 25-0626-1400         //// jwc yy quest_Toggle_OnOff_Enum.On,
        //// jwc 25-0626-1400         //// jwc y quest_Toggle_OnOff_Enum.Off,
        //// jwc 25-0626-1400         quest_Toggle_OnOff_Enum.On,
        //// jwc 25-0626-1400         //// jwc yy quest_Debug_Show_Enum.Dashboard_OLED,
        //// jwc 25-0626-1400         //// jwc y quest_Debug_Show_Enum.MicroBit_Screen,
        //// jwc 25-0626-1400         quest_Debug_Show_Enum.Dashboard_OLED,
        //// jwc 25-0626-1400     )
        //// jwc 25-0626-1400 }

    
        //// jwc 25-0626-1900 TODO Obsolete? if (!(network_GroupChannel_MyBotId_ManualSet_Override_Bool_QuestGlobal) && !(network_GroupChannel_MyBotId_AutoSet_Default_Bool_QuestGlobal)) {
        if(!network_Send_LoginOfBot_ToXrayDashboard_OnRemoteDisplay_Bool_QuestGlobal){
            quest_Dashboard.quest_Send_LoginOfBot_ToXrayDashboardOfMb_Func(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal)
        }

        //// jwc send data

        if (true) {
            quest_Note_3.quest_Show_String_For_Note_Small_Func(
                "Not end w/'delimiter' or will create a fake key_value pair at receiving end"
            )
            quest_Note_3.quest_Show_String_For_Note_Big_Func(
                "Network_Message Max Length or will be cut off"
            )
            if (network_Message_Str.length > network_Message_LENGTH_MAX_INT_QUESTGLOBAL) {
                basic.showString("ERROR: 25-0209-0410 Network Message > Max Len.")
            }
            radio.setGroup(network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL)
            radio.sendString(network_Message_Str)
            radio.setGroup(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal)
            //// jwc 25-0626-1400 if (debug_Show_In = quest_Debug_Show_Enum.Dashboard_OLED) {
            //// jwc 25-0626-1400     //// jwc o quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("* 40: network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL: " + network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL + " | network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL: " + network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL + " | network_Message_Str: " + network_Message_Str, 0, 3)
            //// jwc 25-0626-1400     //// jwc o serial.writeLine("* 53: network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL: " + network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL + " | network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL: " + network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL + " | network_Message_Str: " + network_Message_Str)
            //// jwc 25-0626-1400     //// jwc 25-0626-1400 quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("* 58A: network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL: " + network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL + " | network_GroupChannel_MyBotId_Base0_Int_QuestGlobal: " + network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + " | network_Message_Str: " + network_Message_Str, 0, 3)
            //// jwc 25-0626-1400     //// jwc 25-0626-1400 serial.writeLine("* 58B: network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL: " + network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL + " | network_GroupChannel_MyBotId_Base0_Int_QuestGlobal: " + network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + " | network_Message_Str: " + network_Message_Str)
            //// jwc 25-0626-1400 }
            quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("*2:" + convertToText(network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL) + "<<" + network_Message_Str + "|" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal), 0, 1)
            if (_debug_Serial_Print_Bool_QuestGlobal) {
                serial.writeLine                                     ("*2:" + convertToText(network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL) + "<<" + network_Message_Str + "|" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal))
            }
        }
        //// jwc to prevent redundant data on dashboard, to mitigate network traffic
        network_Message_Old_Str_QuestGlobal = network_Message_Str

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
            local_string_out = " "+ local_string_out
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
                ////jwc y good test: local_string_out = local_string_out +"."
                local_string_out = local_string_out +" "
            }
            else if(string_justify_type_in == quest_String_Justify_Type_Enum.justify_Right) {
                ////jwc y good test: local_string_out = "." + local_string_out
                local_string_out = " "+ local_string_out
            }
            ///jwc y good test: else {
            ///jwc y good test:     local_string_out = local_string_out +"."
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
            case quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorWheel_Left__S0_MotorWheel_Right:
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, motor_Power_L)
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, motor_Power_R)
                //// * jwc 25-0626-1400 if (network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal == quest_Toggle_OnOff_Enum.On) {
                //// * jwc 25-0626-1400     //// jwc y quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("A:" + convertToText(network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL +",L:" + convertToText(powerLeftIn) +",R:" + convertToText(powerRightIn)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// * jwc 25-0626-1400     //// * jwc 25-0626-1400 quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("A:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",L:" + convertToText(powerLeftIn) + ",R:" + convertToText(powerRightIn)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// * jwc 25-0626-1400 }

                quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("B:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + ",WL:" + convertToText(powerLeftIn) + ",WR:" + convertToText(powerRightIn))

                //// jwc y quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("B:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + ",WL:" + convertToText(powerLeftIn) + ",WR:" + convertToText(powerRightIn), 0, 2)
                quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("B:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + ",Wheel_L:" + convertToText(powerLeftIn) + ",Wheel_R:" + convertToText(powerRightIn), 0, 2)
                if (_debug_Serial_Print_Bool_QuestGlobal) {
                    //// * jwc 25-0626-1400 serial.writeLine("* quest_Set_PowerMotorsViaBlueRedBlackPins_Func: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                    serial.writeLine                                     ("B:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + ",WL:" + convertToText(powerLeftIn) + ",WR:" + convertToText(powerRightIn))
                }
                break
            case quest_PortGroup_BlueRedBlack_PortIds_Enum.S3_MotorWheel_Left__S2_MotorWheel_Right:
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S3, motor_Power_L)
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S2, motor_Power_R)
                //// * jwc 25-0626-1400 if (network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal == quest_Toggle_OnOff_Enum.On) {
                //// * jwc 25-0626-1400     //// jwc y quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("D:" + convertToText(network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL +",L:" + convertToText(powerLeftIn) +",R:" + convertToText(powerRightIn)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// * jwc 25-0626-1400     //// * jwc 25-0626-1400 quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("B:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal +",L:" + convertToText(powerLeftIn) +",R:" + convertToText(powerRightIn)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// * jwc 25-0626-1400 }

                quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("D:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + ",WL2:" + convertToText(powerLeftIn) + ",WR2:" + convertToText(powerRightIn))

                //// jwc y quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("D:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + ",WL2:" + convertToText(powerLeftIn) + ",WR2:" + convertToText(powerRightIn), 0, 4)
                quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func("D:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + ",Whee_L2:" + convertToText(powerLeftIn) + ",Whee_R2:" + convertToText(powerRightIn), 0, 4)
                if (_debug_Serial_Print_Bool_QuestGlobal) {
                    //// * jwc 25-0626-1400 serial.writeLine("* quest_Set_PowerMotorsViaBlueRedBlackPins_Func: "+ powerLeftIn +" "+ powerRightIn +" >> "+ motor_Power_L +" "+ motor_Power_R)
                    serial.writeLine("D:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal) + ",WL2:" + convertToText(powerLeftIn) + ",WR2:" + convertToText(powerRightIn))
                }
                break
            default:
                //// * jwc 25-0626-1400 if (network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal) {
                //// * jwc 25-0626-1400     quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("ERROR:  25-0209-0822: "+ convertToText(network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL +",L:" + convertToText(powerLeftIn) +",R:" + convertToText(powerRightIn)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// * jwc 25-0626-1400 }
                quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("D:" + "ERROR: 25-0209-0822: quest_Set_PowerMotorsViaBlueRedBlackPins_Func: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                if (_debug_Serial_Print_Bool_QuestGlobal) {
                    serial.writeLine("* ERROR: 25-0209-0820: quest_Set_PowerMotorsViaBlueRedBlackPins_Func: "+ powerLeftIn +" "+ powerRightIn +" >> "+ motor_Power_L +" "+ motor_Power_R)
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
                    serial.writeLine("* ERROR: 25-0209-0920 quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Func: "+ powerLeftIn +" "+ powerRightIn +" >> "+ motor_Power_L +" "+ motor_Power_R)
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

    /**
    * quest_Set_AutoDegrees_ForServoArm_Fn
    * @param port_Id_In quest_PortGroup_ServoArm_PortId_Enum
    * @param servoArm_DegreesInDirection_Enum_In quest_ServoArm_DegreesInDirection_Enum
    * @param debug_Show_In quest_Debug_Show_Enum

    */
    //% block="set auto_degrees for_servo_arm:|* port_Id_In: $port_Id_In|* servoArm_DegreesInDirection_Enum_In: $servoArm_DegreesInDirection_Enum_In|* debug_Show_In: $debug_Show_In"
    //% weight=74 blockGap=8
    //% inlineInputMode=external
    export function quest_Set_AutoDegrees_ForServoArm_Func(port_Id_In: quest_PortSingle_ServoArmBeam_PortId_Enum, servoArm_DegreesInDirection_Enum_In: quest_ServoArm_DegreesInDirection_Enum, debug_Show_In: quest_Debug_Show_Enum): void {

        ///jwc y if(quest_Debug_Show_Enum)
        ///jwc y basic.showIcon(IconNames.SmallHeart)

        let servoArm_Degrees_Local = 0

        switch (port_Id_In) {
            case quest_PortSingle_ServoArmBeam_PortId_Enum.S7_ServoArmBeam_Left:

                switch (servoArm_DegreesInDirection_Enum_In) {
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_000:
                        //// jwc y servoArm_Degrees_Local = 90
                        //// jwc 25-0625-1800 servoArm_Degrees_Local = 135
                        servoArm_Degrees_Local = 180
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_045:
                        //// jwc 25-0625-1800 servoArm_Degrees_Local = 180
                        servoArm_Degrees_Local = 135
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_090:
                        //// jwc y servoArm_Degrees_Local = 45
                        //// jwc 25-0625-1800 servoArm_Degrees_Local = 90
                        servoArm_Degrees_Local = 90
                        break  // out of these case statements
                }
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, servoArm_Degrees_Local)
                //// jwc 25-0626-1400 if (network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal == quest_Toggle_OnOff_Enum.On) {
                //// jwc 25-0626-1400     //// jwc y quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("A:" + convertToText(network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL +",L:" + convertToText(powerLeftIn) +",R:" + convertToText(powerRightIn)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// jwc 25-0626-1400     //// jwc ny quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("C:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",Arm_Port:" + convertToText(port_Id_In) + ",Arm_Deg:" + convertToText(servoArm_DegreesInDirection_Enum_In)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// jwc 25-0626-1400     //// jwc 25-0325-1600 obsolete: quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("C:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",P:" + convertToText(port_Id_In) + ",D:" + convertToText(servoArm_DegreesInDirection_Enum_In)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// jwc 25-0626-1400     quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func( "C:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",L_S7:" + convertToText(servoArm_DegreesInDirection_Enum_In)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// jwc 25-0626-1400 }
                quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("C:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",L_S7:" + convertToText(servoArm_DegreesInDirection_Enum_In)))

                if (_debug_Serial_Print_Bool_QuestGlobal) {
                    //// jwc o serial.writeLine("* quest_Set_AutoDegrees_ForServoArm_Func: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                    //// jwc 25-0325-1600 obsolete: serial.writeLine("* quest_Set_AutoDegrees_ForServoArm_Func: " + "C:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",Arm_Port:" + convertToText(port_Id_In) + ",Arm_Deg:" + convertToText(servoArm_DegreesInDirection_Enum_In)))
                    serial.writeLine("* quest_Set_AutoDegrees_ForServoArm_Func: " +"C:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",L_S7:" + convertToText(servoArm_DegreesInDirection_Enum_In)))
                }
                break  // out of these case statements

            case quest_PortSingle_ServoArmBeam_PortId_Enum.S6_ServoArmBeam_Right:

                switch (servoArm_DegreesInDirection_Enum_In) {
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_000:
                        //// jwc y servoArm_Degrees_Local = 90
                        //// jwc 25-0625-1800 servoArm_Degrees_Local = 45
                       servoArm_Degrees_Local = 0
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_045:
                        //// jwc 25-0625-1800 servoArm_Degrees_Local = 0
                        servoArm_Degrees_Local = 45
                        break  // out of these case statements
                    case quest_ServoArm_DegreesInDirection_Enum.Degree_090:
                        //// jwc y servoArm_Degrees_Local = 135
                        //// jwc 25-0625-1800 servoArm_Degrees_Local = 90
                        servoArm_Degrees_Local = 90
                        break  // out of these case statements
                }
                wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S6, servoArm_Degrees_Local)
                //// jwc 25-0626-1400 if (network_Send_DataOfBot_ToXrayDashboard_OnRemoteDisplay_OnOff_Enum_QuestGlobal == quest_Toggle_OnOff_Enum.On) {
                //// jwc 25-0626-1400     //// jwc y quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("A:" + convertToText(network_GroupChannel_OfXrayDashboard_OnRemoteDisplay_BASE0_INT_QUESTGLOBAL +",L:" + convertToText(powerLeftIn) +",R:" + convertToText(powerRightIn)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// jwc 25-0626-1400     //// jwc ny quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("C:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",Arm_Port:" + convertToText(port_Id_In) + ",Arm_Deg:" + convertToText(servoArm_DegreesInDirection_Enum_In)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// jwc 25-0626-1400     //// jwc 25-0325-1600 obsolete: quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("C:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",P:" + convertToText(port_Id_In) + ",D:" + convertToText(servoArm_DegreesInDirection_Enum_In)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// jwc 25-0626-1400      quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("D:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",R_S6:" + convertToText(servoArm_DegreesInDirection_Enum_In)), quest_Debug_Show_Enum.Dashboard_OLED)
                //// jwc 25-0626-1400 }
                quest_Dashboard.quest_Send_DataOfBot_ToXrayDashboardOfMb_Func("D:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",R_S6:" + convertToText(servoArm_DegreesInDirection_Enum_In)))

                if (_debug_Serial_Print_Bool_QuestGlobal) {
                    //// jwc o serial.writeLine("* quest_Set_AutoDegrees_ForServoArm_Func: " + powerLeftIn + " " + powerRightIn + " >> " + motor_Power_L + " " + motor_Power_R)
                    //// jwc 25-0325-1600 obsolete: serial.writeLine("* quest_Set_AutoDegrees_ForServoArm_Func: " + "C:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",Arm_Port:" + convertToText(port_Id_In) + ",Arm_Deg:" + convertToText(servoArm_DegreesInDirection_Enum_In)))
                    serial.writeLine("* quest_Set_AutoDegrees_ForServoArm_Func: " + "D:" + convertToText(network_GroupChannel_MyBotId_Base0_Int_QuestGlobal + ",R_S6:" + convertToText(servoArm_DegreesInDirection_Enum_In)))
                }
                break  // out of these case statements
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
    //////jwc 23-0612-2020 Obsolete since too complicated to change global_var of 'main.blocks':         "B:" + convertToText(deviceType_Bot_Bool) +", C:" + convertToText(deviceType_Controller_Bool),
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
            serial.writeString("> Convert::" +" Side_Adjacent: "+ quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
                cartesian_side_adjacent_x_int_in,
                5,
                0
            ) +" Side_Opposite: "+ quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
                cartesian_side_opposite_y_int_in,
                5,
                0
            ))
        }
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Convert to radians"
        )
        _local_converted_value_int_out = Math.atan2(cartesian_side_opposite_y_int_in, cartesian_side_adjacent_x_int_in)
        serial.writeString(" Angle:: Radians: "+ quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
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
            serial.writeString(" Degrees:: Raw: "+ quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
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
            serial.writeString(" Incremented: "+ quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
                _local_converted_value_int_out,
                5,
                1
            ) +" * "+ angle_degree_increment_in)
        }
        _local_converted_value_int_out = _local_converted_value_int_out * angle_degree_increment_in
        if (_debug_Serial_Print_Bool_QuestGlobal) {
            serial.writeString(" = "+ quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
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
            serial.writeString("> Convert::" +" Side_Adjacent: "+ quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
                cartesian_side_adjacent_x_int_in,
                5,
                0
            ) +" Side_Opposite: "+ quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
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
            serial.writeString(" Angle:: Radians: "+ quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
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
            serial.writeString(" Degrees:: Raw: "+ quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
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
            serial.writeString(" Incremented: "+ quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
                _local_converted_value_int_out,
                5,
                1
            ) +" * "+ angle_degree_increment_in)
        }
        _local_converted_value_int_out = _local_converted_value_int_out * angle_degree_increment_in
        if (_debug_Serial_Print_Bool_QuestGlobal) {
            serial.writeString(" = "+ quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
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
            serial.writeString("> Convert::" +" Side_Adjacent: "+ quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
                cartesian_side_adjacent_x_int_in,
                5,
                0
            ) +" Side_Opposite: "+ quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
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
            serial.writeString(" Radius: "+ quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
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