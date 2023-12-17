import { defineConfig } from "astro/config";

import react from "@astrojs/react";

const SITE_URL = "https://axhatem.github.io/lpxtest";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: SITE_URL
});
