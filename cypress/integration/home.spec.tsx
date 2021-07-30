/// <reference types="cypress"/>

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should render the home page and display a message', () => {
    cy.get('h1').contains('Welcome')
  })
  it('should render proper head tags', () => {
    cy.get('head').get('title').contains('Page Meta Title')
  })
})

export {}
