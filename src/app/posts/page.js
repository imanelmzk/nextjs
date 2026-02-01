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

        const postsMap= posts.map((posts) => {
            return(<li 
                style={{marginBottom:"10px", padding:"10px", borderBottom:"1px solid gray", borderRadius:"12px"}}
                key={posts.body}>{posts.body}</li>
            );
        })
        // console.log(posts);
    return(
        <div>
            <h1>Posts Page</h1>
            <p>Welcome to the Posts Page!</p>
            {/*<h2>{posts[5].title}</h2>*/}
            
            <ul className="postMap" 
                style={{
                    //marginRight:"20px",
                    width:"80%", 
                    fontFamily:"system-ui", 
                    display:"flex", 
                    flexDirection:"column", 
                    gap:"20px",
                    justifyContent:"center",
                    alignItems:"center"
                }}>

                {postsMap}
            </ul>
            
            {/*<div>*/}
            {/*    <Todo />*/}
            {/*</div>*/}

        </div>
    )
}