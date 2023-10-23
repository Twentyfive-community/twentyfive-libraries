import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-twentyfive-spinner',
  templateUrl: './twentyfive-spinner.component.html',
  styleUrls: ['./twentyfive-spinner.component.scss']
})
export class TwentyfiveSpinnerComponent {
  @Input() showImage: boolean = true;
  @Input() id: string = 'preloader';
  @Input() src: string = '';

}
