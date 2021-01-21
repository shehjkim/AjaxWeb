//ajax.js
$(function () {                                     //document 실행 후 ready의 function이 실행됨
    $.ajax({
        url: '../data/MOCK_DATA.json',
        dataType: 'json',
        success: showContent,
        error: function (result) {
            console.log('에러: ' + result.statusText);

        }
    });

    //button 클릭 이벤트
    $('#btn').on('click', function () {
        $('input:cheked').parent().parent().remove();
    });
    //all_check 클릭 이벤트.(라이브 이벤트 방식)
    $('body').on('click', '#all_check', function () {
        console.log('checked');
        // $('td > input').prop('checked', $('#all_check').is(":checked"))
        if ($('#all_check').is(":checked"))
            $('td > input').prop('checked', true)
        else
            $('td > input').prop('checked', false);

    })

});

///////////////////////////////////////////////////////////////////////////

function showContent(result) {                                              //success시 나오는 showcontent 값 함수
    let headers = ['chkbox', 'id', 'first_name', 'last_name', 'email'];        //필요없는 항목은 지워도됨
    let data = result;
    let table = $('<table id="tbl" />').attr('border', '1');
    let titles = $('<tr />');



    for (field of headers) {
        let td;
        if (field == 'chkbox') {                          //체크박스 인 부분
            let chkbox = $('<input />').attr('type', 'checkbox').attr('id', 'all_check')
                                        
            td = $('<th />').append(chkbox);
            td.attr('width', '45px');
        } else {                                        //체크박스 아닌 부분
            td = $('<th />').html(field.replace('_', ' ').toUpperCase());
        }
        titles.append(td);
    }
    table.append(titles);



    $(data).each(function (idx, obj) {          //
        if (idx < 5) {
            let tr = $('<tr />');
            $(tr).attr('id', obj.id);



            $(tr).on({
                'mouseover': function () {
                    $(this).css('background-color', 'beige');
                },

                'mouseout': function () {
                    $(this).css('background-color', '');
                }

            });
            // --> end


            for (field of headers) {
                let td = $('<td />');

                if (field == 'chkbox') {                          //체크박스 인 부분
                    let checkbox = $('<input />').attr('type', 'checkbox').attr('id', 'checked');
                    td.attr('align', 'center');
                    td.append(checkbox);
                } else {                                         //체크박스 아닌 부분  
                    td.html(obj[field]);                   
                }
                tr.append(td);
            }
            table.append(tr);
        }//end of if
    })
    $('#show').append(table);

}

