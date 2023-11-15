const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3060",
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.send("성공");
});
app.get("/serverSideAction", (req, res) => {
  res.send("서버사이드 렌더링 성공");
});

app.listen(3065, () => {
  console.log("서버 실행중");
});
