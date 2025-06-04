import { PaginationMeta } from "./pagination-meta.type";

export type Response<T> = {
  data: T;
  message: string | null;
  hasData: boolean;
  meta: PaginationMeta;
};