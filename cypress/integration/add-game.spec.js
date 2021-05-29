
const { BASE_URL } = require('../utils/constants');
const gameName = "Warzone"
const gameConsole = "PC"
const gameGenre = "FPS"
const gameImgUrl = "https://www.hd-tecnologia.com/imagenes/articulos/2021/04/El-fin-de-Call-of-Duty-Warzone-sera-este-21-de-abril-segun-Activision.jpg"

describe("When the user want to register a new game", () => {
    before(() => {
        cy.visit(BASE_URL);
    });
    describe("When the user doesn't complete all the fields", () => {
        before(() => {
            cy.get('#btn-add').click()
            cy.wait(400);
            cy.get('#game-name').type(gameName)
            cy.wait(400);
            cy.get('#select-game-console').click()
            cy.get(`[data-value="${gameConsole}"]`).click()
        });
        it("Then the Agregar button should be disabled", () => {
            cy.get('#btn-dialog-edit-add').should('be.disabled')
        });
    });
    describe("When the user try to register a new game succesfully", () => {
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
        it("Then the game should be showed with the right name and console and genre", () => {
            cy.get(`#${gameName} .MuiCardContent-root .MuiTypography-h5`).should("have.text", gameName)
            cy.get(`#${gameName} .MuiCardContent-root :nth-child(2)`).should("have.text", gameConsole)
            cy.get(`#${gameName} .MuiCardContent-root :nth-child(3)`).should("have.text", gameGenre)
        });
    });

});
