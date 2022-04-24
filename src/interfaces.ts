export interface UserMeta {
  name: string;
  created: number;
  _id: string; // auth0 id custom mongo ObjectId value
}

export interface Project {
  name: string;
  key: string;
  created: number;
  _id: string;
}
