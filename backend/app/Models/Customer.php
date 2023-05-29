<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    public $table = 'customer';
    protected $fillable = ['fullname', 'email', 'cpf', 'date_birth', 'phone'];
}
