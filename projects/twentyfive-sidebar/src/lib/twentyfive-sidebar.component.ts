import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-twentyfive-sidebar',
  templateUrl: `./twentyfive-sidebar.component.html`,
  styleUrls: ['../../src/styles.scss']
})
export class TwentyfiveSidebarComponent {
  @Input() sidebarItems:any[] = [];

}
