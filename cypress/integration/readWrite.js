
it('Read file using fixture', () => {

    cy.fixture('example.json').then((data) => {

        cy.log(data.name)
        cy.log(data.email)


    }) 

})