/*generated by stasc*/
gui.folder_container=function(){
	var n0=document.createElement('div');
	var n1=document.createElement('div');
	n1.setAttribute('class','title-bar');
	Object.defineProperty(n0,'$drag',{
		get:function(){return n1;},
	});
	var n2=document.createElement('span');
	n2.setAttribute('style','position:absolute; left:5px; cursor:move;');
	var n3=document.createElement('img');
	n3.setAttribute('src','folder.png');
	n3.setAttribute('align','left');
	n3.setAttribute('style','opacity:0.5;');
	n2.appendChild(n3);
	var n4=document.createElement('span');
	n4.setAttribute('style','color:white; font-weight:bold;');
	Object.defineProperty(n0, '$title',{
		set:function(v){n4.textContent=v;},
		get:function(){return n4.textContent;},
	});
	n2.appendChild(n4);
	n1.appendChild(n2);
	var n5=document.createElement('span');
	n5.setAttribute('style','position:absolute; right:5px; cursor:pointer;');
	var n6=document.createElement('img');
	n6.setAttribute('src','reload.png');
	n6.setAttribute('align','center');
	n6.setAttribute('style','opacity:0.5;');
	n6.setAttribute('title','Reload');
	Object.defineProperty(n0,'$reload',{
		get:function(){return n6;},
	});
	n5.appendChild(n6);
	var n7=document.createElement('img');
	n7.setAttribute('src','close.png');
	n7.setAttribute('align','center');
	n7.setAttribute('style','opacity:0.5;');
	n7.setAttribute('title','Close');
	Object.defineProperty(n0,'$close',{
		get:function(){return n7;},
	});
	n5.appendChild(n7);
	n1.appendChild(n5);
	n0.appendChild(n1);
	var n8=document.createElement('div');
	n8.setAttribute('style','padding:2px; border:solid 1px; overflow:scroll; position:absolute; left:0px; right:0px; top:35px; bottom:0px;');
	var n9=document.createElement('table');
	n9.setAttribute('style','width:100%; border-spacing:0px; empty-cells:show;');
	Object.defineProperty(n0,'$content',{
		set:function(v){n8.replaceChild(v,n9);n9=v;},
		get:function(){return n9;},
	});
	n8.appendChild(n9);
	n0.appendChild(n8);
	var n10=document.createElement('div');
	n10.setAttribute('style','position:absolute; width:1em; height:1em; right:0px; bottom:0px; cursor:se-resize;');
	Object.defineProperty(n0,'$resize',{
		get:function(){return n10;},
	});
	n0.appendChild(n10);
	return n0;
};
gui.text_container=function(){
	var n0=document.createElement('div');
	var n1=document.createElement('div');
	n1.setAttribute('class','title-bar');
	Object.defineProperty(n0,'$drag',{
		get:function(){return n1;},
	});
	var n2=document.createElement('span');
	n2.setAttribute('style','position:absolute; left:5px; cursor:move;');
	var n3=document.createElement('img');
	n3.setAttribute('src','text.png');
	n3.setAttribute('align','left');
	n3.setAttribute('style','opacity:0.5;');
	n2.appendChild(n3);
	var n4=document.createElement('span');
	n4.setAttribute('style','color:white; font-weight:bold;');
	Object.defineProperty(n0, '$title',{
		set:function(v){n4.textContent=v;},
		get:function(){return n4.textContent;},
	});
	n2.appendChild(n4);
	n1.appendChild(n2);
	var n5=document.createElement('span');
	n5.setAttribute('style','position:absolute; right:5px; cursor:pointer;');
	var n6=document.createElement('img');
	n6.setAttribute('src','upload.png');
	n6.setAttribute('align','center');
	n6.setAttribute('style','opacity:0.5;');
	n6.setAttribute('title','Upload');
	Object.defineProperty(n0,'$upload',{
		get:function(){return n6;},
	});
	n5.appendChild(n6);
	var n7=document.createElement('img');
	n7.setAttribute('src','reload.png');
	n7.setAttribute('align','center');
	n7.setAttribute('style','opacity:0.5;');
	n7.setAttribute('title','Reload');
	Object.defineProperty(n0,'$reload',{
		get:function(){return n7;},
	});
	n5.appendChild(n7);
	var n8=document.createElement('img');
	n8.setAttribute('src','close.png');
	n8.setAttribute('align','center');
	n8.setAttribute('style','opacity:0.5;');
	n8.setAttribute('title','Close');
	Object.defineProperty(n0,'$close',{
		get:function(){return n8;},
	});
	n5.appendChild(n8);
	n1.appendChild(n5);
	n0.appendChild(n1);
	var n9=document.createElement('div');
	n9.setAttribute('style','margin:0px; padding:0px; border:solid 1px; position:absolute; left:0px; right:0px; top:35px; bottom:0px;');
	var n10=document.createElement('textarea');
	n10.setAttribute('style','margin:0px; padding:0px; border:0px; width:100%; height:100%; resize:none;');
	Object.defineProperty(n0,'$textarea',{
		get:function(){return n10;},
	});
	Object.defineProperty(n0, '$text',{
		set:function(v){n10.value=v;},
		get:function(){return n10.value;},
	});
	n9.appendChild(n10);
	n0.appendChild(n9);
	var n11=document.createElement('div');
	n11.setAttribute('style','position:absolute; width:1em; height:1em; right:0px; bottom:0px; cursor:se-resize;');
	Object.defineProperty(n0,'$resize',{
		get:function(){return n11;},
	});
	n0.appendChild(n11);
	return n0;
};
gui.list1=function(){
	var n0=document.createElement('table');
	n0.setAttribute('style','width:100%; border-spacing:0px; empty-cells:show;');
	var n1=document.createElement('tbody');
	Object.defineProperty(n0,'$items',{
		get:function(){return n1;},
	});
	n0.appendChild(n1);
	return n0;
};
gui.item1=function(){
	var n0=document.createElement('tr');
	var n1=document.createElement('td');
	n1.setAttribute('style','border-bottom:1px solid lightgray; padding:0px; margin:0px;');
	var n2=document.createElement('span');
	n2.setAttribute('draggable','true');
	n2.setAttribute('style','cursor:pointer;');
	var n3=document.createElement('img');
	n3.setAttribute('align','left');
	n3.setAttribute('draggable','false');
	n3.setAttribute('style','opacity:0.5;');
	Object.defineProperty(n0, '$icon',{
		set:function(v){n3.src=v;},
		get:function(){return n3.src;},
	});
	n2.appendChild(n3);
	var n4=document.createElement('span');
	Object.defineProperty(n0, '$name',{
		set:function(v){n4.textContent=v;},
		get:function(){return n4.textContent;},
	});
	n2.appendChild(n4);
	n1.appendChild(n2);
	var n5=document.createElement('a');
	n5.setAttribute('target','_blank');
	n5.setAttribute('draggable','false');
	Object.defineProperty(n0, '$url',{
		set:function(v){n5.href=v;},
		get:function(){return n5.href;},
	});
	var n6=document.createElement('img');
	n6.setAttribute('align','top');
	n6.setAttribute('src','link.png');
	n6.setAttribute('draggable','false');
	n6.setAttribute('style','opacity:0.5;');
	n5.appendChild(n6);
	n1.appendChild(n5);
	n0.appendChild(n1);
	var n7=document.createElement('td');
	n7.setAttribute('align','center');
	n7.setAttribute('style','border-bottom:1px solid lightgray; padding:0px; margin:0px;');
	Object.defineProperty(n0, '$time',{
		set:function(v){n7.textContent=v;},
		get:function(){return n7.textContent;},
	});
	n0.appendChild(n7);
	var n8=document.createElement('td');
	n8.setAttribute('align','right');
	n8.setAttribute('style','border-bottom:1px solid lightgray; padding:0px; margin:0px;');
	Object.defineProperty(n0, '$size',{
		set:function(v){n8.textContent=v;},
		get:function(){return n8.textContent;},
	});
	n0.appendChild(n8);
	return n0;
};
gui.name=function(){
	var n0=document.createElement('div');
	n0.setAttribute('style','position:absolute; left:0; right:0; top:0; bottom:0;');
	Object.defineProperty(n0, '$zIndex',{
		set:function(v){n0.style.zIndex=v;},
		get:function(){return n0.style.zIndex;},
	});
	var n1=document.createElement('div');
	n1.setAttribute('style','position:absolute; left:0; right:0; top:0; bottom:0; background-color:gray; opacity:0.5;');
	n0.appendChild(n1);
	var n2=document.createElement('div');
	n2.setAttribute('style','position:absolute; left:0; right:0; top:0; bottom:0;');
	var n3=document.createElement('div');
	n3.setAttribute('style','margin-top:30%; margin-left:auto; margin-right:auto; padding: 5px; width:300px; background-color:white; border:1px solid; border-radius: 5px;');
	var n4=document.createElement('img');
	n4.setAttribute('src','folder.png');
	n4.setAttribute('align','center');
	n4.setAttribute('style','opacity:0.5;');
	n3.appendChild(n4);
	var n5=document.createElement('span');
	Object.defineProperty(n0, '$message',{
		set:function(v){n5.textContent=v;},
		get:function(){return n5.textContent;},
	});
	n3.appendChild(n5);
	var n6=document.createElement('input');
	n6.setAttribute('type','text');
	Object.defineProperty(n0,'$input',{
		get:function(){return n6;},
	});
	Object.defineProperty(n0, '$text',{
		set:function(v){n6.value=v;},
		get:function(){return n6.value;},
	});
	n3.appendChild(n6);
	var n7=document.createElement('div');
	n7.setAttribute('style','text-align:right;');
	var n8=document.createElement('input');
	n8.setAttribute('type','button');
	n8.setAttribute('value','OK');
	Object.defineProperty(n0,'$ok',{
		get:function(){return n8;},
	});
	n7.appendChild(n8);
	n3.appendChild(n7);
	n2.appendChild(n3);
	n0.appendChild(n2);
	return n0;
};
