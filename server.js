const {createCanvas} = require('canvas')
const echarts = require('echarts')

// 引入主题
require('echarts-themes-js/src/chalk')
require('echarts-themes-js/src/essos')
require('echarts-themes-js/src/halloween')
require('echarts-themes-js/src/infographic')
require('echarts-themes-js/src/macarons')
require('echarts-themes-js/src/purple-passion')
require('echarts-themes-js/src/roma')
require('echarts-themes-js/src/romantic')
require('echarts-themes-js/src/shine')
require('echarts-themes-js/src/vintage')
require('echarts-themes-js/src/walden')
require('echarts-themes-js/src/westeros')
require('echarts-themes-js/src/wonderland')


// 生成图片
function generateImage(options, width, height, theme) {
  console.log("GENERATE IMAGE")
  console.log(`WIDTH: ${width}`)
  console.log(`HEIGHT: ${height}`)
  console.log(`THEME: ${theme}`)
  console.log(`OPTIONS: ${JSON.stringify(options)}`)
  canvas = createCanvas(1024,768)
  canvas.height = height
  canvas.width = width
  ctx = canvas.getContext('2d')
  ctx.font = '12px'
  echarts.setCanvasCreator(() => canvas)
  chart = echarts.init(canvas, theme)
  options.animation = false
  chart.setOption(options)
  buffer = chart.getDom().toBuffer()
  chart.dispose()
  chart = null
  ctx = null
  canvas = null
  return buffer
}

const express = require('express')
const app = express()
app.use(express.json())
const imgController = (req, res) => {
  console.log("RECV REQ")
  let options = req.query.options || req.body
  if (typeof options === 'string') {
    options = JSON.parse(options)
  }
  let width = parseInt(req.query.width || options.width || 1024)
  let height = parseInt(req.query.height || options.height || 768)
  let theme = req.query.theme || options.theme || 'dark'
  res.header("Content-Type", "image/png")
  res.send(generateImage(options, width, height, theme))
}
app.post('/', imgController)
app.get('/', imgController)

const PORT = process.env.PORT || 3000
app.listen(PORT)
console.log("echarts started port:" + PORT)

