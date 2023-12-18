import { BASE_CONFIG } from "../../astro.config.mjs";

export function withBase(url: string): string {
  console.log("base config", BASE_CONFIG);
  return BASE_CONFIG ? `${BASE_CONFIG}${url}` : url;
}
