import type { Metadata } from "next";
import ExploreNavbar from "@/components/ExploreNavbar/ExploreNavbar";
import HomeFooter from "@/components/HomeFooter/HomeFooter";

//TODO - FOOTER

export const metadata: Metadata = {
  title: "PixHub - Explorar",
  description: "Hora de explorar a criatividade do mundo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ExploreNavbar />
  
        {children}
      
      <HomeFooter></HomeFooter>
    </>
  );
}
