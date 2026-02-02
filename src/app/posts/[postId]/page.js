import { resolve } from "styled-jsx/css";
import { notFound } from "next/navigation";
// import { notFound } from "next/navigation";
export default async function postDetailsPage({params}){

    // 2. DÉBALLE LES PARAMÈTRES (c'est l'étape cruciale !)
    const {postId} = await params;

    // ---- LE RALENTISSEUR (juste pour le test) ----
    // await new Promise((resolve) => setTimeout(resolve,2000));
    // ---------------------------------------------
     
    // 3. Maintenant on peut utiliser postId pour le fetch
    const response = await fetch(
        // ATTENTION AUX BACKTICKS ICI !
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
            next: { revalidate: 120 } // le cache se met à jour toutes les 120 secondes
        }
    )

    const post = await response.json();

    // --- LA SÉCURITÉ ICI ----
    // Si le post n'existe pas, on peut retourner une erreur 404
    
    if(!post.title){
        // On déclanche la page 404 de Next.js immédiatement
        // On ajoute aussi que c'est une fonction de NEXTJS"
        notFound();
    }


    return(
        <div style={{padding: "20px"}}>
            {/* CORRECTION: On utilise la variable postId qu'on a extraite plus haut */}
            <h1> Post Details #{postId} </h1>

            <div style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "8px",
                marginBottom: "20px",
                paddingRight: "20px",
            }}>
                {/* On affiche l'ID du post ici */}
                <h2 style={{
                    textTransform: "capitalize", 
                    color: "#fe6600"
                    }}
                    >
                        {post.title}
                </h2>
                <p style={{color: "#fe6600", fontWeight: "bold", alignContent:"center", justifyContent:"center", flexDirection:"column"}}>ID: {postId}</p>

            </div>
            
        </div>
    )
    
}