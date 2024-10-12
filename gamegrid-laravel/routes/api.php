<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('user' ,[ UserController::class, 'store']);

Route::put('user/{id}/{detail}' ,[ UserController::class, 'update']);

Route::delete('user/{id}', [UserController::class, 'destroy']);

