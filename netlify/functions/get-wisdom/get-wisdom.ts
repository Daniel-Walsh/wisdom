import type { Handler } from "@netlify/functions";
import entries from "./entries.json";

export const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(sample(entries)),
  };
};

function sample(arr: Record<string, string>[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}
