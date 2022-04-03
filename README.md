# @quackware/npm

A monorepo containing a collection of useful npm related scripts, tools, actions, etc.

This includes interactions both with the [main npm registry](https://registry.npmjs.org) and 3rd party CDNs like [skypack](https://skypack.dev) and [esm.sh](https://esm.sh).

## Structure

This is a mixed Deno and Node.js monorepo which only really works with the provided [settings.json](./.vscode/settings.json).

### [modules](./modules/)

Contains all the `Deno` specific code

### [packages](./packages/)

Contains all the `Node.js` specific code

## License

MIT
