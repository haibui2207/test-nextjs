import React from 'react';
import { shallow } from 'enzyme';

import Button from '../Button';

describe('Testing Button component', () => {
  it('should render match snapshot', () => {
    const wrapper = shallow(<Button>Button</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});
