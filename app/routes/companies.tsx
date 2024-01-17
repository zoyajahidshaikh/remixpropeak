// routes/companies.tsx

import CompanyList from "../featuress/company/company-list"; // Adjust the path based on your project structure
import type { LoaderFunction } from "@remix-run/node";
import CompanyModel, { ICompany } from "../models/company/company-model"; // Adjust the path based on your project structure
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  const companies: ICompany[] = await CompanyModel.find({});
  console.log(companies, 'company wala data............');
  return json(companies);
};

export default function Companies() {
  const companies: ICompany[] = useLoaderData();
  console.log(companies, 'data............');
  
  const handleEditCompany = (companyId: string, company: ICompany) => {
    // Handle edit logic
    console.log(`Edit company with ID ${companyId}`, company);
  };

  const handleDeleteCompany = (companyId: string) => {
    // Handle delete logic
    console.log(`Delete company with ID ${companyId}`);
  };

  return (
    <div className="container">
      <h1>Company List</h1>
      <CompanyList
        companies={companies}
        editCompanyWindow={handleEditCompany}
        onDelete={handleDeleteCompany}
      />
    </div>
  );
}
