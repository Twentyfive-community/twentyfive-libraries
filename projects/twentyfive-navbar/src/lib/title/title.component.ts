import {Component, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'lib-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  animations: [
    trigger('displayState', [
      state('false', style({opacity: 0, height: 0})),
      state('true', style({opacity: 1, height: 'fit-content'})),
      transition('false => true', animate('300ms ease-in')),
      transition('true => false', animate('300ms ease-out'))
    ])
  ]
})
export class TitleComponent {
  @Input() title = "Navbar";
  @Input() show = true;
}
