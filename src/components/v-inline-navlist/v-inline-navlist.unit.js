import VInlineNavlist from '.';

describe('@components/v-inline-navlist', () => {
  it('renders a nav element', () => {
    const element = shallowMount(VInlineNavlist);
    expect(element.contains('nav')).toBe(true);
  });
});
