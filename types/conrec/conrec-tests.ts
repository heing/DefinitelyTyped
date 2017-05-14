import conrec = require('conrec');

const data = [[0, 1, 0], [1, 2, 1], [0, 1, 0]];
const c = new conrec.Conrec;
c.contour(data, 0, 2, 0, 2, [1, 2, 3], [1, 2, 3], 3, [0, 1, 2]);
const points: conrec.Point[][] = c.contourList();
