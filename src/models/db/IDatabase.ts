export enum DatabaseTypes {
  ASYNC_STORAGE,
  LOCAL,
  FIREBASE,
  MONGODB,
}
type CriteriaType = { keyword?: string; prop?: string } | ((list: []) => []);
interface IDatabase {
  dbType: number;
  fetch<T>(criteria: CriteriaType): T[];
  add(item: any): boolean;
  delete(id: string | number): boolean;
  update(item: any): boolean;
}

export default IDatabase;
