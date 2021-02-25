const {createCanvas} = require('canvas')
const echarts = require('echarts')

// 引入主题
require('./themes/dark')
require('./themes/infographic')
require('./themes/macarons')
require('./themes/roma')
require('./themes/shine')
require('./themes/vintage')

// 生成图片
function generateImage(options, width, height, theme) {
    console.log("GENERATE IMAGE")
    console.log(`WIDTH: ${width}`)
    console.log(`HEIGHT: ${height}`)
    console.log(`THEME: ${theme}`)
    console.log(`OPTIONS: ${JSON.stringify(options)}`)
    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')
    ctx.font = '12px'
    echarts.setCanvasCreator(() => canvas)
    const chart = echarts.init(canvas, theme)
    options.animation = false
    chart.setOption(options)
    return chart.getDom().toBuffer()
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

