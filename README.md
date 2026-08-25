# -aula-banco-de-dados-exercicio-loja-de-infor

1. Corrigido atualizarCliente.js, buscarClientePorId.js, removerCliente.js, atualizarProduto.js, buscarProdutoPorId.js, removerProduto.js — usavam id em vez de id_cliente/id_produto.

2. Criado o server.js ligando as 20 rotas.

3. Corrigido cadastrarItemPedido.js e atualizarItemPedido.js — faltava o campo id_produto.

4. Resolvido problema de autenticação do MySQL 8.4 no Codespace (trocado pra caching_sha2_password).

5. Corrigido import do init.sql com charset utf8mb4 pra não corromper acentos.

6. Corrigido o nome do arquivo importado errado no server.js (buscarItemPedidoPorID → buscarItemPedidoPorId).