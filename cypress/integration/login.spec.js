const targetUrl = 'http://ec2-54-229-159-97.eu-west-1.compute.amazonaws.com/';

describe('Testing login for ARMS', () => {
    let data
    before(() => {
        cy.clearCookies()
        cy.fixture('login').then(result => {
            data = result
        })
        cy.visit(targetUrl)
    })

    it('login to arms with correct email and password', () => {
        cy.get('#email').type(data.correctDetails.email)
        cy.get('#password').type(data.correctDetails.password)
        cy.get("button").contains("Login").click()
        cy.url().should('include','/home')
    })

})
describe("testing staffing tools", ()=>{
    it("staffing tools testv", () =>{
        cy.get('#navbarSupportedContent > :nth-child(1) > :nth-child(4)').click()
})
})