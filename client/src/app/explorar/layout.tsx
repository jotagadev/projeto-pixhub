import type { Metadata } from "next";
import ExploreNavbar from "@/components/ExploreNavbar/ExploreNavbar";

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
      <footer></footer>
    </>
  );
}
