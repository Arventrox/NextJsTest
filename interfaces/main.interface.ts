import { ImageInterface, ContentItemInterface } from "@/interfaces";

export interface MainInterface {
  image: ImageInterface;
  title: string;
  description: string;
  content: ContentItemInterface[];
}
