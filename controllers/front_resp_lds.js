const front_resp_lds = require('./db_apis/front_resp_lds');

async function get(req, res, next) {
  try {
    const context = {};

    context.id = String(req.params.id, 10);

    const rows = await front_resp_lds.find(context);

    if (req.params.id) {
      if (rows.length === 1) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).end();
      }
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.get = get
