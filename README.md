# stackspot-bob-esponja
Stack Spot Exemplo Bob Esponja

## 
Stack: Angular Angular BOB v14+





Plugin: IBGE Municipio
Motivo geral: Criei esse plugin para usar a api do IBGE que consulta os estados brasileiros, basta instalar o plugin na aplicacao angular que ja é possivel visualizar os dados da api na rota /cidade-lista
Inputs: Nenhum
Hooks: Precisei criar o hook edit no after render para colocar os imports do componente angular no arquivo app-routing.module.ts e adicionar o nome do componente para criar uma nova rota. Foi utilizado tanto o insert-before quanto o inser-after.
Também Precisei criar o hook edit no after render para colocar os imports corretos no documento app.module.ts que tem os modules do Angular, Foi utilizado tanto o insert-before quanto o replace-by

Plugin: Gary Mock Server
Motivo geral: Criei esse plugin para criar um servidor de  apis rest local. utilizando a base do docker. Com esse plugin o desenvolvedor nao precisa usar o ambiente de desenvolvimento e pode simular as chamadas com um arquivo json Local. ja existe um modelo de api dentro do servidor.
Inputs: Não precisei usar  Hooks nesse plugin
Hooks: Não precisei usar  Hooks nesse plugin



  - type: edit
    trigger: after-render
    path: src/app/app.module.ts
    changes:
      - search:
          string: "@NgModule({"
          insert-before:
            value: "import { FormCidadeComponent } from './form-cidade/form-cidade.component';\n"
          when:
            not-exists: "import { FormCidadeComponent } from './form-cidade/form-cidade.component';"            
      - search:
          string: "declarations: [AppComponent,"
          replace-by:
            value: "declarations: [AppComponent, FormCidadeComponent,"
          when:
            not-exists: "declarations: [AppComponent, FormCidadeComponent,"


## Como importar e usar essa stack

  $ stk import stack https://github.com/slackwarecps/bob-esponja-stack