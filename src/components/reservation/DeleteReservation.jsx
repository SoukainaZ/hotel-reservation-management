import React, { useState, useEffect } from "react";
import { AlertTriangle, User, Mail, Phone, Bed, Calendar } from "lucide-react";

const DeleteReservation = ({ reservationId }) => {
  const [reservation, setReservation] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    // kan3ytou ela data
    if (reservationId) {
      const mockReservation = {
        id: reservationId,
        clientName: "John Doe",
        email: "john@example.com",
        phone: "0612345678",
        roomType: "Double",
        startDate: "2024-12-01",
        endDate: "2024-12-05",
      };
      setReservation(mockReservation);
    }
  }, [reservationId]);

  const handleDelete = () => {
    console.log("Suppression de la réservation:", reservationId);
    // Add API call to delete a reservation (saad)
    setShowConfirmation(false);
  };

  if (!reservation) {
    return (
      <div className="p-6 text-center text-base font-medium text-gray-500">
        Chargement des détails de la réservation...
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="space-y-6">
        <div className="text-lg font-medium text-gray-700 mb-4">
          Suppression de la réservation #{reservationId}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4 text-base font-medium">
            {/* client infos */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">Client:</span>
                <span>{reservation.clientName}</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">Email:</span>
                <span>{reservation.email}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">Téléphone:</span>
                <span>{reservation.phone}</span>
              </div>
            </div>

            {/* reservation infos */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Bed className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">Type de chambre:</span>
                <span>{reservation.roomType}</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">Période:</span>
                <span>
                  {reservation.startDate} - {reservation.endDate}
                </span>
              </div>
            </div>
          </div>

          {!showConfirmation ? (
            <button
              onClick={() => setShowConfirmation(true)}
              className="w-full mt-6 bg-red-500 text-white py-3 px-6 rounded-xl text-base font-medium hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
            >
              <AlertTriangle className="h-5 w-5" />
              <span>Supprimer cette réservation</span>
            </button>
          ) : (
            <div className="mt-6 space-y-4">
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-center text-red-700 text-base font-medium">
                  Êtes-vous sûr de vouloir supprimer cette réservation ? Cette
                  action est irréversible.
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handleDelete}
                  className="flex-1 bg-red-500 text-white py-3 rounded-xl text-base font-medium hover:bg-red-600 transition-colors"
                >
                  Confirmer la suppression
                </button>
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl text-base font-medium hover:bg-gray-300 transition-colors"
                >
                  Annuler
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeleteReservation;
