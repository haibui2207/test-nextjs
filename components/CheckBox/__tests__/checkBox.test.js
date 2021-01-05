import React from 'react';
import { shallow, mount } from 'enzyme';

import CheckBox from '../CheckBox';

describe('Testing CheckBox component', () => {
  let wrapper;
  const props = { label: 'checkbox', name: 'checkbox' };

  beforeAll(() => {
    wrapper = mount(<CheckBox {...props} />);
  });

  it('should render match snapshot', () => {
    const wrapper = shallow(<CheckBox {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a label', () => {
    expect(wrapper.find('[data-test="component-checkbox-label"]')).toHaveLength(
      1,
    );
  });

  it('should have an input type=checkbox', () => {
    const selector = wrapper.find('[data-test="component-checkbox-input"]');
    expect(selector).toHaveLength(1);
    expect(selector.props().type).toEqual('checkbox');
  });
});
