describe('Simple User Authentication', () => {
  
  it('login valid credential and verify user name', () => {
    cy.visit('https://automationexercise.com/login');

//Enter valid credentials
    cy.get ('input[data-qa="login-email"]').type ('kminchelle@gmail.com');
    cy.get ('input[data-qa="login-password"]').type ('0lelplR');

// Click login button
    cy.get('button[data-qa="login-button"]').click();

  
//Verify logged in 
    cy.contains('Logged in as kminchelle').should('be.visible');

// Click logout button
    cy.get('a[href="/logout"]').click();

  });


  it('Log in failed with invalid credentials', () => {
    cy.visit('https://automationexercise.com/login');

  
// Enter invalid credentials
    cy.get('input[data-qa="login-email"]').type('kminchell1e@gmail.com');
    cy.get('input[data-qa="login-password"]').type('wrongpassword');
  
// Click login button
    cy.get('button[data-qa="login-button"]').click();
 
  
// Verify error message is displayed
    cy.contains('p', 'Your email or password is incorrect!').should('be.visible');

}); 

});