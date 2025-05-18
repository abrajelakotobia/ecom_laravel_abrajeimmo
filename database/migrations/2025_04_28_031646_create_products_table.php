<?php

use App\Models\Category;
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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('category_id');
            $table->string('slug')->unique();
            $table->decimal('price',10,2)->default(0);
            $table->decimal('original_price',10,2)->default(0);
            $table->decimal('rating',2,1)->default(4);
            $table->integer('review_count')->default(50);
            $table->text('description')->nullable();
            $table->json('features')->nullable();
            $table->string('image')->nullable();
            $table->json('images')->nullable();
            $table->json('colors')->nullable();
            $table->json('sizes')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->boolean('in_stock')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
