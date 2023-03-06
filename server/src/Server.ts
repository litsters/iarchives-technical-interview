import * as express from "express";
import { TodoItem } from './Types'

const server = express();
const port = 8080;

server.get('/health', (_,res) => {
  res.send("Healthy\n")
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})