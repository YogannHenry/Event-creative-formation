<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;


class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $events = Event::with('user:id,name')->latest()->get();

        return Inertia::render('Events/Index', [
            'events' => $events,
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
    public function store(Request $request)
    {
            $validated = $request->validate([
                'name' => 'required|string|max:35',
                'description' => 'required|string|max:255',
                'text' => 'required|string|max:255',
                'imageUrl' => 'required|string|max:255',
                'start_date' => 'required|date',
                'end_date' => 'required|date',

            ]);

            $request->user()->events()->create($validated);

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
