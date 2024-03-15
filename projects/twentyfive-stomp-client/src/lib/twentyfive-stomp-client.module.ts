import {APP_INITIALIZER, inject, InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import { TwentyfiveStompClientComponent } from './twentyfive-stomp-client.component';
import {RxStompConfig} from "@stomp/rx-stomp";
import {TwentyfiveStompClientService} from "./twentyfive-stomp-client.service";

export const STOMP_CONFIG = new InjectionToken('STOMP_CONFIG');

export interface StompConfiguration {
  brokerURL: string;
  connectHeaders: any;
}


@NgModule({
  declarations: [
    TwentyfiveStompClientComponent
  ],
  imports: [
  ],
  exports: [
    TwentyfiveStompClientComponent
  ]
})
export class TwentyfiveStompClientModule { }

export function provideNotificationModule(env: StompConfiguration): ModuleWithProviders<TwentyfiveStompClientModule> {
  return {
    ngModule: TwentyfiveStompClientModule,
    providers: [
      {
        provide: STOMP_CONFIG,
        useValue: env
      },
      {
        provide: APP_INITIALIZER,
        useFactory: rxStompServiceFactory,
        multi: true
      },
    ]
  };
}


export const myRxStompConfig: RxStompConfig = {
  // Which server?
  brokerURL: 'ws://localhost:8080/ws',

  // Headers
  // Typical keys: login, passcode, host
  connectHeaders: {
    login: 'guest',
    passcode: 'guest',
  },

  // How often to heartbeat?
  // Interval in milliseconds, set to 0 to disable
  heartbeatIncoming: 0, // Typical value 0 - disabled
  heartbeatOutgoing: 20000, // Typical value 20000 - every 20 seconds

  // Wait in milliseconds before attempting auto reconnect
  // Set to 0 to disable
  // Typical value 500 (500 milli seconds)
  reconnectDelay: 200,

  // Will log diagnostics on console
  // It can be quite verbose, not recommended in production
  // Skip this key to stop logging to console
  debug: (msg: string): void => {
    console.log(new Date(), msg);
  },
};


export function rxStompServiceFactory() {
  var environment : StompConfiguration = inject(STOMP_CONFIG) as StompConfiguration;
  myRxStompConfig.brokerURL = environment.brokerURL;
  myRxStompConfig.connectHeaders = environment.connectHeaders;
  const rxStomp = new TwentyfiveStompClientService();
  rxStomp.configure(myRxStompConfig);
  rxStomp.activate();
  return rxStomp;
}
