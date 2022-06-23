1. let smallest = array[0]
2. let largest = array[0]
3. 4. for (let i = 0; i < array.length; i++) {
5.   if (smallest > array[i]) {
6.     smallest = array[i]
7.   } else if (largest < array[i]) {
8.     largest = array[i]
9.   }
10. }