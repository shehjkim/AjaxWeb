function showPage(){
	let doc = xhtp.responseXML;
	let data = doc.getElementsByTagName('record');
	let tableTag = document.createElement('table');
	tableTag.setAttribute('border', '1');
	tableTag.setAttribute('id', 'tbl');

	let headerTr = titleRow(data);
	let dataTrs = contentRow(data);
	tableTag.appendChild(headerTr);
	for (let i = 0; i < dataTrs.length; i++) {
		tableTag.appendChild(addUpdBtn(dataTrs[i], updateFunc));
	}
	document.getElementById('show').appendChild(tableTag);
}

function titleRow(result) {
	let trTag = document.createElement('tr');
	for (let i = 0; i < result[0].childNodes.length; i++) {
		let thTag = document.createElement('th');
		let textNode = document.createTextNode(result[0].childNodes[i].nodeName.toUpperCase());
		thTag.appendChild(textNode);
		trTag.appendChild(thTag);
	}

	let thTag = document.createElement('th');
	thTag.innerHTML = "처리";
	trTag.appendChild(thTag);

	return trTag;
}

function contentRow(result) {
	let trTags = [];
	for (let i = 0; i < result.length; i++) {
		let trTag = document.createElement('tr');
		trTag.setAttribute('id', 'result' + i);

		for (let j = 0; j < result[i].childNodes.length; j++) {
			let tdTag = document.createElement('td');
			tdTag.setAttribute('style', 'padding:10px; text-align: center;');
			tdTag.setAttribute('id', 'result' + i + 'childNodes' + j);
			tdTag.onmouseover = function() {
				tdTag.style.backgroundColor = 'gold';
			}
			tdTag.onmouseout = function() {
				tdTag.style.background = 'none';
			}
			let textNode = document.createTextNode(result[i].childNodes[j].childNodes[0].nodeValue);
			tdTag.appendChild(textNode);
			trTag.appendChild(tdTag);
		}
		trTags.push(trTag);
		trTag.onmouseover = function() {
			trTag.style.backgroundColor = 'yellow';
			
			let clickBoard_Id = document.getElementById('clickBoard_Id');
			clickBoard_Id.innerHTML = result[i].childNodes[0].childNodes[0].nodeValue;
			let clickTitle = document.getElementById('clickTitle');
			clickTitle.innerHTML = result[i].childNodes[1].childNodes[0].nodeValue;
			let clickContent = document.getElementById('clickContent');
			clickContent.innerHTML = result[i].childNodes[2].childNodes[0].nodeValue;
			let clickWriter = document.getElementById('clickWriter');
			clickWriter.innerHTML = result[i].childNodes[3].childNodes[0].nodeValue;
			let clickcreationDate= document.getElementById('clickCreation_Date');
			clickCreation_Date.innerHTML = result[i].childNodes[4].childNodes[0].nodeValue;
		}
		trTag.onmouseout = function() {
			trTag.style.background = 'none';
		}
	}
	return trTags;
}

function addUpdBtn(tr, callBackFunc) {
	// 추가 버튼 코드 ,이벤트 등록
	let butn = document.createElement('button');
	butn.onclick = callBackFunc;
	butn.innerHTML = '수정';
	let tdTag = document.createElement('td');
	butn.setAttribute('style', 'padding:10px; text-align: center;');
	tdTag.appendChild(butn);
	tr.appendChild(tdTag);

	return tr;
}

function updateFunc() {
	
}