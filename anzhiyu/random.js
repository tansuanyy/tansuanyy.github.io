var posts=["2026/02/05/hello-world/","2026/02/08/school/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };