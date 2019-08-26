import { shallowMount } from '@vue/test-utils';
import Container from '.';

describe('@components/Container', () => {
  it('renders its content', () => {
    const slotContent = '<p>Hello!</p>';
    const { element } = shallowMount(Container, {
      slots: {
        default: slotContent,
      },
    });
    expect(element.innerHTML).toContain(slotContent);
  });
});
