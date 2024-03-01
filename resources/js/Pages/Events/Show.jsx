import React from "react";
import {  Head } from "@inertiajs/react";
import Event from "@/Components/Event";

export default function Index({ events }) {
    
    return (
        <div className="flex ">
            <Head title="Events" />

            <div className="w-full flex  flex-col  items-center gap-4 justify-center p-4 bg-slate-800 border border-gray-200 rounded-lg shadow ">
                {events.map((event) => (
                <Event key={event.id} data={event} />
            ))}

        </div>
        </div>
    );
}
