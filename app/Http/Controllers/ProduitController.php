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

   //afficher le formulaire de modification
   public function edit($id){
    $produit= Produit::findOrFail($id);
    return Inertia::render('Produits/Edit', ['produit' => $produit]);
   }

   //recevoir le formulaire de modification
   public function update(Request $request, $id){
    //validation de donnees
    $request->validate([
        'nom'=> 'required|min:3',
        'prix'=>'required|numeric|min:0'
    ]);
    //recuperer le produit
    $produit = Produit::findOrFail($id);
    //modifier le produit
    $produit->update([
        'nom'=>$request->nom,
        'prix'=>$request->prix
    ]);
    //redirection
    return redirect()->route('produits.index')->with('success','produit modifier');
   }
   //supprimer un produit
   public function destroy($id){
    $produit = Produit::findOrFail($id);
    $produit ->delete();
    return redirect()->route('produits.index')->with('success', 'produit supprimer');
   }


}
