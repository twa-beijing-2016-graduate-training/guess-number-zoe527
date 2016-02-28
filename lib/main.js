function guess_num(input){
    return {
        CompareNumber:function(answer,input){
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
        },
        AnswerGenerator: function(){
            var random_number=0;
            var result=0;
            for(;;){
                var random_number = Math.floor(Math.random()*10000);
                var flag = true;
                if(random_number.toString().length!=4){
                    flag=false;
                }else {
                    var number_arr =random_number.toString().split("");
                    var sort_arr=number_arr.sort();
                    for(var i=0;i<sort_arr.length;i++){
                            if(sort_arr[i]==sort_arr[i+1]){
                                flag==false;
                            }
                    }
                }
                if(flag){
                    result =random_number;
                    break;
                }
            }
            return result;
            },
        Guess :function(input){
            var answer = this.AnswerGenerator();
            var result = this.CompareNumber(answer.toString(),input);
            console.log(result);
            return answer;
        },
        main: function (inputarr) {
            console.log("Welcome!\nPlease input your number(6): ");
            var answer = this.Guess(inputarr[5]);
            for (var i = 4; i >=0; i--) {
                var flag = true;
                var input_arr = inputarr[i].split("");
                var sort_arr = input_arr.sort();
                for (var k = 0; k < sort_arr.length - 1; k++) {
                    if (sort_arr[k] == sort_arr[k + 1]) {
                        flag = false;
                    }
                }
                if (!flag) {
                    console.log("Cannot input duplicate numbers!\n");
                    break;
                } else {
                    console.log("Please input your number(" + i + "): ");
                    var result = this.CompareNumber(answer.toString(), inputarr[i]);
                    if (result == "4A0B") {
                        console.log("Congratulations!");
                        break;
                    }else{
                        console.log(result);
                    }
                }
                if(i==0){
                    console.log("Game Over");
                }
            }
        }
    }
}
module.exports = guess_num;
