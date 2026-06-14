import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useAuth } from '../../context/authContext.js';
import {Modal} from 'antd';


const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [auth]= useAuth();
  const [visible, setVisible] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [selected, setSelected] = useState(null);

  const handleDelete = async (pId)=>{
    try {
      const {data} = await axios.delete(`https://thorough-tranquility-production-dca2.up.railway.app/api/category/delete-category/${pId}`, {
        headers:{
          Authorization: auth?.token,
        },
      })
      if(data.success){
        alert("Deleted.");
        getAllCategories();
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.put(`https://thorough-tranquility-production-dca2.up.railway.app/api/category/update-category/${selected._id}`, {name:updatedName}, {
        headers:{
          Authorization: auth?.token,
        },
      })
      if(data.success){
        console.log(data)
        alert(`${updatedName} is updated.`);
        setUpdatedName('');
        setVisible(false);
        setSelected(null);
        getAllCategories();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("auth token is:", auth?.token);
    try {
      const { data } = await axios.post('https://thorough-tranquility-production-dca2.up.railway.app/api/category/create-category', { name }, {
    headers: {
      Authorization: auth?.token,
    },
  });
      if(data?.success) {
        alert('Category created successfully');
        setName('');
        getAllCategories();
      } else if(!data?.success) {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error creating category:', error);
      alert('An error occurred while creating the category');
    }
  };

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get('https://thorough-tranquility-production-dca2.up.railway.app/api/category/get-category');
      if(data?.success) {
        setCategories(data?.category);
        console.log('Fetched categories:', data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
   <div className="container-fluid py-4">
  <div className="row justify-content-center">
    <div className="col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5">
      <div className="card shadow border-0 p-3 p-md-4">
        <h2 className="text-center mb-4">
          Manage Categories
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Category Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Add Category
          </button>
        </form>
        <div className="table-responsive mt-4">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Categories</th>
                <th className="text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((c, index) => (
                <tr key={c._id}>
                  <td>{index + 1}</td>
                  <td>{c.name}</td>
                  <td className="text-center">
                    <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center">
                      <button className="btn btn-warning btn-sm"  onClick={()=> {setVisible(true) ; setUpdatedName(c.name) ; setSelected(c)}} >
                        Edit
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={()=> {handleDelete(c._id)}}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Modal onCancel={()=>setVisible(false)} open={visible} footer={null}>
          <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Category Name"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Update Category
          </button>
        </form>
        </Modal>
      </div>
    </div>
  </div>
</div>

</>
  );
}

export default CreateCategory
