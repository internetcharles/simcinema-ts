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
    console.log(arr);
    return Math.floor(arr[1] - 1);
  } else if (max > 0) {
    arr[0] = min;
    arr[Math.floor(length / 2)] = max;
    for (let i = 1; i < Math.floor(length / 2); i++) {
      arr[i] = arr[i - 1] - (min - max) / Math.floor(length / 2);
    }
    console.log(arr);
    return Math.floor(arr[1] - 1);
  } else {
    // arr[0] = min;
    // arr[Math.floor(length / 2)] = 0;
    // for (let i = 1; i < Math.floor(length / 2); i++) {
    //   arr[i] = arr[i - 1] - (min - 0) / Math.floor(length / 2);
    // }
    // console.log(arr);
    return 0;
  }
};
