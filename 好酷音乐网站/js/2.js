window.onload=function(){
var arrurl=['images/da1.jpg','images/da2.jpg','images/da3.jpg','images/da5.jpg','images/da6.jpg','images/da4.jpg'];
var odiv=document.getElementById('pic');
var oimg=odiv.getElementsByTagName('img')[0];
var oul=odiv.getElementsByTagName('ul')[0];
var ali=oul.getElementsByTagName('li');
var num=0;


for (j=0;j<ali.length;j++){
	ali[j].index=j;
	ali[j].onclick=function(){
		num=this.index;
		ftab()

	};
}
function autoplay(){
	setInterval(function(){ftab();num++;num=num%arrurl.length;},2000)
	}
setTimeout(autoplay,2000);
function ftab(){
	oimg.src=arrurl[num];
		for(var i=0;i<ali.length;i++){
				ali[i].className='';
				}
		ali[num].className='active';
		};

/////////
	var oImg=document.getElementById('box').getElementsByTagName('img');
var oDiv=document.getElementsByTagName('dv');
	for(var i=1;i<oImg.length;i++){
		oImg[i].onmouseover=function(){
			var img=new Image();
			img.src=oImg[0].src=this.src.replace(/small/,"big");
			oDiv.style.display='block';}
			}
/////


};