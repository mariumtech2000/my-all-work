let books = [
{
  name:"War and Peace",
  title:"This article is about the novel by Leo Tolstoy.",
  quote:'"A legendary masterpiece,this book is synonymous with difficult reading, so why not challenge yourshelf."',
  author:"LEO TOLSTOY",
  imgURL:"war-and-peace.jpg",
  readmoreURL:"https://en.wikipedia.org/wiki/War_and_Peace"
},
{
  name:"The Shadow Of The Wind",
  title:"The book was translated into English in 2004 by Lucia Graves.",
  quote:'"An incredible book by a beloved writer is a must read."',
  author:"CARLOS RUIZ ZAFON",
  imgURL:"the-shadow-of-the-wind.jpg",
  readmoreURL:"https://en.wikipedia.org/wiki/The_Shadow_of_the_Wind"

},
{
  name:"The Help",
  title:"The Help is a 2009 novel by American author Kathryn Stockett.",
  quote:'"An incredible book by a beloved writer is a must read."',
  author:"KATHRYN STOCKETT",
  imgURL:"the-help.jpg",
  readmoreURL:"https://en.wikipedia.org/wiki/The_Help"
},
{
  name:"Song Of Solomon",
  title:"Song of Solomon is a 1977 novel by American author Toni Morrison",
  quote:'"One must always read a novel by this Nobel Prize winning author."',
  author:"TONI MORRISON",
  imgURL:"song-of-solomon.jpg",
  readmoreURL:"https://en.wikipedia.org/wiki/Song_of_Solomon_(novel)"
},
{
  name:"Little Women",
  title:"This article is about the novel. For other uses, see Little Women",
  quote:'"Because you need to know Meg, Beth, Jo, and Amy."',
  author:"LOUISA MAY ALCOTT",
  imgURL:"little-women.jpg",
  readmoreURL:"https://en.wikipedia.org/wiki/Little_Women"
},
{
 name:"Kite Runner",
 title:"The Kite Runner is the first novel by Afghan-American author Khaled Hosseini",
 quote:'"The Kite Runner is a 21st century classic. If you’ve read this brilliant book, read it again."',
 author:"KHALED HOSSEINI",
 imgURL:"kite-runner.jpg",
 readmoreURL:"https://en.wikipedia.org/wiki/The_Kite_Runner"
},
{
  name:"The Golden Compass",
  title:"The Golden Compass is a 2007 fantasy adventure film based on Northern Lights, the first novel in Philip Pullman's",
  quote:'"Go on an adventure this year with this thrilling fantasy tale."',
  author:"PHILIP PULLMAN",
  imgURL:"golden-compass.jpg",
  readmoreURL:"https://en.wikipedia.org/wiki/The_Golden_Compass_(film)"
},
{
  name:"1984",
  title:"This article is about the 1949 novel by George Orwell.",
  quote:'"We were pretty certain you’ve read one of the best books of all time, but in case you haven’t, now’s your chance."',
  author:"GEORGE ORWELL",
  imgURL:"1984.jpg",
  readmoreURL:"https://en.wikipedia.org/wiki/Nineteen_Eighty-Fou"
}
]

function initilizer(){
  let listEL = document.querySelector(".list-container");
  for (let i = 0; i < books.length; i++) {
    listEL.innerHTML += `
    <div class="books-img-div"
     style="background-image:url('img/${books[i].imgURL}')">
     <p class="img-hover" onclick="changeDetails(${i})">${books[i].name}</p>

     </div>
    
     `
  }
}


function changeDetails(indexNumb) {
  document.querySelector("#book-title").innerHTML = books[indexNumb].name;
  document.querySelector("#book-author").innerHTML = books[indexNumb].author;
  document.querySelector("#para").innerHTML = books[indexNumb].title;
  document.querySelector(".book-img").style = `background-image:url(img/${books[indexNumb].imgURL})`;
  document.querySelector("#link").href = books[indexNumb].readmoreURL;
}