const eda_history_data = require('./db_apis/eda_history_data');

async function get(req, res, next) {
  try {
    const context = {};

    context.id = String(req.params.id, 10);

    const rows = await eda_history_data.find(context);

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
