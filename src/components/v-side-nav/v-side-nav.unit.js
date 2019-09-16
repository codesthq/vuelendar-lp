import { shallowMount } from '@vue/test-utils';
import VContainer from '.';

describe('@components/v-side-nav', () => {
  it('renders a nav element', () => {
    const wrapper = shallowMount(VContainer);
    expect(wrapper.contains('nav')).toBe(true);
  });
});
