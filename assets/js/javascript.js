/*jshint esversion: 6 */ 
function selectFeedback(){

    const listOptions = document.querySelectorAll('.option');
    
    listOptions.forEach(option => {
        option.addEventListener('click', event => {
            let element = event.target;
            if(document.querySelector('.selected'))
            {
                let elementBefore = document.querySelector('.selected');
                elementBefore.classList.remove('selected');
                elementBefore.classList.add('hover');
            }
            element.classList.add('selected');
            element.classList.remove('hover');
    
        });
    
    });
}

function showCardThank(value){
   let value_feedback = document.querySelector('#value-feedback');
   let card_Thank = document.querySelector('.card-thank');
   value_feedback.value=value;
   card_Thank.classList.remove('hidden');
}

function hiddenCardFeedBack(){
  const card_FeedBack = document.querySelector('.card-feedback');
  card_FeedBack.classList.add('hidden');
}

function sendFeedback(){

    let formFeedback = document.querySelector('#form-feedback');
    formFeedback.addEventListener('submit', (event)=>{
        let evaluation = 0;
        const selected = document.querySelector('.selected');
        if(selected){
            evaluation = selected.value;
        
            if (evaluation >= 1 && evaluation <= 5) { 
                hiddenCardFeedBack();
                showCardThank(evaluation);
            }
            else { console.log('You must select a valid assessment');}
        }
        else { alert('You must select an evaluation'); }

    });  
}



selectFeedback();
sendFeedback();

