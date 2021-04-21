console.log("Vu Minh Thang");
// 
let a = prompt('Nhập a')
let b = prompt('Nhập b')
let c = prompt('Nhập c')

if (a == 0) {
    if (b == 0) {
        if (c == 0) {
            alert('Phuong trinh vo so nghiem')
        }
    } else {
        alert('Phuong trinh co nghiem duy nhat: ' + (-c / b))
    }
} else {
    let delta = b * b - 4 * a * c;
    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert('Phương trình có 2 nghiệm phân biệt:\n x1 = ' + x1 + '\n x2 = ' + x2)
    } else if (delta == 0) {
        let result = -b / 2 * a
        alert('Phuong trinh co nghiem kep: x1 = x2 = ' + result)
    } else {
        alert('Phuong trinh vo nghiem')
    }
}
