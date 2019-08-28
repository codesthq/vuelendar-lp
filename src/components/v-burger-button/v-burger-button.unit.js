import VBurgerButton from '.';

describe('@components/v-button', () => {
  it('renders a button', () => {
    const wrapper = mount(VBurgerButton);
    expect(wrapper.contains('button')).toBe(true);
  });
});
