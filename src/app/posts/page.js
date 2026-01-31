import Todo from "../components/todo";
export default async function PostsPage() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const todos = await response.json();

    return(
        <div>
            <h1>Posts Page</h1>
            <p>Welcome to the Posts Page!</p>
            <h2>{todos.title}</h2>

            <div>
                <Todo />
            </div>

        </div>
    )
}