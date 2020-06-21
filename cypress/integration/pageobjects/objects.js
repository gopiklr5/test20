

export const loginlink = () => cy.get('a[id="loginLink"]');


class objects{

  visit(){
    cy.visit('http://eaapp.somee.com/')

  }


  enterdetails(){

        loginlink().click();
        cy.get('label').contains('Password').should('be.visible');
        cy.get('input[name="UserName"]').should('be.visible');
        cy.get('input[name="UserName"]').type('admin');
        cy.get('input[name="Password"]').type('password');
        cy.get('input[value="Log in"]').click();


  }


}


export default objects;