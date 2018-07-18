function worker() {
    var FirstName = "";
    var SecondName = "";
    var Age = null;
    var Gender = "";
    var Post = "";
    var Company = "";

    this.getFirstName = function () {return FirstName;}
    this.getSecondName = function () {return SecondName;}
    this.getAge = function () {return Age;}
    this.getGender = function () {return Gender;}
    this.getPost = function () {return Post;}
    this.getCompany = function () {return Company;}

    this.setFirstName = function (first_name) {
        if (first_name == ""){
            alert("Введите своё имя!!!");
        }
        FirstName = first_name;
    }

    this.setSecondName = function (second_name) {
        if (second_name == ""){
            alert("Введите свою фамилию!!!");
        }
        SecondName = second_name;
    }

    this.setAge = function (age) {
        if (age == null || age == 0){
            alert("Введите свой возраст!!!");
        }
        Age = age;
    }

    this.setGender = function (gender) {
        if (gender == ""){
            alert("Введите свой пол!!!");
        }
        Gender = gender;
    }

    this.setPost = function (post) {
        if (post == ""){
            alert("Введите свою должность!!!");
        }
        Post = post;
    }

    this.setCompany = function (company) {
        if (company == ""){
            alert("Введите компанию на которую вы работаете!!!");
        }
        Company = company;
    }
}

function industrialWorker() {
    worker.call(this); //Происходит наследование свойств от конструктора worker
    var PersonnelNumber = null;
    var Department = "";
    this.getPersonnelNumber = function () {return PersonnelNumber;}
    this.getDepartment = function () {return Department;}
    this.setPersonnelNumber = function (number) {
        if (number == null){
            alert("Введите свою должность!!!");
        }
        PersonnelNumber = number;
    }
    this.serDepartment = function (department) {
        if (department == ""){
            alert("Введите название своего отдела или цеха!!!");
        }
        Department = department;
    }

}
function transportWorker() {
    worker.call(this); //Происходит наследование свойств от конструктора worker
    var DrivingCategories = "";
    var LengthOfWork = null;
    this.getDrivingCategories = function () {return DrivingCategories;}
    this.getLengthOfWork = function () {return LengthOfWork;}
    this.serDrivingCategories = function (categories) {
        DrivingCategories = categories;
    }
    this.setLengthOfWork = function (experience) {
        if (experience == null){
            alert("Введите свой трудовой стаж, если его нет, то введите 0!!!");
        }
        LengthOfWork = experience;
    }

}
var p = new transportWorker();
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


/*---------------------------------for newIndustrialW.html------------------------------*/
function NewIndustrialW() {
    window.location.href="newIndustrialW.html";
}
function SaveW() {
    alert("Данная функциональность не реализована!");
}
function ClearW() {
    alert("Данная функциональность не реализована!");
}



/*---------------------------------for newTransportW.html------------------------------*/
function NewTransportW() {
    window.location.href="newTransportW.html";
}
function SaveT() {
    alert("Данная функциональность не реализована!");
}
function ClearT() {
    alert("Данная функциональность не реализована!");
}