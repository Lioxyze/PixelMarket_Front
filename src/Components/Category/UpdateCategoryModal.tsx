import React, { useState } from "react";
import { Category } from "@/Utils/Category";

interface UpdateCategoryModalProps {
  category: Category;
  onClose: () => void;
  onSave: (category: Category) => void;
}

const UpdateCategoryModal: React.FC<UpdateCategoryModalProps> = ({
  category,
  onClose,
  onSave,
}) => {
  const [name, setName] = useState(category.name);

  const handleSave = () => {
    onSave({ ...category, name });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl mb-4">Edit Category</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateCategoryModal;
