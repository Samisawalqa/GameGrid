<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Field>
 */
class FieldFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
                'field_name' => $this->faker->name(),
                'field_description' => $this->faker->sentence(),
                'field_address' => $this->faker->name(),
                'field_capacity' => $this->faker->randomElement([5,10,15,20]),
                'price_per_hour' => $this->faker->randomElement([5,10,15,20]),
                'user_id' => User::factory(),
                'created_at' => now(),
                'updated_at' => now(),
        ];
    }
}
