# SSR-ECHARTS


用于服务端渲染生成echarts图片。可以使用Get或Post。如果参数较多建议使用POST，通过后端转发buffer。

主题：chalk，essos，halloween，infographic，macarons，purple-passion，roma，romantic，shine，vintage，walden，westeros，wonderland

## Docker部署
环境：Docker

指令：`docker run -d -p 3000:3000 lz1998/ssr-echarts`

## 自己部署
环境：nodejs 12

安装依赖：`npm instsall`

运行方式：`PORT=3000 npm run serve`

发送请求：

METHOD：POST/GET

URL：`http://localhost:3000/`

HEADER：`Content-Type:application/json`

BODY：
```json
{
    "xAxis": {
        "type": "category",
        "data": ["1","1","1","1","1","1","1"]
    },
    "yAxis": {
        "type": "value"
    },
    "series": [{
        "data": [820, 932, 901, 934, 1290, 1330, 1320],
        "type": "line"
    }],
    "theme":"macarons"
}
```

echarts官网：`https://echarts.apache.org/`
