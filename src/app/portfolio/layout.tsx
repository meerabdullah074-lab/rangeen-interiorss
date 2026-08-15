import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse completed residential and commercial interior projects by Rangeen Interiors Adiala across Rawalpindi.",
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
