import React from 'react';
import { shallow } from 'enzyme';

import FieldInput from '../FieldInput';

describe('Testing Input component > FieldInput', () => {
  it('should render match snapshot', () => {
    const wrapper = shallow(<FieldInput name="somename" />);
    expect(wrapper).toMatchSnapshot();
  });
});
