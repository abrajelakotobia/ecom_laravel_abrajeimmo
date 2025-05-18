<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Category;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function save_category(Request $request){
      $request->validate([
        'name'=>'string|required|max:255',
        'color'=>'string|required',
        'description'=>'string|nullable',
        'image'=>'image|nullable|max:2048'
      ]);

    //   Slug
      $slug = Str::slug($request->name);
      $image ='';
    //   Image
    if($request->hasFile('image')){
        $image = $request->file('image')->store('categories','public');
    }
      $new_category =[
        'name'=> $request->name,
        'slug'=>$slug,
        'image'=> $image,
        'color'=> $request->color,
    ];
      $cat =Category::create($new_category);

      return to_route('dashboard.categories.index');

    }

    public function list_categories(){
        $categories =Category::latest()->get();

        return Inertia::render('dashboard/categories/index',[
            'categories'=>$categories
        ]);
    }
}
