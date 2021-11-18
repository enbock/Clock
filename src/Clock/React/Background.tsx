import React, {Component} from 'react';
import Image from './Artifact/background.svg';

interface Properties {
}

interface State {
}

export default class Background extends Component<Properties, State> {
  public render(): JSX.Element {
    return <background is="div"><img src={Image} alt="background"/></background>;
  }
}
