/**
 * This file is identical to server/src/Types.ts. If you make a change to the type
 * here you must make an identical change to server/src/Types.ts.
 */

export type TodoItem = {
  key: number;
  done: boolean;
  text: string;
}

export type HealthCheck = {
  status: "healthy" | "unhealthy";
}