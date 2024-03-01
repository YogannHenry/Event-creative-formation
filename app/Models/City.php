<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class City extends Model
{
    use HasFactory;

    protected $fillable = [
        'city',
        'country',
    ];

    public function events(): HasMany
    {
        return $this->hasMany(Event::class);
    }

    public function spots()
    {
        return $this->hasMany(Spot::class);
    }

    public function cityEvent()
    {
        return $this->belongsToMany(Event::class, 'city_event', 'city_id', 'event_id');
    }
}
