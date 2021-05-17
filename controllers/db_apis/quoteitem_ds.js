const database = require ('../../services/database');

const baseQuery =

`SELECT 'QUOTEITEM_DS' TABELA, SYSDATE OPERACAO, 
QUOTEITEM_DS.IDS_QUOTEITEM_DS ,
QUOTEITEM_DS.ARRIDX_ANALISECREDITO_REQDS ,
QUOTEITEM_DS.PARENTQUOTEITEMID ,
QUOTEITEM_DS.PRODUCT_CHARACTERISTIC_MEIOPAG ,
QUOTEITEM_DS.PRODUCT_FAMILIA ,
QUOTEITEM_DS.PRODUCT_NAME ,
QUOTEITEM_DS.PRODUCT_PLACE_EXTENDEDPARAMETE ,
QUOTEITEM_DS.QUANTITY ,
QUOTEITEM_DS.ROOTQUOTEITEMID ,
QUOTEITEM_DS.SYS_CREATEDATE ,
QUOTEITEM_DS.IDS_ANALISECREDITO_REQDS ,
QUOTEITEM_DS.DDD ,
QUOTEITEM_DS.ISNETWORKFOREIGN ,
QUOTEITEM_DS.PRODUCT_ISINTERNATIONALPRODUCT ,
QUOTEITEM_DS.PRODUCT_TYPEOFPRODUCT ,
QUOTEITEM_DS.TYPEOFOPERATION ,
QUOTEITEM_DS.ACAO ,
QUOTEITEM_DS.ID_QUOTE ,
QUOTEITEM_DS.MOTIVO ,
QUOTEITEM_DS.NIVEL ,
QUOTEITEM_DS.NIVELORDER ,
QUOTEITEM_DS.QTDALTAS ,
QUOTEITEM_DS.QTDPN ,
QUOTEITEM_DS.QTDTOTAL ,
QUOTEITEM_DS.QUOTEITEMRELATIONSHIP_1_IDQUOT ,
QUOTEITEM_DS.QUOTEITEMRELATIONSHIP_10_IDQUO ,
QUOTEITEM_DS.QUOTEITEMRELATIONSHIP_11_IDQUO ,
QUOTEITEM_DS.QUOTEITEMRELATIONSHIP_12_IDQUO ,
QUOTEITEM_DS.QUOTEITEMRELATIONSHIP_13_IDQUO ,
QUOTEITEM_DS.QUOTEITEMRELATIONSHIP_14_IDQUO ,
QUOTEITEM_DS.QUOTEITEMRELATIONSHIP_15_IDQUO ,
QUOTEITEM_DS.QUOTEITEMRELATIONSHIP_2_IDQUOT ,
QUOTEITEM_DS.QUOTEITEMRELATIONSHIP_3_IDQUOT ,
QUOTEITEM_DS.QUOTEITEMRELATIONSHIP_4_IDQUOT ,
QUOTEITEM_DS.QUOTEITEMRELATIONSHIP_5_IDQUOT ,
QUOTEITEM_DS.QUOTEITEMRELATIONSHIP_6_IDQUOT ,
QUOTEITEM_DS.QUOTEITEMRELATIONSHIP_7_IDQUOT ,
QUOTEITEM_DS.QUOTEITEMRELATIONSHIP_8_IDQUOT ,
QUOTEITEM_DS.QUOTEITEMRELATIONSHIP_9_IDQUOT ,
QUOTEITEM_DS.TLODELTAPERCENT ,
QUOTEITEM_DS.VRDLTRENEGOCIADOEQUIPRC ,
QUOTEITEM_DS.VRDLTRENEGOCIADOSERVIRC ,
QUOTEITEM_DS.VRNEGOCIADOEQUIPNRC ,
QUOTEITEM_DS.VRNEGOCIADOEQUIPRC ,
QUOTEITEM_DS.VRNEGOCIADONRC ,
QUOTEITEM_DS.VRNEGOCIADORC ,
QUOTEITEM_DS.VRNEGOCIADOSERVNRC ,
QUOTEITEM_DS.VRNEGOCIADOSERVRC ,
QUOTEITEM_DS.VRPRATELEIRANRC ,
QUOTEITEM_DS.VRPRATELEIRARC ,
QUOTEITEM_DS.FORMAPAGAMENTO ,
QUOTEITEM_DS.ISRACO ,
QUOTEITEM_DS.DDDMOVEL_1_DDD ,
QUOTEITEM_DS.DDDMOVEL_10_DDD ,
QUOTEITEM_DS.DDDMOVEL_11_DDD ,
QUOTEITEM_DS.DDDMOVEL_12_DDD ,
QUOTEITEM_DS.DDDMOVEL_13_DDD ,
QUOTEITEM_DS.DDDMOVEL_14_DDD ,
QUOTEITEM_DS.DDDMOVEL_15_DDD ,
QUOTEITEM_DS.DDDMOVEL_16_DDD ,
QUOTEITEM_DS.DDDMOVEL_17_DDD ,
QUOTEITEM_DS.DDDMOVEL_18_DDD ,
QUOTEITEM_DS.DDDMOVEL_19_DDD ,
QUOTEITEM_DS.DDDMOVEL_2_DDD ,
QUOTEITEM_DS.DDDMOVEL_20_DDD ,
QUOTEITEM_DS.DDDMOVEL_21_DDD ,
QUOTEITEM_DS.DDDMOVEL_22_DDD ,
QUOTEITEM_DS.DDDMOVEL_23_DDD ,
QUOTEITEM_DS.DDDMOVEL_24_DDD ,
QUOTEITEM_DS.DDDMOVEL_25_DDD ,
QUOTEITEM_DS.DDDMOVEL_26_DDD ,
QUOTEITEM_DS.DDDMOVEL_27_DDD ,
QUOTEITEM_DS.DDDMOVEL_28_DDD ,
QUOTEITEM_DS.DDDMOVEL_29_DDD ,
QUOTEITEM_DS.DDDMOVEL_3_DDD ,
QUOTEITEM_DS.DDDMOVEL_30_DDD ,
QUOTEITEM_DS.DDDMOVEL_4_DDD ,
QUOTEITEM_DS.DDDMOVEL_5_DDD ,
QUOTEITEM_DS.DDDMOVEL_6_DDD ,
QUOTEITEM_DS.DDDMOVEL_7_DDD ,
QUOTEITEM_DS.DDDMOVEL_8_DDD ,
QUOTEITEM_DS.DDDMOVEL_9_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_PORTABILITY ,
QUOTEITEM_DS.LISTMOBILELINEINFO_PORTEDNUMBE ,
QUOTEITEM_DS.MEIOPAGAMENTO ,
QUOTEITEM_DS.MULTDOCUMENTNUMBER ,
QUOTEITEM_DS.PRODUCT_AMOUNT ,
QUOTEITEM_DS.PRODUCT_FINALRANGE ,
QUOTEITEM_DS.PRODUCT_INITIALRANGE ,
QUOTEITEM_DS.PRODUCT_PORTABILITYCARRIER ,
QUOTEITEM_DS.PRODUCT_TYPECLASSIFICATION ,
QUOTEITEM_DS.PRODUTONOME ,
QUOTEITEM_DS.QTDMIGRADOS ,
QUOTEITEM_DS.QTDPARCELAS ,
QUOTEITEM_DS.QUOTEITEMINSTALLMENT_QUANTITYI ,
QUOTEITEM_DS.TEXTFIELDVRNEGOCIADONRC ,
QUOTEITEM_DS.TEXTFIELDVRNEGOCIADORC ,
QUOTEITEM_DS.TEXTFIELDVRPRATELEIRANRC ,
QUOTEITEM_DS.TEXTFIELDVRPRATELEIRARC ,
QUOTEITEM_DS.TIPOPRODUTO ,
QUOTEITEM_DS.TYPESALESOPERATION ,
QUOTEITEM_DS.VALORPARCELAS ,
QUOTEITEM_DS.FAMILIA ,
QUOTEITEM_DS.LISTMOBILELINEINFO_1_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_1_PORTABILI ,
QUOTEITEM_DS.LISTMOBILELINEINFO_1_PORTEDNUM ,
QUOTEITEM_DS.LISTMOBILELINEINFO_10_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_10_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_10_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_11_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_11_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_11_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_12_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_12_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_12_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_13_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_13_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_13_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_14_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_14_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_14_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_15_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_15_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_15_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_16_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_16_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_16_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_17_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_17_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_17_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_18_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_18_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_18_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_19_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_19_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_19_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_2_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_2_PORTABILI ,
QUOTEITEM_DS.LISTMOBILELINEINFO_2_PORTEDNUM ,
QUOTEITEM_DS.LISTMOBILELINEINFO_20_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_20_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_20_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_21_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_21_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_21_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_22_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_22_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_22_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_23_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_23_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_23_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_24_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_24_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_24_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_25_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_25_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_25_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_26_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_26_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_26_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_27_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_27_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_27_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_28_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_28_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_28_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_29_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_29_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_29_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_3_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_3_PORTABILI ,
QUOTEITEM_DS.LISTMOBILELINEINFO_3_PORTEDNUM ,
QUOTEITEM_DS.LISTMOBILELINEINFO_30_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_30_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_30_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_31_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_31_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_31_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_32_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_32_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_32_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_33_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_33_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_33_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_34_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_34_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_34_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_35_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_35_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_35_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_36_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_36_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_36_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_37_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_37_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_37_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_38_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_38_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_38_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_39_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_39_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_39_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_4_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_4_PORTABILI ,
QUOTEITEM_DS.LISTMOBILELINEINFO_4_PORTEDNUM ,
QUOTEITEM_DS.LISTMOBILELINEINFO_40_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_40_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_40_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_41_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_41_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_41_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_42_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_42_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_42_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_43_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_43_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_43_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_44_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_44_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_44_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_45_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_45_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_45_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_46_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_46_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_46_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_47_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_47_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_47_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_48_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_48_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_48_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_49_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_49_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_49_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_5_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_5_PORTABILI ,
QUOTEITEM_DS.LISTMOBILELINEINFO_5_PORTEDNUM ,
QUOTEITEM_DS.LISTMOBILELINEINFO_50_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_50_PORTABIL ,
QUOTEITEM_DS.LISTMOBILELINEINFO_50_PORTEDNU ,
QUOTEITEM_DS.LISTMOBILELINEINFO_6_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_6_PORTABILI ,
QUOTEITEM_DS.LISTMOBILELINEINFO_6_PORTEDNUM ,
QUOTEITEM_DS.LISTMOBILELINEINFO_7_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_7_PORTABILI ,
QUOTEITEM_DS.LISTMOBILELINEINFO_7_PORTEDNUM ,
QUOTEITEM_DS.LISTMOBILELINEINFO_8_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_8_PORTABILI ,
QUOTEITEM_DS.LISTMOBILELINEINFO_8_PORTEDNUM ,
QUOTEITEM_DS.LISTMOBILELINEINFO_9_DDD ,
QUOTEITEM_DS.LISTMOBILELINEINFO_9_PORTABILI ,
QUOTEITEM_DS.LISTMOBILELINEINFO_9_PORTEDNUM ,
QUOTEITEM_DS.TEXTFIELDVRDLTRENEGOCIADOEQUIP ,
QUOTEITEM_DS.TEXTFIELDVRDLTRENEGOCIADOSERVI ,
QUOTEITEM_DS.TEXTFIELDVRNEGOCIADOEQUIPNRC ,
QUOTEITEM_DS.TEXTFIELDVRNEGOCIADOEQUIPRC ,
QUOTEITEM_DS.TEXTFIELDVRNEGOCIADOSERVNRC ,
QUOTEITEM_DS.TEXTFIELDVRNEGOCIADOSERVRC from QUOTEITEM_DS  INNER JOIN DADOSPROPOSTADS ON  quoteitem_ds.ids_analisecredito_reqds = dadospropostads.ids_analisecredito_reqds  and DADOSPROPOSTADS.NUMPROPOSTA = NUMPROPOSTA `;

/*
`SELECT 'QUOTEITEM_DS' TABELA, SYSDATE OPERACAO, SYSDATE DATA_STREAM, QUOTEITEM_DS.* 
from QUOTEITEM_DS , DADOSPROPOSTADS 
WHERE  quoteitem_ds.ids_analisecredito_reqds = dadospropostads.ids_analisecredito_reqds and DADOSPROPOSTADS.NUMPROPOSTA = '000000000521575'`;
**/

async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
    binds.NUMPROPOSTA = context.id;

    query += `\nwhere NUMPROPOSTA = :NUMPROPOSTA`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;