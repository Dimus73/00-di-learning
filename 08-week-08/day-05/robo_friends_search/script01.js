const body = document.body;
const head = document.head;
let cardsList=[];

//Add fon
body.style.backgroundImage = 'url("circuit-pattern.png")';

//Add font
let link_font = document.createElement('link');
link_font.href = "https://fonts.cdnfonts.com/css/sega-logo-font";
link_font.rel = "stylesheet";
head.appendChild (link_font);

//Add top bar
topBar = createTopBar ();
body.appendChild (topBar);

//Create cards
let cards = createCardsConteyner();
body.appendChild(cards);
let robots = data();
for (let robot of robots){
  let {id, ...rest}=robot;
  let card = createCard(...Object.values(rest));
  cardsList.push(card);
  cards.appendChild(card);    
}


function createTopBar(){
  let navBar = document.createElement('div');
  navBar.style.position = 'fixed';
  navBar.style.top = 0;
  navBar.style.left = 0;
  navBar.style.backgroundColor = "rgb(106,223,130)";
  navBar.style.display = 'flex';
  navBar.style.flexWrap = 'wrap';
  navBar.style.width = '100%';
  navBar.style.border = '5px solid rgb(106,223,130)';

  let text = document.createElement('div');
  text.textContent = "ROBOFRENDS";
  text.style.display = 'inline-block';
  text.style.fontSize = '50px';
  text.style.margin ='20px';
  text.style.fontFamily = "'SEGA LOGO FONT', sans-serif";
  navBar.appendChild (text);

  let search = document.createElement('input');
  search.setAttribute('name', 'robo_name');
  // text.style.display = 'inline-flex';
  search.type = 'text';
  search.style.width = '60%';
  search.style.fontSize = '40px';
  search.style.margin = 'auto';
  search.setAttribute ('placeholder','Searc Robot')
  search.addEventListener ('input', onNameIntut);
  navBar.appendChild(search);

  return navBar;
}

function createCardsConteyner(){
  let cards = document.createElement('div');
  cards.style.width = '90%';
  cards.style.display = 'flex';
  cards.style.justifyContent = 'space-around'
  cards.style.flexWrap = 'wrap';
  cards.style.margin ='0px auto';
  cards.style.marginTop = '100px';

  return cards;
}

function createCard (name, username, email, image){
  const cardBodyWidth = 300;
  let cardBody = document.createElement('div');
  cardBody.style.display = 'inline-block';
  cardBody.style.width = `${cardBodyWidth}px`;
  cardBody.style.height = `${cardBodyWidth/3*4}px`;
  cardBody.style.borderRadius = '20px';
  cardBody.style.backgroundImage = 'url("card-pattern.png")';
  cardBody.style.backgroundColor = 'rgb(62, 193, 197)';
  cardBody.style.margin = "2%";
  cardBody.setAttribute ('name', name);

  let divPhoto = document.createElement('div');
  divPhoto.style.overflow = 'hidden';
  divPhoto.style.display = 'flex';
  divPhoto.style.justifyContent = 'center';
  divPhoto.style.alignItems = 'center';
  divPhoto.style.width = `${cardBodyWidth*0.9}px`;
  divPhoto.style.borderRadius = '50%';
  divPhoto.style.height = `${cardBodyWidth*0.9}px`;
  divPhoto.style.backgroundColor = 'rgb(48, 57, 82)';
  divPhoto.style.margin ='20px auto'
  cardBody.appendChild (divPhoto);

  let imgRobot = document.createElement('img');
  imgRobot.src = image;
  imgRobot.style.width='auto';
  imgRobot.style.height='100%';
  // imgRobot.width = '90px';
  divPhoto.appendChild(imgRobot);

  let divName = document.createElement('div');
  divName.textContent = name;
  divName.style.fontFamily = 'sans-serif';
  divName.style.fontSize = '25px';
  divName.style.marginLeft = '20px';
  cardBody.appendChild(divName);

  let divEmail = document.createElement('div');
  divEmail.textContent = email;
  divEmail.style.fontFamily = 'sans-serif';
  divEmail.style.fontSize = '15px';
  divEmail.style.marginLeft = '20px';
  divEmail.style.marginTop = '10px';
  cardBody.appendChild(divEmail);

  return cardBody;
}

function data (searchString){
  const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];
    let result = robots.filter((item)=>true);

    return result;
}


//Events processing
function onNameIntut (e){
  let search = e.target.value;
  cardsList.forEach((item)=>{
    let temp = item.getAttribute('name');
    console.log(item.getAttribute('name').toLowerCase(), search.toLowerCase(), temp);
    if (temp.toLowerCase().indexOf(search.toLowerCase())!=-1){
      item.style.display = 'inline-block'
    } else {
      item.style.display = 'none'
    }
  })
}