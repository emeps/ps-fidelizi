<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Offer extends Model
{
    use HasFactory;
    public $table = 'offer';
    protected $fillable = [
        'enterprise_name',
        'description',
        'image',
        'reward_id',
        'date_opened',
        'date_closed',
        'status',
        'amount_registered',
        'amount_available',
    ];

    public function reward():BelongsTo
    {
        return $this->belongsTo(Reward::class);
    }
    public function users():BelongsToMany{
        return $this->belongsToMany(User::class)->using(OfferUser::class);
    }
}
