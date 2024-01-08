const getjokes = async () => {
    try{
        const res = await fetch("https://icanhazdadjoke.com/slack");
        const data = await res.json();
        const myjoke = document.querySelector("#myjoke");

        myjoke.innerHTML = data.attachments[0].text;
    }catch(error){}

};

window.addEventListener("load",()=>{
    getjokes();
});