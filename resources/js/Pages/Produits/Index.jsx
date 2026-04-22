import { Link, useForm } from "@inertiajs/react";

function Index({produits}){
    const {delete : destroy, processing} = useForm();

    function handleDelete(id){
        if(confirm('supprimer ce produit ?')){
            destroy(`/produits/${id}`);
        }
    }
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
                                <li key={produit.id}>{produit.nom} - {produit.prix} FCFA
                                    <Link href={`/produits/${produit.id}/edit`}>
                                        <button>Modifier</button>
                                    </Link>
                                    <button onClick={() => handleDelete(produit.id)} disabled={processing} >supprimer</button>
                                </li>
                            ))}
                        </ul>
                )}
        </div>
    );
}
export default Index;