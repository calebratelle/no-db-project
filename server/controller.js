let TEST_DATA = [
  {
    photoURL: "https://rare-gallery.com/thumbnail/1312488-PikachuPikachu.png",
    name: "Pikachu",
    HP: 60,
    specialMove: "Thunder Shock"
  },
  {
    photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4e3a9Sz4gcawpJIzbKMQnzezG-6U1Ua-6g&usqp=CAU",
    name: "Bulbasaur",
    HP: 65,
    specialMove: "Iron Whip"
  },
  {
    photoURL: "https://e0.pxfuel.com/wallpapers/636/325/desktop-wallpaper-squirtle-pokemon-sticker-squirtle-pokemon-png-transparent-png-squirtle-sunglasses.jpg",
    name: "Squirtle",
    HP: 70,
    specialMove: "Ice Beam"
  },
  
  {
    photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3bEGDTEJ29FFTm5ivhZt_3peq0IvTY2X5Q&usqp=CAU",
    name: "Charmander",
    HP: 55,
    specialMove: "Flame Thrower"
  }
  
  
];

let globalId = 4

const handlerFunctions = {
  getInvoices: (req, res) => {
    res.send(TEST_DATA);
  },

  addItem: (req, res) => {
    const {description} = req.body

    const newObj = {
        id: globalId,
        description: description,
        rate: 0,
        hours: 0
    }

    TEST_DATA.push(newObj)

    globalId++
    
    res.send(newObj)
  },

  deleteItem: (req, res) => {
    const {id} = req.params

    let filteredList = TEST_DATA.filter(el => el.id !== +id)

    TEST_DATA = filteredList

    res.send('Item deleted')
  },

  updateItem: (req, res) => {
    const {id} = req.params
    const {description, rate, hours} = req.body
    const index = TEST_DATA.findIndex(el => el.id === +id)
    const item = TEST_DATA[index]

    item.description = description ?? item.description
    item.rate = +rate ?? item.rate
    item.hours = +hours ?? item.hours

    res.send(item)

  }
};

export default handlerFunctions;
