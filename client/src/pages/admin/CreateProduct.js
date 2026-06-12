import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../../context/authContext.js"

const CreateProduct = () => {
  const [categories, setCategories] = useState();
  const navigate = useNavigate();
  const [auth] = useAuth()

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState(false);
  const [photo, setPhoto] = useState("");

  // get all categories
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/category/get-category", {headers:{
          Authorization: auth?.token,
        },
      }
      );

      setCategories(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  // create product
  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      const productData = new FormData();

      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("category", category);
      productData.append("quantity", quantity);
      productData.append("shipping", shipping);
      productData.append("photo", photo);

      const { data } = await axios.post(
        "/api/product/create-product",
        productData, {
          headers:{
            Authorization: auth?.token,
          },
        }
      );

      alert("Product Created Successfully");
      navigate("/dashboard/admin/manage-product")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">

      <div className="row justify-content-center">

        <div className="col-md-8">

          <div className="card shadow p-4">

            <h2 className="mb-4 text-center">
              Create Product
            </h2>

            <form onSubmit={handleCreate}>

              {/* Product Name */}
              <div className="mb-3">
                <label className="form-label">
                  Product Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Product Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Description */}
              <div className="mb-3">
                <label className="form-label">
                  Description
                </label>

                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Enter Product Description"
                  value={description}
                  onChange={(e) =>
                    setDescription(e.target.value)
                  }
                />
              </div>

              {/* Price */}
              <div className="mb-3">
                <label className="form-label">
                  Price
                </label>

                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              {/* Quantity */}
              <div className="mb-3">
                <label className="form-label">
                  Quantity
                </label>

                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              {/* Category */}
              <div className="mb-3">
                <label className="form-label">
                  Category
                </label>

                <select
                  className="form-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">
                    Select Category
                  </option>

                  {categories?.map((c) => (
                    <option
                      key={c._id}
                      value={c._id}
                    >
                      {c?.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Photo */}
              <div className="mb-3">
                <label className="form-label">
                  Product Photo
                </label>

                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  onChange={(e) =>
                    setPhoto(e.target.files[0])
                  }
                />
              </div>

              {/* Preview Image */}
              {photo && (
                <div className="mb-3 text-center">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt="product"
                    height="200px"
                    className="img-fluid rounded"
                  />
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Create Product
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CreateProduct;