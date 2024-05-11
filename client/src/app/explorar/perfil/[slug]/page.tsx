
import { getSessionInfo } from "@/actions";
import Profile from "@/components/Profile/Profile";

export default async function Perfil({params} : any) {
 
  const session = await getSessionInfo()
  
  const getProfile = async () => {
    try {
      const response = await fetch(`http://localhost:3333/api/user/${params.slug}`);
      if (!response.ok) {
        throw new Error("Erro ao buscar os dados das fotos");
      }
      const json = await response.json();
      return json;
    } catch (error) {
      console.error("Erro ao buscar os dados das fotos:", error);
    }
  }

  const profile = await getProfile();

  return (
    <>
     <Profile session={session} profile={profile}/>
    </>
  );
}
