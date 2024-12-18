import { defineConfig } from "umi";

const umiEnv = process.env.UMI_ENV || 'dev'; // 默认值为 'prod'

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
  ],
  npmClient: "pnpm",
  history: {
    type: "hash",
  },

  publicPath: umiEnv === "prod" ? "./" : "/",

  hash: true,
});
