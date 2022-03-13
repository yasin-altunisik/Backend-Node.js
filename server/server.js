const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log("Bir istek gönderildi.");
  if (url === "/") {
    res.write("Merhaba");
    res.end();
  } else if (url === "/index") {
    res.write("index");
    res.end();
  } else if (url === "/hakkimda") {
    res.write("hakkimda");
    res.end();
  } else if (url === "/iletisim") {
    res.write("iletisim");
    res.end();
  }
});

const port = 5000;
server.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});
