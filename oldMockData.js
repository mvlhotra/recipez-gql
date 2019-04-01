let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
},
{
  id: 'link-1',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
},
{
  id: 'link-2',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}
]

let users = [{
  "id": 1,
  "first_name": "Lowe",
  "last_name": "Shaul",
  "email": "lshaul0@soup.io",
  "password": "iNTVLKP0"
}, {
  "id": 2,
  "first_name": "Kriste",
  "last_name": "Paull",
  "email": "kpaull1@amazon.co.jp",
  "password": "bioQhyJC"
}, {
  "id": 3,
  "first_name": "Calypso",
  "last_name": "Bennallck",
  "email": "cbennallck2@mit.edu",
  "password": "e8LuC2"
}]

let creations = [{
  "id": 1,
  "user_id": 1,
  "name": "Showy Spleenwort",
  "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
}, {
  "id": 2,
  "user_id": 1,
  "name": "South African Lovegrass",
  "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
}, {
  "id": 3,
  "user_id": 2,
  "name": "Ferntree",
  "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
}, {
  "id": 4,
  "user_id": 1,
  "name": "Canyon Bird's-foot Trefoil",
  "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
}, {
  "id": 5,
  "user_id": 1,
  "name": "Christmas Cactus",
  "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
}, {
  "id": 6,
  "user_id": 3,
  "name": "Cowparsnip",
  "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
}]

let comments = [{
  "id": 1,
  "user_id": 2,
  "text": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
}, {
  "id": 2,
  "user_id": 3,
  "text": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "id": 3,
  "user_id": 2,
  "text": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
}]

let saved_recipes = [{
  "id": 1,
  "user_id": 3,
  "recipe_link": "https://scientificamerican.com/mattis.png"
}, {
  "id": 2,
  "user_id": 1,
  "recipe_link": "http://craigslist.org/lacinia/erat/vestibulum/sed/magna.json"
}, {
  "id": 3,
  "user_id": 2,
  "recipe_link": "http://blinklist.com/etiam/vel/augue/vestibulum/rutrum/rutrum.aspx"
}]

let ingredient_types = [{
  "id": 1,
  "name": "Fruit"
}, {
  "id": 2,
  "name": "Vegetable"
}]

let ingredients = [{
  "id": 1,
  "ingredient_type_id": 2,
  "name": "Mushroom"
}, {
  "id": 2,
  "ingredient_type_id": 2,
  "name": "Green Pepper"
}, {
  "id": 3,
  "ingredient_type_id": 2,
  "name": "Cucumber"
}, {
  "id": 4,
  "ingredient_type_id": 1,
  "name": "Apple"
}, {
  "id": 5,
  "ingredient_type_id": 1,
  "name": "Blackberry"
}, {
  "id": 6,
  "ingredient_type_id": 1,
  "name": "Strawberry"
}]

let linkCount = links.length
let userCount = users.length
let creationCount = creations.length
let commentCount = comments.length
let savedRecipeCount = saved_recipes.length
let ingredientCount = ingredients.length
let ingredientTypeCount = ingredient_types.length