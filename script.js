document.getElementById("btn").addEventListener("click",
    function cha(){
        rn1=Math.floor(Math.random()*256)
        rn2=Math.floor(Math.random()*256)
        rn3=Math.floor(Math.random()*256)
    
        console.log(rn1);
        console.log(rn2 );
        console.log(rn3 );
    
        document.getElementById("change").innerHTML= `rgb(${rn1},${rn2},${rn3})`
    
    
        document.querySelector(".main").style.backgroundColor = `rgb(${rn1},${rn2},${rn3})`;
                    
    })