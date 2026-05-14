import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
  define: {
    __OPENAI_KEY__: JSON.stringify(env.VITE_OPENAI_API_KEY || ''),
  },
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({ server: { entry: "server" } }),
    ...(command === "build" && !process.env.VERCEL ? [cloudflare()] : []),
  ],
  resolve: {
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "framer-motion",
      "@tanstack/react-router",
      "@tanstack/react-start",
    ],
  },
  };
});
