import * as express from "express";

const server = express();
const port = 8080;

server.get('/health', (_,res) => {
  res.send("Healthy")
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})