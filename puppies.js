
let btn = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
btn.addEventListener("mouseover",function(){
    btn.style.backgroundColor = "yellow";
})

btn.addEventListener("mouseleave",function(){
    btn.style.backgroundColor = "white";
})

btn2.addEventListener("mouseover",function(){
    btn2.style.backgroundColor = "yellow";
})

btn2.addEventListener("mouseleave",function(){
    btn2.style.backgroundColor = "white";
})


let likes = document.querySelectorAll(".like");

for(var i = 0; i< likes.length;i++){

    let node = document.getElementById(likes[i].id);

    node.addEventListener("click",function(){
        if (node.src == "file:///C:/Users/EvansTDingwiza/Desktop/projects/project5/Resources/Puppies/icons8-heart-outline-50.png"){
            node.src = "file:///C:/Users/EvansTDingwiza/Desktop/projects/project5/Resources/Puppies/icons8-heart-outline-48.png";
        }else if (node.src == "file:///C:/Users/EvansTDingwiza/Desktop/projects/project5/Resources/Puppies/icons8-heart-outline-48.png" ){
            node.src =  node.src = "file:///C:/Users/EvansTDingwiza/Desktop/projects/project5/Resources/Puppies/icons8-heart-outline-50.png";
        }
         
    })
};



   

