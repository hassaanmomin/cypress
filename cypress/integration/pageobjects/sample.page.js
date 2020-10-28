const timeout = {timeout: 10000}

class sample {

  //Page Elements
  get signInBtn() {
    return cy.get('a[href="/login"]', timeout);
  }

  get emailLabel() {
      return cy.get('.nfEmailPhoneControls .input_id', timeout);
  }

  get email() {
    return cy.get('#id_userLoginId', timeout);
  }

  get pwdLabel() {
      return cy.get('.nfPasswordControls .input_id', timeout);
  }

  get password() {
    return cy.get('#id_password', timeout);
  }

  // Page Methods

  openWebsite(url) {
    cy.visit(url)
  }

  openSignInPage() {
    this.signInBtn.click();
    cy.url().should('include', '/login')
  }

  inputCredentials(e, p) {
    this.emailLabel.click();
    this.email.scrollIntoView()
      .should('be.visible')
      .click()
      .type(e)
      .should('have.value', e);

    this.pwdLabel.click();
      this.password.scrollIntoView()
      .should('be.visible')
      .click()
      .type(p)
      .should('have.value', p);
  }
  
  
}

module.exports = new sample();
