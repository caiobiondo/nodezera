const customercredit_ds = require('./db_apis/customercredit_ds');

async function get(req, res, next) {
  try {
    const context = {};

    context.id = String(req.params.id, 10);

    const rows = await customercredit_ds.find(context);

    if (req.params.id) {
      if (rows.length >= 1) {
        res.status(200).json(rows);
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
