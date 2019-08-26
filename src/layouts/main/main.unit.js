import MainLayout from '.';

describe('@layouts/main', () => {
  it('renders its content', () => {
    const slotContent = '<p>Hello!</p>';
    const { element } = shallowMount(MainLayout, {
      slots: {
        default: slotContent,
      },
      stubs: ['router-link', 'router-view'],
    });
    expect(element.innerHTML).toContain(slotContent);
  });
});
