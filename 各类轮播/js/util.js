eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('3 g(b){6(4.e)4.e("m",b,!1);u{2 a=4.q("r");4.s("t")[0].v(a);a.y=!0;a.h=3(){"j"==a.k&&b()}}};3 l(a){7 4.n(a)};3 o(a){2 b=a.8.9;2 c=-1;d(2 i=0,5=b.f;i<5;i++){6(a==b[i]){c=i;w}};7 c};3 x(a,b){2 c=a.8.9;d(2 i=0,5=c.f;i<5;i++){6(a!=c[i]){b&&b.p(c[i],c[i],i)}}}',35,35,'||var|function|document|len|if|return|parentElement|children||||for|addEventListener|length|ready|onreadystatechange||complete|readyState|dom|DOMContentLoaded|getElementById|getIndex|call|createElement|script|getElementsByTagName|head|else|appendChild|break|siblings|defer'.split('|'),0,{}))
/*
 util.js如下：
//dom元素加载完毕执行方法
function ready(b) {
    if (document.addEventListener) document.addEventListener("DOMContentLoaded", b, !1);
    else {
        var a = document.createElement("script");
        document.getElementsByTagName("head")[0].appendChild(a);
        a.defer = !0;
        a.onreadystatechange = function () {
            "complete" == a.readyState && b()
        }
    }
};
 
function dom(id) {
    return document.getElementById(id);
    };
 

 //获取元素的索引位置

function getIndex(dom){
   //获取这个对象父元素所有子元素
   var doms = dom.parentElement.children;
   //记录索引的
   var index = -1;
   //循环所有元素，判断当前元素在所有元素的那个位置
   for(var i=0,len=doms.length;i<len;i++){
       //如果是同意一个元素，就把位置索引拿出来，跳出循环
         if(dom==doms[i]){
        index = i;
        break;
       }
    };
    return index;
};

 //找到某个元素的同辈元素

function siblings(dom,callback){
    //获取这个对象父元素所有子元素
   var doms = dom.parentElement.children;
   //记录索引的
   //循环所有元素，判断当前元素在所有元素的那个位置
   for(var i=0,len=doms.length;i<len;i++){
       //如果不是一个元素，就把位置索引拿出来，跳出循环
       if(dom!=doms[i]){
          callback && callback.call(doms[i],doms[i],i);
       }
    };
}
 */