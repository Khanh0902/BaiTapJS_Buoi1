// Tính Tổng 2 Ký Số
/*
    phân tích :
        - input : nhập vào 1 số có 2 chữ số (79)
        - processs : Tổng 2 Ký số = (79 % 10) + (79 / 10)
        - output : thông báo tổng 2 ký số
*/

var kySo = 79;
var tong = (kySo % 10) + Math.floor(kySo / 10);
console.log("Tổng 2 Ký Số Là:", tong);
