import { ImageInterface, LinkInterface } from "@/interfaces";

export interface ContentItemInterface {
  id: number;
  heading: string;
  text: string;
  image: ImageInterface;
  wordsToBold: string;
  link?: LinkInterface;
}
