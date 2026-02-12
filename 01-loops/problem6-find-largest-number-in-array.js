// Your reasoning is correct; just refine the condition direction.

// You want to ask:

// “Is the current element bigger than my stored maximum?”

// Not:

// maxvalue > arr[i]


// That asks the opposite question.

// The correct comparison logic is:

// arr[i] > maxvalue


// Because you only update when you find something larger.

// Decision Logic Per Iteration
// Condition	Action
// arr[i] > maxvalue → true	Update maxvalue
// false	Do nothing, continue

// So the loop continuously keeps the best value seen so far.

let arr = [45, 12, 89, 32, 7, 90, 23];

let maxvalue = arr[0];//starting value that will be used for comparison
for(let i=1; i< arr.length; i++)//started a loop for comparison 
{
  if( arr[i] > maxvalue){
  maxvalue = arr[i];
}

}
    console.log(maxvalue);