import { Product } from "@/Utils/types";
import axios from "axios";

export async function AllProduct() {
  const url = "http://localhost:3000/product/all";

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
    },
  };

  try {
    const res = await axios.get(url, axiosConfig);
    console.log("Fetched products:", res.data);
    return res.data;
  } catch (e) {
    console.error("Error fetching products:", e);
    throw new Error();
  }
}

export async function getProductdetails(id: number) {
  const url = `http://localhost:3000/product/searchId/${id}`;

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
    },
  };

  try {
    const res = await axios.get(url, axiosConfig);
    return res.data;
  } catch (e) {
    throw new Error();
  }
}

export const searchProduct = async (title: string, category: string) => {
  const url = `http://localhost:3000/product/search`;

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
    },
    params: { title, category },
  };

  try {
    const response = await axios.get(url, axiosConfig);
    return response.data;
  } catch (error) {
    console.error("Error searching products:", error);
    return [];
  }
};

export const getAllCategories = async () => {
  const url = `http://localhost:3000/category/all`;

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
    },
  };

  try {
    const response = await axios.get(url, axiosConfig);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const deleteUser = async (id: number) => {
  const url = `http://localhost:3000/user/delete/${id}`;

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
    },
  };

  try {
    const response = await axios.delete(url, axiosConfig);
    return response;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Error deleting user");
  }
};

export async function productNew(Product: Product) {
  const url = `http://localhost:3000/product/new`;

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
    },
  };

  try {
    const response = await axios.post(
      url,
      {
        title: Product.title,
        image: Product.image,
        price: Product.price,
        status: Product.status,
        categoryId: Product.categoryId,
      },
      axiosConfig
    );
    return response;
  } catch (error) {
    throw new Error("Une erreur est survenue lors de l'inscription.");
  }
}
