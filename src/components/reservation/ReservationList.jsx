import React from "react";
import { Calendar, User, Bed, Phone, Mail, Edit, Trash2 } from "lucide-react";

const ReservationList = ({ onEdit, onDelete }) => {
  const reservations = [
    {
      id: "1",
      clientName: "Soukaina Zaid",
      email: "soukaina@example.com",
      phone: "0612345678",
      roomType: "Double",
      startDate: "2024-12-01",
      endDate: "2024-12-05",
    },
    {
      id: "2",
      clientName: "mohamed saad daali",
      email: "saad@example.com",
      phone: "0687654321",
      roomType: "Suite Luxe",
      startDate: "2024-12-10",
      endDate: "2024-12-15",
    },
  ];

  return (
    <div className="p-6">
      <div className="grid gap-4">
        {/* menu bar */}
        <div className="grid grid-cols-[2fr_2fr_1.5fr_1.5fr_0.8fr_2fr] gap-4 mb-2 px-4 text-base font-medium text-gray-600">
          <div>Client</div>
          <div>Contact</div>
          <div>Chambre</div>
          <div>Dates</div>
          <div>ID Réservation</div>
          <div className="text-center">Actions</div>
        </div>

        {/* reservations list */}
        {reservations.map((reservation) => (
          <div
            key={reservation.id}
            className="p-4 bg-white border border-gray-200 rounded-xl hover:border-purple-100 transition-all"
          >
            <div className="grid grid-cols-[2fr_2fr_1.5fr_1.5fr_0.8fr_2fr] gap-4 items-center text-base font-medium">
              {/* client */}
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-gray-400" />
                <span>{reservation.clientName}</span>
              </div>

              {/* phone number */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>{reservation.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>{reservation.phone}</span>
                </div>
              </div>

              {/* room type */}
              <div className="flex items-center gap-2">
                <Bed className="h-5 w-5 text-gray-400" />
                <span>{reservation.roomType}</span>
              </div>

              {/* dates */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <div>
                    <div>{reservation.startDate}</div>
                    <div>{reservation.endDate}</div>
                  </div>
                </div>
              </div>

              {/* reservation ID's */}
              <div className="text-center">
                <span className="text-gray-600">{reservation.id}</span>
              </div>

              {/* edit and delete buttons */}
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => onEdit(reservation.id)}
                  className="px-3 py-1.5 text-base font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center gap-1"
                >
                  <Edit className="h-4 w-4" />
                  <span>Modifier</span>
                </button>
                <button
                  onClick={() => onDelete(reservation.id)}
                  className="px-3 py-1.5 text-base font-medium bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors inline-flex items-center gap-1"
                >
                  <Trash2 className="h-4 w-4" />
                  <span>Supprimer</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReservationList;
