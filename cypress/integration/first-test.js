/// <reference types="cypress" />
import {LoginPage} from "../pages/login_page"

//creating object
const login_page = new LoginPage()


it(' Login ', function() {

    login_page.navigate('https://trytestingthis.netlify.app/');
    login_page.enterusername('test');
    login_page.enterpassword('test');
    login_page.clicklogin();



})

