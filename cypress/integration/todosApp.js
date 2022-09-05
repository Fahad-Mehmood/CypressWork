/// <reference types="cypress" />

describe('todo actions', () => {
    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')

        cy.get('.new-todo').type('clear {enter}')
    
    })

    it(' to add todo in list', () =>{

        cy.get('label').should('have.text', 'clear')
        cy.get('.toggle').should('not.be.checked')
    })

    it('mark todo as completed', () =>{

        cy.get('.toggle').click()

        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    })

    it(' should clear completed todos', () =>{

        cy.get('.toggle').click()

        cy.contains('Clear completed').click()
        cy.get('.todo-list').should('not.have.descendants', 'li')
    })
    

})



