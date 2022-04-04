export async function hydate(artifactPath: string) {
  const numThreads = navigator.hardwareConcurrency;

  console.log(numThreads, artifactPath, Deno.env.get("RECORD_COUNT"));
}
