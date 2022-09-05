
export class LoginPage {

    loginPage_username_id = '#uname'
    loginPage_password_id = '#pwd'
    loginPage_loginButton_id = '[type="submit"]'
    navigate(url) {

        cy.visit(url)
   
    }

    enterusername (username) {

        cy.get(this.loginPage_username_id).type(username)
    }

    enterpassword (pass) {

        cy.get(this.loginPage_password_id).type(pass)

    }

    clicklogin () {

        cy.get(this.loginPage_loginButton_id).click()

    }

}