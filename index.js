const TelegramBot = require('node-telegram-bot-api');




const webAppUrl = 'https://ya.ru';




const token = '7924635213:AAGwfuw5QkpAvuLBBQy-0V_r8l5rTadGiYA';



// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});





// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if(text === '/start') {
        await  bot.sendMessage(chatId, 'ХАХАЪААХАХАХАХА ПИСЬКА', {
            reply_markup:{
                inline_keyboard: [
                    [{text: 'АБОБА', web_app: {url: webAppUrl}}]
                ]
            }
        })
  }

});




