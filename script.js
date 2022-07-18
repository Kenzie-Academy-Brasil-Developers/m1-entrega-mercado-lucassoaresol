function recebeProdutos (arrayProdutos){
    for (let i=0;i<arrayProdutos.length;i++){
        let produto = arrayProdutos[i]
        if (produto.category == 'Frutas'){
            let secaoFrutas = document.querySelector('.fruits ul')
            let cardProduto = criaCardproduto(produto)
            secaoFrutas.appendChild(cardProduto)
        }
        if (produto.category == 'Bebidas'){
            let secaoFrutas = document.querySelector('.drinks ul')
            let cardProduto = criaCardproduto(produto)
            secaoFrutas.appendChild(cardProduto)
        }
        if (produto.category == 'Higiene'){
            let secaoFrutas = document.querySelector('.hygiene ul')
            let cardProduto = criaCardproduto(produto)
            secaoFrutas.appendChild(cardProduto)
        }
    }
}

function criaCardproduto (produto){
    let tagLiproduto = document.createElement('li')
    tagLiproduto.classList.add('product')

    let tagmainproduto = document.createElement('main')
    tagmainproduto.classList.add('product-main')

    let imageProduto = document.createElement('img')
    imageProduto.classList.add('product-img')
    if(produto.image == undefined){
        imageProduto.src = './img/products/no-img.svg'
        imageProduto.alt = 'Produto sem imagem'
    }
    else{
        imageProduto.src = produto.image
        imageProduto.alt = produto.title
    }

    let nomeProduto = document.createElement('h1')
    nomeProduto.classList.add('product-title')
    nomeProduto.innerText = produto.title

    let categoriaProduto = document.createElement('h5')
    categoriaProduto.classList.add('product-category')
    categoriaProduto.innerText = produto.category

    let precoProduto = document.createElement('strong')
    precoProduto.classList.add('product-price')
    precoProduto.innerText = `R$ ${produto.price}`.replace('.',',')

    tagLiproduto.appendChild(imageProduto)
    tagmainproduto.appendChild(nomeProduto)
    tagmainproduto.appendChild(categoriaProduto)
    tagmainproduto.appendChild(precoProduto)
    tagLiproduto.appendChild(tagmainproduto)

    return tagLiproduto
}

recebeProdutos(products)