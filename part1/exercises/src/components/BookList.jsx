export default function BookList() {
   let pageTitle = "Books I've Read";
   let book1 = "https://www.google.com/imgres?q=novice%20book&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F817OP44fRNL._AC_UF894%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FNovice-Summoner-Book-One-Trilogy%2Fdp%2F1250080053&docid=ywD6ISSYosS2fM&tbnid=31_nv7iatW40FM&vet=12ahUKEwjusv34hYmIAxX3hYkEHfoIDN4QM3oECBgQAA..i&w=666&h=1000&hcb=2&ved=2ahUKEwjusv34hYmIAxX3hYkEHfoIDN4QM3oECBgQAA";
   let book2 = "https://www.google.com/imgres?q=mask%20of%20shadows&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F91Z25v9IDTL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FMask-Shadows-Linsey-Miller%2Fdp%2F1492647497&docid=ikAj-YsBjX2uxM&tbnid=swZT3hAe4lYTkM&vet=12ahUKEwiM0JfbhomIAxWYk4kEHX6EOBQQM3oECDEQAA..i&w=662&h=1000&hcb=2&ved=2ahUKEwiM0JfbhomIAxWYk4kEHX6EOBQQM3oECDEQAA";
   let book3 = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FFrostblood-Saga-Elly-Blake%2Fdp%2F031627318X&psig=AOvVaw1MjVn32i7cpwG0q64W7GPW&ust=1724431722132000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjC-PSGiYgDFQAAAAAdAAAAABAE";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Novice by Taran Matharu |" />
         <img src={book2} alt=" Mask of Shadows by Linsey Miller |" />
         <img src={book3} alt=" Frostblood by Elly Blake " />
      </div>      
   );
}