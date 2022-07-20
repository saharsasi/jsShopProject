const colors = ['red', 'gray', 'blue', 'black'];
const products = [
  {
    catagory: 'apple',
    phones: [
      {
        id: 'iphone13',
        model: 'iphone 13',
        price: 800,
        colors,
        productInfo: 
          `Apple's iPhone 13 features a ceramic shield front, Super Retina XDR display with True Tone and an A15 Bionic chip. The first design change users will notice is the smaller notch`,
        imgUrl:
          'https://ksp.co.il/shop/items/512/173268.jpg?v=3776',
      },
      {
        id: 'iphone13ProMax',
        model: 'iphone 13 pro max',
        price: 1200,
        colors,
        productInfo:
          'Apple biggest phone in the lineup with a massive, 6.7" screen that for the first time in an iPhone comes with 120Hz ProMotion display that ensures super smooth scrolling',
        imgUrl:
          'https://ksp.co.il/shop/items/512/198271.jpg?v=3776',
      },
      {
        id: 'iphone12',
        model: 'iphone 12',
        price: 700,
        colors,
        productInfo:
          'The phone come in 6.1-inch and 5.4-inch sizes with identical features, including support for 5G cellular networks',
        imgUrl: 'https://ksp.co.il/shop/items/512/124953.jpg?v=3776',
      },
      {
        id: 'iphone12Pro',
        model: 'iphone 12 pro',
        price: 850,
        colors,
        productInfo:
          'Best iPhone ever features the powerful A14 Bionic, all-new design with Ceramic Shield, pro camera system, LiDAR Scanner, and the biggest Super Retina XDR display ever on an iPhone',
        imgUrl:
          'https://ksp.co.il/shop/items/512/125095.jpg?v=3776',
      },
    ],
  },
  {
    catagory: 'samsung',
    phones: [
      {
        id:'galaxys21',
        model: 'galaxy S21',
        price: 600,
        colors,
        productInfo: 
          'The Samsung Galaxy S21 specs are top-notch including a Snapdragon 888 chipset, 5G capability, 8GB RAM coupled with 128/256GB storage, and a 4000mAh battery.',
        imgUrl:
          'https://ksp.co.il/shop/items/512/185094.jpg?v=3776',
      },
      {
        id:'galaxys21Plus',
        model: 'galaxy S21 Plus',
        price: 750,
        colors,
        productInfo:
          'the phone come with 6.8" edge Quad HD+ Dynamic AMOLED 2X Infinity-O Display (3200x1440) 515 ppi HDR10+ certified 120Hz refresh rate.',
        imgUrl:
          'https://ksp.co.il/shop/items/512/191480.jpg?v=3776',
      },
      {
        id:'galaxys22',
        model: 'galaxy S22 ',
        price: 800,
        colors,
        productInfo:
          'top-notch including a Snapdragon 8 Gen 1 chipset, 8GB RAM coupled with 128/256GB storage, and a 3700mAh battery with 25W charging speed',
        imgUrl: 'https://ksp.co.il/shop/items/512/191476.jpg?v=3776',
      },
      {
        id:'galaxys22Ultra',
        model: 'galaxy S22 ultra',
        price: 900,
        colors,
        productInfo:
          'the phone come with 6.8" edge Quad HD+ Dynamic AMOLED 2X Infinity-O Display (3088x1440) 500 ppi HDR10+ certified 120Hz refresh rate.',
        imgUrl:
          'https://ksp.co.il/shop/items/512/191449.jpg?v=3776',
      },
    ],
  },
  {
    catagory: 'xiaomi',
    phones: [
      {
        id:'redmiNote10',
        model: 'redmi note10',
        price: 600,
        colors,
        productInfo:
          '  Rear Camera. 48MP Quad Camera Array · Front Camera. 13MP In-display Front Camera · Processor. Qualcomm® Snapdragon™ 678 · Operating system. MIUI 12 .',
        imgUrl:
          'https://ksp.co.il/shop/items/512/160103.jpg?v=3776',
      },
      {
        id:'redmiNote10Pro',
        model: 'redmi note10 pro',
        price: 700,
        colors,
        productInfo:
          'Processor Qualcomm Snapdragon 680 ; Front Camera 13MP ; Rear Camera 50MP + 8MP + 2MP + 2MP ; RAM 4GB, 6GB ; Storage 64GB, 128GB.',
        imgUrl:
          'https://ksp.co.il/shop/items/512/166282.jpg?v=3776',
      },
      {
        id:'xiaomi12',
        model: 'xiaomi 12',
        price: 500,
        colors,
        productInfo:
          'Resolution, 1080 x 2400 pixels, 20:9 ratio (~419 ppi density) ; Protection, Corning Gorilla Glass Victus ; Platform, OS ; Chipset, Qualcomm SM8450.',
        imgUrl: 'https://ksp.co.il/shop/items/512/199066.jpg?v=3776',
      },
      {
        id:'xiaomi12Pro',
        model: 'xiaomi 12 pro',
        price: 580,
        colors,
        productInfo:
          'comes with a pro-grade 50MP triple camera array, WQHD+ dynamic 120Hz display, the most advanced Snapdragon® 8 Gen 1 chipset yet.',
        imgUrl:
          'https://ksp.co.il/shop/items/512/199059.jpg?v=3776',
      },
    ],
  },
  {
    catagory: 'huawei',
    phones: [
      {
        id:'p30',
        model: 'p30',
        price: 400,
        colors,
        productInfo:
          'Featuring a sleek and durable design, an advanced new dual-camera system for improved photos and videos in low light, and introducing Cinematic mode',
        imgUrl:
          'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/phones/new-phones/series-products/p30-pro-blue.png',
      },
      {
        id:'p30Pro',
        model: 'p30 pro',
        price: 500,
        colors,
        productInfo:
          'is powered by a 1.8GHz octa-core HiSilicon Kirin 980 processor that features 2 cores clocked at 2.6GHz, It comes with 6GB of RAM.',
        imgUrl:
          'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/phones/new-phones/series-products/P30_orange.png',
      },
      {
        id:'p40',
        model: 'p40',
        price: 600,
        colors,
        productInfo:
          ' 6 GB and 8 GB RAM with the internal storage is 128 GB and 256 GB options. The Huawei P40 is fueled with a non-removable Li-Po 3800 mAh battery + Fast battery charging 22.5W.',
        imgUrl: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/phones/new-phones/series-products/p40-silver.png',
      },
      {
        id:'p40Pro',
        model: 'p40 pro',
        price: 750,
        colors,
        productInfo:
          '8 GB RAM and 128 GB/256GB/512GB internal storage options. The smartphone is powered by the HiSilicon Kirin 990 5G Octa-core processor.',
        imgUrl:
          'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/phones/new-phones/series-products/p40-pro-plus-white.png',
      },
    ],
  },
];
