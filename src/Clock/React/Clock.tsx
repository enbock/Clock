import {Component} from 'react';
import Background from './Background';
import Image3oClock from './Artifact/3oClock.svg';
import Image6oClock from './Artifact/6oClock.svg';
import Image9oClock from './Artifact/9oClock.svg';
import Image12oClock from './Artifact/12oClock.svg';

interface Properties {
}

interface State {
}

export default class Clock extends Component<Properties, State> {
  public render(): JSX.Element {
    return <>
      <Background/>
      <img id="image-3o-clock" src={Image3oClock} alt="3 Uhr"/>
      <img id="image-6o-clock" src={Image6oClock} alt="6 Uhr"/>
      <img id="image-9o-clock" src={Image9oClock} alt="9 Uhr"/>
      <img id="image-12o-clock" src={Image12oClock} alt="12 Uhr"/>
    </>;
  }
}
