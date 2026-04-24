import { SITE } from "@/constants";

export default function manifest() {
  return {
    name: SITE.name,
    short_name: SITE.short,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#00ffff",
    icons: [
      {
        src: "/favicon_2.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}