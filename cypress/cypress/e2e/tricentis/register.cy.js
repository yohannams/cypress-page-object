describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://demowebshop.tricentis.com/");
    cy.get(".ico-register").click();
    cy.get("#FirstName").type("sanbercode");
    cy.get("#LastName").type("sanbercode");
    cy.get("#Email").type("sanber@gamil.com");
    cy.get("#Password").type("Sanber12@");
    cy.get("#ConfirmPassword").type("Sanber12@");
    cy.get("#register-button").click();
    cy.get(".result").should("contain.text", "Your registration completed");
  });
});
