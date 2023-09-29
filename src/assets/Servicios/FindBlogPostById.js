import BlogData from "../Data/BlogData"

export default function FindBlogPostById (id){
    const posteo =  BlogData.find((post)=> post.id ==id)
    console.log ('POSTEO',posteo)
    return posteo
}