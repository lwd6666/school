window.onload=function(){
	
var arrurl=['images/m1.jpg','images/m2.jpg','images/m3.jpg','images/m4.jpg','images/m5.jpg'];
var arrtext=['武艺《收件人》作为摄影师的武艺，没想到竟然在现实生活工作中遇到了自己的“梦中女神”阿sa，最终二人在充满着“蝉声和树叶”的浪漫夏天展开了一场纯纯之恋。','许嵩 《不语》由创作才子献唱的电影《不速之客》主题曲《不语》正式发布,电影将于3月18日登陆全国院线，上演了一场双雄对决、相爱相杀的精彩故事。','陈奕迅 《陪你度过漫长岁月》电影《陪安东尼度过漫长岁月》主题曲《陪你度过漫长岁月》MV,首发主题曲MV之外，片方也正式宣布电影改档至11月13日上映。','Melody Day 《SPEED UP》Melody Day第三张单曲专辑《SPEED UP》同名主打曲完整版公开,GOT7 junior出演MV，朋克曲风，强烈的节奏给人留下深刻印象，表达女人对于感情的直接态度。','苏打绿《痛快的哀艳》痛快版MV首播！面对许多事情，我们会告诉自己，这是命运。真的有命运的存在吗？那么是谁给你的呢？我们不都是一个机率下的产物吗？'];

var odiv=document.getElementById('pic');
var oimg=odiv.getElementsByTagName('img')[0];

var op=odiv.getElementsByTagName('p')[0];
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
setTimeout(autoplay,1000);
function ftab(){
	oimg.src=arrurl[num];
	
		op.innerHTML=arrtext[num];
		for(var i=0;i<ali.length;i++){
				ali[i].className='';
				}
		ali[num].className='active';
		};
}