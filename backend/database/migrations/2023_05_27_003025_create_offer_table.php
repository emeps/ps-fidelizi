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
        Schema::create('offer', function (Blueprint $table) {
            $table->id();
            $table->string('enterprise_name');
            $table->text('description');
            $table->string('image');
            $table->foreignId('reward_id');
            $table->foreign('reward_id')->references('id')->on('reward');
            $table->dateTime('date_opened');
            $table->dateTime('date_closed');
            $table->boolean('status');
            $table->integer('amount_registered');
            $table->integer('amount_available');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('offer');
    }
};
