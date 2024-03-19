import React from "react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";

export default function Index({ auth, tickets, cities, spots }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: "",
        tickets_available: 0,
        tickets_price: 0
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((formData) => ({
            ...formData,
            [name]: value
        }));
        console.log("data", data);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("tickets.store"), { data: data, onSuccess: reset });
    };

    return (
        <div className="relative">
            <Head title="Events" />

            <div className="w-full flex justify-center p-4 bg-slate-800 border border-gray-200 rounded-lg shadow sticky top-0 ">
                <div className="p-4">
                    <div>
                            <p>Créer un ticket</p>
                            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                                <h2 className="text-xl font-semibold p-2 border radius-2xl bg-slate-800 text-white">
                                    Create Event:
                                </h2>
                                <form onSubmit={submit}>
                                    <input
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        placeholder="ticket name"
                                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                        onChange={handleInputChange}
                                    ></input>
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                    <input
                                        type="number"
                                        name="tickets_available"
                                        value={data.tickets_available}
                                        placeholder="ticket disponible"
                                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                        onChange={handleInputChange}
                                    ></input>
                                    <InputError
                                        message={errors.tickets_available}
                                        className="mt-2"
                                    />
                                    <input
                                        type="number"
                                        name="tickets_price"
                                        value={data.tickets_price}
                                        placeholder="ticket prix"
                                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                        onChange={handleInputChange}
                                    ></input>
                                    <InputError
                                        message={errors.tickets_price}
                                        className="mt-2"
                                    />

                                    <PrimaryButton className="mt-4">
                                        Créer
                                    </PrimaryButton>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}
