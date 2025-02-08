module.exports = {
  apps: [{
    name: "cluster app",
    script: "cluster.js",
    instances: 0,
    exec_mode: "cluster",
  }],
};
