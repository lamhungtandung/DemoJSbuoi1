/**
 * khối 1: input
 * so2ChuSo
 * sodonVi
 * soHangChuc
 * soDu
 * khối 2: Các bước xử lí
 * B1: Khai báo và gán giá trị cho biến
 * B2: Lập công thức tính:
 * lấy số Chục: 
 * soHangChuc = Math.floor(so2ChuSo/10)
 * Tìm số dư: soDu = so2ChuSo % 10
 * lấy số đơn vị:
 * soDonVi = soDu % 10
 * Tong = soDonVi + soHangChuc
 * B3: in kết quả
 * khối 3 output
 * Tong
 */

var so2ChuSo = 44
var soDonVi = 0
var soHangChuc = 0
var soDu = so2ChuSo % 10
soDonVi = soDu % 10
soHangChuc = Math.floor(so2ChuSo/10)

Tong = soDonVi + soHangChuc
console.log(Tong)