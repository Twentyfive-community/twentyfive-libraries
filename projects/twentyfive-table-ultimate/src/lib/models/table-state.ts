import {SortDirection} from "./sort-direction";

export interface TableState {
  page?: number;
  pageSize?: number;
  sortColumn?: string;
  sortDirection?: SortDirection;
}
