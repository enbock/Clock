import TimeTicker from './TimeTicker';

describe(TimeTicker, function () {
  let timeTicker: TimeTicker;

  beforeEach(function () {
    timeTicker = new TimeTicker();
  });

  it('should call function after time', function (done) {
    const callback: jest.Mock = jest.fn();
    timeTicker.start(callback);

    expect(callback).not.toBeCalled();
    setTimeout(
      function () {
        expect(callback).toBeCalled();
        done();
      },
      1000 / 60
    );
  });
});
