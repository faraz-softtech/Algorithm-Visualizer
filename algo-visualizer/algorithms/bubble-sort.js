import { Pause } from '../utils'
import { SWAPING, SELECTED } from '../constants/index-states';

const BubbleSort = async (array, callbackSetData, callbackSetIndexesStates, getSortingSpeed, swapArr) => {
    const n = array.length;

    const getTimeout = () => {
        return 10 + (200 - getSortingSpeed() * 10);
    };

    let isSorted = false;
    while (isSorted == false) {
        isSorted = true;

        for (let i = 0; i < n - 1; i++) {
            callbackSetIndexesStates({ 
                [i]: SELECTED, 
                [i + 1]: SELECTED
            });
            //console.log("Active");
            await Pause(getTimeout());

            if (array[i] > array[i + 1]) {
                callbackSetIndexesStates({ 
                    [i]: SWAPING, 
                    [i + 1]: SWAPING
                });
                await Pause(getTimeout());
                await Pause(getTimeout());
                await Pause(getTimeout());
                await Pause(getTimeout());
                let temp = array[i + 1];
                array[i + 1] = array[i];
                array[i] = temp;

                isSorted = false;
                // alert("Swapping takes place")
                
                callbackSetData(array);
                await Pause(getTimeout());
            }
        }

        callbackSetData(array);
        // console.log("One cycle completed")
        await Pause(getTimeout());
    }
    callbackSetIndexesStates({});
}

export default BubbleSort;