const getReviews = (req, res, naxt) => {
  const db = req.app.get("db");
  db.getReviews()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

const postReview = (req, res, next) => {
  console.log(req.body);
  const db = req.app.get("db");
  let newPic =
    "https://res.cloudinary.com/rawtrails801/image/upload/v1532986446/RawTrails/RAWtrails_logo_full-02.png";
  if (req.body.pic == "") {
    db.postReview([req.body.text, req.user.id, newPic])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => console.log(err));
  } else {
    db.postReview([req.body.text, req.user.id, req.body.pic])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => console.log(err));
  }
};

const putReview = (req, res, next) => {
  const db = req.app.get("db");
  db.putReview([req.body.text, req.params.id])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

const deleteReview = (req, res, next) => {
  const db = req.app.get("db");
  db.deleteReview([req.params.id])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

module.exports = {
  getReviews,
  postReview,
  putReview,
  deleteReview
};
