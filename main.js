function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Duc', 'Phuong', 'Avatar1');
var user = new User('Duc', 'Dung', 'Avatar2');

User.prototype.className= 'F8'
User.prototype.getClassName = function(){
    return this.className;
}



author.title = 'Phuong vo dung';
user.comment= 'Dung ia chinh';


console.log(author.getName())
console.log(user.getName())



var myArray = [
    [1, 2],
    [3, 4],
    [5, 6],
]

for(var i = 0 ; i < myArray.length; i++){
    for(var j = 0; j < myArray[i].length;j++){
        console.log(myArray[i][j])
    }
}

for (var i = 100; i > 0; i -= 5){
    console.log(i)
}