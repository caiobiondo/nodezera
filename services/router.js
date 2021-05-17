const express = require('express');
const router = new express.Router();
const basecepvivods = require('../controllers/basecepvivods.js');
const black_list_pf_fixo = require ('../controllers/black_list_pf_fixo');
const blacklist_pf_movel = require ('../controllers/blacklist_pf_movel');
const blacklist_pj_fixo = require ('../controllers/blacklist_pj_fixo');
const blacklist_pj_movel = require ('../controllers/blacklist_pj_movel');
const requestbasecepvivods = require ('../controllers/requestbasecepvivods');
const whitelist_pf = require ('../controllers/whitelist_pf');
const whitelist_pf_fixo = require ('../controllers/whitelist_pf_fixo');
const whitelist_pf_movel = require ('../controllers/whitelist_pf_movel');
const whitelist_pj_fixo = require ('../controllers/whitelist_pj_fixo');
const customercredit_ds = require ('../controllers/customercredit_ds');
const documentsinformation_ds = require ('../controllers/documentsinformation_ds');
const getcreditinformation = require ('../controllers/getcreditinformation');
const internalcheck_respds = require ('../controllers/internalcheck_respds');
const bvs_pf = require ('../controllers/bvs_pf');
const bvspf = require ('../controllers/bvspf');
const bvspj = require ('../controllers/bvspj');
const bvspj2 = require ('../controllers/bvspj2');
const relato = require ('../controllers/relato');
const relato2 = require ('../controllers/relato2');
const relato3 = require ('../controllers/relato3');
const relatoxml_reqds = require ('../controllers/relatoxml_reqds');
const sera11_pf = require ('../controllers/sera11_pf');
const serasab49pf = require ('../controllers/serasab49pf');
const analisecredito_reqds = require ('../controllers/analisecredito_reqds');
const analisecredito_respds = require ('../controllers/analisecredito_respds');
const atlys_req_lds = require ('../controllers/atlys_req_lds');
const atlys_resp_lds = require ('../controllers/atlys_resp_lds');
const callcenter_req_lds = require ('../controllers/callcenter_req_lds');
const callcenter_resp_lds = require ('../controllers/callcenter_resp_lds');
const consultacanal_req_lds = require ('../controllers/consultacanal_req_lds');
const consultacanal_resp_lds = require ('../controllers/consultacanal_resp_lds');
const consultacredito_req = require ('../controllers/consultacredito_req');
const consultacredito_resp = require ('../controllers/consultacredito_resp');
//const consultafraude_resp = require ('../controllers/consultafraude_resp');
const consultasiebelreq = require ('../controllers/consultasiebelreq');
const excecaocredito_reqds = require ('../controllers/excecaocredito_reqds');
const front_req_lds = require ('../controllers/front_req_lds');
const front_resp_lds = require ('../controllers/front_resp_lds');
const ura_req_lds = require ('../controllers/ura_req_lds');
const ura_resp_lds = require ('../controllers/ura_resp_lds');
const auditoria = require ('../controllers/auditoria');
const auditoriapolitica = require ('../controllers/auditoriapolitica');
const controle = require ('../controllers/controle');
const dadospropostads = require ('../controllers/dadospropostads');
const historicopco = require ('../controllers/historicopco');
const intermediariasda = require ('../controllers/intermediariasda');
const parametros = require ('../controllers/parametros');
const quoteitem_ds = require ('../controllers/quoteitem_ds');
const quoteitemprice_ds = require ('../controllers/quoteitemprice_ds');
const creditomesa_ds = require ('../controllers/creditomesa_ds');
const fatura_ds = require ('../controllers/fatura_ds');
const eda_history_data = require ('../controllers/eda_history_data');
const bw_list_arquivos = require ('../controllers/bw_list_arquivos');
const bw_list_det_processamento = require ('../controllers/bw_list_det_processamento');
const bw_list_processamentos = require ('../controllers/bw_list_processamentos');
const consultafraude_req_lds = require ('../controllers/consultafraude_req_lds');
const consultafraude_resp_lds = require ('../controllers/consultafraude_resp_lds');
const consultasiebelresp = require ('../controllers/consultasiebelresp');
const excecaocredito_respds = require ('../controllers/excecaocredito_respds');
const getdebtsinf_respds = require ('../controllers/getdebtsinf_respds');
const getdebtsinformation_reqds = require ('../controllers/getdebtsinformation_reqds');
const hp_fs_ds = require ('../controllers/hp_fs_ds');
const quoteitemrelationship_ds = require ('../controllers/quoteitemrelationship_ds');
const relato21 = require ('../controllers/relato21');
const whitelist_pj_movel = require ('../controllers/whitelist_pj_movel');
const armariods = require ('../controllers/armariods');
const bvspf3 = require ('../controllers/bvspf3');
//const employees = require('../controllers/proposta.js');
//const employess = require('../controllers/basesinternas.js');
//const decisoes = require('../controllers/decisoes.js');
//const infosformulario = require('../controllers/infosformulario.js');


router.route('/bvspf3/:id?')
  .get(bvspf3.get);

router.route('/armariods/:id?')
  .get(armariods.get);

router.route('/whitelist_pj_movel/:id?')
  .get(whitelist_pj_movel.get);

router.route('/relato21/:id?')
  .get(relato21.get);

router.route('/quoteitemrelationship_ds/:id?')
  .get(quoteitemrelationship_ds.get);

router.route('/hp_fs_ds/:id?')
  .get(hp_fs_ds.get);

router.route('/getdebtsinformation_reqds/:id?')
  .get(getdebtsinformation_reqds.get);

router.route('/getdebtsinf_respds/:id?')
  .get(getdebtsinf_respds.get);

router.route('/excecaocredito_respds/:id?')
  .get(excecaocredito_respds.get);

router.route('/consultasiebelresp/:id?')
  .get(consultasiebelresp.get);

router.route('/consultafraude_resp_lds/:id?')
  .get(consultafraude_resp_lds.get);

router.route('/consultafraude_req_lds/:id?')
  .get(consultafraude_req_lds.get);

router.route('/basecepvivods/:id?')
  .get(basecepvivods.get);

router.route('/black_list_pf_fixo/:id?')
  .get(black_list_pf_fixo.get);

router.route('/blacklist_pf_movel/:id?')
  .get(blacklist_pf_movel.get);

router.route('/blacklist_pj_fixo/:id?')
  .get(blacklist_pj_fixo.get);

router.route('/blacklist_pj_movel/:id?')
  .get(blacklist_pj_movel.get);

router.route('/requestbasecepvivods/:id?')
  .get(requestbasecepvivods.get)


router.route('/whitelist_pf/:id?')
  .get(whitelist_pf.get)


router.route('/whitelist_pf_fixo/:id?')
  .get(whitelist_pf_fixo.get)


router.route('/whitelist_pf_movel/:id?')
  .get(whitelist_pf_movel.get)


router.route('/whitelist_pj_fixo/:id?')
  .get(whitelist_pj_fixo.get)


router.route('/customercredit_ds/:id?')
  .get(customercredit_ds.get)


router.route('/documentsinformation_ds/:id?')
  .get(documentsinformation_ds.get)


router.route('/getcreditinformation/:id?')
  .get(getcreditinformation.get)

router.route('/internalcheck_respds/:id?')
  .get(internalcheck_respds.get)


router.route('/bvs_pf/:id?')
  .get(bvs_pf.get)


router.route('/bvspf/:id?')
  .get(bvspf.get)

router.route('/bvspj/:id?')
  .get(bvspj.get)



router.route('/bvspj2/:id?')
  .get(bvspj2.get)



router.route('/relato/:id?')
  .get(relato.get)


router.route('/relato2/:id?')
  .get(relato2.get)


router.route('/relato3/:id?')
  .get(relato3.get)


router.route('/relatoxml_reqds/:id?')
  .get(relatoxml_reqds.get)


router.route('/sera11_pf/:id?')
  .get(sera11_pf.get)


router.route('/serasab49pf/:id?')
  .get(serasab49pf.get)


router.route('/analisecredito_reqds/:id?')
  .get(analisecredito_reqds.get)


router.route('/analisecredito_respds/:id?')
  .get(analisecredito_respds.get)


router.route('/atlys_req_lds/:id?')
  .get(atlys_req_lds.get)


router.route('/atlys_resp_lds/:id?')
  .get(atlys_resp_lds.get)


router.route('/callcenter_req_lds/:id?')
  .get(callcenter_req_lds.get)

router.route('/callcenter_resp_lds/:id?')
  .get(callcenter_resp_lds.get)

router.route('/consultacanal_req_lds/:id?')
  .get(consultacanal_req_lds.get)


router.route('/consultacanal_resp_lds/:id?')
  .get(consultacanal_resp_lds.get)


router.route('/consultacredito_req/:id?')
  .get(consultacredito_req.get)



router.route('/consultacredito_resp/:id?')
  .get(consultacredito_resp.get)


router.route('/consultasiebelreq/:id?')
  .get(consultasiebelreq.get)


router.route('/excecaocredito_reqds/:id?')
  .get(excecaocredito_reqds.get)

router.route('/front_req_lds/:id?')
  .get(front_req_lds.get)


router.route('/front_resp_lds/:id?')
  .get(front_resp_lds.get)


router.route('/ura_req_lds/:id?')
  .get(ura_req_lds.get)


router.route('/ura_resp_lds/:id?')
  .get(ura_resp_lds.get)


router.route('/auditoria/:id?')
  .get(auditoria.get)

router.route('/auditoriapolitica/:id?')
  .get(auditoriapolitica.get)



router.route('/controle/:id?')
  .get(controle.get)


router.route('/dadospropostads/:id?')
  .get(dadospropostads.get)



router.route('/historicopco/:id?')
  .get(historicopco.get) 



router.route('/intermediariasda/:id?')
  .get(intermediariasda.get)



router.route('/parametros/:id?')
  .get(parametros.get)


router.route('/quoteitem_ds/:id?')
  .get(quoteitem_ds.get)


router.route('/quoteitemprice_ds/:id?')
  .get(quoteitemprice_ds.get)

router.route('/creditomesa_ds/:id?')
  .get(creditomesa_ds.get)


router.route('/fatura_ds/:id?')
  .get(fatura_ds.get)



router.route('/bw_list_arquivos/:id?')
  .get(bw_list_arquivos.get)




router.route('/eda_history_data/:id?')
  .get(eda_history_data.get)



router.route ('/bw_list_det_processamento/:id?')
  .get(bw_list_det_processamento.get)




router.route('/bw_list_processamentos/:id?')
  .get(bw_list_processamentos.get)

module.exports = router;

