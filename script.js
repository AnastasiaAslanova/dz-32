// Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою
// тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати.
// При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за
// замовчуванням для цих поєднань клавіш.

document.addEventListener('keydown', (event) => {

    if (event.ctrlKey) {
        let textArea;
        if (event.key.toLowerCase() === "e") {
            event.preventDefault();
            const text = document.getElementById("content").innerText;
            textArea = document.createElement('textarea');
            textArea.value = text;
            document.getElementById("content").style.display = "none";
            document.body.prepend(textArea);
        } else  if (event.key.toLowerCase() === "s") {
            event.preventDefault();
             const textAreaVal = document.querySelector('textarea').value;
            document.getElementById("content").innerText = textAreaVal;
            document.getElementById("content").style.display = "flex";
            document.querySelector('textarea').remove();
        }
    }
})

// Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця.
// Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

function sortTable(column) {
    let table = document.getElementById("myTable");
    let rows = Array.prototype.slice.call(table.querySelectorAll('tbody > tr'));

    rows.sort(function(rowA, rowB) {
        let cellA = rowA.cells[column].textContent.trim();
        let cellB = rowB.cells[column].textContent.trim();

        // перевіряємо, якщо значення у стовпці числове
        if (!isNaN(cellA) && !isNaN(cellB)) {
            return cellA - cellB;
        } else {
            return (cellA > cellB) ? 1 : -1;
        }
    });

    // змінюємо порядок рядків у таблиці
    for (let i = 0; i < rows.length; i++) {
        table.querySelector('tbody').appendChild(rows[i]);
    }
}

//Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в
// правому нижньому кутку і тягнути її далі.

const resDiv = document.getElementById("content__textarea");
const resizer = document.querySelector("div.content__textarea--resizer");

const initResize = e => {
    e.preventDefault();
    window.addEventListener("mousemove", startResize);
    window.addEventListener("mouseup", stopResize);
};

const startResize = e => {
    resDiv.style.width = (e.clientX - resDiv.offsetLeft) + "px";
};
const stopResize = e => {
    window.removeEventListener('mousemove', startResize);
    window.removeEventListener('mouseup', stopResize);
};

resizer.addEventListener("mousedown", initResize);