"use client";

import { useState, useEffect } from "react";
export default function Todo(){
    const [todo, setTodo] = useState({});

    // 1.On enlève le "async" ICI
    useEffect(() =>{

        // 2. on ajoute une fonction "async" À L'INTERIEUR
        const fechMyTodo = async () =>{
            const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const result =  await response.json(); 
            setTodo(result);
        }
        // 3. Appelle cette fonction immédiatement
        fechMyTodo();
    }, []);
    
    return(
        <div>
            {/* Ici on crée une API REST FULL */}
            <h1> {todo.title} </h1>
        </div>
    );
}