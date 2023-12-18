import { BASE_CONFIG } from "../../astro.config.mjs";

export function withBase(url: string): string {
  return BASE_CONFIG ? `${BASE_CONFIG}${url}` : url;
}
