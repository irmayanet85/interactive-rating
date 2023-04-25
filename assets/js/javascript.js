/*jshint esversion: 6 */ 
function selectFeedback(){

    const listoptions = document.querySelectorAll('.option');
    
    listoptions.forEach(option => {
        option.addEventListener('click', event => {
            let element = event.target;
            if(document.querySelector('.selected'))
            {
                let element_before = document.querySelector('.selected');
                element_before.classList.remove('selected');
                element_before.classList.add('hover');
            }
            element.classList.add('selected');
            element.classList.remove('hover');
    
        });
    
    });
}

function createCardThank(value){
   let template = document.querySelector('main');

   const elementsHtml = ` <div class="card-thank" >

                       

                        <div class="image-thank">
                            <img src="./assets/images/illustration-thank-you.svg" alt="Ilustration thank you" style="margin: 0px auto;">
                        </div>

                        <div class="text-selected">

                            <p>You selected <span> ${value} </span> out of 5</p>
                        </div>

                        <div class="title">
                            <h1>Thank you!</h1>

                        </div>

                        <div class="description">
                            <p>

                            We appreciate you taking the time to give a rating. If you ever need more support, 
                            don’t hesitate to get in touch!
                            </p>

                        </div>

                    </div>`;

    template.innerHTML = elementsHtml;

}

function sendFeedback(){

    let formFeedback = document.querySelector('#form-feedback');
    formFeedback.addEventListener('submit', (event)=>{
        let evaluation = 0;
        const selected = document.querySelector('.selected');
        if(selected){
            evaluation = selected.value;
        
            if (evaluation >= 1 && evaluation <= 5) { createCardThank(evaluation);}
            else { console.log('You must select a valid assessment');}
        }
        else { alert('You must select an evaluation'); }

    });  
}



selectFeedback();
sendFeedback();

