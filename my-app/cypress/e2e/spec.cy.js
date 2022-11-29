describe('visits the page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    /* ==== Generated with Cypress Studio ==== */
  })
})
 describe('takes the input number', () => {
  it('input it is taken', () => {
    cy.get('.start-input').clear('2');
    cy.get('.start-input').type('2');
  })
})

describe('takes the input number', () => {
  it('input it is taken', () => {
    cy.get('.start-input').clear('2');
    cy.get('.start-input').type('2');
  })
   it('button clicks', () => {
    cy.get('[data-testid="start"]').click();
    
   })
})
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    describe('changes page and then takes decision input', () => {
      it('input it is taken', () => {
        cy.get('.decision-input').click();
        cy.get('.decision-input').clear();
        cy.get('.decision-input').type('Pizza');
        
      
      })
      it('button it is clicked again', () => { 
       
        cy.get('[data-testid="decision-input"]').click();
        })
    })





    describe('temp', () => {
      it('temp', () => {
      
        cy.get('[name="input-1"]').clear('M');
        cy.get('[name="input-1"]').type('Mushrooms ');
        cy.get('[name="input-2"]').clear('p');
        cy.get('[name="input-2"]').type('pepperoni');
        cy.get('[name="input-3"]').clear('c');
        cy.get('[name="input-3"]').type('cheese');
        cy.get('[data-testid="options-input"]').click();
        cy.get(':nth-child(1) > :nth-child(2) > input').click({force: true});
        cy.get(':nth-child(1) > :nth-child(2) > input').click({force: true});
        cy.get(':nth-child(2) > :nth-child(2) > input').clear('h');
        cy.get(':nth-child(2) > :nth-child(2) > input').type('hello');
        cy.get(':nth-child(2) > :nth-child(2) > .custom-select').select('Pro');
        cy.get(':nth-child(2) > :nth-child(3) > .custom-select').select('Con');
        cy.get(':nth-child(2) > :nth-child(3) > input').clear('n');
        cy.get(':nth-child(2) > :nth-child(3) > input').type('nope');
        cy.get(':nth-child(3) > :nth-child(2) > .custom-select').select('Pro');
        cy.get(':nth-child(3) > :nth-child(2) > input').clear('fd');
        cy.get(':nth-child(3) > :nth-child(2) > input').type('fdgrefdg');
        cy.get(':nth-child(3) > :nth-child(3) > .custom-select').select('Con');
        cy.get(':nth-child(3) > :nth-child(3) > input').clear('fg');
        cy.get(':nth-child(3) > :nth-child(3) > input').type('fgfdg');
        cy.get('.submit').click();
        cy.get('.submit').click();
        cy.get(':nth-child(1) > .pro-con-select').select('Mushrooms');
        cy.get(':nth-child(2) > .pro-con-select').select('pepperoni');
        cy.get('.submit').click();
        /* ==== End Cypress Studio ==== */
      })
      })
    

