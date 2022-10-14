import { Studio } from "../Interfaces/CreateInterface";
import questionMark from "../../../Assets/QuestionMark.png";

export let studios: Studio[] = [
  {
    id: 0,
    studioName: "20th Century Fox",
    image: questionMark,
    offerRequested: false,
    rejected: false,
    offer: 0,
    message: "",
  },
  {
    id: 1,
    studioName: "Warner Bros.",
    image: questionMark,
    offerRequested: false,
    rejected: false,
    offer: 0,
    message: "",
  },
  {
    id: 2,
    studioName: "Universal",
    image: questionMark,
    offerRequested: false,
    rejected: false,
    offer: 0,
    message: "",
  },
  {
    id: 3,
    studioName: "Paramount",
    image: questionMark,
    offerRequested: false,
    rejected: false,
    offer: 0,
    message: "",
  },
  {
    id: 4,
    studioName: "Columbia",
    image: questionMark,
    offerRequested: false,
    rejected: false,
    offer: 0,
    message: "",
  },
  {
    id: 5,
    studioName: "TriStar",
    image: questionMark,
    offerRequested: false,
    rejected: false,
    offer: 0,
    message: "",
  },
  {
    id: 6,
    studioName: "Miramax",
    image: questionMark,
    offerRequested: false,
    rejected: false,
    offer: 0,
    message: "",
  },
];

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max) + 1;
};

const getRandomArbitrary = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min) + 1;
};

export const requestOffer = (studio: Studio): Studio[] => {
  const randomNum = getRandomInt(29);
  switch (studio.id) {
    case 0:
      if (randomNum > 15) {
        studios[0].offer = getRandomArbitrary(50, 70);
        studios[0].offerRequested = true;
        studios[0].message =
          acceptedMessages[
            getRandomArbitrary(0, rejectedMessages.length - 1)
          ].message;
      } else {
        studios[0].offerRequested = true;
        studios[0].rejected = true;
        studios[0].message =
          rejectedMessages[
            getRandomArbitrary(0, rejectedMessages.length - 1)
          ].message;
        studios[0].offer = -1;
      }
      return studios;
    case 1:
      if (randomNum > 0) {
        studios[1].offer = getRandomArbitrary(30, 40);
        studios[1].offerRequested = true;
        studios[1].message =
          acceptedMessages[
            getRandomArbitrary(0, rejectedMessages.length - 1)
          ].message;
      } else {
        studios[1].offerRequested = true;
        studios[1].rejected = true;
        studios[1].message =
          rejectedMessages[
            getRandomArbitrary(0, rejectedMessages.length - 1)
          ].message;
        studios[1].offer = -1;
      }
      return studios;
    case 2:
      if (randomNum >= 10 && randomNum <= 15) {
        studios[2].offer = getRandomArbitrary(40, 50);
        studios[2].offerRequested = true;
        studios[2].message =
          acceptedMessages[
            getRandomArbitrary(0, rejectedMessages.length - 1)
          ].message;
      } else {
        studios[2].offerRequested = true;
        studios[2].rejected = true;
        studios[2].message =
          rejectedMessages[
            getRandomArbitrary(0, rejectedMessages.length - 1)
          ].message;
        studios[2].offer = -1;
      }
      return studios;
    case 3:
      if (randomNum >= 10) {
        studios[3].offer = getRandomArbitrary(35, 55);
        studios[3].offerRequested = true;
        studios[3].message =
          acceptedMessages[
            getRandomArbitrary(0, rejectedMessages.length - 1)
          ].message;
      } else {
        studios[3].offerRequested = true;
        studios[3].rejected = true;
        studios[3].message =
          rejectedMessages[
            getRandomArbitrary(0, rejectedMessages.length - 1)
          ].message;
        studios[3].offer = -1;
      }
      return studios;
    case 4:
      if (randomNum >= 20) {
        studios[4].offer = getRandomArbitrary(35, 65);
        studios[4].offerRequested = true;
        studios[4].message =
          acceptedMessages[
            getRandomArbitrary(0, rejectedMessages.length - 1)
          ].message;
      } else {
        studios[4].offerRequested = true;
        studios[4].rejected = true;
        studios[4].message =
          rejectedMessages[
            getRandomArbitrary(0, rejectedMessages.length - 1)
          ].message;
        studios[4].offer = -1;
      }
      return studios;
    case 5:
      if (randomNum >= 5) {
        studios[5].offer = getRandomArbitrary(35, 45);
        studios[5].offerRequested = true;
        studios[5].message =
          acceptedMessages[
            getRandomArbitrary(0, rejectedMessages.length - 1)
          ].message;
      } else {
        studios[5].rejected = true;
        studios[5].offerRequested = true;
        studios[5].message =
          rejectedMessages[
            getRandomArbitrary(0, rejectedMessages.length - 1)
          ].message;
        studios[5].offer = -1;
      }
      return studios;
    case 6:
      if (randomNum >= 25) {
        studios[6].offer = getRandomArbitrary(55, 65);
        studios[6].offerRequested = true;
        studios[6].message =
          acceptedMessages[
            getRandomArbitrary(0, rejectedMessages.length - 1)
          ].message;
      } else {
        studios[6].rejected = true;
        studios[6].offerRequested = true;
        studios[6].message =
          rejectedMessages[
            getRandomArbitrary(0, rejectedMessages.length - 1)
          ].message;
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
    message: "No thank you",
  },
  {
    message: "Screw you!",
  },
];

const acceptedMessages = [
  {
    message: "Yes please!",
  },
  {
    message: "We love the script!",
  },
];

export const resetData = (): void => {
  studios = [
    {
      id: 0,
      studioName: "20th Century Fox",
      image: "",
      offerRequested: false,
      rejected: false,
      offer: 0,
      message: "",
    },
    {
      id: 1,
      studioName: "Warner Bros.",
      image: "",
      offerRequested: false,
      rejected: false,
      offer: 0,
      message: "",
    },
    {
      id: 2,
      studioName: "Universal",
      image: "",
      offerRequested: false,
      rejected: false,
      offer: 0,
      message: "",
    },
    {
      id: 3,
      studioName: "Paramount",
      image: "",
      offerRequested: false,
      rejected: false,
      offer: 0,
      message: "",
    },
    {
      id: 4,
      studioName: "Columbia",
      image: "",
      offerRequested: false,
      rejected: false,
      offer: 0,
      message: "",
    },
    {
      id: 5,
      studioName: "TriStar",
      image: "",
      offerRequested: false,
      rejected: false,
      offer: 0,
      message: "",
    },
    {
      id: 6,
      studioName: "Miramax",
      image: "",
      offerRequested: false,
      rejected: false,
      offer: 0,
      message: "",
    },
  ];
};
