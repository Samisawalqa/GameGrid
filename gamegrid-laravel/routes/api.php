<?php

use App\Http\Controllers\FieldController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\UserController;

Route::post('/login', function (Request $request) {
    $credentials = $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    if (!Auth::attempt($credentials)) {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    $request->session()->regenerate();

    return response()->json(['message' => 'Logged in successfully', 'user' => Auth::user()]);
});

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('user' ,[ UserController::class, 'store']);

Route::post('field' ,[ FieldController::class, 'store']);

Route::put('user/{id}/{detail}' ,[ UserController::class, 'update']);

Route::put('field/{id}/{detail}' ,[ FieldController::class, 'update']);

Route::delete('user/{id}', [UserController::class, 'destroy']);

Route::delete('field/{id}', [FieldController::class, 'destroy']);