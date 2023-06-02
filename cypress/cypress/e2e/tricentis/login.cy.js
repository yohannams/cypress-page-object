import baseLogin from "../../../support/PageObject/loginPage.cy";

describe("tricentis test", () => {
  const BaseLogin = new baseLogin();
  it("login", () => {
    cy.visit("https://demowebshop.tricentis.com/");
    cy.get(BaseLogin.loginMenu).click();
    cy.get(BaseLogin.email).type("sanber@gmail.com");
    cy.get(BaseLogin.password).type("Sanber12@");
    cy.get(BaseLogin.rememberMe).click();
    cy.get(BaseLogin.loginBtn).click();
    cy.get(BaseLogin.logoutMenu).should("be.visible");
  });
  it("logout", () => {
    cy.visit("https://demowebshop.tricentis.com/");
    cy.get(BaseLogin.loginMenu).click();
    cy.get(BaseLogin.email).type("sanber@gmail.com");
    cy.get(BaseLogin.password).type("Sanber12@");
    cy.get(BaseLogin.rememberMe).click();
    cy.get(BaseLogin.loginBtn).click();
    cy.get(BaseLogin.logoutMenu).should("be.visible");
  });
  it("cart", () => {
    cy.visit("https://demowebshop.tricentis.com/");
    cy.get(".ico-login").click();
    cy.get("#Email").type("sanber@gmail.com");
    cy.get("#Password").type("Sanber12@");
    cy.get("#RememberMe").click();
    cy.get("form > .buttons > .button-1").click();
    cy.get(".ico-logout").should("be.visible");
    cy.get(
      ":nth-child(2) > .product-item > .details > .add-info > .buttons > .button-2"
    ).click();
  });
});
