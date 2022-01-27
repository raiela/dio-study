const BASE_URL = "https://dog.ceo/api/breeds/image/random";

const getDogs = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();
        
        return json.message;
    }catch(e){
        console.log(e.message);
    }
}

const loadImg = async () => {
    const catImg = document.getElementById('dog');
    catImg.src = await getDogs();
}

const dogButton = document.getElementById('change-dog');
dogButton.addEventListener('click', loadImg);

loadImg();