export default class TimeTicker {
  public start(doTick: CallableFunction) {
    setInterval(doTick, 1000 / 60);
  }
}
