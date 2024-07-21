import axios from "axios";

export async function AllUser() {
  let url = `http://localhost:3000/user/all`;

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
    },
  };
  return axios
    .get(url, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw new Error(e);
    });
}

export const deleteProduct = async (id: number): Promise<void> => {
  try {
    await axios.delete(`http://localhost:3000/product/delete/${id}`);
  } catch (error) {
    console.error("Erreur lors de la suppression du produit :", error);
    throw new Error(
      "Une erreur s'est produite lors de la suppression du produit."
    );
  }
};
