import { useState } from "react";



export function useContactForm() {
    const [loading, setLoading] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const submitContact = async (contact) => {
        setLoading(true);
        setSuccessMessage(null);
        setErrorMessage(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccessMessage(data.success || "Message sent successfully");
            } else {
                setErrorMessage(data.error || "Something went wrong");
            }
        } catch (error) {
            setErrorMessage(error.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return { loading, successMessage, errorMessage, submitContact };
}