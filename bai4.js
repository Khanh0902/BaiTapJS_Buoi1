// Tính Diện Tích, Chu Vi Hình Chữ Nhật
/*
    phân tích :
        - input : nhập vào chiều dài, chiều rộng hình chữ nhật (dài: 7, rộng: 5)
        - processs :
                + Diện tích = chiều dài * chiều rộng
                + Chu vi = (dài + rộng) / 2
        - output : thông báo diện tích, chu vi hình chữ nhật
*/

var chieuDai = 7;
var chieuRong = 5;
var chuVi = (chieuDai + chieuRong) / 2;
var dienTich = chieuRong * chieuDai;
console.log("Chu Vi Là:", chuVi);
console.log("Diện Tích Là:", dienTich);
