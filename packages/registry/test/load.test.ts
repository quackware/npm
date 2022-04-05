import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.133.0/testing/asserts.ts";

Deno.test("load", async (t) => {
  await t.step("running directly requires cmd line args", async () => {
    const modulePath = new URL("../src/load.ts", import.meta.url).pathname;
    const p = Deno.run({
      cmd: [Deno.execPath(), "run", "-A", modulePath],
      stderr: "piped",
    });

    const [status, stderr] = await Promise.all([p.status(), p.stderrOutput()]);
    p.close();

    assertEquals(status.success, false);
    assertEquals(status.code, 1);

    const errmsg = new TextDecoder().decode(stderr).trim();
    assert(errmsg.endsWith("[origin] [config]"));
  });
});
