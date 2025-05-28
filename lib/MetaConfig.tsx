import { Metadata, StructuredData } from '../types';

export function MergeMetadata(baseMetadata: Metadata, pageMetadata: Partial<Metadata>): Metadata {
  return {
    ...baseMetadata,
    ...pageMetadata,
    title: pageMetadata.title || baseMetadata.title,
    description: pageMetadata.description || baseMetadata.description,
    keywords: pageMetadata.keywords || baseMetadata.keywords,
    openGraph: {
      ...baseMetadata.openGraph,
      ...pageMetadata.openGraph,
      images: pageMetadata.openGraph?.images || baseMetadata.openGraph.images,
    },
    twitter: {
      ...baseMetadata.twitter,
      ...pageMetadata.twitter,
      images: pageMetadata.twitter?.images || baseMetadata.twitter.images,
    },
    alternates: {
      ...baseMetadata.alternates,
      ...pageMetadata.alternates,
    },
    globalStructuredData: pageMetadata.globalStructuredData || baseMetadata.globalStructuredData,
  };
}

export function MergeStructuredData(globalData: StructuredData[], pageData: StructuredData[]): StructuredData[] {
  const combined = [...globalData, ...pageData];
  const seen = new Set<string>();
  return combined.filter((item) => {
    const key = `${item['@type']}:${item.url || item.name || JSON.stringify(item)}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}