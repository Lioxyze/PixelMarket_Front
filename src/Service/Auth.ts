import { AuthProps, SignIn } from "@/Utils/AuthTypes";
import axios from "axios";

export async function login(authProps: SignIn) {
  const url = `http://localhost:3000/auth/signin`;

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(
      url,
      {
        email: authProps.email,
        password: authProps.password,
      },
      axiosConfig
    );

    const { access_token, roleId, pseudo } = response.data;

    localStorage.setItem("jwt", access_token);
    localStorage.setItem("role_id", roleId.toString());
    localStorage.setItem("pseudo", pseudo);

    return response;
  } catch (error) {
    throw new Error("Une erreur est survenue lors de la connexion.");
  }
}

export async function registerr(authProps: AuthProps) {
  const url = `http://localhost:3000/auth/signup`;

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(
      url,
      {
        email: authProps.email,
        password: authProps.password,
        pseudo: authProps.pseudo,
        firstname: authProps.firstname,
        lastname: authProps.lastname,
        address: authProps.address,
        phone: authProps.phone,
      },
      axiosConfig
    );

    return response;
  } catch (error) {
    throw new Error("Une erreur est survenue lors de l'inscription.");
  }
}
