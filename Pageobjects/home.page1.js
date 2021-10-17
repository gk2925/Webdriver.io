import Page from '../page';

class HomePage1 extends Page {

// locators 

get letsGoButton() {return $('#search-button');}
get popperText() { return $('//div[@class="popper"]/div') }

//intercatons 

async clickLetsGoButton(){
    await this.letsGoButton.click();
}


async getTextForPopper(){
    var text = await this.popperText.getText();
    return text;
}



}

export default new HomePage1();