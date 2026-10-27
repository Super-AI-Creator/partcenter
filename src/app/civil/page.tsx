import type { Metadata } from "next";
import { SectorView } from "@/components/SectorView";
import { getSector } from "@/lib/sectors";

const sector = getSector("civil");

export const metadata: Metadata = {
  title: sector.metaTitle,
  description: sector.metaDescription,
};

export default function CivilPage() {
  return <SectorView sector={sector} />;
}
