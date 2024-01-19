const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const yearInput = document.querySelector('#year')
const btnBook = document.querySelector('.btn')

let bookListArray = []

function btnBookHandler() {

    let newBookObj = {
        title: titleInput.value,
        author: authorInput.value,
        year: yearInput.value
    }
    bookListArray.push(newBookObj)

    saveLocalStorage(bookListArray)

    let thTitle = document.createElement('th')
    thTitle.innerHTML = titleInput.value

    let thAuthor = document.createElement('th')
    thAuthor.innerHTML = authorInput.value

    let thYear = document.createElement('th')
    thYear.innerHTML = yearInput.value

    let trTable = document.createElement('tr')

    trTable.append(thTitle, thAuthor, thYear)
    document.querySelector('#book-list').appendChild(trTable)

    titleInput.value = ''
    authorInput.value = ''
    yearInput.value = ''
    titleInput.focus()
}

function saveLocalStorage(book) {
    localStorage.setItem('books', JSON.stringify(book))
}

function getLocalStorage() {
    let getBookListArray = JSON.parse(localStorage.getItem('books'))

    if (getBookListArray) {

        bookListArray = getBookListArray
    } else {
        bookListArray = []
    }

    bookListArray.forEach(book => {
        console.log(book.title);

        let thTitle = document.createElement('th')
        thTitle.innerHTML = book.title

        let thAuthor = document.createElement('th')
        thAuthor.innerHTML = book.author

        let thYear = document.createElement('th')
        thYear.innerHTML = book.year

        let trTable = document.createElement('tr')

        trTable.append(thTitle, thAuthor, thYear)
        document.querySelector('#book-list').appendChild(trTable)

        titleInput.value = ''
        authorInput.value = ''
        yearInput.value = ''


    });
}

btnBook.addEventListener('click', btnBookHandler)
window.addEventListener('load', getLocalStorage)