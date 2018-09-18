window.onload=function(){
    let jias=document.querySelectorAll(".jia");
    let jians=document.querySelectorAll(".centent .jian");
    let zhis=document.querySelectorAll(".centent .jishu");
    let gou=document.querySelector("footer .shop");
    let ge=document.querySelector("footer .price .top");
    let price=document.querySelector("footer .sure");
    let arr=[0,0,0,0,0,0,0,0];
    let arr1=[5,10,15,20,25,30,35,40];
    // 获取遮盖
    let cover=document.querySelector(".appCover");
    // 获取遮盖减号
    let coverJian=document.querySelector(".appCover .jianBth");
    // 获取遮盖加号
    let coverJia=document.querySelector(".appCover .jiaBth");
    // 获取遮盖之间的数量
    let coverShu=document.querySelector(".appCover .jaz");
    // 获取合计
    let coverHj=document.querySelector(".appCover .zon span");
    // 获取确认按钮
    let coverSubmit=document.querySelector(".appCover .zon .button");
    // 获取取消按钮
    let coverErr=document.querySelector(".appCover i");

    console.log(coverErr);

    zhis.forEach((v)=>{
        v.style.display="none";
    });
    // 点击加号
    jias.forEach((value,index)=>{
        value.onclick=function(){
            jians[index].style.display="block";
            arr[index]=arr[index]+1;
            zhis[index].style.display="block";
            zhis[index].innerHTML=arr[index];
            let shu=0;
            let zj=0;
            arr.forEach((v,i)=>{
                shu += v;
                zj += v*arr1[i];
            });
            if(zj >= 20){
                price.style.background="linear-gradient(to right,#ffff00,#ff6d00)";
                gou.style.background="linear-gradient(to right,#ffff00,#ff6d00)";

                ge.innerHTML=`已选购${shu}商品`;
                price.innerHTML=`￥${zj}`;
                coverShu.innerHTML=`${shu}`;
                coverHj.innerHTML=`合计：${zj}RMB`;
                price.onclick=function(){
                    cover.style.transform="scale(1)";
                };
            }
        }
    });

    // 点击减号
    jians.forEach((value,index)=>{
        value.onclick=function(){
            arr[index]=arr[index]-1;
            zhis[index].innerHTML=arr[index];
            let shu=0;
            let zj=0;
            arr.forEach((v,i)=>{
                shu += v;
                zj += v*arr1[i];
            });
            if(zj<20){
                price.style.background="#000";
                gou.style.background="#ccc";
                ge.innerHTML=`未选购商品`;
                price.innerHTML=`￥ 20元起送`;
            }else if(zj>=20){
                price.style.background="linear-gradient(to right,#ffff00,#ff6d00)";
                gou.style.background="linear-gradient(to right,#ffff00,#ff6d00)";
                price.onclick=function(){
                    cover.style.transform="scale(1)";
                    coverShu.innerHTML=`${shu}`;
                    coverHj.innerHTML=`合计：${zj}RMB`;

                };
                ge.innerHTML=`已选购${shu}商品`;

                price.innerHTML=`￥${zj}`;
            }
            arr.forEach((e,d)=>{
                console.log(zhis[d].innerText);
                if(zhis[d].innerText==0){
                    jians[d].style.display="none";
                    zhis[d].style.display="none";
                }
                if( shu ==  0){
                    ge.innerHTML=`未选购商品`;
                    price.innerHTML=`￥ 20元起送`;
                }
            });
        }
    });
    coverErr.onclick=function(){
        cover.style.transform="scale(0)";
    };
    coverSubmit.onclick=function () {
        window.open("Password payment.html");
    }

};





// $(function () {
//     let jia=$(".jia");
//     console.log(jia);
//     let gou=$("footer .shop");
//     let ge=$("footer .price .top");
//     let price=$("footer .sure");
//     let jian=$(".centent .jian");
//     let i=0;
//     let shu=0;
//     jia.click(function(){
//         shu++;
//         console.log($(this).index(jia));
//         price.css("background","linear-gradient(to right,#ffff00,#ff6d00)");
//         gou.css("background","linear-gradient(to right,#ffff00,#ff6d00)");
//         ge.html(`已选购${shu}商品`);
//         price.html(`￥${shu*25}`);
//         $(this).prevAll().css("display","block");
//         $(this).prev().html(`${i}`);
//         });
//     jian.click(function(){
//         shu--;
//         ge.html(`已选购${shu}商品`);
//         price.html(`￥${shu*25}`);
//         if(shu==0){
//             gou.css("background","#ccc");
//             price.css("background","#000");
//             jian.css("display","none");
//             ge.html(`未选购商品`);
//             price.html(`￥ 20元起送`);}
//             $(this).next().html(`${i}`);
//             if($(this).next().html()=="0"){
//                 $(this).prevAll().css("display","none");
//             }
// });
//
// });