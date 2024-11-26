import { useState } from "react";

export const useReservation = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    phone: "",
    roomType: "simple",
    startDate: "",
    endDate: "",
    preferences: "",
    amenities: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add API call here (pour renvoyer les donnees au serveur)
      console.log("Données soumises:", formData);
      // combiner les champs mises à jour avec shnou kan endna 9bel
      setFormData({
        clientName: "",
        email: "",
        phone: "",
        roomType: "simple",
        startDate: "",
        endDate: "",
        preferences: "",
        amenities: [],
      });
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
    }
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
  };
};
