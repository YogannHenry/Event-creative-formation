<?php

namespace App\Http\Controllers;

use App\Models\City;
use Illuminate\Http\Request;

class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cities = City::latest()->get();

        return Inertia::render('Events/Index', [
            'cities' => $cities,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'city' => 'required|string|max:35',
            'country' => 'required|string|max:255',

        ]);

        $request->cities()->create($validated);

        return redirect(route('events.index'));
}

    /**
     * Display the specified resource.
     */
    public function show(city $city)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(city $city)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, city $city)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(city $city)
    {
        //
    }
}
