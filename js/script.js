function createTable () {
    const tableMainElement = document.createElement('table');
    tableMainElement.classList.add('table_class');

    for (let countTr = 1; countTr <= 10; countTr++) {
        const trElementValue = document.createElement('tr');
        trElementValue.classList.add('tr_element')
        tableMainElement.append(trElementValue);
        
        for (let countTd = 1; countTd <= 10; countTd++) {
            const tdElementValue = document.createElement('td');
            tdElementValue.classList.add('td_class')
            trElementValue.append(tdElementValue);
            
        }
    };

    const tdAllElements = tableMainElement.querySelectorAll('td');

    for (let i = 0; i < tdAllElements.length; i++) {
        let b = 1;
        tdAllElements.forEach((element) => {
            element.textContent = b;
            b++;
        });
    }

    return tableMainElement;
}

document.body.append(createTable());