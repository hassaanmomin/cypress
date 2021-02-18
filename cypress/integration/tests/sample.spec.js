/// <reference types="cypress" />
const sample = require('../../pageobjects/sample.page');

describe('My First Test', () => {
    it('Netflix - Gets, types and asserts', () => {
      sample.openWebsite('https://www.netflix.com/pk/');
      sample.openSignInPage();
      sample.inputCredentials('Hassaan', 'Momin');
    })
  })