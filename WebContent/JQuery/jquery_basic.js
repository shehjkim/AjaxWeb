console.log('first');
	$(document).ready(function(){				//document 모두 로딩 후 기능 실행한다는 뜻
		console.log('second');	// 제일 마지막에 인식
		//console.log(document.getElementById('food_1').childNodes[1].firstChild.nodeValue);
		console.log(document.getElementById('food_1').childNodes[1].childNodes[0].nodeValue);		//fistChilde = childNodes[0] /같은뜻 ,첫번째 Node
	console.log($('#food_1').children().eq(0).html());			//섹션 태그<$('#food_1')>의 하위요소<children>의 첫번째 값<eq(0)>의 html 가져오고싶다
	$('#food_1 > ul > li').eq(0).css('background','red');
	$('#food_1 > ul > li').eq(1).html('bulgogi');
	});
    
    console.log('third');