import Page from '../page';
class SearchPage extends Page {

//locators 
get viewButton() {return $('.view-button')}


//functions or intercations 

async isSearchResultsDisplayed(){

        let bool =  await this.viewButton.isDisplayed();
        return bool;
}
}

export default new SearchPage();