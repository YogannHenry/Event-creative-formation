import React from "react";
import Dropdown from "@/Components/Dropdown";

export default function Event({ data }) {
    console.log("dateEvent", data);
    const cityName = data.cities && data.cities.length > 0 ? data.cities[0].city : "N/A";
    const countryName = data.cities && data.cities.length > 0 ? data.cities[0].country : "N/A";
    const spotName = data.spots && data.spots.length > 0 ? data.spots[0].name : "N/A";
    const capacity = data.spots && data.spots.length > 0 ? data.spots[0].capacity : "N/A";
    const startDate = data.start_date || "N/A";
    const endDate = data.end_date || "N/A";
    const spotImageUrl = data.spots && data.spots.length > 0 ? data.spots[0].imageUrl : "N/A";

    return (
        <a
        href="#"
        className="flex  h-64 flex-col w-4/6  justify-between items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
        <div className="w-1/3">
        <img
            className="object-cover w-full max-h-64 rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg "
            src={data.imageUrl}
            alt={data.name}
        />
        </div>
        <div className="flex flex-col justify-evenly  w-1/3 leading-normal h-full border-x-2  ">
            <div className="flex flex-col justify-between ">
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 ">
                    Venez découvrir:
                </p>
                <h5 className="mb-1 text-2xl font-bold tracking-tight text-cyan-800">
                    {data.name}
                </h5>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 border-b-2 border-black">
                    {data.text}
                </p>
            </div>
            <div className="flex flex-col justify-between">
                <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                   Ville: {cityName}
                </h5>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                    Pays: {countryName}
                </p>
            </div>
        </div>

        <div className="flex flex-col justify-evenly w-1/3 h-full items-end p-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {spotName}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {capacity}places disponibles
            </p>
            <p>Du {startDate} au {endDate}</p>

                <img
                    className="object-cover max-h-36 rounded-lg  md:h-auto md:w-52  "
                    src=  {spotImageUrl}
                    alt=  {spotName}
                />
        </div>

            <div className="p-4">
                <Dropdown>
                    <Dropdown.Trigger>
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                        </button>
                    </Dropdown.Trigger>
                    <Dropdown.Content>
                        <Dropdown.Link
                            as="button"
                            href={route("events.destroy", data.id)}
                            method="delete"
                        >
                            Delete
                        </Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
            </div>
        </a>
    );
}
