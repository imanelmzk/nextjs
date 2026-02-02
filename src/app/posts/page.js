import Link from "next/link";
import Todo from "../components/todo";
export default async function PostsPage() {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            next: { revalidate: 120 }
        }
    );
    // const todos = await response.json();
        const posts = await response.json();


        /*
        const postsMap= posts.map((posts) => {
            return(<li 
                style={{width:"70%", marginBottom:"10px", padding:"10px", borderBottom:"1px solid gray", borderRadius:"12px"}}
                key={posts.body}>{posts.body}</li>
            );
        })
            */
     
    return(
        <div style={{padding: "20px"}}>
            <h1> Posts Page </h1>
            <p> Welcome to the Posts Page !</p>
        <div className="posts-container"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px"
            }}
        >

            {/* ICI OU ON VA METTRE LE LINK À L'INTERIEUR DE `MAP``*/} 
                {posts.map((posts) => (
                    <Link
                        key={posts.id}
                        href={`/posts/${posts.id}`}
                        style={{
                            width: "70%",
                            marginBottom: "10px",
                            padding: "10px",
                            borderBottom: "1px solid gray",
                            borderRadius: "12px",
                            textDecoration: "none",
                            color: "white",
                            fontSize: "18px",
                            fontWeight: "500",
                            hover: {
                                backgroundColor: "#f0f0f0"
                            }
                        }}
                    >
                        <h3>{posts.id} - {posts.title} ➡️ </h3>
                        {/* ON COUPE LE BODY POUR QUE CESOIT PLUS PROPRE */}
                        <p style={{margin: "0", padding: "5px 0 0 0"}}>
                            {posts.body.substring(0, 100)}...
                        </p>
                    </Link>
                ))}
        </div>
        
        </div>
    )
}