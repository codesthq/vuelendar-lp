import VNavigation from '.';

describe('@components/v-navigation', () => {
  it('renders a nav element', () => {
    const element = shallowMount(VNavigation);
    expect(element.contains('nav')).toBe(true);
  });
});
