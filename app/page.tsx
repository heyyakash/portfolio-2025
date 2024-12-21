import DashedLine from "@/components/DashedLine";
import Hero from "@/components/Hero";
import Projects from "@/components/projects";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
    </>
  );
}
