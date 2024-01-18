import React from "react";
import "./company.css";
import * as validate from "../../common/validate-entitlements";
import { useNavigate } from "@remix-run/react";

interface Company {
  _id: string;
  companyName: string;
  // Add other properties as needed
}

interface CompanyListProps {
  appLevelAccess: any; // Adjust the type if necessary
  companies: Company[];
  editCompanyWindow: (companyId: string, company: Company) => void;
  onDelete: (companyId: string) => void;
}

const CompanyList: React.FC<CompanyListProps> = React.memo((props) => {
  const navigate = useNavigate();

  console.log("CompanyList Props:", props);

  return (
    <ul className="list-group list-group-flush">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />

      {props.companies.map((company) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={company._id}
        >
          {company.companyName}
          <span>
            <span
              className="btn btn-xs btn-outline-info"
              title="Edit Company"
              onClick={() => props.editCompanyWindow(company._id, company)}
            >
              <i className="fas fa-pencil-alt"></i>
            </span>
            &nbsp;
            <span
              className="btn btn-xs btn-outline-danger"
              title="Delete Company"
              onClick={() => props.onDelete(company._id)}
            >
              <i className="far fa-trash-alt"></i>
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
});

export default CompanyList;
