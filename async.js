/* const myPromise = new Promise((resolve, reject)=>{

    if(false){
        setTimeout(()=>{
            resolve('I have succeded')
        }, 3000)
    } else {
        reject('I have failed')
    }
})
    


myPromise
.then((res)=> console.log(res))
.then((response)=> console.log(response))
.catch(rejectedValue => console.log(rejectedValue))

 */

/* fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    const firstUser = users[0]
    console.log(firstUser)
    return fetch('https://jsonplaceholder.typicode.com/users')
})
.then(response => response.json())
.then(posts => console.log(posts))
 */


const buscaDataDelUsuario = async ()=> {
    try {
        const usuarios = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log( "usuarios:", usuarios);
        const listaDeUsuarios = await usuarios.json()
        console.log( "listaDeUsuarios:", listaDeUsuarios);
        
        const usuarioNumeroUno = listaDeUsuarios[0]
        console.log( "usuarioNumeroUno:", usuarioNumeroUno);

        const posts = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + usuarioNumeroUno.id)
        const listaDePosts  = await posts.json()

        console.log("listaDePosts: ", listaDePosts)
    } catch (error) {
        console.log(error);
    }
}

buscaDataDelUsuario()















// const myAsyncFunction = async () => {
//  try {

//      const userResponse = await fetch("https://jsonplaceholder.typicode.com/users")
//      const users = await userResponse.json()
 
//      const secondUser = users[1]
//      console.log(secondUser)
 
//      const postsResponse = await fetch(
//          "https://jsonplaceholder.typicode.com/posts?userId=" + secondUser.id
//      )
 
//      const posts = await postsResponse.json()
//      console.log(posts)
     
//  } catch (error) {
//     console.log('there was an error')
//  }
// }

// myAsyncFunction()
