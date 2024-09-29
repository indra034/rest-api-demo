import { useEffect, useState } from "react";
import Post from "./post-item";
import PostItem from "./post-item";

export default function Posts () {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data)
            });
    }, []);

    return (
        <div>
            <h1>
                Today's Posts
            </h1>
            <div>
                {
                    posts.map((post, index) => {
                        return (
                            <PostItem
                                post={post}
                                key={index}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}