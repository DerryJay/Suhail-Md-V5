const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349019406102";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_57_08_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDksXG4gICAgICAgIDExMixcbiAgICAgICAgMTA5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk0LFxuICAgICAgICA4MyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDk2LFxuICAgICAgICAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgODcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQyLFxuICAgICAgICA5NixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5MCxcbiAgICAgICAgODAsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDMsXG4gICAgICAgIDExNixcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MixcbiAgICAgICAgNjksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxODcsXG4gICAgICAgIDY2LFxuICAgICAgICA2NixcbiAgICAgICAgODIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlFtYllDektIdmpackRMQzIwMkl4Wml3Rkh5TDRCbFBvcXMxSFVlaEU5VTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA3MDIzOTAwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkZEQzIxRUMxODIwNkRBMDIxMTBGMTEyQzc1QTNBQ0FcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI0MzcxMDU4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA3MDIzOTAwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTQ4QTk3RUI3MDUyNzY2ODZDMjgwMERDMTYxQkU5RUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI0MzcxMDU5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl9fVTBiMEkzUjB5UU9RNWg3RFhPQkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWFlNzM4OTMtYmQ3ZS00Njg4LWFiMjYtYjBiYjAxOWFkNmM4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MCxcbiAgICAgIDIyLFxuICAgICAgMTgsXG4gICAgICA1OSxcbiAgICAgIDYwLFxuICAgICAgMjYsXG4gICAgICAxMzIsXG4gICAgICAxMDQsXG4gICAgICAxMzEsXG4gICAgICAxODcsXG4gICAgICAxNjEsXG4gICAgICA3MSxcbiAgICAgIDUyLFxuICAgICAgMjI1LFxuICAgICAgMTgzLFxuICAgICAgMTgzLFxuICAgICAgMTM3LFxuICAgICAgMjM2LFxuICAgICAgMTIyLFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDI1MyxcbiAgICAgIDI0OCxcbiAgICAgIDEzMixcbiAgICAgIDI4LFxuICAgICAgMjIsXG4gICAgICAxMzQsXG4gICAgICAxNDUsXG4gICAgICA3OCxcbiAgICAgIDY3LFxuICAgICAgMTIsXG4gICAgICAxMjEsXG4gICAgICAyNTAsXG4gICAgICAyMjYsXG4gICAgICAxOTQsXG4gICAgICA5MyxcbiAgICAgIDU4LFxuICAgICAgNTQsXG4gICAgICAxMjUsXG4gICAgICAyMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV0FLMTRGOEVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNzAyMzkwMDQ6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJKb3NodWFcIixcbiAgICBcImxpZFwiOiBcIjI2ODM0MTQ1MzMwNzkxMzoyMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKZkoyc29FRU9tZ243WUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFxRzk2RUgySE9JVGdSUE5KMmJDTlBOUXUwckhwa21Va3kwTHducUMvRWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieWloaEZMbXFRN1ZxYW0vUDA2ZDBKOWpjdUJ4cGx2K3BvZWFqU3htTmE4UGhhd1VURGlWbUNyeVNWU0JKYldzWUY4a1AxTE9HMWt3eUJXNThRK0o4QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaEtGSjNyand0TDZ0dUxGZTJKYU9vTFRiSThDcUdvaU42Um1wdU9vTFNwNENLQXBJTFpJZ2NwSW9JQjRDWjJyRFpzQzhWdFlVYWhQWFNKeEpMalFCZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA3MDIzOTAwNDoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjQzNzEwNTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJdU5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUl1Ti5qc29uIjogIntcImtleURhdGFcIjpcIllrdDdJQU9DU1crazM5U3F4SWdINUxXVjRNeFU3Z3FMcTlYV0JveVprWGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIzMDQxNDk5OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI0MzU5MzE1NDQxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Jay",
  packname: process.env.PACK_NAME || "Karly",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Jay",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
