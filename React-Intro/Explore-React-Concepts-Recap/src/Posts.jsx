import { useEffect, useState } from "react"
import Post from "./Post"


export default function Posts() {

    const [posts,setPosts]=useState([])      // ekhane useState([]) empty array use kora hoise karon, API er vitor data gulo array of object akare ase,
                                            // jodi only obj thakto tahole, useState({}), jodi number thakto tahole useState(0) use korte hoto.
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])

    return (
       <div className="">
          <h3>Posts:{posts.length} </h3>
          {/* Array of object er individual data nie kaj korbo akhon */}

          {
            posts.map(p => <Post post_props={p}> </Post> )
          }

       </div>
    )

}

/*  -- to Load Data 5 steps ----

1. Create a state variable to store the data
2. Create a useEffect hook with no dependencies
3. use fetch to get/load the data



*/