module.exports = {
  modify: (config, { target, dev }, webpack) => {
    // LXF - externals for microui
    // This doesnt work in that the server side piece cant find ReactRouterDom..
    // config.externals = {
    //   react: "React",
    //   "react-dom": "ReactDOM",
    //   "react-router-dom": "ReactRouterDOM"
    // };
    //

    return config;
  }
};
