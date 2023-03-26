import { Hero, Main } from "../sections";
import Head from "next/head";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const mainProps = {
  title: "Managed agency selection",
  description: "Strengthen your onboarding process",
  image: { src: "/img/video.png", alt: "", width: 1000, height: 1680 },
  content: [
    {
      id: 1,
      heading: "Brief",
      text: "Complete brief writing or simple guidance on what to include, we've got you covered.",
      image: { src: "/img/image-1.png", alt: "", width: 91, height: 91 },
      wordsToBold: "brief writing or simple guidance",
      link: { url: "https://goodbrief.io", target: "_blank" },
    },

    {
      id: 2,
      heading: "Search",
      text: "In-depth agency search covering; criteria matching, door knocking and due-diligence vetting.",
      image: { src: "/img/image-2.png", alt: "", width: 91, height: 91 },
      wordsToBold: "criteria matching",
    },

    {
      id: 3,
      heading: "Pitch",
      text: "Comprehensive pitch management, including comms, diary management and pitch hosting.",
      image: { src: "/img/image-3.png", alt: "", width: 91, height: 91 },
      wordsToBold: "pitch management",
    },
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <>
        <Hero {...heroProps} />
        <Main {...mainProps} />
        {/** Other sections */}
      </>
    </>
  );
}
