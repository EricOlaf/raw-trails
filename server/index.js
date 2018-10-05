require("dotenv").config();
//TESTING
const express = require("express");
const { urlencoded, json } = require("body-parser");
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const massive = require("massive");
const port = process.env.SERVER_PORT || 3005;
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
//CONTROLLERS
const { getUser, strat, logout } = require(`${__dirname}/controllers/authCtrl`);
const {
  getReviews,
  postReview,
  putReview,
  deleteReview
} = require("./controllers/reviewCtrl");
const { postAnswers, getTrips } = require("./controllers/answersAndTripsCtrl");
const { getEvents } = require("./controllers/eventsCtrl");
const {
  getUserAdmin,
  postOpen,
  postReserved,
  postGear,
  postAdmin,
  getGear,
  deleteGear
} = require("./controllers/userAdminCtrl");

const { getWeather } = require("./controllers/weatherCtrl");

let myPath = "";

const app = express();

app.use(express.static(`${__dirname}/../build`));

app.use(json());
app.use(cors());
app.use(urlencoded({ extended: true }));

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 2 * 7 * 24 * 60 * 60 * 1000
    }
  })
);

//app.use(checkForSession);
app.use(passport.initialize());
app.use(passport.session());
passport.use(strat);

passport.serializeUser((user, done) => {
  console.log(user);
  const db = app.get("db");
  db.getUserByAuthId([user.id])
    .then(response => {
      console.log(response);
      if (!response[0]) {
        db.addUserByAuthId([
          user.name.givenName,
          user.name.familyName,
          // user.emails[0].value,
          user.id
        ])
          .then(res => {
            return done(null, res[0]);
          })
          .catch(console.log);
      } else return done(null, response[0]);
    })
    .catch(console.log);
  // return done(null, user);
});

passport.deserializeUser((user, done) => done(null, user));

//AUTH DIFFERENT PATHS
app.post("/api/trackpath", (req, res) => {
  console.log(req.body.path);
  myPath = req.body.path;
  res.sendStatus(200);
});

//AUTH
app.get(
  "/login",
  passport.authenticate("auth0", {
    failureRedirect: "/login"
  }),
  (req, res) => {
    res.redirect("http://206.189.220.112:3005/#/");
  }
);

app.get("/api/me", getUser);
app.get("/logout", logout);

app.get("/api/plantrip", (req, res) => {
  if (req.user) res.status(200).json(req.user);
  else res.status(400).json({ message: "Not logged in" });
});

//TEST ENDPOINT
// app.get("/api/test", res.status(200).json(response));

//REVIEW ENDPOINTS
app.get("/api/reviews", getReviews);
app.post("/api/review", postReview);
app.put("/api/review/:id", putReview);
app.delete("/api/review/:id", deleteReview);

//GET USER
app.get("/api/getuser", (req, res) => {
  res.status(200).json(req.user);
});

//ANSWERS TO BACKEND
app.post("/api/answers/", postAnswers);

//GET TRIPS
app.get("/api/trips", getTrips);

//GET EVENTS
app.get("/api/events", getEvents);

//GET IS ADMIN?
app.get("/api/useradmin", getUserAdmin);

//POST FROM ADMIN
app.post("/api/addopen", postOpen);
app.post("/api/addreserved", postReserved);
app.post("/api/addadmin", postAdmin);
app.post("/api/addgear", postGear);

//GEAR FROM ADMIN
app.get("/api/gearlist", getGear);
app.delete("/api/gear/:id", deleteGear);

//GET WEATHER
app.get("/api/weather", getWeather);

//NODEMAILER

var transporter = nodemailer.createTransport(
  smtpTransport({
    pool: true,
    host: "smtp.gmail.com",
    port: 465,
    secure: true,

    auth: {
      user: process.env.USER_NAME,
      pass: process.env.PASS
    }
  })
);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

app.post("/api/sendemail", (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${content} `;

  var mail = {
    from: name,
    to: "olavesoneric@gmail.com",
    subject: "New Message fromRaw Trails Contact Form",
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});

app.post("/charge", async (req, res) => {
  try {
    let { status } = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    res.json({ status });
  } catch (err) {
    res.status(500).end();
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () => {
  console.log(`Whistle Tippin on port ${port}`);
});

// app.get(‘/api/login’, passport.authenticate(‘auth0’, {failureRedirect: `http://localhost:3001/login`}), (req, res) => {
//    res.redirect(`http://localhost:3000/#${place}`)
// })
