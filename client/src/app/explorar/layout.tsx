import type { Metadata } from "next";
import ExploreNavbar from "@/components/ExploreNavbar/ExploreNavbar";
import HomeFooter from "@/components/HomeFooter/HomeFooter";
import {  getSessionInfo } from "@/actions";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

//TODO - FOOTER

export const metadata: Metadata = {
  title: "PixHub - Explorar",
  description: "Hora de explorar a criatividade do mundo!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)

{
  const session = await getSessionInfo();
  console.log(session.isLoggedIn)

  return (
    <>
    
      <AuthProvider session={session}>
      <ExploreNavbar session={session}/>
  
        {children}
      
      <footer></footer>
      </AuthProvider>
    </>
  );
}
