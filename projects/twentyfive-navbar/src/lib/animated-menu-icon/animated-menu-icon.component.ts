import {Component, EventEmitter, Input, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-animated-menu-icon',
  templateUrl: './animated-menu-icon.component.html',
  styleUrls: ['./animated-menu-icon.component.css'],
  animations: [
    trigger('hamburguerX', [
      /*
        state hamburguer => is the regular 3 lines style.
        states topX, hide, and bottomX => used to style the X element
      */
      state('hamburguer', style({})),
      // style top bar to create the X
      state(
        'topX',
        style({
          transform: 'rotate(45deg)',
          transformOrigin: 'left',
          margin: '0 0 3px 3px'
        })
      ),
      // hides element when create the X (used in the middle bar)
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      // style bottom bar to create the X
      state(
        'bottomX',
        style({
          transform: 'rotate(-45deg)',
          transformOrigin: 'left',
        })
      ),
      transition('* => *', [
        animate('0.2s'), // controls animation speed
      ]),
    ]),
  ],
})
export class AnimatedMenuIconComponent {
  @Input() isHamburger = true;
  @Output() evtEmitted: EventEmitter<any> = new EventEmitter<any>();

  evtEmit(){
    this.evtEmitted.emit({});
  }
}
