import Nav from '.';

describe('@components/Nav', () => {
  it('renders a nav element', () => {
    const element = shallowMount(Nav);
    expect(element.contains('nav')).toBe(true);
  });
});
