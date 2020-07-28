// object litteral for the pet salon(one)
//name,phone,address(street,number),
const salon={
    name:"The Fashion pet",
    phone:"615-818-3002",
    address:{
        street:"Otter glen dr.",
        number:"100",
    },
counter:function(){
    alert("A pet was registered");
    },
    pets:[]
}

//object destructuring
let {name,phone,address:{street,number},counter,pets} =salon;
document.getElementById("footer-info").innerHTML=`
<p class="text-center">${name} ${phone} <br>${street},${number}</p>
`;
console.log(pets);
//object constructor for the pets(multiple)
class Pet{
    constructor(Name,Age,Breed,Gender,Service,OwnerName,ContactPhone){
        this.Name=Name;
        this.Age-Age;
        this.Breed=Breed;
        this.Gender=Gender;
        this.Service=Service;
        this.OwnerName=OwnerName;
        this.ContactPhone=ContactPhone;

    

    }
}
const scooby=new Pet("scooby",64,"Dane","male","ghosthunter","Shaggy","123-456-7897");
//register(scooby);
pets.push(scooby);
const leo=new Pet("leo",2,"frenchie","male","comical","wes","615-818-3002");
//register(leo);
pets.push(leo);
const zoe= new Pet("Zoe",2,"pitbull","female","running","Ruth","9014389520");
//register(zoe);
pets.push(zoe);
//create two pets

//register function
function register(aPet){

const thePet = new Pet(txtName.value, txtAge.value, txtBreed.value, txtGender.value, txtService.value, txtOwnerName.value, txtContactPhone.value);

var txtName=document.getElementById("petName");
var txtAge=document.getElementById("petAge");
var txtBreed= document.getElementById("petBreed");
var txtGender= document.getElementById("petGender");
var txtService= document.getElementById("petService");
var txtOwnerName= document.getElementById("petOwnerName");
var txtContactPhone= document.getElementById("petContactPhone");



//pets.push(aPet);


clear();
displayList(thePet);
//console.log(aPet);
}

function clear(){

    txtName.value="";
    txtAge.value="";
    txtBreed.value="";
    txtGender.value="";
    TxtService.value="";
    txtOwnerName.value="";
    txtContactPhone.value="";
}

function status(){
    alert("Registered pets:" + pets.length);
    console.log("Registered pets:" + pets.length);

    console.log(pets[0].name);
    console.log(pets[1].name);
    console.log(pets[2].name);
    
    for (i=0;i<3;i++){
        console.log(i);
    }

    
}

function displayList(){
var list = document.getElementById("petList");
var li=
<li> ${aPet.Name} ${aPet.Age} ${aPet.Breed} ${aPet.Gender} ${aPet.Service} ${aPet.OwnerName}
${aPet.ContactPhone}  </li>;
list.innerHTML=li;

}
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);

    console.log ('your pet has been deleted from our database');
  }

status();
