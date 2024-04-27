
import { getSessionInfo } from "@/actions";
import Profile from "@/components/Profile/Profile";

export default async function Perfil() {
 
  const session = await getSessionInfo()

  return (
    <>
     <Profile session={session}/>
    </>
  );
}
