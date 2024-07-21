import axios from "axios";

export async function getCategoryById(categoryId: string) {
  const url = `http://localhost:3000/category/search/${categoryId}`;

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

type Category = {
  id: number;
  name: string;
};

export async function AllCategory(): Promise<Category[]> {
  const url = `http://localhost:3000/category/all`;

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
    },
  };

  try {
    const response = await axios.get(url, axiosConfig);
    const categories = response.data.categories;

    const formattedCategories: Category[] = categories.map((category: any) => ({
      id: category.id,
      name: category.name,
    }));

    return formattedCategories;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw new Error("Error fetching categories");
  }
}

export async function categoryNew(Category: Category) {
  const url = `http://localhost:3000/category/new`;

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
        name: Category.name,
      },
      axiosConfig
    );
    return response;
  } catch (error) {
    throw new Error("Une erreur est survenue lors de l'inscription.");
  }
}

export const deleteCategory = async (id: number) => {
  const url = `http://localhost:3000/category/delete/${id}`;

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
    console.error("Error deleting category:", error);
    throw new Error("Error deleting category");
  }
};

export async function AllCategoryy() {
  const url = "http://localhost:3000/category/all";

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

export const updateCategory = async (category: Category) => {
  const url = `http://localhost:3001/category/update/${category.id}`;

  const axiosConfig = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({ name: category.name }),
  };

  try {
    const response = await fetch(url, axiosConfig);
    return response;
  } catch (error) {
    console.error("Error updating category:", error);
    throw new Error("Error updating category");
  }
};
