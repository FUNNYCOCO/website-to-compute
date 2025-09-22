import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  return {
    build: {
      outDir: "deploy/_site",
      rollupOptions: {
        input: {
          main: 'index.html',
          404: '404.html',
          AIcode1: 'AIcode1.html', // 例如：你的 about.html 文件
          shijian1: 'shijian1.html', // 例如：你的 contact.html 文件
        },
      }
    }
  }
});
