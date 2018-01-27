let employees;
window.addEventListener('load', () => {
    employees = new EmployeeListClass();
});

class EmployeeListClass {
    constructor() {
        this.employees = [
            {name: 'Frank Colins'},
            {name: 'John Ben'},
            {name: 'Alex Taylor'}
        ];
        this.loadEmployees();
    }
    loadEmployees() {
        let employeesTemplate = this.employees.reduce((html, name, index) => html += this.generateHTML(name, index), '');
        document.querySelector('.employed__list').innerHTML = employeesTemplate;
    };
    generateHTML(name, index) {
        return `
            <li class='employed__list__employee'><i class="far fa-user"></i> ${name.name} <i class="fas fa-trash" onclick="employees.removeEmployeeOnClick(event, ${index})"></i></li>
        `
    }
    addEmployeeOnClick(event) {
        event.preventDefault();
        let employeeValue = document.querySelector('.employed__form__input');
        this.employees.push({name: employeeValue.value});
        employeeValue.value = '';
        this.loadEmployees();
    }
    removeEmployeeOnClick(event, index) {
        event.preventDefault();
        this.employees.splice(index, 1);
        this.loadEmployees();
    }
}
