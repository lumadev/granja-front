START TRANSACTION;

--dados da fase de produção

INSERT INTO granja.fase_producao(sigla, descricao)
    VALUES ('ENG', 'Fase onde os pintinhos são alimentados até o final (abate)');

INSERT INTO granja.fase_producao(sigla, descricao)
    VALUES ('REC', 'Fase onde pintinhos são criados até virarem frangas ou frango, criados em galpões separados (+-1 dia até 23/24 semanas)');

INSERT INTO granja.fase_producao(sigla, descricao)
    VALUES ('MAT', 'Fase onde as fêmeas gestantes vão parir e amamentar leitões.');

INSERT INTO granja.fase_producao(sigla, descricao)
    VALUES ('CRE', 'Fase onde leitões desmamados são alimentados até 23 Kg');

INSERT INTO granja.fase_producao(sigla, descricao)
    VALUES ('TER', 'Fase onde leitões descrechados são alimentados até o final (abate)');

--dados do tipo da granja

INSERT INTO granja.tipo_granja(sigla, descricao)
    VALUES ('URE', 'Recria');

INSERT INTO granja.tipo_granja(sigla, descricao)
    VALUES ('UCC', 'Ciclo Completo');

INSERT INTO granja.tipo_granja(sigla, descricao)
    VALUES ('UPL', 'Produtora de Leitões');

INSERT INTO granja.tipo_granja(sigla, descricao)
    VALUES ('UPD', 'Produtora de desmamados');

INSERT INTO granja.tipo_granja(sigla, descricao)
    VALUES ('UTE', 'Terminador');

INSERT INTO granja.tipo_granja(sigla, descricao)
    VALUES ('UPM', 'Matrizes');

INSERT INTO granja.tipo_granja(sigla, descricao)
    VALUES ('UCR', 'Crechário');

--dados dos animais

INSERT INTO granja.animal(nome, tipo, status, localizacao, "dataNascimento", "entradaPlantel", 
            "pesoCompra", raca, "codigoRastreamento", id_fase_producao, id_tipo_granja)
    VALUES ('SAX648', 'poltry', 'ativo', 'Sala 5', '2017-06-29 02:53', '2019-06-16', 98.934, 'ac-7077/m', '742B7DC9863349D2A88A9AE6AC3DDABD', 1, 1);

INSERT INTO granja.animal(nome, tipo, status, localizacao, "dataNascimento", "entradaPlantel", 
            "pesoCompra", raca, "codigoRastreamento", id_fase_producao, id_tipo_granja)
    VALUES ('CPI834', 'poltry', 'ativo', 'Pocilga/LADO B', '2017-07-21 00:18', '2019-05-30', 125.056, 'yp-4979/d', 'DC7FFF687B564B48850055B8C5737485', 2, 2);

INSERT INTO granja.animal(nome, tipo, status, localizacao, "dataNascimento", "entradaPlantel", 
            "pesoCompra", raca, "codigoRastreamento", id_fase_producao, id_tipo_granja)
    VALUES ('IAH768', 'swine', 'ativo', 'Pocilga/NORTE', '2017-08-18 07:00', '2019-05-29', 115.232, 'ui-4460/g', '9479412EFF3F4FC1826FCB9A8BE47E50', 3, 2);

INSERT INTO granja.animal(nome, tipo, status, localizacao, "dataNascimento", "entradaPlantel", 
            "pesoCompra", raca, "codigoRastreamento", id_fase_producao, id_tipo_granja)
    VALUES ('AFL876', 'swine', 'ativo', 'Sala 2', '2017-06-22 01:54', '2019-06-21', 118.31, 'pk-2645/j', 'E7B31F4C02904EE6B155F71C45AA17FA', 4, 3);

INSERT INTO granja.animal(nome, tipo, status, localizacao, "dataNascimento", "entradaPlantel", 
            "pesoCompra", raca, "codigoRastreamento", id_fase_producao, id_tipo_granja)
    VALUES ('IQQ273', 'swine', 'ativo', 'Sala 6', '2017-06-16 18:45', '2019-06-09', 134.952, 'ui-4460/g', '2379C3718D0E43BB83D3D1554C577BB0', 4, 4);

INSERT INTO granja.animal(nome, tipo, status, localizacao, "dataNascimento", "entradaPlantel", 
            "pesoCompra", raca, "codigoRastreamento", id_fase_producao, id_tipo_granja)
    VALUES ('ISY854', 'swine', 'ativo', 'Sala 3', '2017-08-26 10:48', '2019-06-16', 124.755, 'cb-3114/g', '87D275E9D6FE45499668AA91E0A0F0C6', 3, 5);

INSERT INTO granja.animal(nome, tipo, status, localizacao, "dataNascimento", "entradaPlantel", 
            "pesoCompra", raca, "codigoRastreamento", id_fase_producao, id_tipo_granja)
    VALUES ('NIW164', 'poltry', 'ativo', 'Sala 9', '2017-08-22 22:54', '2019-06-15', 142.42, 'zm-4249/f', '2058C689FF804DAE84C82EFE514409D3', 2, 1);

INSERT INTO granja.animal(nome, tipo, status, localizacao, "dataNascimento", "entradaPlantel", 
            "pesoCompra", raca, "codigoRastreamento", id_fase_producao, id_tipo_granja)
    VALUES ('DXH634', 'swine', 'ativo', 'Sala 1', '2017-06-23 02:53', '2019-05-07', 104.052, 'sq-5790/s', 'FDE4D2DB1F4E4760B7F84C85AC108CEB', 2, 1);

INSERT INTO granja.animal(nome, tipo, status, localizacao, "dataNascimento", "entradaPlantel", 
            "pesoCompra", raca, "codigoRastreamento", id_fase_producao, id_tipo_granja)
    VALUES ('VHJ830', 'poltry', 'ativo', 'Sala 8', '2017-08-01 06:39', '2019-05-21', 89.34, 'km-6624/b', 'E41676E68AE3462E97A121219B0B19AC', 1, 1);

INSERT INTO granja.animal(nome, tipo, status, localizacao, "dataNascimento", "entradaPlantel", 
            "pesoCompra", raca, "codigoRastreamento", id_fase_producao, id_tipo_granja)
    VALUES ('EPM336', 'swine', 'ativo', 'Sala 5', '2017-06-18 13:16', '2019-08-01', 131.214, 'os-2179/d', '2DE3AAA2A1C8446E956ED50B6810FAE3', 5, 3);

INSERT INTO granja.animal(nome, tipo, status, localizacao, "dataNascimento", "entradaPlantel", 
            "pesoCompra", raca, "codigoRastreamento", id_fase_producao, id_tipo_granja)
    VALUES ('NZQ003', 'poltry', 'ativo', 'Sala 1', '2017-08-11 18:33', '2019-07-13', 122.804, 'ss-2108/q', '691B59CFB20E429FBBF78E5EB775CBE6', 1, 6);

INSERT INTO granja.animal(nome, tipo, status, localizacao, "dataNascimento", "entradaPlantel", 
            "pesoCompra", raca, "codigoRastreamento", id_fase_producao, id_tipo_granja)
    VALUES ('ZLU075', 'swine', 'ativo', 'Sala 3', '2017-07-18 07:53', '2019-07-09', 85.606, 'up-6259/s', '7AEC2742BA4F4C3A931C36E2D0338E5B', 5, 7);

COMMIT;