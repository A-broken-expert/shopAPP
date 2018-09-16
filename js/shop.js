window.onload=function(){
    let jias=document.querySelectorAll(".jia");
    let jians=document.querySelectorAll(".centent .jian");
    let zhis=document.querySelectorAll(".centent .jishu");
    let gou=document.querySelector("footer .shop");
    let ge=document.querySelector("footer .price .top");
    let price=document.querySelector("footer .sure");
    let a=0,b=0,c=0,d=0,e=0,f=0,j=0,h=0;
    let arr=[a,b,c,d,e,f,j,h];
    let arr1=[5,10,15,20,25,30,35,40];
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
                zj+=v*arr1[i];
            });
            if(zj >= 20){
                price.style.background="linear-gradient(to right,#ffff00,#ff6d00)";
                gou.style.background="linear-gradient(to right,#ffff00,#ff6d00)";
                price.onclick=function(){
                    window.open("Password payment.html")
                };
                ge.innerHTML=`已选购${shu}商品`;
                price.innerHTML=`￥${zj}`;
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
            }else if(zj>=20){
                price.onclick=function(){
                    window.open("Password payment.html")
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