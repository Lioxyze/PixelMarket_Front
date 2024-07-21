import { deleteUser } from "@/Service/Product";
import { User } from "@/Utils/User";
import React from "react";
import toast from "react-hot-toast";

export const TabUser = ({
  User,
  onDelete,
}: {
  User: User;
  onDelete: (id: number) => void;
}) => {
  const handleDelete = async () => {
    try {
      await deleteUser(User.id);
      onDelete(User.id);
      toast.success("User successfully deleted!");
    } catch (error) {
      console.error("Erreur lors de la suppression de l'utilisateur :", error);
      toast.success("Produit supprimé avec succès !");
    }
  };

  return (
    <div
      className="card bg-[#111418] shadow-xl rounded-xl overflow-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="card-content p-6">
        <div className="card-title text-3xl font-bold text-white mb-2">
          {User.pseudo}
        </div>
        <div className="card-info text-lg text-gray-400">
          <span className="font-semibold text-gray-200">{User.email}</span>
          <button
            className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabUser;
