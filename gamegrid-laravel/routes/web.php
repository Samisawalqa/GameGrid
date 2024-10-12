<?php

use Illuminate\Support\Facades\Route;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

require __DIR__.'/auth.php';

 
Route::get('/user', function () {
    $users = User::withTrashed()->latest()->get();
    return new UserResource($users);
});
 
Route::get('/user/{id}', function (string $id) {
    return new UserResource(User::findOrFail($id));
});



 