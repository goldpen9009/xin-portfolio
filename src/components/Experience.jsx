"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import IIIT_KOTA from "../assets/IIIT_Kota.png";

import {
  ELEKS,
  CURAI,
  DEMAND,
  BOEING,
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-2"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={ELEKS}
              title="Eleks Labs"
              subtitle="Lead Full Stack Developer"
              date="July 2022 - present"
              para="Built secure digital asset exchange and e-commerce platforms using modern frontend frameworks, scalable backend services, and blockchain integrations."
            />
            <Exp_prop
              img={CURAI}
              title="Curai Health"
              subtitle="Senior Software Engineer"
              date="Aug 2020 - Jul 2022"
              para="Led development of company website and admin platform with React, Vue, .NET, and Python, ensuring scalability, security, and long-term reliability."
            />
            <Exp_prop
              img={DEMAND}
              title="Demand base"
              subtitle="Full Stack Developer"
              date="Oct 2018 - Aug 2020"
              para="Developed B2B marketing intelligence platforms with React and Node.js, optimizing real-time data pipelines and search performance."
            />
            <Exp_prop
              img={BOEING}
              title="Boeing Partner"
              subtitle="Node.js/Java Developer"
              date="Jan 2015 - Mar2018"
              para="Engineered backend services and enterprise applications for aviation logistics using Java, Node.js, and AWS, improving efficiency and reliability."
            />
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
