export interface AnalysisItem {
  field: string;
  severity: 'pass' | 'warning' | 'critical' | 'info';
  title: string;
  message: string;
  description?: string;
}

export interface AnalysisData {
  seo: {
    hasTitle: AnalysisItem;
    title: string;

    hasDescription: AnalysisItem;
    hasKeywords: AnalysisItem;
    hasCanonical: AnalysisItem;
    hasFavicon: AnalysisItem;
    og: {
      hasOgTitle: AnalysisItem;
      hasOgDescription: AnalysisItem;
      hasOgImage: AnalysisItem;
    };
    twitter: {
      hasTwitterCard: AnalysisItem;
      hasTwitterTitle: AnalysisItem;
    };
  };
  headings: {
    hasH1: AnalysisItem;
    multipleH1: AnalysisItem;
    h2Count: AnalysisItem;
  };
  links: {
    brokenLinks: AnalysisItem;
    links405: AnalysisItem | null;
  };
  images: {
    missingAlt: AnalysisItem;
    brokenImages: AnalysisItem;
    duplicateImages: AnalysisItem | null;
  };
  stats: {
    brokenLinks: number;
    brokenImages: number;
    missingAlt: number;
    totalHeadings: number;
  };
}
