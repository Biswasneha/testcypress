
describe('My First Test', () =>
 {
    it.skip('test1',() => {
       //step 

       cy.visit("https://www.storyscale.com/")
       cy.title().should('eq','Interactive product demo software for SaaS | StoryScale')
       cy.get(".btn-primary.w-button").click() //used class method
       
    })

   
  it.skip('test2',() => {
        
    cy.visit("https://dev-admin.storyscale.com/login")
    cy.get("#InputEmail1").type("storyteller1@yopmail.com") 
    // cy.get("//input[@id='InputEmail1']").type("storyteller1@yopmail.com")
    cy.get("button[name='button']").click()
    cy.get("#InputPassword1").type("Password")
    cy.get("button[name='button']").click()

  
    

  })

 it.skip('test3', () => {

  cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
  // cy.get('#dob').get("[data-date='6']").get("select[aria-label='Select month']").
  // get("[value='1998']")
  cy.get("#select2-billing_country-container")
  .click()
  cy.get(".select2-search__field")
  .type("Italy")
  .type('{enter}')
  
 })

 it('test4', () => {
  cy.visit("https://www.zoho.com/in/billing/contact-us/")
  cy.get("input#name").type("Codelogicx Technologies Pvt Ltd")
  cy.get("input#email").type("juli@yopmail.com")
  cy.get("input#number").type("6877979776")
  cy.get('input[placeholder="Convenient Date, Time & Time Zone"]').type("26/11/2023")
  cy.get('select[onchange="selectBuzType(this.value)"]').select('Computer Software')
  

 })


 it('preview tour' , () => {

cy.visit("https://app.storyscale.com/tours/preview/#728")





 })

  })