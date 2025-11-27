import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'

describe('Cadastro', () => {
    it('Deve fazer o cadastro com sucesso', async () => {
        await homePage.openMenu('profile')
        await android.widget.TextView.click()
        

        
    });
    
});