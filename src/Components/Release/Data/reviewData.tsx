import { Reviews } from "../Interfaces/ReleaseInterfaces";

export const generateReviews = (quality: number): Reviews => {
  const randomValue = Math.random();
  // Taking quality number and creating statement that determines
  // the amount of stars. 280 is max quality.
  const sodaCityTimesSkew = randomValue * 0.066;
  const dailySpillSkew = randomValue * 0.1;
  const nationalRetainerSkew = randomValue * -0.18;
  const wizardWeeklySkew = randomValue * 0;
  const newtonNewsSkew = randomValue * -0.12;

  const reviewScore = (reviewerSkew: number): number => {
    if (Math.floor((quality / 280 + reviewerSkew) * 10) > 10) {
      return 10;
    }
    if (Math.floor((quality / 280 + reviewerSkew) * 10) <= 1) {
      return 1;
    }
    return Math.floor((quality / 280 + reviewerSkew) * 10);
  };

  // Determine each rating by review score dropoff
  const sodaCityTimesReview: number = reviewScore(sodaCityTimesSkew);
  const dailySpillReview: number = reviewScore(dailySpillSkew);
  const nationalRetainerReview: number = reviewScore(nationalRetainerSkew);
  const wizardWeeklyReview: number = reviewScore(wizardWeeklySkew);
  const newtonNewsReview: number = reviewScore(newtonNewsSkew);

  const averageScore: number =
    ((Math.round(
      sodaCityTimesReview +
        dailySpillReview +
        nationalRetainerReview +
        wizardWeeklyReview +
        newtonNewsReview,
    ) /
      5) *
      10) /
    10;

  return {
    sodaCityTimes: sodaCityTimesReview,
    dailySpill: dailySpillReview,
    nationalRetainer: nationalRetainerReview,
    wizardWeekly: wizardWeeklyReview,
    newtonNews: newtonNewsReview,
    averageScore,
  };
};
