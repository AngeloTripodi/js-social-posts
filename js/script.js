const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const likedPost = [];
const idPost = [];




let today = new Date().toISOString().slice(0, 10)
const endDate    = today;


const postListElement = document.querySelector('div.posts-list');

for (let i=0; i<posts.length; i++){
    const postElement = posts[i];
    const startDate  = postElement.created;

    const diffInMs   = new Date(endDate) - new Date(startDate)
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML=`
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src=${postElement.author.image} alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${postElement.author.name}</div>
                        <div class="post-meta__time">${diffInDays} giorni fa</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${postElement.content}</div>
            <div class="post__image">
                <img src=${postElement.media} alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${postElement.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${postElement.id}" class="js-likes-counter">${postElement.likes}</b> persone
                    </div>
                </div> 
            </div>            

    `;
    postListElement.append(post);
    idPost.push(postElement.id);

    // const postHeader = document.createElement('div');
    // postHeader.classList.add('post__header')
    // postHeader.innerHTML=`
    //             <div class="post-meta">                    
    //                 <div class="post-meta__icon">
    //                     <img class="profile-pic" src=${postElement.author.image} alt="Phil Mangione">                    
    //                 </div>
    //                 <div class="post-meta__data">
    //                     <div class="post-meta__author">${postElement.author.name}</div>
    //                     <div class="post-meta__time">${diffInDays} giorni fa</div>
    //                 </div>                    
    //             </div>
    // `;
    // post.append(postHeader);

    // const postText = document.createElement('div');
    // postText.classList.add('post__text')
    // postText.innerHTML=`
    // ${postElement.content}
    // `;
    // post.append(postText);

    // const postImage = document.createElement('div');
    // postImage.classList.add('post__image')
    // postImage.innerHTML=`
    // <img src=${postElement.media} alt="">
    // `;
    // post.append(postImage);
    
}



// counter = 0;



const likeButton = document.querySelectorAll('[data-postid]');
const likeCounter = document.querySelectorAll('b.js-likes-counter');


for (let i=0; i<likeButton.length; i++){
    likeButton[i].addEventListener('click', function(){
        // counter++;    
        like = ++posts[i]["likes"];
        // console.log(likeCounter)

        likeCounter[i].innerHTML = `${like}`;
        likeButton[i].classList.add('like-button--liked');
        // console.log(like)
        if (likedPost[i] == posts[i].id){
            console.log("Il post è già stato aggiunto nell'array!!")
        } else {
            likedPost.push(posts[i].id)
            console.log(likedPost)
        }
        // likedPost.push(posts[i].id)
        // console.log(likedPost)
    });
}


        
// });

// console.log(idPost[counter])
// console.log(posts[counter]["likes"] + 1)
// console.log(likeButton);
// console.log(likeCounter);