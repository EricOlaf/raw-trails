const getEvents = (req, res, next) => {
  const db = req.app.get("db");
  db.getEvents()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

module.exports = {
  getEvents
};
