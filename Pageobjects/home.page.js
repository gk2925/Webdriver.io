import Page from '../page';

class HomePage extends Page {
    //locators 

    get serachTextBox() {
        return $('.search-input-field')
    
    }

    //li[@data-testid='experiences-tab']/figure/span

    get serachTextBox(){
        return $('//button[@id="search-input-field"]')
    }
    get inputUsername() { return $('#username') }
    get acceptAllCookies() { return $('#truste-consent-button') }
    get viewSeachResultsButton() { return $('.view-button') }
    get inputPassword() { return $('#password') }
    get btnSubmit() { return $('button[type="submit"]') }
    get location() { return $('#search-input-field') }
    get letsGoButton() { return $("#search-button") }
    get firstAutoSuggestion() { return $('//*[@id="predicted-search-results"]/li[2]/div') }
    get currentLocationText() { return $(".current-location-text"); }
    get experiencesText() { return $('//span[@data-v-f0894210="Experiences"]'); }
    get location() { return $('#location-text-input-field'); }
    get letsGoButton() { return $("#search-button") }

    //functions
    async searchForGivenLocation() {
        await this.acceptAllCookies.click();
        await this.location.click();
        await this.location.setValue("R");
        await this.location.setValue("G");
        await this.currentLocationText.click();
        await browser.pause(2000);
        await this.letsGoButton.click();
        await browser.pause(6000);
    }


    async isViewDisplayed() {
        const display = await this.viewSeachResultsButton.isDisplayed();
        console.info(`the value of display is ${display}`)
        return display;
    }

    open() {
        return super.open('home');
    }
}

export default new HomePage();