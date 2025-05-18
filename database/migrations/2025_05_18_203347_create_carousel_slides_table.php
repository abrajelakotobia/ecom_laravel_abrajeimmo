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
        Schema::create('carousel_slides', function (Blueprint $table) {
         $table->id();
         $table->string('title');
        $table->string('subtitle')->nullable();
        $table->text('description');
        $table->string('button_text');
        $table->string('button_link');
        $table->string('image_path');
        $table->string('mobile_image_path')->nullable();
        $table->string('text_color')->default('text-gray-900');
        $table->string('overlay_color');
        $table->enum('alignment', ['left', 'right', 'center'])->default('left');
        $table->string('badge')->nullable();
        $table->decimal('price', 10, 2)->nullable();
        $table->decimal('original_price', 10, 2)->nullable();
        $table->integer('discount')->nullable();
        $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carousel_slides');
    }
};
