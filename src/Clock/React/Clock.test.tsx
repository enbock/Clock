import Clock from './Clock';
import ClockModel from './ClockModel';
import {getByRole, render, RenderResult} from '@testing-library/react';
import Controller from './Controller';
import {mock, MockProxy} from 'jest-mock-extended';

describe(Clock, function () {
  let model: ClockModel,
    controller: Controller & MockProxy<Controller>,
    clock: Clock
  ;

  beforeEach(function () {
    model = new ClockModel();

    controller = mock<Controller>();
    Controller['self'] = controller;

    controller.attach.mockImplementation(
      function (instance: Clock): void {
        clock = instance;
      }
    );
  });

  function createUi(): RenderResult {
    return render(<Clock/>);
  }

  it('should render hello world!', function () {
    model.microSeconds = 1500;
    model.microMinute = 3000;
    model.microHour = 900;

    const result: RenderResult = createUi();
    clock.model = model;

    expect(getByRole(result.container, 'second')).toContainHTML('rotate(90deg)');
    expect(getByRole(result.container, 'minute')).toContainHTML('rotate(180deg)');
    expect(getByRole(result.container, 'hour')).toContainHTML('rotate(270deg)');
  });

});
