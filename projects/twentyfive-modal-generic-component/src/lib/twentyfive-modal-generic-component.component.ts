import { Component } from '@angular/core';
import {TwentyfiveModalGenericComponentService} from "./twentyfive-modal-generic-component.service";

@Component({
  selector: 'lib-twentyfive-modal-generic-component',
  templateUrl: './twentyfive-modal-generic-component.component.html',
  styleUrls: ['./twentyfive-modal-generic-component.component.scss']

})
export class TwentyfiveModalGenericComponentComponent {

  constructor(private service: TwentyfiveModalGenericComponentService) {
  }

}
