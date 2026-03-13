// import { defineConfig } from "vite";
// import viteReact from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

// import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
// import { resolve } from "node:path";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     TanStackRouterVite({ autoCodeSplitting: true }),
//     viteReact(),
//     tailwindcss(),
//   ],
//   // test: {
//   //   globals: true,
//   //   environment: "jsdom",
//   // },
//   resolve: {
//     alias: {
//       "@": resolve(__dirname, "./src"),
//     },
//   },
// });





import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      // 👈 SIRF YEH BLOCK ADD KARO
      '/api/snow-village': {
        target: 'https://email-sender-174740019883.asia-south2.run.app',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/snow-village/, '/snow-village/message')
      }
    }
  }
});