import { Category } from "@/Utils/Category";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const deleteCategory = async (id: number) => {
  return axios.delete(`http://localhost:3000/category/delete/${id}`);
};

export const TabCategory = ({
  Category,
  onDelete,
}: {
  Category: Category;
  onDelete: (id: number) => void;
}) => {
  const handleDelete = async () => {
    try {
      await deleteCategory(Category.id);
      onDelete(Category.id);
      toast.success("Category successfully removed!");
    } catch (error) {
      console.error("Error deleting category :", error);
      toast.error(
        "Une erreur s'est produite lors de la suppression de la catégorie."
      );
    }
  };

  return (
    <div
      className="card bg-[#111418] shadow-xl rounded-xl overflow-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="card-content p-6">
        <div className="card-title text-3xl font-bold text-white mb-2">
          {Category.name}
        </div>
        <div className="card-title text-3xl font-bold text-white mb-2">
          {Category.id}
        </div>
        <div className="card-info text-lg text-gray-400"></div>
        <button
          className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TabCategory;
