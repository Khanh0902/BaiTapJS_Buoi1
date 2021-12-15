// Quy Đổi Tiền
/*
    phân tích :
        - input : nhập vào số tiền (50 USD)
        - processs :
                + 1 USD = 23.500 VND
                + Quy Đổi Tiền = 23.500 * số tiền (USD)
        - output : thông báo số tiền đã quy đổi
*/

var soTien = 50;
var motUSD = 23500;
var quyDoi = soTien * motUSD;
console.log("Số Tiền Đã Quy Đổi Là :", quyDoi);
