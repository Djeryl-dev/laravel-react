import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

function Mapage(){
    return(
        <AuthenticatedLayout>
            <div>
                <h1>ma page proteger</h1>
                <p>accessible uniquement quand tu es connecter</p>
            </div>
        </AuthenticatedLayout>
    );
}
export default Mapage;