// deno-lint-ignore-file no-empty-interface
export interface PackageLockV2 {
  lockfileVersion: 2;
  packages: PackageLockPackages;
  dependencies?: PackageLockDependencies;
}

export interface Package {
  dependencies?: PackageRequires;
  devDependencies?: PackageRequires;
}

export interface PackageLockDependency {
  version: string;
  dev: boolean;
  requires?: PackageRequires;
  dependencies?: PackageLockDependencies;
}

export interface PackageLockDependencies {
  [name: string]: PackageLockDependency;
}

export interface PackageRequires {
  [name: string]: string;
}

export interface PackageLockPackages {
  [path: string]: PackageLockPackage;
}

export interface PackageLockPackage {}

export interface Node {
  toJSON: () => ArboristNode;
  errors: unknown[];
  sourceReference: null;
  name: string;
  path: string;
  realpath: string;
  resolved: null;
  integrity: null;
  hasShrinkwrap: boolean;
  legacyPeerDeps: boolean;
  children: Map<string, Node>;
  fsChildren: Set<string>;
  inventory: Map<string, Node>;
  tops: Set<string>;
  linksIn: Set<string>;
  dev: boolean;
  optional: boolean;
  devOptional: boolean;
  peer: boolean;
  extraneous: boolean;
  dummy: boolean;
  edgesIn: Set<string>;
  edgesOut: Map<string, Node>;
  location: `node_modules/${string}`;
}

export type NodeType = "prod" | "dev";

export interface ArboristNode {
  name: string;
  location: string;
  path: string;
  isProjectRoot: boolean;
  edgesOut: Map<string, { type: NodeType; name: string; spec: string; to: string }>;
  edgesIn: Set<string>;
  children: Map<string, ArboristNode>;
}

export interface GraphOptions {
  add?: string[];
  rm?: string[];
  saveType?: null | "prod" | "optional" | "dev";
  update?: boolean | { all: boolean } | { [key: string]: boolean };
}

export interface ArboristImpl {
  loadActual: () => Promise<void>;
  loadVirtual: () => Promise<Node>;
  buildIdealTree: (opts: GraphOptions) => Promise<Node>;
  reify: (opts: unknown) => Promise<Node>;
}

export interface Person {
  name: string;
  email?: string | undefined;
  url?: string | undefined;
}

/**
 * Properties that can appear on both packuments and manifests. These usually
 * only appear when requesting with `fullMetadata = true`.
 */
export interface CommonMetadata {
  author?: Person | undefined;
  bugs?:
    | {
        url?: string | undefined;
        email?: string | undefined;
      }
    | undefined;
  contributors?: Person[] | undefined;
  homepage?: string | undefined;
  keywords?: string[] | undefined;
  license?: string | undefined;
  maintainers?: Person[] | undefined;
  readme?: string | undefined;
  readmeFilename?: string | undefined;
  repository?:
    | {
        type?: string | undefined;
        url?: string | undefined;
        directory?: string | undefined;
      }
    | undefined;
  users?: Record<string, boolean> | undefined;
}

export interface PackageDist {
  /**
   * The url to the associated package artifact. (Copied by Pacote to
   * `manifest._resolved`.)
   */
  tarball: string;
  /**
   * The integrity SRI string for the artifact. This may not be present for
   * older packages on the npm registry. (Copied by Pacote to
   * `manifest._integrity`.)
   */
  integrity?: string | undefined;
  /**
   * Legacy integrity value. Hexadecimal-encoded sha1 hash. (Converted to an
   * SRI string and copied by Pacote to `manifest._integrity` when
   * `dist.integrity` is not present.)
   */
  shasum?: string | undefined;
  /**
   * Number of files in the tarball.
   */
  fileCount?: number | undefined;
  /**
   * Size on disk of the package when unpacked.
   */
  unpackedSize?: number | undefined;
  /**
   * A signature of the package by the
   * [`npmregistry`](https://keybase.io/npmregistry) Keybase account.
   * (Obviously only present for packages published to
   * https://registry.npmjs.org.)
   */
  "npm-signature"?: string | undefined;
}

/**
 * A `manifest` is similar to a `package.json` file. However, it has a few
 * pieces of extra metadata, and sometimes lacks metadata that is inessential to
 * package installation.
 */
export interface Manifest extends CommonMetadata {
  name: string;
  version: string;
  dist: PackageDist;

  // These properties usually appear in all requests.
  dependencies?: Record<string, string> | undefined;
  optionalDependencies?: Record<string, string> | undefined;
  devDependencies?: Record<string, string> | undefined;
  peerDependencies?: Record<string, string> | undefined;
  bundledDependencies?: false | string[] | undefined;

  bin?: Record<string, string> | undefined;
  directories?: Record<string, string> | undefined;
  engines?: Record<string, string> | undefined;

  // These properties usually only appear when fullMetadata = true.
  browser?: string | undefined;
  config?: Record<string, unknown> | undefined;
  cpu?: string[] | undefined;
  description?: string | undefined;
  files?: string[] | undefined;
  main?: string | undefined;
  man?: string | string[] | undefined;
  os?: string[] | undefined;
  publishConfig?: Record<string, unknown> | undefined;
  scripts?: Record<string, string> | undefined;

  _id?: string | undefined;
  _nodeVersion?: string | undefined;
  _npmVersion?: string | undefined;
  _npmUser?: Person | undefined;

  // Non-standard properties from package.json may also appear.
  [key: string]: unknown;
}

/**
 * A packument is the top-level package document that lists the set of manifests
 * for available versions for a package.
 *
 * When a packument is fetched with `accept: application/vnd.npm.install-v1+json`
 * in the HTTP headers, only the most minimum necessary metadata is returned.
 * Additional metadata is returned when fetched with only `accept: application/json`.
 */
export interface Packument extends CommonMetadata {
  name: string;
  /**
   * An object where each key is a version, and each value is the manifest for
   * that version.
   */
  versions: Record<string, Manifest>;
  /**
   * An object mapping dist-tags to version numbers. This is how `foo@latest`
   * gets turned into `foo@1.2.3`.
   */
  "dist-tags": { latest: string } & Record<string, string>;
  /**
   * In the full packument, an object mapping version numbers to publication
   * times, for the `opts.before` functionality.
   */
  time?:
    | (Record<string, string> & {
        created: string;
        modified: string;
      })
    | undefined;

  // Non-standard properties may also appear when fullMetadata = true.
  [key: string]: unknown;
}

export interface FetchResult {
  /**
   * A normalized form of the spec passed in as an argument.
   */
  from: string;
  /**
   * The tarball url or file path where the package artifact can be found.
   */
  resolved: string;
  /**
   * The integrity value for the package artifact.
   */
  integrity: string;
}
