<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PrivateProfile extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nickname','img'
    ];

    public function user() {
        return $this->belongsTo('App\User');
    }
}
