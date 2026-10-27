import type { Metadata } from "next";
import { SectorView } from "@/components/SectorView";
import { getSector } from "@/lib/sectors";

const sector = getSector("finance");

export const metadata: Metadata = {
  title: sector.metaTitle,
  description: sector.metaDescription,
};

export default function FinancePage() {
  return <SectorView sector={sector} />;
}
