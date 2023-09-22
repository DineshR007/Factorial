function fun1(){
    var n=document.getElementById('number').value;
    var f=1;
    if(n==''){
        document.getElementById('para').textContent="Please Enter the Number";
        return false;
    }
    else{
        for(var i=1;i<=n;i++){
            f=f*i;
        }
        document.getElementById('para').textContent="The Factorial of the number is:"+" "+f;
        return false;
    }
}