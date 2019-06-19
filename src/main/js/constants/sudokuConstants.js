export const validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const digitsMaxLength = validNumbers.reduce((maxlength, num) => maxlength > num.toString().length ? maxlength : num.toString().length);
