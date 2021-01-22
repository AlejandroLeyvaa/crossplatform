import React, { useState } from 'react';
import Preview from './Preview';

const Form = () => {
  // const API = 'http://localhost:3001/api/products';
  const API = 'https://cross-platform.herokuapp.com/api/products'
  const [form, setValues] = useState({});
  const [srcImage, setSrcImage] = useState([]);

  const handleInput = (e) => {
    e.preventDefault();
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const getImage = e.target.files[0];

    const src = window.URL.createObjectURL(getImage);
    setValues({
      ...form,
      [e.target.name]: getImage,
    });
    setSrcImage(src);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('product_name', form.product_name);
    formData.append('product_price', form.product_price);
    formData.append('product_brand', form.product_brand);
    formData.append('product_url', form.product_url);
    console.log(formData);
    fetch(API, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
    event.target.reset();
    setSrcImage('');
  };

  return (
    <>
      <div className="Add-product CurrentRoute">
        <form className="Form" onSubmit={handleSubmit}>
          <input
            className="Form-input"
            type="text"
            name="product_name"
            onChange={handleInput}
            placeholder="Product name"
            required
          />
          <input
            className="Form-input"
            type="text"
            name="product_price"
            onChange={handleInput}
            placeholder="Price"
            required
          />
          <input
            className="Form-input"
            type="text"
            name="product_brand"
            onChange={handleInput}
            placeholder="Company"
            required
          />
          <div className="Form-buttons-container">
            <div className="Form-file-inputContainer">
              <input
                className="Form-input-file"
                type="file"
                name="product_url"
                multiple
                accept="image/*"
                onChange={handleChange}
                required
              />
              <i class="fas fa-image" />
            </div>
            <button type="submit" className="Form-input-submit">
              Send
            </button>
          </div>
        </form>
        {srcImage.length > 0 && (
          <Preview
            src={srcImage}
            alt={form.product_name}
            name={form.product_name}
            price={form.product_price}
            brand={form.product_brand}
          />
        )}
      </div>
    </>
  );
};

export default Form;
