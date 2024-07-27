import {useState} from 'react'
import "../App.css"
const Posts = () => {
    const [posts, setPosts] = useState([
        { id: 1, head: "لقد صنعت نواة لينكس ما رأيكم بها", views: "30 Views", content: "Writed By Abdo", likes: 0 },
        { id: 2, head: "أحب البرمجة هل من أحد يعطيني نصائح؟", views: "50 Views", content: "Writed By Ali", likes: 0 },
        { id: 3, head: "🛠️الحل لجميع مشاكل البرمجة فهم أساسيات اللغة أولا ثم إختيار المسار الذي تريد", views: "100 Views", content: `Writed By Web Designer`, likes: 0 , Writer: true},
      ]);
    
      const handleLike = (postId) => {
        setPosts(posts.map(post => {
          if (post.id === postId) {
            return { ...post, likes: post.likes + 1 };
          }
          return post;
        }));
      };
    
      const myPosts = posts.map(post => (
        <div key={post.id} className="post" style={{padding:"15px"}}>
            <span className="post-header">{post.head}</span>
            <hr />
          <br />
          <p>{post.content}</p>
          <span style={{display:"block"}}>{post.views}</span>
          <br />
          <button onClick={() => handleLike(post.id)} className="like-btn">Like💖</button>
          <br /><br />
          <span style={{display:"block"}}>Likes : {post.likes}</span>
        </div>
      ));

  return (
    <div>
        {myPosts}
    </div>
  )
}

export default Posts