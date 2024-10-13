<?php

use App\Http\Controllers\FieldController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('user' ,[ UserController::class, 'store']);

Route::post('field' ,[ FieldController::class, 'store']);

Route::put('user/{id}/{detail}' ,[ UserController::class, 'update']);

Route::put('field/{id}/{detail}' ,[ FieldController::class, 'update']);

Route::delete('user/{id}', [UserController::class, 'destroy']);

Route::delete('field/{id}', [FieldController::class, 'destroy']);
