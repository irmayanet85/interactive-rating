/*jshint esversion: 6 */ 
let listOptions = null;
let valuefeedback = null;
let cardThank = null;
let cardFeedBack = null;
let formFeedback = null;
let evaluation = null;

const bindElements = () => {
    listOptions = document.querySelectorAll('.option');
    valuefeedback = document.querySelector('#value-feedback');
    formFeedback = document.querySelector('#form-feedback');
    cardThank = document.querySelector('.card-thank');
    cardFeedBack = document.querySelector('.card-feedback');  

};

function selectFeedback(){
    listOptions.forEach(option => {
        option.addEventListener('click', event => {
            let selected = document.querySelector('.selected');
            if(selected)
            {
                selected.classList.remove('selected');
                selected.classList.add('hover');
            }
            event.target.classList.add('selected');
            event.target.classList.remove('hover');
            evaluation = event.target.value;
    
        });
    
    });
}

function showCardThank(){ 
    valuefeedback.textContent = evaluation;
    cardThank.classList.remove("hidden");
}

function hiddenCardFeedBack(){
    cardFeedBack.classList.add('hidden');
}

function sendFeedback(){
    formFeedback.addEventListener('submit', (event)=>{
        
        if(evaluation >= 1 && evaluation <= 5){
            event.preventDefault();            
            hiddenCardFeedBack();
            showCardThank();
           
        }
        else { alert('You must select an evaluation'); }

    });  
}


const main = () => {
    bindElements();
    selectFeedback();
    sendFeedback();

};
main();

