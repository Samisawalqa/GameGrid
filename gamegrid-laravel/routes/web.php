<?php

use Illuminate\Support\Facades\Route;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Http\Resources\FieldResource;
use App\Models\Field;
use App\Http\Resources\Field_bookingResource;
use App\Models\Field_Booking;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/user/{id}', function (string $id) {
    return new UserResource(User::findOrFail($id));
});

Route::get('/field/{id}', function (string $id) {
    return new FieldResource(Field::findOrFail($id));
});

Route::get('/booking/{id}', function (string $id) {
    return new Field_bookingResource(Field_Booking::findOrFail($id));
});