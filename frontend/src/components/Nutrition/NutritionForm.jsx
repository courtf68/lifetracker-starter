import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiClient from "../../../apiClient";
import "../Nutrition/NutritionForm.css";

export default function NutritionForm({}) {
  //params
  //   console.log(params);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    category: "",
    calories: "",

    Quantity: "",

    image_url: "",
  });
  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async () => {
    setIsLoading(true);
    setErrors((e) => ({ ...e, form: null }));

    try {
      const res = await apiClient.request("nutrition", "post", form);
      // const res = await axios.post("http://localhost:3001/nutrition/add", {
      //     name: form.name,

      //     category: form.category,
      //     calories: form.calories,
      //     Quantity: form.Quantity,

      //     image_url: form.image_url,
      //     user_id: 1,
      //   });

      if (res?.data?.nutrition) {
        // setUser(res.data);
        setIsLoading(false);
        navigate("/nutrition");
      } else {
        setErrors((e) => ({
          ...e,
          form: "Something went wrong with registration",
        }));
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      const message = err?.response?.data?.error?.message;
      setErrors((e) => ({
        ...e,
        form: message ? String(message) : String(err),
      }));
      setIsLoading(false);
    }
  };

  return (
    <div className="Register">
      <div className="card">
        <h2>Record Nutrition</h2>

        {errors.form && <span className="error">{errors.form}</span>}
        <br />

        <div className="form">
          <div>
            <div className="input-field">
              <label htmlFor="name">Name</label>
              <input
                type="name"
                name="name"
                placeholder="nutrition name"
                value={form.name}
                onChange={handleOnInputChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                name="category"
                placeholder="category"
                value={form.category}
                onChange={handleOnInputChange}
              />
            </div>

            <div className="split-inputs">
              <div className="input-field">
                <label htmlFor="calories">Calories</label>
                <input
                  type="text"
                  name="calories"
                  placeholder="1"
                  value={form.calories}
                  onChange={handleOnInputChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="Quantity">Quantity</label>
                <input
                  type="text"
                  name="Quantity"
                  placeholder="Quantity"
                  value={form.Quantity}
                  onChange={handleOnInputChange}
                />
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="image_url">ImageUrl</label>
              <input
                type="image_url"
                name="image_url"
                placeholder="http://www.food-image.com"
                value={form.image_url}
                onChange={handleOnInputChange}
              />
            </div>

            <button
              className="btn"
              disabled={isLoading}
              onClick={handleOnSubmit}
            >
              {isLoading ? "Loading..." : "Record Nutrition"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
