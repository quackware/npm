import { debug } from "https://curtis.land/core/debug.ts";

import source from "./source.json" assert { type: "json" };

const log = debug("list");

export async function list(pathname: string) {
  log(`Processing ${source.url}`);
  const url = source.url;

  const stream = await fetch(url).then((data) => {
    if (data.body == null) {
      throw new Error(`Failed to list ${url}`);
    }
    return data.body;
  });

  const file = await Deno.open(pathname, { write: true, create: true });

  stream.pipeTo(file.writable);
  log(`Piped to ${pathname}`);
}

if (import.meta.main) {
  list(Deno.args[0]).catch(console.error);
}
