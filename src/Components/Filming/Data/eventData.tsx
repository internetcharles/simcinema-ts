import { MovieOption } from "../../Create/Interfaces/CreateInterface";
import { FilmingEvent, ReleaseEvent } from "../Interfaces/FilmingInterface";

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max) + 1;
};

const getRandomArbitrary = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

const generatePositiveFilmingEvent = (cast: MovieOption[]): FilmingEvent => {
  const leadActor = cast.find((actor) => actor.type === "leadActor")?.name;
  const leadActress = cast.find((actor) => actor.type === "leadActress")?.name;
  const director = cast.find((actor) => actor.type === "director")?.name;
  const progressNumber = getRandomArbitrary(30, 40);
  const randomInt = getRandomArbitrary(0, 10);
  console.log(randomInt);
  if (randomInt === 0) {
    return {
      description: `${director} brings donuts for the crew. Progress is increased by ${progressNumber}.`,
      hypeDifference: 2,
      progress: progressNumber,
    };
  } else if (randomInt === 1) {
    return {
      description: `${leadActor} is especially exuberant today. Progress is increased by ${progressNumber}.`,
      hypeDifference: 2,
      progress: progressNumber,
    };
  } else if (randomInt === 2) {
    return {
      description: `${leadActress} gets every scene done in one take. Progress is increased by ${progressNumber}.`,
      hypeDifference: 2,
      progress: progressNumber,
    };
  } else if (randomInt === 3) {
    return {
      description: `${director} is in a good mood. Progress increased by ${progressNumber}.`,
      hypeDifference: 2,
      progress: progressNumber,
    };
  } else if (randomInt === 4) {
    return {
      description: `${leadActress} nails her lines. Progress increased by ${progressNumber}.`,
      hypeDifference: 2,
      progress: progressNumber,
    };
  } else if (randomInt === 5) {
    return {
      description: `${leadActor} and ${leadActress} have amazing chemistry today. Progress is increased by ${progressNumber}.`,
      hypeDifference: 2,
      progress: progressNumber,
    };
  } else if (randomInt === 6) {
    return {
      description: `${leadActress} is serving up lines like no one's business. Progress is increased by ${progressNumber}.`,
      hypeDifference: 2,
      progress: progressNumber,
    };
  } else if (randomInt === 7) {
    return {
      description: `${leadActress} goes on Late Night with Stimmy Barlson and is extremely charming.`,
      hypeDifference: 10,
      progress: progressNumber,
    };
  } else if (randomInt === 8) {
    return {
      description: `${leadActor} hangs around with the paparazzi and talks about the film.`,
      hypeDifference: 8,
      progress: progressNumber,
    };
  } else {
    return {
      description: `${director} doesn't throw a fit today. Progress is increased by ${progressNumber}.`,
      hypeDifference: 2,
      progress: progressNumber,
    };
  }
};

const generateNegativeFilmingEvent = (cast: MovieOption[]): FilmingEvent => {
  const randomInt = getRandomArbitrary(0, 10);
  const leadActor = cast.find((actor) => actor.type === "leadActor")?.name;
  const leadActress = cast.find((actor) => actor.type === "leadActress")?.name;
  const director = cast.find((actor) => actor.type === "director")?.name;
  const progressNumber = getRandomArbitrary(5, 10);

  if (randomInt === 0) {
    return {
      description: `${leadActor} is sick. Progress is only increased by ${progressNumber}.`,
      hypeDifference: 0,
      progress: progressNumber,
    };
  } else if (randomInt === 1) {
    return {
      description: `${director} can't stop weeping. Progress is only increased by ${progressNumber}.`,
      hypeDifference: 0,
      progress: progressNumber,
    };
  } else if (randomInt === 2) {
    return {
      description: `${leadActress} destroys the catering table in a fit of rage. Progress is only increased by ${progressNumber}.`,
      hypeDifference: 0,
      progress: progressNumber,
    };
  } else if (randomInt === 3) {
    return {
      description: `${director} screams at the lighting guy. Progress is only increased by ${progressNumber}.`,
      hypeDifference: 0,
      progress: progressNumber,
    };
  } else if (randomInt === 4) {
    return {
      description: `${leadActress} shows up drunk. Progress is only increased by ${progressNumber}.`,
      hypeDifference: 0,
      progress: progressNumber,
    };
  } else if (randomInt === 5) {
    return {
      description: `${leadActor} has an existential crisis upon being asked if the chicken or the egg came first. Progress is only increased by ${progressNumber}.`,
      hypeDifference: 0,
      progress: progressNumber,
    };
  } else if (randomInt === 6) {
    return {
      description: `${director} is a lil hungry and becomes grumpy. Progress is only increased by ${progressNumber}.`,
      hypeDifference: 0,
      progress: progressNumber,
    };
  } else if (randomInt === 7) {
    return {
      description: `${leadActress} won't stop delivering her lines in a phony British accent. Progress is only increased by ${progressNumber}.`,
      hypeDifference: 0,
      progress: progressNumber,
    };
  } else if (randomInt === 8) {
    return {
      description: `${leadActor} gets a nasty call from his ex-wife. Progress is only increased by ${progressNumber}.`,
      hypeDifference: 0,
      progress: progressNumber,
    };
  } else if (randomInt === 9) {
    return {
      description: `${leadActress} is sad about the passing of her pet snake. Progress is only increased by ${progressNumber}.`,
      hypeDifference: 0,
      progress: progressNumber,
    };
  } else {
    return {
      description: `${director} is passed over during award season and has a mental breakdown. Progress is only increased by ${progressNumber}.`,
      hypeDifference: 0,
      progress: progressNumber,
    };
  }
};

const defaultFilmingEvent = (isCompleted: boolean): FilmingEvent => {
  const progressNumber = getRandomArbitrary(15, 25);
  if (!isCompleted) {
    return {
      description: `A week passes. Progress is increased by ${progressNumber}.`,
      hypeDifference: 0,
      progress: progressNumber,
    };
  } else {
    return {
      description: `A week passes.`,
      hypeDifference: 0,
      progress: progressNumber,
    };
  }
};

export const generateFilmingEvent = (
  cast: MovieOption[],
  movieCompleted: boolean,
): FilmingEvent => {
  const randomInt = getRandomArbitrary(0, 100);
  console.log("randomint", randomInt);
  if (randomInt >= 0 && randomInt <= 20 && !movieCompleted) {
    return generateNegativeFilmingEvent(cast);
  }
  if (randomInt > 20 && randomInt <= 40 && !movieCompleted) {
    return generatePositiveFilmingEvent(cast);
  }
  return defaultFilmingEvent(movieCompleted);
};

const positiveReleaseEvents: ReleaseEvent[] = [
  {
    description:
      "A line from your movie gets meme-ifed and goes viral. Hype boosted.",
    hypeDifference: 10,
  },
  {
    description:
      "A song from your film's soundtrack hits number one on the charts. Hype boosted.",
    hypeDifference: 8,
  },
];

const negativeReleaseEvents: ReleaseEvent[] = [
  {
    description:
      "An influencer on the Chicki-Chicki video app says your film is problematic. Hype subtracted.",
    hypeDifference: -2,
  },
  {
    description:
      "Someone keeps stink-bombing showings of your movie. Hype subtracted.",
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
  if (randomInt >= 0 && randomInt <= 10) {
    return negativeReleaseEvents[
      getRandomArbitrary(0, negativeReleaseEvents.length)
    ];
  }
  if (randomInt > 10 && randomInt <= 20) {
    return positiveReleaseEvents[
      getRandomArbitrary(0, positiveReleaseEvents.length)
    ];
  }
  return defaultReleaseEvent();
};
