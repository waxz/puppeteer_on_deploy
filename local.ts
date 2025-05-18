import "jsr:@std/dotenv/load";

console.log(Deno.env.get("GREETING")); // "Hello, world."

import app from "./main.tsx";

app.addEventListener("listen", (evt) => {
  console.log(`Listening on http://${evt.hostname ?? "localhost"}:${evt.port}`);
});

await app.listen(":8888");
