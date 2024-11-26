import axios from "axios";

const API_URL = "votre_url_api";

export const reservationService = {
  // create reservation (à mettre à jour saad)
  createReservation: async (reservationData) => {
    try {
      const response = await axios.post(
        `${API_URL}/reservations`,
        reservationData
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // upload all reservations (à mettre à jour saad)
  getReservations: async () => {
    try {
      const response = await axios.get(`${API_URL}/reservations`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // update reservation (à mettre à jour saad)
  updateReservation: async (id, reservationData) => {
    try {
      const response = await axios.put(
        `${API_URL}/reservations/${id}`,
        reservationData
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // delete reservation (à mettre à jour saad)
  deleteReservation: async (id) => {
    try {
      await axios.delete(`${API_URL}/reservations/${id}`);
      return true;
    } catch (error) {
      throw error;
    }
  },
};
