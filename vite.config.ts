// On Vercel, build TanStack Start with the Vercel target so SSR runs
// as a serverless function (fixes 404 NOT_FOUND on the root URL).
// Locally / in Lovable sandbox, keep the Lovable Cloudflare config.
import { defineConfig as defineLovableConfig } from "@lovable.dev/vite-tanstack-config";
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

const isVercel = !!process.env.VERCEL;

export default isVercel
  ? defineConfig({
      plugins: [
        tsConfigPaths(),
        tailwindcss(),
        tanstackStart(),
        viteReact(),
      ],
    })
  : defineLovableConfig();
