
function permAlone(str) {
    //Define variables and objects.

    let strArray = [];
    let index = 0;
    //push string into an array and sort it.
    for (let i = 0; i < str.length; i++) {
      strArray.push(str.charAt(i));
    }
    strArray.sort();
    let heapsArray = new heapsAlgorithm(strArray, strArray.length, strArray.length)
    console.log(heapsArray.permutations);
    console.log(strArray)
    // re
    // remove arrays with duplicate strings
    charArray.forEach(element => {
        for(let i = 0 ; i < charArray.length ; i++){
            if(element[i]== element[i-1]){
                charArray = remove_Element(charArray, index)
            }
            if(element[i]== element[i+1]){
                charArray = remove_Element(charArray, index)
            }
        }
        index++;
    })
    console.log(charArray.length)
    return charArray.length;
  }
  
  
  class heapsAlgorithm{
      constructor (array, size, n){
          this.array = array;
          this.size  = size;
          this.n     = n;
          heapsPermutation(array, size, n);
          this.permutations = [];
      }

      heapsPermutation(array, size, n){
        for(let i = 0 ; i < size ; i++){
            heapsPermutation(array, size - 1, n);
            if(size%2 == 1){
                let temp = array[0];
                array[0] = array[size - 1];
                array[size - 1] = temp;
            }
            else{
                let temp = array[i];
                array[i] = array[size-1];
                array[size - 1] = temp;
            }
        } 
        if(size == 1){
          this.permutations.push(array)
          console.log(this.permutations);
        }
      }
  }
  
  function remove_Element(charArray, index){
        for(let i = 0 ; i < charArray.length ; i++){
            charArray[i] = charArray[i+1]
        }
        charArray.pop()
        return charArray;
  }

  function heapsPermutation(array, size, n, count){
    let permutations =[];
    for(let i = 0 ; i < size ; i++){
        heapsPermutation(array, size - 1, n);
        if(size%2 == 1){
            let temp = array[0];
            array[0] = array[size - 1];
            array[size - 1] = temp;
        }
        else{
            let temp = array[i];
            array[i] = array[size-1];
            array[size - 1] = temp;
        }
    } 
    if(size == 1){
      permutations.push(array)
      console.log(permutations);
    }
    if(count === array.length)
  }

  permAlone('iud');