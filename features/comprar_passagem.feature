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

    Cenario: Compra com Sucesso DDT
        Dado que estou no site Blazedemo
        Quando seleciono a origem como "<origem>"
        E o destino como "<destino>"
        E clico no botao "Find Flights"
        Entao verifico o texto Flights from "<origem>" to "<destino>"
        E se a URL contem "reserve"
        Quando selecino o voo"<voo>" da companhia "<companhia>"
        Entao verifico se a URL contem "purchase"
        Quando preencho o nome como "<nome>"
        E seleciono a bandeira do cartão como "<bandeira>"
        E marco a opçao "Remmember me"
        E clico no botao "Purchase Flight"
        Entao cerifico se a URL contem "confirmation"
        E se exibe a mensagem de agradecimento "Thank you for your purchase today!"    
        E se contem a informaçao "Amount" com "<preco>"
    
    Exemplos:
        | origem     | destino  | voo   | companhia      | nome          | bandeira            | preco |
        | São Paolo  | London   | 9696  | Aer Lingus     | Charlie Brown | Visa                | 555   |
        | Portland   | Dublin   | 12    | Virgin America | Harry Potter  | American Express    | 555   |
        | Boston     | New York | 4346  | Lufthansa      | John Smith    | Dinner's Club       | 555   |