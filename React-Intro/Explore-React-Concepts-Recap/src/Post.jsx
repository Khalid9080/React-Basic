import './Post.css';


export default function Post({post_props}) {
    const {body,id,title,userId} = post_props
    return (
        
        <div className='post'>
            <h2>Post Title:{title} </h2>
            <p><small>userId: {userId}</small></p>
            <p><small>postId: {id} </small></p>
            <p>{body}</p>
        </div>
    )
}