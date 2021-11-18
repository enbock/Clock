import Clock from './Clock';
import ClockModel from './ClockModel';
import {render, RenderResult} from '@testing-library/react';

describe(Clock, function () {
  let model: ClockModel;

  beforeEach(function () {
    model = new ClockModel();
  });

  function createUi(): RenderResult {
    return render(<Clock/>);
  }

  it('should render hello world!', function () {
    const result: RenderResult = createUi();
    expect(result.container).toContainHTML('img');
    expect(result.container).toContainHTML('"image-3o-clock"');
    expect(result.container).toContainHTML('"image-6o-clock"');
    expect(result.container).toContainHTML('"image-9o-clock"');
    expect(result.container).toContainHTML('"image-12o-clock"');
  });
});
