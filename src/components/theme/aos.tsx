"use client";
import AOS from "aos";
import { useEffect } from "react";

const InitAos = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return null;
};

export default InitAos;
