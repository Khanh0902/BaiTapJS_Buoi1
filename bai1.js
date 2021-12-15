// Tính tiền lương nhân viên
/*
    phân tích :
        - input : số ngày làm việc (26 ngày)
        - processs : 
                + Lương 1 ngày 100.000
                + Công Thức Tính Lương = 100.00 * số ngày làm việc
        - output : thông báo số tiền nhận được 
*/

var days = 26;
var salPerDay = 100000;
var salary = days * salPerDay;
console.log("Lương Nhân Viên Là:", salary);
