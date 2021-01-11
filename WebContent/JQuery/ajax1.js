//ajax.js
$ (function () {                                     //document 실행 후 ready의 function이 실행됨
    $.ajax({
        url: '../data/MOCK_DATA.json',
        dataType: 'json',
        success: showContent,
        error: function (result) {
            console.log('에러: ' + result.statusText);

        }
    });

    //id값이 btn인 클릭 이벤트.
    $('#btn').click(addRow);

    //찾기 이벤트
    $('#findBtn').on('click', findRow);
    let tr = makeNewTr();          //신규 row 생성(찾기 한 번호 밑에 makeNewTr이 실행되어 새로운값이 추가됨)       
});

////////////////////////////////////////////////////////////////////////////////
//값을 찾고 찾은 값 앞에 입력된 값이 삽입
function findRow() {
    let findId = $('#find_id').val();                       //val( ) = 찾고싶은 값 입력
    let findRow = $('#' + findId + '').css('background-color', 'gray');
    findRow.before(makeNewTr);          //찾아온 요소의 befor 앞, after 뒤로 데이터 값을 입력
    //findRow.after(makeNewTr);
}

///////////////////////////////////////////////////////////////////////////////
//값을 입력하면 테이블 젤 밑에 나옴 기능
function addRow() {
    let tr = makeNewTr();
    $('#tbl').append(makeNewTr);
}

///////////////////////////////////////////////////////////////////////////////
//값 입력 후 배경색 지정 기능
function makeNewTr() {
    let inputs = $('.input_val');
    let tr = $('<tr />');
    $(tr).click(trToInputFunc);
    $(tr).hover(function () {
        $(this).css('background-color', 'skyblue');
    }, function () {
        $(this).css('background-color', '');

    });
    for (let i = 0; i < inputs.length; i++) {
        let td = $('<td />').html(inputs[i].value);
        tr.append(td);
    }
    return tr;
}

////////////////////////////////////////////////////////////////////////////
//입력된 값을 테이블에 만들어주는것
// function btnFunc() {
//     console.log($(this));
//     let tr = $('<tr />');
//     let tdId = $('<td />').html($('#id').val());
//     let tdFirst = $('<td />').html($('#first_name').val());
//     let tdLast = $('<td />').html($('#last_name').val());
//     let tdEmail = $('<td />').html($('#email').val());
//     let trVal = $(tr).append(tdId, tdFirst, tdLast, tdEmail);
//     $('#tbl').append(trVal);

// }

///////////////////////////////////////////////////////////////////////////

function showContent(result) {                                              //success시 나오는 showcontent 값 함수
    let headers = ['id', 'first_name', 'last_name', 'email', '삭제'];       //필요없는 항목은 지워도됨
    let data = result;
    let table = $('<table id="tbl" />').attr('border', '1');
    let titles = $('<tr />');
    for (field of headers) {
        let td = $('<th />').html(field.replace('_', ' ').toUpperCase());
        titles.append(td);
    }
    table.append(titles);
    $(data).each(function (idx, obj) {
        if (idx < 5) {
            let tr = $('<tr />');
            $(tr).attr('id', obj.id);
            // $(tr).click(trToInputFunc);     //1.onclick
            // $(tr).hover(function () {
            //     $(this).css('background-color', 'beige'); //2.mouseover
            // }, function () {
            //     $(this).css('background-color', '');       //3.mouseout

            // })

            // ---> tr event (위에 주석을 on으로 변경)
            $(tr).on({
                'click': trToInputFunc,
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
                td.html(obj[field]);
                
                tr.append(td);

            }
            table.append(tr);
        }
    })
    $('#show').append(table);

}

/////////////////////////////////////////////////////////////////////////////
//MOCK_DATA.json안에 값을 가져옴

function trToInputFunc() {
    console.log($(this).children().eq(0).html());               //eq(0)=칠드런 요소의 첫번째 값
    $('#id').val($(this).children().eq(0).html());
    $('#first_name').val($(this).children().eq(1).html());
    $('#last_name').val($(this).children().eq(2).html());
    $('#email').val($(this).children().eq(3).html());

}

///////////////////////////////////////////////////////////////////////////

