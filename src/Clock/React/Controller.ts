import Clock from './Clock';
import Container from '../Container';
import TimeTicker from '../TimeTicker';
import Interactor, {TimeResponse} from '../Interactor';
import Presenter from './Presenter';

export default class Controller {
  private static self?: Controller;
  private clockInstance?: Clock;

  constructor(
    private timerTicker: TimeTicker,
    private interactor: Interactor,
    private presenter: Presenter
  ) {
  }

  static get instance(): Controller {
    if (this.self === undefined) this.self = new Controller(
      Container.timeTicker,
      Container.interactor,
      new Presenter()
    );
    return this.self;
  }

  private get clock(): Clock {
    return this.clockInstance as Clock;
  }

  public attach(clock: Clock): void {
    this.clockInstance = clock;
    this.timerTicker.start(this.doTick.bind(this));
  }

  private doTick(): void {
    const response: TimeResponse = this.interactor.getTime();
    this.clock.model = this.presenter.present(response);
  }
}

