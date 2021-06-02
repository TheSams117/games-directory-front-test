const { BASE_URL } = require('../utils/constants');
const faker = require('faker').random;
const gameName = `WarzoneEdited${faker.words(1)}`
const gameConsole = "PC"
const gameGenre = "FPS edited"
const gameImgUrl = "https://www.hd-tecnologia.com/imagenes/articulos/2021/04/El-fin-de-Call-of-Duty-Warzone-sera-este-21-de-abril-segun-Activision.jpg"

const gameNameEdited = `GameEditedOk${faker.words(1)}`

describe("When the user want to update a game", () => {
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
    describe("When the user doesn't complete all the fields", () => {
        before(() => {
            cy.visit(BASE_URL);
            cy.get(`#${gameName} .MuiCardActions-root  #btn-edit`).click()
            cy.wait(400);
            cy.get('#game-name').clear()
            cy.wait(400);
            cy.get('#game-name').type(gameName)
            cy.get('#select-game-console').click()
            cy.get(`[data-value="${gameConsole}"]`).click()
            cy.wait(400);
            cy.get('#game-genre').clear()
            cy.wait(400);
            cy.get('#game-imgurl').clear()

        });
        it("Then the Save button should be disabled", () => {
            cy.get('#btn-dialog-edit-add').should('be.disabled')
        });
    });
    describe("When the user try to update a game succesfully", () => {
        before(() => {
            cy.visit(BASE_URL);
            cy.get(`#${gameName}  .MuiCardActions-root  #btn-edit`).click()
            cy.wait(400);
            cy.get('#game-name').clear()
            cy.wait(400);
            cy.get('#game-name').type(gameNameEdited)
            cy.get('#select-game-console').click()
            cy.get(`[data-value="${gameConsole}"]`).click()
            cy.wait(400);
            cy.get('#game-genre').clear()
            cy.wait(400);
            cy.get('#game-genre').type(gameGenre)
            cy.wait(400);
            cy.get('#game-imgurl').clear()
            cy.wait(400);
            cy.get('#game-imgurl').type(gameImgUrl)
            cy.get('#btn-dialog-edit-add').click()
        });
        it("Then the game should be showed with the right name and console and genre", () => {
            cy.get(`#${gameNameEdited} .MuiCardContent-root .MuiTypography-h5`).should("have.text", gameNameEdited)
            cy.get(`#${gameNameEdited} .MuiCardContent-root :nth-child(2)`).should("have.text", gameConsole)
            cy.get(`#${gameNameEdited} .MuiCardContent-root :nth-child(3)`).should("have.text", gameGenre)
        });
    });

});
