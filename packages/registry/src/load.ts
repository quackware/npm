export async function load(origin: string, config: string) {
  console.log(origin, config);
}

if (import.meta.main) {
  const [origin, config] = Deno.args;
  if (!origin || !config) {
    console.error(`USAGE: ${Deno.mainModule} [origin] [config]`);
    Deno.exit(1);
  }
  load(origin, config).catch(console.error);
}
