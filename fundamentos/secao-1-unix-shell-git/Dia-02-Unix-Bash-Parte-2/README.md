# <u>Exercícios:</u> Dia 02: Unix & Bash - Parte 2

Nesta seção foi proposto algumas atividades referente ao conteúdo de HTML do primeiro dia!

# <u>Exercícios Propostos:</u>

### 1. <u>**Comandos de input e output**</u> :heavy_check_mark:
    - Crie a pasta unix_tests_skills e navegue até ela.
    - Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, um em cada linha.
    - Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓
    - Conte quantas linhas tem o arquivo skills2.txt.
    - Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética.
    - Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.
    - Conte o número de linhas que contêm as letras br.
    - Conte o número de linhas que não contêm as letras br.
    - Adicione dois nomes de países ao final do arquivo phrases2.txt.
    - Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt
    - Ordene o arquivo bunch_of_things.txt.
### 2. <u>**Permissões**</u> :heavy_check_mark:
    - Crie a pasta unix_tests_permissions e navegue até ela.
    - Rode o comando ls -l e veja quais as permissões dos arquivos.
    - Crie o arquivo arquivo_teste.txt.
    - Mude a permissão do arquivo arquivo_teste.txt para que todas as pessoas usuárias possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l;
    - Tire a permissão de escrita do arquivo arquivo_teste.txt para todas as pessoas usuárias, verifique se está correto com o comando ls -l;
    - Volte à permissão do arquivo arquivo_teste.txt para a listada inicialmente utilizando o comando chmod 644 arquivo_teste.txt.
### 3. <u>**Processos & jobs**</u> :heavy_check_mark:
    - Liste todos os processos.
    - Agora use o comando sleep 30 &.
    - Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo).
    - Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue executando em background.
    - Crie um processo em background que rode o comando sleep por 300 segundos.
    - Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.
    - Verifique que apenas o processo sleep 300 está em execução com o comando jobs. Suspenda a execução desse processo.
    - Retome a execução do processo sleep 100 em background com o comando bg.
    - Termine a execução de todos os processos sleep (mate os processos).