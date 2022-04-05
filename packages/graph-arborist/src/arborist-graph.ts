import { Arborist as ArboristBundle } from "./bundle/arborist.bundle.js";
import type {
  ArboristImpl,
  GraphOptions,
  Node,
  Packument,
} from "./bundle/types.ts";

export type { Node };

export interface CreateArboristOptions {
  /** Where we're doing stuff, defaults to cwd */
  path?: string;
  /** Location of cacache */
  cache?: string;
  /** Specifier to packument cache to prevent duplicate registry queries */
  packumentCache?: Map<string, Packument>;
}

export class ArboristGraph {
  #impl: ArboristImpl;

  constructor(options?: CreateArboristOptions) {
    this.#impl = new ArboristBundle(options);
  }

  buildGraph = async (options: GraphOptions) => {
    const node = await this.#impl.buildIdealTree(options);
    return node;
  };
}
