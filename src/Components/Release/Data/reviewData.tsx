import { Reviews } from "../Interfaces/ReleaseInterfaces";

export const generateReviews = (quality: number): Reviews => {
  // Taking quality number and creating statement that determines
  // the amount of stars. 280 is max quality.
  const sodaCityTimesSkew = 0.066;
  const dailySpillSkew = 0.1;
  const nationalRetainerSkew = -0.15;
  const wizardWeeklySkew = 0;
  const newtonNewsSkew = -0.08;
  console.log(quality);

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

  return {
    sodaCityTimes: reviewScore(sodaCityTimesSkew),
    dailySpill: reviewScore(dailySpillSkew),
    nationalRetainer: reviewScore(nationalRetainerSkew),
    wizardWeekly: reviewScore(wizardWeeklySkew),
    newtonNews: reviewScore(newtonNewsSkew),
  };
};
