import {Component} from 'react';
import Background from './Background';
import Image3oClock from './Artifact/3oClock.svg';
import Image6oClock from './Artifact/6oClock.svg';
import Image9oClock from './Artifact/9oClock.svg';
import Image12oClock from './Artifact/12oClock.svg';
import ImageSecondHand from './Artifact/SecondHand.svg';
import ImageHourHand from './Artifact/HourHand.svg';
import ImageMinuteHand from './Artifact/MinuteHand.svg';

interface Properties {
}

interface State {
}

export default class Clock extends Component<Properties, State> {
  public render(): JSX.Element {
    const secondHandRotation: object = {transform: 'rotate(45deg)'};
    const hourHandRotation: object = {transform: 'rotate(0deg)'};
    const minuteHandRotation: object = {transform: 'rotate(90deg)'};
    return <>
      <Background/>
      <img id="image-3o-clock" src={Image3oClock} alt="3 Uhr"/>
      <img id="image-6o-clock" src={Image6oClock} alt="6 Uhr"/>
      <img id="image-9o-clock" src={Image9oClock} alt="9 Uhr"/>
      <img id="image-12o-clock" src={Image12oClock} alt="12 Uhr"/>
      <shadow is="div">
        <img id="image-second-hand" src={ImageSecondHand} alt="Sekundenzeiger" style={secondHandRotation}/>
        <img id="image-hour-hand" src={ImageHourHand} alt="Stundenzeiger" style={hourHandRotation}/>
        <img id="image-minute-hand" src={ImageMinuteHand} alt="Minutenzeiger" style={minuteHandRotation}/>
      </shadow>
    </>;
  }
}
