const generateOtp = () => getRandomInt(100000, 999999);
const generateId = () =>
  Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
module.exports = { generateOtp, generateId };
