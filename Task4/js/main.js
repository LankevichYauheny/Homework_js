/*-----------------------------Global variables and constants-----------------------------------------*/
let g_WorkersArray = getDB();
/*---------------------------------------------------------------------------------------------------*/

function worker() {
    this.FirstName = "";
    this.SecondName = "";
    this.Age = null;
    this.Gender = "";
    this.Post = "";
    this.Company = "";
    this.setFirstName = function (first_name) {
        this.FirstName = first_name;
    };
    this.setSecondName = function (second_name) {
        this.SecondName = second_name;
    };
    this.setAge = function (age) {
        if (age <= 0 || age >100){
            alert("Возраст должен быть от 18 до 100");
        }
        this.Age = age;
    };
    this.setGender = function (gender) {
        this.Gender = gender;
    };
    this.setPost = function (post) {
        this.Post = post;
    };
    this.setCompany = function (company) {
        this.Company = company;
    };
}
function industrialWorker() {
    worker.call(this); //Происходит наследование свойств от конструктора worker
    this.PersonnelNumber = null;
    this.Department = "";
    this.setPersonnelNumber = function (number) {
        this.PersonnelNumber = number;
    };
    this.setDepartment = function (department) {
        this.Department = department;
    };
}
function transportWorker() {
    worker.call(this); //Происходит наследование свойств от конструктора worker
    this.DrivingCategories = "";
    this.LengthOfWork = null;

    this.setDrivingCategories = function (categories) {
        this.DrivingCategories = categories;
    };
    this.setLengthOfWork = function (experience) {
        this.LengthOfWork = experience;
    };
}
function getDB(){
    let xhr = new XMLHttpRequest();
    // Асинхронный запрос
    xhr.open("GET", "http://localhost:2403/workers", false);
    xhr.setRequestHeader("Content-Type", "application/json");
    // Отправляем запрос
    xhr.send();
    // Ели код ответа сервера не 200, то это ошибка
    return(xhr.status !== 200) ? alert(xhr.status + ": " + xhr.statusText)
                                : JSON.parse(xhr.responseText);
}
function createMainTable() {
    let sectionMain = document.getElementById("main");
    let btnCreate = document.createElement("BUTTON");
    btnCreate.setAttribute("class", "button");
    btnCreate.setAttribute("onclick", "Create()");
    let t1 = document.createTextNode("Создать");
    btnCreate.appendChild(t1);
    let divTBL = document.getElementById("TBL");
    sectionMain.insertBefore(btnCreate, divTBL);
    let table = document.createElement("TABLE"); // Создаём таблицу
    for(let y = 0; y <= g_WorkersArray.length; y++) {
        let tr = document.createElement("TR"); // Создаём строки
        // Создаём колонки
        for (let x = 0; x < 8; x++) {
            let td = document.createElement("TD");
            if (y === 0) {
                let tHeader;
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
                if (x && x !== 7) {
                    let span = document.createElement("SPAN");
                    span.setAttribute("class", "headerTable");
                    span.appendChild(tHeader);
                    td.appendChild(span);
                }
            } else {
                let worker = g_WorkersArray[y - 1];
                tr.setAttribute("id", (y - 1).toString());
                let tdItem;
                switch (x) {
                    case 0: {
                        let btnFullInfo = document.createElement("BUTTON");
                        btnFullInfo.setAttribute("class", "button");
                        btnFullInfo.setAttribute("onclick", "fullInfo(this.parentNode.parentNode.id)");
                        let t2 = document.createTextNode("Подробно");
                        btnFullInfo.appendChild(t2);
                        td.appendChild(btnFullInfo);
                    } break;
                    case 1: {
                        tdItem = document.createTextNode(worker.FirstName);
                    } break;
                    case 2: {
                        tdItem = document.createTextNode(worker.SecondName);
                    } break;
                    case 3: {
                        tdItem = document.createTextNode(worker.Age);
                    } break;
                    case 4: {
                        tdItem = document.createTextNode(worker.Gender);
                    } break;
                    case 5: {
                        tdItem = document.createTextNode(worker.Post);
                    } break;
                    case 6: {
                        tdItem = document.createTextNode(worker.Company);
                    } break;
                    case 7: {
                        let btnEdit = document.createElement("BUTTON");
                        btnEdit.setAttribute("class", "button");
                        let t3 = document.createTextNode("Редактировать");
                        btnEdit.appendChild(t3);
                        td.appendChild(btnEdit);
                        let btnDelete = document.createElement("BUTTON");
                        btnDelete.setAttribute("class", "button");
                        btnDelete.setAttribute("onclick", "Delete(this.parentNode.parentNode.id)");
                        let t4 = document.createTextNode("Удалить");
                        btnDelete.appendChild(t4);
                        td.appendChild(btnDelete);
                    } break;
                }
                if(x && x !== 7) {
                    td.appendChild(tdItem);
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
function Edit() {
    alert("Данная функциональность не реализована!");
}
function Delete(e) {
    let currentWorker = g_WorkersArray[parseInt(e)];
    let xhr = new XMLHttpRequest();
    // Асинхронный запрос
    xhr.open("DELETE", "http://localhost:2403/workers/" + currentWorker.id, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    // Отправляем запрос
    xhr.send();
    // Ели код ответа сервера не 200, то это ошибка
    if(xhr.status !== 200){
        // Обрабатываем ошибку
        alert(xhr.status + ": " + xhr.statusText);
    } else {
        let tr = document.getElementById(e);
        tr.remove();
    }
}

/*---------------------------------for new-industrial.html------------------------------*/
function NewIndustrialW() {
    window.location.href="new-industrial.html";
}
function SaveW() {
    let xhr = new XMLHttpRequest();
    let body = new industrialWorker();
    body.setFirstName(document.getElementById("FirstName").value);
    body.setSecondName(document.getElementById("SecondName").value);
    body.setAge(document.getElementById("Age").value);
    let gen = document.getElementsByName("gender");
    if(gen[0].checked){
        let val = gen[0].value;
        body.setGender(val);
    } else {
        let val = gen[1].value;
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
    let xhr = new XMLHttpRequest();
    let body = new transportWorker();
    body.setFirstName(document.getElementById("FirstName").value);
    body.setSecondName(document.getElementById("SecondName").value);
    body.setAge(document.getElementById("Age").value);
    let gen = document.getElementsByName("gender");
    if(gen[0].checked){
        let val = gen[0].value;
        body.setGender(val);
    }
    else {
        let val = gen[1].value;
        body.setGender(val);
    }
    body.setPost(document.getElementById("Post").value);
    body.setCompany(document.getElementById("Company").value);
    let category = document.getElementsByName("category");
    let c ="";
    for (let x = 0; x <= 4; x++){
        if(category[x].checked){
            if (c!=="")
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
let modalWindow = document.getElementById("modalWindow");
let backModalWindow = document.createElement("DIV"); // Создаём новый div
let tableFullInfo;
function kill() {
    modalWindow.style.top = "-100%"; // Прячем модальное окно из зоны видимости
    backModalWindow.remove(); // Удаляем ранее созданный div
    tableFullInfo.remove(); // Удаляем ранее созданную таблицу
}
function fullInfo(e) {
    let currentWorker = g_WorkersArray[parseInt(e)];
    tableFullInfo = document.createElement("TABLE");
    let choice = (currentWorker.PersonnelNumber == null);
    for(let y = 0; y < 8; y++) {
        let tr = document.createElement("TR");
        for(let x = 0; x < 2; x++){
            let td = document.createElement("TD");
            if (x === 0) {
                let Header;
                switch (y) {
                    case 0: {
                        Header = document.createTextNode("Имя");
                    } break;
                    case 1: {
                        Header = document.createTextNode("Фамилия");
                    } break;
                    case 2: {
                        Header = document.createTextNode("Возраст");
                    } break;
                    case 3: {
                        Header = document.createTextNode("Пол");
                    } break;
                    case 4: {
                        Header = document.createTextNode("Должность");
                    } break;
                    case 5: {
                        Header = document.createTextNode("Компания");
                    } break;
                    case 6: {
                        if(choice === true) {
                            Header = document.createTextNode("Вод. категории");
                        } else {
                            Header = document.createTextNode("Табельный №");
                        }
                    } break;
                    case 7:{
                        if(choice === true) {
                            Header = document.createTextNode("Стаж");
                        } else {
                            Header = document.createTextNode("Отдел/Цех");
                        }
                    } break;
                }
                let span = document.createElement("SPAN");
                span.setAttribute("class", "headerTable");
                span.appendChild(Header);
                td.appendChild(span);
                tr.appendChild(td);
                tableFullInfo.appendChild(tr);
            } else {
                let tdItem;
                switch (y) {
                    case 0: {
                        tdItem = document.createTextNode(currentWorker.FirstName);
                    } break;
                    case 1: {
                        tdItem = document.createTextNode(currentWorker.SecondName);
                    } break;
                    case 2: {
                        tdItem = document.createTextNode(currentWorker.Age);
                    } break;
                    case 3: {
                        tdItem = document.createTextNode(currentWorker.Gender);
                    } break;
                    case 4: {
                        tdItem = document.createTextNode(currentWorker.Post);
                    } break;
                    case 5: {
                        tdItem = document.createTextNode(currentWorker.Company);
                    } break;
                    case 6: {
                        if(choice === true){
                            tdItem = document.createTextNode(currentWorker.DrivingCategories);
                        } else {
                            tdItem = document.createTextNode(currentWorker.PersonnelNumber);
                        }
                    } break;
                    case 7: {
                        if(choice === true){
                            tdItem = document.createTextNode(currentWorker.LengthOfWork);
                        } else {
                            tdItem = document.createTextNode(currentWorker.Department);
                        }
                    } break;
                }
                td.appendChild(tdItem);
                tr.appendChild(td);
                tableFullInfo.appendChild(tr);
            }
            modalWindow.appendChild(tableFullInfo);
        }
    }
    backModalWindow.setAttribute("id", "backModalWindow"); // Назначаем класс для backModalWindow
    document.body.appendChild(backModalWindow);
    modalWindow.style.top = "50%";
    backModalWindow.setAttribute("onclick", "kill()");
}