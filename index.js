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
    const sort = await rp({ url: 'https://api.avgle.com/v1/categories', json: true })
    if (event.message.text === '有誰') {
      for (let i = 0; i < data.response.collections.length; i++) {
        // movie += data.result[i].original_title
        msg += data.response.collections[i].title + '\n'
      }
    } else if (event.message.text === '分類') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg += sort.response.categories[i].shortname + '\n'
      }
    } else if (event.message.text === 'AV女優') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = sort.response.categories[0].category_url + '\n' + sort.response.categories[0].cover_url
      }
    } else if (event.message.text === '日本AV') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = sort.response.categories[1].category_url + '\n' + sort.response.categories[1].cover_url
      }
    } else if (event.message.text === '無修正') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = sort.response.categories[2].category_url + '\n' + sort.response.categories[2].cover_url
      }
    } else if (event.message.text === '3') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[3].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[3].cover_url,
          previewImageUrl: sort.response.categories[3].cover_url,
        }]

      }
    } else if (event.message.type === 'sticker') {
      msg = [{
        type: 'text',
        text: '不管怎樣，送你一個抱抱'
      }, {
        type: 'sticker',
        packageId: '11537',
        stickerId: '52002737'
      }]
    } else if (event.message.type === 'image') {
      msg = '抱歉，我不能收你的照片:<'
    } else {
      msg = '哈囉尼豪~~ 可以輸入\n1.【分類】查看影片分類，再輸入想要的【分類名稱】查看該分類的網址()，\n2.【有誰】查看有哪些女優，再輸入【女優名稱】查看該女優影片網址。\n謝謝大家<3'
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
