var container=document.querySelector(".container");
axios("/api/getlist").then(function (data) {
    var data = data.data.msg;
    console.log(data);
    var str="";
    data.forEach(item => {
        str+=`
        <li data-id="${item._id}">
        <div class="left">
            <p class="userinfo">
                <img src="${item.userimg}" alt="">
                <span class="username">${item.username}</span> 
            </p>
            <h5>${item.title}</h5>
            <span class="textsCon">${item.container}</span>
            <p class="timerNow">距结束<span class="day">${item.timer.day}</span>天<span class="hour">${item.timer.hour}</span>小时<span class="min">${item.timer.min}</span>分</p>
        </div>
        <div class="right">
            <img src="${item.img}" alt="">
        </div>
    </li>
        
        `
    })

    container.innerHTML=str;

    
var lis=document.querySelectorAll("li");
    lis.forEach(file=>{
        file.onclick=function(){
            location.href="default.html?_id="+file.getAttribute("data-id");
            console.log(file.getAttribute("data-id"));
        }
    })
})
