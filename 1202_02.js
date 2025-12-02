const winners=['Lee','Park','Kim','Choi'];
console.log(`우승자 Kim은 ${winners.indexOf('Kim')+1}번째 회원입니다.`);

const tags=["#JS","#CSS","#HTML"];
console.log(tags.join(','));

const stock=["banana","orange","apple","grape"];
console.log(stock.includes("apple"));

const hashTags="figma, illustrator, photoshop";
newData=hashTags.split(", ").map((data)=>"#"+data);;
console.log(newData);




