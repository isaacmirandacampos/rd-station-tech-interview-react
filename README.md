# RD Station - Tech Interview React

## Sobre o desafio

Você pode ler a descrição do
desafio [aqui](https://github.com/isaacmirandacampos/rd-station-tech-interview-react/master/docs/challenger.md).

## Considerações do projeto

Aqui vão algumas considerações que tive quando fiz o projeto

### Uso de bibliotecas

Evitei totalmente o uso de qualquer biblioteca, pois acredito que seja o melhor para uma tech interview.

Algumas das propostas abordagens consideradas seriam diferentes dependendo do contexto ou do tamanho do projeto, vou
decorrer mais sobre isso nos próximos tópicos deste documento.

### Tipagem

Como o projeto e o desafio não fez nenhuma menção no uso de typescript, acreditei que era para ser evitado.
Como eu gosto de tipagem e achei uma ótima oportunidade de aplicar pela primeira vez o uso de JSDoc, assim o fiz.

Não fiz tipagem de tudo com JSDoc, mas priorizei implementar nas partes que mais poderiam ser reutilizadas.

Algumas etapas poderiam se beneficiar dos recursos do TypeScript, como o reaproveitamento de interfaces e tipos
dinâmicos, que facilitam a manutenção e garantem consistência no uso de estruturas de dados.

### Adaptação do formulário e as mensagens de erro

Como a ideia era não fazer uso de bibliotecas, implementei o algoritmo considerando o reaproveitamento. Ele é simples,
mas eficiente em validar o formulário, bloquear submissão e mostrar suas respectivas mensagens de erro.

O código do useForm seria mais entendível de usar com o typescript, o JSDoc se mostrou limitado em algumas partes,
embora fosse até mesmo possível melhorar a experiência de uso, não julguei importante para o teste.

## Ideias

Embora o projeto tinha até 3 dias para ser executado, infelizmente eu só consegui dedicar algumas horas no último dia,
por questões como essa, estou fazendo um levantamento do que eu consideraria fazer no cenário ideal.

### Uso de cache

Por ser um recurso que muda pouco, existiu uma boa oportunidade de fazer uso de cache no endpoint que busca as
preferências e funcionalidades do backend.

Eu gosto do [TanStack React query](https://tanstack.com/query/v4/docs/framework/react/guides/queries) para implementação
de cache no navegador. É muito fácil e rápido de usar, porém, como o desafio tinha como premissa o não uso de
biblioteca, não segui com ele, mas também não tive tempo de implementar o sistema de cache a mão.

### Testes

Algumas partes que poderiam ser melhor testadas, e outras até refatoradas para possibilitar os testes.
Um exemplo é o algoritmo que atualiza a lista de preferências e features, era possível separar a lógica e até mesmo
reaproveitar código.

#### Testes end-to-end

Outro ponto interessante era a implementação do cypress para testes e2e.


