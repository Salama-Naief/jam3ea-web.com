export interface IPointsHistory {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  data: [IPoint];
}

export interface IPoint {
  _id: string;
  old_points: number;
  new_points: number;
  type: string;
  created: string;
  notes: string;
}

export interface IProductReward {
  _id: string;
  product: {
    name: string;
    picture: string;
  };
  points: number;
  sorting: number;
  expires_at: string;
  title: string;
  description: string;
}
