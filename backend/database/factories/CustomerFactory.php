<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Customer>
 */
class CustomerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'fullname' => $this->faker->name,
            'email' => $this->faker->email,
            'cpf' => strval($this->faker->numberBetween(01000000000,99999999999)),
            'date_birth' => $this->faker->date(),
            'phone' => strval($this->faker->phoneNumber),
        ];
    }
}
