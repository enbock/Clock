import {TimeResponse} from '../Interactor';
import ClockModel from './ClockModel';

export default class Presenter {
  public present(response: TimeResponse): ClockModel {
    const model: ClockModel = new ClockModel();

    model.microSeconds = response.seconds * 100 + response.milliseconds / 10;
    model.microMinute = response.minute * 100 + (100 / 6000 * (model.microSeconds));
    model.microHour = response.hour * 100 + (100 / 6000 * model.microMinute);

    return model;
  }
}
