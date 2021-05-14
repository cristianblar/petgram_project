describe('Petgram', () => {
  it('App is opening', () => {
    cy.visit('/');
  });

  it('Categories navigation is working and loading new pictures', () => {
    cy.visit('/pet/1');
    cy.get('article');
    cy.visit('/pet/4');
    cy.get('article');
  });

  it('Navbar home button is working', () => {
    cy.visit('/pet/2');
    cy.get('nav a').first().click();
    cy.url().should('eq', 'https://petgram-front-cristianblar.vercel.app/');
  });

  it('Not registered users access directly to signin form when going to favorites', () => {
    cy.visit('/favorites');
    cy.get('form').should('have.length', 1);
    cy.get('input').should('have.length', 3);
  });

  it('Not registered users are able to sign up', () => {
    cy.visit('/signup');
    cy.get('input[name="email"]').type('testie@test.com');
    cy.get('input[name="password"]').type('abcd1234');
    cy.get('input[type="submit"]').click();
    cy.wait(2000);
    cy.location('pathname').should('eq', '/profile');
  });
});
