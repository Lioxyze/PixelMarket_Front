"use client";
import React, { useEffect, useState } from "react";
import CardContainer from "../Home/CardContainer";
import TabUser from "../User/TabUser";
import { AllProduct, getAllCategories, searchProduct } from "@/Service/Product";
import { AllUser } from "@/Service/User";
import { Product } from "@/Utils/types";
import { User } from "@/Utils/User";
import Tabproduct from "../Home/TabPanier";
import TabCategory from "../Category/TabCategory";
import { AllCate } from "@/Service/CategoryNew";
import { Category } from "@/Utils/Category";
import TabPanierAdmin from "../Home/TabPanierAdmin";
import SearchBar from "../SearchBar/SearchBar";

const AdminDashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);
  const [category, setCategory] = useState<Category[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AllProduct().then((res) => {
      setProducts(res.product);
      setFilteredProducts(res.product);
    });

    getAllCategories().then((res) => {
      setCategories(res.categories);
    });
  }, [isReloadNeeded]);

  const handleSearch = async (searchText: string, category: string) => {
    if (searchText.trim() === "" && category === "All") {
      setFilteredProducts(products);
    } else {
      const result = await searchProduct(searchText, category);
      setFilteredProducts(result);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await AllProduct();
        setProducts(res.product);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [isReloadNeeded]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await AllUser();
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, [isReloadNeeded]);

  useEffect(() => {
    AllCate().then((res) => {
      setCategory(res.data.categories);
      console.log(res.data.categories);
    });
  }, [isReloadNeeded]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Admin Dashboard
        </h2>

        {/* Section Utilisateurs */}
        <section className="border-t pt-6 text-black">
          <div className="flex flex-col space-y-2">
            {/* Liste des utilisateurs */}
            <div className="flex justify-between bg-gray-200 p-2 rounded-md text-black">
              <span className="w-1/4">User :</span>
            </div>

            <div className="w-1/4 flex space-x-2">
              <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                Edit
              </button>

              <a href="/Create/User">
                <button className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                  Add
                </button>
              </a>
            </div>
            <CardContainer>
              {users.map((user) => (
                <TabUser
                  User={user}
                  key={user.id}
                  onDelete={function (id: number): void {}}
                />
              ))}
            </CardContainer>
            {/* Ajouter un utilisateur */}
          </div>
        </section>

        {/* Section Catégories */}
        <section className="border-t pt-6 text-black">
          <div className="flex flex-col space-y-2">
            {/* Liste des catégories */}
            <div className="flex justify-between bg-gray-200 p-2 rounded-md text-black">
              <span className="w-3/4">Category :</span>
            </div>

            <div className="w-1/4 flex space-x-2">
              <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                Edit
              </button>

              <a href="/Create/Category">
                <button className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                  Add
                </button>
              </a>
            </div>

            {/* Ajouter une catégorie */}
          </div>
        </section>
        <CardContainer>
          {Array.isArray(category) &&
            category.map((cat) => (
              <TabCategory
                key={cat.id}
                Category={cat}
                onDelete={(id: number) => {}}
              />
            ))}
        </CardContainer>

        {/* Section Produits */}
        <section className="border-t pt-6">
          <div className="flex flex-col space-y-2">
            {/* Liste des produits */}
            <div className="flex justify-between bg-gray-200 p-2 rounded-md text-black">
              <span className="w-3/4">Product :</span>
            </div>

            <div className="w-1/4 flex space-x-2">
              <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                Edit
              </button>

              <a href="/Create/Product">
                <button className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                  Add
                </button>
              </a>
            </div>
            <SearchBar categories={categories} onSearch={handleSearch} />
            <CardContainer>
              {filteredProducts.map((product) => (
                <TabPanierAdmin
                  key={product.id}
                  product={product}
                  onDelete={function (id: number): void {}}
                />
              ))}
            </CardContainer>
            {/* Ajouter un produit */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
