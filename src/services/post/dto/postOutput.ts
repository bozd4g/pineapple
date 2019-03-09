export interface IPostOutput {
   status: string;
   feed: IFeed;
   items: IItem[];
}

export interface IFeed {
   url: string;
   title: string;
   link: string;
   author: string;
   description: string;
   image: string;
}

export interface IItem {
   title: string;
   pubDate: string;
   link: string;
   guid: string;
   author: string;
   thumbnail: string;
   description: string;
   content: string;
   enclosure: IEnclosure;
   categories: string[];
}

interface IEnclosure {}
