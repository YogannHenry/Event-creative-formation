<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $events = Event::with('user:id,name')->latest()->get();

        return Inertia::render('Dashboard', [
            'events' => $events,
        ]);
    }
}
