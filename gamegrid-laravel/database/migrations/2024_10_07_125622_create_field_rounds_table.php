<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('field_rounds', function (Blueprint $table) {
            $table->id();
            $table->timestamp('start_at');
            $table->integer('end_after');
            $table->integer('price');
            $table->foreignIdFor(\App\Models\Field::class)->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('field_round');
    }
};
