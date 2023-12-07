
var inp=document.getElementById("i");
var nextd=document.getElementById("sub");
var num=0;
function fun()
{
    if(inp.value=='')
    {
        alert("enter text");
    }
    else
    {
        
        let row=document.createElement("div"); 
        let dis=document.createElement("div"); 
        let btn=document.createElement("div"); 
        row.id= "row"
        dis.id= "dis"
        btn.id = "btn"
        btn.textContent="Delete"
        btn.style.textAlign="center"
        
        btn.style.fontSize="3vw";
        row.style.border="1px solid"
        dis.style.fontSize="3vw";



    
        // btn.style.color
        row.appendChild(dis)
        row.appendChild(btn)
        var c=`ds${num++}`
        row.className=c;
        
        dis.innerHTML=inp.value;
     
        btn.className=c;
        btn.onclick=delfun;
        
        row.appendChild(btn);

        // console.log("hii")

        // document.appendChild(row);
        nextd.appendChild(row);
        
    //    row.appendChild(d);
        
        
    }
    inp.value='';

    



    
}
// var divs=document.getElementsByClassName("ds");
// var n=0;
function delfun(event)
{
    //var divs=document.querySelectorAll(".ds");
    // console.log(n++);

    // console.log();
    console.log(event);
    var target=event.target.className;
    var divs=document.getElementsByClassName(target);
    // console.log(divs);

    divs[0].remove();

    console.log(divs[0]);
    






    




}

