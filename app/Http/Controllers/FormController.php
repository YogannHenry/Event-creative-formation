<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\City;
use App\Models\Spot;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;


class FormController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $events = Event::with(['cities', 'user', 'spots'])->latest()->get();
        // dd($events->toArray());
        $cities = City::latest()->get();
        $spots = Spot::latest()->get();

        return Inertia::render('Events/Index', [
            'events' => $events,
            'cities' => $cities,
            'spots' => $spots,
        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */

         //     $eventData = $request->validate([
        //         'name' => 'required|string|max:35',
        //         'description' => 'required|string|max:255',
        //         'text' => 'required|string|max:255',
        //         'imageUrl' => 'required|string|max:255',
        //         'start_date' => 'required|date',
        //         'end_date' => 'required|date',

        //     ]);

        // $event = $request->user()->events()->create($eventData);

        // $cityData = $request->validate([
        //     'city' => 'required|string|max:35',
        //     'country' => 'required|string|max:255',

        // ]);

        // $city= $request->cities()->create($cityData);

        // $event->cities()->attach($city);
    public function store(Request $request)
    {

        $request->validate([
                'name' => 'required|string|max:35',
                'description' => 'required|string|max:255',
                'text' => 'required|string|max:255',
                'imageUrl' => 'required|string|max:255',
                'start_date' => 'required|date',
                'end_date' => 'required|date',
                'city' => 'required|string|max:35',
                'country' => 'required|string|max:255',
                'spotName' => 'required|string|max:35',
                'capacity' => 'required|integer',
                'spotImageUrl' => 'required|string|max:255',
        ]);



        // Check si on envoie l'id d'une ville et si oui récupérer la ville

        if(!$request->has('city_id') || !$city = City::find($request->city_id)){
            $city = City::create([
                'city' => $request->city,
                'country' => $request->country,
            ]);
        }


        if(!$request->has('spot_id') || !$spot = Spot::find($request->spot_id)){
            $spot = Spot::create([
                'name' => $request->spotName,
                'capacity' => $request->capacity,
                'imageUrl' => $request->spotImageUrl,
                'city_id' => $city->id,
            ]);
        }


        $event = auth()->user()->events()->create([
            'name' => $request->name,
            'description' => $request->description,
            'text' => $request->text,
            'imageUrl' => $request->imageUrl,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
        ]);

        $event->cities()->attach($city);
        $event->spots()->attach($spot);

        //City_event::create(['city_id' => $city->id, 'event_id' => $event->id]);

        return redirect(route('events.index'));
    }
    /**
     * Display the specified resource.
     */
    public function show(events $events)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(events $events)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, events $events)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        $event->delete();

        return redirect(route('events.index'));
    }

}
