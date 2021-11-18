import {Component} from 'react';
import Background from './Background';
import Image3oClock from './Artifact/3oClock.svg';
import Image6oClock from './Artifact/6oClock.svg';
import Image9oClock from './Artifact/9oClock.svg';
import Image12oClock from './Artifact/12oClock.svg';
import ImageSecondHand from './Artifact/SecondHand.svg';
import ImageHourHand from './Artifact/HourHand.svg';
import ImageMinuteHand from './Artifact/MinuteHand.svg';
import ClockModel from './ClockModel';
import Controller from './Controller';

interface Properties {
}

interface State {
  model: ClockModel;
}

export default class Clock extends Component<Properties, State> {
  constructor(props: Properties) {
    super(props);
    this.state = {model: new ClockModel()};
    Controller.instance.attach(this);
  }

  public set model(model: ClockModel) {
    this.setState({model: model});
  }

  public render(): JSX.Element {
    const hourAngle: number = 360 / 1200 * this.state.model.microHour;
    const minuteAngle: number = 360 / 6000 * this.state.model.microMinute;
    const secondAngle: number = 360 / 6000 * this.state.model.microSeconds;
    const secondHandRotation: object = {transform: 'rotate(' + secondAngle + 'deg)'};
    const hourHandRotation: object = {transform: 'rotate(' + hourAngle + 'deg)'};
    const minuteHandRotation: object = {transform: 'rotate(' + minuteAngle + 'deg)'};
    return <>
      <Background/>
      <img id="image-3o-clock" src={Image3oClock} alt="3 Uhr"/>
      <img id="image-6o-clock" src={Image6oClock} alt="6 Uhr"/>
      <img id="image-9o-clock" src={Image9oClock} alt="9 Uhr"/>
      <img id="image-12o-clock" src={Image12oClock} alt="12 Uhr"/>
      <shadow is="div">
        <img id="image-minute-hand" data-testid="minute" src={ImageMinuteHand} alt="Minutenzeiger"
             style={minuteHandRotation}/>
        <img id="image-hour-hand" data-testid="hour" src={ImageHourHand} alt="Stundenzeiger" style={hourHandRotation}/>
        <img
          id="image-second-hand"
          data-testid="second"
          src={ImageSecondHand}
          alt="Sekundenzeiger"
          style={secondHandRotation}
        />
      </shadow>
    </>;
  }
}
