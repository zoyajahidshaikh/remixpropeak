// routes/category.js

import React, { useState } from 'react';
import { json, LoaderFunction } from '@remix-run/node';
// import './category.css';
// import { getCategoryById, saveCategory } from '../api/category'; // Import your API functions

const labelStyle = {
  fontSize: 'small',
};

const submitStyle = {
  float: 'right',
};

export let loader: LoaderFunction = async ({ params }) => {
  const categoryId = params.id; // Assuming you have a dynamic route parameter for category ID
  const category = await getCategoryById(categoryId);
  return json({ category });
};

export default function Category(props) {
  const { category: initialCategory } = props.data;
  const [category, setCategory] = useState(initialCategory || {
    displayName: '',
    sequence: '',
    show: false,
  });
  const [msg, setMsg] = useState('');

  const handleCheckbox = (e) => {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setCategory({
      ...category,
      [name]: value,
    });
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    let title = category.title;
    let sequence = category.sequence;

    if (name === 'sequence') {
      sequence = event.target.value;
    }

    if (name === 'displayName') {
      if (title === 'todo' || title === 'inprogress' || title === 'completed') {
        title = title;
      } else {
        title = value.toLowerCase().split(' ').join('');
      }
    }

    setCategory({
      ...category,
      [name]: value,
      title: title,
      sequence: sequence,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const displayNames = props.data.categories.filter((t) => (
      t.displayName === category.displayName && t.sequence === category.sequence
    ));

    if (displayNames && displayNames.length !== 0) {
      setMsg('Category already exists');
      setCategory({
        ...category,
        displayName: '',
        title: '',
        show: true,
        sequence: '',
      });
    } else {
      if (!category.title) {
        if (
          category.displayName === 'todo' ||
          category.displayName === 'inprogress' ||
          category.displayName === 'completed'
        ) {
          category.title = category.displayName;
        } else {
          category.title = category.displayName.toLowerCase().split(' ').join('');
        }
      }

      const titles = props.data.categories.filter((t) => t.title === category.title);
      let data = { ...category };

      if (
        category.title !== 'todo' &&
        category.title !== 'inprogress' &&
        category.title !== 'completed'
      ) {
        if (titles && titles.length !== 0) {
          data.title = data.title + 1;
        }
      }

      await saveCategory(data);
      // Redirect or handle success as needed
    }
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <span onClick={props.closeCategory} className="float-right mr-3">
        <i className="fas fa-times close"></i>
      </span>
      {category._id ? (
        <h4 className="sub-title ml-3"> Edit Category</h4>
      ) : (
        <h4 className="sub-title ml-3"> Add Category</h4>
      )}
      <hr />

      <div className="container">
        {props.message || props.labelvalue || props.labelsuccessvalue ? (
          <div className="row">
            <div className="col-sm-12">
              {props.message ? (
                <span htmlFor="category" className="alert alert-danger">
                  {props.message}
                </span>
              ) : (
                ''
              )}

              {props.labelsuccessvalue ? (
                <span
                  htmlFor="category"
                  className="alert alert-success"
                  value={props.labelsuccessvalue}
                >
                  {props.labelsuccessvalue}
                </span>
              ) : (
                ''
              )}
            </div>
          </div>
        ) : (
          ''
        )}
        <div className="form-group">
          <form onSubmit={onSubmit}>
            {/* The rest of your form code remains the same */}
          </form>
        </div>
      </div>
    </div>
  );
}
