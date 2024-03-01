import React, { useState } from "react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/react";
import Event from "@/Components/Event";
import EventPreview from "@/Components/EventPreview";

export default function Index({ auth, events, cities, spots }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: "",
        description: "",
        text: "",
        imageUrl: "",
        start_date: "",
        end_date: "",
        city: "",
        country: "",
        spotName: "",
        capacity: "",
        spotImageUrl: "",
    });

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        text: "",
        imageUrl: "",
        start_date: "",
        end_date: "",
        city: "",
        country: "",
        spotName: "",
        capacity: "",
        spotImageUrl: "",
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    console.log("formData", formData);
    const submit = (e) => {
        console.log("e", e)
        e.preventDefault();
        post(route("events.store"), {  onSuccess: () => reset() });
        setData(formData); 
    };

    return (
        <div className="relative">
            <Head title="Events" />

            <div className="w-full flex justify-center p-4 bg-slate-800 border border-gray-200 rounded-lg shadow sticky top-0 ">
                {/* {events.map((event) => (
                <Event key={event.id} data={event} />
            ))} */}

                <EventPreview
                    data={formData}
                    handleInputChange={handleInputChange}
                />
            </div>

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <h2 className="text-xl font-semibold p-2 border radius-2xl bg-slate-800 text-white">
                    Create Event:
                </h2>
                <form onSubmit={submit}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="Name event"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={handleInputChange}
                    ></input>
                    <InputError message={errors.name} className="mt-2" />
                    <textarea
                        name="description"
                        value={formData.description}
                        placeholder="description event"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={handleInputChange}
                    ></textarea>
                    <InputError message={errors.description} className="mt-2" />
                    <textarea
                        name="text"
                        value={formData.text}
                        placeholder="text event"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={handleInputChange}
                    ></textarea>
                    <InputError message={errors.text} className="mt-2" />
                    <textarea
                        name="imageUrl"
                        value={formData.imageUrl}
                        placeholder="imageUrl event"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={handleInputChange}
                    ></textarea>
                    <InputError message={errors.imageUrl} className="mt-2" />
                    <input
                        name="start_date"
                        type="date"
                        value={formData.start_date}
                        onChange={handleInputChange}
                        className="block  border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-2"
                    />
                    <InputError message={errors.start_date} className="mt-2" />

                    <input
                        name="end_date"
                        type="date"
                        value={formData.end_date}
                        onChange={handleInputChange}
                        className="block  border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-2"
                    />
                    <InputError message={errors.end_date} className="mt-2" />
                    {/* ************************city  *******************************/}
                    {/* ************************city  *******************************/}
                    {/* ************************city  *******************************/}
                    {/* ************************city  *******************************/}
                    {/* ************************city  *******************************/}
                    {/* ************************city  *******************************/}

                    <h2 className="text-xl mt-4 font-semibold p-2 border radius-2xl bg-slate-800 text-white">
                        Add a city:
                    </h2>

                    <label
                        for="countries"
                        class="block mb-2 text-sm p-2 font-medium text-gray-900 dark:text-white"
                    >
                        Select an option or create one:
                    </label>
                    <select
                        value={formData.city}
                        onChange={handleInputChange}
                        name="city"
                        id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option selected>Choose a city</option>
                        {cities.map((city) => (
                            <option key={city.id}>
                                <p className="mr-2"> {city.city}</p>
                            </option>
                        ))}
                    </select>
                    <input
                        name="city"
                        type="text"
                        value={formData.city}
                        placeholder="Name city"
                        onChange={handleInputChange}
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-2"
                    />
                    <input
                        name="country"
                        type="text"
                        value={formData.country}
                        placeholder="Name country"
                        onChange={handleInputChange}
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-2"
                    />

                    <InputError message={errors.end_date} className="mt-2" />
                    {/* ************************city  *******************************/}
                    {/* ************************city  *******************************/}
                    {/* ************************city  *******************************/}
                    {/* ************************city  *******************************/}
                    {/* ************************city  *******************************/}
                    {/* ************************city  *******************************/}
                    {/* ************************city  *******************************/}

                    {/* ************************spot  *******************************/}
                    {/* ************************spot  *******************************/}
                    {/* ************************spot  *******************************/}
                    {/* ************************spot  *******************************/}
                    {/* ************************spot  *******************************/}
                    {/* ************************spot  *******************************/}

                    <h2 className="text-xl mt-4 font-semibold p-2 border radius-2xl bg-slate-800 text-white">
                        Add a spot:
                    </h2>

                    <label
                        for="countries"
                        class="block mb-2 text-sm p-2 font-medium text-gray-900 dark:text-white"
                    >
                        Select an option or create one:
                    </label>
                    <select
                        name="spotName"
                        value={formData.spotName}
                        onChange={handleInputChange}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option selected>Choose a spot</option>
                        {spots.map((spot) => (
                            <option key={spot.id}>
                                <p className="mr-2"> {spot.name}</p>
                            </option>
                        ))}
                    </select>
                    <input
                        name="spotName"
                        type="text"
                        value={formData.spotName}
                        placeholder="Name spotName"
                        onChange={handleInputChange}
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-2"
                    />
                    <input
                        name="capacity"
                        type="number"
                        value={formData.capacity}
                        placeholder="Name capacity"
                        onChange={handleInputChange}
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-2"
                    />
                    <input
                        name="spotImageUrl"
                        type="text"
                        value={formData.spotImageUrl}
                        placeholder="Name spotImageUrl"
                        onChange={handleInputChange}
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-2"
                    />

                    <InputError message={errors.end_date} className="mt-2" />
                    {/* ************************spot  *******************************/}
                    {/* ************************spot  *******************************/}
                    {/* ************************spot  *******************************/}
                    {/* ************************spot  *******************************/}
                    {/* ************************spot  *******************************/}
                    {/* ************************spot  *******************************/}
                    {/* ************************spot  *******************************/}
                    <PrimaryButton className="mt-4" >
                        Créer
                    </PrimaryButton>
                </form>
            </div>
        </div>
    );
}
