function worker() {
    this.FirstName = "";
    this.SecondName = "";
    this.Age = null;
    this.Gender = "";
    this.Post = "";
    this.Company = "";

    this.setFirstName = function (first_name) {
        if (first_name == ""){
            alert("Введите своё имя!!!");
        }
        this.FirstName = first_name;
    }

    this.setSecondName = function (second_name) {
        if (second_name == ""){
            alert("Введите свою фамилию!!!");
        }
        this.SecondName = second_name;
    }

    this.setAge = function (age) {
        if (age <= 0 || age >100){
            alert("Возраст должен быть от 18 до 100");

        }
        this.Age = age;
    }

    this.setGender = function (gender) {
        if (gender == ""){
            alert("Введите свой пол!!!");
        }
        this.Gender = gender;
    }

    this.setPost = function (post) {
        if (post == ""){
            alert("Введите свою должность!!!");
        }
        this.Post = post;
    }

    this.setCompany = function (company) {
        if (company == ""){
            alert("Введите компанию на которую вы работаете!!!");
        }
        this.Company = company;
    }
}
function industrialWorker() {
    worker.call(this); //Происходит наследование свойств от конструктора worker
    this.PersonnelNumber = null;
    this.Department = "";
    this.setPersonnelNumber = function (number) {
        if (number == null){
            alert("Введите свою должность!!!");
        }
        this.PersonnelNumber = number;
    }
    this.setDepartment = function (department) {
        if (department == ""){
            alert("Введите название своего отдела или цеха!!!");
        }
        this.Department = department;
    }

}
function transportWorker() {
    worker.call(this); //Происходит наследование свойств от конструктора worker
    this.DrivingCategories = "";
    this.LengthOfWork = null;

    this.setDrivingCategories = function (categories) {
        this.DrivingCategories = categories;
    }
    this.setLengthOfWork = function (experience) {
        if (experience == null){
            alert("Введите свой трудовой стаж, если его нет, то введите 0!!!");
        }
        this.LengthOfWork = experience;
    }

}

function getDB(){
    var xhr = new XMLHttpRequest();
    // Асинхронный запрос
    xhr.open("GET", "http://localhost:2403/workers", false);
    xhr.setRequestHeader("Content-Type", "application/json");
    // Отправляем запрос
    xhr.send();
    // Ели код ответа сервера не 200, то это ошибка
    if(xhr.status != 200){
        // Обрабатываем ошибку
        alert(xhr.status + ": " + xhr.statusText);
    } else {
        // Возвращаем результат
        var getWorkers = JSON.parse(xhr.responseText);
        return getWorkers;
    }
}

function createMainTable() {
    var WorkersArray = getDB();
    var sectionMain = document.getElementById("main");
    var btnCreate = document.createElement("BUTTON");
    btnCreate.setAttribute("class", "button");
    btnCreate.setAttribute("onclick", "Create()");
    var t1 = document.createTextNode("Создать");
    btnCreate.appendChild(t1);
    var divTBL = document.getElementById("TBL");
    sectionMain.insertBefore(btnCreate, divTBL);
    var table = document.createElement("TABLE"); // Создаём таблицу
    for(var y = 0; y <= WorkersArray.length; y++) {
        var tr = document.createElement("TR"); // Создаём строки
        // Создаём колонки
        for (var x = 0; x < 8; x++) {
            var td = document.createElement("TD");
            if (y === 0) {
                var tHeader;
                switch (x) {
                    case 1: {
                        tHeader = document.createTextNode("Имя");
                    } break;
                    case 2: {
                        tHeader = document.createTextNode("Фамилия");
                    } break;
                    case 3: {
                        tHeader = document.createTextNode("Возраст");
                    } break;
                    case 4: {
                        tHeader = document.createTextNode("Пол");
                    } break;
                    case 5: {
                        tHeader = document.createTextNode("Должность");
                    } break;
                    case 6: {
                        tHeader = document.createTextNode("Компания");
                    } break;
                }
                if (x && x != 7) {
                    var span = document.createElement("SPAN");
                    span.setAttribute("class", "headerTable");
                    span.appendChild(tHeader);
                    td.appendChild(span);
                }
            } else {
                var worker = WorkersArray[y - 1];
                var tdItem;
                switch (x) {
                    case 0: {
                        var btnFullInfo = document.createElement("BUTTON");
                        btnFullInfo.setAttribute("class", "button");
                        btnFullInfo.setAttribute("value", worker.id);
                        btnFullInfo.setAttribute("onclick", "openWindow()");
                        var t2 = document.createTextNode("Подробно");
                        btnFullInfo.appendChild(t2);
                        td.appendChild(btnFullInfo);
                    } break;
                    case 1: {
                        tdItem = document.createTextNode(worker.FirstName);
                        td.appendChild(tdItem);
                    } break;
                    case 2: {
                        tdItem = document.createTextNode(worker.SecondName);
                        td.appendChild(tdItem);
                    } break;
                    case 3: {
                        tdItem = document.createTextNode(worker.Age);
                        td.appendChild(tdItem);
                    } break;
                    case 4: {
                        tdItem = document.createTextNode(worker.Gender);
                        td.appendChild(tdItem);
                    } break;
                    case 5: {
                        tdItem = document.createTextNode(worker.Post);
                        td.appendChild(tdItem);
                    } break;
                    case 6: {
                        tdItem = document.createTextNode(worker.Company);
                        td.appendChild(tdItem);
                    } break;
                    case 7: {
                        var btnEdit = document.createElement("BUTTON");
                        btnEdit.setAttribute("class", "button");
                        var t3 = document.createTextNode("Редактировать");
                        btnEdit.appendChild(t3);
                        td.appendChild(btnEdit);
                        var btnDelete = document.createElement("BUTTON");
                        btnDelete.setAttribute("class", "button");
                        var t3 = document.createTextNode("Удалить");
                        btnDelete.appendChild(t3);
                        td.appendChild(btnDelete);
                    } break;
                }
            }
            tr.appendChild(td);
            table.appendChild(tr);
        }
        divTBL.appendChild(table);
    }
}




function Create() {
    window.location.href="create.html";
}
function FullInfo() {
    alert("Данная функциональность не реализована!");

}
function Edit() {
    alert("Данная функциональность не реализована!");
}
function Delete() {
    alert("Данная функциональность не реализована!");
}


/*---------------------------------for new-industrial.html------------------------------*/
function NewIndustrialW() {
    window.location.href="new-industrial.html";
}

function SaveW() {
    var xhr = new XMLHttpRequest();

    var body = new industrialWorker();
    body.setFirstName(document.getElementById("FirstName").value);
    body.setSecondName(document.getElementById("SecondName").value);
    body.setAge(document.getElementById("Age").value);
    var gen = document.getElementsByName("gender");
    if(gen[0].checked){
        var  val = gen[0].value;
        body.setGender(val);
    }
    else {
        var val = gen[1].value;
        body.setGender(val);
    }
    body.setPost(document.getElementById("Post").value);
    body.setCompany(document.getElementById("Company").value);
    body.setPersonnelNumber(document.getElementById("PersonalNumber").value);
    body.setDepartment(document.getElementById("Department").value);


    xhr.open("POST","http://localhost:2403/workers", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(body));
}
function ClearW() {
    alert("Данная функциональность не реализована!");
}




/*---------------------------------for new-transport.html------------------------------*/
function NewTransportW() {
    window.location.href="new-transport.html";
}
function SaveT() {
    var xhr = new XMLHttpRequest();
    var body = new transportWorker();
    body.setFirstName(document.getElementById("FirstName").value);
    body.setSecondName(document.getElementById("SecondName").value);
    body.setAge(document.getElementById("Age").value);
    var gen = document.getElementsByName("gender");
    if(gen[0].checked){
        var  val = gen[0].value;
        body.setGender(val);
    }
    else {
        var val = gen[1].value;
        body.setGender(val);
    }
    body.setPost(document.getElementById("Post").value);
    body.setCompany(document.getElementById("Company").value);
    var category = document.getElementsByName("category");
    var c ="";
    for (var x = 0; x <= 4; x++){
        if(category[x].checked){
            if (c!="")
            {
                c += ", "
            }
            c +=category[x].value;
        }
    }
    body.setDrivingCategories(c);

    body.setLengthOfWork(document.getElementById("LengthOfWork").value);


    xhr.open("POST","http://localhost:2403/workers", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(body));
}
function ClearT() {
    alert("Данная функциональность не реализована!");
}

/*---------------------------modalWindow-----------------------------------------------*/

var modalWindow = document.getElementById("modalWindow"); // Получаем текущее окно
var tableFullInfo = document.createElement("TABLE");
var backModalWindow = document.createElement("DIV"); // Создаём новый div
function kill() {
    modalWindow.style.top = "-100%"; // Прячем модальное окно из зоны видимости
    backModalWindow.remove(); // Удаляем ранее созданный div
}
function openWindow() {
    backModalWindow.setAttribute("id", "backModalWindow"); // Назначаем класс для backModalWindow
    document.body.appendChild(backModalWindow);
    var height = modalWindow.offsetHeight; // Получаем высоту модального окна
    modalWindow.style.top = "50%";
    backModalWindow.setAttribute("onclick", "kill()");
}