import { useForm } from "@inertiajs/react";

function Create({ flash }){

    //on defint tout ce qui est lier au form
    const {data, setData, post, processing, errors} = useForm({
        nom:'',
        prix:''
    });

    function Handlesubmit(e){
        e.preventDefault();//evite la recharge de la page
        post('/produits');//envoie a laravel
    }


    return (
        <div>
            <h1>ajouter un produit</h1>

            {flash?.success && (
                <div style={{ backgroundColor: 'green', color: 'white', padding: '10px' }}>
                    {flash.success}
                </div>
            )}

            {errors.nom && <p style={{color: 'red'}}>{errors.nom}</p> }
            {errors.prix && <p style={{color: 'red'}}>{errors.prix}</p> }

            <form onSubmit={Handlesubmit}>
                <div>
                    <label >Nom :</label>
                    <input
                     type="text"
                    value={data.nom}
                    onChange={(e) => setData('nom', e.target.value)}
                    />
                </div>

                <div>
                    <label >Prix :</label>
                    <input 
                    type="number" 
                    value={data.prix}
                    onChange={(e) => setData('prix', e.target.value)}
                     />
                </div>
                <button type="submit" disabled={processing}>{processing ? 'Envoi..':'Ajouter'}</button>

            </form>
        </div>
    );
}
export default Create;