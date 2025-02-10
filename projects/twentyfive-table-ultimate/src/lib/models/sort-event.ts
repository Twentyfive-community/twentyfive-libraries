import {SortDirection} from "./sort-direction";

export interface SortEvent {
  sortColumn: string;
  sortDirection: SortDirection;
}
