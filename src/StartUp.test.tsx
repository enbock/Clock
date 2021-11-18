import React, {Component, StrictMode} from 'react';
import ReactDOM from 'react-dom';
import StartUp from './StartUp';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import ServiceWorkerUpdateLoader from './ServiceWorkerUpdateLoader';
import {mock} from 'jest-mock-extended';
import Clock from './Clock/React/Clock';

jest.mock('react-dom', function () {
  return {
    render: jest.fn()
  };
});

jest.mock('./Clock/React/Clock');
jest.mock('./serviceWorkerRegistration', function () {
  return {register: jest.fn()};
});

describe(StartUp, function () {
  let reLoader: ServiceWorkerUpdateLoader;

  beforeEach(function () {
    reLoader = mock<ServiceWorkerUpdateLoader>();
  });

  it('should start the application', function () {
    (Clock as jest.Mock).mockImplementation(function () {
      return class Clock extends Component<any, any> {
      };
    });

    const getElementByIdMock: jest.Mock = jest.fn();
    getElementByIdMock.mockReturnValueOnce('test::HTMLElement:');
    const document: Document = {getElementById: getElementByIdMock as any} as Document;

    new StartUp(document, reLoader).start();

    const expectedJsx: JSX.Element = <StrictMode><Clock/></StrictMode>;
    expect(ReactDOM.render).toBeCalledWith(expectedJsx, 'test::HTMLElement:');
    expect(getElementByIdMock).toBeCalledWith('root');
    expect(serviceWorkerRegistration.register).toBeCalledWith(reLoader);
  });
});
