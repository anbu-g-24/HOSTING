 let Book={
    title: " The Alchemist",
    authour: " paulo Coelho",
    year : 1988,
    getInfo :function(){
        console.log("Title:"  + this.title );
        console.log("Authour:"+ this.authour);
        console.log("year:" +this.year);
        
        
    }
 };
 Book.getInfo();


 let book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  year: 1988,
  getInfo: function () {
    console.log("Title: " + this.title);
    console.log("Author: " + this.author);
    console.log("Year: " + this.year);
  }
};

book.getInfo();
