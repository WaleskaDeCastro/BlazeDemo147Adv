#language: pt
Funcionalidade: Comprar de Passagem 
    Cenario: Compra com Sucesso
        Dado que estou no site Blazedemo
        Quando seleciono a origem como "São Paolo"
        E o destino como "London"
        E clico no botao "Find Flights"
        Entao verifico o texto " Flights from São Paolo to London:"
        E se a URL contem "reserve"
        Quando selecino o voo"9696" da companhia "Aer Lingus"
        Entao verifico se a URL contem "purchase"
        Quando preencho o nome como "Waleska Castro"
        E seleciono a bandeira do cartão como "amex"
        E marco a opçao "Remmember me"
        E clico no botao "Purchase Flight"
        Entao cerifico se a URL contem "confirmation"
        E se exibe a mensagem de agradecimento "Thank you for your purchase today!"
        E se contem a informaçao "Amount" com "555 USD"
