document.getElementById('button1').addEventListener('click',loadCustomer);
const val =document.querySelector('.number2').value;

function loadCustomer(e,val){
  const xhr = new XMLHttpRequest();
  // xhr.open('GET','JS/customer.json',true);

  // xhr.onload = function(){
  //   if(this.status === 200){
  //    // console.log(this.responseText);
  //     const customer = JSON.parse(this.responseText);
  //     const output = `
  //     <ul>
  //       <li> ID:${customer.id}</li>
  //       <li> Name:${customer.name}</li>
  //       <li> Company:${customer.company}</li>
  //       <li> Phone:${customer.phone}</li>
  //     </ul>`;
  //     document.getElementById('customer').innerHTML = output;
  //   }
  // }

  xhr.open('GET','JS/customers.json',true);

  xhr.onload = function(){
    if(this.status === 200){
     // console.log(this.responseText);
      const customers = JSON.parse(this.responseText);
      let output = '';
      customers.forEach(function(cust,index){
        if(index==val){
        output += `
        <ul>
          <li> ID:${cust.id}</li>
          <li> Name:${cust.name}</li>
          <li> Company:${cust.company}</li>
          <li> Phone:${cust.phone}</li>
        </ul>`;
        }
      })
      document.getElementById('customers').innerHTML = output;
    }
  }
  
  xhr.send();
}

document.getElementById('button2').addEventListener('click',loadCustomers);
function loadCustomers(e){
  const xhr = new XMLHttpRequest();
  xhr.open('GET','JS/customers.json',true);

  xhr.onload = function(){
    if(this.status === 200){
     // console.log(this.responseText);
      const customers = JSON.parse(this.responseText);
      let output = '';
      customers.forEach(function(cust){
        output += `
        <ul>
          <li> ID:${cust.id}</li>
          <li> Name:${cust.name}</li>
          <li> Company:${cust.company}</li>
          <li> Phone:${cust.phone}</li>
        </ul>`;
       
      })
      document.getElementById('customers').innerHTML = output;
    }
  }
  xhr.send();
}