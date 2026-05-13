export default class HomePage {
    //Construtor com o mapeamento dos elementos  
    constructor(page) {
        this.page = page; // o objeto do PW interno recebe o objeto do PW externo
        this.titulo = 'h1'
        this.origem = '[ name="fromPort"]'
        this.destino = '[ name="toPort"]' 
        this.btnFindFlights = '.btn-primary'
        this.url = 'https://www.blazedemo.com'
    }

}  //Mapear as ações  
    async selecionar_origem(cidade_origem){
        await this.page.locator(this.origem).selectOption(cidade_origem)
    }

    async selecionar_destino(cidade_destino){
        await this.page.locator(this.destino).selectOption(cidade_destino)    
    }

    async clicar_find_flight(){
        await this.page.locator(this.btnFindFlights).click()
    }

    // Jeito "Rebelde" - verificação dentro do mapeamento 