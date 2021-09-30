const addContent=document.querySelector(".addContent");
const saveBtn=document.querySelector(".saveBtn");
const list=document.querySelector(".list");

let data=[];

// 初始化
function init(){
	let str="";
	data.forEach(function(item,index){
		str+=`<li><p>${item.content}</p><input type="button" data-num=${index} value="刪除待辦" class="deleteContent"></li>`;
	});
	list.innerHTML=str;
};

// 資料儲存
saveBtn.addEventListener("click",function(e){
	if (addContent.value===""){
		return;
	}
	let obj={};
	obj.content=addContent.value;
	data.push(obj);
	init();
	addContent.value="";
})

// 資料刪除
list.addEventListener("click",function(e){
	let num=e.target.getAttribute("data-num");
	if(e.target.nodeName==="INPUT"){
		data.splice(num,1);
		init();
	}
}); 


