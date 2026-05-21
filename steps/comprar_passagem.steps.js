const { Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

// import { Given, When, Then } from '@cucumber/cucumber';
// import HomePage from '../pages/home.page';
// import ReservePage from '../pages/reserve.page';
// import PurchasePage from '../pages/purchase.page';
// import ConfirmationPage from '../pages/confirmation.page';

Given('que estou no site Blazedemo', async function (){
    await this.page.goto(this.HomePage.url)                   // abre o browser neste endereço 
    await this.HomePage.verificar_mensagem_boas_vindas() // confirma se aparece a mensagem inicial  
});


When('seleciono a origem como {string}', async function (origem) {
    await this.HomePage.selecionar_origem(origem)
});


When('seleciono o destino como {string}', async function (destino) {
    await this.HomePage.selecionar_destino(destino)
});


// versão que clica no botão a partir do texto escrito no botão
When('clico no botao {string}', async function (texto_botao) {
    await this.HomePage.clicar_find_flights(texto_botao)
});


// Exemplo conforme o cenário simples (sem o texto "Find Flights")
// Se for sempre clicar no botão olhando apenas o seletor  
When('clico no botao', async function () {
    // Não precisaria ter recebido o parametro, seria só dar instrução de clicar  
    await this.HomePage.clicar_find_flights()
});


// Cenário simples - verifica a mensagem de cidades de origem e destino
Then('verifico o texto {string}', async function (mensagem_origem_destino) {
    await this.ReservePage.verificar_titulo(mensagem_origem_destino)
});


Then('verifico se a URL contem {string}', async function (pagina) {
    expect(this.page).toHaveURL(`/${pagina}\.php`)
});


When('selecino o voo"{string}" da companhia {string}', async function (voo, companhia) {
    await this.ReservePage.selecionar_voo(voo, companhia)
});


When('preencho o nome como {string}', async function (nome) {
    await this.PurchasePage.preencher_nome(nome)
});


When('seleciono a bandeira do cartão como {string}', async function (bandeira) {
    await this.PurchasePage.selecionar_bandeira(bandeira)
});


When('marco a opçao {string}', async function (string) {
    // Não estamos usando o parametro que é recebido neste bloco 
    await this.PurchasePage.marcar_lembrete()
});


// When('clico no botao {string}', function (string) {
//     // Não estamos usando o parametro que é recebido neste bloco
//     PurchasePage.comprar_passagem()
// });


Then('se exibe a mensagem de agradecimento {string}', async function (string) {
    await expect(this.page.locator(this.ConfirmationPage.mensagem)).toHaveText('Thank you for your purchase today!')
});


Then('se contem a informaçao {string} com {string}', async function (quantia, preco) {
    // encontra a linha em que está escrita a quantia / "Amount"
    const linha_preco = await this.page.locator('tr').filter({ has: this.page.locator('td', { hastext: quantia })})
    // na linha selecionada, verifica se contém o valor/preco 
    await expect(linha_preco).toContainText(preco)
});


// Esquema de Cenário - verifica a mensagem contendo as duas cidades que recebe como parametro
Then('verifico o texto Flights from {string} to {string}', async function (origem, destino) {
    await expect(this.page.locator(this.ReservePage.titulo)).toHaveText(`Flights from ${origem} to ${destino}:`)
});

