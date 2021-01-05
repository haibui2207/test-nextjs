import React from 'react';
import { shallow } from 'enzyme';

import FieldError from '../FieldError';

describe('Testing Input component > FieldError', () => {
  it('should render match snapshot', () => {
    const wrapper = shallow(<FieldError error="Some error" />);
    expect(wrapper).toMatchSnapshot();
  });
});
