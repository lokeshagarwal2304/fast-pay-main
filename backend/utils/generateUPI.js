const crypto = require('crypto');

const generateUPI = () => {
  const randomId = crypto.randomBytes(4).toString('hex');
  return `${randomId}@fastpay`;
};

module.exports = generateUPI;
