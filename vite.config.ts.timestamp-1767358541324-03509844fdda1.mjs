// vite.config.ts
import { defineConfig } from "file:///E:/ros-global-connect/node_modules/vite/dist/node/index.js";
import react from "file:///E:/ros-global-connect/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import vitePrerender from "file:///E:/ros-global-connect/node_modules/vite-plugin-prerender/dist/index.mjs";
var __vite_injected_original_dirname = "E:\\ros-global-connect";
var routes = [
  "/",
  "/oil-gas",
  "/hvac",
  "/datacenter",
  "/rhamnolipids",
  "/contact"
];
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    vitePrerender({
      routes,
      renderer: "@prerenderer/renderer-puppeteer",
      rendererOptions: {
        renderAfterDocumentEvent: "render-event",
        timeout: 3e4
      },
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html.replace(
          "</head>",
          '<meta name="prerender-status-code" content="200"></head>'
        );
        return renderedRoute;
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxyb3MtZ2xvYmFsLWNvbm5lY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHJvcy1nbG9iYWwtY29ubmVjdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovcm9zLWdsb2JhbC1jb25uZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHZpdGVQcmVyZW5kZXIgZnJvbSBcInZpdGUtcGx1Z2luLXByZXJlbmRlclwiO1xyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG4gIFwiL1wiLFxyXG4gIFwiL29pbC1nYXNcIixcclxuICBcIi9odmFjXCIsXHJcbiAgXCIvZGF0YWNlbnRlclwiLFxyXG4gIFwiL3JoYW1ub2xpcGlkc1wiLFxyXG4gIFwiL2NvbnRhY3RcIixcclxuXTtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XHJcbiAgc2VydmVyOiB7XHJcbiAgICBob3N0OiBcIjo6XCIsXHJcbiAgICBwb3J0OiA4MDgwLFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIHZpdGVQcmVyZW5kZXIoe1xyXG4gICAgICByb3V0ZXM6IHJvdXRlcyxcclxuICAgICAgcmVuZGVyZXI6IFwiQHByZXJlbmRlcmVyL3JlbmRlcmVyLXB1cHBldGVlclwiLFxyXG4gICAgICByZW5kZXJlck9wdGlvbnM6IHtcclxuICAgICAgICByZW5kZXJBZnRlckRvY3VtZW50RXZlbnQ6IFwicmVuZGVyLWV2ZW50XCIsXHJcbiAgICAgICAgdGltZW91dDogMzAwMDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBvc3RQcm9jZXNzKHJlbmRlcmVkUm91dGUpIHtcclxuICAgICAgICAvLyBJbmplY3QgYSBtYXJrZXIgdG8gaW5kaWNhdGUgdGhpcyBpcyBhIHByZXJlbmRlcmVkIHBhZ2VcclxuICAgICAgICByZW5kZXJlZFJvdXRlLmh0bWwgPSByZW5kZXJlZFJvdXRlLmh0bWwucmVwbGFjZShcclxuICAgICAgICAgIFwiPC9oZWFkPlwiLFxyXG4gICAgICAgICAgJzxtZXRhIG5hbWU9XCJwcmVyZW5kZXItc3RhdHVzLWNvZGVcIiBjb250ZW50PVwiMjAwXCI+PC9oZWFkPidcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJlZFJvdXRlO1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFQLFNBQVMsb0JBQW9CO0FBQ2xSLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsT0FBTyxtQkFBbUI7QUFIMUIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTSxTQUFTO0FBQUEsRUFDYjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0Y7QUFHQSxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsTUFDWjtBQUFBLE1BQ0EsVUFBVTtBQUFBLE1BQ1YsaUJBQWlCO0FBQUEsUUFDZiwwQkFBMEI7QUFBQSxRQUMxQixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsWUFBWSxlQUFlO0FBRXpCLHNCQUFjLE9BQU8sY0FBYyxLQUFLO0FBQUEsVUFDdEM7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUNBLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
