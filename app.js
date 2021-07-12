const container = document.querySelector(".container");

let limit = 4;
let pageCount = 1;
let postCount = 1;


const getPost = async () => 
{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`);
    const data = await res.json();
    // console.log(data[0].body);

    data.map((current,index)=>{
        const htmlData = `
        <div class="posts">
        <p class="post-id">${postCount++}</p>
        <h2 class="title">${current.title}</h2>
        <p class="post-info">${current.body}</p>
        </div>
        `;

        container.insertAdjacentHTML("beforeend",htmlData);
    })
}
getPost();
const showData = ()=>{
    setTimeout(()=>{
        pageCount++;
        getPost();
    },300);
}

window.addEventListener('scroll', ()=>{
    const {scrollHeight, scrollTop , clientHeight} = document.documentElement;
    // console.log(scrollHeight, scrollTop , clientHeight);

    if((scrollTop + clientHeight)+1 > scrollHeight)
    {
        console.log("new page fired");
        showData();
    }
})