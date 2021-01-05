import React from 'react';
import { shallow } from 'enzyme';

import FieldLabel from '../FieldLabel';

describe('Testing Input component > FieldLabel', () => {
  it('should render match snapshot', () => {
    const wrapper = shallow(<FieldLabel htmlFor="something" label="Label" />);
    expect(wrapper).toMatchSnapshot();
  });
});
