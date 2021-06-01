const { BASE_URL } = require('../utils/constants');
const gameName = "Warzone"

describe("When the user want to list the games", () => {
    before(() => {
        cy.visit(BASE_URL);

    });
    it("Then it should have 6 elements of img, name, console and genre", () => {
        cy.get('#Halo  .MuiCardMedia-root').should("exist")
        cy.get('#Halo .MuiCardContent-root .MuiTypography-h5').should("exist")
        cy.get('#Halo > .MuiCardContent-root > :nth-child(2)').should("exist")
        cy.get('#Halo > .MuiCardContent-root > :nth-child(3)').should("exist")
        cy.get('.makeStyles-cardGrid-5').find('.MuiCardMedia-root').should('have.length', 6)
    });


});
