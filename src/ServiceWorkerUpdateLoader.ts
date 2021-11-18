export default class ServiceWorkerUpdateLoader {
  private readonly location: Location;

  constructor(location: Location) {
    this.location = location;
  }

  onUpdate(registration?: ServiceWorkerRegistration): void {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({type: 'SKIP_WAITING'});
    }
    this.location.reload();
  }
}
