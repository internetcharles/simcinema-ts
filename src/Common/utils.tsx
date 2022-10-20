import { Movie } from "../Components/Create/Interfaces/CreateInterface";

/* eslint-disable @typescript-eslint/restrict-plus-operands */
export const generateInitialHype = (quality: number): number => {
  return Math.round(quality / 10);
};

export const generateNextHypeNumber = (min: number, max: number): number => {
  const arr: number[] = [];
  const length: number = 7;

  if (max > min) {
    arr[0] = min;
    arr[length - 1] = 0;

    for (let i = 1; i < length - 1; i++) {
      if (i <= Math.floor(length / 2)) {
        arr[i] = arr[i - 1] + (max - min) / Math.floor(length / 2);
      } else if (i > Math.floor(length / 2)) {
        arr[i] = arr[i - 1] - (max - 0) / Math.floor(length / 2);
      }
    }
    return Math.floor(arr[1] - 1);
  } else if (max > 0) {
    arr[0] = min;
    arr[Math.floor(length / 2)] = max;
    for (let i = 1; i < Math.floor(length / 2); i++) {
      arr[i] = arr[i - 1] - (min - max) / Math.floor(length / 2);
    }
    return Math.floor(arr[1] - 1);
  } else {
    return 0;
  }
};

export const generateInitialTheaters = (
  hype: number,
  quality: number,
): number => {
  return hype * 23 + quality * 10;
};

export const convertToMillions = (num: number): number => {
  if (num >= 100000000) {
    const first3Str = String(num).slice(0, 4);
    return Number(first3Str) / 10;
  } else if (num >= 10000000) {
    const first2Str = String(num).slice(0, 3);
    return Number(first2Str) / 10;
  } else {
    const first2Str = String(num).slice(0, 2);
    return Number(first2Str) / 10;
  }
};

export const convertBudgetToFullNumber = (num: number): number => {
  return num * 1000000;
};

export const gradeMovie = (earnings: number, budget: number): string => {
  if (earnings > budget * 2) {
    return "Massive Success";
  } else if (earnings > budget) {
    return "Success";
  } else {
    return "Failure";
  }
};

export const calculateStudioNet = (history: Movie[]): number => {
  let totalEarnings: number = 0;
  let totalBudgets: number = 0;

  if (history.length > 0) {
    history.forEach((movie) => (totalEarnings += movie.earnings));
    history.forEach(
      (movie) => (totalBudgets += convertBudgetToFullNumber(movie.budget)),
    );
  }

  return totalEarnings - totalBudgets;
};

export const convertGenreName = (genre: string): string => {
  switch (genre) {
    case "actionAdventure":
      return "Action-Adventure";
    case "comedy":
      return "Comedy";
    case "drama":
      return "Drama";
    case "romance":
      return "Romance";
    case "horror":
      return "Horror";
    case "sciFi":
      return "Sci-fi";
    case "animated":
      return "Animated";
    default:
      return "Unknown";
  }
};

export const reputationCalc = (budget: number, earnings: number): number => {
  const adjustedBudget = convertBudgetToFullNumber(budget);
  if (earnings / 2 > adjustedBudget) {
    return 3;
  }
  if (earnings > adjustedBudget) {
    return 2;
  }
  if (adjustedBudget > earnings) {
    return -2;
  }
  if (adjustedBudget / 2 > earnings) {
    return -3;
  }
  return 0;
};

export const reputationString = (
  reputation: number,
  history: Movie[],
): string => {
  console.log(reputation);
  if (history.length < 5) {
    return "New kid on the block";
  } else if (reputation < 0) {
    return "Garbage fire";
  } else if (reputation > 10) {
    return "Stunning studio";
  } else {
    return "Pretty good";
  }
};

export const genreRepeatCheck = (history: Movie[], genre: string): boolean => {
  const lastThreeMovies = history.slice(history.length - 3, history.length);
  console.log("HI", lastThreeMovies);
  console.log(
    "CHECK",
    lastThreeMovies.some((element) => genre === element.genre),
  );
  if (lastThreeMovies.some((element) => genre === element.genre)) return true;
  return false;
};
