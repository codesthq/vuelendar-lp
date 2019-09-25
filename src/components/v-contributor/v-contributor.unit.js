import VContributor from '.';

describe('@components/v-contributor', () => {
  it('renders data of a contributor', () => {
    const wrapper = shallowMount(VContributor, {
      propsData: {
        url: 'https://example.com/',
        avatarUrl: 'https://otherexample.com/example.jpeg',
        name: 'testUser123',
      },
    });

    expect(wrapper.html()).toEqual(
      expect.stringContaining('https://example.com/')
    );
    expect(wrapper.html()).toEqual(
      expect.stringContaining('https://otherexample.com/example.jpeg')
    );
    expect(wrapper.html()).toEqual(expect.stringContaining('testUser123'));
  });
});
