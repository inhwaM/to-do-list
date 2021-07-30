const form = document.querySelector('.search');

function Engine(event) {
    event.preventDefault();

    const searchWord = document.querySelector('.keyword');
    const engineName = document.querySelector('.SelectSearch');
    
    let engine = engineName.value;
    let keyword = searchWord.value;    

    if(engine === 'google') {
        window.open(
            'https://www.google.com/search?q=' + keyword,
            '_blank'
        );
    }else if(engine === 'naver'){
        window.open(
            'https://search.naver.com/search.naver?query=' + keyword,
            '_blank'
        );
    }
}

form.addEventListener("submit", Engine);
