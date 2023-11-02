import {Component, Input} from '@angular/core';

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

  @Input() switchStyle: SwitchTheme = SwitchTheme.Primary;

  @Input() customCssClass: string = '';
  protected readonly SwitchTheme = SwitchTheme;
}


export enum SwitchTheme{
  Primary = 'switch-25'
}

