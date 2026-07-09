import { defineConfig, loadEnv, mergeConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig(async (env) => {
  const { command, mode } = env;

  const plugins = [];
  const isDev = mode === "development";

  if (isDev) {
    const { devtools } = await import("@tanstack/devtools-vite");
    plugins.push(devtools({
      logging: false,
      eventBusConfig: { enabled: false },
      enhancedLogs: { enabled: false },
      consolePiping: { enabled: false },
      removeDevtoolsOnBuild: false,
      injectSource: { enabled: true },
    }));
  }

  plugins.push(tailwindcss());
  plugins.push(tsConfigPaths({ projects: ["./tsconfig.json"] }));
  plugins.push(tanstackStart({
    importProtection: {
      behavior: "error",
      client: { files: ["**/server/**"], specifiers: ["server-only"] },
    },
    server: { entry: "server" },
  }));
  plugins.push(viteReact());

  if (command === "build") {
    plugins.push(nitro({ preset: "vercel" }));
  }

  const loadedEnv = loadEnv(mode, process.cwd(), "VITE_");
  const envDefine = {};
  for (const [key, value] of Object.entries(loadedEnv)) {
    envDefine[`import.meta.env.${key}`] = JSON.stringify(value);
  }

  const config = {
    define: envDefine,
    css: { transformer: "lightningcss" },
    resolve: {
      alias: { "@": `${process.cwd()}/src` },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-dom/client",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
      ignoreOutdatedRequests: true,
    },
    plugins,
  };

  return mergeConfig(config, { server: { host: "::", port: 8080 } });
});
