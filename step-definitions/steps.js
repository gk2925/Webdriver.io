import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../Pageobjects/home.page';
import HomePage1 from '../Pageobjects/home.page1';
import { assert } from 'chai';
import SearchPage from '../Pageobjects/search.page';

const pages = {
	home: HomePage,
	home1: HomePage1,
	search:SearchPage
}


When(/^User clicks on Letsgo Button without entering search text$/, async() => {
	
	await HomePage1.clickLetsGoButton();
});



Then(/^popper message is being displayed$/, async() => {
	     var actualText = await HomePage1.getTextForPopper();
		 var expectedText = "To view prices and availability, please enter a location."
		 assert.strictEqual(actualText,expectedText);


});



Then(/^User enters city as current location and click on Lets go button$/, async () => {
	await HomePage.searchForGivenLocation();
});






Given(/^User is at the (\w+) page of application$/, async (page,) => {
	pages[page].open();
	await browser.maximizeWindow();

});


Then(/^Appropriate search results are displayed$/, async () => {
	let bool = await SearchPage.isSearchResultsDisplayed();
	assert.isTrue(bool);
});


When(/^Users tries to get some text$/, async() => {
	return true;
});


Then(/^Apropriate search results are displayed$/, async () => {
	await expect(HomePage.viewSeachResultsButton).toBeExisting();
	const dip = await HomePage.isViewDisplayed();
	assert.isTrue(dip);

});

