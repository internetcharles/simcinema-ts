/* eslint-disable @typescript-eslint/restrict-plus-operands */
export const generateArray = (
  min: number,
  max: number,
  length: number,
): number[] => {
  // const newHypeArray = [];
  // const ascendStep = Math.round((max - min) / Math.floor(length / 2));
  // const descendStep = Math.round(max / Math.floor(length / 2));
  // let step = min;

  // newHypeArray.push(min);

  // while (step < max) {
  //   step += ascendStep;
  //   if (step < max) {
  //     newHypeArray.push(step);
  //   }
  // }

  // while (step > 0) {
  //   step -= descendStep;
  //   if (step > 0) {
  //     newHypeArray.push(step);
  //   }
  // }

  // newHypeArray.push(0);
  // return newHypeArray;

  const arr = [];
  arr[0] = min;
  arr[length - 1] = 0;

  for (let i = 1; i < length - 1; i++) {
    if (i <= Math.floor(length / 2)) {
      // step up here
      arr[i] = arr[i - 1] + (max - min) / Math.floor(length / 2);
    } else if (i > Math.floor(length / 2)) {
      // step down here
      arr[i] = arr[i - 1] - (max - 0) / Math.floor(length / 2);
    }
  }

  return arr;
};
