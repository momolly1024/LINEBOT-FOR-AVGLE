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
    const data = await rp({ url: 'https://api.avgle.com/v1/collections/[1, 250]', json: true })
    if (event.message.text === '1') {
      for (let i = 0; i < data.response.collections.length; i++) {
        // movie += data.result[i].original_title
        msg += data.response.collections[0].title + '\n'
      }
    } else if (event.message.text === '2') {
      for (let i = 0; i < data.response.collections.length; i++) {
        msg += data.response.collections[1].JSON.stringify(title) + '\n'
      }
    } else {
      msg = '哈囉尼豪~~ \n討厭好難哦阿阿阿阿阿阿\n阿阿阿阿阿~~~~~'
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
