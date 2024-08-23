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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_14_08_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM0LFxuICAgICAgICA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA3LFxuICAgICAgICA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyLFxuICAgICAgICA5NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgNDksXG4gICAgICAgIDc4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg5LFxuICAgICAgICA3NixcbiAgICAgICAgMTkyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDYyLFxuICAgICAgICA2NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjUsXG4gICAgICAgIDEwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2OCxcbiAgICAgICAgMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzLFxuICAgICAgICA3NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU5LFxuICAgICAgICA5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDExMixcbiAgICAgICAgOTAsXG4gICAgICAgIDMsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMixcbiAgICAgICAgNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyLFxuICAgICAgICA4NixcbiAgICAgICAgNzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2LFxuICAgICAgICA0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImFKVE9NeHZJc3dzMkFJblF3Wk5SdDVYamlRYjhGNkpIbFF6bTB0TTZsTzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA3MDIzOTAwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTU5NEU2RUQ4NDEzMUNEOUQxOTY2NjlBOTc3QzdBNjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI0MzcyMDkwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA3MDIzOTAwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0JBODU5MzUzRERGQkY0RjBEMjQ3NTZFNEQxMjk0RUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI0MzcyMDkwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm9lbEx2NmZ0VERpTnBEUkxQVEVkRkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTA5NTk5ZDEtNjQwMi00NDQ2LTljMmMtYmQwYjI1ZmUyNWI2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NSxcbiAgICAgIDE5LFxuICAgICAgMTQ5LFxuICAgICAgNjYsXG4gICAgICAxMTEsXG4gICAgICAyMjksXG4gICAgICAyMjIsXG4gICAgICAxMzYsXG4gICAgICA0NixcbiAgICAgIDg5LFxuICAgICAgMzIsXG4gICAgICAxNDksXG4gICAgICAyMzAsXG4gICAgICA2MixcbiAgICAgIDgyLFxuICAgICAgMjE3LFxuICAgICAgMjM2LFxuICAgICAgMjM2LFxuICAgICAgMTQsXG4gICAgICAxMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzIsXG4gICAgICA1OSxcbiAgICAgIDEzMSxcbiAgICAgIDI0LFxuICAgICAgMjE3LFxuICAgICAgMTg4LFxuICAgICAgMTQyLFxuICAgICAgMTYyLFxuICAgICAgMjA5LFxuICAgICAgNDMsXG4gICAgICAyMTYsXG4gICAgICAyMzMsXG4gICAgICAxOTQsXG4gICAgICAxMjksXG4gICAgICAxMDksXG4gICAgICAxNjUsXG4gICAgICAxNDUsXG4gICAgICA5MixcbiAgICAgIDIwNyxcbiAgICAgIDE5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyMUxSQjZQTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA3MDIzOTAwNDoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkpvc2h1YVwiLFxuICAgIFwibGlkXCI6IFwiMjY4MzQxNDUzMzA3OTEzOjIzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pmSjJzb0VFUEtvbjdZR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQXFHOTZFSDJIT0lUZ1JQTkoyYkNOUE5RdTBySHBrbVVreTBMd25xQy9FYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhMzk1MUFDVVZnR3FwVzlJQ2Npdk5jRkF2SjVXY1YwQmdoMzBZMGd6dWR3bnRtUElHVW9PTUt5VGFLL20wWjB4M21mZjBhRzVZS2JPQVJ3d0M2NXNCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJETGhrWWtBVDJpMEpHaWp2ZVdWVndmNEt2NGR4d1Q1dkxXTmJTei9WQUpXZnoySVNCZTQ5U1RyMWMyMHpobklTYzc4ejNDSXQrQklod3FpcTlycGpEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDcwMjM5MDA0OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNDM3MjA4NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUl1TlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXVOLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWWt0N0lBT0NTVytrMzlTcXhJZ0g1TFdWNE14VTdncUxxOVhXQm95WmtYaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjMwNDE0OTk5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjQzNTkzMTU0NDFcIn0iCn0="  // PUT your SESSION_ID 


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
LAB_API_KEY  || "",
