const { BASE_URL } = require('../utils/constants');
const gameName = "Warzone"

describe("When the user want to remove a game", () => {
    describe("When the user doesn't complete all the fields", () => {
        before(() => {
            cy.visit(BASE_URL);
            cy.get(`#${gameName} .MuiCardActions-root #btn-delete`).click()

        });
        it("Then the removed game shouldn't exist", () => {
            cy.get(`#${gameName} .MuiCardContent-root .MuiTypography-h5`).should("not.exist")
        });
    });

});
