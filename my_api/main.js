//Firebeceにする！！！
//メモ機能に感情API組み込む
//感情によってCSS動かす！

//召喚の儀
import {
  convertFromFirestoreTimestampToDatetime,
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  getDoc,
  deleteDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  db,
} from './firebace.js'

// データ送信
$("#save").on("click", function() {
  // inputの内容をtitle,textに保存する
    const data = {
      title :$("#input").val(),
      text :$("#text_area").val(),
      time: serverTimestamp(),
};
addDoc(collection(db,"weather_diary"),data);
$("#text").val("");
});

// 時間の新しい順に並び替えてconst qに取得（代入）//　db,"chat"はフォルダ
const q = query(collection(db, "weather_diary"), orderBy("time", "desc"));

//onSnapshotのタイミングで（）を処理　※querySnapshotはなんかのデータ
onSnapshot(q, (querySnapshot) => {
  console.log(querySnapshot.docs);

//データ取り出し// 
  const dataArray = [];
  querySnapshot.docs.forEach(function (doc) {
    const data = {
      id: doc.id,
      data: doc.data(),
    };
    dataArray.push(data);
  });
  
  console.log(dataArray);

  //タグ生成//
  const tagArray = [];
  dataArray.forEach(function (data) {
    tagArray.push(`
    <li id="${data.id}">
      <p>${data.data.name} at ${convertFromFirestoreTimestampToDatetime(data.data.time.seconds)}</p>
      <p>${data.data.text}</p>
      </li>
      `);
    });
    
    //エラーを発見する
    console.log(data);
      });



// // 読み込み時に
//   // ローカルストレージからJson形式のデータ取得
//    if(localStorage.getItem("memo")){
  
  // // Json形式から取り出してJsonDataに入れ込む
  //    const jsonData =localStorage.getItem("memo");
  // //  JSON形式をオブジェクトに{}に変換
  //    const data =JSON.parse(jsonData);
  
  // // 出力
  //   $('#input').val(data.title);
  //   $('#text_area').val(data.text);
  
  
  //   // データ削除 = 初級と一緒
  //   $("#clear").on("click", function(){
    //   // memoの内容を削除する
    //     localStorage.removeItem("memo");
    //   // テキストエリアに””として表示
    //     $("#text_area").val("");
    //     $("#input").val("");
    //   });
    
    