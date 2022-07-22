// Bai1

var valueArr = [];

function baiTap1() {
    var string = document.getElementById("txtNumBT1").value; // value của input
    valueArr.push(string);
    console.log(valueArr)
    document.getElementById("resultBT1").innerHTML = valueArr;
    // var sum = 0
    // for (var i = 0; i < arr.length; i++) {
    //     if (arr[i] > 0) {
    //         sum += arr[i]
    //     }
    // }
    // console.log(sum)
}
// baiTap1([1, 3, 5, 2, 7, 4])
// bai2
function baiTap2(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum++
        }
    }
    console.log("Co so duong", sum)
}
baiTap2([1, 3, 5, 2, 7, 4])
// bai3
function baiTap3(arr) {
    var min = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    console.log("So be nhat la", min)
}
baiTap3([1, 3, 5, -2, 7, 4])
// bai4
function baiTap4(arr) {
    var min = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min && arr[i] > 0) {
            min = arr[i]
        }
    }
    console.log("So duong nho nhat la", min)
}
baiTap4([1, 3, 5, 2, 7, 4])
// bai5
function baiTap5(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        if (arr[i] % 2 === 0) {
            console.log("So chan cuoi cung", arr[i])
            return arr[i]
        }
    }
}
baiTap5([1, 3, 4, 5, 6, 7])

// bai6
function baiTap6(arr) {
    var swap = true
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i + 1]
        arr[i + 1] = arr[i]
        arr[i] = temp
        if (swap) {
            console.log(arr)
            return
        }
    }
}
baiTap6([1, 3, 9, 5, 6, 7])//2 vi tri dau
// bai7
function ex10(arr) {
    var isSwapped = false
    for (var k = arr.length - 1; k >= 0; k--) {
        for (i = 0; i < k; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                isSwapped = true
            }
        }
        if (!isSwapped) {
            console.log(arr)
            return
        }
    }
    console.log(arr)
}
ex10([4, 2, 1, 5, 7, 3])

// baii8
/*Tạo hàm kiểm tra số nguyên tố trong JavaScript*/
function isprime(n) {
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố

    var flag = 1;

    if (n < 2) return flag = 0; /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/

    /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
    var i = 2;
    while (i < n) {
        if (n % i == 0) {
            flag = 0;
            break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
        }
        i++;
    }

    return flag;
}
function baiTap8(array) {
    for (let i = 0; i < array.length; i++) {
        if (isprime(array[i]) == 1) {
            console.log(array[i]);
            return array[i]
        }
    }
}
baiTap8([1, 3, 4, 5, 6, 7])
function baiTap9(){
    var cout = 0
    for (var i = 0; i < valueArr.length; i++) {
        if (Number.isInteger(+valueArr[i]) && Number(+valueArr[i]) > 0) {
            cout++  
        }
    }
    document.getElementById("resultBT2").innerHTML=cout
}