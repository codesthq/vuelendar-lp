import VButton from '.';

describe('@components/v-button', () => {
  it('renders its content', () => {
    const slotContent = '<p>Hello!</p>';
    const { element } = shallowMount(VButton, {
      slots: {
        default: slotContent,
      },
      propsData: {
        to: { name: 'home' },
      },
    });
    expect(element.innerHTML).toContain(slotContent);
  });
});
