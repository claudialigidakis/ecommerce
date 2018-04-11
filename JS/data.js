//user data to push into
let userData = {
  'order' : [],
  'name' : '',
  'email' : '',
  'address' : '',
  'city' : '',
  'state' : '',
  'zip' : ''

}


//product information
const products =
  {
    'breakfast' : {
    'Jawsome Breakfast Scramble' : {
      'image' : 'images/BreakfastScramble.jpg',
      'price' : 14,
      'description' : 'a filling attack against any hunger'
    },
    'Mako own Burrito' : {
      'image' : 'images/burritoMug.jpg',
      'price' : 15,
      'description' : 'small but filling'
    },
    'Grumpy Gills Grapefruit' : {
      'image' : url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CkSV5ciYebpHwKIw1ksG00vqG6jru2v470ELGESETdR1pVqd'),
      'price' : 9,
      'description' : 'perk up any morning with this jar of grapefruit'
    },
    'Buna-Buna-Buna bread' : {
      'image' : url('http://tiphero.com/wp-content/uploads/2017/05/Still_3_Banana_Bread_Mug.jpg'),
      'price' : 12,
      'description' : 'watch out for this addicting banana bread'
    }
  },


  'lunch' : {
    'Fin-tastic Pizza' : {
      'image' : 'images/pizzaInaMug.jpg',
      'price' : 13,
      'description' : 'Pizza!'
    },
    'Left-Shark mac' : {
      'image' : url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu3N8j0z6LHUk1eFW4hIeHd-VqtwS2wdbsWGAaZkSonnJ2Mq43eA'),
      'price' : 14,
      'description' : 'mac n cheese like your grandpa makes it'
    },
    'Great White Pot Pie' : {
      'image' : url('https://s-media-cache-ak0.pinimg.com/originals/74/a3/c9/74a3c95ce249e7794dee4863561a75e3.jpg'),
      'price' : 17,
      'description' : 'pot pie like your grandma makes it'
    }
  },


  'dessert' : {
    'Jaws Dropping Brownie' : {
      'image' : 'images/brownieMug.jpg',
      'price' : 9,
      'description' : 'hot chocolate decadent brownie'
    },
    'Fin Mint Chocolate Cake' : {
      'image' : url('https://www.kitchentreaty.com/wp-content/uploads/2016/03/chocolate-mint-mug-cake-sq-660x430.jpg'),
      'price' : 11,
      'description' : 'hot chocolate cake garnished with mint'
    },
    'Shark out of Water': {
      'image' : url('https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/12/3/0/FN_SC-Hot-Chocolate-Toasted-Marshmallow_s4x3.jpg.rend.hgtvcom.966.725.suffix/1449177520596.jpeg'),
      'price' : 9,
      'description' : 'hot chocolate and toasted marshmellows'
    }
  },


  'drinks' : {
    'Fishing for Donuts' : {
      'image' : url('https://s-media-cache-ak0.pinimg.com/originals/22/79/4b/22794b4da74028a5d574acde64f94718.jpg'),
      'price' : 5,
      'description' : 'A delightful combination of our signature coffee blend and donut holes!'
    },
    'Fin & Tonic' : {
      'image' : url('http://a57.foxnews.com/images.foxnews.com/content/fox-news/food-drink/2017/08/07/iconic-moscow-mule-copper-mug-may-be-poisoning-drinkers/_jcr_content/par/featured_image/media-0.img.jpg/931/524/1502155847995.jpg?ve=1&tl=1&text=big-top-image'),
      'price' : 12,
      'description' : text
    },
    'Hammertime LIIT' : {
      'image' : url('https://www.barproducts.com/media/catalog/product/cache/2/image/380x380/9df78eab33525d08d6e5fb8d27136e95/f/i/fish-bowl-46oz-filled2.jpgs'),
      'price' : 13,
      'description' : text
    },
    'Blood in the water Mary' : {
      'image' : url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzaRdTAUiZPzXNgacByUpySLBXkHb2WNvZVAAXWBfodMcGCEMKYA'),
      'price' : 13,
      'description' : text
    }
  }
}
