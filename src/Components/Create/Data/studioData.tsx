import { Studio } from "../Interfaces/CreateInterface";
import questionMark from "../../../Assets/QuestionMark.png";
import twentyCatImage from "../../../Assets/21Cat.png";
import badMovieCoImage from "../../../Assets/BadMovieCo.png";
import bigBoyImage from "../../../Assets/BigBoy.png";
import everestImage from "../../../Assets/Everest.png";
import filmFactoryImage from "../../../Assets/Factory.png";
import bananaBrosImage from "../../../Assets/BananaBros.png";
import { CompanyInfoState } from "../../../Redux/Reducers/companyInfoSlice";

export let studios: Studio[] = [
  {
    id: 0,
    studioName: "21st Century Cats",
    image: twentyCatImage,
    offerRequested: false,
    rejected: false,
    offer: 0,
    message: "",
  },
  {
    id: 1,
    studioName: "Bad Movie Co.",
    image: badMovieCoImage,
    offerRequested: false,
    rejected: false,
    offer: 0,
    message: "",
  },
  {
    id: 2,
    studioName: "Big Boy Studios",
    image: bigBoyImage,
    offerRequested: false,
    rejected: false,
    offer: 0,
    message: "",
  },
  {
    id: 3,
    studioName: "Everest",
    image: everestImage,
    offerRequested: false,
    rejected: false,
    offer: 0,
    message: "",
  },
  {
    id: 4,
    studioName: "Fail Films",
    image: questionMark,
    offerRequested: false,
    rejected: false,
    offer: 0,
    message: "",
  },
  {
    id: 5,
    studioName: "Film Factory",
    image: filmFactoryImage,
    offerRequested: false,
    rejected: false,
    offer: 0,
    message: "",
  },
  {
    id: 6,
    studioName: "Banana Bros.",
    image: bananaBrosImage,
    offerRequested: false,
    rejected: false,
    offer: 0,
    message: "",
  },
];

export const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max) + 1;
};

const getRandomArbitrary = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min) + 1;
};

const rejectedMessageSet = new Set();
const acceptedMessageSet = new Set();

const generateAcceptedMessage = (): string => {
  let randomAcceptMessage =
    acceptedMessages[getRandomArbitrary(0, acceptedMessages.length - 1)]
      .message;
  while (acceptedMessageSet.has(randomAcceptMessage)) {
    randomAcceptMessage =
      acceptedMessages[getRandomArbitrary(0, acceptedMessages.length - 1)]
        .message;
  }
  acceptedMessageSet.add(randomAcceptMessage);
  return randomAcceptMessage;
};

const generateRejectedMessage = (): string => {
  let randomRejectedMessage =
    rejectedMessages[getRandomArbitrary(0, rejectedMessages.length - 1)]
      .message;
  while (rejectedMessageSet.has(randomRejectedMessage)) {
    randomRejectedMessage =
      rejectedMessages[getRandomArbitrary(0, rejectedMessages.length - 1)]
        .message;
  }
  rejectedMessageSet.add(randomRejectedMessage);
  return randomRejectedMessage;
};

export const requestOffer = (
  studio: Studio,
  company: CompanyInfoState,
): Studio[] => {
  const randomNum: number = getRandomInt(29);
  const companyReputation = (): number => {
    if (
      company.reputation + company.history.length < 20 &&
      company.reputation + company.history.length > 0
    ) {
      return company.reputation + company.history.length;
    } else {
      return 0;
    }
  };

  switch (studio.id) {
    case 0:
      if (randomNum > 25 - companyReputation()) {
        studios[0].offer = getRandomArbitrary(80, 100);
        studios[0].offerRequested = true;
        studios[0].message = generateAcceptedMessage();
      } else {
        studios[0].offerRequested = true;
        studios[0].rejected = true;
        studios[0].message = generateRejectedMessage();
        studios[0].offer = -1;
      }
      return studios;
    case 1:
      if (randomNum > 0) {
        studios[1].offer = getRandomArbitrary(60, 70);
        studios[1].offerRequested = true;
        studios[1].message = generateAcceptedMessage();
      } else {
        studios[1].offerRequested = true;
        studios[1].rejected = true;
        studios[1].message = generateRejectedMessage();
        studios[1].offer = -1;
      }
      return studios;
    case 2:
      if (randomNum >= 10 && randomNum <= 15 + companyReputation()) {
        studios[2].offer = getRandomArbitrary(70, 80);
        studios[2].offerRequested = true;
        studios[2].message = generateAcceptedMessage();
      } else {
        studios[2].offerRequested = true;
        studios[2].rejected = true;
        studios[2].message = generateRejectedMessage();
        studios[2].offer = -1;
      }
      return studios;
    case 3:
      if (randomNum >= 10) {
        studios[3].offer = getRandomArbitrary(65, 85);
        studios[3].offerRequested = true;
        studios[3].message = generateAcceptedMessage();
      } else {
        studios[3].offerRequested = true;
        studios[3].rejected = true;
        studios[3].message = generateRejectedMessage();
        studios[3].offer = -1;
      }
      return studios;
    case 4:
      if (randomNum >= 20 - companyReputation()) {
        studios[4].offer = getRandomArbitrary(65, 95);
        studios[4].offerRequested = true;
        studios[4].message = generateAcceptedMessage();
      } else {
        studios[4].offerRequested = true;
        studios[4].rejected = true;
        studios[4].message = generateRejectedMessage();
        studios[4].offer = -1;
      }
      return studios;
    case 5:
      if (randomNum >= 5 - companyReputation()) {
        studios[5].offer = getRandomArbitrary(65, 75);
        studios[5].offerRequested = true;
        studios[5].message = generateAcceptedMessage();
      } else {
        studios[5].rejected = true;
        studios[5].offerRequested = true;
        studios[5].message = generateRejectedMessage();
        studios[5].offer = -1;
      }
      return studios;
    case 6:
      if (randomNum >= 25 - companyReputation()) {
        studios[6].offer = getRandomArbitrary(85, 95);
        studios[6].offerRequested = true;
        studios[6].message = generateAcceptedMessage();
      } else {
        studios[6].rejected = true;
        studios[6].offerRequested = true;
        studios[6].message = generateRejectedMessage();
        studios[6].offer = -1;
      }
      return studios;
    default:
      return studios;
  }
};

export const getStudios = (): Studio[] => {
  return studios;
};

const rejectedMessages = [
  {
    message:
      "No thanks, we're not a big fan of the script. Plus, you smelled awful when you came to pitch it, which made us very concerned. Please take a shower.",
  },
  {
    message:
      "Screw you! We hate your idea! Maybe next time use your frontal lobe a bit, ya dummy!",
  },
  {
    message:
      "No. The script was actually great, but I'm having a bad day and I need to take it out on somebody. So get out of here.",
  },
  {
    message:
      "What's wrong with you? This script is perverse. I'm not going to peddle this garbage. Find another sucker to release this trash!",
  },
  {
    message:
      "Have you ever tried Nakagawa Sushi down the street. It's delicious. Oh, the script? I was busy and didn't read it. Maybe come back another day.",
  },
  {
    message:
      "Sorry, I can't commit to any new projects right now. My hamster passed away and I'm still mourning.",
  },
  {
    message: "Sorry, we're broke. Can I borrow 40 dollars?",
  },
  {
    message: "Heck no.",
  },
];

const acceptedMessages = [
  {
    message:
      "Yes, please! Work with us, we're eco-friendly and you can bring your pets into the office.",
  },
  {
    message:
      "We love the script! The part about, uhhhh, the uhhhh, well... I didn't read it, but I like the cut of your gib.",
  },
  {
    message:
      "I'm going to put all my chips on the table here. We want to distribute your film. What do you want? I'll give you my watch right now if you sign with us.",
  },
  {
    message:
      "I'm in real hot water with my boss, so I need a blockbuster, and this looks like exactly what I'm looking for.",
  },
  {
    message:
      "How many millions do you want? I'll sell a kidney to finance this film. That's how serious I am. My name is A.J. by the way, forgot to introduce myself.",
  },
  {
    message:
      "I'm locking the door and keeping you here until you agree to let us distribute your film. I'm not kidding!",
  },
  {
    message:
      "Hey, not only do I love your film, I'm also in love with you. Sorry, that's inappropriate, but yes, I'd like to distribute your film.",
  },
  {
    message: "Heck yes.",
  },
];

export const resetData = (): void => {
  studios = [
    {
      id: 0,
      studioName: "21st Century Cats",
      image: twentyCatImage,
      offerRequested: false,
      rejected: false,
      offer: 0,
      message: "",
    },
    {
      id: 1,
      studioName: "Bad Movie Co.",
      image: badMovieCoImage,
      offerRequested: false,
      rejected: false,
      offer: 0,
      message: "",
    },
    {
      id: 2,
      studioName: "Big Boy Studios",
      image: bigBoyImage,
      offerRequested: false,
      rejected: false,
      offer: 0,
      message: "",
    },
    {
      id: 3,
      studioName: "Everest",
      image: everestImage,
      offerRequested: false,
      rejected: false,
      offer: 0,
      message: "",
    },
    {
      id: 4,
      studioName: "Fail Films",
      image: questionMark,
      offerRequested: false,
      rejected: false,
      offer: 0,
      message: "",
    },
    {
      id: 5,
      studioName: "Film Factory",
      image: filmFactoryImage,
      offerRequested: false,
      rejected: false,
      offer: 0,
      message: "",
    },
    {
      id: 6,
      studioName: "Banana Bros.",
      image: bananaBrosImage,
      offerRequested: false,
      rejected: false,
      offer: 0,
      message: "",
    },
  ];
  acceptedMessageSet.clear();
  rejectedMessageSet.clear();
};
