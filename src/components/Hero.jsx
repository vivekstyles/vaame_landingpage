import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import Typewriter from "typewriter-effect";

import { curve, heroBackground, robot } from "../assets";
import { heroIcons } from "../constants";
import Button from "./Button";
import CompanyLogos from "./CompanyLogos";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import Generating from "./Generating";
import Notification from "./Notification";
import Section from "./Section";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div ref={parallaxRef} className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of
            <br />
            <div className="bg-gradient-to-r from-[#17acff] to-[#ff68f0] bg-clip-text text-transparent">
              <Typewriter 
                options={{
                  strings: [
                    "Effortless Querying Across Any Data",
                    "No-Code Data Analysis for Everyone",
                    "Natural Language to Insightful Charts",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </h1>

          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Ask any question about your data in plain English and watch{" "}
            <span className="inline-block relative font-semibold">
              Vaame
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2 pointer-events-none select-none"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
            , instantly generate SQL and beautiful visualizations. It's like having a friendly data analyst on your team — no coding required. Focus on insights, not queries!
          </p>

          <Button href="https://waitlist.vaame.tech/" white>
            Get Started for Free
          </Button>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient bg-gradient-to-r from-[#17acff] to-[#ff68f0]">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={'https://framerusercontent.com/images/eBRVfeaykviRsrVkGqRRbne8Nao.png'}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%] pointer-events-none select-none"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  {/* <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul> */}
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="absolute right-1 bottom-16 w-[14rem] h-[6rem] scale-75 md:scale-100 md:right-4 md:w-[15rem] lg:-right-[5.5rem] lg:bottom-[11rem] lg:w-[18rem] flex"
                    title="SQL to visualizations"
                  />
                  <Notification
                    className="absolute left-1 top-20 w-[14rem] h-[6rem] scale-75 md:scale-100 md:left-4 md:w-[15rem] lg:-left-[5.5rem] lg:top-[11rem] lg:w-[18rem] flex"
                    title="Text to SQL"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>

          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            {/* <img
              src={heroBackground}
              className="w-full pointer-events-none select-none"
              width={1440}
              height={1800}
              alt="Hero"
            /> */}
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="relative z-10 mt-20" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
