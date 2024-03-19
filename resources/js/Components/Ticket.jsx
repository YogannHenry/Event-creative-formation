import React, { useState } from "react";
import { post, route } from "@inertiajs/inertia";
import NavLink from "@/Components/NavLink";


export default function TicketPurchase({ ticket }) {
    console.log("ticket", ticket);

    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setSelectedQuantity(parseInt(e.target.value));
    };

    const totalPrice = ticket.price * selectedQuantity;

    const buyTicket = () => {
        const updatedTicket = {
            ...ticket,
            sold: selectedQuantity,
            tickets_available: ticket.tickets_available - selectedQuantity
        };

        post(route("tickets.update", { ticket: ticket.id }), { data: updatedTicket });
        alert(`Achat de ${selectedQuantity} tickets pour un total de ${totalPrice}`);
    };

    return (
        <div>
            <div className="flex">
                <p>Acheter un ticket</p>
                <p>{ticket.name}</p>
            </div>
            <div className="flex">
                <p>Tickets disponibles: {ticket.tickets_available}</p>
            </div>
            <div className="flex">
                <p>Prix unitaire: {ticket.price}</p>
                <input
                    type="number"
                    min="1"
                    max={ticket.tickets_available}
                    value={selectedQuantity}
                    onChange={handleQuantityChange}
                />
            </div>
            <div className="flex">
                <p>Prix total: {totalPrice}</p>
            </div>
            <button onClick={buyTicket}>Acheter</button>
        </div>
    );
}
