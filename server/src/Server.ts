import * as express from "express";
import { HealthCheck } from './Types'

const server = express();
const port = 8080;

server.get('/health', (_,res) => {
  const check:HealthCheck = { status: 'healthy' }
  res.send(check)
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})