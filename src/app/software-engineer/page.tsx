import { softwareEngineerData } from "@/data/software-engineer";
import ResumePage from "@/components/ResumePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steve Wachira — Software Engineer",
  description: softwareEngineerData.summary,
};

export default function SoftwareEngineerPage() {
  return <ResumePage data={softwareEngineerData} currentRole="software" />;
}
