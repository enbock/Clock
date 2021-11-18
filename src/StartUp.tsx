import ReactDOM from 'react-dom';
import React, {StrictMode} from 'react';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import ServiceWorkerUpdateLoader from './ServiceWorkerUpdateLoader';
import Clock from './Clock/React/Clock';

export default class StartUp {
  constructor(
    private document: Document,
    private reLoader: ServiceWorkerUpdateLoader
  ) {
  }

  public start(): void {
    serviceWorkerRegistration.register(this.reLoader);

    ReactDOM.render(
      <StrictMode><Clock/></StrictMode>,
      this.document.getElementById('root')
    );
  }
}
