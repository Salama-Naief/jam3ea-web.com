export interface ISubCategory {
  _id: string;
  parent_id: string;
  name: string;
  picture?: string;
}

export interface ICategory {
  _id: string;
  name: string;
  picture: string;
  children: ISubCategory[];
}

export interface IRank {
  _id: string;
  name: string;
}
