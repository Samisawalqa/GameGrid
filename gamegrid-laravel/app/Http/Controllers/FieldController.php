<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Field;
use Illuminate\Http\Request;

class FieldController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'field_name' => 'required|string|max:255|unique:fields',
            'field_description' => 'required|string|max:255|',
            'field_address' => 'required|string',
            'field_capacity' => 'required|string|min:0',
            'price_per_hour' => 'required|string|min:0',
            'user_id' => 'required|exists:users,id',
        ]);
    
        // Now proceed to create the user
        $field = new Field();
        $field->field_name = $request->field_name;
        $field->field_description = $request->field_description;
        $field->field_address = $request->field_address;
        $field->field_capacity = $request->field_capacity;
        $field->price_per_hour = $request->price_per_hour;
        $field->user_id = $request->user_id;
    
        $field->save();
    
        return response()->json(['message' => 'Field created successfully!']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id, string $detail)
    {
        $field = Field::findOrFail($id);
        $field->$detail = $request->$detail;
        $field->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $field = Field::findOrFail($id);
        $field->delete();
        return response()->json(['message' => 'Field deleted successfully!']);
    }
}
