fetch('https://my-json-server.typicode.com/typicode/demo/posts')
  .then((response) => response.json())
  .then((data) => {
    showPosts(data);
  });


  const showPosts = (posts) => {
    posts.forEach(post => {
        const newPost = document.createElement('div');
        newPost.innerHTML = post.title;
        document.getElementById('container').append(newPost)
    });
    
  }
