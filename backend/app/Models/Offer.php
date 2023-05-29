<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
