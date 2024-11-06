
import TelegramBot from 'node-telegram-bot-api';
import express from 'express';


const app = express();
const webAppUrl = 'https://uwu-abobiki.netlify.app/';

import Aboba from './func.js';



const work_func = new Aboba();


const token = '7924635213:AAGwfuw5QkpAvuLBBQy-0V_r8l5rTadGiYA';

app.use(express.json());


// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});


//Express
// app.get("/", work_func.main_page);
app.post("/register", work_func.create);
  






//Bot Telegram
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if(text === '/start') {
        await  bot.sendMessage(chatId, 'ХАХАЪААХАХАХАХА ПИСЬКА', {
            reply_markup:{
                inline_keyboard: [
                    [{text: 'Text', web_app: {url: webAppUrl}}]
                ]
            }
        })
  }

});




const port = 8000;
app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server running on port ${port}, Ссылка : localhost:${port}`);
});

