let trips = [];

const postAnswers = (req, res, next) => {
  console.log(req.body);
  const { answerOne, answerTwo, answerThree } = req.body;
  //1
  if (
    answerOne === "land" &&
    answerTwo === "muscle" &&
    answerThree === "adrenaline"
  ) {
    trips = [
      {
        tripName: "backpacking",
        tripDescription: "Wander around in the Sawtooth Mountains of Idaho",
        tripPicOne:
          "https://res.cloudinary.com/rawtrails801/image/upload/v1532986447/RawTrails/Snapseed_3.jpg",
        tripPicTwo: "",
        tripPicThree: ""
      },
      {
        tripName: "rock climbing",
        tripDescription: "Climb on in Smith Rock State Park in Oregon",
        tripPicOne:
          "https://bendoregonstock.com/wp-content/uploads/edd/2016/09/climbing-smith-rock-lower-gorge-skyler-hughes.jpg",
        tripPicTwo: "",
        tripPicThree: ""
      },
      {
        tripName: "biking",
        tripDescription: "Wear some tire tread on the red rocks in Moab Utah",
        tripPicOne:
          "https://cdn-files.apstatic.com/mtb/4669523_smallMed_1387598156.jpg",
        tripPicTwo: "",
        tripPicThree: ""
      }
    ];
  }
  //2
  if (
    answerOne === "land" &&
    answerTwo === "motor" &&
    answerThree === "adrenaline"
  ) {
    trips = [
      {
        tripName: "snowmachine",
        tripDescription:
          "Enjoy the powder in Jackson Wyoming on your new favorite toy",
        tripPicOne:
          "https://cdn.jacksonholewy.net/images/content/260_17853_Togwotee_Lodge_Snowmobiling_lg.jpg",
        tripPicTwo: "",
        tripPicThree: ""
      },
      {
        tripName: "dirt bike",
        tripDescription: "Tear up some dirt in Anaconda Montana",
        tripPicOne:
          "http://www.advpulse.com/wp-content/uploads/2017/01/continental-divide-trail-main.jpg",
        tripPicTwo: "",
        tripPicThree: ""
      },
      {
        tripName: "rock crawl",
        tripDescription: "Big tires and big rocks in Moab Utah",
        tripPicOne: "https://i.ytimg.com/vi/O01FLnwzpQo/maxresdefault.jpg",
        tripPicTwo: "",
        tripPicThree: ""
      }
    ];
  }
  //3
  if (
    answerOne === "land" &&
    answerTwo === "motor" &&
    answerThree === "relax"
  ) {
    trips = [
      {
        tripName: "drive a RZR",
        tripDescription: "Go for a spin in Canyonlands Utah",
        tripPicOne:
          "https://canyonlandsbynight.com/wp-content/uploads/2015/09/9G3A4175-1024x1024.jpg",
        tripPicTwo: "",
        tripPicThree: ""
      },
      {
        tripName: "see the sights",
        tripDescription:
          "See hidden sights of Yellowstone from the comfort of a car",
        tripPicOne:
          "https://www.yellowstonepark.com/.image/t_share/MTQ3MzIwMDY4NTE5NTAzMzEw/yellowstone-road-bison_dp_680x392.jpg",
        tripPicTwo: "",
        tripPicThree: ""
      },
      {
        tripName: "cruise on a quad",
        tripDescription: "Enjoy nature in Durango Colorado",
        tripPicOne:
          "http://www.durangotrain.com/sites/default/files/images/ATV%20ARiver.jpg",
        tripPicTwo: "",
        tripPicThree: ""
      }
    ];
  }
  //4
  if (
    answerOne === "land" &&
    answerTwo === "muscle" &&
    answerThree === "relax"
  ) {
    trips = [
      {
        tripName: "hike somewhere new",
        tripDescription: "No better way to explore Kauai Hawaii",
        tripPicOne:
          "https://www.journeyera.com/wp-content/uploads/2018/02/best-hikes-on-kauai-hawaii-02521.jpg",
        tripPicTwo: "",
        tripPicThree: ""
      },
      {
        tripName: "bike somewhere awesome",
        tripDescription: "Black Canyon Trail in Arizona is awesome",
        tripPicOne:
          "https://assets2.roadtrippers.com/uploads/blog_post_section/attachment/image/176888/blog_post_section/attachment-image-0903d152-f15a-4923-9f10-6e563332380e.jpg",
        tripPicTwo: "",
        tripPicThree: ""
      },
      {
        tripName: "camp somehwere different",
        tripDescription: "You need to camp in Alaska at least once",
        tripPicOne:
          "https://cdn.iamlivingit.com/img/post/camping-denali-alaska1512567165.jpg",
        tripPicTwo: "",
        tripPicThree: ""
      }
    ];
  }
  //5
  if (
    answerOne === "water" &&
    answerTwo === "motor" &&
    answerThree === "adrenaline"
  ) {
    trips = [
      {
        tripName: "jet skiing",
        tripDescription: "Get crazy on Flathead Lake in Montana",
        tripPicOne:
          "http://flatheadlake.us/wp-content/uploads/2012/07/jet_ski_flathead_lake.jpg",
        tripPicTwo: "",
        tripPicThree: ""
      },
      {
        tripName: "go boating",
        tripDescription: "Grab the wake board and skis for McCall Idaho ",
        tripPicOne:
          "https://media-cdn.tripadvisor.com/media/photo-s/0d/40/db/38/getlstd-property-photo.jpg",
        tripPicTwo: "",
        tripPicThree: ""
      },
      {
        tripName: "house boat fun",
        tripDescription: "Bring the party on the water in Lake Powell Utah",
        tripPicOne:
          "https://www.lakepowellhouseboating.com/files/large/20e57b24649d2e2",
        tripPicTwo: "",
        tripPicThree: ""
      }
    ];
  }
  //6
  if (
    answerOne === "water" &&
    answerTwo === "motor" &&
    answerThree === "relax"
  ) {
    trips = [
      {
        tripName: "deep sea fishing",
        tripDescription: "Catch the biggest fish just off the Washington coast",
        tripPicOne:
          "http://www.rivieranayarit.com/wp-content/uploads/2017/05/03-Pesca-Deportiva-1-720x430.jpg",
        tripPicTwo: "",
        tripPicThree: ""
      },
      {
        tripName: "house boat party",
        tripDescription: "Bring the party on the water in Lake Powell Utah",
        tripPicOne:
          "https://www.lakepowellhouseboating.com/files/large/20e57b24649d2e2",
        tripPicTwo: "",
        tripPicThree: ""
      },
      {
        tripName: "cruise on a boat",
        tripDescription:
          "Enjoy the beauty of Green River Lakes and Wind River mountains in Wyoming ",
        tripPicOne:
          "https://ssl.c.photoshelter.com/img-get/I0000yew8._lGmcM/s/900/720/fishing-boat-Green-River-Lake-22632.jpg",
        tripPicTwo: "",
        tripPicThree: ""
      }
    ];
  }
  //7
  if (
    answerOne === "water" &&
    answerTwo === "muscle" &&
    answerThree === "adrenaline"
  ) {
    trips = [
      {
        tripName: "surfing",
        tripDescription: "Ride the waves in Salina Cruz Mexico",
        tripPicOne:
          "http://www.spanishandsurflessonsmexico.com/wp-content/uploads/2018/04/salina-cruz-surf-1-672x372.jpg",
        tripPicTwo: "",
        tripPicThree: ""
      },
      {
        tripName: "kayaking",
        tripDescription: "Grab your paddle and kayak Black Canyon of Colorado",
        tripPicOne:
          "http://kaijabeishline.com/wp-content/uploads/2017/02/img_8202.jpg",
        tripPicTwo: "",
        tripPicThree: ""
      },
      {
        tripName: "white water rafting",
        tripDescription:
          "Some of the best rafting resides on Salmon River in Idaho",
        tripPicOne:
          "https://www.oars.com/wp-content/uploads/2015/12/idaho-main-salmon-rafting-014.jpg",
        tripPicTwo: "",
        tripPicThree: ""
      }
    ];
  }
  //8
  if (
    answerOne === "water" &&
    answerTwo === "muscle" &&
    answerThree === "relax"
  ) {
    trips = [
      {
        tripName: "sailing",
        tripDescription: "Enjoy the Great Salt Lake from a sailboat",
        tripPicOne:
          "http://www.globeslcc.com/wp-content/uploads/media/com-spring-break-activities-great-salt-lake-sailing-grodriguez.jpg",
        tripPicTwo: "",
        tripPicThree: ""
      },
      {
        tripName: "paddle boarding",
        tripDescription:
          "Enjoy the beauty of Southern Utah from a paddle board",
        tripPicOne:
          "https://www.discovermoab.com/wp-content/uploads/2017/10/Colorado_River-Paddle_Boarding-web-size.jpg",
        tripPicTwo: "",
        tripPicThree: ""
      },
      {
        tripName: "lakefront camping",
        tripDescription:
          "Pitch your tent and wake up to the amazing views of Lake Coeur d'Alene",
        tripPicOne:
          "http://cdn.mntm.me/d8/40/11/Lake_Coeur_d_Alene-Coeur_D_Alene-Idaho-d8401171eb8848e790c32e9925e20a18.jpg",
        tripPicTwo: "",
        tripPicThree: ""
      }
    ];
  }
  req.session.answers = req.body;
  req.session.trips = trips;

  res
    .status(200)
    .send({ answers: req.session.answers, myTrips: req.session.trips });
};

const getTrips = (req, res, next) => {
  const db = req.app.get("db");
  db.getTrips()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

module.exports = {
  postAnswers,
  getTrips
};
