<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;
    public $table = 'report';
    protected $fillable = [
        'enterprise_name',
        'description',
        'reward',
        'amount_remaining',
        'amount_actived',
        'offer_active',
        'date_created',
        'date_remaining',
        'date_executed',
    ];
}
