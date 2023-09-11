const addbtn = document.querySelectorAll('.add-to-order')


addbtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        
        var product = {
            id: btn.getAttribute("id"),
        }
        
        switch (product.id) {
            case '1':
              product.name = 'Beef Classic';
              product.price = '5.99';
              break;
            case '2':
                product.name = 'Deluxe Burger';
                product.price = '7.99';
              break;
            case '3':
                product.name = 'Double Fusion';
                product.price = '7.50';
              break;
            case '4':
                product.name = 'Garden Chick';
                product.price = '6.50';
              break;
            case '5':
                product.name = 'Veggie Burguer';
                product.price = '7.50';
              break;
            case '6':
                product.name = 'Grand Fusion';
                product.price = '8.99';
              break;
            default:
              console.error();
          }

            const existingOrder = localStorage.getItem('order');
            let orderItems_ = existingOrder ? JSON.parse(existingOrder) : [];

            // Add the new product to the cart array
            if(orderItems_.length < 6) {
              orderItems_.push(product);
              Toastify({
                text: product.name + " added to the order",
                duration: 1500,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
            }

            // Convert the array to a JSON string and store it in localStorage
            localStorage.setItem('order', JSON.stringify(orderItems_));
            
    })
})

const orderItems = document.getElementById("order-items");
const price = document.getElementById("price");
const div = document.createElement('div');
const pay = document.getElementById("pay");
const shippingP = document.createElement('p');
const priceP = document.createElement('p');

const existingOrder = localStorage.getItem('order');
let items = existingOrder ? JSON.parse(existingOrder) : [];

for (let i = 0; i < items.length; i++) {
  const div = document.createElement('div');
  const div2 = document.createElement('div');
  const p = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');

  const existingOrder_ = localStorage.getItem('order');
  let items_ = existingOrder_ ? JSON.parse(existingOrder_) : [];

  orderItems.appendChild(div);
  div.classList.add('flex') + div.classList.add('justify-between')
  div.appendChild(p);
  p.innerHTML = items_[i].name;

  div.append(div2);
  div2.append(p2);
  div2.classList.add('flex')
  p2.innerHTML = "$" + items_[i].price;
  
  price.innerHTML = parseFloat(price.innerHTML);
  price.innerHTML = (parseFloat(price.innerHTML) + parseFloat(items_[i].price)).toFixed(2);

  pay.innerHTML = "Pay " + "$" + price.innerHTML;

  //delete btn
  div2.append(p3)
  p3.innerHTML = "X"
  p3.classList.add('px-2') + p3.classList.add('ml-2') + p3.classList.add('mb-[13px]')
  p3.classList.add('font-bold') + p3.classList.add('text-white') + p3.classList.add('bg-red-500') + p3.classList.add('rounded-l-sm') + p3.classList.add('cursor-pointer')


  p3.addEventListener('click', () => {
    price.innerHTML = (parseFloat(price.innerHTML) - parseFloat(items_[i].price)).toFixed(2);
    pay.innerHTML = "Pay " + "$" + price.innerHTML;

    if(items.length != 0) {
      pay.classList.add('bg-[#5386e4]') + pay.classList.remove('bg-gray-500') + pay.classList.remove('opacity-50')
      pay.removeAttribute("disabled", "")
    } else {
      pay.classList.remove('bg-[#5386e4]') + pay.classList.add('bg-gray-500') + pay.classList.add('opacity-50')
      pay.setAttribute("disabled", "")
    }

    orderItems.removeChild(div);
    items.splice(i, 1)
    localStorage.setItem('order', JSON.stringify(items));

    setTimeout(function(){
      location.reload();
  }, 100);
    
  })
  
}
pay.innerHTML = "Pay " + "$" + price.innerHTML;



if(items.length != 0) {
  pay.classList.add('bg-[#5386e4]') + pay.classList.remove('bg-gray-500') + pay.classList.remove('opacity-50')
  pay.removeAttribute("disabled", "")
} else {
  pay.classList.remove('bg-[#5386e4]') + pay.classList.add('bg-gray-500') + pay.classList.add('opacity-50')
  pay.setAttribute("disabled", "")
}


orderItems.append(div);
div.classList.add('flex') + div.classList.add('justify-between')
div.appendChild(shippingP)
shippingP.innerHTML = "Shipping"
shippingP.classList.add('font-bold') + shippingP.classList.add('mt-1')

div.append(priceP);
priceP.innerHTML = "$3.99";
priceP.classList.add('font-bold')


pay.addEventListener("click", () => {
  if(ableToPay) {
    localStorage.removeItem("order");
    sessionStorage.removeItem("payment_method_id");
    alert("You have successfully made your order");
    location.replace("index.html")
  } else {
    console.log("No payment method selected")
    Toastify({
      text: "No payment method selected",
      duration: 2000,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))",
      },
      onClick: function(){} // Callback after click
    })
    .showToast();
  }
})