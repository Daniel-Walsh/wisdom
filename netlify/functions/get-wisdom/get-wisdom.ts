import type { Handler } from "@netlify/functions";
import entries from "./entries.json";

export const handler: Handler = async (event, context) => {
  // const { name = "stranger" } = event.queryStringParameters;

  return {
    statusCode: 200,
    body: JSON.stringify(sample(entries)),
    // body: JSON.stringify({
    //   message: `Hello, ${name}!`,
    // }),
  };
};

function sample(arr: Record<string, string>[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// exports.handler = (event, context, callback) => {
//   callback(null, {
//     statusCode: 200,
//     body:       JSON.stringify(sample(entries)),
//   });
// };

// export const handler: Handler = async (event, context) => {
//   const { name = "stranger" } = event.queryStringParameters;

//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: `Hello, ${name}!`,
//     }),
//   };
// };
