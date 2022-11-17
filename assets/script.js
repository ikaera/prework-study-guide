var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
 for (var x = 0; x < topics.length; x++) {
   console.log(topics[x]);
 }
}

function selectTopic() {
 if (randomTopic === 'HTML') {
   console.log("Let's study HTML!");
 } else if (randomTopic === 'CSS') {
   console.log("Let's study CSS!");
 } else if (randomTopic === 'Git') {
   console.log("Let's study Git!");
 } else if (randomTopic === 'JavaScript') {
   console.log("Let's study JavaScript!");
 } else {
   console.log('Please try again!');
 }
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();

// // var shape = 'circle';
// // var topics = 'HTML, CSS, Git, JavaScript'
// var topic = 'HTML';

// var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

// function listTopics() {
// for (var x = 0; x < topics.length; x++) {
//  console.log(topics[x]);
// }
// }

// function selectTopic() {
//   if (topic === 'HTML') {
//     console.log("Let us study HTML!");
//     }else if (topic === 'CSS') {
//       console.log("Let us study CSS!");
//     }else if(topic==='Git') {
//       console.log("Let us study Git!");
//     }else if(topic==='JavaScript'){
//       console.log("Let us study JavaScript");
//     }
//       else {
//         console.log("Please try again!");
//       }
  
//       // var shapes = ["triangle", "square", "pentagon", "circle"];
//       // console.log(shapes[0]);
//       // console.log(shapes[1]);
//       // console.log(shapes[2]);
//       // console.log(shapes[3]);
// }



