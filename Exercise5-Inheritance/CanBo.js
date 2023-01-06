"use strict";
exports.__esModule = true;
exports.deleteCanbo = exports.searchCanBo = exports.showCanBo = exports.createCanBo = exports.CanBo = void 0;
var CanBo = /** @class */ (function () {
    function CanBo(fullname, age, address) {
        this.fullname = fullname;
        this.address = address;
        this.age = age;
    }
    /**
     * Getter fullname
     * @return {string}
     */
    CanBo.prototype.getFullname = function () {
        return this.fullname;
    };
    /**
     * Getter age
     * @return {number}
     */
    CanBo.prototype.getAge = function () {
        return this.age;
    };
    /**
     * Getter address
     * @return {string}
     */
    CanBo.prototype.getAddress = function () {
        return this.address;
    };
    /**
     * Setter fullname
     * @param {string} value
     */
    CanBo.prototype.setFullname = function (value) {
        this.fullname = value;
    };
    /**
     * Setter age
     * @param {number} value
     */
    CanBo.prototype.setAge = function (value) {
        this.age = value;
    };
    /**
     * Setter address
     * @param {string} value
     */
    CanBo.prototype.setAddress = function (value) {
        this.address = value;
    };
    CanBo.prototype.toString = function () {
        console.log("Thong tin ten can bo ", this.fullname, ",", this.address, ",", this.age);
    };
    return CanBo;
}());
exports.CanBo = CanBo;
function createCanBo() {
    var canbo = new Array(5);
    canbo[0] = new CanBo("daovancuong1", 20, "Ha Noi1");
    canbo[1] = new CanBo("daovancuong2", 21, "Ha Noi2");
    canbo[2] = new CanBo("daovancuong3", 22, "Ha Noi3");
    canbo[3] = new CanBo("daovancuong4", 23, "Ha Noi4");
    canbo[4] = new CanBo("daovancuong5", 24, "Ha Noi5");
    for (var index = 0; index < canbo.length; index++) {
        console.log(canbo[index]);
    }
    for (var index = 0; index < canbo.length; index++) {
        if (canbo[index].getFullname() == "daovancuong1") {
            // console.log(canbo[index].getFullname()== "daovancuong1");
        }
    }
    // var canbo = new CanBo();
    // console.log("Nhap ten can bo");
    // canbo.setFullname("cuong");
    // console.log("Nhap tuoi");
    // canbo.setAge(20);
    // console.log("Nhap gioi tinh");
    // //canbo.setSex("MALE");
    // console.log("Nhap dia chi")
    // canbo.setAddress("Viet Nam");
}
exports.createCanBo = createCanBo;
// hien thi can bo
function showCanBo() {
    createCanBo();
}
exports.showCanBo = showCanBo;
// Tìm kiếm theo họ tên
function searchCanBo(fullname) {
}
exports.searchCanBo = searchCanBo;
//Nhập tên cán bộ và xóa cán bộ đó
function deleteCanbo(fullname) {
    // Kiểm tra tên vừa nhập có trùng với danh sách cán bộ không?
    //Nếu trùng xóa cán bộ đó khỏi danh sách mảng
}
exports.deleteCanbo = deleteCanbo;
//Thoát khỏi chương trình.
