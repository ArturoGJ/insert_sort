## [Insert Sort](https://editor.p5js.org/ArturoGJ/present/xEMEwUv8c) 🃏
This project is an insert sort visualization in P5JS.  
It was much harder than I thought to make the visualization since you have to use the frame rate as your main loop.  
It was based on the following code that I wrote in Java when following the 'Introduction to Algorithms' book from Cormen, Leiserson, Rivest and Stein:

```Java
    public int[] insertSort(int[] A){
        /**
         * Insert sort algorithm, everything to the left of the array must be sorted, always.
         */
        for (int j = 1; j < A.length; j++){
            int key = A[j];

            int i = j - 1;
            while(i>=0 && A[i]>key){
                A[i + 1] = A[i];
                i--;
            }
            A[i+1] = key;
        }
        return A;
    }
```
To see it live click [here](https://editor.p5js.org/ArturoGJ/present/xEMEwUv8c).
