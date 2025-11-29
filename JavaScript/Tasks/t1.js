// let nums = [10, 20, 30, 40];
// let t1 = nums.map((val, i, nums) =>{
//     return val + i;
// })
// console.log(t1);


// let nums = [21, 45, 63, 84];
// let t2 = nums.map((val)=>{return val%10})
// console.log(t2);

// let nums = [4, 9, 12, 7];
// let t3 = nums.map((val) =>{
//     if(val%2 == 0)return val/2;
//     else return val*2;
// })
// console.log(t3);

// let nums = [10, 30, 22, 40, 5];
// let t4 = nums.filter((val)=>val > 25)
// console.log(t4);

// let nums = [9, 10, 12, 20, 21];
// let t5 = nums.filter((val)=>{return val%3==0})
// console.log(t5);



// let t6 = nums.filter((val)=>val%2!=0)
// console.log(t6);

// let t7 = nums.reduce((sum, val)=>{return sum+val},0)
// console.log(t7);

// let t8 = nums.reduce((max, val)=>{return max < val ? val : max},0)
// console.log(t8);


// let t9 = nums.reduce((prod,val)=>prod*val)
// console.log(t9)

// let t10 = nums.find((val)=>val>50)
// console.log(t10);

// let nums = [8, 10, 12, 15, 20]
// let t11 = nums.find((val)=>val%2==0)
// console.log(t11);

//12
// console.log(nums.find((val)=>val%3==0 && val%5==0));

//13
// console.log(nums.sort((a,b)=>a-b));

//14
// console.log(nums.sort((a,b)=>b-a));

//15
// console.log();

// 16
// let nums = [5, 10, 2];
// let t16 = (nums)=>{
    // for(let i=0;i<nums.length;i++){
    //     console.log(nums[i]*i);
        
    // }
// }
// t16(nums);

//17
// let nums = [20, 70, 30, 99];
// for(let i=0;i<nums.length;i++){
//     if(nums[i] > 50){
//         console.log("Big");
//     }
//     else{
//         console.log("Small");
        
//     }
    
// }

//18
// let nums = [3,5,7];
// let sum = 0;
// for(let i=0;i<nums.length;i++){
//     sum += nums[i];
//     console.log(sum);
    
// }


//19
// let nums = [5, 10, -2, 20]
// let t19 = nums.some((val)=>val<0)
// console.log(t19);


//20
// let nums = [10, 14, 22]
// let t20 = nums.some((val)=>val%7==0)
// console.log(t20);

// 21
// let nums = [50, 120, 700, 40]
// let t21 = nums.some((val)=>val>500)
// console.log(t21);

//22
// let nums = [3, 9, 12, 20]
// let t22 = nums.every((val)=>val>0)
// console.log(t22);

//23
//  let nums = [2, 4, 6, 7]
// let t23 = nums.every((val)=>val%2==0)
// console.log(t23)

//24
// let nums = [12, 15, 22, 11]
// let t24 = nums.every((val)=>val>10)
// console.log(t24)

//25
// let nums = [5, 8, 3, 10, 12];
// let t24 = nums.filter((val)=>val%2==0);
// console.log("Evens : ",nums.filter((val)=>val%2==0));
// let temp = t24.map((val)=>val*2)
// console.log("Double : ",temp);
// console.log("Sum : ",temp.reduce((sum,val)=>sum+val,0))

//26
// let nums = [10, 6, 15, 20, 30, 18];
// console.log("First Odd : ",nums.find((val)=>val%2!=0));
// let filter = nums.filter((val)=>val%15==0);
// console.log("Div by 15 : ",nums.filter((val)=>val%15==0));
// console.log("Count : ",filter.length);

//27
// let nums = [5, 22, 10, 30, 12];
// let a = nums.filter((val)=>val>20)
// console.log("Filtered : ",a);
// let b = a.map((val)=>val*val)
// console.log("Squared : ",b);
// let c = b.sort((a,b)=>a-b);
// console.log("Sorted : ",c);

//28
// let nums = [10, -5, 30];
// let a = nums.some((val)=>val<0)
// console.log(a);

// let sum = 0;
// for(let i=0;i<nums.length;i++){
//     if(nums[i] > 0)
//         sum+=nums[i];
// }
// console.log(sum);

//29
// let nums =[5, 10, 15, 20]
// console.log(nums[nums.length-1]-nums[0]);

//30
let nums = [20, 55, 10, 40];
let a = nums.find((val)=>val>50);
console.log(a);
let b = nums.filter((val)=>val<50)
console.log(b);
let c = b.map((val)=>val/2)
console.log(c);

















