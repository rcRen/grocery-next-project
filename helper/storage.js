export default {
  get: (key) => {
    let data = null;
    if (global.window != undefined && window.localStorage != undefined) {
      data = localStorage.getItem(key);
    }

    return data ? JSON.parse(data) : null;
  },
  set: (key, value) => {
    const data = typeof value === 'object' ? JSON.stringify(value) : value;

    if (global.window != undefined && window.localStorage != undefined) {
      localStorage.setItem(key, data);
    }
  },

  clear: (key) => {
    localStorage.removeItem(key);
  },
};
