<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'tickets_sold',
        'tickets_available',
        'tickets_price',
        'tickets_total',
        'event_id'
    ];

    public function events()
{
    return $this->belongsTo(Event::class);
}
}




