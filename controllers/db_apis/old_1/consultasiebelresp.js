const database = require ('../../services/database');

const baseQuery =

`SELECT 'CONSULTASIEBELRESP' TABELA, 'INSERT' OPERACAO, 
CONSULTASIEBELRESP.IDS_CONSULTASIEBELRESP ,
CONSULTASIEBELRESP.ALERTA_S__N ,
CONSULTASIEBELRESP.AUTO_FALENCIA ,
CONSULTASIEBELRESP.BAIRRO_ONDE_RESIDE ,
CONSULTASIEBELRESP.CAPITAL_SOCIAL ,
CONSULTASIEBELRESP.CARGO_ADMINISTRADOR_1 ,
CONSULTASIEBELRESP.CARGO_ADMINISTRADOR_2 ,
CONSULTASIEBELRESP.CARGO_ADMINISTRADOR_3 ,
CONSULTASIEBELRESP.CEP ,
CONSULTASIEBELRESP.CEP_NUMERICO ,
CONSULTASIEBELRESP.CNPJ_CONSULTADO ,
CONSULTASIEBELRESP.CODIGO_DE_ATIVIDADE_SERASA ,
CONSULTASIEBELRESP.CODIGO_DO_TIPO_DE_SOCIEDADE ,
CONSULTASIEBELRESP.COMPLEMENTO ,
CONSULTASIEBELRESP.CONCORDATA ,
CONSULTASIEBELRESP.CONCORDATA_DEFERIDA ,
CONSULTASIEBELRESP.CONCORDATA_REQUERIDA ,
CONSULTASIEBELRESP.CONCORDATA_SUSPENSIVA ,
CONSULTASIEBELRESP.CPF_CNPJ_ADMINISTRADOR_1 ,
CONSULTASIEBELRESP.CPF_CNPJ_ADMINISTRADOR_2 ,
CONSULTASIEBELRESP.CPF_CNPJ_ADMINISTRADOR_3 ,
CONSULTASIEBELRESP.CPF_CNPJ_SOCIO_ACIONISTA_1 ,
CONSULTASIEBELRESP.CPF_CNPJ_SOCIO_ACIONISTA_1__CO ,
CONSULTASIEBELRESP.CPF_CNPJ_SOCIO_ACIONISTA_2 ,
CONSULTASIEBELRESP.CPF_CNPJ_SOCIO_ACIONISTA_2__CO ,
CONSULTASIEBELRESP.CPF_CNPJ_SOCIO_ACIONISTA_3 ,
CONSULTASIEBELRESP.CPF_CNPJ_SOCIO_ACIONISTA_3__CO ,
CONSULTASIEBELRESP.CPF_CNPJ_SOCIO_ACIONISTA_4 ,
CONSULTASIEBELRESP.CPF_CNPJ_SOCIO_ACIONISTA_4__CO ,
CONSULTASIEBELRESP.CPF_CNPJ_SOCIO_ACIONISTA_5 ,
CONSULTASIEBELRESP.CPF_CNPJ_SOCIO_ACIONISTA_5__CO ,
CONSULTASIEBELRESP.CPF_DO_TITULAR ,
CONSULTASIEBELRESP.DATA_DA_ENTRADA_DO_SOCIO_MAIS_ ,
CONSULTASIEBELRESP.DATA_DA_FUNDACAO ,
CONSULTASIEBELRESP.DATA_DA_MAIOR_FATURA ,
CONSULTASIEBELRESP.DATA_DA_ULTIMA_COMPRA ,
CONSULTASIEBELRESP.DATA_DE_ENTRADA_SOCIO_ACION001 ,
CONSULTASIEBELRESP.DATA_DE_ENTRADA_SOCIO_ACION002 ,
CONSULTASIEBELRESP.DATA_DE_ENTRADA_SOCIO_ACION003 ,
CONSULTASIEBELRESP.DATA_DE_ENTRADA_SOCIO_ACION004 ,
CONSULTASIEBELRESP.DATA_DE_ENTRADA_SOCIO_ACION005 ,
CONSULTASIEBELRESP.DATA_DE_INICIO_DA_ATIVIDADE ,
CONSULTASIEBELRESP.DATA_DE_NASCIMENTO_BASE_DE_CPF ,
CONSULTASIEBELRESP.DATA_DO_MAIOR_ACUMULO ,
CONSULTASIEBELRESP.DATA_DO_SISTEMA ,
CONSULTASIEBELRESP.DATA_ENTRADA_ADM_1 ,
CONSULTASIEBELRESP.DATA_ENTRADA_ADM_2 ,
CONSULTASIEBELRESP.DATA_ENTRADA_ADM_3 ,
CONSULTASIEBELRESP.DATA_ULTIMA_ATUALIZACAO_SERASA ,
CONSULTASIEBELRESP.DC_FRAUDADOR_PF_MOTIVO__ ,
CONSULTASIEBELRESP.DC_WHITE_PF_MOTIVO__ ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__DATA_1 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__DATA_2 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__DATA_3 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__DATA_4 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__DATA_5 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__DDD_1 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__DDD_2 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__DDD_3 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__DDD_4 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__DDD_5 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__DESC001 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__DESC002 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__DESC003 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__DESC004 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__DESC005 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__MOTI001 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__MOTI002 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__MOTI003 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__MOTI004 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__MOTI005 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__NUME001 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__NUME002 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__NUME003 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__NUME004 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__NUME005 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__TELE001 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__TELE002 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__TELE003 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__TELE004 ,
CONSULTASIEBELRESP.DCTO_ROUB_FURT_EXTRAV__TELE005 ,
CONSULTASIEBELRESP.DDD_FONE ,
CONSULTASIEBELRESP.DESCR_CODIGO_NACIONALIDADE ,
CONSULTASIEBELRESP.DESCR_CONTROLE_ACIONARIO ,
CONSULTASIEBELRESP.DESCRICAO_DA_CIDADE ,
CONSULTASIEBELRESP.DESCRICAO_DO_BAIRRO ,
CONSULTASIEBELRESP.DO_CEP ,
CONSULTASIEBELRESP.DO_CODIGO_ESPECIAL ,
CONSULTASIEBELRESP.DO_CODIGO_ESPECIAL_VAL ,
CONSULTASIEBELRESP.DO_DADOS_AVANCADOS ,
CONSULTASIEBELRESP.DO_DADOS_AVANCADOS_VAL ,
CONSULTASIEBELRESP.DO_DATACENTER ,
CONSULTASIEBELRESP.DO_DATACENTER_VAL ,
CONSULTASIEBELRESP.DO_EILD ,
CONSULTASIEBELRESP.DO_EILD_REGULADO ,
CONSULTASIEBELRESP.DO_EILD_REGULADO_VAL ,
CONSULTASIEBELRESP.DO_EILD_VAL ,
CONSULTASIEBELRESP.DO_FWT ,
CONSULTASIEBELRESP.DO_FWT_VAL ,
CONSULTASIEBELRESP.DO_LD15 ,
CONSULTASIEBELRESP.DO_LD15_FIXA ,
CONSULTASIEBELRESP.DO_LD15_FIXA_VAL ,
CONSULTASIEBELRESP.DO_LD15_VAL ,
CONSULTASIEBELRESP.DO_M2M ,
CONSULTASIEBELRESP.DO_M2M_VAL ,
CONSULTASIEBELRESP.DO_MOVEL_DADOS ,
CONSULTASIEBELRESP.DO_MOVEL_DADOS_VAL ,
CONSULTASIEBELRESP.DO_MOVEL_VOZ_CONTROLE ,
CONSULTASIEBELRESP.DO_MOVEL_VOZ_CONTROLE_VAL ,
CONSULTASIEBELRESP.DO_MOVEL_VOZ_POS ,
CONSULTASIEBELRESP.DO_MOVEL_VOZ_POS_VAL ,
CONSULTASIEBELRESP.DO_REDE_INTELIGENTE ,
CONSULTASIEBELRESP.DO_REDE_INTELIGENTE_VAL ,
CONSULTASIEBELRESP.DO_SOLUCIONA_TI ,
CONSULTASIEBELRESP.DO_SOLUCIONA_TI_VAL ,
CONSULTASIEBELRESP.DO_TERMINAL ,
CONSULTASIEBELRESP.DO_TERMINAL_VAL ,
CONSULTASIEBELRESP.DO_TI ,
CONSULTASIEBELRESP.DO_TI_VAL ,
CONSULTASIEBELRESP.DO_TRANSPORTE ,
CONSULTASIEBELRESP.DO_TRANSPORTE_VAL ,
CONSULTASIEBELRESP.DO_TV_DTH ,
CONSULTASIEBELRESP.DO_TV_DTH_VAL ,
CONSULTASIEBELRESP.DO_VIVO_INTERNET_FIXA ,
CONSULTASIEBELRESP.DO_VIVO_INTERNET_FIXA_VAL ,
CONSULTASIEBELRESP.DO_VOZ_AVANCADA_JUNTOR ,
CONSULTASIEBELRESP.DO_VOZ_AVANCADA_JUNTOR_VAL ,
CONSULTASIEBELRESP.DO_VOZ_AVANCADA_RAMAL ,
CONSULTASIEBELRESP.DO_VOZ_AVANCADA_RAMAL_VAL ,
CONSULTASIEBELRESP.ENDERECO ,
CONSULTASIEBELRESP.ESTADO ,
CONSULTASIEBELRESP.ESTADO_ONDE_RESIDE ,
CONSULTASIEBELRESP.EXTINCAO_DE_FALENCIA ,
CONSULTASIEBELRESP.FALENCIA_DECRETADA ,
CONSULTASIEBELRESP.FALENCIA_REQUERIDA ,
CONSULTASIEBELRESP.FONE ,
CONSULTASIEBELRESP.GRAFIA_DA_MAE ,
CONSULTASIEBELRESP.GRAFIA_DO_TITULAR ,
CONSULTASIEBELRESP.HOMEPAGE ,
CONSULTASIEBELRESP.INADIMPLENCIA_SOCIOS ,
CONSULTASIEBELRESP.MEDIA_DAS_MAIORES_FATURAS ,
CONSULTASIEBELRESP.MEDIA_DAS_ULTIMAS_COMPRAS ,
CONSULTASIEBELRESP.MEDIA_DOS_MAIORES_ACUMULOS ,
CONSULTASIEBELRESP.MOTIVO ,
CONSULTASIEBELRESP.NOME_DO_ADMINISTRADOR_1 ,
CONSULTASIEBELRESP.NOME_DO_ADMINISTRADOR_2 ,
CONSULTASIEBELRESP.NOME_DO_ADMINISTRADOR_3 ,
CONSULTASIEBELRESP.NOME_DO_LOGRADOURO ,
CONSULTASIEBELRESP.NOME_DO_SOCIO_ACIONISTA_1 ,
CONSULTASIEBELRESP.NOME_DO_SOCIO_ACIONISTA_2 ,
CONSULTASIEBELRESP.NOME_DO_SOCIO_ACIONISTA_3 ,
CONSULTASIEBELRESP.NOME_DO_SOCIO_ACIONISTA_4 ,
CONSULTASIEBELRESP.NOME_DO_SOCIO_ACIONISTA_5 ,
CONSULTASIEBELRESP.NOME_FANTASIA ,
CONSULTASIEBELRESP.NUMERO ,
CONSULTASIEBELRESP.NUMERO_DE_FILIAIS ,
CONSULTASIEBELRESP.PARTICIPACAO_EM_FALENCIA_PIE ,
CONSULTASIEBELRESP.PARTICIPACAO_EM_FALENCIA_PIE_S ,
CONSULTASIEBELRESP.PERC_CAP_SOCIAL_SOCIOS ,
CONSULTASIEBELRESP.PERC_CAP_TOTAL_SOCIO_ACIONI001 ,
CONSULTASIEBELRESP.PERC_CAP_TOTAL_SOCIO_ACIONI002 ,
CONSULTASIEBELRESP.PERC_CAP_TOTAL_SOCIO_ACIONI003 ,
CONSULTASIEBELRESP.PERC_CAP_TOTAL_SOCIO_ACIONI004 ,
CONSULTASIEBELRESP.PERC_CAP_TOTAL_SOCIO_ACIONI005 ,
CONSULTASIEBELRESP.PERC_PAGTOS_PONTUAIS ,
CONSULTASIEBELRESP.PERC_SEMELHANCA_DE_GRAFIA ,
CONSULTASIEBELRESP.PONTUACAO_DO_SCORE_30_12_MESES ,
CONSULTASIEBELRESP.PROBABILIDADE_INADIMPLENCIA_30 ,
CONSULTASIEBELRESP.QT_ACOES_EXEC_ATE_A_DATA ,
CONSULTASIEBELRESP.QT_ACOES_EXEC_SOCIOS_ATE_A_DAT ,
CONSULTASIEBELRESP.QT_ACOES_JUDICIAIS_ATE_A_DATA ,
CONSULTASIEBELRESP.QT_CHEQUES_S_FUNDO_ATE_A_DATA ,
CONSULTASIEBELRESP.QT_CHEQUES_S_FUNDO_SOCIOS_ATE_ ,
CONSULTASIEBELRESP.QT_CHEQUES_S_FUNDOS_ATE_A_DATA ,
CONSULTASIEBELRESP.QT_CHEQUES_SUSTADOS_ATE_A_DATA ,
CONSULTASIEBELRESP.QT_PEFIN_EMPRESAS_ATE_A_DATA ,
CONSULTASIEBELRESP.QT_PEFIN_SOCIOS_ATE_A_DATA ,
CONSULTASIEBELRESP.QT_PROTESTOS_ATE_A_DATA ,
CONSULTASIEBELRESP.QT_PROTESTOS_SOCIOS_ATE_A_DATA ,
CONSULTASIEBELRESP.QT_REFIN_BANCOS_ATE_A_DATA ,
CONSULTASIEBELRESP.QT_REFIN_SOCIOS_ATE_A_DATA ,
CONSULTASIEBELRESP.QT_REFIN_SOCIOS_ULT_12M ,
CONSULTASIEBELRESP.QTDE_CONSULTAS_A_CHEQUES_ME001 ,
CONSULTASIEBELRESP.QTDE_CONSULTAS_A_CHEQUES_ME002 ,
CONSULTASIEBELRESP.QTDE_CONSULTAS_A_CHEQUES_ME003 ,
CONSULTASIEBELRESP.QTDE_CONSULTAS_A_CREDITO_ME001 ,
CONSULTASIEBELRESP.QTDE_CONSULTAS_A_CREDITO_ME002 ,
CONSULTASIEBELRESP.QTDE_CONSULTAS_A_CREDITO_ME003 ,
CONSULTASIEBELRESP.QTDE_CONSULTAS_MES_ATUAL_M ,
CONSULTASIEBELRESP.QTDE_CONSULTAS_MES_M_1 ,
CONSULTASIEBELRESP.QTDE_CONSULTAS_MES_M_10 ,
CONSULTASIEBELRESP.QTDE_CONSULTAS_MES_M_11 ,
CONSULTASIEBELRESP.QTDE_CONSULTAS_MES_M_2 ,
CONSULTASIEBELRESP.QTDE_CONSULTAS_MES_M_3 ,
CONSULTASIEBELRESP.QTDE_CONSULTAS_MES_M_4 ,
CONSULTASIEBELRESP.QTDE_CONSULTAS_MES_M_5 ,
CONSULTASIEBELRESP.QTDE_CONSULTAS_MES_M_6 ,
CONSULTASIEBELRESP.QTDE_CONSULTAS_MES_M_7 ,
CONSULTASIEBELRESP.QTDE_CONSULTAS_MES_M_8 ,
CONSULTASIEBELRESP.QTDE_CONSULTAS_MES_M_9 ,
CONSULTASIEBELRESP.QTDE_DE_EMPREGADOS ,
CONSULTASIEBELRESP.QTDE_PAGTOS_A_VISTA ,
CONSULTASIEBELRESP.QTDE_PAGTOS_ATRASO_08_A_15_DIA ,
CONSULTASIEBELRESP.QTDE_PAGTOS_ATRASO_16_A_30_DIA ,
CONSULTASIEBELRESP.QTDE_PAGTOS_ATRASO_31_A_60_DIA ,
CONSULTASIEBELRESP.QTDE_PAGTOS_ATRASO_MAIS60_DIAS ,
CONSULTASIEBELRESP.QTDE_PAGTOS_PONTUAIS ,
CONSULTASIEBELRESP.QTDE_PENDENCIAS_FINANCEIRAS ,
CONSULTASIEBELRESP.QTDE_PENDENCIAS_FINANCEIRAS_PE ,
CONSULTASIEBELRESP.QTDE_PENDENCIAS_FINANCEIRAS_RE ,
CONSULTASIEBELRESP.QUANTIDADE_DE_CHEQUES_EXTRAVIA ,
CONSULTASIEBELRESP.QUANTIDADE_DE_CHEQUES_SUSTADOS ,
CONSULTASIEBELRESP.RAMO_DE_ATIVIDADE ,
CONSULTASIEBELRESP.RAZAO_SOCIAL ,
CONSULTASIEBELRESP.RECUPERACAO_EXTRA_JUDICIAL_HOM ,
CONSULTASIEBELRESP.RECUPERACAO_EXTRA_JUDICIAL_REQ ,
CONSULTASIEBELRESP.RECUPERACAO_EXTRA_JUDICIAL__VA ,
CONSULTASIEBELRESP.RECUPERACAO_JUDICIAL__CIDADE ,
CONSULTASIEBELRESP.RECUPERACAO_JUDICIAL__DATA ,
CONSULTASIEBELRESP.RECUPERACAO_JUDICIAL_CONCEDIDA ,
CONSULTASIEBELRESP.RECUPERACAO_JUDICIAL_REQUERIDA ,
CONSULTASIEBELRESP.REGIAO_DO_CPF ,
CONSULTASIEBELRESP.RESIDE_DESDE ,
CONSULTASIEBELRESP.RF__BAIRRO ,
CONSULTASIEBELRESP.RF__CEP ,
CONSULTASIEBELRESP.RF__CIDADE ,
CONSULTASIEBELRESP.RF__COD_RETORNO ,
CONSULTASIEBELRESP.RF__CODIGO_CNAE ,
CONSULTASIEBELRESP.RF__CODIGO_CNAE2 ,
CONSULTASIEBELRESP.RF__CODIGO_DA_NATUREZA_JURIDIC ,
CONSULTASIEBELRESP.RF__COMPLEMENTO ,
CONSULTASIEBELRESP.RF__DATA_ATUALIZACAO ,
CONSULTASIEBELRESP.RF__DATA_DA_CONSULTA ,
CONSULTASIEBELRESP.RF__DATA_DE_ABERTURA ,
CONSULTASIEBELRESP.RF__DATA_SITUACAO_CADASTRAL ,
CONSULTASIEBELRESP.RF__DESCRICAO_CNAE ,
CONSULTASIEBELRESP.RF__DESCRICAO_CNAE2 ,
CONSULTASIEBELRESP.RF__DESCRICAO_DA_NATUREZA_JURI ,
CONSULTASIEBELRESP.RF__ENDERECO ,
CONSULTASIEBELRESP.RF__NOME_DE_FANTASIA ,
CONSULTASIEBELRESP.RF__NOME_EMPRESARIAL ,
CONSULTASIEBELRESP.RF__ORIGEM_DA_INFORMACAO ,
CONSULTASIEBELRESP.RF__SITUACAO_CADASTRAL ,
CONSULTASIEBELRESP.RF__SITUACAO_ESPECIAL ,
CONSULTASIEBELRESP.RF__UF ,
CONSULTASIEBELRESP.SEXO ,
CONSULTASIEBELRESP.SITUACAO_DO_CPF ,
CONSULTASIEBELRESP.STATUS ,
CONSULTASIEBELRESP.STATUS_DO_CNPJ ,
CONSULTASIEBELRESP.SYS_CREATEDATE ,
CONSULTASIEBELRESP.T01_DATA_NASCIMENTO ,
CONSULTASIEBELRESP.T01_TIPO_ANALISE ,
CONSULTASIEBELRESP.T02_CEP ,
CONSULTASIEBELRESP.T02_POLITICA_CONCESSAO ,
CONSULTASIEBELRESP.T03_DATA_FUNDACAO ,
CONSULTASIEBELRESP.T03_NOME_CLIENTE ,
CONSULTASIEBELRESP.T04_CEP ,
CONSULTASIEBELRESP.T05_RAZAO_SOCIAL ,
CONSULTASIEBELRESP.T07_NRO_EMPREGOS_GERADOS ,
CONSULTASIEBELRESP.T08_FATURAMENTO_TOTAL ,
CONSULTASIEBELRESP.T09_CUSTO_ALUGUEL ,
CONSULTASIEBELRESP.T10_FOLHA_PAGAMENTO ,
CONSULTASIEBELRESP.T11_VALOR_CREDITO_SOLICITADO ,
CONSULTASIEBELRESP.T12_PRAZO_PARA_PAGAMENTO ,
CONSULTASIEBELRESP.T13_QUANTIDADE_APARELHOS ,
CONSULTASIEBELRESP.T15_SISTEMA_CDA ,
CONSULTASIEBELRESP.T16_DATA_PARCELA_VENC_NAO_PAGA ,
CONSULTASIEBELRESP.T17_VALOR_TOTAL_DIVIDA_ABERTO ,
CONSULTASIEBELRESP.T18_QTDE_ALTA_VOZ ,
CONSULTASIEBELRESP.T19_VALOR_ALTA_VOZ ,
CONSULTASIEBELRESP.T20_QTDE_ALTA_DADOS ,
CONSULTASIEBELRESP.T21_VALOR_ALTA_DADOS ,
CONSULTASIEBELRESP.T22_QTDE_TROCA_VENDA ,
CONSULTASIEBELRESP.T23_VALOR_TROCAS_VENDA ,
CONSULTASIEBELRESP.TIPO_DE_SOCIEDADE ,
CONSULTASIEBELRESP.VAL_TOTAL_PENDENCIAS_FINANCEIR ,
CONSULTASIEBELRESP.VALOR_DA_MAIOR_FATURA ,
CONSULTASIEBELRESP.VALOR_DA_ULTIMA_COMPRA ,
CONSULTASIEBELRESP.VALOR_DO_MAIOR_ACUMULO ,
CONSULTASIEBELRESP.VALOR_MEDIA_MENSAL_PGTOS ,
CONSULTASIEBELRESP.VIVOQTDEDEALTASDADOSFIXO ,
CONSULTASIEBELRESP.VIVOQTDEDEALTASVOZFIXO ,
CONSULTASIEBELRESP.VIVOQTDETROCAVENDAFIXO ,
CONSULTASIEBELRESP.VL_TOT_CAP_SOCIAL_SOCIOS ,
CONSULTASIEBELRESP.VR_ACOES_EXEC_ATE_A_DATA ,
CONSULTASIEBELRESP.VR_ACOES_EXEC_SOCIOS_ATE_A_DAT ,
CONSULTASIEBELRESP.VR_CHEQUES_S_FUNDO_ATE_A_DATA ,
CONSULTASIEBELRESP.VR_CHEQUES_SEM_FUNDOS_ATE_A_DA ,
CONSULTASIEBELRESP.VR_PEFIN_EMPRESAS_ATE_A_DATA ,
CONSULTASIEBELRESP.VR_PEFIN_SOCIOS_ATE_A_DATA ,
CONSULTASIEBELRESP.VR_PEFIN_SOCIOS_ULT_12M ,
CONSULTASIEBELRESP.VR_PROTESTOS_ATE_A_DATA ,
CONSULTASIEBELRESP.VR_PROTESTOS_SOCIOS_ATE_A_DATA ,
CONSULTASIEBELRESP.VR_REFIN_BANCOS_ATE_A_DATA ,
CONSULTASIEBELRESP.VR_REFIN_SOCIOS_ATE_A_DATA ,
CONSULTASIEBELRESP.ANTECESSORA ,
CONSULTASIEBELRESP.BAIRROFILIAL ,
CONSULTASIEBELRESP.CCF_AGENCIA1 ,
CONSULTASIEBELRESP.CCF_AGENCIA2 ,
CONSULTASIEBELRESP.CCF_AGENCIA3 ,
CONSULTASIEBELRESP.CCF_AGENCIA4 ,
CONSULTASIEBELRESP.CCF_AGENCIA5 ,
CONSULTASIEBELRESP.CCF_BANCO1 ,
CONSULTASIEBELRESP.CCF_BANCO2 ,
CONSULTASIEBELRESP.CCF_BANCO3 ,
CONSULTASIEBELRESP.CCF_BANCO4 ,
CONSULTASIEBELRESP.CCF_BANCO5 ,
CONSULTASIEBELRESP.CCF_DATA1 ,
CONSULTASIEBELRESP.CCF_DATA2 ,
CONSULTASIEBELRESP.CCF_DATA3 ,
CONSULTASIEBELRESP.CCF_DATA4 ,
CONSULTASIEBELRESP.CCF_DATA5 ,
CONSULTASIEBELRESP.CCF_DEVOLUCOES1 ,
CONSULTASIEBELRESP.CCF_DEVOLUCOES2 ,
CONSULTASIEBELRESP.CCF_DEVOLUCOES3 ,
CONSULTASIEBELRESP.CCF_DEVOLUCOES4 ,
CONSULTASIEBELRESP.CCF_DEVOLUCOES5 ,
CONSULTASIEBELRESP.CEPFILIAL ,
CONSULTASIEBELRESP.CIDADEFILIAL ,
CONSULTASIEBELRESP.CLIENTECONSULTANTE1 ,
CONSULTASIEBELRESP.CLIENTECONSULTANTE2 ,
CONSULTASIEBELRESP.CLIENTECONSULTANTE3 ,
CONSULTASIEBELRESP.CLIENTECONSULTANTE4 ,
CONSULTASIEBELRESP.CLIENTECONSULTANTE5 ,
CONSULTASIEBELRESP.DATAANTECESSORA ,
CONSULTASIEBELRESP.DATACONSULTA1 ,
CONSULTASIEBELRESP.DATACONSULTA2 ,
CONSULTASIEBELRESP.DATACONSULTA3 ,
CONSULTASIEBELRESP.DATACONSULTA4 ,
CONSULTASIEBELRESP.DATACONSULTA5 ,
CONSULTASIEBELRESP.DDDFONEFILIAL ,
CONSULTASIEBELRESP.ESTADOFILIAL ,
CONSULTASIEBELRESP.FALIMENTAR ,
CONSULTASIEBELRESP.FONEFILIAL ,
CONSULTASIEBELRESP.IDADEDAEMPRESAANOS ,
CONSULTASIEBELRESP.IDADEDAEMPRESAMESES ,
CONSULTASIEBELRESP.MANDATO ,
CONSULTASIEBELRESP.NIRE ,
CONSULTASIEBELRESP.PENDREST_QTDTOTAL ,
CONSULTASIEBELRESP.PENDREST_VRTOTAL ,
CONSULTASIEBELRESP.PENDRESTR_CONTRATO1 ,
CONSULTASIEBELRESP.PENDRESTR_CONTRATO2 ,
CONSULTASIEBELRESP.PENDRESTR_CONTRATO3 ,
CONSULTASIEBELRESP.PENDRESTR_CONTRATO4 ,
CONSULTASIEBELRESP.PENDRESTR_CONTRATO5 ,
CONSULTASIEBELRESP.PENDRESTR_DATA1 ,
CONSULTASIEBELRESP.PENDRESTR_DATA2 ,
CONSULTASIEBELRESP.PENDRESTR_DATA3 ,
CONSULTASIEBELRESP.PENDRESTR_DATA4 ,
CONSULTASIEBELRESP.PENDRESTR_DATA5 ,
CONSULTASIEBELRESP.PENDRESTR_MODALIDADE1 ,
CONSULTASIEBELRESP.PENDRESTR_MODALIDADE2 ,
CONSULTASIEBELRESP.PENDRESTR_MODALIDADE3 ,
CONSULTASIEBELRESP.PENDRESTR_MODALIDADE4 ,
CONSULTASIEBELRESP.PENDRESTR_MODALIDADE5 ,
CONSULTASIEBELRESP.PENDRESTR_VALOR1 ,
CONSULTASIEBELRESP.PENDRESTR_VALOR2 ,
CONSULTASIEBELRESP.PENDRESTR_VALOR3 ,
CONSULTASIEBELRESP.PENDRESTR_VALOR4 ,
CONSULTASIEBELRESP.PENDRESTR_VALOR5 ,
CONSULTASIEBELRESP.PENDRRESTR_ORIGEM1 ,
CONSULTASIEBELRESP.PENDRRESTR_ORIGEM2 ,
CONSULTASIEBELRESP.PENDRRESTR_ORIGEM3 ,
CONSULTASIEBELRESP.PENDRRESTR_ORIGEM4 ,
CONSULTASIEBELRESP.PENDRRESTR_ORIGEM5 ,
CONSULTASIEBELRESP.PERCRESTRITIVOSCAPITALSOCIAL ,
CONSULTASIEBELRESP.PROTESTO_CARTORIO1 ,
CONSULTASIEBELRESP.PROTESTO_CARTORIO2 ,
CONSULTASIEBELRESP.PROTESTO_CARTORIO3 ,
CONSULTASIEBELRESP.PROTESTO_CARTORIO4 ,
CONSULTASIEBELRESP.PROTESTO_CARTORIO5 ,
CONSULTASIEBELRESP.PROTESTO_CIDADE1 ,
CONSULTASIEBELRESP.PROTESTO_CIDADE2 ,
CONSULTASIEBELRESP.PROTESTO_CIDADE3 ,
CONSULTASIEBELRESP.PROTESTO_CIDADE4 ,
CONSULTASIEBELRESP.PROTESTO_CIDADE5 ,
CONSULTASIEBELRESP.PROTESTO_DATA1 ,
CONSULTASIEBELRESP.PROTESTO_DATA2 ,
CONSULTASIEBELRESP.PROTESTO_DATA3 ,
CONSULTASIEBELRESP.PROTESTO_DATA4 ,
CONSULTASIEBELRESP.PROTESTO_DATA5 ,
CONSULTASIEBELRESP.PROTESTO_QTDETOTAL ,
CONSULTASIEBELRESP.PROTESTO_UF1 ,
CONSULTASIEBELRESP.PROTESTO_UF2 ,
CONSULTASIEBELRESP.PROTESTO_UF3 ,
CONSULTASIEBELRESP.PROTESTO_UF4 ,
CONSULTASIEBELRESP.PROTESTO_UF5 ,
CONSULTASIEBELRESP.PROTESTO_VALOR1 ,
CONSULTASIEBELRESP.PROTESTO_VALOR2 ,
CONSULTASIEBELRESP.PROTESTO_VALOR3 ,
CONSULTASIEBELRESP.PROTESTO_VALOR4 ,
CONSULTASIEBELRESP.PROTESTO_VALOR5 ,
CONSULTASIEBELRESP.PROTESTO_VRTOTAL ,
CONSULTASIEBELRESP.QTCHEQUESUSTADOCANCELADODOSOCI ,
CONSULTASIEBELRESP.QTDIVIDAVENCIDASOCIOSATEDATA ,
CONSULTASIEBELRESP.QTPENDRESTRSOCIOSATEDATA ,
CONSULTASIEBELRESP.QTPENDRESTRSOCIOSULT12M ,
CONSULTASIEBELRESP.RECUPEXTRAJUDICIALCIDADE ,
CONSULTASIEBELRESP.RECUPEXTRAJUDICIALDATA ,
CONSULTASIEBELRESP.RF_BAIRROFILIAL ,
CONSULTASIEBELRESP.RF_CEPFILIAL ,
CONSULTASIEBELRESP.RF_CIDADEFILIAL ,
CONSULTASIEBELRESP.RF_COMPLEMENTOFILIAL ,
CONSULTASIEBELRESP.RF_ENDERECOFILIAL ,
CONSULTASIEBELRESP.RF_UFFILIAL ,
CONSULTASIEBELRESP.SCOREBVS ,
CONSULTASIEBELRESP.SCORECLASSIFICACAOALFABETICA ,
CONSULTASIEBELRESP.TIPOFALIMENTAR ,
CONSULTASIEBELRESP.VRPENDRESTRSOCIOSATEDATA from CONSULTASIEBELRESP INNER JOIN DADOSPROPOSTADS ON  CONSULTASIEBELRESP.IDS_CONSULTASIEBELRESP = DADOSPROPOSTADS.IDS_CONSULTASIEBELRESP  and DADOSPROPOSTADS.IDS_DADOSPROPOSTADS = IDS_DADOSPROPOSTADS `;






async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
    binds.IDS_DADOSPROPOSTADS = context.id;

    query += `\nwhere IDS_DADOSPROPOSTADS = :IDS_DADOSPROPOSTADS`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;
