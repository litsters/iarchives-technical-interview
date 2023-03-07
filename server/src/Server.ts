import * as express from "express";

const server = express();

server.use(express.json());

server.get('/health', (_,res) => {
  res.send("Healthy")
})

server.listen(8080, () => {
  console.log(`Server listening on port 8080`);
})