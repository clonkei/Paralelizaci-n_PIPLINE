describe("Bienvenido al curso de Cypress sección 1", ()=>{
    it("Mi primer Test -> Hola mundo",()=>{
        //Mensaje de log
        cy.log("Hola Mundo")
        //Espera fija
        cy.wait(4000)
    })

    it("Segundo Test -> Campo TextBox", ()=>{
        //Ir a página web
        cy.visit("https://demoqa.com/text-box")
        //Seleccionar con id y escribir sobre TextBox
        cy.get("#userName").type("Víctor Manuel")
        cy.wait(4000)

    })
})//Cierre de describe