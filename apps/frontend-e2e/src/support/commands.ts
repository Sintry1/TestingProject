// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    /**
     * Perform a login call to the API and save the result to local storage
     */
    login(): void;
    restoreAccessInfoToLocalStorage(): void;
  }
}

let accessInfo: unknown = null;

Cypress.Commands.add('login', () => {
  cy.request('POST', 'http://localhost:3333/auth/login', {
    email: 'user@example.com',
    password: 'abcDEF123',
  }).then((response) => {
    console.log('response', response);
    const loginResponse = response.body;
    accessInfo = {
      user: JSON.parse(atob(loginResponse.accessToken.split('.')[1])),
      accessToken: loginResponse.accessToken,
      refreshToken: loginResponse.refreshToken,
    };

    localStorage.removeItem('accessInfo');

    localStorage.setItem('accessInfo', JSON.stringify(accessInfo));
  });
});

Cypress.Commands.add('restoreAccessInfoToLocalStorage', () => {
  localStorage.setItem('accessInfo', JSON.stringify(accessInfo));
});
