import { useForm, Link } from "@inertiajs/react";

function Edit({produit}){

    const {data, setData, put, processing, errors} = useForm({
        nom:produit.nom,
        prix:produit.prix
    });

    function handleSubmit(e){
        e.preventDefault(),
        put(`/produits/${produit.id}`);
    }
    return(
        <div>
            <h1>modifier produit</h1>

            {errors.nom && <P style={{color: 'red'}}>{errors.nom}</P>}
            {errors.prix && <p style={{color: 'red'}}>{errors.prix}</p>}

            <form onSubmit={handleSubmit}>
                    <div>
                        <label > Nom :</label>
                        <input type="text" 
                        placeholder="nom produit"
                        value={data.nom}
                        onChange={(e) => setData('nom', e.target.value)}/>
                    </div>
                <div>
                    <label >Prix :</label>
                    <input type="number" 
                    placeholder="prix produit"
                    value={data.prix}
                    onChange={(e) => setData('prix', e.target.value)}/>
                </div>
                <button type="submit" disabled={processing}>
                    {processing ? 'Envoi..' : 'Modifier'}
                </button>
            </form>
            <Link href="/produits">retour a la liste</Link>
        </div>
    );
}
export default Edit;