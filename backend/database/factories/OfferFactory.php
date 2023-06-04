<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Offer>
 */
class OfferFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'enterprise_name' => $this->faker->company,
            'description' => $this->faker->text,
            'image' => "http://lorempixel.com.br/500/400/?".$this->faker->randomNumber(),
            'reward_id' => $this->faker->numberBetween(1, 10),
            'date_opened' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'date_closed' => $this->faker->dateTimeBetween('now', '+1 year'),
            'status' => $this->faker->randomElement([0 , 1]),
            'amount_registered' => $this->faker->numberBetween(0, 100),
            'amount_available' => $this->faker->numberBetween(0, 100),

        ];
    }
}
