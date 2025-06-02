"use client";

import HomePage from "@/components/Home";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Header");

  return <HomePage />;
}
