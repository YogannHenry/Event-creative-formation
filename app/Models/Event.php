<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'text',
        'imageUrl',
        'start_date',
        'end_date',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function cities(): BelongsToMany
    {
        return $this->belongsToMany(City::class)->withTimestamps();
    }

    public function spots(): BelongsToMany
    {
        return $this->belongsToMany(Spot::class, 'spot_event', 'event_id', 'spot_id')->withTimestamps();
    }
}
