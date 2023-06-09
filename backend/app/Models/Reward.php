<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reward extends Model
{
    use HasFactory;
   public $table = 'reward';
    protected $fillable = [
        'description',
        'code',
    ];
   
    public function offers()
    {
        return $this->hasMany(Offer::class);
    }
}
