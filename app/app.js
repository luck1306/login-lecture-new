"use strict";
const express = require("express");
const app = express();
const home = require("./src/routes/home");
const bodyParser = require("body-parser");

app.set("views", "./src/views");//MVC V위치 등록
app.set("view engine", "ejs");//View type
app.use(express.static(`${__dirname}/src/public`));// 프론트 js 연결 해주는 미들웨어
app.use(bodyParser.json()); //json 데이터를 parsing 할 수있게 명시
app.use(bodyParser.urlencoded(  {extended : true} ));//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식 되지 않는 문제 해결
app.use("/", home);//라우팅 분리 미들웨어

module.exports = app;