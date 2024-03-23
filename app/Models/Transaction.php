<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $primaryKey = 'transaction_id';

    protected $fillable = ['email', 'nickname', 'password', 'notes', 'phone_number', 'login_via', 'payment_gateway', 'product_id', 'payment_id'];

    protected $hidden = ['password'];

    // public function invoice()
    // {
    //     return $this->belongsTo(Invoice::class, 'transaction_id', 'transaction_id');
    // }

    public function product()
    {
        return $this->hasOne(Product::class, 'product_id', 'product_id');
    }
}
