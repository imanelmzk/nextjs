import Link from 'next/link';

export default function notFound(){
    return(
        <div style={{
            textAlign: "center",
            padding:" 50px",
            fontFamily: "Arial, sans-serif",
            color: "#333"
        }}>
            <h1 style={{fontSize: "48px", marginBottom: "20px"}}>404 - Page Not Found</h1>
            <h2> 😕 Oups ! Cette page n'existe pas</h2>
            <p> L'article que vous devnez le chercher n'existe pas ou a été supprimé</p>

            <div style={{marginTop: "30px"}}>
                <Link
                    href="/posts"
                    style={{
                        fontSize: "18px",
                        color: "#555",
                        padding: "50px 10px",
                        borderRadius: "8px",
                        backgroundColor: "#f9f9f9"}}
                    
                >
                    Retourner à la page principale (Listes des postes)
                </Link>
            </div>
        </div>
    )
}