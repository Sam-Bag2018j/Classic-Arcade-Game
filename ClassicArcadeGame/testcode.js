function invokeTwice(cd){
    cd();
    cd();
}

const dog={
     age: 5,
    dogfun= function(){
        age++;
       console.log(age);
  }
}