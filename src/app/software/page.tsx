import type { Metadata } from "next";
import { SectorView } from "@/components/SectorView";
import { getSector } from "@/lib/sectors";

const sector = getSector("software");

export const metadata: Metadata = {
  title: sector.metaTitle,
  description: sector.metaDescription,
};

export default function SoftwarePage() {
  return <SectorView sector={sector} />;
}
