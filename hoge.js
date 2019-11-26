document.getElementsByClassName('g')
document.querySelector("#rso > div > div > div:nth-child(1) > div > div.rc > div.r > a")


let el = document.getElementsByClassName('g');
let pattern = /^https://www.sejuku.net/g;

for(let item of el){
    let href = item.querySelector('div > div.rc > div.r > a').href;
    let result = href.match(pattern);
    if(result != null){
        item.style.display = 'none';
    }
}