// let movies = {
//     {
//         name: "falcon and the winter soldier",
//         des: " FAlcon  Description Default",
//         image: "./images/slider 2.png"
//     },
//     {
//         name:"Loki",
//         des:"Loki Description Default",
//         image: "./images/slider 1.png"
//     },
//     {
//         name: "Luca",
//         des: "Luca Description Default",
//         image: "./images/slider 5.png"
//     },
//     {
//         name: "raya and the last dragon",
//         des: "Raya Default Description",
//         image: "./images/slider 4.png"
//     }
// };

// const carousel=document.querySelector('.carousel');
// let slider=[];

// let slideIndex=0;//track the courrent slide

// const createSlide = () =>{
//     if(slideIndex>=movies.length()){
//         slideIndex=0;
//     }

//     let slide =document.createElement('div');
//     let imgElement =document.createElement('div');
//     let content =document.createElement('div');
//     let  h1=document.createElement('div');
//     let p=document.createElement('div');

//     // attaching elements

//     imgElement.appendChild(document.createTextNode(''));
//     h1.appendChild(document.createTextNode(movies[slideIndex].name));
//     p.appendChild(document.createTextNode(movies[slideIndex].des));
//     content.appendChild(h1);
//     content.appendChild(p);
//     slide.appendChild(imgElement);
//     carousel.appendChild(slide);

//     //setting img
//     imgElement.src=movies[slideIndex].image;
//     slideIndex++;

//     //setting elements classnames
//     slide.className="slider";
//     content.className="slide-content";
//     h1.className="movie-title";
//     p.className="movie-des";

//     sliders.push(slide);

//     if(slide.length){
//         sliders[0].style.marginLeft = `calc(-${100*(sliders.length - 2)}% - ${30 * (sliders.length - 2) }px)`;
//     }

// }

// for(let i=0;i<3;i++){
//     createSlide();
// }

// setInterval(()=>{
//     createSlide();
// }, 3000);