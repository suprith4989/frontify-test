import {mediaLibrary} from '../support/pageObjects/common.js'

describe('Test Frontier test cases', () => {
  beforeEach(() => {
    cy.visit('https://demo.frontify.com/d/FkBpT1nT1tqo/media-library')
  })
  it('Filter by images functionality test', () => {
    cy.get(mediaLibrary.filterDropDown)
      .should('exist')
      .click()
    cy.get(mediaLibrary.imagesCheckbox)
      .contains("Images")
      .click()
    cy.get(mediaLibrary.filterDropDown)
      .click()
    cy.get(mediaLibrary.imagesFilterApplied)
      .contains("28")
    cy.get(mediaLibrary.filterDropDown)
      .click()
    cy.get(mediaLibrary.clearFilters)
      .click()
  })
  it('Filter by movies functionality test', () => {
    cy.get(mediaLibrary.filterDropDown)
      .click()
    cy.get(mediaLibrary.imagesCheckbox)
      .contains("Movies")
      .click()
    cy.get(mediaLibrary.filterDropDown)
      .click()
    cy.get(mediaLibrary.imagesFilterApplied)
      .contains("1")
  })
})