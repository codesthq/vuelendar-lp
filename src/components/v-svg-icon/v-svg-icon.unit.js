import { mount } from '@vue/test-utils';
import VSvgIcon from '.';

describe('@components/v-svg-icon', () => {
  it('gets content of loaded icon', (done) => {
    const element = mount(VSvgIcon, {
      propsData: {
        icon: 'github',
      },
    });
    setTimeout(() => {
      expect(element.vm.content).not.toBeNull();
      done();
    }, 100);
  });
});
