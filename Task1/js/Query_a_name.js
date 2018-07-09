function ChecNamber(str) {
    var exp = /[0-9]/;
    var result = exp.test(str);
    if(result === true)
    {
        var array_char = str.toLowerCase().split("");
        for(var i = 0; i < array_char.length; )
        {
            array_char[i] = array_char[i].toUpperCase();
            i +=2
        }
        document.write(array_char.join("").toString());
    }
    else
    {
        document.write(str.split("").reverse().join("").toString());
    }
}
function QueryName() {
    var x=prompt("Введите Ваше имя:", "");
    ChecNamber(x);
    }

