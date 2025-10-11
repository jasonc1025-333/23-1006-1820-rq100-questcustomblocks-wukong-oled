
//
// custom_VersionLog.ts
//

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
// * jwc 25-0627-0900 *** New Message_Mini_Network.. & Message_Full_Display.. *** Add '..SerialName_OfMyBot..'
// * jwc 25-0628-1400 Important to prevent recursion: stack overflow: network_Send_LoginOfBot_ToXrayDashboard_OnRemoteDisplay_Bool_QuestGlobal = true
// * jwc 25-0720-1900 
//   * 'S7_ServoArmBeam_Left' -> 'S7_ServoArm_Left'
//   * 'S6_ServoArmBeam_Right' -> 'S6_ServoArm_Right'
//   * Switch from Big-Gray-ServoArm to Small-Gray-ServoArm
// * jwc 25-0922-0200 Switch permanently from ServoArm_GrayBig to ServoArm_GraySmall
