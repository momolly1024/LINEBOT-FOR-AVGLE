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
      uri: 'https://spreadsheets.google.com/feeds/list/1RdfgfU7Qx8D0oO4-rPZrLehVGKIfHhG-tq1-UbR5ohM/1/public/values?alt=json', json: true
    })
    const clientId = userData.event[0].source.uerID
    msg = data.feed.entry[0].gsx$name.$t
  } catch (error) {
    msg = '發生錯誤'
  }
  event.reply(clientId)
  console.log(msg)
  console.log(clientId)
})

// 啟動
bot.listen('/', process.env.PORT, () => {
  console.log('機器人已啟動')
})
