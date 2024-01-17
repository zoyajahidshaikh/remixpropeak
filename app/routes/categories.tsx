// routes/categories.tsx

import CategoryList from "../featuress/category/category-list";
import CategoryForm from "../featuress/category/category-form"; // Import your CategoryForm component
import type { MetaFunction, LoaderFunction, ActionFunction } from "@remix-run/node";
import Category from "../models/category/category-model";
import { useLoaderData } from "@remix-run/react";
import { redirect, json } from "@remix-run/node";

interface CategoryData {
  categories: any[]; // Adjust the type based on your actual data structure
}

export const loader: LoaderFunction = async () => {
  const categories = await Category.find({});
  return json({ categories });
};

export const action: ActionFunction = async ({ request }) => {
  if (request.method === "post") {
    try {
      const body = JSON.parse(request.body);
      const newCategory = await Category.create(body); // Use your Mongoose model
      return json({ category: newCategory });
    } catch (error) {
      console.error("Error creating category:", error);
      return json({ error: "Failed to create a new category" }, 500);
    }
  }
};

export default function Categories() {
  const { categories } = useLoaderData<CategoryData>();

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch("/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Assuming your API response includes the new category
        const { category } = await response.json();
        // Handle success, e.g., update UI or show a success message
        console.log("Category created successfully:", category);
      } else {
        // Handle API error here (e.g., show an error message to the user)
        console.error("API error:", response.statusText);
      }
    } catch (error) {
      console.error("Error while creating a new category:", error);
    }
  };

  return (
    <div className="container">
      <h1>Categories</h1>
      <CategoryForm onSubmit={handleFormSubmit} />
      <CategoryList categories={categories} />
    </div>
  );
}
