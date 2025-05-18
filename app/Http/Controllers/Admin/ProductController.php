<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    public function list_products(){
        $categories =Category::latest()->get();
        $products =Product::with('category')->latest()->get();

        return Inertia::render('dashboard/products/index',[
            'categories'=>$categories,
            'products'=>$products
        ]);
    }
    public function save_product(Request $request){
        $request->validate([
            'name'=>'string|required|max:255',
            'category_id'=>'string|required',
            'colors'=>'array|nullable',
            'features'=>'array|nullable',
            'description'=>'string|nullable',
            'image'=>'image|nullable|max:2048',
            'images' => 'nullable|array',
            'images.*' => 'image|max:2048',
            'is_featured' => 'boolean',
          ]);

        //   Slug
          $slug = Str::slug($request->name);
          $image ='';
          $images =[];
        //   Image
        if($request->hasFile('image')){
        $image = $request->file('image')->store('products','public');
        }
        $images = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $images[] = $image->store('products/images', 'public');
            }
        }

          $new_product =[
            'name' =>$request->name,
        'slug'=>$slug,
        'colors' =>$request->colors,
        'image'=>$image,
        'description'=>$request->description,
        'is_featured'=>$request->is_featured,
        'price'=>$request->price,
        'original_price'=>$request->original_price,
        'features'=>$request->features,
        'images'=>$images,
        'category_id'=>$request->category_id,
        ];

          $prod =Product::create($new_product);
        //   dd($prod);
          return to_route('dashboard.products.index');
    }
}
