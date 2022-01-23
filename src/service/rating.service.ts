class RatingService{

    rating(rating_array:any, rate_number:any){
        //stringtify array
        const new_array = JSON.parse(rating_array);
        //check length of array
        if(new_array.length === 10)
        {
            //pop the first element from array
            new_array.shift();
        }
        else
        {
            new_array.push(rate_number)
        }
        //calculate rating
        let count = 0;
        for(let i = 0; i < new_array.length; i++){
            if(new_array[i] !== 0){
                count++;
            }
        }
        return count
    }
    show(rating_array:any)
    {
        if(!rating_array)
        {
            return 10;
        }
        else
        {
            const new_array = JSON.parse(rating_array);
            let count = 0;
            for(let i = 0; i < new_array.length; i++){
                if(new_array[i] !== 0){
                    count++;
                }
            }
            return count
        }
    }
}

export default new RatingService