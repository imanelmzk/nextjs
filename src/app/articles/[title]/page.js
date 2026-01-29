export default async function ShowArticlePages({params}){
    const{title} = await params;
    // console.log({title})

    return(
        <div>
            <h1> SHOW ARTICLES</h1>
            <h1> {title}</h1>
        </div>
    )
}

/*
export default async function ShowArticlePages(props){
    // On attend (await) que les params soient prets:
    const params = await props.params;
    console.log(params);//Maintenant tu verras {title:',,,'}

    return(
        <div>
            <h1> SHOW ARTICLES </h1>
            <h1> {props.params.title} </h1>
        </div>
    );
}
    */