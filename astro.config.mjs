import { defineConfig } from "astro/config";

import react from "@astrojs/react";

const SITE_CONFIG = "https://axhatem.github.io";
const IS_DEV = process.env.NODE_ENV === "development";
export const BASE_CONFIG = IS_DEV ? "" : "/lpxtest";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: SITE_CONFIG,
  base: BASE_CONFIG,
});
