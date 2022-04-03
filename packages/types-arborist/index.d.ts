declare module "@npmcli/arborist" {
  export interface GraphOptions {
    add?: string[];
    rm?: string[];
    saveType?: null | "prod" | "optional" | "dev";
    update?: boolean | { all: boolean } | { [key: string]: boolean };
  }

  export class Arborist {
    loadActual: () => Promise<void>;
    loadVirtual: () => Promise<Node>;
    buildIdealTree: (opts: GraphOptions) => Promise<Node>;
    reify: (opts: unknown) => Promise<Node>;
  }
}
