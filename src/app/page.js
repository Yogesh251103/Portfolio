"use client";
import { React, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";
import "./home.css";
import TimeLine from "./components/timeline";

const Page = () => {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  useGSAP(() => {
    const text = new SplitType("#intro", { types: "chars" });
    const about = new SplitType("#about", { types: "chars" });
    const experience = new SplitType("#experience", { types: "chars" });
    const works = new SplitType("#works", { types: "chars" });

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".html", {
      y: "-100%",
      opacity: 0,
      stagger: 0.2,
      duration: 0.3,
      scrollTrigger: { trigger: ".html", ease: "back", pinSpacing: false },
    });

    gsap.to(text.chars, { y: "0", stagger: 0.05, duration: 0.1 });

    gsap.from("#tag", { opacity: 0, duration: 2, delay: 1.5 });

    gsap.to(about.chars, {
      y: 0,
      stagger: 0.05,
      duration: 0.1,
      scrollTrigger: {
        trigger: "#about",
        start: "top 90%",
        end: "bottom 20%",
        ease: "back",
        pinSpacing: false,
      },
    });

    gsap.to(experience.chars, {
      y: 0,
      stagger: 0.05,
      duration: 0.1,
      scrollTrigger: {
        trigger: "#experience",
        start: "top 90%",
        end: "bottom 20%",
        ease: "back",
        pinSpacing: false,
      },
    });

    gsap.to(works.chars, {
      y: 0,
      stagger: 0.05,
      duration: 0.1,
      scrollTrigger: {
        trigger: "#works",
        start: "top 90%",
        end: "bottom 20%",
        ease: "back",
        pinSpacing: false,
      },
    });

    ScrollTrigger.create({
      trigger: ".technologies",
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      // markers:true
    });

    ScrollTrigger.create({
      trigger: "#about-section",
      start: "bottom bottom",
      end: "bottom top",
      pin: ".content",
      pinSpacing: false,
      markers: true,
    });
  });

  return (
    <>
      <main className="flex items-center min-h-[100vh] justify-around pb-20">
        <div className="pl-10 space-y-8 flex flex-col justify-start">
          <h1 className="text-8xl text-center text-black bold font-extrabold">
            Hello I'm{" "}
            <span id="intro" className="text-purple-700 name-div">
              Yogesh!
            </span>
          </h1>
          <div id="tag" className="flex space-x-3 self-center items-end">
            <h1 className="text-4xl font-poppins">I'm a self taught </h1>
            <div className="pronoun h-[35px] overflow-hidden">
              <span className="relative text-3xl font-bold scroll duration-[8s] ease-linear text-purple-700">
                Web-developer <br />
                Mobile App-developer <br />
                UI/UX Designer <br />
              </span>
            </div>
          </div>
        </div>
      </main>
      <section className="relative z-1 py-64 technologies">
        <h1 className="text-bold text-5xl text-center font-semibold">
          Technologies I'm familiar with
        </h1>
        <div className="flex justify-between px-10 pt-12 w-[80%] mx-auto">
          <img src="icons.png" alt="html" className="h-16 w-24 html" />
          <img src="react.svg" alt="react" className="h-16 w-24 html" />
          <img src="node.webp" alt="react" className="h-16 w-18 html" />
          <img src="sanity.jpg" alt="react" className="h-16 w-18 html" />
          <img src="mongo.svg" alt="react" className="h-16 w-36 html" />
        </div>
      </section>
      <section
        id="about-section"
        className="animated-text relative h-[400vh] bg-black rounded-[30px] z-50 pt-16 pl-16 "
      >
        <h1 className="name-div">
          <span
            id="about"
            className="text-5xl text-white font-poppins font-extrabold"
          >
            ABOUT ME.
          </span>
        </h1>
        <div className="w-[95%] flex justify-between pt-10">
          <div className="w-1/2 flex justify-center">
            <img src="myface.jpg" alt="myface" className="h-full rounded-md" />
          </div>
          <div className="w-1/2">
            <p
              id="about-content"
              className="text-white text-xl pt-7 w-[80%] leading-10 font-poppins"
            >
              "I'm passionate about crafting websites that leave a lasting
              impact and enhance a brand's impression among users. From
              inception to deployment, I'm deeply committed to every phase of
              the project, ensuring a remarkable user experience. Building
              websites is not just a job; it's a journey I love to embark on."
            </p>
          </div>
        </div>
        <div className="w-full pt-56">
          <h1 className="name-div animated-text">
            <span
              id="experience"
              className="text-5xl text-white font-poppins font-extrabold"
            >
              MY EXPERIENCE.
            </span>
          </h1>
          <TimeLine />
        </div>
        <div>
          <h1 className="name-div animated-text">
            <span
              id="works"
              className="text-5xl text-white font-poppins font-extrabold"
            >
              MY WORKS.
            </span>
          </h1>
        </div>
      </section>
      <section className="content relative bottom-[100vh]">
        <p
          id="about-content"
          className="text-black text-2xl pt-7 w-[80%] leading-10 font-poppins"
        >
          As a web developer, I specialize in creating dynamic and engaging web
          applications and websites. With a solid foundation in front-end
          technologies such as HTML, CSS, and JavaScript, I craft user-friendly
          interfaces that provide seamless navigation and optimal user
          experience. I am well-versed in modern front-end frameworks like
          React.js, Vue.js, and Angular, enabling me to build scalable and
          responsive web applications that meet the diverse needs of users.
          Additionally, I have expertise in back-end development using languages
          such as Node.js, Python, and Ruby, as well as frameworks like
          Express.js and Django. As a web developer, I specialize in creating
          dynamic and engaging web applications and websites. With a solid
          foundation in front-end technologies such as HTML, CSS, and
          JavaScript, I craft user-friendly interfaces that provide seamless
          navigation and optimal user experience. I am well-versed in modern
          front-end frameworks like React.js, Vue.js, and Angular, enabling me
          to build scalable and responsive web applications that meet the
          diverse needs of users. Additionally, I have expertise in back-end
          development using languages such as Node.js, Python, and Ruby, as well
          as frameworks like Express.js and Django.As a web developer, I
          specialize in creating dynamic and engaging web applications and
          websites. With a solid foundation in front-end technologies such as
          HTML, CSS, and JavaScript, I craft user-friendly interfaces that
          provide seamless navigation and optimal user experience. I am
          well-versed in modern front-end frameworks like React.js, Vue.js, and
          Angular, enabling me to build scalable and responsive web applications
          that meet the diverse needs of users. Additionally, I have expertise
          in back-end development using languages such as Node.js, Python, and
          Ruby, as well as frameworks like Express.js and Django.As a web
          developer, I specialize in creating dynamic and engaging web
          applications and websites. With a solid foundation in front-end
          technologies such as HTML, CSS, and JavaScript, I craft user-friendly
          interfaces that provide seamless navigation and optimal user
          experience. I am well-versed in modern front-end frameworks like
          React.js, Vue.js, and Angular, enabling me to build scalable and
          responsive web applications that meet the diverse needs of users.
          Additionally, I have expertise in back-end development using languages
          such as Node.js, Python, and Ruby, as well as frameworks like
          Express.js and Django. I am well-versed in modern front-end frameworks
          like React.js, Vue.js, and Angular, enabling me to build scalable and
          responsive web applications that meet the diverse needs of users.
          Additionally, I have expertise in back-end development using languages
          such as Node.js, Python, and Ruby, as well as frameworks like
          Express.js and Django.I am well-versed in modern front-end frameworks
          like React.js, Vue.js, and Angular, enabling me to build scalable and
          responsive web applications that meet the diverse needs of users.
          Additionally, I have expertise in back-end development using languages
          such as Node.js, Python, and Ruby, as well as frameworks like
          Express.js and Django. experience. I am well-versed in modern
          front-end frameworks like React.js, Vue.js, and Angular, enabling me
          to build scalable and responsive web applications that meet the
          diverse needs of users. Additionally, I have expertise in back-end
          development using languages such as Node.js, Python, and Ruby, as well
          as frameworks like Express.js and Django. I am well-versed in modern
          front-end frameworks like React.js, Vue.js, and Angular, enabling me
          to build scalable and responsive web applications that meet the
          diverse needs of users. Additionally, I have expertise in back-end
          development using languages such as Node.js, Python, and Ruby, as well
          as frameworks like Express.js and Django.I am well-versed in modern
          front-end frameworks like React.js, Vue.js, and Angular, enabling me
          to build scalable and responsive web applications that meet the
          diverse needs of users. Additionally, I have expertise in back-end
          development using languages such as Node.js, Python, and Ruby, as well
          as frameworks like Express.js and Django.
        </p>
      </section>
    </>
  );
};

export default Page;
