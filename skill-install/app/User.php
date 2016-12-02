<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'confirmation_token', 'confirmed_at', 'confirmation_sent_at'
    ];

    // メール確認用tokenの生成
    public function makeConfirmationToken($key) {
        $this->confirmation_token = hash_hmac(
            'sha256',
            str_random(40).$this->email,
            $key
        );
        return $this->confirmation_token;
    }

    public function confirm() {
        $this->confirmed_at = Carbon::now();
        $this->confirmation_token = '';
    }

    public function isConfirmed() {
        return ! empty($this->confirmed_at);
    }

    public function profile() {
        return $this->hasOne('App\Profile');
    }

    public function privateProfile() {
        return $this->hasOne('App\PrivateProfile');
    }
}
