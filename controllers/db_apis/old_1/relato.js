const database = require ('../../services/database');

const baseQuery =

`SELECT 'RELATO' TABELA, 'INSERT' OPERACAO, 
RELATO.IDS_RELATO ,
RELATO.SOCIOS_NEGATIVOS_QTDECHSEMFUND ,
RELATO.SOCIOS_NEGATIVOS_QTDEPEFIN ,
RELATO.SYS_CREATEDATE ,
RELATO.ALERTA ,
RELATO.AUTO_FALENCIA ,
RELATO.CAPITAL_SOCIAL ,
RELATO.CEP ,
RELATO.CODIGO_DO_TIPO_DE_SOCIEDADE ,
RELATO.CONCORDATA_DEFERIDA ,
RELATO.CONCORDATA_REQUERIDA ,
RELATO.CONCORDATA_SUSPENSIVA ,
RELATO.DATA_DA_ENTRADA_DO_SOCIO_MAIS_ ,
RELATO.DATA_DE_INICIO_DA_ATIVIDADE ,
RELATO.EXTINCAO_DE_FALENCIA ,
RELATO.FALENCIA_DECRETADA ,
RELATO.FALENCIA_REQUERIDA ,
RELATO.IDADE_DA_EMPRESA__MESES ,
RELATO.PARTICIPACAO_EM_FALENCIA ,
RELATO.PONTUACAO_DO_SCORE_3_0 ,
RELATO.PRINAD ,
RELATO.QT_ACOES_EXEC_SOCIOS_ULT_24M ,
RELATO.QT_ACOES_EXEC_ULT_24M ,
RELATO.QT_CHEQUES_S_FUNDO_SOCIOS_ULT_ ,
RELATO.QT_CHEQUES_S_FUNDO_ULT_24M ,
RELATO.QT_CHEQUES_SEM_FUNDO_SOCIOS_AT ,
RELATO.QT_PEFIN_SOCIOS_ATE_A_DATA ,
RELATO.QT_PROTESTOS_ATE_A_DATA ,
RELATO.QT_PROTESTOS_SOCIOS_ATE_A_DATA ,
RELATO.QT_REFIN_SOCIOS_ULT_12M ,
RELATO.QT_REFIN_SOCIOS_ATE_A_DATA ,
RELATO.QT_RESTRITIVOS_EMPRESA ,
RELATO.QT_RESTRITIVOS_SOCIOS ,
RELATO.QTDE_CONSULTAS_MES_M_1 ,
RELATO.RECUPERACAO_EXTRA_JUDICIAL_HOM ,
RELATO.RECUPERACAO_EXTRA_JUDICIAL_REQ ,
RELATO.RECUPERACAO_JUDICIAL_CONCEDIDA ,
RELATO.RECUPERACAO_JUDICIAL_REQUERIDA ,
RELATO.RF__CODIGO_CNAE ,
RELATO.STATUS_DO_CNPJ ,
RELATO.TIPO_DE_SOCIEDADE ,
RELATO.VR_ACOES_EXEC_SOCIOS_ULT_24M ,
RELATO.VR_ACOES_EXEC_ULT_24M ,
RELATO.VR_CHEQUES_SEM_FUNDOS_ATE_A_DA ,
RELATO.VR_PEFIN_EMPRESAS_ULT_24M ,
RELATO.VR_PEFIN_SOCIOS_ATE_A_DATA ,
RELATO.VR_PEFIN_SOCIOS_ULT_12M ,
RELATO.VR_PROTESTOS_SOCIOS_ULT_12M ,
RELATO.VR_PROTESTOS_ULT_24M ,
RELATO.VR_REFIN_BANCOS_ULT_24M ,
RELATO.VR_REFIN_SOCIOS_ATE_A_DATA ,
RELATO.VR_REFIN_SOCIOS_ULT_12M ,
RELATO.FLAG_REST_EMPRESA ,
RELATO.FLAG_REST_SOCIO_EMPRESA ,
RELATO.FLAG_SOCIO ,
RELATO.PERC_CAP_SOC_SOBRE_RESTR_EMP_S ,
RELATO.QT_ACOES_EXEC_ATE_A_DATA ,
RELATO.QT_ACOES_EXEC_SOCIOS_ATE_A_DAT ,
RELATO.QT_RESTRITIVOS_SOCIOS_P ,
RELATO.QT_RESTRITIVOS_EMPRESA_SOCIOS_ ,
RELATO.RF__UF ,
RELATO.RP_CAPITAL_SOCIAL ,
RELATO.VR_PEFIN_ATE_A_DATA ,
RELATO.VR_PROTESTOS_ATE_A_DATA ,
RELATO.VR_REFIN_ATE_A_DATA ,
RELATO.VR_RESTRICOES_EMPRESA_SOCIOS_P ,
RELATO.CARGO_ADMINISTRADOR_1 ,
RELATO.CARGO_ADMINISTRADOR_2 ,
RELATO.CARGO_ADMINISTRADOR_3 ,
RELATO.CODIGO_DO_TIPO_DE_SOCIED001 ,
RELATO.CODIGO_DE_ATIVIDADE_SERASA ,
RELATO.CODIGO_DO_TIPO_DE_SOCIED002 ,
RELATO.CPF_CNPJ_ADMINISTRADOR_1 ,
RELATO.CPF_CNPJ_ADMINISTRADOR_2 ,
RELATO.CPF_CNPJ_ADMINISTRADOR_3 ,
RELATO.CPF_CNPJ_SOCIO_ACIONISTA_1 ,
RELATO.CPF_CNPJ_SOCIO_ACIONISTA_1__CO ,
RELATO.CPF_CNPJ_SOCIO_ACIONISTA_2 ,
RELATO.CPF_CNPJ_SOCIO_ACIONISTA_2__CO ,
RELATO.CPF_CNPJ_SOCIO_ACIONISTA_3 ,
RELATO.CPF_CNPJ_SOCIO_ACIONISTA_3__CO ,
RELATO.CPF_CNPJ_SOCIO_ACIONISTA_4 ,
RELATO.CPF_CNPJ_SOCIO_ACIONISTA_4__CO ,
RELATO.CPF_CNPJ_SOCIO_ACIONISTA_5 ,
RELATO.CPF_CNPJ_SOCIO_ACIONISTA_5__CO ,
RELATO.DATA_DE_INICIO_DA_ATIVID001 ,
RELATO.DATA_DA_MAIOR_FATURA ,
RELATO.DATA_DA_ULTIMA_COMPRA ,
RELATO.DATA_DE_ENTRADA_SOCIO_ACION001 ,
RELATO.DATA_DE_ENTRADA_SOCIO_ACION002 ,
RELATO.DATA_DE_ENTRADA_SOCIO_ACION003 ,
RELATO.DATA_DE_ENTRADA_SOCIO_ACION004 ,
RELATO.DATA_DE_ENTRADA_SOCIO_ACION005 ,
RELATO.DATA_DE_INICIO_DA_ATIVID002 ,
RELATO.DATA_DO_MAIOR_ACUMULO ,
RELATO.DATA_DO_SISTEMA ,
RELATO.DATA_ENTRADA_ADM_1 ,
RELATO.DATA_ENTRADA_ADM_2 ,
RELATO.DATA_ENTRADA_ADM_3 ,
RELATO.DATA_ULTIMA_ATUALIZACAO_SERASA ,
RELATO.DDD_FONE ,
RELATO.DESCR_CODIGO_NACIONALIDADE ,
RELATO.DESCR_CONTROLE_ACIONARIO ,
RELATO.DESCRICAO_DA_CIDADE ,
RELATO.DESCRICAO_DO_BAIRRO ,
RELATO.ENDERECO ,
RELATO.ESTADO ,
RELATO.FONE ,
RELATO.HOMEPAGE ,
RELATO.INADIMPLENCIA_SOCIOS ,
RELATO.MEDIA_DAS_MAIORES_FATURAS ,
RELATO.MEDIA_DAS_ULTIMAS_COMPRAS ,
RELATO.MEDIA_DOS_MAIORES_ACUMULOS ,
RELATO.NOME_DO_ADMINISTRADOR_1 ,
RELATO.NOME_DO_ADMINISTRADOR_2 ,
RELATO.NOME_DO_ADMINISTRADOR_3 ,
RELATO.NOME_DO_LOGRADOURO ,
RELATO.NOME_DO_SOCIO_ACIONISTA_1 ,
RELATO.NOME_DO_SOCIO_ACIONISTA_2 ,
RELATO.NOME_DO_SOCIO_ACIONISTA_3 ,
RELATO.NOME_DO_SOCIO_ACIONISTA_4 ,
RELATO.NOME_DO_SOCIO_ACIONISTA_5 ,
RELATO.NOME_FANTASIA ,
RELATO.NUMERO ,
RELATO.NUMERO_DE_FILIAIS ,
RELATO.PARTICIPACAO_EM_FALENCIA_PIE_S ,
RELATO.PERC_CAP_SOCIAL_SOCIOS ,
RELATO.PERC_CAP_TOTAL_SOCIO_ACIONI001 ,
RELATO.PERC_CAP_TOTAL_SOCIO_ACIONI002 ,
RELATO.PERC_CAP_TOTAL_SOCIO_ACIONI003 ,
RELATO.PERC_CAP_TOTAL_SOCIO_ACIONI004 ,
RELATO.PERC_CAP_TOTAL_SOCIO_ACIONI005 ,
RELATO.PERC_PAGTOS_PONTUAIS ,
RELATO.QT_ACOES_EXEC_ATE_A_D001 ,
RELATO.QT_ACOES_EXEC_SOCIOS_ATE_A_001 ,
RELATO.QT_PEFIN_SOCIOS_ATE_A_D001 ,
RELATO.QT_PROTESTOS_ATE_A_D001 ,
RELATO.QT_PROTESTOS_SOCIOS_ATE_A_D001 ,
RELATO.QT_REFIN_SOCIOS_ULT_001 ,
RELATO.QT_REFIN_SOCIOS_ATE_A_D001 ,
RELATO.QT_ACOES_EXEC_ATE_A_D002 ,
RELATO.QT_ACOES_EXEC_SOCIOS_ATE_A_002 ,
RELATO.QT_ACOES_JUDICIAIS_ATE_A_DATA ,
RELATO.QT_CHEQUES_S_FUNDO_ATE_A_DATA ,
RELATO.QT_CHEQUES_S_FUNDO_SOCIOS_ATE_ ,
RELATO.QT_CHEQUES_S_FUNDOS_ATE_A_DATA ,
RELATO.QT_CHEQUES_SUSTADOS_ATE_A_DATA ,
RELATO.QT_PEFIN_EMPRESAS_ATE_A_DATA ,
RELATO.QT_PEFIN_SOCIOS_ATE_A_D002 ,
RELATO.QT_PROTESTOS_ATE_A_D002 ,
RELATO.QT_PROTESTOS_SOCIOS_ATE_A_D002 ,
RELATO.QT_REFIN_BANCOS_ATE_A_DATA ,
RELATO.QT_REFIN_SOCIOS_ATE_A_D002 ,
RELATO.QT_REFIN_SOCIOS_ULT_002 ,
RELATO.QTDE_CONSULTAS_MES_001 ,
RELATO.QTDE_CONSULTAS_A_CHEQUES_ME001 ,
RELATO.QTDE_CONSULTAS_A_CHEQUES_ME002 ,
RELATO.QTDE_CONSULTAS_A_CHEQUES_ME003 ,
RELATO.QTDE_CONSULTAS_A_CREDITO_ME001 ,
RELATO.QTDE_CONSULTAS_A_CREDITO_ME002 ,
RELATO.QTDE_CONSULTAS_A_CREDITO_ME003 ,
RELATO.QTDE_CONSULTAS_MES_ATUAL_M ,
RELATO.QTDE_CONSULTAS_MES_002 ,
RELATO.QTDE_CONSULTAS_MES_M_10 ,
RELATO.QTDE_CONSULTAS_MES_M_11 ,
RELATO.QTDE_CONSULTAS_MES_M_2 ,
RELATO.QTDE_CONSULTAS_MES_M_3 ,
RELATO.QTDE_CONSULTAS_MES_M_4 ,
RELATO.QTDE_CONSULTAS_MES_M_5 ,
RELATO.QTDE_CONSULTAS_MES_M_6 ,
RELATO.QTDE_CONSULTAS_MES_M_7 ,
RELATO.QTDE_CONSULTAS_MES_M_8 ,
RELATO.QTDE_CONSULTAS_MES_M_9 ,
RELATO.QTDE_DE_EMPREGADOS ,
RELATO.QTDE_PAGTOS_A_VISTA ,
RELATO.QTDE_PAGTOS_ATRASO_08_A_15_DIA ,
RELATO.QTDE_PAGTOS_ATRASO_16_A_30_DIA ,
RELATO.QTDE_PAGTOS_ATRASO_31_A_60_DIA ,
RELATO.QTDE_PAGTOS_ATRASO_MAIS60_DIAS ,
RELATO.QTDE_PAGTOS_PONTUAIS ,
RELATO.QTDE_PENDENCIAS_FINANCEIRAS ,
RELATO.QTDE_PENDENCIAS_FINANCEIRAS_PE ,
RELATO.QTDE_PENDENCIAS_FINANCEIRAS_RE ,
RELATO.QUANTIDADE_DE_CHEQUES_EXTRAVIA ,
RELATO.QUANTIDADE_DE_CHEQUES_SUSTADOS ,
RELATO.RAMO_DE_ATIVIDADE ,
RELATO.RAZAO_SOCIAL ,
RELATO.RF__CODIGO_C001 ,
RELATO.RF__BAIRRO ,
RELATO.RF__CEP ,
RELATO.RF__CIDADE ,
RELATO.RF__COD_RETORNO ,
RELATO.RF__CODIGO_C002 ,
RELATO.RF__CODIGO_CNAE2 ,
RELATO.RF__CODIGO_DA_NATUREZA_JURIDIC ,
RELATO.RF__COMPLEMENTO ,
RELATO.RF__DATA_ATUALIZACAO ,
RELATO.RF__DATA_DA_CONSULTA ,
RELATO.RF__DATA_DE_ABERTURA ,
RELATO.RF__DATA_SITUACAO_CADASTRAL ,
RELATO.RF__DESCRICAO_CNAE ,
RELATO.RF__DESCRICAO_CNAE2 ,
RELATO.RF__DESCRICAO_DA_NATUREZA_JURI ,
RELATO.RF__ENDERECO ,
RELATO.RF__NOME_DE_FANTASIA ,
RELATO.RF__NOME_EMPRESARIAL ,
RELATO.RF__ORIGEM_DA_INFORMACAO ,
RELATO.RF__SITUACAO_CADASTRAL ,
RELATO.RF__SITUACAO_ESPECIAL ,
RELATO.STATUS_DO_C001 ,
RELATO.STATUS_DO_C002 ,
RELATO.VAL_TOTAL_PENDENCIAS_FINANCEIR ,
RELATO.VALOR_DA_MAIOR_FATURA ,
RELATO.VALOR_DA_ULTIMA_COMPRA ,
RELATO.VALOR_DO_MAIOR_ACUMULO ,
RELATO.VALOR_MEDIA_MENSAL_PGTOS ,
RELATO.VL_TOT_CAP_SOCIAL_SOCIOS ,
RELATO.VR_PEFIN_SOCIOS_ATE_A_D001 ,
RELATO.VR_PEFIN_SOCIOS_ULT_001 ,
RELATO.VR_PROTESTOS_ATE_A_D001 ,
RELATO.VR_REFIN_SOCIOS_ATE_A_D001 ,
RELATO.VR_ACOES_EXEC_ATE_A_DATA ,
RELATO.VR_ACOES_EXEC_SOCIOS_ATE_A_DAT ,
RELATO.VR_PEFIN_EMPRESAS_ATE_A_DATA ,
RELATO.VR_PEFIN_SOCIOS_ATE_A_D002 ,
RELATO.VR_PEFIN_SOCIOS_ULT_002 ,
RELATO.VR_PROTESTOS_ATE_A_D002 ,
RELATO.VR_PROTESTOS_SOCIOS_ATE_A_DATA ,
RELATO.VR_REFIN_BANCOS_ATE_A_DATA ,
RELATO.VR_REFIN_SOCIOS_ATE_A_D002 ,
RELATO.ANTECESSORA ,
RELATO.COMPLEMENTO ,
RELATO.CONCORDATA ,
RELATO.CONTROLE ,
RELATO.DATA_ANTECESSORA ,
RELATO.ESTADO_CIVIL ,
RELATO.MANDATO ,
RELATO.NACIONALIDADE ,
RELATO.NATUREZA ,
RELATO.ORIGEM ,
RELATO.QTDE_CHEQUE_SUST_CANC_SOCIOS ,
RELATO.QTDE_DIVIDA_VENC_SOC_ATE_DATA ,
RELATO.QTDE_DIVIDA_VENCIDA_ATE_DATA ,
RELATO.RECUP_EXTRA_JUDICIAL_CIDADE ,
RELATO.RECUP_EXTRA_JUDICIAL_DATA ,
RELATO.RECUP_EXTRA_JUDICIAL_VARA ,
RELATO.ANOTACAOCHEQUEACHEI_ALINEA ,
RELATO.ANOTACAOCHEQUEACHEI_CHEQUE_AGE ,
RELATO.ANOTACAOCHEQUEACHEI_CHEQUE_BAN ,
RELATO.ANOTACAOCHEQUEACHEI_CHEQUE_CON ,
RELATO.ANOTACAOCHEQUEACHEI_CHEQUE_DEV ,
RELATO.ANOTACAOCHEQUEACHEI_CHEQUE_NUM ,
RELATO.ANOTACAOCHEQUEACHEI_CHEQUE_QUA ,
RELATO.ANOTACAOCHEQUEACHEI_CHEQUE_002 ,
RELATO.ANOTACAOCHEQUEACHEI_CHEQUE_001 ,
RELATO.ANOTACAOCHEQUEACHEI_CIDADE ,
RELATO.ANOTACAOCHEQUEACHEI_DATA ,
RELATO.ANOTACAOCHEQUEACHEI_NATUREZA_C ,
RELATO.ANOTACAOCHEQUEACHEI_UF ,
RELATO.ANOTACAOPEFIN_DATA ,
RELATO.ANOTACAOPEFIN_FILIAL ,
RELATO.ANOTACAOPEFIN_ORIGEM ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA003 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA002 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA006 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA008 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA011 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA009 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA010 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA007 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA060 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA062 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA065 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA063 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA064 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA061 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA066 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA068 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA071 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA069 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA070 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA067 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA072 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA074 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA077 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA075 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA076 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA073 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA078 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA080 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA083 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA081 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA082 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA079 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA084 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA086 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA089 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA087 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA088 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA085 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA090 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA092 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA095 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA093 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA094 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA091 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA096 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA098 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA101 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA099 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA100 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA097 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA102 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA104 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA107 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA105 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA106 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA103 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA108 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA110 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA113 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA111 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA112 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA109 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA114 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA116 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA119 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA117 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA118 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA115 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA012 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA014 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA017 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA015 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA016 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA013 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA120 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA122 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA125 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA123 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA124 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA121 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA018 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA020 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA023 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA021 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA022 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA019 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA024 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA026 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA029 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA027 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA028 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA025 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA030 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA032 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA035 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA033 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA034 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA031 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA036 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA038 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA041 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA039 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA040 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA037 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA042 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA044 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA047 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA045 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA046 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA043 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA048 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA050 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA053 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA051 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA052 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA049 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA054 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA056 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA059 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA057 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA058 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA055 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA004 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA005 ,
RELATO.ANOTACAOPEFIN_PENDENCIAFINA001 ,
RELATO.ANOTACAOPROTESTO_ANUENCIA ,
RELATO.ANOTACAOPROTESTO_CARTORIO ,
RELATO.ANOTACAOPROTESTO_CIDADE ,
RELATO.ANOTACAOPROTESTO_DATA ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF003 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF005 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF008 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF006 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF007 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF004 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF009 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF011 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF014 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF012 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF013 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF010 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF015 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF017 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF020 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF018 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF019 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF016 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF021 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF023 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF026 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF024 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF025 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF022 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF027 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF029 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF032 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF030 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF031 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF028 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF033 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF034 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF002 ,
RELATO.ANOTACAOPROTESTO_PENDENCIAF001 ,
RELATO.ANOTACAOPROTESTO_TIPOCARTAANUE ,
RELATO.ANOTACAOPROTESTO_UF ,
RELATO.ANOTCAOCHEQUECCF_CHEQUE_AGENCI ,
RELATO.ANOTCAOCHEQUECCF_CHEQUE_BANCO ,
RELATO.ANOTCAOCHEQUECCF_CHEQUE_DEVOLU ,
RELATO.ANOTCAOCHEQUECCF_CHEQUE_NUMERO ,
RELATO.ANOTCAOCHEQUECCF_CHEQUE_QUANTI ,
RELATO.ANOTCAOCHEQUECCF_CIDADE ,
RELATO.ANOTCAOCHEQUECCF_DATA ,
RELATO.ANOTCAOCHEQUECCF_NATUREZA_CODI ,
RELATO.ANOTCAOCHEQUECCF_NATUREZA_DESC ,
RELATO.ANOTCAOCHEQUECCF_UF ,
RELATO.ANTOCAOREFIN_DATA ,
RELATO.ANTOCAOREFIN_FILIAL ,
RELATO.ANTOCAOREFIN_ORIGEM ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN003 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN002 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN006 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN008 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN011 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN009 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN010 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN007 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN060 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN062 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN065 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN063 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN064 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN061 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN066 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN068 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN071 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN069 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN070 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN067 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN072 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN074 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN077 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN075 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN076 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN073 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN078 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN080 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN083 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN081 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN082 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN079 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN084 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN086 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN089 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN087 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN088 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN085 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN090 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN092 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN095 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN093 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN094 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN091 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN096 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN098 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN101 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN099 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN100 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN097 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN102 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN104 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN107 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN105 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN106 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN103 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN108 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN110 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN113 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN111 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN112 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN109 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN114 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN116 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN119 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN117 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN118 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN115 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN012 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN014 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN017 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN015 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN016 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN013 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN120 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN122 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN125 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN123 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN124 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN121 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN018 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN020 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN023 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN021 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN022 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN019 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN024 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN026 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN029 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN027 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN028 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN025 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN030 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN032 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN035 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN033 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN034 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN031 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN036 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN038 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN041 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN039 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN040 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN037 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN042 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN044 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN047 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN045 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN046 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN043 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN048 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN050 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN053 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN051 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN052 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN049 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN054 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN056 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN059 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN057 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN058 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN055 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN004 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN005 ,
RELATO.ANTOCAOREFIN_PENDENCIAFINAN001 ,
RELATO.REGISTROCONSULTAS_1_CONSULT002 ,
RELATO.REGISTROCONSULTAS_1_CONSULT001 ,
RELATO.REGISTROCONSULTAS_1_DATA ,
RELATO.REGISTROCONSULTAS_1_QUANTIDADE ,
RELATO.REGISTROCONSULTAS_10_CONSUL002 ,
RELATO.REGISTROCONSULTAS_10_CONSUL001 ,
RELATO.REGISTROCONSULTAS_10_DATA ,
RELATO.REGISTROCONSULTAS_10_QUANTIDAD ,
RELATO.REGISTROCONSULTAS_2_CONSULT002 ,
RELATO.REGISTROCONSULTAS_2_CONSULT001 ,
RELATO.REGISTROCONSULTAS_2_DATA ,
RELATO.REGISTROCONSULTAS_2_QUANTIDADE ,
RELATO.REGISTROCONSULTAS_3_CONSULT002 ,
RELATO.REGISTROCONSULTAS_3_CONSULT001 ,
RELATO.REGISTROCONSULTAS_3_DATA ,
RELATO.REGISTROCONSULTAS_3_QUANTIDADE ,
RELATO.REGISTROCONSULTAS_4_CONSULT002 ,
RELATO.REGISTROCONSULTAS_4_CONSULT001 ,
RELATO.REGISTROCONSULTAS_4_DATA ,
RELATO.REGISTROCONSULTAS_4_QUANTIDADE ,
RELATO.REGISTROCONSULTAS_5_CONSULT002 ,
RELATO.REGISTROCONSULTAS_5_CONSULT001 ,
RELATO.REGISTROCONSULTAS_5_DATA ,
RELATO.REGISTROCONSULTAS_5_QUANTIDADE ,
RELATO.REGISTROCONSULTAS_6_CONSULT002 ,
RELATO.REGISTROCONSULTAS_6_CONSULT001 ,
RELATO.REGISTROCONSULTAS_6_DATA ,
RELATO.REGISTROCONSULTAS_6_QUANTIDADE ,
RELATO.REGISTROCONSULTAS_7_CONSULT002 ,
RELATO.REGISTROCONSULTAS_7_CONSULT001 ,
RELATO.REGISTROCONSULTAS_7_DATA ,
RELATO.REGISTROCONSULTAS_7_QUANTIDADE ,
RELATO.REGISTROCONSULTAS_8_CONSULT002 ,
RELATO.REGISTROCONSULTAS_8_CONSULT001 ,
RELATO.REGISTROCONSULTAS_8_DATA ,
RELATO.REGISTROCONSULTAS_8_QUANTIDADE ,
RELATO.REGISTROCONSULTAS_9_CONSULT002 ,
RELATO.REGISTROCONSULTAS_9_CONSULT001 ,
RELATO.REGISTROCONSULTAS_9_DATA ,
RELATO.REGISTROCONSULTAS_9_QUANTIDADE from RELATO  INNER JOIN DADOSPROPOSTADS ON  RELATO.IDS_RELATO = DADOSPROPOSTADS.IDS_RELATO  and DADOSPROPOSTADS.IDS_DADOSPROPOSTADS = IDS_DADOSPROPOSTADS `;


/*
`SELECT 'RELATO' TABELA, 'INSERT' OPERACAO, SYSDATE DATA_STREAM, RELATO.* 
from RELATO , DADOSPROPOSTADS 
WHERE  RELATO.IDS_RELATO = DADOSPROPOSTADS.IDS_RELATO and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;
**/

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