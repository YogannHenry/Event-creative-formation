import React from "react";
import Dropdown from "@/Components/Dropdown";

export default function Event({ data }) {
    return (
        <a
            href="#"
            className="flex sticky top-0  h-64 flex-col w-4/6  justify-between items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
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
                       Ville: {data.city}
                    </h5>
                    <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                        Pays: {data.country}
                    </p>
                </div>
            </div>

            <div className="flex flex-col justify-evenly w-1/3 h-full items-end p-4">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.spotName}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {data.capacity} places disponibles
                </p>
                <p>Du { data.start_date } au { data.end_date }</p>

                    <img
                        className="object-cover w-full rounded-lg  md:h-auto md:w-52  "
                        src={data.spotImageUrl}
                        alt={data.spotName}
                    />
            </div>
        </a>
    );
}
