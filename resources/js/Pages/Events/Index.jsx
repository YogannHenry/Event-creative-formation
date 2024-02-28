import React from 'react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';
import Event from '@/Components/Event';

export default function Index({ auth, events }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('events.store'), { onSuccess: () => reset() });
    };

    console.log("events", events);

    return (<>
            <Head title="Events" />

                    {events.map(event =>
                        <Event key={event.id} event={event} />
                    )}

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <textarea
                        value={data.name}
                        placeholder="Name event"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('name', e.target.value)}
                    ></textarea>
                    <InputError message={errors.name} className="mt-2" />
                    <textarea
                        value={data.description}
                        placeholder="description event"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('description', e.target.value)}
                    ></textarea>
                    <InputError message={errors.description} className="mt-2" />
                    <textarea
                        value={data.text}
                        placeholder="text event"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('text', e.target.value)}
                    ></textarea>
                    <InputError message={errors.text} className="mt-2" />
                    <textarea
                        value={data.imageUrl}
                        placeholder="imageUrl event"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('imageUrl', e.target.value)}
                    ></textarea>
                    <InputError message={errors.imageUrl} className="mt-2" />
                    <input
                        type="date"
                        value={data.start_date}
                        onChange={e => setData('start_date', e.target.value)}
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-2"
                    />
                    <InputError message={errors.start_date} className="mt-2" />

                    <input
                        type="date"
                        value={data.end_date}
                        onChange={e => setData('end_date', e.target.value)}
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-2"
                    />
                    <InputError message={errors.end_date} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>Créer</PrimaryButton>
                </form>
            </div>
</>
    );
}
