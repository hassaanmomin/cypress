/// <reference types= "cypress" />

describe('Todo Application', () => {
    beforeEach(() => {
        cy.visit('http://todomvc.com/examples/react');
        cy.injectAxe();
    });
    
    it('should report any accessibility failures if present', () => {
        cy.checkA11y();
    });

    it('should exclude specific element on the page', () => {
        cy.checkA11y({ exclude: ['.learn'] });
    });

    it('should only test specific element on the page', () => {
        cy.checkA11y('.learn');
    });

    it('should only include rules with serious and critical impacts', () => {
        cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] });
    });

    it.only('should exclude specific accessibility rule', () => {
        cy.checkA11y(null, { rules: {
            'color-contrast': { enabled: false }
        } });
    });
});