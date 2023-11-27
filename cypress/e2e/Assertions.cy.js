
describe("Assertion demo", () => {

     it("imlicit assertion", () => {

        cy.visit("https://dev-admin.storyscale.com/login/")

        //should , and

        cy.url().should('include','dev-admin')
        .should('eq','https://dev-admin.storyscale.com/login/')
        .and('not.contain','storyscales')

        cy.title().should('eq','StoryScale Admin')
        cy.get('.login--logo > .img-fluid').should('exist').and('be.visible')
         
     })


     it('Explicit Assertion', () => {

        cy.visit("https://dev-admin.storyscale.com/login/")

        cy.get("#InputEmail1").type("storyteller1@yopmail.com")
        cy.get("button[name='button']").click()
        cy.get("#InputPassword1").type("Password")
        cy.get("button[name='button']").click()

        let expName = "xyz";

        cy.get(".d-xs-none").then(  (x) => {

            let actName = x.text()

            //BDD
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)


            //TDD
            assert.equal(actName,expName)
            assert.notEqual(actName,expName)
        })





     })

})