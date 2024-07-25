type Gender= 'male' | 'female'

interface IUser{
  name:string;
  age:number;
  gender:Gender;
  fsc:boolean;
}



class User{
    constructor(public name:string,public age:number,public gender:Gender,public fsc:boolean){

    }
}

const newUser=new User('ali',22,'male',true)


console.log(newUser.gender)
