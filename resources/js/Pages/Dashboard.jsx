import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Event from '@/Components/Event';


export default function Dashboard({ auth, events }) {
    return (<>

            <Head title="Dashboard" />

            <h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
           
    </>);
}
