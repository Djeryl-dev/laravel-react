import { Link } from "@inertiajs/react";

function Index({produits}){
    return (
        <div>
            <h1>liste des produits</h1>

            <Link href="/produits/create">
                <button>ajouter un produit</button>
            </Link>

                {produits.length === 0 ? (
                    <p>aucun produit</p>
                    ) : (
                        <ul>
                            {produits.map((produit) => (
                                <li key={produit.id}>{produit.nom} - {produit.prix} FCFA</li>
                            ))}
                        </ul>
                )}
        </div>
    );
}
export default Index;