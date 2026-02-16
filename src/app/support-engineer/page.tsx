import { supportEngineerData } from "@/data/support-engineer";
import ResumePage from "@/components/ResumePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steve Wachira — Support Engineer",
  description: supportEngineerData.summary,
};

export default function SupportEngineerPage() {
  return <ResumePage data={supportEngineerData} currentRole="support" />;
}
