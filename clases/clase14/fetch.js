

const getNamefetch = (idPost) => {

    try {

        fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
            .then((res) => {
                /* console.log(res); */
                return res.json()
            })
            .then((post) => {
           /*      console.log(post); */
           fetch (`https://jsonplaceholder.typicode.com/users/${post.userId}`)
           .then((res)=>{
      /*         console.log(res); */
            return res.json()
           })
           .then ((user)=>{
     /*        console.log(`el posteo dice: ${post.body} y lo escribió ${user.name}`); */
     console.log(`${user.name} vive en la ciudad: ${user.address.city}`);
           })
            })
    } catch (error) {
        console.log(`error : ${error.message}`);
    }
}
getNamefetch(21)
