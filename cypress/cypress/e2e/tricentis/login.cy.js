import baseLogin from "../../../support/PageObject/loginPage.cy";

describe("tricentis test", () => {
  const BaseLogin = new baseLogin();
  it("login", () => {
    cy.visit("https://demowebshop.tricentis.com/");
    cy.get(baseLogin.loginMenu).click();
    cy.get(baseLogin.email).type("sanber@gamil.com");
    cy.get("#Password").type("Sanber12@");
    cy.get("#RememberMe").click();
    cy.get("form > .buttons > .button-1").click();
    cy.get(".ico-logout").should("be.visible");
  });
  it("cart", () => {
    cy.visit("https://demowebshop.tricentis.com/");
    cy.get(".ico-login").click();
    cy.get("#Email").type("sanber@gamil.com");
    cy.get("#Password").type("Sanber12@");
    cy.get("#RememberMe").click();
    cy.get("form > .buttons > .button-1").click();
    cy.get(".ico-logout").should("be.visible");
    cy.get(
      ":nth-child(2) > .product-item > .details > .add-info > .buttons > .button-2"
    ).click();
  });
});
