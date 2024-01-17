import React from 'react';
import './company.css';
import * as validate from '../../common/validate-entitlements';

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
  let editCompany = validate.validateAppLevelEntitlements(props.appLevelAccess, 'Company', 'Edit');
  let deleteCompany = validate.validateAppLevelEntitlements(props.appLevelAccess, 'Company', 'Delete');

  var companyView = props.companies.map((company) => (
    <li className="list-group-item d-flex justify-content-between align-items-center" key={company._id}>
      {company.companyName}
      <span>
        {editCompany && (
          <span className="btn btn-xs btn-outline-info" title="Edit Company" onClick={() => props.editCompanyWindow(company._id, company)}>
            <i className="fas fa-pencil-alt"></i>
          </span>
        )}
        &nbsp;
        {deleteCompany && (
          <span className="btn btn-xs btn-outline-danger" title="Delete Company" onClick={() => props.onDelete(company._id)}>
            <i className="far fa-trash-alt"></i>
          </span>
        )}
      </span>
    </li>
  ));

  return (
    <ul className="list-group list-group-flush">
      {companyView}
    </ul>
  );
});

export default CompanyList;
