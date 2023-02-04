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
    const recommend = await rp({ url: 'https://api.avgle.com/v1/videos/[1, 250]', json: true })

    if (event.message.text === '有誰') {
      for (let i = 0; i < data.response.collections.length; i++) {
        msg += data.response.collections[i].title + '\n'
      }
    } else if (event.message.text === '三上悠亜') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '高橋しょう子') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '波多野結衣') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '橋本ありな') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '椎名そら') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '上原亜衣') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '丘咲エミリ') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '大槻ひびき') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '凰かなめ') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '愛音まりあ') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '栄川乃亜') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '佐々木あき') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '篠田あゆみ') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '有賀ゆあ') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '水野朝陽') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '吉沢明歩') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '紗倉まな') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '姫川ゆうな') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '西川ゆい') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === 'AIKA') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '小西悠') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '香椎りあ') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === 'マンコ図鑑') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === 'ミラー号') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '麻生希') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '葉山瞳') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '飛鳥りん') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === 'RION') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '椎名ゆな') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === 'JULIA') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '天海つばさ') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === 'あやみ旬果') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '若菜奈央') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === 'みほの') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '碧しの') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '麻里梨夏') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '北山かんな') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '篠崎みお') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '希崎ジェシカ') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '宮崎あや') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === 'S-Cute') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '259LUXU') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '折原ほのか') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '羽田真里') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '小向美奈子') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '二階堂ゆり') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '三島奈津子') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '江波りゅう') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '青山未来') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '朝桐光') {
      let name = event.message.text;
      msg = `https://avgle.com/search/videos/${name}`
    } else if (event.message.text === '推薦') {
      const rand = Math.floor((Math.random() * recommend.response.videos.length));
      for (let i = 0; i < recommend.response.videos.length; i++) {
        msg = [{
          type: 'text',
          text: recommend.response.videos[rand].title + '\n'
        }, {
          type: 'text',
          text: recommend.response.videos[rand].video_url + '\n'
        }]

      }
    } else if (event.message.text === '分類') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg += sort.response.categories[i].shortname + '\n'
      }
    } else if (event.message.text === 'AV女優') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[0].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[0].cover_url,
          previewImageUrl: sort.response.categories[0].cover_url,
        }]
      }
    } else if (event.message.text === '日本AV') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[1].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[1].cover_url,
          previewImageUrl: sort.response.categories[1].cover_url,
        }]
      }
    } else if (event.message.text === '無修正') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[2].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[2].cover_url,
          previewImageUrl: sort.response.categories[2].cover_url,
        }]
      }
    } else if (event.message.text === '少女') {
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
    } else if (event.message.text === '素人') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[4].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[4].cover_url,
          previewImageUrl: sort.response.categories[4].cover_url,
        }]
      }
    } else if (event.message.text === 'Anal') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[5].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[5].cover_url,
          previewImageUrl: sort.response.categories[5].cover_url,
        }]
      }
    } else if (event.message.text === '巨乳') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[6].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[6].cover_url,
          previewImageUrl: sort.response.categories[6].cover_url,
        }]
      }
    } else if (event.message.text === 'Cosplay') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[7].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[7].cover_url,
          previewImageUrl: sort.response.categories[7].cover_url,
        }]
      }
    } else if (event.message.text === '校生') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[8].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[8].cover_url,
          previewImageUrl: sort.response.categories[8].cover_url,
        }]
      }
    } else if (event.message.text === '人妻') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[9].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[9].cover_url,
          previewImageUrl: sort.response.categories[9].cover_url,
        }]
      }
    } else if (event.message.text === '熟女') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[10].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[10].cover_url,
          previewImageUrl: sort.response.categories[10].cover_url,
        }]
      }
    } else if (event.message.text === 'SM') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[11].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[11].cover_url,
          previewImageUrl: sort.response.categories[11].cover_url,
        }]
      }
    } else if (event.message.text === '中國') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[12].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[12].cover_url,
          previewImageUrl: sort.response.categories[12].cover_url,
        }]
      }
    } else if (event.message.text === '香港') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[13].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[13].cover_url,
          previewImageUrl: sort.response.categories[13].cover_url,
        }]
      }
    } else if (event.message.text === '日本') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[14].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[14].cover_url,
          previewImageUrl: sort.response.categories[14].cover_url,
        }]
      }
    } else if (event.message.text === '韓國') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[15].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[15].cover_url,
          previewImageUrl: sort.response.categories[15].cover_url,
        }]
      }
    } else if (event.message.text === '台灣') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[16].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[16].cover_url,
          previewImageUrl: sort.response.categories[16].cover_url,
        }]
      }
    } else if (event.message.text === '亞洲') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[17].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[17].cover_url,
          previewImageUrl: sort.response.categories[17].cover_url,
        }]
      }
    } else if (event.message.text === '金髪') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[18].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[18].cover_url,
          previewImageUrl: sort.response.categories[18].cover_url,
        }]
      }
    } else if (event.message.text === '3D') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[19].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[19].cover_url,
          previewImageUrl: sort.response.categories[19].cover_url,
        }]
      }
    } else if (event.message.text === 'VR') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[20].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[20].cover_url,
          previewImageUrl: sort.response.categories[20].cover_url,
        }]
      }
    } else if (event.message.text === '偶像') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[21].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[21].cover_url,
          previewImageUrl: sort.response.categories[21].cover_url,
        }]
      }
    } else if (event.message.text === '映画') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[22].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[22].cover_url,
          previewImageUrl: sort.response.categories[22].cover_url,
        }]
      }
    } else if (event.message.text === 'Anime') {
      for (let i = 0; i < sort.response.categories.length; i++) {
        msg = [{
          type: 'text',
          text: sort.response.categories[23].category_url,
        }, {
          type: 'image',
          originalContentUrl: sort.response.categories[23].cover_url,
          previewImageUrl: sort.response.categories[23].cover_url,
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
      msg = '哈囉你好~~ 可以輸入\n1. 【分類】查看影片分類，\n再輸入想要的【分類名稱】查看該分類的網址，\n2. 【有誰】查看有哪些女優，\n再輸入【女優名稱】查看該女優影片網址，\n 3. 【推薦】查看隨機推薦的一部片。\n謝謝大家<3'
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
