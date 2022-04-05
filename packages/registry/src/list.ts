import { debug } from "https://curtis.land/deno/core/debug.ts";

const log = debug("list");

export async function list(origin: string, destination: string) {
  const stream = await fetch(origin).then((data) => {
    if (data.body == null) {
      throw new Error(`Failed to list ${origin}`);
    }
    return data.body;
  });

  const file = await Deno.open(destination, { write: true, create: true });

  stream.pipeTo(file.writable);
  log(`Piped to ${destination}`);
}

if (import.meta.main) {
  const [origin, destination] = Deno.args;
  if (!origin || !destination) {
    console.error(`USAGE: ${Deno.mainModule} [origin] [destination]`);
    Deno.exit(1);
  }
  list(origin, destination).catch(console.error);
}
