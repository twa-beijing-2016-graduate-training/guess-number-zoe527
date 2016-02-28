function CompareNumber(answer,input){
    var answer_arr = answer.split("");
    var input_arr =input.split("");
    var result ="";
    var count_A=0;
    var count_B=0;
    for(var i= 0;i<answer_arr.length;i++){
        for(var j=0;j<input_arr.length;j++){
           if(input_arr[j]==answer_arr[i]){
               if(i==j){
                   count_A++;
               }else{
                   count_B++;
               }
           }

        }
    }
    result+=count_A+"A"+count_B+"B";
    return result;
}

module.exports = CompareNumber;
