import { FilmingEvent, ReleaseEvent } from "../Interfaces/FilmingInterface";

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max) + 1;
};

const getRandomArbitrary = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

const positiveFilmingEvents: FilmingEvent[] = [
  {
    description: "Actor farts. Progress is increased by 10.",
    hypeDifference: 2,
    progress: 10,
  },
  {
    description: "Actor poops. Progress is increased by 20.",
    hypeDifference: 2,
    progress: 20,
  },
];

const negativeFilmingEvents: FilmingEvent[] = [
  {
    description: "Actor sharts. Progress is only increased by 5.",
    hypeDifference: -2,
    progress: 5,
  },
  {
    description: "Actor cums. Progress is only increased by 5.",
    hypeDifference: -2,
    progress: 5,
  },
];

const defaultFilmingEvent = (): FilmingEvent => {
  const progressNumber = getRandomArbitrary(5, 15);
  return {
    description: `A week passes. Progress is increased by ${progressNumber}.`,
    hypeDifference: 0,
    progress: progressNumber,
  };
};

export const generateFilmingEvent = (): FilmingEvent => {
  const randomInt = getRandomInt(100);
  console.log("randomint", randomInt);
  if (randomInt >= 0 && randomInt <= 33) {
    return negativeFilmingEvents[
      getRandomArbitrary(0, negativeFilmingEvents.length)
    ];
  }
  if (randomInt > 33 && randomInt <= 66) {
    return positiveFilmingEvents[
      getRandomArbitrary(0, positiveFilmingEvents.length)
    ];
  }
  return defaultFilmingEvent();
};

const positiveReleaseEvents: ReleaseEvent[] = [
  {
    description: "Actor farts.",
    hypeDifference: 6,
  },
  {
    description: "Actor poops.",
    hypeDifference: 6,
  },
];

const negativeReleaseEvents: ReleaseEvent[] = [
  {
    description: "Actor sharts.",
    hypeDifference: -2,
  },
  {
    description: "Actor cums.",
    hypeDifference: -2,
  },
];

const defaultReleaseEvent = (): ReleaseEvent => {
  return {
    description: `A week passes.`,
    hypeDifference: 0,
  };
};

export const generateReleaseEvent = (): ReleaseEvent => {
  const randomInt = getRandomInt(100);
  console.log("randomint", randomInt);
  if (randomInt >= 0 && randomInt <= 33) {
    return negativeReleaseEvents[
      getRandomArbitrary(0, negativeReleaseEvents.length)
    ];
  }
  if (randomInt > 33 && randomInt <= 66) {
    return positiveReleaseEvents[
      getRandomArbitrary(0, positiveReleaseEvents.length)
    ];
  }
  return defaultReleaseEvent();
};
