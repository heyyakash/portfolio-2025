import DashedLine from "@/components/DashedLine";
import Hero from "@/components/Hero";
import Introduction from "@/components/introduction";
import Projects from "@/components/projects";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
    </>
  );
}
