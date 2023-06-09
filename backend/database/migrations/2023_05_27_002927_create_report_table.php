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
        Schema::create('report', function (Blueprint $table) {
            $table->id();
            $table->string('enterprise_name');
            $table->text('description');
            $table->text('reward');
            $table->integer('amount_remaining');
            $table->integer('amount_actived');
            $table->boolean('offer_active');
            $table->dateTime('date_created');
            $table->integer('date_remaining');
            $table->dateTime('date_executed');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('report');
    }
};
