export async function load(origin: string, config: string) {
  console.log(origin, config);
}

if (import.meta.main) {
  const [origin, destination] = Deno.args;
  load(origin, destination).catch(console.error);
}
