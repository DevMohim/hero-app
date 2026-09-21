export interface IApp {
  image: string;
  title: string;
  companyName: string;
  id: number;
  description: string;
  size: number;
  reviews: number;
  ratingAvg: number;
  downloads: number;
  ratings: ratings[]
}

export interface ratings {
  name: string;
  count: number;
}