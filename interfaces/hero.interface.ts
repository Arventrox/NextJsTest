import { ImageInterface } from "@/interfaces";

export interface HeroInterface {
  image: { large: ImageInterface; small: ImageInterface };
  title: string;
  description: string;
  ctaText: string;
}
