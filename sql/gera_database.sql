START TRANSACTION;

CREATE SCHEMA granja;

-- Table: granja.fase_producao

-- DROP TABLE granja.fase_producao;

CREATE SEQUENCE granja.fase_producao_id_seq;
CREATE SEQUENCE granja.tipo_granja_id_seq;
CREATE SEQUENCE granja.animal_id_animal_seq;

CREATE TABLE granja.fase_producao
(
  id bigint NOT NULL DEFAULT nextval('granja.fase_producao_id_seq'::regclass),
  sigla character varying(10) NOT NULL,
  descricao character varying(200) NOT NULL,
  CONSTRAINT pk_fase_producao PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE granja.fase_producao
  OWNER TO postgres;

-- Table: granja.tipo_granja

-- DROP TABLE granja.tipo_granja;

CREATE TABLE granja.tipo_granja
(
  id bigint NOT NULL DEFAULT nextval('granja.tipo_granja_id_seq'::regclass),
  sigla character varying(10) NOT NULL,
  descricao character varying(200) NOT NULL,
  CONSTRAINT pk_tipo_granja PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE granja.tipo_granja
  OWNER TO postgres;

-- Table: granja.animal

-- DROP TABLE granja.animal;

CREATE TABLE granja.animal
(
  id bigint NOT NULL DEFAULT nextval('granja.animal_id_animal_seq'::regclass),
  nome character varying(50) NOT NULL,
  tipo character varying(20) NOT NULL,
  status character varying(10) NOT NULL,
  localizacao character varying(30),
  "dataNascimento" timestamp without time zone,
  "entradaPlantel" date,
  "pesoCompra" double precision,
  raca character varying(20),
  "codigoRastreamento" character varying(100),
  id_fase_producao integer,
  id_tipo_granja integer,
  CONSTRAINT pk_animal PRIMARY KEY (id),
  CONSTRAINT fk_animal_fase_producao FOREIGN KEY (id_fase_producao)
      REFERENCES granja.fase_producao (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT fk_animal_tipo_granja FOREIGN KEY (id_tipo_granja)
      REFERENCES granja.tipo_granja (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT ck_status CHECK (status::text = ANY (ARRAY['ativo'::character varying::text, 'inativo'::character varying::text])),
  CONSTRAINT ck_tipo CHECK (tipo::text = ANY (ARRAY['poltry'::character varying::text, 'swine'::character varying::text]))
)
WITH (
  OIDS=FALSE
);
ALTER TABLE granja.animal
  OWNER TO postgres;

COMMIT;