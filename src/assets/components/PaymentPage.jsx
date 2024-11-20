import React, { useState } from "react";

const Payment_Page = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    nameOnCard: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate individual fields on change
    let newErrors = { ...errors };

    if (name === "cardNumber" && !/^\d{16}$/.test(value)) {
      newErrors.cardNumber = "Please enter a valid 16-digit card number.";
    } else if (name === "cardNumber") {
      delete newErrors.cardNumber;
    }

    if (name === "expiryDate" && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) {
      newErrors.expiryDate = "Please enter a valid expiry date (MM/YY).";
    } else if (name === "expiryDate") {
      delete newErrors.expiryDate;
    }

    if (name === "cvc" && !/^\d{3}$/.test(value)) {
      newErrors.cvc = "Please enter a valid 3-digit CVC.";
    } else if (name === "cvc") {
      delete newErrors.cvc;
    }

    if (name === "nameOnCard" && value.trim() === "") {
      newErrors.nameOnCard = "Name on card is required.";
    } else if (name === "nameOnCard") {
      delete newErrors.nameOnCard;
    }

    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      newErrors.email = "Please enter a valid email address.";
    } else if (name === "email") {
      delete newErrors.email;
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Payment successfully submitted!");
      // Add your form submission logic here
    }
  };

  const validate = () => {
    const newErrors = {};

    // Validate card number (16 digits)
    if (!/^\d{16}$/.test(formData.cardNumber)) {
      newErrors.cardNumber = "Please enter a valid 16-digit card number.";
    }

    // Validate expiry date (MM/YY)
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = "Please enter a valid expiry date (MM/YY).";
    }

    // Validate CVC (3 digits)
    if (!/^\d{3}$/.test(formData.cvc)) {
      newErrors.cvc = "Please enter a valid 3-digit CVC.";
    }

    // Validate name on card
    if (formData.nameOnCard.trim() === "") {
      newErrors.nameOnCard = "Name on card is required.";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    return newErrors;
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <div className="mt-6">
          <div className="flex space-x-4 justify-center mb-4 bg-gray-200 py-2 px-1 rounded-sm">
            <button className="px-3 py-2 text-black bg-gray-200 hover:bg-white rounded-lg focus:outline-none w-full">
              Pay With Card
            </button>
            <button className="px-3 py-2 text-black bg-gray-200 hover:bg-white rounded-lg focus:outline-none w-full">
              Pay With PayPal
            </button>
          </div>
          <br />
          <form className="space-y-5 space-x-0" onSubmit={handleSubmit}>
            {/* Card Number */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="card-number"
              >
                Card Number*
              </label>
              <input
                id="card-number"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                type="text"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="1234 1234 1234 1234"
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
              )}
            </div>

            {/* Expiry Date and CVC */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="expiry-date"
                >
                  Expiry Date*
                </label>
                <input
                  id="expiry-date"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  type="text"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="MM/YY"
                />
                {errors.expiryDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.expiryDate}
                  </p>
                )}
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="cvc"
                >
                  CVC*
                </label>
                <input
                  id="cvc"
                  name="cvc"
                  value={formData.cvc}
                  onChange={handleChange}
                  type="text"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="CVC"
                />
                {errors.cvc && (
                  <p className="text-red-500 text-sm mt-1">{errors.cvc}</p>
                )}
              </div>
            </div>

            {/* Name on Card */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="name-on-card"
              >
                Name on Card*
              </label>
              <input
                id="name-on-card"
                name="nameOnCard"
                value={formData.nameOnCard}
                onChange={handleChange}
                type="text"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"
              />
              {errors.nameOnCard && (
                <p className="text-red-500 text-sm mt-1">{errors.nameOnCard}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email*
              </label>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="john@company.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              id="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-lg focus:outline-none"
            >
              Pay $253.00
            </button>
            <p className="text-sm text-center text-gray-500 mt-2">
              You’ll be charged $253, including $48 for VAT in Italy
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment_Page;
