let array = [10, 15, 20, 30]
for (let i = 0; i < array.length; i++){
if (Par(array[i])) {   
    console.log(array[i] + " eh Par.");   
 }   
 if (!Par(i)) {
    console.log(i + " eh Impar. e o elemento é:" + array[i]);   
 }   
} 
function Par( numero) {   
return (numero % 2 == 0);   
}  


