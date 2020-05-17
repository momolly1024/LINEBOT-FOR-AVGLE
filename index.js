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
bot.on('message', async (event) => {
  let msg = ''
  try {
    const data = await rp({ url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=0d93c386d9d8221cbfa4c29585d53c53&language=zh-tw', json: true })
    if (event.message.text === 'now_playing') {
      for (let i = 0; i < data.results.length; i++) {
        // movie += data.result[i].original_title
        msg += data.results[i].original_title + '\n'
      }
    } else if (event.message.text === '熱映中') {
      for (let i = 0; i < data.results.length; i++) {
        msg += data.results[i].title + '\n'
      }
    } else {
      msg = '哈囉尼豪~~ \n請輸入【now_playing】或【熱映中】，查看近期熱播中的電影！\n好啦還是你想知道【機器人在哪】、【機器人長相】、【滾】、【簡介】(僅顯示前五部電影簡介)、【...】'
    }
  } catch (error) {
    msg = '發生錯誤'
  }
  event.reply(msg)
})

// 啟動
bot.listen('/', process.env.PORT, () => {
  console.log('機器人已啟動')
})
