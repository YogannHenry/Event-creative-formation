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
        Schema::table('tickets', function(Blueprint $table){
            $table->integer('tickets_sold')->nullable()->change();
            $table->integer('tickets_available')->nullable()->change();
            $table->integer('tickets_price')->nullable()->change();
            $table->integer('tickets_total')->nullable()->change();
            $table->foreignId('event_id')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tickets', function(Blueprint $table){
            $table->integer('tickets_sold')->change();
            $table->integer('tickets_available')->change();
            $table->integer('tickets_price')->change();
            $table->integer('tickets_total')->change();
            $table->foreignId('event_id')->change();
        });
    }
};
