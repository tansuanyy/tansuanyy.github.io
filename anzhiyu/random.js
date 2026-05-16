var posts=["2026/05/16/V2ray的使用和下载教程/","2026/02/05/hello-world/","2026/02/08/school/","2026/05/16/完整指南/","2026/02/08/telegraph-Image：搭建你的专属开源图床/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };