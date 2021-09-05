var uniquePathsWithObstacles = function(arr) {
    
   if(arr == null || arr.length == 0) 
			return 0;
        for(let i = 0 ; i < arr.length; i++){
            for(let j = 0; j < arr[0].length; j++){
                arr[i][j] ^= 1;
                if(arr[i][j] == 1){
                    if(i == 0 && j != 0)
                        arr[i][j] = arr[i][j-1];
                    if(i != 0 && j == 0)
                        arr[i][j] = arr[i-1][j];
                    if(i != 0 && j != 0)
                        arr[i][j] = arr[i-1][j] + arr[i][j-1];
                }   
            }
        } 
        return arr[arr.length - 1][arr[0].length - 1]; 
    }
