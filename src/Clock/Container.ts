import Interactor, {TimeFactory} from './Interactor';
import TimeTicker from './TimeTicker';

export class ClockContainer {
  public timeTicker: TimeTicker = new TimeTicker();
  public interactor: Interactor = new Interactor(new TimeFactory());
}

const Container: ClockContainer = new ClockContainer();
export default Container;
