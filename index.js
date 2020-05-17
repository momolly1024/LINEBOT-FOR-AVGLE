import linebot from 'linebot'
import dotenv from 'dotenv'
import rp from 'request-promise'

dotenv.config()
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

// 當收到訊息時
bot.on('message', event => {
  let msg = ''
  try {
    const data = rp({
      uri: 'https://api.avgle.com/v1/collections/[1, 250]', json: true
    })
    msg += data.response.collections[0].title
  } catch (error) {
    msg = '發生錯誤'
  }
  event.reply(msg)
  console.log(msg)
})

// 啟動
bot.listen('/', process.env.PORT, () => {
  console.log('機器人已啟動')
})
