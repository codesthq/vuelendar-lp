import Home from '.';

describe('@views/About', () => {
  it('is a valid view', () => {
    expect(Home).toBeViewComponent();
  });

  it('renders a title', () => {
    const { element } = mount(Home);
    expect(element.querySelectorAll('h1')).toHaveLength(1);
  });
});
