const itemsData = [
    {
        "id":1,
        "pictureUrl":"https://http2.mlstatic.com/D_NQ_NP_885410-MLM40975937487_032020-W.jpg",
        "title":"Casio Quartz",
        "description": "Analógico",
        "category":"Analogico",
        "price": "50000",
        "stock": "10"
    },
    {
        "id":2,
        "pictureUrl":"https://cdnx.jumpseller.com/urbenmood/image/20332216/resize/635/635?1636060559",
        "title":"Smartwatch D20",
        "description": "Inteligente",
        "category":"Inteligente",
        "price": "130000",
        "stock": "4"
    },
    {
        "id":3,
        "pictureUrl":"https://images-eu.ssl-images-amazon.com/images/I/51v%2BasPMsQL.jpg",
        "title":"Skmei",
        "description": "Digital",
        "category":"Digital",
        "price": "100000",
        "stock": "5"
    },
    {
        "id":4,
        "pictureUrl":"https://stylewatch.vtexassets.com/arquivos/ids/195853-500-auto?v=637637027980200000&width=500&height=auto&aspect=true",
        "title":"Tommy Hilfiger Hendrix",
        "description": "Analógico",
        "category":"Analogico",
        "price": "15276",
        "stock": "20"
    },
    {
        "id":5,
        "pictureUrl":"https://cdnx.jumpseller.com/urbenmood/image/5862102/resize/635/635?1600903976",
        "title":"Cuarso",
        "description": "Analógico",
        "category":"Analogico",
        "price": "32000",
        "stock": "10"
    },
    {
        "id":6,
        "pictureUrl":"https://m.media-amazon.com/images/I/41E0vVxlpaL._SL500_.jpg",
        "title":"Casio",
        "description": "Inteligente",
        "category":"Inteligente",
        "price": "70000",
        "stock": "2"
    },
    {
        "id":7,
        "pictureUrl":"https://cdnx.jumpseller.com/urbenmood/image/15071055/resize/635/635?1614569040",
        "title":"Haylou",
        "description": "Inteligente",
        "category":"Inteligente",
        "price": "334740",
        "stock": "5"
    },
    {
        "id":8,
        "pictureUrl":"https://cdnx.jumpseller.com/urbenmood/image/5887328/resize/635/635?1578417864",
        "title":"Dragon",
        "description": "Analógico",
        "category":"Analogico",
        "price": "179940",
        "stock": "3"
    },
    {
        "id":9,
        "pictureUrl":"https://cdnx.jumpseller.com/urbenmood/image/5862070/resize/635/635?1578458054",
        "title":"Cuarso Casual",
        "description": "Analógico",
        "category":"Analogico",
        "price": "32000",
        "stock": "7"
    },
    {
        "id":10,
        "pictureUrl":"https://static2.abc.es/media/summum/2018/05/05/MKT5021_main-kEsG--660x372@abc.jpg",
        "title":"Michele Corse",
        "description": "Digital",
        "category":"Digital",
        "price": "20000",
        "stock": "3"
    },
    {
        "id":11,
        "pictureUrl":"https://cdnx.jumpseller.com/urbenmood/image/5770636/resize/635/635?1580782859",
        "title":"Lemfo",
        "description": "Inteligente",
        "category":"Inteligente",
        "price": "100000",
        "stock": "5"
    },
    {
        "id":12,
        "pictureUrl":"https://cdnx.jumpseller.com/urbenmood/image/6064198/resize/635/635?1578458078",
        "title":"Cuarso",
        "description": "Analógico",
        "category":"Analogico",
        "price": "40000",
        "stock": "5"
    },
    {
        "id":13,
        "pictureUrl":"https://cdnx.jumpseller.com/urbenmood/image/5770476/resize/635/635?1600903830",
        "title":"Skull",
        "description": "Analógico",
        "category":"Analogico",
        "price": "197940",
        "stock": "10"
    },
    {
        "id":14,
        "pictureUrl":"https://cdnx.jumpseller.com/urbenmood/image/11787713/resize/635/635?1600791477",
        "title":"Curren",
        "description": "Analógico",
        "category":"Analogico",
        "price": "188940",
        "stock": "11"
    },
    {
        "id":15,
        "pictureUrl":"https://cdnx.jumpseller.com/urbenmood/image/6074865/resize/635/635?1600906216",
        "title":"Skmei 1278",
        "description": "Digital",
        "category":"Digital",
        "price": "84540",
        "stock": "11"
    },
    {
        "id":16,
        "pictureUrl":"https://cdnx.jumpseller.com/urbenmood/image/5886703/resize/635/635?1578458068",
        "title":"Skmei 1335",
        "description": "Digital",
        "category":"Digital",
        "price": "134940",
        "stock": "11"
    },
]

const GetProducts = new Promise ((resolve) =>{
    setTimeout(() => {
        resolve(itemsData)
    }, 2000)
})

export default GetProducts