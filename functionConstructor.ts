interface IUser{
  name:string;
  age:number;
  gender:string;
  fsc:boolean;
}



function User(this:IUser,name:string,age:number,gender:string,fsc:boolean ){
    this.name=name
    this.age=age
    this.gender=gender
    this.fsc=fsc
}


const newUser= new (User as any)('ali',25,'male',false)

console.log(newUser)
