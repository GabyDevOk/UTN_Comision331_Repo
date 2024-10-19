
const getNameAxios = async (idPost) => {
    const URL_TO_FETCH = "https://jsonplaceholder.typicode.com/";
    try {
        let resPost = await axios(`${URL_TO_FETCH}/posts/${idPost}`)
        /* console.log(resPost); */
        let resUsers = await axios((`${URL_TO_FETCH}/users/${resPost.data.userId}`))
        /*         console.log(resUsers); */
        document.write(`el posteo con titulo ${resPost.data.title}  lo escribió : ${resUsers.data.name} vive en ${resUsers.data.address.street}`)
    } catch (error) {
        console.log(error);
    }
}

getNameAxios(55)