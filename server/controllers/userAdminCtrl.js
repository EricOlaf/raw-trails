const getUserAdmin = (req, res, next) => {
  const db = req.app.get("db");
  db.getUserAdmin(req.user.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

const postOpen = (req, res, next) => {
  const db = req.app.get("db");
  db.postOpen(req.body.title, req.body.start, req.body.end)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

const postReserved = (req, res, next) => {
  const db = req.app.get("db");
  db.postReserved(req.body.title, req.body.start, req.body.end)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

const postGear = (req, res, next) => {
  const db = req.app.get("db");
  db.postGear(
    req.body.gearName,
    req.body.gearCondition,
    req.body.gearDescription
  )
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

const postAdmin = (req, res, next) => {
  const db = req.app.get("db");
  db.postAdmin(req.body.isAdmin, req.body.first, req.body.last)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

const getGear = (req, res, next) => {
  const db = req.app.get("db");
  db.getGear()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

const deleteGear = (req, res, next) => {
  const db = req.app.get("db");
  db.deleteGear(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

module.exports = {
  getUserAdmin,
  postOpen,
  postReserved,
  postGear,
  postAdmin,
  getGear,
  deleteGear
};
