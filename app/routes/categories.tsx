// import CategoryList from "../featuress/category/category-list";
// import type { MetaFunction, LoaderFunction } from "@remix-run/node";
// import Category from "../models/category-model"; // Correct import
// import { useLoaderData } from "@remix-run/react";
// import { json } from "@remix-run/node";

// // routes/categories.tsx

// export const loader: LoaderFunction = async () => {
//   const groups = await Category.find({});
//   console.log(groups, 'data............');
//   return json({groups});
// };

// export default function Categories() {
//   // const categories = useLoaderData();
//     // console.log(categories, 'data............');
//     return (
//       <div className="container">
//         <h1>Hello </h1>
//         {/* <CategoryList categories={categories} /> */}
//       </div>
//     );
//   }