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
    generateHTML(name) {
        return `
            <li class='employed__list__employee'>${name.name}</li>
        `
    }
    addEmployeeOnClick() {
        let employeeValue = document.querySelector('.employed__form__input');
        this.employees.push({name: employeeValue.value});
        this.loadEmployees();
        employeeValue.value = '';
    }
}
