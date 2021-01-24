const initialState = {
  user: {},
  cart: [],
  products: [
    [
      {
        "product_id": "13YVpQejeUW1LQnS2Wrzn",
        "product_name": "Nintendo 64",
        "product_price": 1600,
        "product_brand": "Nintendo",
        "product_url": "http://res.cloudinary.com/dboykqyz5/image/upload/v1610180731/nnpnb6etxxi3khqkbtds.jpg",
        "created_at": "2021-01-22T07:52:10.000Z"
      },
      {
        "product_id": "6QWTSn7kJ0eh3Wzjq-EA3",
        "product_name": "Nintendo Ds",
        "product_price": 900,
        "product_brand": "Nintendo",
        "product_url": "http://res.cloudinary.com/dboykqyz5/image/upload/v1610180536/hn1aaducngvc5e2aldhh.jpg",
        "created_at": "2021-01-22T07:52:10.000Z"
      },
      {
        "product_id": "cFEoVmfvKA7o04v23Cfqy",
        "product_name": "Nintendo 3ds",
        "product_price": 2500,
        "product_brand": "Nintendo",
        "product_url": "http://res.cloudinary.com/dboykqyz5/image/upload/v1610087163/sss9bcfep7gladbma4tu.jpg",
        "created_at": "2021-01-22T07:52:10.000Z"
      },
      {
        "product_id": "FHnYPgfn7dn6Ej5j6chAn",
        "product_name": "PlayStation Portable (PSP)",
        "product_price": 1450,
        "product_brand": "Sony",
        "product_url": "http://res.cloudinary.com/dboykqyz5/image/upload/v1610180998/rrfutpdpycfrdsvoepfk.jpg",
        "created_at": "2021-01-22T07:52:10.000Z"
      },
      {
        "product_id": "FxRO_mO-JgxwBOwbyO2J0",
        "product_name": "PlayStation 2",
        "product_price": 2000,
        "product_brand": "Sony",
        "product_url": "http://res.cloudinary.com/dboykqyz5/image/upload/v1610180836/xsqpidmfpybtoxalkd5v.jpg",
        "created_at": "2021-01-22T07:52:10.000Z"
      },
      {
        "product_id": "ICc5HCNGx7pjaQq_J8xhw",
        "product_name": "Famicom",
        "product_price": 1200,
        "product_brand": "Nintendo",
        "product_url": "http://res.cloudinary.com/dboykqyz5/image/upload/v1610180628/d405pii57icxeko3gzru.jpg",
        "created_at": "2021-01-22T07:52:10.000Z"
      },
      {
        "product_id": "kKV25Ds46dhPkfRVAySeU",
        "product_name": "PlayStation 3",
        "product_price": 2500,
        "product_brand": "Sony",
        "product_url": "http://res.cloudinary.com/dboykqyz5/image/upload/v1610180869/zerb1sbemgpblthdkmlg.jpg",
        "created_at": "2021-01-22T07:52:10.000Z"
      },
      {
        "product_id": "nG7SETw8z35O8xDvCkGx3",
        "product_name": "Nintendo Entertainment System (NES)",
        "product_price": 1450,
        "product_brand": "Nintendo",
        "product_url": "http://res.cloudinary.com/dboykqyz5/image/upload/v1610180797/dzppyfonkpwcb3ahjaee.jpg",
        "created_at": "2021-01-22T07:52:10.000Z"
      },
      {
        "product_id": "OPMj7qi_hcqE-dj-x5Hwp",
        "product_name": "Nintendo Game Cube",
        "product_price": 1500,
        "product_brand": "Nintendo",
        "product_url": "http://res.cloudinary.com/dboykqyz5/image/upload/v1610180665/ck7kfqu0jv1sdyoaahh9.jpg",
        "created_at": "2021-01-22T07:52:10.000Z"
      },
      {
        "product_id": "Q6LxIXrgo7Ned31F4wz1w",
        "product_name": "Xbox One Controller",
        "product_price": 1200,
        "product_brand": "Xbox",
        "product_url": "http://res.cloudinary.com/dboykqyz5/image/upload/v1610088268/sygjwvqkrrlsx6b1qrm2.jpg",
        "created_at": "2021-01-22T07:52:10.000Z"
      },
      {
        "product_id": "qmVfpvgK7LkmlCXbYSaU-",
        "product_name": "Wii",
        "product_price": 1800,
        "product_brand": "Nintendo",
        "product_url": "http://res.cloudinary.com/dboykqyz5/image/upload/v1610181066/f2dmpatihd7j3gmpepa4.jpg",
        "created_at": "2021-01-22T07:52:10.000Z"
      },
      {
        "product_id": "U4oz4xTimt3FLcMtxwN3n",
        "product_name": "Game And Watch",
        "product_price": 1300,
        "product_brand": "Nintendo",
        "product_url": "http://res.cloudinary.com/dboykqyz5/image/upload/v1610180711/lczhl6steahvwi4qmxpc.jpg",
        "created_at": "2021-01-22T07:52:10.000Z"
      },
      {
        "product_id": "xJlRepcK6aOfBckCGu_bi",
        "product_name": "PlayStation 4",
        "product_price": 6000,
        "product_brand": "Sony",
        "product_url": "http://res.cloudinary.com/dboykqyz5/image/upload/v1610180908/qoere0qxbebb03k3ukko.jpg",
        "created_at": "2021-01-22T07:52:10.000Z"
      },
      {
        "product_id": "z_Y89hpuUVaJ3LtXX1ODQ",
        "product_name": "Super Nintendo Entertainment System (SNES)",
        "product_price": 1600,
        "product_brand": "Nintendo",
        "product_url": "http://res.cloudinary.com/dboykqyz5/image/upload/v1610181027/xjvxgi3jxzh2dpiry10w.jpg",
        "created_at": "2021-01-22T07:52:10.000Z"
      }
    ]
  ],
  buyer: {},
  orders: [],
  currentProduct: {},
  total: null,
};


export default initialState;