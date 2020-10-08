// 更改系统DNS设置请参考 https://blog.csdn.net/snowrain1108/article/details/51734553
const execa = require("execa");
const toast = require("@/utils/toast");

module.exports = async () => {
  try {
    toast.start("正在配置DNS服务器");
    await execa("networksetup", ["-setdnsservers", "Wi-Fi", "127.0.0.1"]);
    toast.succeed("DNS服务器配置完成");
    toast.start("正在刷新DNS缓存");
    await execa("dscacheutil", ["-flushcache"]);
    toast.succeed("DNS缓存已清空");
  } catch (error) {
    throw error;
  };
};