function Bonjour({utilisateurs}){
    return(
        <div>
            <h1>les utilisateurs</h1>
            <ul>
                {utilisateurs.map((utilisateur)=>(
                    <li key={utilisateur.id}>{utilisateur.nom} - {utilisateur.age} ans</li>
                ))}
            </ul>
        </div>
    );
}
export default Bonjour;