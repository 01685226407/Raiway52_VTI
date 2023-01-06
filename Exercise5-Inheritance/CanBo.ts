class CanBo{
    private fullname: string;
    private age: number;
    private address: string;



	constructor(fullname :string, age: number, address: string) {
        this.fullname = fullname;
        this.address = address;
        this.age = age;
	}
	
	

    /**
     * Getter fullname
     * @return {string}
     */
	public getFullname(): string {
		return this.fullname;
	}

    /**
     * Getter age
     * @return {number}
     */
	public getAge(): number {
		return this.age;
	}

   

    /**
     * Getter address
     * @return {string}
     */
	public getAddress(): string {
		return this.address;
	}

    /**
     * Setter fullname
     * @param {string} value
     */
	public setFullname(value: string) {
		this.fullname = value;
	}

    /**
     * Setter age
     * @param {number} value
     */
	public setAge(value: number) {
		this.age = value;
	}


    /**
     * Setter address
     * @param {string} value
     */
	public setAddress(value: string) {
		this.address = value;
	}
    public toString():void{
        console.log("Thong tin ten can bo " , this.fullname,",", this.address,",",this.age);
    }
   
}

export{ CanBo, createCanBo, showCanBo,searchCanBo,deleteCanbo};
function createCanBo(){
    
   
    var canbo: Array<CanBo> = new Array(5);
   canbo[0] = new CanBo("daovancuong1",20,"Ha Noi1");
   canbo[1] = new CanBo("daovancuong2",21,"Ha Noi2");
   canbo[2] = new CanBo("daovancuong3",22,"Ha Noi3");
   canbo[3] = new CanBo("daovancuong4",23,"Ha Noi4");
   canbo[4] = new CanBo("daovancuong5",24,"Ha Noi5");


    for(let index =0; index<canbo.length;index++){
        console.log(canbo[index]);
    }
    for(let index =0; index<canbo.length;index++){
        if(canbo[index].getFullname()== "daovancuong1"){
             console.log(canbo[index].getFullname()== "daovancuong1");
        }
        
    }
}
// hien thi can bo
function showCanBo(){
    createCanBo();
}
// Tìm kiếm theo họ tên
function searchCanBo(fullname: string){

}
//Nhập tên cán bộ và xóa cán bộ đó
function deleteCanbo(fullname: string){
    // Kiểm tra tên vừa nhập có trùng với danh sách cán bộ không?

    //Nếu trùng xóa cán bộ đó khỏi danh sách mảng
}
//Thoát khỏi chương trình.