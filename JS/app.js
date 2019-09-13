//listen for submit
document.getElementById('loan-form').addEventListener('submit',function(e){
//Hide results
document.getElementById('resluts').style.display= 'none';
//show loader
document.getElementById('loading').style.display ='block'

setTimeout(calculateResults,2000);
e.preventDefault();
});
//CalculateResults
function calculateResults(){
  //Ui variable
  const ammount = document.getElementById('amount');
  const interest = document.getElementById('intrest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalIntrest = document.getElementById('Total-Intrest');


  const prinicipal = parseFloat(ammount.value);
  const calculatedInterest = parseFloat (interest.value)/100/12;
  const calculatedPayments = parseFloat(years.value)*12;

  const x =  Math.pow(1+calculatedInterest,calculatedPayments);
  const monthly = (prinicipal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly*calculatedPayments).toFixed(2);
    totalIntrest.value = ((monthly*calculatedPayments)-prinicipal).toFixed(2);
    document.getElementById('resluts').style.display= 'block';
    document.getElementById('loading').style.display ='none'
  }else{
  showError('Please Check Your numbers');
  }
}
function showError(error){
  document.getElementById('resluts').style.display= 'none';
  document.getElementById('loading').style.display ='none'
  const errordiv = document.createElement('div');

  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  //add lcas
  errordiv.className = 'alert alert-danger';

  // Create Text node and append to div
  errordiv.appendChild(document.createTextNode(error));
  card.insertBefore(errordiv, heading);
  //clear error after 3 set
  setTimeout(clearError, 3000);
};

function clearError(){
  document.querySelector('.alert').remove();
}