# SSR-ECHARTS

用于服务端渲染生成echarts图片。可以使用Get或Post。如果是GET需要UrlEncode。如果参数较多建议使用POST，通过后端转发buffer。

主题：light，dark，chalk，essos，halloween，infographic，macarons，purple-passion，roma，romantic，shine，vintage，walden，westeros，wonderland

## Demo

DEMO：[链接](http://echarts.lz1998.xin/?options=%7b%22theme%22%3a%22light%22%2c%22tooltip%22%3a%7b%22trigger%22%3a%22item%22%2c%22formatter%22%3a%22%7ba%7d+%3cbr%2f%3e%7bb%7d%3a+%7bc%7d+(%7bd%7d%25)%22%7d%2c%22legend%22%3a%7b%22orient%22%3a%22vertical%22%2c%22left%22%3a10%2c%22data%22%3a%5b%22%e7%9b%b4%e8%be%be%22%2c%22%e8%90%a5%e9%94%80%e5%b9%bf%e5%91%8a%22%2c%22%e6%90%9c%e7%b4%a2%e5%bc%95%e6%93%8e%22%2c%22%e9%82%ae%e4%bb%b6%e8%90%a5%e9%94%80%22%2c%22%e8%81%94%e7%9b%9f%e5%b9%bf%e5%91%8a%22%2c%22%e8%a7%86%e9%a2%91%e5%b9%bf%e5%91%8a%22%2c%22%e7%99%be%e5%ba%a6%22%2c%22%e8%b0%b7%e6%ad%8c%22%2c%22%e5%bf%85%e5%ba%94%22%2c%22%e5%85%b6%e4%bb%96%22%5d%7d%2c%22series%22%3a%5b%7b%22name%22%3a%22%e8%ae%bf%e9%97%ae%e6%9d%a5%e6%ba%90%22%2c%22type%22%3a%22pie%22%2c%22selectedMode%22%3a%22single%22%2c%22radius%22%3a%5b0%2c%2230%25%22%5d%2c%22label%22%3a%7b%22position%22%3a%22inner%22%7d%2c%22labelLine%22%3a%7b%22show%22%3afalse%7d%2c%22data%22%3a%5b%7b%22value%22%3a335%2c%22name%22%3a%22%e7%9b%b4%e8%be%be%22%2c%22selected%22%3atrue%7d%2c%7b%22value%22%3a679%2c%22name%22%3a%22%e8%90%a5%e9%94%80%e5%b9%bf%e5%91%8a%22%7d%2c%7b%22value%22%3a1548%2c%22name%22%3a%22%e6%90%9c%e7%b4%a2%e5%bc%95%e6%93%8e%22%7d%5d%7d%2c%7b%22name%22%3a%22%e8%ae%bf%e9%97%ae%e6%9d%a5%e6%ba%90%22%2c%22type%22%3a%22pie%22%2c%22radius%22%3a%5b%2240%25%22%2c%2255%25%22%5d%2c%22label%22%3a%7b%22formatter%22%3a%22%7ba%7c%7ba%7d%7d%7babg%7c%7d%5cn%7bhr%7c%7d%5cn++%7bb%7c%7bb%7d%ef%bc%9a%7d%7bc%7d++%7bper%7c%7bd%7d%25%7d++%22%2c%22backgroundColor%22%3a%22%23eee%22%2c%22borderColor%22%3a%22%23aaa%22%2c%22borderWidth%22%3a1%2c%22borderRadius%22%3a4%2c%22rich%22%3a%7b%22a%22%3a%7b%22color%22%3a%22%23999%22%2c%22lineHeight%22%3a22%2c%22align%22%3a%22center%22%7d%2c%22hr%22%3a%7b%22borderColor%22%3a%22%23aaa%22%2c%22width%22%3a%22100%25%22%2c%22borderWidth%22%3a0.5%2c%22height%22%3a0%7d%2c%22b%22%3a%7b%22fontSize%22%3a16%2c%22lineHeight%22%3a33%7d%2c%22per%22%3a%7b%22color%22%3a%22%23eee%22%2c%22backgroundColor%22%3a%22%23334455%22%2c%22padding%22%3a%5b2%2c4%5d%2c%22borderRadius%22%3a2%7d%7d%7d%2c%22data%22%3a%5b%7b%22value%22%3a335%2c%22name%22%3a%22%e7%9b%b4%e8%be%be%22%7d%2c%7b%22value%22%3a310%2c%22name%22%3a%22%e9%82%ae%e4%bb%b6%e8%90%a5%e9%94%80%22%7d%2c%7b%22value%22%3a234%2c%22name%22%3a%22%e8%81%94%e7%9b%9f%e5%b9%bf%e5%91%8a%22%7d%2c%7b%22value%22%3a135%2c%22name%22%3a%22%e8%a7%86%e9%a2%91%e5%b9%bf%e5%91%8a%22%7d%2c%7b%22value%22%3a1048%2c%22name%22%3a%22%e7%99%be%e5%ba%a6%22%7d%2c%7b%22value%22%3a251%2c%22name%22%3a%22%e8%b0%b7%e6%ad%8c%22%7d%2c%7b%22value%22%3a147%2c%22name%22%3a%22%e5%bf%85%e5%ba%94%22%7d%2c%7b%22value%22%3a102%2c%22name%22%3a%22%e5%85%b6%e4%bb%96%22%7d%5d%7d%5d%7d)

建议自己部署，不要用我的，服务器有**QPS<5**限制，不保证一直开启。

![图片](http://echarts.lz1998.xin/?options=%7b%22theme%22%3a%22light%22%2c%22tooltip%22%3a%7b%22trigger%22%3a%22item%22%2c%22formatter%22%3a%22%7ba%7d+%3cbr%2f%3e%7bb%7d%3a+%7bc%7d+(%7bd%7d%25)%22%7d%2c%22legend%22%3a%7b%22orient%22%3a%22vertical%22%2c%22left%22%3a10%2c%22data%22%3a%5b%22%e7%9b%b4%e8%be%be%22%2c%22%e8%90%a5%e9%94%80%e5%b9%bf%e5%91%8a%22%2c%22%e6%90%9c%e7%b4%a2%e5%bc%95%e6%93%8e%22%2c%22%e9%82%ae%e4%bb%b6%e8%90%a5%e9%94%80%22%2c%22%e8%81%94%e7%9b%9f%e5%b9%bf%e5%91%8a%22%2c%22%e8%a7%86%e9%a2%91%e5%b9%bf%e5%91%8a%22%2c%22%e7%99%be%e5%ba%a6%22%2c%22%e8%b0%b7%e6%ad%8c%22%2c%22%e5%bf%85%e5%ba%94%22%2c%22%e5%85%b6%e4%bb%96%22%5d%7d%2c%22series%22%3a%5b%7b%22name%22%3a%22%e8%ae%bf%e9%97%ae%e6%9d%a5%e6%ba%90%22%2c%22type%22%3a%22pie%22%2c%22selectedMode%22%3a%22single%22%2c%22radius%22%3a%5b0%2c%2230%25%22%5d%2c%22label%22%3a%7b%22position%22%3a%22inner%22%7d%2c%22labelLine%22%3a%7b%22show%22%3afalse%7d%2c%22data%22%3a%5b%7b%22value%22%3a335%2c%22name%22%3a%22%e7%9b%b4%e8%be%be%22%2c%22selected%22%3atrue%7d%2c%7b%22value%22%3a679%2c%22name%22%3a%22%e8%90%a5%e9%94%80%e5%b9%bf%e5%91%8a%22%7d%2c%7b%22value%22%3a1548%2c%22name%22%3a%22%e6%90%9c%e7%b4%a2%e5%bc%95%e6%93%8e%22%7d%5d%7d%2c%7b%22name%22%3a%22%e8%ae%bf%e9%97%ae%e6%9d%a5%e6%ba%90%22%2c%22type%22%3a%22pie%22%2c%22radius%22%3a%5b%2240%25%22%2c%2255%25%22%5d%2c%22label%22%3a%7b%22formatter%22%3a%22%7ba%7c%7ba%7d%7d%7babg%7c%7d%5cn%7bhr%7c%7d%5cn++%7bb%7c%7bb%7d%ef%bc%9a%7d%7bc%7d++%7bper%7c%7bd%7d%25%7d++%22%2c%22backgroundColor%22%3a%22%23eee%22%2c%22borderColor%22%3a%22%23aaa%22%2c%22borderWidth%22%3a1%2c%22borderRadius%22%3a4%2c%22rich%22%3a%7b%22a%22%3a%7b%22color%22%3a%22%23999%22%2c%22lineHeight%22%3a22%2c%22align%22%3a%22center%22%7d%2c%22hr%22%3a%7b%22borderColor%22%3a%22%23aaa%22%2c%22width%22%3a%22100%25%22%2c%22borderWidth%22%3a0.5%2c%22height%22%3a0%7d%2c%22b%22%3a%7b%22fontSize%22%3a16%2c%22lineHeight%22%3a33%7d%2c%22per%22%3a%7b%22color%22%3a%22%23eee%22%2c%22backgroundColor%22%3a%22%23334455%22%2c%22padding%22%3a%5b2%2c4%5d%2c%22borderRadius%22%3a2%7d%7d%7d%2c%22data%22%3a%5b%7b%22value%22%3a335%2c%22name%22%3a%22%e7%9b%b4%e8%be%be%22%7d%2c%7b%22value%22%3a310%2c%22name%22%3a%22%e9%82%ae%e4%bb%b6%e8%90%a5%e9%94%80%22%7d%2c%7b%22value%22%3a234%2c%22name%22%3a%22%e8%81%94%e7%9b%9f%e5%b9%bf%e5%91%8a%22%7d%2c%7b%22value%22%3a135%2c%22name%22%3a%22%e8%a7%86%e9%a2%91%e5%b9%bf%e5%91%8a%22%7d%2c%7b%22value%22%3a1048%2c%22name%22%3a%22%e7%99%be%e5%ba%a6%22%7d%2c%7b%22value%22%3a251%2c%22name%22%3a%22%e8%b0%b7%e6%ad%8c%22%7d%2c%7b%22value%22%3a147%2c%22name%22%3a%22%e5%bf%85%e5%ba%94%22%7d%2c%7b%22value%22%3a102%2c%22name%22%3a%22%e5%85%b6%e4%bb%96%22%7d%5d%7d%5d%7d)

## Docker部署

环境：Docker

指令：`docker run -d -p 3000:3000 lz1998/ssr-echarts`

## 自己部署

环境：nodejs 12

安装依赖：`npm instsall`

运行方式：`PORT=3000 npm run serve`

## 使用说明

发送请求：

METHOD：POST/GET

URL：`http://localhost:3000/`

HEADER：`Content-Type:application/json`

BODY：
```json
{
    "theme": "macarons",
    "width": 800,
    "height": 600,
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
    }]
}
```

echarts官网：`https://echarts.apache.org/`
