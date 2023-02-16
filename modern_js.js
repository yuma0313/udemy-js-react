//アロー関数
const func2 = (num1, num2) => num1 + num2;

console.log(func2(1, 3));

//分割代入
const myProfile = {
  name: 'yuma',
  age: 23
};

const message1 = `名前は${myProfile.name}です.年齢は${myProfile.age}歳です`;
console.log(message1);

const { name, age } = myProfile;
const message2 = `名前は${name}です.年齢は${age}歳です`;
console.log(message2);

//デフォルト値、引数
const sayHello = (name = "ゲスト") => console.log(`こんにちは、${name}さん`);
sayHello("yuma");

//スプレッド構文
//配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFanc = (num1, num2) => console.log(num1 + num2);
sumFanc(...arr1);

//配列をまとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// //配列をコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
arr6[0] = 120;
console.log(arr4, arr6);
console.log(arr6);
const arr7 = [...arr4, ...arr5];
console.log(arr7);

//mapやfilterを使った配列処理
const nameArr = ["田中", "山田", "勇真"];
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));
const newNameArr = nameArr.map((name) => {
  if (name === "勇真") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 0;
});

//三項演算子
const num = 100000;
const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
}
console.log(checkSum(40, 80));