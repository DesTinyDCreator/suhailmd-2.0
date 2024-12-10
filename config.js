const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349023221164";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""  // PUT your SESSION_ID SUHAIL_14_58_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjksXG4gICAgICAgIDM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDY2LFxuICAgICAgICA3NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEsXG4gICAgICAgIDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDgzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDkwLFxuICAgICAgICAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDg2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDc1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA4MixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDg2LFxuICAgICAgICA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDU5LFxuICAgICAgICA4NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzcsXG4gICAgICAgIDM0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDksXG4gICAgICAgIDM1LFxuICAgICAgICA2NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcxLFxuICAgICAgICA3NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICA3NixcbiAgICAgICAgMTEzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyLFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDg5LFxuICAgICAgICA2MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDUxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDg3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc1LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgNixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDg4LFxuICAgICAgICA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzksXG4gICAgICAgIDE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMixcbiAgICAgICAgMjE5LFxuICAgICAgICA4MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDYyLFxuICAgICAgICA0MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxLFxuICAgICAgICA2MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExLFxuICAgICAgICA3NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiN2MvT2ZSNDNGM3V0TnZaZjNNTnZjQmxtVEhrUkdXY3I3WDhTTFNTUUxGdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDIzMjIxMTY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0NEM5Q0JFRkFDN0JDMEZGNUVDNTNGRjIxRkE2QkNGNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM4NDI2ODNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDIzMjIxMTY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NDg0MUQ4QTlCM0I0QjQ1RTI5MEY0RUQxOUMzODNDMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM4NDI2ODNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidlJGTkRXRGdTWi1ZZnQzbG9PVHN0d1wiLFxuICBcInBob25lSWRcIjogXCI4YzU4OWJlYS1lZWJiLTQ2NTEtYjQ2Yi1kYThjMTZlNTU4NjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA1LFxuICAgICAgMTY1LFxuICAgICAgMTYxLFxuICAgICAgNjksXG4gICAgICA4LFxuICAgICAgMTksXG4gICAgICAyMTMsXG4gICAgICAxOTYsXG4gICAgICAxOTUsXG4gICAgICAxMDcsXG4gICAgICAyMjUsXG4gICAgICAyMTAsXG4gICAgICAyNTUsXG4gICAgICAyMzksXG4gICAgICAxODUsXG4gICAgICAxODcsXG4gICAgICAyNDcsXG4gICAgICAxLFxuICAgICAgMzgsXG4gICAgICAxMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjgsXG4gICAgICA0LFxuICAgICAgODEsXG4gICAgICA1NCxcbiAgICAgIDI0NCxcbiAgICAgIDEyNyxcbiAgICAgIDE2MCxcbiAgICAgIDE5NCxcbiAgICAgIDU2LFxuICAgICAgMTk4LFxuICAgICAgODUsXG4gICAgICA2OSxcbiAgICAgIDIzOSxcbiAgICAgIDEwNyxcbiAgICAgIDE3NyxcbiAgICAgIDEzNCxcbiAgICAgIDE4NSxcbiAgICAgIDI0NixcbiAgICAgIDE2OCxcbiAgICAgIDUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNYWjlXNzdFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDIzMjIxMTY0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM2MTQyNTM1NzI5MzI2OjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lxYTFPQUZFUEt0NGJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV21vVnBlQUxYZ1NxNldMcWY0ZlR5cXYrL3BUcXl1ZnVFQy90NmtYSU9DND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXU1Z3Y0tTNTcvNVRUcWZkYXJQaVViZWR0c2FsdWRpTjg4d3oxWSszSE9MYk9JUUhUT2xlM1QyQ1R4a2lVb0RmUC8zV1dLTGo5ci84VGJYUFQ3SlVDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCZ3ppTlBqd3N2Ump5UnpXdkFmUTNDc05zTC93KzBBb2l0S2V2VWpxWXpBYmNqSk1oa0svMURFeVo0Y2Zlemw2TU5UN0RmMEhrRkk0M042Yk1QNTBqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDIzMjIxMTY0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM4NDI2NzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFR3FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVHcS5qc29uIjogIntcImtleURhdGFcIjpcIllXMGJpOXc2N0NKQ1dVWGxUbVhmYS80VG4zWGozSmxXY21Zd1M1WHZVRDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU0NDg4MzQ2NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzODQyNjgyNTYxXCJ9Igp9


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
