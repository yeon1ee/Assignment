"use strict"

//부모에게서 전달받음
let totalPrice = window.opener.totalPrice;

let resultNode = document.getElementById('result');

resultNode.innerHTML = `${totalPrice} 원을 결제하겠습니다. <br> 신용카드 번호를 입력하고 결제 버튼을 눌러주세요.`;


function payClick() {
    let inputNode = document.getElementById('cardNum').value;

    //카드번호가 입력되지 않았을 때
    if (inputNode == null || inputNode.trim().length == 0) {
        alert('카드 번호를 입력해야 합니다.');
    } else {
        opener.getInputData(inputNode, totalPrice);
        window.close();
        
    }
}