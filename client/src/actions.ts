"use server";

import { sessionOptions, SessionData, defaultSession, userInfo } from "@/lib";
import { getIronSession } from "iron-session";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getSessionInfo = async () => {
  const session: SessionData = await getSession();

  const info: SessionData = {
    isLoggedIn: session.isLoggedIn,
    username: session.username,
    userId: session.userId,
    accessToken: session.accessToken,
  };

  return info;
};

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const entrar = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  const session = await getSession();

  const formEmail = formData.get("email") as string;
  const formPassword = formData.get("senha") as string;

  const url = "http://localhost:3333/api/login";
  const dados = JSON.stringify({ email: formEmail, password: formPassword });

  try {
    const resposta = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: dados,
    });

    const responseData = await resposta.json();
    // console.log(dados);
    console.log("Resposta da API:", responseData);

    session.userId = responseData.id;
    session.email = responseData.email;
    session.username = responseData.name;
    session.accessToken = responseData.accessToken;
    session.isLoggedIn = true;

    if (responseData.error) {
      return { error: responseData.message };
    }
  } catch (erro) {
    console.error("Erro ao fazer login:", erro);
  }

  await session.save();
  redirect("/explorar");
};

export const registrar = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  const session = await getSession();

  const formEmail = formData.get("email") as string;
  const formNome = formData.get("nome") as string;
  const formPassword = formData.get("senha") as string;

  const url = "http://localhost:3333/api/user";
  const dados = JSON.stringify({ name: formNome, email: formEmail, password: formPassword });

  try {
    const resposta = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: dados,
    });

    const responseData = await resposta.json();
    console.log("Resposta da API:", responseData);

    session.userId = responseData.id;
    session.email = responseData.email;
    session.username = responseData.name;
    session.accessToken = responseData.accessToken;
    session.isLoggedIn = true;

    if (responseData.error) {
      return { error: responseData.message };
    }
  } catch (erro) {
    console.error("Erro ao fazer login:", erro);
  }

  await session.save();
  redirect("/explorar");
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};



export const getUser = async (id: number) => {
   

fetch(`http://localhost:3333/api/user/${id}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('A resposta da rede não foi bem-sucedida');
    }
    return response.json();
  })
  .then(data => {
    console.log('Dados do usuário:', data);
    
  })
  .catch(error => {
    console.error('Houve um problema com a operação de requisição:', error);
  });

};

export const createPost = async (formData: FormData) => {
  const session = await getSession();

  const formTitulo = formData.get("titulo") as string;
  const formDate = Date.now();
  const formDesc = formData.get("description") as string;
  const formCat = formData.get("categoria") as string;
  const formFile = formData.get("file") as File;

  const url = "http://localhost:3333/api/upload";
  const dados = new FormData();
  dados.append("file", formFile);
  dados.append("title", formTitulo);
  dados.append("postDate", formDate);
  dados.append("description", formDesc);
  dados.append("category", formCat);
  dados.append("userId", session.userId);

  try {
    const resposta = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${session.accessToken}`
      },
      body: dados,
    });

    const responseData = await resposta.json();
    console.log("Resposta da API:", responseData);

    if (responseData.error) {
      return { error: responseData.message };
    }
  } catch (erro) {
    console.error("Erro ao fazer upload:", erro);
  }
};




export const changePremium = async () => {
  const session = await getSession();

  isPro = !session.isPro;
  session.isPro = isPro;
  await session.save();
  revalidatePath("/profile");
};

export const changeUsername = async (formData: FormData) => {
  const session = await getSession();

  const newUsername = formData.get("username") as string;

  username = newUsername;

  session.username = username;
  await session.save();
  revalidatePath("/profile");
};
