import type { Metadata } from "next";
import { SectorView } from "@/components/SectorView";
import { getSector } from "@/lib/sectors";

const sector = getSector("hardware");

export const metadata: Metadata = {
  title: sector.metaTitle,
  description: sector.metaDescription,
};

export default function HardwarePage() {
  return <SectorView sector={sector} />;
}
