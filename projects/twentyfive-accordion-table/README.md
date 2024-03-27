# TwentyfiveAccordionTable
The **Twentyfive Accordion Table Angular** library provides a simple and flexible way to display data in an expandable table. With this library, you can create dynamic tables where rows can be expanded to show additional details when clicked by the user.  
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.
## Key Features
* Creation of dynamic tables with expandable rows.
* Customization of columns and displayed data.
* Simple and efficient handling of row expansion.

## Installation
You can install the library via npm using the following command:
`npm install twentyfive-accordion-table`

## Usage
To use the library, import the main module into your Angular module and use the table component paired with the desired data.
```
import { NgModule } from '@angular/core';
import { TwentyfiveAccordionTableModule } from 'twentyfive-accordion-table';

@NgModule({
imports: [
TwentyfiveAccordionTableModule
]
})
export class AppModule { }
```
### Html
````
<twentyfive-accordion-table
[data]="data"
[headers]="headers"
[extras]="extras"
[singleOpen]="true"
[templateRef]="templateRef"
(detailsEmitter)="getDetails($event)"
[dataDetails]="dataDetails"
[isSortable]="false"
[page]="page"
[pageSize]="pageSize"
[maxSize]="maxSize"
[collectionSize]="collectionSize"
(changePageEmitter)="changePage($event)"
(selectEmitter)="selectSize($event)">
</twentyfive-accordion-table>


<!-- Template reference to display the information specified in deepDisplay. -->
<ng-template #templateRef let-detailLabel="detailLabel" let-detailInfo="detailInfo" let-getValueByPath="getValueByPath" let-isObject="isObject">
  <p class="d-flex">
    <span >{{detailLabel?.name}}</span> :
    <show-data-object [dataDetails]="detailInfo[detailLabel?.value]" [deepDisplay]="deepDisplay"
                          [getValueByPath]="getValueByPath" [isObject]="isObject" [loading]="loading" ></show-data-object>
  </p>
</ng-template>
````
### Ts

```
@ViewChild('templateRef', { static: true }) templateRef!: TemplateRef<any>;

  data:User [] = [];
  headers: Header[] = [];
  extras: Header[] = [];
  deepDisplay: Header[] = [];
  dataDetails: any [] = [new User()];
  pageSize: number = 2;
  page:number = 1;
  maxSize: number = 5;
  collectionSize!: number;
  loading: boolean = false;
 
```



## Contributions
We welcome contributions from the community! If you'd like to contribute to this library, please follow the contribution guidelines in the GitHub repository.

## Bug Reporting
If you encounter a bug or have suggestions to improve the library, please report the issue in the GitHub repository.

## License
This library is distributed under the MIT license. See the LICENSE file for more information on copyright and usage terms.
