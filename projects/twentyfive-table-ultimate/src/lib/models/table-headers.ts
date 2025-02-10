export class TableHeader {
  name?: string;
  value?: string;
  sortable?: boolean

  constructor() {
    this.name = '';
    this.value = '';
    this.sortable = false;
  }
}
