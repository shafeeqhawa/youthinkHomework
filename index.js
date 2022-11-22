

const container2 = document.querySelector(".container2")
const btn = document.querySelector(".btn")
let pageCounter = 1

let posts =[]

const getPosts = async (counter) => {

    const res = await fetch(`https://www.wp-course.site/wp-json/youthink/posts?page=${counter}`);
    const data = await res.json()
    posts.push(...data.data)

}

const showPosts = (data) => {
    container2.innerHTML=""
    data.map(item => {
        container2.innerHTML +=`
        <div class="all-posts">
    <div class="posts">
    <a href=""><img src="${item.thumbnail}"></a>
</div>
<div class="post-info">
    <h3>${item.title}
    <p>${item.excerpt}</p>

<div class="post-details">
    <span class="material-icons-outlined">visibility</span>
    <label>${item.views}</label>
    /
    <span class="material-icons-outlined">calendar_month</span>
    <label>${item.date}</label>
    /
    <span class="material-icons-outlined">local_offer</span>
    <label>${item.tags}</label>
    </div>
</div>
</div>

`
    }
        
        )
}
await getPosts(pageCounter)
showPosts(posts)
function remove(){

    btn.className="hidden"
}
btn.addEventListener("click", async (event)=>{
    if (pageCounter<4){
        pageCounter +=1
        await getPosts(pageCounter)
    showPosts(posts)
    
    }
 
  else btn.remove()
})



