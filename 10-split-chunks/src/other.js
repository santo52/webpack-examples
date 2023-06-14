const cats = require('./cats');
// const cats2 = require('./cats_other');

document.body.append("Let me show you those cats again:");

const ul = document.createElement('ul');
for(let i = 0; i < cats.length; i++) {
  const cat = document.createElement('li');
  cat.innerHTML = cats[i];
  ul.append(cat);
}

document.body.append(ul);