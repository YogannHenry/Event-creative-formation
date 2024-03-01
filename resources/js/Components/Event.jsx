import React from "react";
import Dropdown from "@/Components/Dropdown";

export default function Event({ data }) {
    return (
        <a
            href="#"
            className="flex flex-col w-fit items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
            <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={data.imageUrl}
                alt={data.name}
                
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {data.text}
                </p>
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.city}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {data.country}
                </p>
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.spotName}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {data.country}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {data.capacity}
                </p>
            </div>
            <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={data.spotImageUrl}
                alt={data.spotName}
            />

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
