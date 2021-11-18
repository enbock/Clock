import Interactor, {TimeFactory, TimeResponse} from './Interactor';
import {mock, MockProxy} from 'jest-mock-extended';

describe(Interactor, function () {
  let interactor: Interactor,
    timeFactory: TimeFactory & MockProxy<TimeFactory>,
    date: Date & MockProxy<Date>
  ;

  beforeEach(function () {
    timeFactory = mock<TimeFactory>();
    date = mock<Date>();
    interactor = new Interactor(timeFactory);
  });

  it('time factory should create a date object', function () {
    expect(new TimeFactory().createNowDate()).toBeInstanceOf(Date);
  });

  function expectResponse(result: TimeResponse) {
    const expectedResponse: TimeResponse = new TimeResponse();
    expectedResponse.hour = 2;
    expectedResponse.milliseconds = 500;
    expectedResponse.seconds = 15;
    expectedResponse.minute = 30;

    expect(result).toEqual(expectedResponse);
  }

  it('should get time in morning', function () {
    date.getMilliseconds.mockReturnValueOnce(500);
    date.getSeconds.mockReturnValueOnce(15);
    date.getHours.mockReturnValueOnce(2);
    date.getMinutes.mockReturnValueOnce(30);

    timeFactory.createNowDate.mockReturnValueOnce(date);

    const result: TimeResponse = interactor.getTime();
    expectResponse(result);
  });

  it('should get time in afternoon', function () {
    date.getMilliseconds.mockReturnValueOnce(500);
    date.getSeconds.mockReturnValueOnce(15);
    date.getHours.mockReturnValueOnce(14);
    date.getMinutes.mockReturnValueOnce(30);

    timeFactory.createNowDate.mockReturnValueOnce(date);

    const result: TimeResponse = interactor.getTime();
    expectResponse(result);
  });
});
