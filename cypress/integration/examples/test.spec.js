/// <reference types="cypress" />


import obj from '../pageobjects/objects.js'


describe('suitename - cypress hooks', () => {

        const objt = new obj();


    it('visit App - first test script', () => {

        objt.visit();
        objt.enterdetails();
        

    })



//     it('visit App - Second test script', () => {

//       cy.visit('http://eaapp.somee.com/');
//       cy.get('a').contains('Login').click();
//       cy.get('label').contains('Password').should('be.visible');
//       cy.get('input[name="UserName"]').should('be.visible');
//       cy.get('input[name="UserName"]').type('admin');
//       cy.get('input[name="Password"]').type('password');
//       cy.get('input[value="Log in"]').should('be.visible')
//       cy.get('input[value="Log in"]').click();

//   })
})




