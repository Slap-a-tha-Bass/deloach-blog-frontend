export interface Post {
  title: string;
  slug: {
    current: string;
  };
  author: {
    _ref: string;
    _type: "reference";
  };
  mainImage: {
    _type: "image";
    asset: {
      _ref: string;
    };
    hotspot: boolean;
  };
  categories: Array<{
    _ref: string;
    _type: "reference";
  }>;
  publishedAt: string;
  body: Array<{
    _key: string;
    _type: "block";
    children: Array<{
      _key: string;
      _type: "span";
      text: string;
      marks: any[];
    }>;
    markDefs: any[];
    style: string;
  }>;
}
