export interface Todo{
    Id: number;
  Title: string;
  Description: string;
  IsCompleted: number;
  IsDeleted: number;
}
export interface Todos{
  todos:Todo[]
}

