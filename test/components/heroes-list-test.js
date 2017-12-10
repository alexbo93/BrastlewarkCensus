import { renderComponent , expect } from '../test-helper';
import FakeRouter from '../fake-react-components/fake-browser-component';
import ListState from '../states/list-state';
import EmptyListState from '../states/empty-list-state';
import ValidSearchState from '../states/valid-search-state';
import FakeSearchState from '../states/fake-search-state';


describe('HeroesList' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(FakeRouter, null, ListState);
  });

  it('Renders something', () => {
    expect(component).to.exist;
  });

  it("Creates heroes list element with all elements in state's heroes list", () => {
    expect(component.find('.heroes-list > ul')).to.exist;
    expect(component.find('.heroes-list > ul').children()).to.have.length(4);
  });

  it('Shows proper name and link according to the list of heroes in state', () => {
    expect(component.find('.heroes-list > ul').children().get(1).href).to.equal('/heroes/1');
    expect(component.find('.heroes-list > ul').children().get(1).text).to.equal('Gabriel Fakesurname');
  });

  it('Displays not found message if there are no results', () => {
    // Render the component with empty heroes list
    component = renderComponent(FakeRouter, null, EmptyListState);

    // List should now have only 1 node (not found message)
    // with respective icon (class not-found)
    expect(component.find('.heroes-list > ul').children()).to.have.length(1);
    expect(component.find('.not-found')).to.exist;
  });

  it('Displays not found message if search criteria does not match any user', () => {
    // Render the component with full heroes list and valid search criteria
    component = renderComponent(FakeRouter, null, FakeSearchState);

    // List should now have only 1 node (not found message)
    // with respective icon (class not-found)
    expect(component.find('.heroes-list > ul').children()).to.have.length(1);
    expect(component.find('.not-found')).to.exist;
  })

  it('Displays proper results depending of the search criteria', () => {
    // Render the component with full heroes list and valid search criteria
    component = renderComponent(FakeRouter, null, ValidSearchState);

    // Should only display one result: heroe Twizzle Chrometossle
    expect(component.find('.heroes-list > ul').children()).to.have.length(1);
    expect(component.find('.heroes-list > ul').children().get(0).text).to.equal('Twizzle Chrometossle');
  });

  it('Displays proper results depending of the search criteria', () => {
    // Render the component with full heroes list and valid search criteria
    component = renderComponent(FakeRouter, null, ValidSearchState);

    // Should only display one result: heroe Twizzle Chrometossle
    expect(component.find('.heroes-list > ul').children()).to.have.length(1);
  });
});
