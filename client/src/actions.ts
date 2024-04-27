"use server";

import { sessionOptions, SessionData, defaultSession } from "@/lib";
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
