import Controller from './Controller';
import {mock, MockProxy} from 'jest-mock-extended';
import Clock from './Clock';
import TimeTicker from '../TimeTicker';
import Interactor, {TimeResponse} from '../Interactor';
import Presenter from './Presenter';
import ClockModel from './ClockModel';

describe(Controller, function () {
  let controller: Controller,
    clock: Clock & MockProxy<Clock>,
    timerTicker: TimeTicker & MockProxy<TimeTicker>,
    interactor: Interactor & MockProxy<Interactor>,
    presenter: Presenter & MockProxy<Presenter>,
    callback: Function
  ;

  beforeEach(function () {
    clock = mock<Clock>();
    timerTicker = mock<TimeTicker>();
    interactor = mock<Interactor>();
    presenter = mock<Presenter>();
    controller = new Controller(
      timerTicker,
      interactor,
      presenter
    );
    timerTicker.start.mockImplementation(
      function (c: CallableFunction): void {
        callback = c;
      }
    );

    controller.attach(clock);
  });

  it('should start time ticker at begin', function () {
    expect(timerTicker.start).toBeCalled();
    expect(callback).toBeInstanceOf(Function);
  });

  it('should get time and present it on tick', function () {
    const model: ClockModel = new ClockModel();
    const timeResponse: TimeResponse = new TimeResponse();
    interactor.getTime.mockReturnValueOnce(timeResponse);
    presenter.present.mockReturnValueOnce(model);

    callback();
    expect(presenter.present).toBeCalledWith(timeResponse);
    expect(clock.model).toBe(model);
  });

  it('should create singleton instance', function () {
    const result1: Controller = Controller.instance;
    expect(result1).toBeInstanceOf(Controller);
    const result2: Controller = Controller.instance;
    expect(result2).toBe(result1);
  });
});
