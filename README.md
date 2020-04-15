# Git
É possível rodar o projeto nas branchs dev ou master.

# Sobre o Projeto
Projeto feito com React Native para listar os animais de uma granja. As telas que o App contém são: tela de listagem, de visualização de dados e de edição. É permitido filtrar os dados na listagem, e a listagem foi feita com uma solução de scroll infinito.

# Api
O projeto poderá ser rodado após seguir instruções do README da Api back-end.

# Como rodar o Projeto
- *Aviso importante* Para se conectar corretamente com a Api / rodar o projeto no device, é preciso mudar o ip o qual são feitas as chamadas de Api para o ip local da máquina. O ip deve ser alterado no arquivo *src/app.consts.js*
Obs. É possível ver o ip com o comando ifconfig (linux), geralmente irá aparecer na última interface de rede, na parte após a palavra "inet";
- Run ``react-native run-android`` no console para rodar o projeto no device;
- Run ``react-native start``
- Caso fique a tela branca rodar ``react-native run-android fix``