<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Produit;
use GuzzleHttp\Promise\Create;

class ProduitController extends Controller
{
    //
    //afficher la liste
    public function index(){
        $produits = Produit::all();
        return Inertia::render('Produits/Index', ['produits' => $produits]);
    }
   //afficher le formulaire
   public function create() {

    return Inertia::render('Produits/Create');

   }

   //recevoir le formulaire
   public function store(Request $request){
    //validation des donnees
    $request->validate([
        'nom'=> 'required|min:3',
        'prix'=> 'required|numeric|min:0'
    ]);

    //sauvegarde
    Produit::create([
        'nom'=>$request->nom,
        'prix'=>$request->prix
    ]);

    //redirection
    return redirect()->route('produits.create')->with('success' ,'produit ajouter !');
   }


}
