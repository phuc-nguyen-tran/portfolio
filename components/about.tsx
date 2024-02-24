"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm currently a <span className="font-medium">Computer Science</span>{" "}
        major at the{" "}
        <span className="font-medium">University of Rochester</span>. My current
        interests lie in{" "}
        <span className="font-medium">
          Backend and Infrastructure Software Engineering
        </span>
        . I will be a Software Engineer Intern at{" "}
        <span className="font-medium">ServiceNow</span> in Summer 2024, working
        at the Platform Security Team. Previously at{" "}
        <span className="font-medium">
          FPT Information System and BeetSoft.
        </span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        soccer and basketball, and being a{" "}
        <span className="font-medium">Tottenham Hotspur</span> fan. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">geography and cooking</span>. I'm also a
        big fan of reality shows like{" "}
        <span className="font-medium">The Amazing Race</span> and{" "}
        <span className="font-medium">Survivor</span>.
      </p>
    </motion.section>
  );
}
