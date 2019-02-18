function buildBasket(products) {
    var $basket = document.getElementById('basket')
    if (products && products.length) {
        for (var i = 0; i < products.length; i++) {
            var $div = document.createElement('div')
            $div.classList.add('product')
            var $elements = document.createElement('ul')
            $elements.classList.add('ul')
            for (var prop in products[i]) {
                var $element = document.createElement('li')
                $element.textContent = prop + ': ' + products[i][prop]
                $elements.appendChild($element)
            }
            $element[0].classList.add('name')
            $element[1].classList.add('quantity')
            $element[2].classList.add('price')
            var $button = document.createElement('button')
            $button.classList.add('button')
            $button.textContent = 'Добавить в корзину'
            $elements.appendChild($button)
            $div.appendChild($elements)
            $basket.appendChild($div)
            
        }
        
    } else {
        $basket.innerHTML = ''
        var $div = document.createElement('div')
        $div.classList.add('empty')
        $div.textContenet = 'Ваша корзина пуста'
        $basket.appendChild($div)
    }
}

var productsList = [ 
    {
        Товар: 'Синтезатор', 
        Цена: 12000, 
        Количество: 1,
    },
    {
        Товар: 'Педаль',
        Цена: 1500,
        Количество: 1,
    },
    {
        Товар: 'Нотные сборники',
        Цена: 200,
        Количество: 1,
    }
]
buildBasket(productsList)

var cart = []
var $template = $basket.cloneNode(true).children[0]
var $cart = document.createElement('div')
$basket.addEventListener('click', function(event){
    if (event.target.className === 'button') {
        var $parent = event.target.parentNode
        var name = $parent.querySelector('.name').textContenet
        var price = $parent.querySelector('.price').textContenet

        var index = -1
        for (var i = 0; i < cart.length; i++) {
            if ( cart[i].name === name) {
                isExists = true
                index = i
            }
        }
        if (index !== -1) {
            cart[index].quantity++
        } else {
            cart.push ({
                name: name,
                price: price,
                quantity: 1,
            })
        }
    }
})

function buildCart() {
    $cart.innerHTML = 'Корзина пуста'

    for(var i = 0; i < cart.length; i++) {
        var $item = $template.cloneNode(true)
        $item.querySelector('.name').textContent = cart[i].name
        $item.querySelector('.price').textContent = cart[i].price
        $item.querySelector('.quantity').textContent = cart[i].quantity

        $cart.appendChild($item)
    }
}

buildCart()

