export interface Project {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    alt?: string;
    liveLink: string;
    githubLink: string;
    author?: {
      '@type': string;
      name: string;
    };
    datePublished?: string;
  }
  
  export interface StructuredData {
    '@context'?: string;
    '@type': string;
    [key: string]: string | number | boolean | string[] | StructuredData | StructuredData[] | undefined | null | Record<string, unknown>;
  }
  
  export interface Metadata {
    metadataBase?: URL;
    title: string | { default: string; template: string };
    description: string;
    keywords?: string;
    robots?: string;
    openGraph: {
      siteName?: string;
      locale?: string;
      type?: string;
      images?: Array<{
        url: string;
        width?: number;
        height?: number;
        alt?: string;
        type?: string;
      }>;
      title?: string;
      description?: string;
      url?: string;
    };
    twitter: {
      card?: string;
      images?: string[];
      title?: string;
      description?: string;
    };
    manifest?: string;
    icons?: {
      icon?: Array<{ url: string; sizes?: string; type?: string }>;
      apple?: Array<{ url: string; sizes?: string }>;
    };
    alternates?: {
      canonical?: string;
    };
    globalStructuredData?: StructuredData[];
  }
  
  export interface SocialLink {
    name: string;
    url: string;
    icon: React.ReactNode;
    color: string;
  }
  
  export interface ScanResult {
    results: {
      performance: {
        performanceScore: number;
      };
      totalErrors: number;
      totalAlerts: number;
      errors: Array<{
        title: string;
        description: string;
        suggestion: string;
        element?: {
          selector: string;
          snippet: string;
        };
      }>;
      alerts: Array<{
        title: string;
        description: string;
        suggestion: string;
      }>;
    };
  }