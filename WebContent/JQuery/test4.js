$(function () {
	//ajax 호출
		$.ajax({
			url:'../data/MOCK_DATA.json',
			dataType: "json",
			success: showContent,
			error: function(result) {
				console.log('에러: '+result.statusText);
			}
		}); 
		//button 클릭 이벤트
		$('#btn').on('click', function() {
			//$('input : checked').parent().parent.css('backgroud-color', 'red');
			$('input : checked').parent().parent.remove();
		});
		//all_check 클릭 이벤트.(라이브 이벤트 방식)
		$('body').on('click', '#all_check', function () {
			console.log('checked');
			if($('#all_check').val())
			$('td > input').prop('checked', true);
			else
			$('td > input').prop('checked', false);
		})
		
		//$('#all_check').on('click', function () {
		//	console.log('checked');
		//})
		
	});//end of function .ready
	

function showContent(result) {
			let headers = ['chkbox', 'id', 'first_name','last_name','email'];
			let data = result;
			let table = $('<table id="tbl" />').attr('border','1');
			let titles = $('<tr />');
			
			
			for (field of headers) {
				let td;
				if (field == 'chkbox') {
					let chkbox = $('<input />').attr('type', 'checkbox').attr('id','all_check');
					td = $('<th />').append(chkbox);
					td.attr('width','45px');
				} else {
					td = $('<th />').html(field.replace('_','').toUpperCase());
				}
				
				
				
				titles.append(td);
				}
				
				table.append(titles);
				

			$(data).each(function(idx, obj){
				if(idx < 5) {
				let tr = $('<tr />');
				
				$(tr).attr('id',obj.id);
				
			
				
				$(tr).on({
				 		'mouseover':  function(){
					$(this).css('background-color','yellow');
					
				},
			 			'mouseout': function(){
				$(this).css('background-color','');
			}
						});
				// --> end
				
				
				for(field of headers) {
					let td = $('<td />');
					
					if (field == 'chkbox') {
						let checkbox = $('<input />').attr('type','checkbox').attr('id','all_check');
						td.attr('align', 'center');
						td.append(checkbox);
					} else {
						td.html(obj[field]);
					}
				
					tr.append(td);
		
				}
				table.append(tr);
			 } //end of if
		
			})
			$('#show').append(table);
		
	}