
const getNameAsync = async (idPost) =>{
/* await */
try {
    const URL_TO_FETCH = "https://jsonplaceholder.typicode.com/";

    let resPost = await fetch(`${URL_TO_FETCH}/posts/${idPost}`)
    let post = await  resPost.json()

/*     document.write (`el posteo se llama ${post.title}`) */

    let respUsers = await fetch (`${URL_TO_FETCH}/users/${post.userId}`)
    let user = await respUsers.json()

document.write(`el post con el titulo: ${post.title}, lo escribió: ${user.name} vive en la ciudad: ${user.address.city}`); 
} catch (error) {
    console.log(error); 
}
}
getNameAsync(38)