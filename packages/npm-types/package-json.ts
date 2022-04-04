export interface PackageJSON {
  author?: PersonObject | string;
  bin?: { [key: string]: string } | string;
  /**
   * The url to your project's issue tracker and / or the email address to which issues should
   * be reported. These are helpful for people who encounter issues with your package.
   */
  bugs?: PurpleBugs | string;
  /**
   * Array of package names that will be bundled when publishing the package.
   */
  bundledDependencies?: string[] | boolean;
  /**
   * DEPRECATED: This field is honored, but "bundledDependencies" is the correct field name.
   */
  bundleDependencies?: string[] | boolean;
  /**
   * A 'config' hash can be used to set configuration parameters used in package scripts that
   * persist across upgrades.
   */
  config?: { [key: string]: any };
  /**
   * A list of people who contributed to this package.
   */
  contributors?: Array<PersonObject | string>;
  /**
   * Specify that your code only runs on certain cpu architectures.
   */
  cpu?: string[];
  dependencies?: { [key: string]: string };
  /**
   * This helps people discover your package, as it's listed in 'npm search'.
   */
  description?: string;
  devDependencies?: { [key: string]: string };
  directories?: PackageJSONDirectories;
  dist?: PackageJSONDist;
  engines?: PackageJSONEngines;
  engineStrict?: boolean;
  /**
   * A module ID with untranspiled code that is the primary entry point to your program.
   */
  esnext?: PurpleEsnext | string;
  /**
   * The "exports" field is used to restrict external access to non-exported module files,
   * also enables a module to import itself using "name".
   */
  exports?:
    | Array<PackageExportsEntryPackageExportsEntryObject | null | string>
    | PurplePackageExportsEntryObject
    | null
    | string;
  /**
   * The 'files' field is an array of files to include in your project. If you name a folder
   * in the array, then it will also include the files inside that folder.
   */
  files?: string[];
  /**
   * The url to the project homepage.
   */
  homepage?: string;
  jspm?: JSONSchemaForNPMPackageJSONFiles;
  /**
   * This helps people discover your package as it's listed in 'npm search'.
   */
  keywords?: string[];
  /**
   * You should specify a license for your package so that people know how they are permitted
   * to use it, and any restrictions you're placing on it.
   */
  license?: string;
  /**
   * DEPRECATED: Instead, use SPDX expressions, like this: { "license": "ISC" } or {
   * "license": "(MIT OR Apache-2.0)" } see:
   * 'https://docs.npmjs.com/files/package.json#license'.
   */
  licenses?: PackageJSONLicense[];
  /**
   * The main field is a module ID that is the primary entry point to your program.
   */
  main?: string;
  /**
   * A list of people who maintains this package.
   */
  maintainers?: Array<PersonObject | string>;
  /**
   * Specify either a single file or an array of filenames to put in place for the man program
   * to find.
   */
  man?: string[] | string;
  /**
   * An ECMAScript module ID that is the primary entry point to your program.
   */
  module?: string;
  /**
   * The name of the package.
   */
  name: string;
  optionalDependencies?: { [key: string]: string };
  /**
   * Specify which operating systems your module will run on.
   */
  os?: string[];
  /**
   * Defines which package manager is expected to be used when working on the current project.
   * This field is currently experimental and needs to be opted-in; see
   * https://nodejs.org/api/corepack.html
   */
  packageManager?: string;
  peerDependencies?: { [key: string]: string };
  /**
   * When a user installs your package, warnings are emitted if packages specified in
   * "peerDependencies" are not already installed. The "peerDependenciesMeta" field serves to
   * provide more information on how your peer dependencies are utilized. Most commonly, it
   * allows peer dependencies to be marked as optional. Metadata for this field is specified
   * with a simple hash of the package name to a metadata object.
   */
  peerDependenciesMeta?: { [key: string]: PackageJSONPeerDependenciesMeta };
  /**
   * DEPRECATED: This option used to trigger an npm warning, but it will no longer warn. It is
   * purely there for informational purposes. It is now recommended that you install any
   * binaries as local devDependencies wherever possible.
   */
  preferGlobal?: boolean;
  /**
   * If set to true, then npm will refuse to publish it.
   */
  private?: boolean | PrivateEnum;
  publishConfig?: PackageJSONPublishConfig;
  readme?: string;
  /**
   * Specify the place where your code lives. This is helpful for people who want to
   * contribute.
   */
  repository?: FluffyRepository | string;
  /**
   * Resolutions is used to support selective version resolutions, which lets you define
   * custom package versions or ranges inside your dependencies. See:
   * https://classic.yarnpkg.com/en/docs/selective-version-resolutions
   */
  resolutions?: { [key: string]: any };
  /**
   * The 'scripts' member is an object hash of script commands that are run at various times
   * in the lifecycle of your package. The key is the lifecycle event, and the value is the
   * command to run at that point.
   */
  scripts?: PackageJSONScripts;
  /**
   * When set to "module", the type field allows a package to specify all .js files within are
   * ES modules. If the "type" field is omitted or set to "commonjs", all .js files are
   * treated as CommonJS.
   */
  type?: Type;
  /**
   * Set the types property to point to your bundled declaration file.
   */
  types?: string;
  /**
   * The "typesVersions" field is used since TypeScript 3.1 to support features that were only
   * made available in newer TypeScript versions.
   */
  typesVersions?: { [key: string]: PackageJSONTypesVersion };
  /**
   * Note that the "typings" field is synonymous with "types", and could be used as well.
   */
  typings?: string;
  /**
   * Version must be parseable by node-semver, which is bundled with npm as a dependency.
   */
  version?: string;
  /**
   * Allows packages within a directory to depend on one another using direct linking of local
   * files. Additionally, dependencies within a workspace are hoisted to the workspace root
   * when possible to reduce duplication. Note: It's also a good idea to set "private" to true
   * when using this feature.
   */
  workspaces?: string[] | FluffyWorkspaces;
}

export interface PersonObject {
  email?: string;
  name: string;
  url?: string;
}

export interface PurpleBugs {
  /**
   * The email address to which issues should be reported.
   */
  email?: string;
  /**
   * The url to your project's issue tracker.
   */
  url?: string;
}

export interface PackageJSONDirectories {
  /**
   * If you specify a 'bin' directory, then all the files in that folder will be used as the
   * 'bin' hash.
   */
  bin?: string;
  /**
   * Put markdown files in here. Eventually, these will be displayed nicely, maybe, someday.
   */
  doc?: string;
  /**
   * Put example scripts in here. Someday, it might be exposed in some clever way.
   */
  example?: string;
  /**
   * Tell people where the bulk of your library is. Nothing special is done with the lib
   * folder in any way, but it's useful meta info.
   */
  lib?: string;
  /**
   * A folder that is full of man pages. Sugar to generate a 'man' array by walking the folder.
   */
  man?: string;
  test?: string;
}

export interface PackageJSONDist {
  shasum?: string;
  tarball?: string;
}

export interface PackageJSONEngines {
  node?: string;
}

export interface PurpleEsnext {
  browser?: string;
  main?: string;
}

/**
 * Used to specify conditional exports, note that Conditional exports are unsupported in
 * older environments, so it's recommended to use the fallback array option if support for
 * those environments is a concern.
 *
 * The module path that is resolved when the module specifier matches "name", shadows the
 * "main" field.
 */
export interface PackageExportsEntryPackageExportsEntryObject {
  /**
   * The module path that is resolved when no other export type matches.
   */
  default?:
    | Array<PackageExportsEntryPackageExportsEntryObject | null | string>
    | PackageExportsEntryPackageExportsEntryObject
    | null
    | string;
  /**
   * The module path that is resolved when this specifier is imported as an ECMAScript module
   * using an `import` declaration or the dynamic `import(...)` function.
   */
  import?:
    | Array<PackageExportsEntryPackageExportsEntryObject | null | string>
    | PackageExportsEntryPackageExportsEntryObject
    | null
    | string;
  /**
   * The module path that is resolved when this environment is Node.js.
   */
  node?:
    | Array<PackageExportsEntryPackageExportsEntryObject | null | string>
    | PackageExportsEntryPackageExportsEntryObject
    | null
    | string;
  /**
   * The module path that is resolved when this specifier is imported as a CommonJS module
   * using the `require(...)` function.
   */
  require?:
    | Array<PackageExportsEntryPackageExportsEntryObject | null | string>
    | PackageExportsEntryPackageExportsEntryObject
    | null
    | string;
}

/**
 * Used to specify conditional exports, note that Conditional exports are unsupported in
 * older environments, so it's recommended to use the fallback array option if support for
 * those environments is a concern.
 *
 * The module path that is resolved when the module specifier matches "name", shadows the
 * "main" field.
 */
export interface PurplePackageExportsEntryObject {
  /**
   * The module path that is resolved when the module specifier matches "name", shadows the
   * "main" field.
   */
  "."?:
    | Array<PackageExportsEntryPackageExportsEntryObject | null | string>
    | PackageExportsEntryPackageExportsEntryObject
    | null
    | string;
  /**
   * The module path that is resolved when no other export type matches.
   */
  default?:
    | Array<PackageExportsEntryPackageExportsEntryObject | null | string>
    | PackageExportsEntryPackageExportsEntryObject
    | null
    | string;
  /**
   * The module path that is resolved when this specifier is imported as an ECMAScript module
   * using an `import` declaration or the dynamic `import(...)` function.
   */
  import?:
    | Array<PackageExportsEntryPackageExportsEntryObject | null | string>
    | PackageExportsEntryPackageExportsEntryObject
    | null
    | string;
  /**
   * The module path that is resolved when this environment is Node.js.
   */
  node?:
    | Array<PackageExportsEntryPackageExportsEntryObject | null | string>
    | PackageExportsEntryPackageExportsEntryObject
    | null
    | string;
  /**
   * The module path that is resolved when this specifier is imported as a CommonJS module
   * using the `require(...)` function.
   */
  require?:
    | Array<PackageExportsEntryPackageExportsEntryObject | null | string>
    | PackageExportsEntryPackageExportsEntryObject
    | null
    | string;
}

export interface JSONSchemaForNPMPackageJSONFiles {
  author?: PersonObject | string;
  bin?: { [key: string]: string } | string;
  /**
   * The url to your project's issue tracker and / or the email address to which issues should
   * be reported. These are helpful for people who encounter issues with your package.
   */
  bugs?: FluffyBugs | string;
  /**
   * Array of package names that will be bundled when publishing the package.
   */
  bundledDependencies?: string[] | boolean;
  /**
   * DEPRECATED: This field is honored, but "bundledDependencies" is the correct field name.
   */
  bundleDependencies?: string[] | boolean;
  /**
   * A 'config' hash can be used to set configuration parameters used in package scripts that
   * persist across upgrades.
   */
  config?: { [key: string]: any };
  /**
   * A list of people who contributed to this package.
   */
  contributors?: Array<PersonObject | string>;
  /**
   * Specify that your code only runs on certain cpu architectures.
   */
  cpu?: string[];
  dependencies?: { [key: string]: string };
  /**
   * This helps people discover your package, as it's listed in 'npm search'.
   */
  description?: string;
  devDependencies?: { [key: string]: string };
  directories?: JSONSchemaForNPMPackageJSONFilesDirectories;
  dist?: JSONSchemaForNPMPackageJSONFilesDist;
  engines?: JSONSchemaForNPMPackageJSONFilesEngines;
  engineStrict?: boolean;
  /**
   * A module ID with untranspiled code that is the primary entry point to your program.
   */
  esnext?: FluffyEsnext | string;
  /**
   * The "exports" field is used to restrict external access to non-exported module files,
   * also enables a module to import itself using "name".
   */
  exports?:
    | Array<PackageExportsEntryPackageExportsEntryObject | null | string>
    | FluffyPackageExportsEntryObject
    | null
    | string;
  /**
   * The 'files' field is an array of files to include in your project. If you name a folder
   * in the array, then it will also include the files inside that folder.
   */
  files?: string[];
  /**
   * The url to the project homepage.
   */
  homepage?: string;
  jspm?: JSONSchemaForNPMPackageJSONFiles;
  /**
   * This helps people discover your package as it's listed in 'npm search'.
   */
  keywords?: string[];
  /**
   * You should specify a license for your package so that people know how they are permitted
   * to use it, and any restrictions you're placing on it.
   */
  license?: string;
  /**
   * DEPRECATED: Instead, use SPDX expressions, like this: { "license": "ISC" } or {
   * "license": "(MIT OR Apache-2.0)" } see:
   * 'https://docs.npmjs.com/files/package.json#license'.
   */
  licenses?: JSONSchemaForNPMPackageJSONFilesLicense[];
  /**
   * The main field is a module ID that is the primary entry point to your program.
   */
  main?: string;
  /**
   * A list of people who maintains this package.
   */
  maintainers?: Array<PersonObject | string>;
  /**
   * Specify either a single file or an array of filenames to put in place for the man program
   * to find.
   */
  man?: string[] | string;
  /**
   * An ECMAScript module ID that is the primary entry point to your program.
   */
  module?: string;
  /**
   * The name of the package.
   */
  name?: string;
  optionalDependencies?: { [key: string]: string };
  /**
   * Specify which operating systems your module will run on.
   */
  os?: string[];
  /**
   * Defines which package manager is expected to be used when working on the current project.
   * This field is currently experimental and needs to be opted-in; see
   * https://nodejs.org/api/corepack.html
   */
  packageManager?: string;
  peerDependencies?: { [key: string]: string };
  /**
   * When a user installs your package, warnings are emitted if packages specified in
   * "peerDependencies" are not already installed. The "peerDependenciesMeta" field serves to
   * provide more information on how your peer dependencies are utilized. Most commonly, it
   * allows peer dependencies to be marked as optional. Metadata for this field is specified
   * with a simple hash of the package name to a metadata object.
   */
  peerDependenciesMeta?: {
    [key: string]: JSONSchemaForNPMPackageJSONFilesPeerDependenciesMeta;
  };
  /**
   * DEPRECATED: This option used to trigger an npm warning, but it will no longer warn. It is
   * purely there for informational purposes. It is now recommended that you install any
   * binaries as local devDependencies wherever possible.
   */
  preferGlobal?: boolean;
  /**
   * If set to true, then npm will refuse to publish it.
   */
  private?: boolean | PrivateEnum;
  publishConfig?: JSONSchemaForNPMPackageJSONFilesPublishConfig;
  readme?: string;
  /**
   * Specify the place where your code lives. This is helpful for people who want to
   * contribute.
   */
  repository?: PurpleRepository | string;
  /**
   * Resolutions is used to support selective version resolutions, which lets you define
   * custom package versions or ranges inside your dependencies. See:
   * https://classic.yarnpkg.com/en/docs/selective-version-resolutions
   */
  resolutions?: { [key: string]: any };
  /**
   * The 'scripts' member is an object hash of script commands that are run at various times
   * in the lifecycle of your package. The key is the lifecycle event, and the value is the
   * command to run at that point.
   */
  scripts?: JSONSchemaForNPMPackageJSONFilesScripts;
  /**
   * When set to "module", the type field allows a package to specify all .js files within are
   * ES modules. If the "type" field is omitted or set to "commonjs", all .js files are
   * treated as CommonJS.
   */
  type?: Type;
  /**
   * Set the types property to point to your bundled declaration file.
   */
  types?: string;
  /**
   * The "typesVersions" field is used since TypeScript 3.1 to support features that were only
   * made available in newer TypeScript versions.
   */
  typesVersions?: {
    [key: string]: JSONSchemaForNPMPackageJSONFilesTypesVersion;
  };
  /**
   * Note that the "typings" field is synonymous with "types", and could be used as well.
   */
  typings?: string;
  /**
   * Version must be parseable by node-semver, which is bundled with npm as a dependency.
   */
  version?: string;
  /**
   * Allows packages within a directory to depend on one another using direct linking of local
   * files. Additionally, dependencies within a workspace are hoisted to the workspace root
   * when possible to reduce duplication. Note: It's also a good idea to set "private" to true
   * when using this feature.
   */
  workspaces?: string[] | PurpleWorkspaces;
}

export interface FluffyBugs {
  /**
   * The email address to which issues should be reported.
   */
  email?: string;
  /**
   * The url to your project's issue tracker.
   */
  url?: string;
}

export interface JSONSchemaForNPMPackageJSONFilesDirectories {
  /**
   * If you specify a 'bin' directory, then all the files in that folder will be used as the
   * 'bin' hash.
   */
  bin?: string;
  /**
   * Put markdown files in here. Eventually, these will be displayed nicely, maybe, someday.
   */
  doc?: string;
  /**
   * Put example scripts in here. Someday, it might be exposed in some clever way.
   */
  example?: string;
  /**
   * Tell people where the bulk of your library is. Nothing special is done with the lib
   * folder in any way, but it's useful meta info.
   */
  lib?: string;
  /**
   * A folder that is full of man pages. Sugar to generate a 'man' array by walking the folder.
   */
  man?: string;
  test?: string;
}

export interface JSONSchemaForNPMPackageJSONFilesDist {
  shasum?: string;
  tarball?: string;
}

export interface JSONSchemaForNPMPackageJSONFilesEngines {
  node?: string;
}

export interface FluffyEsnext {
  browser?: string;
  main?: string;
}

/**
 * Used to specify conditional exports, note that Conditional exports are unsupported in
 * older environments, so it's recommended to use the fallback array option if support for
 * those environments is a concern.
 *
 * The module path that is resolved when the module specifier matches "name", shadows the
 * "main" field.
 */
export interface FluffyPackageExportsEntryObject {
  /**
   * The module path that is resolved when the module specifier matches "name", shadows the
   * "main" field.
   */
  "."?:
    | Array<PackageExportsEntryPackageExportsEntryObject | null | string>
    | PackageExportsEntryPackageExportsEntryObject
    | null
    | string;
  /**
   * The module path that is resolved when no other export type matches.
   */
  default?:
    | Array<PackageExportsEntryPackageExportsEntryObject | null | string>
    | PackageExportsEntryPackageExportsEntryObject
    | null
    | string;
  /**
   * The module path that is resolved when this specifier is imported as an ECMAScript module
   * using an `import` declaration or the dynamic `import(...)` function.
   */
  import?:
    | Array<PackageExportsEntryPackageExportsEntryObject | null | string>
    | PackageExportsEntryPackageExportsEntryObject
    | null
    | string;
  /**
   * The module path that is resolved when this environment is Node.js.
   */
  node?:
    | Array<PackageExportsEntryPackageExportsEntryObject | null | string>
    | PackageExportsEntryPackageExportsEntryObject
    | null
    | string;
  /**
   * The module path that is resolved when this specifier is imported as a CommonJS module
   * using the `require(...)` function.
   */
  require?:
    | Array<PackageExportsEntryPackageExportsEntryObject | null | string>
    | PackageExportsEntryPackageExportsEntryObject
    | null
    | string;
}

export interface JSONSchemaForNPMPackageJSONFilesLicense {
  type?: string;
  url?: string;
}

export interface JSONSchemaForNPMPackageJSONFilesPeerDependenciesMeta {
  /**
   * Specifies that this peer dependency is optional and should not be installed automatically.
   */
  optional?: boolean;
}

export enum PrivateEnum {
  False = "false",
  True = "true",
}

export interface JSONSchemaForNPMPackageJSONFilesPublishConfig {
  access?: Access;
  registry?: string;
  tag?: string;
}

export enum Access {
  Public = "public",
  Restricted = "restricted",
}

export interface PurpleRepository {
  directory?: string;
  type?: string;
  url?: string;
}

/**
 * The 'scripts' member is an object hash of script commands that are run at various times
 * in the lifecycle of your package. The key is the lifecycle event, and the value is the
 * command to run at that point.
 */
export interface JSONSchemaForNPMPackageJSONFilesScripts {
  install?: string;
  /**
   * Run code quality tools, e.g. ESLint, TSLint, etc.
   */
  lint?: string;
  postinstall?: string;
  /**
   * Run AFTER the tarball has been generated and moved to its final destination.
   */
  postpack?: string;
  postpublish?: string;
  postrestart?: string;
  poststart?: string;
  poststop?: string;
  posttest?: string;
  /**
   * Run AFTER the package is uninstalled.
   */
  postuninstall?: string;
  /**
   * Run AFTER bump the package version.
   */
  postversion?: string;
  /**
   * Run BEFORE the package is installed.
   */
  preinstall?: string;
  /**
   * run BEFORE a tarball is packed (on npm pack, npm publish, and when installing git
   * dependencies).
   */
  prepack?: string;
  /**
   * Run both BEFORE the package is packed and published, and on local npm install without any
   * arguments. This is run AFTER prepublish, but BEFORE prepublishOnly.
   */
  prepare?: string;
  /**
   * Run BEFORE the package is published (Also run on local npm install without any arguments).
   */
  prepublish?: string;
  /**
   * Run BEFORE the package is prepared and packed, ONLY on npm publish.
   */
  prepublishOnly?: string;
  prerestart?: string;
  prestart?: string;
  prestop?: string;
  pretest?: string;
  preuninstall?: string;
  preversion?: string;
  /**
   * Publishes a package to the registry so that it can be installed by name. See
   * https://docs.npmjs.com/cli/v8/commands/npm-publish
   */
  publish?: string;
  restart?: string;
  /**
   * Start dev server to serve application files
   */
  serve?: string;
  start?: string;
  stop?: string;
  test?: string;
  uninstall?: string;
  version?: string;
}

/**
 * When set to "module", the type field allows a package to specify all .js files within are
 * ES modules. If the "type" field is omitted or set to "commonjs", all .js files are
 * treated as CommonJS.
 */
export enum Type {
  Commonjs = "commonjs",
  Module = "module",
}

/**
 * Contains overrides for the TypeScript version that matches the version range matching the
 * property key.
 */
export interface JSONSchemaForNPMPackageJSONFilesTypesVersion {
  /**
   * Maps all file paths to the file paths specified in the array.
   */
  "*"?: string[];
}

export interface PurpleWorkspaces {
  /**
   * Packages to block from hoisting to the workspace root. Currently only supported in Yarn
   * only.
   */
  nohoist?: string[];
  /**
   * Workspace package paths. Glob patterns are supported.
   */
  packages?: string[];
}

export interface PackageJSONLicense {
  type?: string;
  url?: string;
}

export interface PackageJSONPeerDependenciesMeta {
  /**
   * Specifies that this peer dependency is optional and should not be installed automatically.
   */
  optional?: boolean;
}

export interface PackageJSONPublishConfig {
  access?: Access;
  registry?: string;
  tag?: string;
}

export interface FluffyRepository {
  directory?: string;
  type?: string;
  url?: string;
}

/**
 * The 'scripts' member is an object hash of script commands that are run at various times
 * in the lifecycle of your package. The key is the lifecycle event, and the value is the
 * command to run at that point.
 */
export interface PackageJSONScripts {
  install?: string;
  /**
   * Run code quality tools, e.g. ESLint, TSLint, etc.
   */
  lint?: string;
  postinstall?: string;
  /**
   * Run AFTER the tarball has been generated and moved to its final destination.
   */
  postpack?: string;
  postpublish?: string;
  postrestart?: string;
  poststart?: string;
  poststop?: string;
  posttest?: string;
  /**
   * Run AFTER the package is uninstalled.
   */
  postuninstall?: string;
  /**
   * Run AFTER bump the package version.
   */
  postversion?: string;
  /**
   * Run BEFORE the package is installed.
   */
  preinstall?: string;
  /**
   * run BEFORE a tarball is packed (on npm pack, npm publish, and when installing git
   * dependencies).
   */
  prepack?: string;
  /**
   * Run both BEFORE the package is packed and published, and on local npm install without any
   * arguments. This is run AFTER prepublish, but BEFORE prepublishOnly.
   */
  prepare?: string;
  /**
   * Run BEFORE the package is published (Also run on local npm install without any arguments).
   */
  prepublish?: string;
  /**
   * Run BEFORE the package is prepared and packed, ONLY on npm publish.
   */
  prepublishOnly?: string;
  prerestart?: string;
  prestart?: string;
  prestop?: string;
  pretest?: string;
  preuninstall?: string;
  preversion?: string;
  /**
   * Publishes a package to the registry so that it can be installed by name. See
   * https://docs.npmjs.com/cli/v8/commands/npm-publish
   */
  publish?: string;
  restart?: string;
  /**
   * Start dev server to serve application files
   */
  serve?: string;
  start?: string;
  stop?: string;
  test?: string;
  uninstall?: string;
  version?: string;
}

/**
 * Contains overrides for the TypeScript version that matches the version range matching the
 * property key.
 */
export interface PackageJSONTypesVersion {
  /**
   * Maps all file paths to the file paths specified in the array.
   */
  "*"?: string[];
}

export interface FluffyWorkspaces {
  /**
   * Packages to block from hoisting to the workspace root. Currently only supported in Yarn
   * only.
   */
  nohoist?: string[];
  /**
   * Workspace package paths. Glob patterns are supported.
   */
  packages?: string[];
}
