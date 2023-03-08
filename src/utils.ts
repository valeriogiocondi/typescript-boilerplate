const Utils = {  
  'delay': (seconds: number): Promise<void> => new Promise(resolve => setTimeout(resolve, seconds * 1000)),
};

module.exports = Utils;
