import Presenter from './Presenter';
import {TimeResponse} from '../Interactor';
import ClockModel from './ClockModel';

describe(Presenter, function () {
  let presenter: Presenter;

  beforeEach(function () {
    presenter = new Presenter();
  });

  it('should present time in milli-view units', function () {
    const response: TimeResponse = new TimeResponse();
    response.milliseconds = 500;
    response.seconds = 15;
    response.minute = 30;
    response.hour = 9;

    const result: ClockModel = presenter.present(response);

    const expectedModel: ClockModel = new ClockModel();
    expectedModel.microSeconds = 1550;
    expectedModel.microMinute = 3025.8333333333335;
    expectedModel.microHour = 950.4305555555555;
    expect(result).toEqual(expectedModel);
  });
});
