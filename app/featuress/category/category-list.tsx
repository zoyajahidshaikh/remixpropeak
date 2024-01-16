// components/CategoryList.tsx
import React from 'react';
import * as validate from '../../common/validate-entitlements';

interface CategoryListProps {
  appLevelAccess: any;
  categories: any[]; // Adjust the type based on your actual data structure
  onDragStart: (index: number) => void;
  onDrop: (index: number) => void;
  onDragOver: () => void;
  editCategoryWindow: (category: any) => void;
  onDeleteCategoryById: (categoryId: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = (props) => {
  let editCategory = validate.validateAppLevelEntitlements(props.appLevelAccess, 'Category', 'Edit');
  let deleteCategory = validate.validateAppLevelEntitlements(props.appLevelAccess, 'Category', 'Delete');

  var categoryView = props.categories.map((category, index) => {
    return (
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        id={index.toString()}
        key={category._id} // Adjust the key based on your actual data structure
        draggable={true}
        onDragStart={() => props.onDragStart(index)}
        onDrop={() => props.onDrop(index)}
        onDragOver={props.onDragOver}
      >
        {category.displayName}
        <span>
          {category.sequence}&nbsp;&nbsp;&nbsp;
          {editCategory ? (
            <span className="btn btn-xs btn-outline-info " onClick={() => props.editCategoryWindow(category)}>
              <i className="fas fa-pencil-alt"></i>
            </span>
          ) : ""}
          &nbsp;
          {category.title !== 'todo' && category.title !== 'inprogress' && category.title !== 'completed' && deleteCategory ? (
            <span
              title="Delete Category"
              className="btn btn-xs btn-outline-danger"
              onClick={() => props.onDeleteCategoryById(category._id)}
            >
              <i className="far fa-trash-alt"></i>
            </span>
          ) : (
            <span className="blank-space">&nbsp;</span>
          )}
        </span>
      </li>
    );
  });

  return (
    <ul className="list-group list-group-flush">
      {categoryView}
    </ul>
  );
};

export default CategoryList;
