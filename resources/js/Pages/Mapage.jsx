import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

function Mapage(){
    return(
        <AuthenticatedLayout>
            <div>
                <h1>Ma Page Protégée</h1>
                <p>accessible uniquement quand tu es connecté</p>
            </div>
        </AuthenticatedLayout>
    );
}
export default Mapage;