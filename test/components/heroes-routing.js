import { renderComponent , expect } from '../test-helper';
import HeroesFakeRouting from '../fake-react-components/heroes-fake-routing';
import HeroesFakeLanding from '../fake-react-components/heroes-fake-landing';
import ListState from '../states/list-state';

describe('HeroesFakeRouting' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(HeroesFakeRouting, null, ListState);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('redirect to index if invalid path', () => {
    component = renderComponent(HeroesFakeLanding, null, ListState)
    // heroes-list class only rendered in HeroesIndex
    // Index should load into the dom HeroesIndex component
    expect(component.find('.detail-header')).to.have.length(0);
    expect(component.find('.heroes-list > ul')).to.have.length(1);
  })

  it('redirect to details if /heroes/* path', () => {
    // .detail-header only rendered in Details page
    // Index should load into the dom HeroesIndex component
    expect(component.find('.detail-header')).to.have.length(1);
    expect(component.find('.heroes-list > ul')).to.have.length(0);
  })

  it('Displays correct details about user requested by URL', () => {
    expect(component.find('.heroe-name').text()).to.equal('Gabriel Fakesurname');
    // First <p> tag in file contains the age
    expect(component.find('.detail-body .col-xs-12').children().get(0).innerHTML).contains(306);
    // Check length of #friends List
    expect(component.find('#friends').children()).to.have.length(3);

  });
});
