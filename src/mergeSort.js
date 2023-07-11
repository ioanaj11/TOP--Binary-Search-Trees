function mergeSort(array){
    if (array.length<2) return array;
    let leftside=array.slice(0, array.length/2 );
    let rightside=array.slice(array.length/2, array.length);
    return mergeSortedArrays(mergeSort(leftside),mergeSort(rightside))
}                

function mergeSortedArrays(array1, array2){
    let i=0;
    let j=0;
    let mergedArray=[];

    while(i<array1.length&&j<array2.length){
        if (array1[i]<array2[j]){
            mergedArray.push(array1[i]);
            i++;
        } else if (array1[i]>array2[j]){
            mergedArray.push(array2[j]);
            j++;}
            else {
                mergedArray.push(array1[i]);
                i++;
                j++;
            }
    }

    while(i<array1.length){
        mergedArray.push(array1[i]);
        i++;
    }

    while(j<array2.length){
        mergedArray.push(array2[j]);
        j++;
    }

    return mergedArray;
}

export {mergeSort}