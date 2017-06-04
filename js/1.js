var id;
//匿名方法，页面加载时执行绑定按钮的点击事件
window.onload=function(){
	document.getElementById("cymbal").onclick=function(){
		startAnimation ("cymbal",13);
	}
	document.getElementById("drink").onclick=function(){
		startAnimation ("drink",81);
	}
	document.getElementById("eat").onclick=function(){
		startAnimation ("eat",40);
	}
	document.getElementById("fart").onclick=function(){
		startAnimation ("fart",28);
	}
	document.getElementById("pie").onclick=function(){
		startAnimation ("pie",24);
	}
	document.getElementById("scratch").onclick=function(){
		startAnimation ("scratch",56);
	}
	
}


//执行图片切换,参数name为按钮组名字，count为动画图片数量
function startAnimation (name,count) {
	var index=0;//存储图片索引
	//获取cat标签，
	var catImg=document.getElementById("cat");
	//
	clearInterval(id);
	//定时器来更换图片
	id=setInterval(function(){
		if (++index<count) {
			//切换图片
			catImg.src=getImageName(name,index);
		} else{
			clearInterval(id);
		}
	},100)
}


//获取图片名称
function getImageName(name,index){
	if (index<10) {
		index="0"+index;
	} 
	return "Animations/"+name+"/"+name+"_"+index+".jpg";
}
