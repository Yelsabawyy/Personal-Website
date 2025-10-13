import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// "pictureUrl": "https://files.catbox.moe/bc0ms5.png",
// "pictureUrl": "https://files.catbox.moe/gcxrlr.png",
// "pictureUrl": "https://files.catbox.moe/hqz9ch.png",
// "pictureUrl": "https://files.catbox.moe/zwfzkj.png",
// "pictureUrl": "https://files.catbox.moe/qxdw19.png",
// "pictureUrl": "https://files.catbox.moe/82ad5x.png",
