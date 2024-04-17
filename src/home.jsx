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
    const mm = gsap.matchMedia();

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
        start: "top bottom-=100",
        end: "bottom 20%",
        ease: "back",
        markers: true,
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

    mm.add("(max-width: 400px)", () => {
      cards.forEach((card, index) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: `top-=${index*spacer} center-=180`,
            endTrigger: "#testimony-section",
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            // markers: true,
            invalidateOnRefresh: true,
          },
        });
      });
    })

    mm.add("(min-width: 420px)", () => {
      cards.forEach((card, index) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: `top-=${index*spacer} top+=50`,
            endTrigger: "#testimony-section",
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            markers: true,
            invalidateOnRefresh: true,
          },
        });
      });
    })

    // cards.forEach((card, index) => {
    //   gsap.to(card, {
    //     scrollTrigger: {
    //       trigger: card,
    //       start: `top-=${index*spacer} top+=20`,
    //       endTrigger: "#testimony-section",
    //       end: "bottom bottom",
    //       pin: true,
    //       pinSpacing: false,
    //       markers: true,
    //       invalidateOnRefresh: true,
    //     },
    //   });
    // });

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
        <div className="pl-10 space-y-14 flex flex-col justify-start text-[#FFFED2]">
          <h1 className="text-7xl md:text-8xl md:pr-10 bold font-extrabold font-outfit-extrabold">
            Hello I'm{" "}
            <br className="md:hidden"/>
            <span id="intro" className="text-[#FFFED2] name-div">
              Yogesh
            </span>
          </h1>
          <div id="tag" className="flex flex-col font-outfit-semibold text-[#fffed2ca] md:flex-row md:space-x-3 md:self-center md:items-end">
            <h1 className="text-lg sm:text-[1.5rem] md:text-4xl">I'm a self taught</h1>
            {/* <br className="md:hidden"/> */}
            <div className="pronoun h-[35px] overflow-hidden my-auto">
              <span className="relative text-3xl md:text-[2rem] font-bold scroll duration-[8s] ease-linear">
                Web-developer <br />
                Mobile App-developer <br />
                UI/UX Designer <br />
              </span>
            </div>
          </div>
        </div>
      </main>
      <section className="py-52 md:py-64 technologies bg-[#303030]">
        <h1 className="w-full pb-5 font-outfit-semibold text-bold text-center font-semibold max-w-[360px] break-words text-[#fffed2ca] text-[2rem] sm:max-w-[412px] sm:text-[2.75rem] md:max-w-full md:text-5xl">
          Technologies I'm familiar with
        </h1>
        <div className="flex flex-wrap px-1 pt-12 justify-between max-w-[360px] sm:max-w-[412px] md:mx-auto md:max-w-[80%]">
          <img src="icons.png" alt="html" className="h-12 w-12 sm:h-16 sm:w-24 html hidden md:block" />
          <img src="react.svg" alt="react" className="h-12 w-12 sm:h-16 sm:w-24 html" />
          <img src="node.webp" alt="react" className="h-12 w-12 sm:h-16 sm:w-18 html" />
          <img src="sanity.jpg" alt="react" className="h-12 w-12 sm:h-16 sm:w-18 html" />
          <img src="mongo.svg" alt="react" className="h-14 w-20 sm:h-16 sm:w-36 html" />
        </div>
      </section>
      <section
        id="about-section"
        className="animated-text relative max-w-[360px] h-[650vh] sm:h-[520vh] sm:max-w-[412px] pl-10 bg-[#848372] rounded-[30px] z-50 pt-16 md:h-[450vh] md:pl-16 md:max-w-full"
      >
        <h1 className="name-div">
          <span
            id="about"
            className="text-4xl text-[#242424] font-outfit-extrabold font-extrabold md:text-5xl"
          >
            ABOUT ME.
          </span>
        </h1>
        <div className="w-[95%] flex flex-col justify-between pt-10 md:flex-row">
          <div className="flex justify-center md:w-1/2">
            <img src="myface.jpg" alt="myface" className="h-full rounded-md border-2 border-[#24242476] border-r-[0.375rem]" />
          </div>
          <div className="md:w-1/2">
            <p
              id="about-content"
              className="text-[#242424] text-[1.4rem] pt-7 w-[80%] leading-8 md:leading-10 font-outfit-regular"
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
              className="text-4xl text-[#242424] font-outfit-extrabold font-extrabold md:text-5xl"
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
              className="text-4xl text-[#242424] font-outfit-extrabold font-extrabold md:text-5xl"
            >
              MY WORKS.
            </span>
          </h1>
          <Works />
        </div>
      </section>
      <section
        id="testimony-section"
        className="content bg-[#242424] relative flex flex-col h-[400vh] sm:h-[300vh] md:flex-row"
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
            className="font-extrabold text-6xl hidden font-outfit-extrabold pb-20 pl-10 text-[#FFFED2] convince pt-36 md:block"
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
      <section className="bg-[#242424]">
        <div className="w-full flex">
          <form className="w-4/6  p-3 space-y-7 md:m-3">
            <h1 className="pb-5 stroke text-6xl font-extrabold font-poppins mb-2 md:text-7xl">
              LET'S BUILD TOGETHER
            </h1>
            <div className="flex space-x-3 w-[412px] flex-wrap md:flex-nowrap md:w-full">
              <div className="flex flex-col w-[330px] m-2 space-y-2 md:w-1/2">
                <label htmlFor="#name" className="text-[#FFFED2] font-semibold font-outfit-semibold">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Yogesh M"
                  className="p-5 rounded-xl border-2 border-[#afae6bca] text-[#FFFED2] bg-transparent placeholder:text-[#fffebb93] focus:outline-none focus:border-[#FFFED2] font-outfit-semibold"
                />
              </div>
              <div className="flex flex-col w-[330px] m-2 space-y-2 md:w-1/2">
                <label htmlFor="#name" className="text-[#FFFED2] font-semibold font-outfit-semibold">
                  Email
                </label>
                <input
                  id="name"
                  type="email"
                  placeholder="yogesh@company.com"
                  className="p-5 rounded-xl border-[2px] border-[#afae6bca] text-[#FFFED2] bg-transparent placeholder:text-[#fffebb93] focus:outline-none focus:border-[#FFFED2] font-outfit-semibold"
                />
              </div>
            </div>
            <div className="flex flex-col m-2 space-y-2">
              <label htmlFor="#phone" className="text-[#FFFED2] font-semibold font-outfit-semibold">
                Phone Number
              </label>
              <input
                id="phone"
                type="number"
                placeholder="Eg. 87545 12892"
                className="w-[330px] p-5 rounded-xl border-2 border-[#afae6bca] text-[#FFFED2] bg-transparent placeholder:text-[#fffebb93] focus:outline-none focus:border-[#FFFED2] font-outfit-semibold md:w-full"
              />
            </div>
            <div className="flex flex-col m-2 space-y-2">
              <label htmlFor="query" className="text-[#FFFED2] font-semibold font-outfit-semibold">
                Message
              </label>
              <textarea
                id="query"
                placeholder="Let's start the business!"
                rows={6}
                className="w-[330px] p-5 rounded-xl border-2 border-[#afae6bca] text-[#FFFED2] bg-transparent placeholder:text-[#fffebb93] focus:outline-none focus:border-[#FFFED2] font-outfit-semibold md:w-full"
              ></textarea>
            </div>
          </form>
        </div>
      </section>
      <footer className="h-auto bg-[#242424] px-6 flex flex-col border-t-2 py-10 border-[#afae6bca]  md:px-10 md:h-[30vh] md:flex-row">
        <div className="flex flex-col w-full justify-between">
          <span className="text-4xl font-extrabold font-outfit-bold text-[#FFFED2] md:text-5xl">
            Yogesh M
          </span>
          <span className="pt-3 text-lg font-outfit-light text-[#fffed2ca] md:text-xl">
            Web and Mobile app Developer
          </span>
          <div className="flex space-x-3 pt-5">
            <a href="https://www.linkedin.com/in/yogesh-m-16ab20216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <img src="linkedin.png" alt="" className="h-10 w-10 md:h-12 md:w-12" />
            </a>
            <a href="https://github.com/Yogesh251103">
              <img src="github.png" alt="github" className="h-10 w-10 md:h-12 md:w-12" />
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-3 text-[#fffed2ca] w-1/3 font-poppins pt-10 md:pt-0">
          <span className="font-semibold font-outfit-semibold">
            Email :{" "}
            <a href="yogesh251003@gmail.com" className="underline text-[#CCC8A9] hover:text-[#FFFED2]">
              yogesh251003@gmail.com
            </a>
          </span>
          <span className="font-semibold font-outfit-semibold">
            Phone :{" "}
            <a href="+91 8754512892" className="underline text-[#CCC8A9] hover:text-[#FFFED2]">
              +91 87545 12892
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Home;
