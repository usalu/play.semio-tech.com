/** @module Interface semio:framework/codec@1.0.0 **/
export function packSchemaHash(artifactKind: string): Promise<Uint8Array>;
export function genesis(artifactKind: string, documentId: string): Promise<DocumentPair>;
export function printMirror(artifactKind: string, pair: DocumentPair): Promise<[string, string]>;
export function applyOps(artifactKind: string, pair: DocumentPair, ops: Uint8Array): Promise<DocumentPair>;
export type PluginError = import('./semio-framework-types.js').PluginError;
export interface DocumentPair {
  pack: Uint8Array,
  spr: Uint8Array,
}
