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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_42_08_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1LFxuICAgICAgICA1NixcbiAgICAgICAgMjQwLFxuICAgICAgICA2MixcbiAgICAgICAgMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA5NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDksXG4gICAgICAgIDExNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NixcbiAgICAgICAgMjUzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODMsXG4gICAgICAgIDg5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA0MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU0LFxuICAgICAgICAzNixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDksXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDM0LFxuICAgICAgICA5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NixcbiAgICAgICAgNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgODcsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI2LFxuICAgICAgICA3MixcbiAgICAgICAgNzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNixcbiAgICAgICAgMTY1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAzNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkFJczVtdmtkeVpQQ09hTm1BNm5XcTBVM2lwaWpaMkpDaEFFVjZsWG1KQlk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjF5WEtwd2FSU0ZlUXlxRHQyd3A2T2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGIzNGFmNzgtYTY4MC00M2I4LTg5YzktY2I3MWIwNTZiZGU4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg4LFxuICAgICAgODAsXG4gICAgICAxODMsXG4gICAgICAyOSxcbiAgICAgIDE2NCxcbiAgICAgIDUwLFxuICAgICAgNDYsXG4gICAgICAzMCxcbiAgICAgIDIwNixcbiAgICAgIDI2LFxuICAgICAgMTg3LFxuICAgICAgMjUxLFxuICAgICAgMTA1LFxuICAgICAgMjQyLFxuICAgICAgMjI4LFxuICAgICAgMyxcbiAgICAgIDEwOSxcbiAgICAgIDE4MixcbiAgICAgIDI0OCxcbiAgICAgIDEyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjMsXG4gICAgICA1LFxuICAgICAgMjgsXG4gICAgICAyNTUsXG4gICAgICAxMDgsXG4gICAgICAxNDIsXG4gICAgICAyMjEsXG4gICAgICAyMTksXG4gICAgICAyMjUsXG4gICAgICA2LFxuICAgICAgMjM2LFxuICAgICAgMjAwLFxuICAgICAgMTQ0LFxuICAgICAgMjgsXG4gICAgICAxMDEsXG4gICAgICAxMzksXG4gICAgICAxMjcsXG4gICAgICAxMjMsXG4gICAgICAxNzksXG4gICAgICAxNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMldaWk5NV1NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTk0MDYxMDI6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NzY4NTg0ODc2NDU1OToyMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKQ25pUVlRdmJ2cXRRWVlCeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjAxaUZoY1hGcHgraW91ZVRKdUU4clBpVnltVFF5YVZyK0pzdnQwVGtSZ289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWEtEbDRTb3N2L3JBUVRVbUszS0lWU0FlVHp4RkRyRzZzcWNPT2ZDWmQwbjR3NkFnZktTU2hkS3c2cXJYQ09SczdrcVo5OThISWdHZ29XdVdwT04wQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidGw4MHFYZ0Y5S09ZSGlnYjNJQ3c2ZEZyWjczNmw2WTFPY0tMc1RFU3NzVDVpUWxWWmhXb2UyQmJYR2s1SlV6dXlWU2ovaGhIKzRpNTk5TURKdWc5Z1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxOTQwNjEwMjoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjM1MDYxMTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDRmpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNGai5qc29uIjogIntcImtleURhdGFcIjpcImpncDdXSmxXVjBjcGRmcU16R1NkeFN3ZDRaKzczcS9JR0RWOFlMSllOTjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI3MzUzNzYsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
