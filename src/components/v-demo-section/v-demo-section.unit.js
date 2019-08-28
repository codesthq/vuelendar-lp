import VDemoSection from '.';

describe('@components/v-demo-section', () => {
  it('renders its content', () => {
    const slotContent = '<p>Hello!</p>';
    const { element } = shallowMount(VDemoSection, {
      propsData: {
        title: 'test title',
      },
      slots: {
        default: slotContent,
      },
    });
    expect(element.innerHTML).toContain(slotContent);
  });
});
