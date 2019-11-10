import { getGreeting } from '../support/app.po';

describe('rich-stock', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to rich-stock!');
  });
});
