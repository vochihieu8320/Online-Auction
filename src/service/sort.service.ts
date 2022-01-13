class SortService{
    insertionSort(inputArr: any) {
        let n = inputArr.length;
            for (let i = 1; i < n; i++) {
                // Choosing the first element in our unsorted subarray
                let current = inputArr[i]["auction"][0]["amount_bider_bide"] || 0;
                // The last element of our sorted subarray
                let j = i-1;
                let compare = inputArr[j]["auction"][0]["amount_bider_bide"] || 0;
                while ((j > -1) && (current < compare)) {
                    inputArr[j+1] = inputArr[j];
                    j--;
                }
                inputArr[j+1] = inputArr[i];
            }
        return inputArr;
    }
}

export default new SortService