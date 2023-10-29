import { useCallback } from "react";

export const useConvertCurrency = (price:number) => {
    let convertValue: number | string = price;
    convertValue = convertValue.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    return convertValue.substring(0,convertValue.length-3)
}
