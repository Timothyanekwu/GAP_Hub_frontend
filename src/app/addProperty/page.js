"use client";

import React, { useContext, useState } from "react";
import { AppContext } from "@/context/context";
import FormInput from "@/components/formInput";

const AddProperty = () => {
  const { addProp, setAddProp, addProperty } = useContext(AppContext);

  // Local state for adding tags and images
  const [imageInput, setImageInput] = useState("");
  const [tagInput, setTagInput] = useState("");

  const addHandler = (e, name) => {
    switch (name) {
      case "name":
        setAddProp((prev) => ({ ...prev, name: e.target.value }));
        break;
      case "price":
        setAddProp((prev) => ({ ...prev, price: Number(e.target.value) }));
        break;
      case "category":
        setAddProp((prev) => ({ ...prev, category: e.target.value }));
        break;
      case "type":
        setAddProp((prev) => ({ ...prev, type: e.target.value }));
        break;
      case "description":
        setAddProp((prev) => ({ ...prev, description: e.target.value }));
        break;
      case "location":
        setAddProp((prev) => ({ ...prev, location: e.target.value }));
        break;
      default:
        break;
    }
  };

  const addImage = () => {
    if (imageInput.trim() !== "") {
      setAddProp((prev) => ({
        ...prev,
        image: [...(prev.image || []), imageInput],
      }));
      setImageInput("");
    }
  };

  const addTag = () => {
    if (tagInput.trim() !== "") {
      setAddProp((prev) => ({
        ...prev,
        tags: [...(prev.tags || []), tagInput],
      }));
      setTagInput("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Property added:", addProp);

    addProperty();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <FormInput
            type="text"
            value={addProp?.name || ""}
            placeholder="Name"
            handler={(e) => addHandler(e, "name")}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <div className="flex">
            <FormInput
              type="text"
              value={imageInput}
              placeholder="Add Image URL"
              handler={(e) => setImageInput(e.target.value)}
            />
            <button type="button" onClick={addImage}>
              Add
            </button>
          </div>
          <div>
            {addProp?.image?.map((img, index) => (
              <p key={index}>{img}</p>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <FormInput
            type="number"
            value={addProp?.price || ""}
            placeholder="Price"
            handler={(e) => addHandler(e, "price")}
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <FormInput
            type="text"
            value={addProp?.category || ""}
            placeholder="Category"
            handler={(e) => addHandler(e, "category")}
          />
        </div>
        <div>
          <label htmlFor="type">Type</label>
          <FormInput
            type="text"
            value={addProp?.type || ""}
            placeholder="Type"
            handler={(e) => addHandler(e, "type")}
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <FormInput
            type="text"
            value={addProp?.location || ""}
            placeholder="Location"
            handler={(e) => addHandler(e, "location")}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <FormInput
            type="text"
            value={addProp?.description || ""}
            placeholder="description"
            handler={(e) => addHandler(e, "description")}
          />
        </div>
        <div>
          <label htmlFor="tags">Tags</label>
          <div className="flex">
            <FormInput
              type="text"
              value={tagInput}
              placeholder="Add Tag"
              handler={(e) => setTagInput(e.target.value)}
            />
            <button type="button" onClick={addTag}>
              Add
            </button>
          </div>
          <div>
            {addProp?.tags?.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProperty;
