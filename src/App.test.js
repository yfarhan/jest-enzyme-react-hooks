/**
 * Example: Testing useEffect / useState with Jest / Enzyme.
 * @see https://codesandbox.io/s/wq8w1zwlwk?from-embed=&file=/src/app/app.test.js:0-27
 */
import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import App from './app';

import fetchData from './fetchData';
jest.mock('./fetchData');

describe('App', () => {
  test('should fetch data on mount', () => {
    let component;

    fetchData.mockImplementation(() => ({
      then(fn) {
        fn({
          firstName: 'Jon',
          lastName: 'Doe',
          nickName: 'JD',
        });
      },
    }));

    act(() => {
      component = mount(<App />);
    });

    expect(component.text()).toBe('Hi Jon Doe JD!');
  });
});
