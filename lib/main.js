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

function AnswerGenerator(){
    var random_number = Math.floor(Math.random()*10000);
    var result=0;
    var flag = true;
    if(random_number.toString().length!=4){
        flag=false;
    }else {
        var number_arr =random_number.toString().split("");
        var sort_arr=number_arr.sort();
        for(var i=0;i<sort_arr.length;i++){
            for(var j=i;j<sort_arr.length-i;j++){
                if(sort_arr[i]==sort_arr[i+1]){
                    flag==false;
                }
            }
        }
    }
    if(flag){
        result=random_number;
        console.log(result);
        return result;
    }
}

module.exports = {CompareNumber,AnswerGenerator};
