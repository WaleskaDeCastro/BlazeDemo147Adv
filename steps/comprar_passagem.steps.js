import { Given, When, Then } from '@cucumber/cucumber';
import HomePage from '../pages/home.page';
import ReservePage from '../pages/reserve.page';
import PurchasePage from '../pages/purchase.page';
import ConfirmationPage from '../pages/confirmation.page';

Given('que estou no site Blazedemo', function ({page}) {
    page.goto(HomePage.url)                   // abre o browser neste endereço 
    HomePage.verificar_mensagem_boas_vindas() // confirma se aparece a mensagem inicial  
});

When('seleciono a origem como {string}', function (origem) {
    HomePage.selecionar_origem(origem)
});

And('seleciono o destino como {string}', function (destino) {
    HomePage.selecionar_destino(destino)
});

// versão que clica no botão a partir do texto escrito no botão
And('clico no botao {string}', function (texto_botao) {
    HomePage.clicar_find_flights(texto_botao)
});
// Exemplo conforme o cenário simples (sem o texto "Find Flights")
// Se for sempre clicar no botão olhando apenas o seletor  
And('clico no botao', function () {
    // Não precisaria ter recebido o parametro, seria só dar instrução de clicar  
    HomePage.clicar_find_flights()
});

// Cenário simples
Then('verifico o texto {string}', function (mensagem_origem_destino) {
    ReservePage.verificar_titulo(mensagem_origem_destino)
});



Then('se a URL contem {string}', function (string) {

});



When('selecino o voo"{int}" da companhia {string}', function (int, string) {

});



Then('verifico se a URL contem {string}', function (string) {

});



When('preencho o nome como {string}', function (string) {

});



When('seleciono a bandeira do cartão como {string}', function (string) {

});



When('marco a opçao {string}', function (string) {

});



When('clico no botao {string}', function (string) {

});



Then('cerifico se a URL contem {string}', function (string) {

});



Then('se exibe a mensagem de agradecimento {string}', function (string) {

});



Then('se contem a informaçao {string} com {string}', function (string, string2) {

});



Then('verifico o texto Flights from {string} to {string}', function (string, string2) {

});

