
// cau 1: in cac so tu 1 den n
let n = prompt("Nhap n = ");
for (let index = 1; index <= n; index++) {
    console.log(index)
}

//Cau 2: in cac so le tu 1 den n
let n = prompt("Nhap n = ");
for (let index = 1; index <= n; index++) {
    if(index %2 == 1) {
        console.log(index)
    }
}

// cau 3: in cac so chan tu 1 den n 
let n = prompt("Nhap n = ");
for(let a = 1; a <= n; a++) {
    if(a %2 == 0) {
        console.log(a)
    }
}

// cau 4 : in cac snt tu 1 den n


// cau 5: tinh tong tu 1 den n

let n = prompt("Nhap n = "); 
for (let a = 1; a <=n; a++) {
    let tinhtong = ((n + 1) * n) / 2;
    console.log(tinhtong)
}

// Cau 6: tinh tog binh phuong tu 1 den n
let n = prompt("Nhap n = "); 
let tongbp = 0;
for (let i = 1; i <= n; i++) {
  tongbp += i * i;
}
console.log(tongbp);

// cau 7: tong cac so le tu 1 den n
let n = prompt("Nhap n = "); 
let tongle = 0;
for (let index = 1; index <= n; index++) {
    if(index %2 == 1) {
        tongle += index;
    }
}
console.log(tong);

// cau 8: Kiem tra n cos phai toan la so le hay ko ?
