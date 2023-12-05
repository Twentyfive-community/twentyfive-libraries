import {Component, EventEmitter, Input, Output} from '@angular/core';
import { SwitchTheme } from 'twentyfive-style';

@Component({
  selector: 'lib-twentyfive-switch',
  templateUrl: './twentyfive-switch.component.html',
  styleUrls: ['./twentyfive-switch.component.scss']
})
export class TwentyfiveSwitchComponent {

  @Input() switchText: string = 'Text';
  @Input() value : any ;
  @Input() id: string = '';
  @Input() disabled: boolean = false;
  @Input() showLabel: boolean = true;
  @Input() checked: boolean = false;
  @Output() changeValue = new EventEmitter<any>();

  change(event: any){
    this.changeValue.emit(event);
  }
  @Input() switchStyle: SwitchTheme = SwitchTheme.Primary;

  @Input() customCssClass: string = '';


  protected readonly SwitchTheme = SwitchTheme;
}


