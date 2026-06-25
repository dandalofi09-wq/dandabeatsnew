declare module 'astro:content' {
  export function getCollection(key: string): Promise<any[]>;
  export function getEntryBySlug(collection: string, slug: string): Promise<any>;
  export type CollectionEntry<K extends string = string> = any;
}
