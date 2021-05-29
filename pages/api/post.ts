// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

 const posts = [
    {
      user_name: "Christian Paranas", 
      user_img: "/Default.png",
      post_imgs: [
        "/Default.png",
      ],
      post_likes: 120
    },
    {
      user_name: "Thea Taba", 
      user_img: "/Default.png",
      post_imgs: [
        "/Default.png",
        "/Default.png",
      ],
      post_likes: 550
    },
    {
      user_name: "kalel", 
      user_img: "/Default.png",
      post_imgs: [
        "/Default.png",
        "/Default.png",
      ],
      post_likes: 550
    },
    {
      user_name: "kristel", 
      user_img: "/Default.png",
      post_imgs: [
        "/Default.png",
        "/Default.png",
      ],
      post_likes: 550
    },
        {
      user_name: "Christian Paranas", 
      user_img: "/Default.png",
      post_imgs: [
        "/Default.png",
      ],
      post_likes: 120
    },
    {
      user_name: "Thea Taba", 
      user_img: "/Default.png",
      post_imgs: [
        "/Default.png",
        "/Default.png",
      ],
      post_likes: 550
    },
    {
      user_name: "kalel", 
      user_img: "/Default.png",
      post_imgs: [
        "/Default.png",
        "/Default.png",
      ],
      post_likes: 550
    },
    {
      user_name: "kristel", 
      user_img: "/Default.png",
      post_imgs: [
        "/Default.png",
        "/Default.png",
      ],
      post_likes: 550
    },
]


export default (req, res) => {
  res.status(200).json(posts)
}
