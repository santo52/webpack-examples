const cat1 = require('./images/cat1.png').default; // cats1 contains the output path of the required file.
const cats = require('./cats');

require('./main.css');

// Change document title
document.title = "Ze Cats";

// Add H1 tag
const h1 = document.createElement('h1');
h1.innerHTML = "My favorite cats:";
document.body.append(h1);

// Add UL List
const ul = document.createElement('ul');
for(let i = 0; i < cats.length; i++) {
  const cat = document.createElement('li');
  cat.innerHTML = cats[i];
  ul.append(cat);
}
document.body.append(ul);


// Add image
const img = document.createElement('img');
img.src = cat1;
img.width = 300;
document.body.append(img);
