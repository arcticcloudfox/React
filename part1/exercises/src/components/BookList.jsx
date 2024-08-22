export default function BookList() {
   let pageTitle = "Books I've Read";
   let book1 = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FNovice-Summoner-Book-One-Trilogy%2Fdp%2F1250080053&psig=AOvVaw0mTpiq-46Rauf5YIcfHA0g&ust=1724434808066000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOi6y6qSiYgDFQAAAAAdAAAAABAE";
   let book2 = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FMask-Shadows-Linsey-Miller%2Fdp%2F1492647497&psig=AOvVaw0hAx-c8euUk_KlaepX8uZa&ust=1724431673524000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDtjdeGiYgDFQAAAAAdAAAAABAE";
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