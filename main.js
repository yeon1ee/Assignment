"use strict"

let resultNode = document.getElementById('result');

//선택된 옵션을 담을 변수 선언
let selectedOptions = [];

//결제할 총액 변수 선언 (자식창으로 보냄)
var totalPrice = 0; 

function Product(name, price) {
    this.name = name;
    this.price = price;
}

let products = [
    new Product('대뱃살', 3000),
    new Product('목살', 5000),
    new Product('배꼽살', 4000),
    new Product('중뱃살', 1000),
]

//products를 화면에 나타내기
let productList = document.getElementById('productList');

products.forEach(item => {
    //옵션 생성
    let option = document.createElement('option');

    option.name = item.name;
    option.price = item.price;

    option.innerHTML = `${item.name} - ${item.price}`
    productList.appendChild(option);
});

//옵션 선택했을 때 (ctrl+클릭헤야 다중선택 됨)
productList.addEventListener('change', function() {  
    selectedOptions = [];
    totalPrice = 0;
    
    //선택된 option을 담을 배열 만들기
    for (let i = 0; i < productList.options.length; i++) {
        //선택된 것만 담기
        if (productList.options[i].selected) {
            selectedOptions.push(`${productList.options[i].name} - ${productList.options[i].price}`);

            console.log(selectedOptions);
            //선택된 option들의 가격
            let selectedOptionPrice = 0;
            selectedOptionPrice = productList.options[i].price;
            totalPrice += selectedOptionPrice;
        }
    }
    
    //resultNode 내용 만들기
    resultNode.innerHTML = '';
    
    //선택된 항목
    let title = document.createElement('h3');
    let titleText = document.createTextNode('선택된 항목');
    
    title.appendChild(titleText);
    resultNode.appendChild(title);
    
    //선택된 옵션 li로 표현
    let list = document.createElement('ul');
    selectedOptions.forEach(item => {
        let selectedOptionsList = document.createElement('li');
        selectedOptionsList.innerHTML = item;
        list.appendChild(selectedOptionsList);
    });

    resultNode.appendChild(list);

    //총액
    let priceTitle = document.createElement('h3');
    let priceTitleText = document.createTextNode(`총액: ${totalPrice}`);

    priceTitle.appendChild(priceTitleText);
    resultNode.appendChild(priceTitle);
});

//결제하기 버튼 클릭
function buyProduct() {
    //결제할 상품이 없을 때
    if (selectedOptions.length == 0) {
        alert('결제할 상품을 선택해야 합니다.');
    } else {
        //새로운 창으로 넘어감
        let childWin = window.open('pay.html', '_blank', 'left=50, top=50, width =500, height=500');
        childWin.totalPrice = totalPrice;
    }
}

//자식창에서 input값 전달 받기
function getInputData(inputNode, totalPrice) {
    alert(`${inputNode} 로 ${totalPrice} 원이 결제 완료 되었습니다.`);
}