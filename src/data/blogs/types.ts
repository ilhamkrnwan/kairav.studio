export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
  sections: {
    heading: string;
    body: string;
  }[];
};
