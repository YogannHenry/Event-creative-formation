<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Spot extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'capacity',
        'imageUrl',
        'city_id',
    ];

    public function events(): HasMany
    {
        return $this->hasMany(Event::class);
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function spotEvent()
    {
        return $this->belongsToMany(Event::class);
    }
}
