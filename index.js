const eases = require('eases');

for (const key in eases) {
  exports[key] = (...args) => main(eases[key], ...args);
}

function main(easingFn, opts) {
  opts = opts || {};
  opts.keyframes = opts.keyframes || 100;
  opts.precision = opts.precision || 2;

  const easedValues = [];
  let lastEasedVal = 0;

  for (let i = 0; i <= opts.keyframes; i++) {
    const unEasedVal = parseFloat((i / opts.keyframes).toPrecision(opts.precision));
    const easedVal = parseFloat(easingFn(unEasedVal).toPrecision(opts.precision));
    if (easedVal - lastEasedVal) {
      lastEasedVal = easedVal;
      easedValues.push(easedVal);
      // console.log(`easingFn(${unEasedVal}) = ${easedVal}`);
    }
  }

  return keyframeFn => easedValues.map(keyframeFn);
}
