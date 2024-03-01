import React from "react";
import Dropdown from "@/Components/Dropdown";

export default function Event({ data }) {
    return (
        <a
            href="#"
            className="flex sticky top-0  h-64 flex-col w-fit items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
            <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={data.imageUrl}
                alt={data.name}
            />
            <div className="flex flex-col justify-evenly p-4 leading-normal bg-red-200 w-1/3 h-full ">
                <div className="flex flex-col justify-between bg-green-300">
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
                <div className="flex flex-col justify-between bg-blue-400">
                    <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {data.city}
                    </h5>
                    <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                        {data.country}
                    </p>
                </div>
            </div>

            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.spotName}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {data.capacity}
                </p>
            </div>
            <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={data.spotImageUrl}
                alt={data.spotName}
            />
        </a>
    );
}
