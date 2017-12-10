import { renderComponent , expect } from '../test-helper';
import HeroesIndex from '../../src/components/heroes-index';

describe('HeroesIndex' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(HeroesIndex);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
