// config.js
export const envConfig = {
  get: key => {
    return typeof window !== "undefined" ? window.env[key] : process.env[key];
  }
};
