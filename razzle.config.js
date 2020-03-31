module.exports = {
  modify: (config, { target, dev }, webpack) => {
    if (target === "web") {
      config.externals = {
        react: "React",
        "react-dom": "ReactDOM",
        "react-router-dom": "ReactRouterDOM"
      };
    }

    return config;
  }
};
