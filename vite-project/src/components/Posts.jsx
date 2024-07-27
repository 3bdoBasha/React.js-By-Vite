import { useState } from "react";
import "../App.css";
import { Eye } from "lucide-react";
import { UserCheck } from "lucide-react";
import { BadgeCheck } from "lucide-react";
import { Heart } from "lucide-react";
const Posts = () => {
  const [posts, setPosts] = useState([{
      id: 1,
      badge: <UserCheck className=" mr-2 ml-2 text-xl"/>,
      name: "Ahmed",
      views: 30,
      content:
        "صنعتها بإستخدام لغة الـ الجافا وأخذ مني وقتاً طويلاً ولكني مستمتع بهذا الإنجاز الذي حققته بإستخدام خبرتي البرمجية",
      likes: 0,
    }
    ,{
      id: 2,
      badge: <UserCheck  className=" mr-2 ml-2 text-xl"/>,
      name: "Abdulrahman",
      views: 50,
      content:
        "أريد أن أتعلم البرمجة ولكن أنا لا أعرف من أين أبدأ وتائه تماماً ماذا أفعل",
      likes: 0,
    },
    {
      id: 3,
      badge: <BadgeCheck className=" mr-2 ml-2 text-xl" />,
      name: "Web Creator",
      views: 100,
      content: `المشاكل التي يمكن أن تواجه أي مبتديء بالبرمجة أنه تائه لا يعلم من حيث أين يبدأ فـ بكل بساطة تتعلم أساسيات البرمجة ثم تتوجه إلى الكورس الذي تريد التخصص به`,
      likes: 0,
    },
    
      , ]);
  const handleLike = (postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
        return { ...post, likes: post.likes+1 };
        }
        return post;
      }),
    );
  };

  const handleView = (postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return { ...post, views: post.views + 1 };
        }
        return post;
      })
    );
  };

  const myPosts = posts.map((post) => (
    <div key={post.id} className="post w-full rounded-lg hover:scale-105 m-2" style={{ padding: "15px" }}>
      <span>{post.badge} {post.name}</span>
      <hr />
      <br />
      <p align="center">{post.content}</p>
      <br />
      <br />
      <button onClick={() => handleLike(post.id)} className="like-btn"><Heart /></button>
      <br />
      <span style={{ display: "block" }}>Likes : {post.likes}</span>
      <span>
        <Eye />
        {post.views}
      </span>
    </div>
  ));

  return (
    <div className=" w-full flex justify-center items-center flex-col gap-4">{myPosts}</div>
  );
};

export default Posts;