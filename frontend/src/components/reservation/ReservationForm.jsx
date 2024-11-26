import React, { useState } from "react";
import { User, Mail, Phone, Bed, Calendar, Clock, Heart } from "lucide-react";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    phone: "",
    roomType: "simple",
    startDate: "",
    endDate: "",
    preferences: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données soumises:", formData);
    // Add API call here saad
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* client name */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-base font-medium text-gray-700">
              <User className="h-5 w-5 text-purple-500" />
              <span>Nom du Client</span>
            </label>
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleInputChange}
              placeholder="Entrez le nom du client"
              className="w-full p-3 font-medium text-base border border-purple-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* email */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-base font-medium text-gray-700">
              <Mail className="h-5 w-5 text-purple-500" />
              <span>Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@email.com"
              className="w-full p-3 font-medium text-base border border-purple-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* phone number */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-base font-medium text-gray-700">
              <Phone className="h-5 w-5 text-purple-500" />
              <span>Téléphone</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="06 12 34 56 78"
              className="w-full p-3 font-medium text-base border border-purple-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* room type */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-base font-medium text-gray-700">
              <Bed className="h-5 w-5 text-purple-500" />
              <span>Type de Chambre</span>
            </label>
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleInputChange}
              className="w-full p-3 font-medium text-base border border-purple-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              required
            >
              <option value="simple">Simple</option>
              <option value="double">Double</option>
              <option value="suite">Suite Luxe</option>
            </select>
          </div>

          {/* check out date */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-base font-medium text-gray-700">
              <Calendar className="h-5 w-5 text-purple-500" />
              <span>Date d'arrivée</span>
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="w-full p-3 font-medium text-base border border-purple-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* check out date */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-base font-medium text-gray-700">
              <Clock className="h-5 w-5 text-purple-500" />
              <span>Date de départ</span>
            </label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              className="w-full p-3 font-medium text-base border border-purple-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        {/* prefs */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-base font-medium text-gray-700">
            <Heart className="h-5 w-5 text-purple-500" />
            <span>Préférences</span>
          </label>
          <textarea
            name="preferences"
            value={formData.preferences}
            onChange={handleInputChange}
            placeholder="Précisez vos demandes particulières..."
            className="w-full p-3 font-medium text-base border border-purple-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            rows="3"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl text-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          Créer la Réservation
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
