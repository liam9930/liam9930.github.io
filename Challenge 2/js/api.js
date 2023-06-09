const list = document.querySelector("#list");
const apiURL = "https://2023-engineer-camp.zeabur.app/api/v1/works"
const pagination = document.querySelector('#pagination');



axios.get(apiURL).then(function(res){
    // console.log(res.data.ai_works.data);
    const data = res.data.ai_works.data;
    let str = "";
    data.forEach(function(item){
        str += /*html*/`<li class="card d-flex">
        <div class="image-wrap">
            <img src="${item.imageUrl}"
                alt="tool-Chatbot Builder
        " class="image">
        </div>
        <div class="card-container card-container-l">
            <h5 class="tool-title">${item.title}</h5>
            <p class="tool-content">${item.description}</p>
        </div>
        <div class="card-container card-container-s d-flex">
            <span class="model-name">${item.model}</span>
            <span class="creater-name">${item.discordId}</span>
        </div>
        <div class="card-container card-container-s d-flex">
            <span class="tag">#${item.type}</span>
            <a href="#"><span class="material-symbols-outlined">
                    share
                </span></a>

        </div>
    </li>`;
    });
    console.log(str);

    list.innerHTML = str;

});

