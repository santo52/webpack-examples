const cats = require('./cats_other');
const cats2 = require('./cats');

document.title = "Ze Cats";
document.body.append("My favorite cats:");

const ul = document.createElement('ul');
for(let i = 0; i < cats.length; i++) {
  const cat = document.createElement('li');
  cat.innerHTML = cats[i];
  ul.append(cat);
}

document.body.append(ul);