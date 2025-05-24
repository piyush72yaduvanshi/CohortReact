import { useState } from "react";
import { useContactForm } from "./hooks/useContactForm";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { loading, successMessage, errorMessage, submitContact } =
    useContactForm();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      ContactForm
      <form onClick={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="message"
        />
        <button type="submit" disabled={loading} >
            {loading ? "Loading..." : "Submit"}
        </button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default ContactForm;
