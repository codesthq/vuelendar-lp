import VSidebarNavlist from '.';

describe('@components/v-sidebar-navlist', () => {
  it('renders a nav element', () => {
    const element = shallowMount(VSidebarNavlist);
    expect(element.contains('nav')).toBe(true);
  });
});
