import { shallowMount } from '@vue/test-utils';
import Button from '.';

describe('@components/Button', () => {
  it('renders a button', () => {
    const element = mount(Button);
    expect(element.contains('button')).toBe(true);
  });
  it('renders its content', () => {
    const slotContent = 'Test button content';
    const { element } = shallowMount(Button, {
      slots: {
        default: slotContent,
      },
    });
    expect(element.innerHTML).toContain(slotContent);
  });
});
