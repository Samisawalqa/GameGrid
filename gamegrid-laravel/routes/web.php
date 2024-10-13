<?php

use Illuminate\Support\Facades\Route;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Http\Controllers\UserController;
use App\Http\Resources\FieldResource;
use App\Models\Field;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

require __DIR__.'/auth.php';

 
Route::get('/user', function () {
    $users = User::withTrashed()->latest()->get();
    return new UserResource($users);
});
 
 
Route::get('/fields', function () {
    $fields = Field::withTrashed()->latest()->get();
    return new UserResource($fields);
});
 
Route::get('/user/{id}', function (string $id) {
    return new UserResource(User::findOrFail($id));
});

 
Route::get('/field/{id}', function (string $id) {
    return new FieldResource(Field::findOrFail($id));
});



 