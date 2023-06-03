export interface ISubCategory extends ICategory {
    parent_id: string;
  }
  
  export interface ICategory {
    _id: string;
    name: string;
    picture: string;
    children: ISubCategory[];
  }
  