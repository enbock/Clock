export class TimeResponse {
  public milliseconds: number = 0;
  public minute: number = 0;
  public hour: number = 0;
  public seconds: number = 0;
}

export class TimeFactory {
  public createNowDate(): Date {
    return new Date();
  }
}

export default class Interactor {
  constructor(
    private timeFactory: TimeFactory
  ) {
  }

  public getTime(): TimeResponse {
    const response: TimeResponse = new TimeResponse();
    const now: Date = this.timeFactory.createNowDate();

    response.milliseconds = now.getMilliseconds();
    const hours: number = now.getHours();
    response.hour = hours > 11 ? hours - 12 : hours;
    response.minute = now.getMinutes();
    response.seconds = now.getSeconds();

    return response;
  }
}
