
function score2Love(scoreA, scoreB) {
  var score = ['Love','Fifteen','Thirty','Forty']
  if(scoreA == scoreB){
      if(scoreA > 2){
        return "Deuce"
      }
      return score[scoreA] + " All"
  }
  if(scoreA > 3){
    if(scoreA - scoreB == 1){
        return "A Advantage"
    }
    return "A Win"
  }

  return score[scoreA] + " " + score[scoreB];

  // dic=['Love','Fifteen','Thirty','Forty']
  // if(scoreA==scoreB){
  //   if(scoreA<=2){
  //     return dic[scoreA]+' All'
  //   }else{
  //     return 'Deuce'
  //   }
  // }
  // if(scoreA>=4&& scoreA-scoreB>=2){
  //   return 'A Win'
  // }
  // if(scoreA-scoreB>=1&& scoreA>=4){
  //   return "A Advantage"
  // }

  // return dic[scoreA]+' '+dic[scoreB]



  // if(scoreA-scoreB==4) {
  //   return "A Win"
  // }
  // if(scoreA==5 && scoreB==3) {
  //   return "A Win"
  // }

  // if(scoreA == 4 && scoreB == 3) {
  //   return "A Advantage";
  // }

  // if(scoreA == 2 &&scoreB == 2) {
  //   return "Thirty All";
  // }
  // if(scoreA == scoreB){
  //   if(scoreA == 0){
  //     return "Love All";
  //   }
  //   return "Deuce"
  // }

  // if(scoreA == 2 &&scoreB == 1) {
  //   return "Thirty Fifteen";
  // }
  // var str = "Love All";
  // var s = scoreA - scoreB;
  // if(s == 0){
  //   switch(scoreA){
  //     case 0:
  //     str = "Love All";
  //     break;
  //     case 1:
  //     str = "Fifteen Love";
  //     break;
  //     case 2:
  //     str = "Thirty Love";
  //     break;
  //     default:

  //     str = "Deuce";
  //     break;
  //   }
  // } else if(s > 4){

  // }

  // return str;
  // var map = {
  //   "4_4" : "A Win",
  //   "4_0" : "A Win",
  //   "2_1" : "Thirty Fifteen",
  //   "5_3" : "A Win",
  //   "4_3" : "A Addvantage",
  //   "0_0" : "Love All"
  // };

  // var key = scoreA+'_'+scoreB;

  // return map[key] || "Love All";


}



module.exports.score2Love = score2Love