// On Vercel, bypass the Lovable Cloudflare preset and use a plain
// TanStack Start + Vite setup targeting Vercel.
// Locally / in Lovable sandbox, keep the Lovable config (which wires
// tanstackStart, react, tailwind, tsconfig paths, cloudflare, etc.).
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
