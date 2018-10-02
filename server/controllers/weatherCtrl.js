require("dotenv").config();
const axios = require("axios");

const getWeather = (req, res, next) => {
  console.log(req.body.lat, req.body.lng);
  axios
    .get(
      `https://api.weatherbit.io/v2.0/current?cityRaleigh,NC&key=${
        process.env.WEATHER_API
      }`
    )
    .then(response => {
      res.status(200).json(response);
      console.log("hit");
    })
    .catch(err => console.log(err));
};

module.exports = {
  getWeather
};
