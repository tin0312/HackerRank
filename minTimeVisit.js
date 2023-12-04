/*

Given an array with points and each point is [xi,yi]

const points = [[xi,yi]]

Find min time to visit all points 


*/

const minTimeVisit = (points) => {
  //keep track of the toal time
  let totalTime = 0;
  //loop through the given points
  for (let i = 0; i < points.length - 1; i++) {
    if (i !== points.length - 1) {
      // calculate the difference beteen OX and OY of points
      const [x1, y1] = points[i];
      const [x2, y2] = points[i + 1];

      const deltaX = Math.abs(x2 - x1);
      const deltaY = Math.abs(y2 - y1);
      // Select the max value for the travel dista
      totalTime += Math.max(deltaX, deltaY);
    }
  }

  return totalTime;
};

console.log(
  minTimeVisit([
    [1, 1],
    [3, 4],
    [-1, 0],
  ])
);
