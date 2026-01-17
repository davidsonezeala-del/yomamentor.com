document.addEventListener('DOMContentLoaded',function(){
  // set copyright year
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();

  // schedule button: open Calendly or mailto fallback
  const schedule=document.getElementById('schedule-link');
  if(schedule){
    schedule.addEventListener('click',function(e){
      e.preventDefault();
      const calendlyUrl = 'https://calendly.com/your-username/15min'; // replace with your Calendly link
      window.open(calendlyUrl,'_blank');
    });
  }

  // intercept contact form to show feedback when using Formspree
  const form=document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',async function(e){
      // let Formspree handle it normally, but we send via fetch for nicer UX
      e.preventDefault();
      const url = form.action;
      const data = new FormData(form);
      try{
        const res = await fetch(url,{method:'POST',body:data,headers:{'Accept':'application/json'}});
        if(res.ok){
          alert('Thanks — we received your message. We will be in touch soon.');
          form.reset();
        } else {
          alert('Submission failed — please email Sales@yomamentor.com');
        }
      }catch(err){
        alert('Network error — please email Sales@yomamentor.com');
      }
    });
  }
});
