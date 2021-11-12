import * as quickfind from './quickfind';
import * as utils from './utils';
export * from './types';
import { default as MemoryDb } from './MemoryDb';
import { default as LocalStorageDb } from './LocalStorageDb';
import { default as IndexedDb } from './IndexedDb';
import { default as WebSQLDb } from './WebSQLDb';
import { default as RemoteDb } from './RemoteDb';
import { default as HybridDb, HybridCollection } from './HybridDb';
import { default as ReplicatingDb } from './ReplicatingDb';
export { quickfind, utils, MemoryDb, LocalStorageDb, IndexedDb, WebSQLDb, RemoteDb, HybridDb, ReplicatingDb };
declare const _default: {
    quickfind: typeof quickfind;
    utils: typeof utils;
    MemoryDb: typeof MemoryDb;
    LocalStorageDb: typeof LocalStorageDb;
    IndexedDb: typeof IndexedDb;
    WebSQLDb: typeof WebSQLDb;
    RemoteDb: typeof RemoteDb;
    HybridDb: typeof HybridDb;
    ReplicatingDb: typeof ReplicatingDb;
    HybridCollection: typeof HybridCollection;
};
export default _default;
