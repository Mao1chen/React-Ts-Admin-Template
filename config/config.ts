import { defineConfig } from "@umijs/max";
import proxy from "./httpProxy";
import defaultSettings from "./initialSetting";
import routes from "./routes";

const { REACT_APP_ENV = "dev" } = process.env;

export default defineConfig({
  hash: true,
  devtool: false,
  targets: { ie: 11 },
  history: { type: "browser" },
  historyWithQuery: {},
  routes,
  inlineLimit: 10000,
  jsMinifier: "terser",
  theme: {
    "root-entry-name": "variable",
  },
  helmet: true, // 是否集成react-helmet-async
  proxy: proxy[REACT_APP_ENV as keyof typeof proxy],
  fastRefresh: true,
  //============== 以下都是max的插件配置 ===============
  model: {},
  initialState: {},
  layout: {
    locale: true,
    ...defaultSettings,
  },
  moment2dayjs: {
    preset: "antd",
    plugins: ["duration"],
  },
  locale: {
    default: "zh-CN",
    antd: true,
    baseNavigator: true,
  },
  antd: {},
  request: {},
  access: {},
  headScripts: [{ src: "/scripts/loading.js", async: true }],
});
