<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'position', 'department', 'active',
    ];
    protected $appends = ['status'];

    public function getStatusAttribute() {
        return $this->active ? 'Active' : 'In-Active';
    }
}
