import DashedLine from "@/components/DashedLine";
import Hero from "@/components/Hero";
import Introduction from "@/components/introduction";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Skills />
    </>
  );
}
