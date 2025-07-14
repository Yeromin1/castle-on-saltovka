// vite.config.js
import { defineConfig } from "file:///C:/GOIT/Projects/castle-on-saltovka/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import fs from "fs";
import glob from "file:///C:/GOIT/Projects/castle-on-saltovka/node_modules/glob/glob.js";
import injectHTML from "file:///C:/GOIT/Projects/castle-on-saltovka/node_modules/vite-plugin-html-inject/dist/index.mjs";
import FullReload from "file:///C:/GOIT/Projects/castle-on-saltovka/node_modules/vite-plugin-full-reload/dist/index.js";
import { viteStaticCopy } from "file:///C:/GOIT/Projects/castle-on-saltovka/node_modules/vite-plugin-static-copy/dist/index.js";
var __vite_injected_original_dirname = "C:\\GOIT\\Projects\\castle-on-saltovka";
var getHtmlEntries = () => {
  const pagesDir = resolve(__vite_injected_original_dirname, "src/pages");
  const entries = {};
  const walk = (dir) => {
    fs.readdirSync(dir).forEach((file) => {
      const fullPath = resolve(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        walk(fullPath);
      } else if (file.endsWith(".html")) {
        const name = fullPath.replace(pagesDir + "/", "").replace(".html", "").replace(/\//g, "-");
        entries[name] = fullPath;
      }
    });
  };
  walk(pagesDir);
  return entries;
};
var vite_config_default = defineConfig(({ command }) => {
  const inputFiles = glob.sync("./src/**/*.html");
  return {
    define: {
      [command === "serve" ? "global" : "_global"]: {}
    },
    base: "/castle-on-saltovka/",
    root: "src",
    build: {
      emptyOutDir: true,
      sourcemap: true,
      outDir: "../dist",
      rollupOptions: {
        input: {
          main: resolve(__vite_injected_original_dirname, "src/index.html"),
          ...getHtmlEntries()
        },
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
          entryFileNames: "commonHelpers.js"
        }
      }
    },
    plugins: [
      injectHTML(),
      FullReload(["./src/**/*.html"]),
      viteStaticCopy({
        targets: [
          {
            src: "src/img/icons.svg",
            dest: "img"
          }
        ]
      })
    ]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxHT0lUXFxcXFByb2plY3RzXFxcXGNhc3RsZS1vbi1zYWx0b3ZrYVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcR09JVFxcXFxQcm9qZWN0c1xcXFxjYXN0bGUtb24tc2FsdG92a2FcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L0dPSVQvUHJvamVjdHMvY2FzdGxlLW9uLXNhbHRvdmthL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IGdsb2IgZnJvbSAnZ2xvYic7XHJcbmltcG9ydCBpbmplY3RIVE1MIGZyb20gJ3ZpdGUtcGx1Z2luLWh0bWwtaW5qZWN0JztcclxuaW1wb3J0IEZ1bGxSZWxvYWQgZnJvbSAndml0ZS1wbHVnaW4tZnVsbC1yZWxvYWQnO1xyXG5cclxuaW1wb3J0IHsgdml0ZVN0YXRpY0NvcHkgfSBmcm9tICd2aXRlLXBsdWdpbi1zdGF0aWMtY29weSc7XHJcblxyXG4vLyBcdTA0MTBcdTA0MzJcdTA0NDJcdTA0M0VcdTA0M0NcdTA0MzBcdTA0NDJcdTA0MzhcdTA0NDdcdTA0M0RcdTA0MzUgXHUwNDM3XHUwNDMxXHUwNDM4XHUwNDQwXHUwNDMwXHUwNDNEXHUwNDNEXHUwNDRGIFx1MDQzMlx1MDQ0MVx1MDQ1Nlx1MDQ0NSBIVE1MLVx1MDQ0NFx1MDQzMFx1MDQzOVx1MDQzQlx1MDQ1Nlx1MDQzMiBcdTA0NDMgc3JjL3BhZ2VzL1xyXG5jb25zdCBnZXRIdG1sRW50cmllcyA9ICgpID0+IHtcclxuICBjb25zdCBwYWdlc0RpciA9IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3BhZ2VzJyk7XHJcbiAgY29uc3QgZW50cmllcyA9IHt9O1xyXG5cclxuICBjb25zdCB3YWxrID0gZGlyID0+IHtcclxuICAgIGZzLnJlYWRkaXJTeW5jKGRpcikuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgY29uc3QgZnVsbFBhdGggPSByZXNvbHZlKGRpciwgZmlsZSk7XHJcbiAgICAgIGlmIChmcy5zdGF0U3luYyhmdWxsUGF0aCkuaXNEaXJlY3RvcnkoKSkge1xyXG4gICAgICAgIHdhbGsoZnVsbFBhdGgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGZpbGUuZW5kc1dpdGgoJy5odG1sJykpIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gZnVsbFBhdGhcclxuICAgICAgICAgIC5yZXBsYWNlKHBhZ2VzRGlyICsgJy8nLCAnJylcclxuICAgICAgICAgIC5yZXBsYWNlKCcuaHRtbCcsICcnKVxyXG4gICAgICAgICAgLnJlcGxhY2UoL1xcLy9nLCAnLScpO1xyXG4gICAgICAgIGVudHJpZXNbbmFtZV0gPSBmdWxsUGF0aDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgd2FsayhwYWdlc0Rpcik7XHJcbiAgcmV0dXJuIGVudHJpZXM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgY29tbWFuZCB9KSA9PiB7XHJcbiAgY29uc3QgaW5wdXRGaWxlcyA9IGdsb2Iuc3luYygnLi9zcmMvKiovKi5odG1sJyk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBkZWZpbmU6IHtcclxuICAgICAgW2NvbW1hbmQgPT09ICdzZXJ2ZScgPyAnZ2xvYmFsJyA6ICdfZ2xvYmFsJ106IHt9LFxyXG4gICAgfSxcclxuXHJcbiAgICBiYXNlOiAnL2Nhc3RsZS1vbi1zYWx0b3ZrYS8nLFxyXG4gICAgcm9vdDogJ3NyYycsXHJcbiAgICBidWlsZDoge1xyXG4gICAgICBlbXB0eU91dERpcjogdHJ1ZSxcclxuICAgICAgc291cmNlbWFwOiB0cnVlLFxyXG4gICAgICBvdXREaXI6ICcuLi9kaXN0JyxcclxuICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICBtYWluOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC5odG1sJyksXHJcbiAgICAgICAgICAuLi5nZXRIdG1sRW50cmllcygpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcclxuICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAndmVuZG9yJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnY29tbW9uSGVscGVycy5qcycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIGluamVjdEhUTUwoKSxcclxuICAgICAgRnVsbFJlbG9hZChbJy4vc3JjLyoqLyouaHRtbCddKSxcclxuICAgICAgdml0ZVN0YXRpY0NvcHkoe1xyXG4gICAgICAgIHRhcmdldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiAnc3JjL2ltZy9pY29ucy5zdmcnLFxyXG4gICAgICAgICAgICBkZXN0OiAnaW1nJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSksXHJcbiAgICBdLFxyXG4gIH07XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1TLFNBQVMsb0JBQW9CO0FBQ2hVLFNBQVMsZUFBZTtBQUN4QixPQUFPLFFBQVE7QUFDZixPQUFPLFVBQVU7QUFDakIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFFdkIsU0FBUyxzQkFBc0I7QUFQL0IsSUFBTSxtQ0FBbUM7QUFVekMsSUFBTSxpQkFBaUIsTUFBTTtBQUMzQixRQUFNLFdBQVcsUUFBUSxrQ0FBVyxXQUFXO0FBQy9DLFFBQU0sVUFBVSxDQUFDO0FBRWpCLFFBQU0sT0FBTyxTQUFPO0FBQ2xCLE9BQUcsWUFBWSxHQUFHLEVBQUUsUUFBUSxVQUFRO0FBQ2xDLFlBQU0sV0FBVyxRQUFRLEtBQUssSUFBSTtBQUNsQyxVQUFJLEdBQUcsU0FBUyxRQUFRLEVBQUUsWUFBWSxHQUFHO0FBQ3ZDLGFBQUssUUFBUTtBQUFBLE1BQ2YsV0FBVyxLQUFLLFNBQVMsT0FBTyxHQUFHO0FBQ2pDLGNBQU0sT0FBTyxTQUNWLFFBQVEsV0FBVyxLQUFLLEVBQUUsRUFDMUIsUUFBUSxTQUFTLEVBQUUsRUFDbkIsUUFBUSxPQUFPLEdBQUc7QUFDckIsZ0JBQVEsSUFBSSxJQUFJO0FBQUEsTUFDbEI7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBRUEsT0FBSyxRQUFRO0FBQ2IsU0FBTztBQUNUO0FBRUEsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxRQUFRLE1BQU07QUFDM0MsUUFBTSxhQUFhLEtBQUssS0FBSyxpQkFBaUI7QUFFOUMsU0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ04sQ0FBQyxZQUFZLFVBQVUsV0FBVyxTQUFTLEdBQUcsQ0FBQztBQUFBLElBQ2pEO0FBQUEsSUFFQSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxhQUFhO0FBQUEsTUFDYixXQUFXO0FBQUEsTUFDWCxRQUFRO0FBQUEsTUFDUixlQUFlO0FBQUEsUUFDYixPQUFPO0FBQUEsVUFDTCxNQUFNLFFBQVEsa0NBQVcsZ0JBQWdCO0FBQUEsVUFDekMsR0FBRyxlQUFlO0FBQUEsUUFDcEI7QUFBQSxRQUNBLFFBQVE7QUFBQSxVQUNOLGFBQWEsSUFBSTtBQUNmLGdCQUFJLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDL0IscUJBQU87QUFBQSxZQUNUO0FBQUEsVUFDRjtBQUFBLFVBQ0EsZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsV0FBVztBQUFBLE1BQ1gsV0FBVyxDQUFDLGlCQUFpQixDQUFDO0FBQUEsTUFDOUIsZUFBZTtBQUFBLFFBQ2IsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE1BQU07QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
