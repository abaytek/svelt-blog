import { error, json, text } from "@sveltejs/kit";
/** @type {import('./$types').RequestHandler} */

export async function POST({ request }) {
  const { a, b } = await request.json();
  if (!a) return error(400, "a cannot be empty");
  return json(a + b);
}

/** @type {import('./$types').RequestHandler} */
export async function fallback({ request }) {
  return text(`I caught your ${request.method} request`);
}
