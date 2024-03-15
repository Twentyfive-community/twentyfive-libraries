import { Injectable } from '@angular/core';
import {RxStomp} from "@stomp/rx-stomp";
import {Observable, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TwentyfiveStompClientService extends RxStomp {
  constructor() {
    super();
  }

}
