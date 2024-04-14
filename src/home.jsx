import { React, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import "./css/home.css";
import TimeLine from "./components/timeline.jsx";
import { Works } from "./components/works.jsx";

const Home = () => {
  useGSAP(() => {
    const text = new SplitType("#intro", { types: "chars" });
    const about = new SplitType("#about", { types: "chars" });
    const experience = new SplitType("#experience", { types: "chars" });
    const works = new SplitType("#works", { types: "chars" });
    const cards = gsap.utils.toArray(".cards");
    const timeline = gsap.timeline();

    const spacer = 20;

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
        trigger: ".work-div",
        start: "top 90%",
        end: "bottom 20%",
        ease: "back",
        // markers: true,
      },
    });

    ScrollTrigger.create({
      trigger: ".technologies",
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
      // markers:true
    });

    cards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: `top-=${index*spacer} top+=20`,
          endTrigger: "#testimony-section",
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          // markers: true,
          invalidateOnRefresh: true,
        },
      });
    });

    ScrollTrigger.create({
      trigger: "#convince",
      start: "top 10",
      end: (self) => self.previous().end,
      pin: true,
      id: "convince-pin",
      pinSpacing: false,
      // markers: true,
    });
  });

  return (
    <>
      <main className="flex items-center min-h-[100vh] md:justify-around md:pb-20">
        <div className="pl-10 space-y-14 flex flex-col justify-start text-[#393632]">
          <h1 className="text-7xl md:text-8xl md:pr-10 bold font-extrabold font-outfit-extrabold">
            Hello I'm{" "}
            <br className="md:hidden"/>
            <span id="intro" className="text-[#393632] name-div">
              Yogesh
            </span>
          </h1>
          <div id="tag" className="flex flex-col font-outfit-semibold md:flex-row md:space-x-3 md:self-center md:items-end">
            <h1 className="text-[2.7rem] md:text-4xl">I'm a self taught</h1>
            {/* <br className="md:hidden"/> */}
            <div className="pronoun h-[35px] overflow-hidden my-auto">
              <span className="relative text-3xl md:text-3xl font-bold scroll duration-[8s] ease-linear">
                Web-developer <br />
                Mobile App-developer <br />
                UI/UX Designer <br />
              </span>
            </div>
          </div>
        </div>
      </main>
      <section className="py-52 md:py-64 technologies bg-[#C7C8CC]">
        <h1 className="w-full pb-5 max-w-[412px] font-outfit-semibold text-bold text-center text-[2.75rem] md:max-w-full font-semibold text-black md:text-5xl">
          Technologies I'm familiar with
        </h1>
        <div className="flex flex-wrap px-1 pt-12 max-w-[412px] justify-between md:mx-auto md:max-w-[80%]">
          <img src="icons.png" alt="html" className="h-16 w-24 html" />
          <img src="react.svg" alt="react" className="h-16 w-24 html" />
          <img src="node.webp" alt="react" className="h-16 w-18 html" />
          <img src="sanity.jpg" alt="react" className="h-16 w-18 html" />
          <img src="mongo.svg" alt="react" className="h-16 w-36 html hidden md:block" />
        </div>
      </section>
      <section
        id="about-section"
        className="animated-text relative max-w-[412px] h-[520vh] pl-10 bg-black rounded-[30px] z-50 pt-16 md:pl-16 md:max-w-full"
      >
        <h1 className="name-div">
          <span
            id="about"
            className="text-4xl text-white font-outfit-extrabold font-extrabold md:text-5xl"
          >
            ABOUT ME.
          </span>
        </h1>
        <div className="w-[95%] flex flex-col justify-between pt-10 md:flex-row">
          <div className="flex justify-center md:w-1/2">
            <img src="myface.jpg" alt="myface" className="h-full rounded-md" />
          </div>
          <div className="md:w-1/2">
            <p
              id="about-content"
              className="text-white text-[1.4rem] pt-7 w-[80%] leading-8 md:leading-10 font-outfit-light"
            >
              "I'm passionate about crafting websites that leave a lasting
              impact and enhance a brand's impression among users. From
              inception to deployment, I'm deeply committed to every phase of
              the project, ensuring a remarkable user experience. Building
              websites is not just a job, it's a journey I love to embark on."
            </p>
          </div>
        </div>
        <div className="w-full pt-56">
          <h1 className="name-div animated-text">
            <span
              id="experience"
              className="text-4xl text-white font-outfit-extrabold font-extrabold md:text-5xl"
            >
              MY EXPERIENCE.
            </span>
          </h1>
          <TimeLine />
        </div>
        <div className="w-full pt-20 work-div">
          <h1 className="name-div animated-text">
            <span
              id="works"
              className="text-4xl text-white font-outfit-extrabold font-extrabold md:text-5xl"
            >
              MY WORKS.
            </span>
          </h1>
          <Works />
        </div>
      </section>
      <section
        id="testimony-section"
        className="content bg-[#C7C8CC] relative flex flex-col h-[300vh] md:flex-row"
      >
        <div className="max-w-[412px] md:max-w-1/3">
          <h1
            // id="convince"
            className="font-extrabold text-6xl font-outfit-extrabold pb-20 pl-4 text-black convince pt-36 md:hidden"
          >
            Take it from them.
          </h1>
          <h1
            id="convince"
            className="font-extrabold text-6xl hidden font-outfit-extrabold pb-20 pl-10 text-black convince pt-36 md:block"
          >
            Take it from them.
          </h1>
        </div>
        <div className="flex flex-col w-[400px] pl-2 md:w-2/3">
          <div
            id="testimony-1"
            className="cards bg-[black] rounded-lg max-w-[405px] h-auto mb-10 mx-auto p-10  md:max-w-[70%]"
          >
            <p className="text-4xl font-semibold pb-10">
              "Yogesh is a exceptional problem solver and a great solution
              provider. He is super punctual and great at understanding client's
              requirements."
            </p>
            <div className="self-end flex justify-start gap-6">
              <img
                src="person.webp"
                alt="thirumavalavan"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <p className="font-bold font-poppins text-lg">THIRUMAVALAVAN</p>
                <p className="font-poppins">@INNOVIK TECHNOLOGIES</p>
              </div>
            </div>
          </div>
          <div
            id="testimony-2"
            className="cards bg-[red] rounded-lg max-w-[405px] h-auto mb-10 mx-auto p-10  md:max-w-[70%]"
          >
            <p className="text-4xl font-semibold pb-10">
              "Yogesh is a exceptional problem solver and a great solution
              provider. He is super punctual and great at understanding client's
              requirements."
            </p>
            <div className="self-end flex justify-start gap-6">
              <img
                src="person.webp"
                alt="thirumavalavan"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <p className="font-bold font-poppins text-lg">THIRUMAVALAVAN</p>
                <p className="font-poppins">@INNOVIK TECHNOLOGIES</p>
              </div>
            </div>
          </div>
          <div
            id="testimony-3"
            className="cards bg-[yellow] rounded-lg max-w-[405px] h-auto mb-10 mx-auto p-10  md:max-w-[70%]"
          >
            <p className="text-4xl font-semibold pb-10">
              "Yogesh is a exceptional problem solver and a great solution
              provider. He is super punctual and great at understanding client's
              requirements."
            </p>
            <div className="self-end flex justify-start gap-6">
              <img
                src="person.webp"
                alt="thirumavalavan"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <p className="font-bold font-poppins text-lg">THIRUMAVALAVAN</p>
                <p className="font-poppins">@INNOVIK TECHNOLOGIES</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#C7C8CC]">
        <div className="w-full flex">
          <form className="w-4/6  p-3 space-y-7 md:m-3">
            <h1 className="pb-5 stroke text-6xl font-extrabold font-poppins mb-2 ">
              LET'S BUILD TOGETHER
            </h1>
            <div className="flex space-x-3 w-[412px] flex-wrap md:flex-nowrap md:w-full">
              <div className="flex flex-col w-[330px] m-2 space-y-2 md:w-1/2">
                <label htmlFor="#name" className="text-black font-semibold font-outfit-semibold">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Yogesh M"
                  className="p-5 rounded-xl border-2 border-[#6c6c6c] bg-transparent placeholder:text-[#505555] text-black focus:outline-none focus:border-[#494949] font-outfit-semibold"
                />
              </div>
              <div className="flex flex-col w-[330px] m-2 space-y-2 md:w-1/2">
                <label htmlFor="#name" className="text-black font-semibold font-outfit-semibold">
                  Email
                </label>
                <input
                  id="name"
                  type="email"
                  placeholder="yogesh@company.com"
                  className="p-5 rounded-xl border-[2px] border-[#6c6c6c] bg-transparent placeholder:text-[#505555] text-black focus:outline-none focus:border-[#494949] font-outfit-semibold"
                />
              </div>
            </div>
            <div className="flex flex-col m-2 space-y-2">
              <label htmlFor="#phone" className="text-black font-semibold font-outfit-semibold">
                Phone Number
              </label>
              <input
                id="phone"
                type="number"
                placeholder="Eg. 87545 12892"
                className="w-[330px] p-5 rounded-xl border-2 border-[#6c6c6c] bg-transparent placeholder:text-[#505555] text-black focus:outline-none focus:border-[#494949] font-outfit-semibold md:w-full"
              />
            </div>
            <div className="flex flex-col m-2 space-y-2">
              <label htmlFor="query" className="text-black font-semibold font-outfit-semibold">
                Message
              </label>
              <textarea
                id="query"
                placeholder="Let's start the business!"
                rows={6}
                className="w-[330px] p-5 rounded-xl border-2 border-[#6c6c6c] bg-transparent placeholder:text-[#505555] text-black focus:outline-none focus:border-[#494949] font-outfit-semibold md:w-full"
              ></textarea>
            </div>
          </form>
          {/* <p className="w-2/6 text-2xl font-semibold font-poppins self-center">It all starts with a simple conversation. Initial it.</p> */}
        </div>
      </section>
      <footer className="h-auto bg-[#C7C8CC] px-6 flex flex-col border border-t-2 py-10 border-[#393632] md:px-10 md:h-[30vh] md:flex-row">
        <div className="flex flex-col w-full justify-between">
          <span className="text-4xl font-extrabold font-outfit-extrabold text-[#393632] md:text-5xl">
            Yogesh M
          </span>
          <span className="pt-3 text-lg font-outfit-light text-[#393632] md:text-xl">
            Web and Mobile app Developer
          </span>
          <div className="flex space-x-3 pt-5">
            <a href="https://www.linkedin.com/in/yogesh-m-16ab20216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <img src="linkedin.svg" alt="" className="h-10 w-10 md:h-12 md:w-12" />
            </a>
            <a href="https://github.com/Yogesh251103">
              <img src="github.svg" alt="" className="h-10 w-10 md:h-12 md:w-12" />
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-3 text-[#393632] w-1/3 font-poppins pt-10 md:pt-0">
          <span className="font-semibold font-outfit-semibold">
            Email :{" "}
            <a href="yogesh251003@gmail.com" className="underline">
              yogesh251003@gmail.com
            </a>
          </span>
          <span className="font-semibold font-outfit-semibold">
            Phone :{" "}
            <a href="+91 8754512892" className="underline">
              +91 87545 12892
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Home;
