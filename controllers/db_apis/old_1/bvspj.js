const database = require ('../../services/database');

const baseQuery =

`SELECT 'BVSPJ' TABELA, 'INSERT' OPERACAO, 
BVSPJ.IDS_BVSPJ ,
BVSPJ.ADMINISTRADOR1_CARGO ,
BVSPJ.ADMINISTRADOR1_CPF_CNPJ ,
BVSPJ.ADMINISTRADOR1_DATAENTRADA ,
BVSPJ.ADMINISTRADOR1_NOME ,
BVSPJ.ADMINISTRADOR2_CARGO ,
BVSPJ.ADMINISTRADOR2_CPF_CNPJ ,
BVSPJ.ADMINISTRADOR2_DATAENTRADA ,
BVSPJ.ADMINISTRADOR2_NOME ,
BVSPJ.ADMINISTRADOR3_CARGO ,
BVSPJ.ADMINISTRADOR3_CPF_CNPJ ,
BVSPJ.ADMINISTRADOR3_DATAENTRADA ,
BVSPJ.ADMINISTRADOR3_NOME ,
BVSPJ.ADMMANDATO_1_ ,
BVSPJ.ADMMANDATO_10_ ,
BVSPJ.ADMMANDATO_2_ ,
BVSPJ.ADMMANDATO_3_ ,
BVSPJ.ADMMANDATO_4_ ,
BVSPJ.ADMMANDATO_5_ ,
BVSPJ.ADMMANDATO_6_ ,
BVSPJ.ADMMANDATO_7_ ,
BVSPJ.ADMMANDATO_8_ ,
BVSPJ.ADMMANDATO_9_ ,
BVSPJ.ALERTA_S_N ,
BVSPJ.ANTECESSORA ,
BVSPJ.AUTOFALENCIA ,
BVSPJ.BAIRROFILIAL ,
BVSPJ.BAIRROMATRIZ ,
BVSPJ.CAPITALSOCIAL ,
BVSPJ.CCF_AGENCIA1 ,
BVSPJ.CCF_AGENCIA2 ,
BVSPJ.CCF_AGENCIA3 ,
BVSPJ.CCF_AGENCIA4 ,
BVSPJ.CCF_AGENCIA5 ,
BVSPJ.CCF_BANCO1 ,
BVSPJ.CCF_BANCO2 ,
BVSPJ.CCF_BANCO3 ,
BVSPJ.CCF_BANCO4 ,
BVSPJ.CCF_BANCO5 ,
BVSPJ.CCF_DATA1 ,
BVSPJ.CCF_DATA2 ,
BVSPJ.CCF_DATA3 ,
BVSPJ.CCF_DATA4 ,
BVSPJ.CCF_DATA5 ,
BVSPJ.CCF_DEVOLUCOES1 ,
BVSPJ.CCF_DEVOLUCOES2 ,
BVSPJ.CCF_DEVOLUCOES3 ,
BVSPJ.CCF_DEVOLUCOES4 ,
BVSPJ.CCF_DEVOLUCOES5 ,
BVSPJ.CEPFILIAL ,
BVSPJ.CEPMATRIZ ,
BVSPJ.CHEQUESFUNDOAGENCIA_1_ ,
BVSPJ.CHEQUESFUNDOAGENCIA_2_ ,
BVSPJ.CHEQUESFUNDOAGENCIA_3_ ,
BVSPJ.CHEQUESFUNDOAGENCIA_4_ ,
BVSPJ.CHEQUESFUNDOAGENCIA_5_ ,
BVSPJ.CHEQUESFUNDOBANCO_1_ ,
BVSPJ.CHEQUESFUNDOBANCO_2_ ,
BVSPJ.CHEQUESFUNDOBANCO_3_ ,
BVSPJ.CHEQUESFUNDOBANCO_4_ ,
BVSPJ.CHEQUESFUNDOBANCO_5_ ,
BVSPJ.CHEQUESFUNDODATAULTIMO_1_ ,
BVSPJ.CHEQUESFUNDODATAULTIMO_2_ ,
BVSPJ.CHEQUESFUNDODATAULTIMO_3_ ,
BVSPJ.CHEQUESFUNDODATAULTIMO_4_ ,
BVSPJ.CHEQUESFUNDODATAULTIMO_5_ ,
BVSPJ.CHEQUESFUNDOMOTIVO_1_ ,
BVSPJ.CHEQUESFUNDOMOTIVO_2_ ,
BVSPJ.CHEQUESFUNDOMOTIVO_3_ ,
BVSPJ.CHEQUESFUNDOMOTIVO_4_ ,
BVSPJ.CHEQUESFUNDOMOTIVO_5_ ,
BVSPJ.CHEQUESFUNDONOME_1_ ,
BVSPJ.CHEQUESFUNDONOME_2_ ,
BVSPJ.CHEQUESFUNDONOME_3_ ,
BVSPJ.CHEQUESFUNDONOME_4_ ,
BVSPJ.CHEQUESFUNDONOME_5_ ,
BVSPJ.CHEQUESFUNDOQTDE_1_ ,
BVSPJ.CHEQUESFUNDOQTDE_2_ ,
BVSPJ.CHEQUESFUNDOQTDE_3_ ,
BVSPJ.CHEQUESFUNDOQTDE_4_ ,
BVSPJ.CHEQUESFUNDOQTDE_5_ ,
BVSPJ.CHEQUESUSTAGENCIA_1_ ,
BVSPJ.CHEQUESUSTAGENCIA_2_ ,
BVSPJ.CHEQUESUSTAGENCIA_3_ ,
BVSPJ.CHEQUESUSTAGENCIA_4_ ,
BVSPJ.CHEQUESUSTAGENCIA_5_ ,
BVSPJ.CHEQUESUSTBANCO_1_ ,
BVSPJ.CHEQUESUSTBANCO_2_ ,
BVSPJ.CHEQUESUSTBANCO_3_ ,
BVSPJ.CHEQUESUSTBANCO_4_ ,
BVSPJ.CHEQUESUSTBANCO_5_ ,
BVSPJ.CHEQUESUSTCHEQUES_1_ ,
BVSPJ.CHEQUESUSTCHEQUES_2_ ,
BVSPJ.CHEQUESUSTCHEQUES_3_ ,
BVSPJ.CHEQUESUSTCHEQUES_4_ ,
BVSPJ.CHEQUESUSTCHEQUES_5_ ,
BVSPJ.CHEQUESUSTDATA_1_ ,
BVSPJ.CHEQUESUSTDATA_2_ ,
BVSPJ.CHEQUESUSTDATA_3_ ,
BVSPJ.CHEQUESUSTDATA_4_ ,
BVSPJ.CHEQUESUSTDATA_5_ ,
BVSPJ.CHEQUESUSTDATADAOCORRENCIA_1_ ,
BVSPJ.CHEQUESUSTDATADAOCORRENCIA_2_ ,
BVSPJ.CHEQUESUSTDATADAOCORRENCIA_3_ ,
BVSPJ.CHEQUESUSTDATADAOCORRENCIA_4_ ,
BVSPJ.CHEQUESUSTDATADAOCORRENCIA_5_ ,
BVSPJ.CIDADEFILIAL ,
BVSPJ.CIDADEMATRIZ ,
BVSPJ.CLIENTECONSULTANTE1 ,
BVSPJ.CLIENTECONSULTANTE2 ,
BVSPJ.CLIENTECONSULTANTE3 ,
BVSPJ.CLIENTECONSULTANTE4 ,
BVSPJ.CLIENTECONSULTANTE5 ,
BVSPJ.CNAEDEMAISRAMOSATV ,
BVSPJ.CNAEPRIMARIO ,
BVSPJ.CNAESECUNDARIO ,
BVSPJ.CNAETERCIARIO ,
BVSPJ.CNPJCONSULTADO ,
BVSPJ.CODIGOTIPODESOCIEDADE ,
BVSPJ.CONCORDATA ,
BVSPJ.CONCORDATADEFERIDA ,
BVSPJ.CONCORDATAREQUERIDA ,
BVSPJ.CONCORDATASUSPENSICA ,
BVSPJ.DATAANTECESSORA ,
BVSPJ.DATACONSULTA1 ,
BVSPJ.DATACONSULTA2 ,
BVSPJ.DATACONSULTA3 ,
BVSPJ.DATACONSULTA4 ,
BVSPJ.DATACONSULTA5 ,
BVSPJ.DATADAMAIORFATURA ,
BVSPJ.DATADAULTIMACOMPRA ,
BVSPJ.DATADOSISTEMA ,
BVSPJ.DATAENTRADASOCIOSMAISRECENTE ,
BVSPJ.DATAFUNDACAO ,
BVSPJ.DATAINICIOATIVIDADE ,
BVSPJ.DDDFONEFILIAL ,
BVSPJ.DDDFONEMATRIZ ,
BVSPJ.DESCRCODIGONACIONALIDADE ,
BVSPJ.DESCRCONTROLEACIONARIO ,
BVSPJ.ENDERECOMATRIZ ,
BVSPJ.ESTADOFILIAL ,
BVSPJ.ESTADOMATRIZ ,
BVSPJ.EXTINCAODEFALENCIA ,
BVSPJ.FALENCIADECRETADA ,
BVSPJ.FALENCIAREQUERIDA ,
BVSPJ.FALIMENTAR ,
BVSPJ.FALRECJUDPERIODO ,
BVSPJ.FALRECJUDQTDETOTAL ,
BVSPJ.FALRECJUDULTOCORCIDADE_1_ ,
BVSPJ.FALRECJUDULTOCORCIDADE_2_ ,
BVSPJ.FALRECJUDULTOCORCIDADE_3_ ,
BVSPJ.FALRECJUDULTOCORCIDADE_4_ ,
BVSPJ.FALRECJUDULTOCORCIDADE_5_ ,
BVSPJ.FALRECJUDULTOCORDATA_1_ ,
BVSPJ.FALRECJUDULTOCORDATA_2_ ,
BVSPJ.FALRECJUDULTOCORDATA_3_ ,
BVSPJ.FALRECJUDULTOCORDATA_4_ ,
BVSPJ.FALRECJUDULTOCORDATA_5_ ,
BVSPJ.FALRECJUDULTOCORUF_1_ ,
BVSPJ.FALRECJUDULTOCORUF_2_ ,
BVSPJ.FALRECJUDULTOCORUF_3_ ,
BVSPJ.FALRECJUDULTOCORUF_4_ ,
BVSPJ.FALRECJUDULTOCORUF_5_ ,
BVSPJ.FALRECJUDULTOCORVARA_1_ ,
BVSPJ.FALRECJUDULTOCORVARA_2_ ,
BVSPJ.FALRECJUDULTOCORVARA_3_ ,
BVSPJ.FALRECJUDULTOCORVARA_4_ ,
BVSPJ.FALRECJUDULTOCORVARA_5_ ,
BVSPJ.FATPRESUMIDOFATANUAL ,
BVSPJ.FATPRESUMIDOMENSAGEM ,
BVSPJ.FONEFILIAL ,
BVSPJ.FONEMATRIZ ,
BVSPJ.IDADEDAEMPRESAANOS ,
BVSPJ.IDADEDAEMPRESAMESES ,
BVSPJ.INADIMPLENCIASOCIOS ,
BVSPJ.INSCRICAOESTADUAL ,
BVSPJ.MANDATO ,
BVSPJ.MEDIADASMAIORESFATURAS ,
BVSPJ.MEDIADASULTIMASCOMPRAS ,
BVSPJ.MENSAGEMERRO ,
BVSPJ.NATUREZA ,
BVSPJ.NIRE ,
BVSPJ.NOMEFANTASIA ,
BVSPJ.NUMERODEFILIAIS ,
BVSPJ.PARTICIPACAOEMFALENCIAPIE ,
BVSPJ.PARTICIPACAOEMFALENCIAPIESOCIO ,
BVSPJ.PENDREST_QTDTOTAL ,
BVSPJ.PENDREST_VRTOTAL ,
BVSPJ.PENDRESTR_CONTRATO1 ,
BVSPJ.PENDRESTR_CONTRATO2 ,
BVSPJ.PENDRESTR_CONTRATO3 ,
BVSPJ.PENDRESTR_CONTRATO4 ,
BVSPJ.PENDRESTR_CONTRATO5 ,
BVSPJ.PENDRESTR_DATA1 ,
BVSPJ.PENDRESTR_DATA2 ,
BVSPJ.PENDRESTR_DATA3 ,
BVSPJ.PENDRESTR_DATA4 ,
BVSPJ.PENDRESTR_DATA5 ,
BVSPJ.PENDRESTR_MODALIDADE1 ,
BVSPJ.PENDRESTR_MODALIDADE2 ,
BVSPJ.PENDRESTR_MODALIDADE3 ,
BVSPJ.PENDRESTR_MODALIDADE4 ,
BVSPJ.PENDRESTR_MODALIDADE5 ,
BVSPJ.PENDRESTR_VALOR1 ,
BVSPJ.PENDRESTR_VALOR2 ,
BVSPJ.PENDRESTR_VALOR3 ,
BVSPJ.PENDRESTR_VALOR4 ,
BVSPJ.PENDRESTR_VALOR5 ,
BVSPJ.PENDRESTRDATAMAIOR ,
BVSPJ.PENDRESTRDATAPRIMEIRO ,
BVSPJ.PENDRESTRPERIODO ,
BVSPJ.PENDRESTRTOTCREDORES ,
BVSPJ.PENDRESTRTOTPEND ,
BVSPJ.PENDRESTRULTOCORRDISPONIVEL001 ,
BVSPJ.PENDRESTRULTOCORRDISPONIVEL010 ,
BVSPJ.PENDRESTRULTOCORRDISPONIVEL002 ,
BVSPJ.PENDRESTRULTOCORRDISPONIVEL003 ,
BVSPJ.PENDRESTRULTOCORRDISPONIVEL004 ,
BVSPJ.PENDRESTRULTOCORRDISPONIVEL005 ,
BVSPJ.PENDRESTRULTOCORRDISPONIVEL006 ,
BVSPJ.PENDRESTRULTOCORRDISPONIVEL007 ,
BVSPJ.PENDRESTRULTOCORRDISPONIVEL008 ,
BVSPJ.PENDRESTRULTOCORRDISPONIVEL009 ,
BVSPJ.PENDRESTRVLRMAIOR ,
BVSPJ.PENDRESTRVLRPRIMEIRO ,
BVSPJ.PENDRRESTR_ORIGEM1 ,
BVSPJ.PENDRRESTR_ORIGEM2 ,
BVSPJ.PENDRRESTR_ORIGEM3 ,
BVSPJ.PENDRRESTR_ORIGEM4 ,
BVSPJ.PENDRRESTR_ORIGEM5 ,
BVSPJ.PERCCAPSOCIALSOCIOS ,
BVSPJ.PERCPAGTOSPONTUAIS ,
BVSPJ.PERCRESTRITIVOSCAPITALSOCIAL ,
BVSPJ.PONTUACAODOSCORE ,
BVSPJ.PRESUMIDOFAIXAFAT ,
BVSPJ.PROBABILIDADEINADIMPLENCIA ,
BVSPJ.PROTDATAMAIOR ,
BVSPJ.PROTDATAPRIMEIRO ,
BVSPJ.PROTESTO_CARTORIO1 ,
BVSPJ.PROTESTO_CARTORIO2 ,
BVSPJ.PROTESTO_CARTORIO3 ,
BVSPJ.PROTESTO_CARTORIO4 ,
BVSPJ.PROTESTO_CARTORIO5 ,
BVSPJ.PROTESTO_CIDADE1 ,
BVSPJ.PROTESTO_CIDADE2 ,
BVSPJ.PROTESTO_CIDADE3 ,
BVSPJ.PROTESTO_CIDADE4 ,
BVSPJ.PROTESTO_CIDADE5 ,
BVSPJ.PROTESTO_DATA1 ,
BVSPJ.PROTESTO_DATA2 ,
BVSPJ.PROTESTO_DATA3 ,
BVSPJ.PROTESTO_DATA4 ,
BVSPJ.PROTESTO_DATA5 ,
BVSPJ.PROTESTO_QTDETOTAL ,
BVSPJ.PROTESTO_UF1 ,
BVSPJ.PROTESTO_UF2 ,
BVSPJ.PROTESTO_UF3 ,
BVSPJ.PROTESTO_UF4 ,
BVSPJ.PROTESTO_UF5 ,
BVSPJ.PROTESTO_VALOR1 ,
BVSPJ.PROTESTO_VALOR2 ,
BVSPJ.PROTESTO_VALOR3 ,
BVSPJ.PROTESTO_VALOR4 ,
BVSPJ.PROTESTO_VALOR5 ,
BVSPJ.PROTESTO_VRTOTAL ,
BVSPJ.PROTVALORMAIOR ,
BVSPJ.PROTVALORPRIMEIRO ,
BVSPJ.QTACOESEXECATEDATA ,
BVSPJ.QTACOESEXECSOCIOSATEDATA ,
BVSPJ.QTCHEQUESEXTRAVIADOS ,
BVSPJ.QTCHEQUESSEMFUNDOATEDATA ,
BVSPJ.QTCHEQUESSFUNDOSOCIOSATEDATA ,
BVSPJ.QTCHEQUESSUSTADOS ,
BVSPJ.QTCHEQUESUSTADOCANCELADODOSOCI ,
BVSPJ.QTCONSULTASMESATUALM ,
BVSPJ.QTCONSULTASMESATUALM_1 ,
BVSPJ.QTCONSULTASMESATUALM_10 ,
BVSPJ.QTCONSULTASMESATUALM_11 ,
BVSPJ.QTCONSULTASMESATUALM_2 ,
BVSPJ.QTCONSULTASMESATUALM_3 ,
BVSPJ.QTCONSULTASMESATUALM_4 ,
BVSPJ.QTCONSULTASMESATUALM_5 ,
BVSPJ.QTCONSULTASMESATUALM_6 ,
BVSPJ.QTCONSULTASMESATUALM_7 ,
BVSPJ.QTCONSULTASMESATUALM_8 ,
BVSPJ.QTCONSULTASMESATUALM_9 ,
BVSPJ.QTDETOTALCHEQUESEMFUNDO ,
BVSPJ.QTDIVIDAVENCIDASOCIOSATEDATA ,
BVSPJ.QTPAGTOSPAGOSAVISTA ,
BVSPJ.QTPENDRESTRBANCOSATEDATA ,
BVSPJ.QTPENDRESTRSOCIOSATEDATA ,
BVSPJ.QTPENDRESTRSOCIOSULT12M ,
BVSPJ.QTPROTESTOSATEDATA ,
BVSPJ.QTPROTESTOSSOCIOSATEDATA ,
BVSPJ.RAMODEATIVIDADE ,
BVSPJ.RAZAOSOCIAL ,
BVSPJ.RECUPEXTRAJUDICIALCIDADE ,
BVSPJ.RECUPEXTRAJUDICIALDATA ,
BVSPJ.RECUPEXTRAJUDICIALHOMOLOGADA ,
BVSPJ.RECUPEXTRAJUDICIALREQUERIDA ,
BVSPJ.RECUPEXTRAJUDICIALVARA ,
BVSPJ.RECUPJUDICIALCIDADE ,
BVSPJ.RECUPJUDICIALCONCEDIDA ,
BVSPJ.RECUPJUDICIALDATA ,
BVSPJ.RECUPJUDICIALREQUERIDA ,
BVSPJ.RF_BAIRROFILIAL ,
BVSPJ.RF_BAIRROMATRIZ ,
BVSPJ.RF_CEPFILIAL ,
BVSPJ.RF_CEPMATRIZ ,
BVSPJ.RF_CIDADEFILIAL ,
BVSPJ.RF_CIDADEMATRIZ ,
BVSPJ.RF_CODIGOCNAE ,
BVSPJ.RF_CODIGOCNAE2 ,
BVSPJ.RF_CODNATUREZAJURIDICA ,
BVSPJ.RF_COMPLEMENTOFILIAL ,
BVSPJ.RF_COMPLEMENTOMATRIZ ,
BVSPJ.RF_DATACONSULTA ,
BVSPJ.RF_DATADEABERTURA ,
BVSPJ.RF_DATASITUACAOCADASTRAL ,
BVSPJ.RF_DESCRICAOCNAE ,
BVSPJ.RF_DESCRICAOCNAE2 ,
BVSPJ.RF_DESCRNATUREZAJURIDICA ,
BVSPJ.RF_ENDERECOFILIAL ,
BVSPJ.RF_ENDERECOMATRIZ ,
BVSPJ.RF_NOMEEMPRESARIAL ,
BVSPJ.RF_NOMEFANTASIA ,
BVSPJ.RF_SITUACAOCADASTRAL ,
BVSPJ.RF_UFFILIAL ,
BVSPJ.RF_UFMATRIZ ,
BVSPJ.SCOREBVS ,
BVSPJ.SCORECLASSIFICACAOALFABETICA ,
BVSPJ.SCORECLASSIFICAONUMERICA ,
BVSPJ.SCOREPROBABILIDADE ,
BVSPJ.SINTEGRADATACONSULTA ,
BVSPJ.SINTEGRADATASITUACAO ,
BVSPJ.SINTEGRASITUACAO ,
BVSPJ.SOCIOACIONISTA1_CPF_CNPJ ,
BVSPJ.SOCIOACIONISTA1_CPF_CNPJ_COMPL ,
BVSPJ.SOCIOACIONISTA1_DATADEENTRADA ,
BVSPJ.SOCIOACIONISTA1_NOME ,
BVSPJ.SOCIOACIONISTA1_PERCCAPTOTAL ,
BVSPJ.SOCIOACIONISTA2_CPF_CNPJ ,
BVSPJ.SOCIOACIONISTA2_CPF_CNPJ_COMPL ,
BVSPJ.SOCIOACIONISTA2_DATADEENTRADA ,
BVSPJ.SOCIOACIONISTA2_NOME ,
BVSPJ.SOCIOACIONISTA2_PERCCAPTOTAL ,
BVSPJ.SOCIOACIONISTA3_CPF_CNPJ ,
BVSPJ.SOCIOACIONISTA3_CPF_CNPJ_COMPL ,
BVSPJ.SOCIOACIONISTA3_DATADEENTRADA ,
BVSPJ.SOCIOACIONISTA3_NOME ,
BVSPJ.SOCIOACIONISTA3_PERCCAPTOTAL ,
BVSPJ.SOCIOACIONISTA4_CPF_CNPJ ,
BVSPJ.SOCIOACIONISTA4_CPF_CNPJ_COMPL ,
BVSPJ.SOCIOACIONISTA4_DATADEENTRADA ,
BVSPJ.SOCIOACIONISTA4_NOME ,
BVSPJ.SOCIOACIONISTA4_PERCCAPTOTAL ,
BVSPJ.SOCIOACIONISTA5_CPF_CNPJ ,
BVSPJ.SOCIOACIONISTA5_CPF_CNPJ_COMPL ,
BVSPJ.SOCIOACIONISTA5_DATADEENTRADA ,
BVSPJ.SOCIOACIONISTA5_NOME ,
BVSPJ.SOCIOACIONISTA5_PERCCAPTOTAL ,
BVSPJ.SOCIOASSINAEMPRESA_1_ ,
BVSPJ.SOCIOASSINAEMPRESA_10_ ,
BVSPJ.SOCIOASSINAEMPRESA_2_ ,
BVSPJ.SOCIOASSINAEMPRESA_3_ ,
BVSPJ.SOCIOASSINAEMPRESA_4_ ,
BVSPJ.SOCIOASSINAEMPRESA_5_ ,
BVSPJ.SOCIOASSINAEMPRESA_6_ ,
BVSPJ.SOCIOASSINAEMPRESA_7_ ,
BVSPJ.SOCIOASSINAEMPRESA_8_ ,
BVSPJ.SOCIOASSINAEMPRESA_9_ ,
BVSPJ.STATUSDOCNPJ ,
BVSPJ.SYS_CREATEDATE ,
BVSPJ.TIPODESOCIEDADE ,
BVSPJ.TIPOFALIMENTAR ,
BVSPJ.ULTIMASCONSULTASCNPJ_1_ ,
BVSPJ.ULTIMASCONSULTASCNPJ_2_ ,
BVSPJ.ULTIMASCONSULTASCNPJ_3_ ,
BVSPJ.ULTIMASCONSULTASCNPJ_4_ ,
BVSPJ.ULTIMASCONSULTASCNPJ_5_ ,
BVSPJ.VALORDAMAIORFATURA ,
BVSPJ.VALORDAULTIMACOMPRA ,
BVSPJ.VLTOTALCAPSOCIALSOCIOS ,
BVSPJ.VRACOESEXECATEDATA ,
BVSPJ.VRACOESEXECSOCIOSATEDATA ,
BVSPJ.VRPENDRESTRBANCOSATEDATA ,
BVSPJ.VRPENDRESTRSOCIOSATEDATA ,
BVSPJ.VRPROTESTOSATEDATA ,
BVSPJ.VRPROTESTOSSOCIOSATEDATA ,
BVSPJ.PERCRESTRITIVOSFATPRESUMIDO ,
BVSPJ.CHEQUESDEVOLVIDOSCHEQUE_1_ ,
BVSPJ.CHEQUESDEVOLVIDOSCHEQUE_2_ ,
BVSPJ.CHEQUESDEVOLVIDOSCHEQUE_3_ ,
BVSPJ.CHEQUESDEVOLVIDOSCHEQUE_4_ ,
BVSPJ.CHEQUESDEVOLVIDOSCHEQUE_5_ ,
BVSPJ.CHEQUESDEVOLVIDOSCIDADEUF_1_ ,
BVSPJ.CHEQUESDEVOLVIDOSCIDADEUF_2_ ,
BVSPJ.CHEQUESDEVOLVIDOSCIDADEUF_3_ ,
BVSPJ.CHEQUESDEVOLVIDOSCIDADEUF_4_ ,
BVSPJ.CHEQUESDEVOLVIDOSCIDADEUF_5_ ,
BVSPJ.CHEQUESDEVOLVIDOSMENSAGEM ,
BVSPJ.CHEQUESDEVOLVIDOSMOTIVO_1_ ,
BVSPJ.CHEQUESDEVOLVIDOSMOTIVO_2_ ,
BVSPJ.CHEQUESDEVOLVIDOSMOTIVO_3_ ,
BVSPJ.CHEQUESDEVOLVIDOSMOTIVO_4_ ,
BVSPJ.CHEQUESDEVOLVIDOSMOTIVO_5_ ,
BVSPJ.CHEQUESDEVOLVIDOSPERIODO ,
BVSPJ.CHEQUESDEVOLVIDOSQTDTOTAL ,
BVSPJ.REGISTRODEBITOSDATAULTIMA_1_ ,
BVSPJ.REGISTRODEBITOSDATAULTIMA_2_ ,
BVSPJ.REGISTRODEBITOSDATAULTIMA_3_ ,
BVSPJ.REGISTRODEBITOSDATAULTIMA_4_ ,
BVSPJ.REGISTRODEBITOSDATAULTIMA_5_ ,
BVSPJ.REGISTRODEBITOSQTDTOTAL_1_ ,
BVSPJ.REGISTRODEBITOSQTDTOTAL_2_ ,
BVSPJ.REGISTRODEBITOSQTDTOTAL_3_ ,
BVSPJ.REGISTRODEBITOSQTDTOTAL_4_ ,
BVSPJ.REGISTRODEBITOSQTDTOTAL_5_ ,
BVSPJ.REGISTRODEBITOSVLRTOTAL_1_ ,
BVSPJ.REGISTRODEBITOSVLRTOTAL_2_ ,
BVSPJ.REGISTRODEBITOSVLRTOTAL_3_ ,
BVSPJ.REGISTRODEBITOSVLRTOTAL_4_ ,
BVSPJ.REGISTRODEBITOSVLRTOTAL_5_ ,
BVSPJ.SOCIOACIONISTA1_FLAGRESTR ,
BVSPJ.SOCIOACIONISTA2_FLAGRESTR ,
BVSPJ.SOCIOACIONISTA3_FLAGRESTR ,
BVSPJ.SOCIOACIONISTA4_FLAGRESTR ,
BVSPJ.SOCIOACIONISTA5_FLAGRESTR ,
BVSPJ.DATAFALENCIADECRETADA ,
BVSPJ.DATAFALENCIAREQUERIDA ,
BVSPJ.DATARECUPJUDICIALREQUERIDA ,
BVSPJ.DATARECUPJUDICIALCONCEDIDA ,
BVSPJ.ADMINISTRADOR1_FLAGRESTR ,
BVSPJ.ADMINISTRADOR2_FLAGRESTR ,
BVSPJ.ADMINISTRADOR3_FLAGRESTR from BVSPJ INNER JOIN DADOSPROPOSTADS ON  BVSPJ.IDS_BVSPJ = DADOSPROPOSTADS.IDS_BVSPJ  and DADOSPROPOSTADS.IDS_DADOSPROPOSTADS = IDS_DADOSPROPOSTADS `;

/*
`SELECT 'BVSPJ' TABELA, 'INSERT' OPERACAO, SYSDATE DATA_STREAM, BVSPJ.* 
from BVSPJ , DADOSPROPOSTADS 
WHERE  BVSPJ.IDS_BVSPJ = DADOSPROPOSTADS.IDS_BVSPJ and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;
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
