import { renderComponent , getElementByTag, resizeWindow, expect } from '../test-helper';
import HeroesHeader from '../../src/components/heroes-header';

describe('HeroesHeader' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(HeroesHeader);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('Has the title and the subtitle of the app', () => {
    let title = component.find('h1');
    let subtitle = component.find('h3') ;
    expect(title).to.contain('Brastlewark Census');
    expect(subtitle).to.contain('For the most gossiper');
  });
});
