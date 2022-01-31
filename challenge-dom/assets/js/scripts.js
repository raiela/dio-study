function changeMode(){
    changeClasses();
    changeText();
    
}

function changeClasses(){
    h1.classList.toggle(darkClassMode);
    body.classList.toggle(darkClassMode);
    button.classList.toggle(darkClassMode);
    footer.classList.toggle(darkClassMode);
}

function changeText(){
    const darkText = "Dark Mode";
    const lightText = "Light Mode";

    if(body.className=='dark-mode'){
        h1.innerHTML = darkText + " ON";
        button.innerHTML = lightText;
        return ;
    }
    
    h1.innerHTML = lightText;
    button.innerHTML = darkText;

}
const darkClassMode = 'dark-mode';
const h1 = document.getElementById('page-title');
const button = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode)

