import './index.css';
import StartUp from './StartUp';
import ServiceWorkerUpdateLoader from './ServiceWorkerUpdateLoader';

new StartUp(document, new ServiceWorkerUpdateLoader(global.location)).start();
