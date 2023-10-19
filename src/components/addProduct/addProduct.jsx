import React, { useState } from "react";

export default function ProductForm() {
    const [productData, setProductData] = useState({
        name: "",
        description: "",
        category: "",
        quantity: "",
        price: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProductData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        alert(
            `Product Name: ${productData.name}, Description: ${productData.description}, Category: ${productData.category}, Quantity: ${productData.quantity}, Price: ${productData.price}`
        );
    };

    return (
        <form onSubmit={handleFormSubmit} className="product-form">
            <label className="product_name" htmlFor="name">
                Product Name:
            </label>
            <input
                type="text"
                id="name"
                className="product-form__input"
                name="name"
                value={productData.name}
                onChange={handleInputChange}
            />

            <label className="product_description" htmlFor="description">
                Description:
            </label>
            <input
                type="text"
                id="description"
                className="product_description"
                name="description"
                value={productData.description}
                onChange={handleInputChange}
            />

            <label className="product_category" htmlFor="category">
                Category:
            </label>
            <input
                type="text"
                id="category"
                className="product_category"
                name="category"
                value={productData.category}
                onChange={handleInputChange}
            />

            <label className="product_quantity" htmlFor="quantity">
                Quantity:
            </label>
            <input
                type="text"
                id="quantity"
                className="product_quantity"
                name="quantity"
                value={productData.quantity}
                onChange={handleInputChange}
            />

            <label className="product__price" htmlFor="price">
                Price:
            </label>
            <input
                type="text"
                id="price"
                className="product_price"
                name="price"
                value={productData.price}
                onChange={handleInputChange}
            />

            <button className="submit_button" type="submit">
                Submit
            </button>
        </form>
    );
}
