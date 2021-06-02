const { BASE_URL } = require('../utils/constants');
const faker = require('faker').random;
const gameName = `WarzoneListed${faker.words(1)}`
const gameConsole = "PC"
const gameGenre = "FPS"
const gameImgUrl = "https://www.hd-tecnologia.com/imagenes/articulos/2021/04/El-fin-de-Call-of-Duty-Warzone-sera-este-21-de-abril-segun-Activision.jpg"

describe("When the user want to list the games", () => {
    before(() => {
        cy.visit(BASE_URL);
        cy.get('#btn-add').click()
        cy.wait(400);
        cy.get('#game-name').type(gameName)
        cy.get('#select-game-console').click()
        cy.get(`[data-value="${gameConsole}"]`).click()
        cy.wait(400);
        cy.get('#game-genre').type(gameGenre)
        cy.wait(400);
        cy.get('#game-imgurl').type(gameImgUrl)
        cy.get('#btn-dialog-edit-add').click()
    });
    describe("When the user want to list the games", () => {
        before(() => {
            cy.visit(BASE_URL);
        });
        it("Then it should have img, name, console and genre", () => {
            cy.get(`#${gameName} .MuiCardMedia-root`).should("exist")
            cy.get(`#${gameName} .MuiCardContent-root .MuiTypography-h5`).should("exist")
            cy.get(`#${gameName} .MuiCardContent-root :nth-child(2)`).should("exist")
            cy.get(`#${gameName} .MuiCardContent-root :nth-child(3)`).should("exist")
            //cy.get('.makeStyles-cardGrid-5').find('.MuiCardMedia-root').should('have.length', 6)
        });


    });
});
