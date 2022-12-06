//NAVIGATION TOGGLE
let menuToggle = document.querySelector ("#menuToggle");
let header = document.querySelector ("header");

menuToggle.onclick = function(){
    header.classList.toggle ('active');
}

document.onclick = function(clickEvent){
    if (clickEvent.target.id !== 'menuToggle'){
        header.classList.remove ('active');
    }
}

let hot = "hotCoffee"
let iced = "icedCoffee"
let food = "foodMenu"
let icedCoffeeList;
let hotCoffeeList;
let foodMenuList;
let cartId = 0;
cartId = sessionStorage.getItem("idValue")

let BtnCheckout = document.querySelector("#btn-checkout")

const hotCoffee = [
    {"name": "Caffe Americano", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "hot1.png"},
    {"name": "Caffe Latte", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "hot2.png"},
    {"name": "Cappuccino", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "hot3.png"},
    {"name": "Caramel Machiato", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "hot4.png"},
    {"name": "Espresso", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "hot5.png"},
    {"name": "Flat White", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "hot6.png"},
    {"name": "White Chocolate Mocha", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "hot7.png"}
]

const icedCoffee = [
    {"name": "Iced Caffe Americano", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "Iced1.png"},
    {"name": "Iced Caffe Latte", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "iced2.png"},
    {"name": "Iced Cappuccino", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "iced3.png"},
    {"name": "Iced Caramel Machiato", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "iced4.png"},
    {"name": "Iced Espresso", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "iced5.png"},
    {"name": "Iced Flat White", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "iced6.png"},
    {"name": "Iced White Chocolate Mocha", "price": [100.00, 120.00], "size":["Regular", "Large"], "pic": "iced7.png"}
]

const foodMenu = [
    {"name": "Banana Wallnut Loaf", "price":[79.00, 459.00], "size":["1pc", "1 box (6pcs)"], "pic": "food1.png"},
    {"name": "Blueberry Muffin", "price": [59.00, 399.00], "size":["1pc", "1 box (6pcs)"], "pic": "food2.png"},
    {"name": "Chocolate Chip Cookie", "price": [39.00, 219.00], "size":["1pc", "1 box (6pcs)"], "pic": "food3.png"},
    {"name": "Double Chocolate Brownie", "price": [89.00, 499.00], "size":["1pc", "1 box (6pcs)"], "pic": "food4.png"},
    {"name": "Glazed Doughnut", "price": [49.00, 269.00], "size":["1pc", "1 box (6pcs)"], "pic": "food5.png"},
]

const MocafeBranch = [ "SM ANGONO", "SM BACOLOD", "SM BACOOR","SM BAGUIO CYBERZONE","SM BAGUIO FRESH SHOP","SM BALIWAG","SM BATANGAS","SM BF","SM BICUTAN","SM CABANATUAN","SM CALAMBA", "SM CEBU", "SM CLARK", "SM DASMARINAS", "SM ECOLAND DAVAO", "SM FAIRVIEW", "SM ILOILO", "SM LANANG DAVAO", "SM LIGHT", "SM LIPA", "SM MAKATI", "SM MANILA", "SM MARIKINA", "SM MASINAG", "SM MASINAG EXTENDED", "SM MEGAMALL B", "SM MEGAMALL BLDG A", "SM MOA DRIVE THRU", "SM MOA KIOSK", "SM MOLINO", "SM NORTH ANNEX", "SM NORTH WING", "SM OLONGAPO", "SM PAMPANGA","SM PASIG","SM ROSARIO","SM SAN LAZARO","SM SEASIDE CEBU","SM SOUTHMALL","SM STA ROSA","SM STA. MESA","SM SUCAT","SM TAYTAY"]
const allBank = ["BDO UNIBANK INC", "LAND BANK OF THE PHILIPPINES", "BANK OF THE PHIL ISLANDS", "	METROPOLITAN BANK & TCO", "PHIL NATIONAL BANK", "CHINA BANKING CORP", "RIZAL COMM'L BANKING CORP", "DEVELOPMENT BANK OF THE PHIL", "SECURITY BANK CORP", "	UNION BANK OF THE PHILS", "	EAST WEST BANKING CORP", "	CITIBANK, N.A.", "ASIA UNITED BANK CORPORATION", "	BANK OF COMMERCE", "ROBINSONS BANK CORPORATION", "	CIMB BANK PHILIPPINES INC", "BANK OF AMERICA N.A."]

const branchSelector = document.querySelector("#select-branch")
const bankSelector = document.querySelector("#select-bank")


for (let i of MocafeBranch){
    let branchOption = document.createElement("option")
    branchOption.textContent = i
    branchOption.value = i
    branchSelector.appendChild(branchOption)
}

for (let i of allBank){
    let bankOption = document.createElement("option")
    bankOption.textContent = i
    bankOption.value = i
    bankSelector.appendChild(bankOption)
}
const Mocafe = {"menu": [hotCoffeeList, icedCoffeeList, foodMenuList], "list": [hotCoffee, icedCoffee, foodMenu], "x":[hot, iced, food], "y":["Hot Coffee", "Iced Coffee", "Pastries"] }

const menuOption = (wew, cof, x, y) => {
    for (let i in cof) {
        wew = document.querySelector(`.menu-container .${x}`)
        wew.insertAdjacentHTML("beforeend", `
        <div class="col-lg-3 col-md-3 col-6 mb-4 menu-item ${x} first">
        <div class="menu-list d-flex justify-content-center" data-bs-toggle="modal" data-bs-target="#${x}${i}">
          <img src="images/coffee photos/${x}/${cof[i].pic}" alt="">
        </div>
        <div class="text-center">
          <span class="fs-3">${cof[i].name}</span>
        </div>
      </div>


    <!-- Modal -->
    <div class="modal fade" id="${x}${i}" tabindex="-1" aria-labelledby="${x}Label${i}" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-fullscreen-sm-down">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="${x}Label">${y}</h1>
                    <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-x"></i></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex flex-column justify-content-center">
                        <div class="d-flex align-items-center flex-sm-row flex-column">
                            <div class="image col-sm-5">
                                <img class="coffee-pic" src="images/coffee photos/${x}/${cof[i].pic}" alt="">
                            </div>
                            <div class="col-sm-8 col-12 coffee-details">
                                <div class="h1 text-center text-sm-start coffee-name">${cof[i].name}</div>
                                <span class="d-block mb-3">A milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top</span>
                                <span class="col-4">Size option: </span>
                                <input type="radio" class="btn-check btn-size" name="options${i}" id="option${x}${i}" value="${cof[i].price[0]}" autocomplete="off" checked>
                                <label class="btn" for="option${x}${i}">${cof[i].size[0]}</label>
                                <input type="radio" class="btn-check btn-size" name="options${i}" id="${x}${i}${i}" value="${cof[i].price[1]}" autocomplete="off">
                                <label class="btn" for="${x}${i}${i}">${cof[i].size[1]}</label>
                                <div class="d-flex justify-content-between d-block col-12 coffee-priceList my-2">
                                    <div class="d-flex">Price: 
                                        <div class="coffee-price ms-2" value="${cof[i].price[0]}">${cof[i].price[0].toFixed(2)}</div>
                                    </div>
                                    <div class="coffee-size d-none">${cof[i].size[0]}</div>
                                </div>
                                <div class="d-flex justify-content-start">
                                    <p class="mt-1">Quantity: </p>
                                    <div class="ms-4">
                                        <button type="button" class="btn btn-secondary text-center" onclick="quantUpdate(-1)">-</button>
                                        <input type="number" class="quant-update col-2" value="1" onChange="quantChange()">
                                        <button type="button" class="btn btn-secondary text-center" onclick="quantUpdate(1)">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer row">
                    <button type="button" class="btn col-12 col-sm-6 btn-add2cart">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
        `)
    }    
}

for (let i in Mocafe.menu, Mocafe.list, Mocafe.x, Mocafe.y){
    menuOption(Mocafe.menu[i], Mocafe.list[i], Mocafe.x[i], Mocafe.y[i])
}

function quantUpdate(num){
    let quantbtn = event.target.parentElement
    // let parentdiv = quantbtn.parentElement.parentElement.parentElement
    // let price = parentdiv.getElementsByClassName("coffee-price")[0]
    let quantInput = quantbtn.getElementsByClassName("quant-update")[0]
    // console.log(price)
    // price.defaultValue = price.value
    quantInput.value = parseInt(quantInput.value) + parseInt(num)
    if (quantInput.value === isNaN || quantInput.value <= 1){
        quantInput.value = 1
    }
    // price.textContent = parseInt(price.defaultValue) * parseInt(quantInput.value)
    

   
}

function quantChange(){
    let imput = event.target
    if (imput.value == isNaN || imput.value <= 1){
        imput.value = 1
    }
}


const sizeButton = document.getElementsByClassName("btn-size")
for (let x = 0; x < sizeButton.length; x++) {
    let button = sizeButton[x]
    button.addEventListener("click", function() {
        wew = this.parentNode
        wew1 = wew.getElementsByClassName("coffee-priceList")[0]
        wew2 = wew1.getElementsByClassName("coffee-price")[0]
        wew3 = wew1.getElementsByClassName("coffee-size")[0]
        wew2.textContent = parseInt(this.value).toFixed(2)
        wew3.textContent = this.labels[0].textContent
        // wew2= wew.getElementsByClassName('coffee-priceList')
        // wew3 = wew.getElementsByClassName('coffee-price')
        // wew3.text = this.value
    })
}

const addButton = document.getElementsByClassName("btn-add2cart")
for (let x = 0; x < addButton.length; x++){
        let button = addButton[x]
        button.addEventListener("click", add2cartFunc)
}

function add2cartFunc() {
    let cartEntries = JSON.parse(sessionStorage.getItem("allCartEntries"));
    if (cartEntries == null) cartEntries = []
    let button = event.target
    let wiw1 = this.parentNode.parentNode
    let wiw2 = wiw1.getElementsByClassName("coffee-details")[0]
    let cartName = wiw2.getElementsByClassName("coffee-name")[0].textContent
    let cartPrice = wiw2.getElementsByClassName("coffee-price")[0].textContent
    let cartSize = wiw2.getElementsByClassName("coffee-size")[0].textContent
    let cartPic = wiw1.getElementsByClassName("coffee-pic")[0].src
    cartQuant = wiw2.getElementsByClassName("quant-update")[0].value
    console.log(cartQuant)
    cartName = `${cartName} (${cartSize})`
    
    cartId++
    let cartItems = {
        id: cartId,
        name: cartName,
        price: cartPrice,
        pic: cartPic,
        quant: cartQuant
    }

    sessionStorage.setItem("cartDetails", JSON.stringify(cartItems));
    cartEntries.push(cartItems);
    sessionStorage.setItem("idValue", cartId);
    sessionStorage.setItem("allCartEntries", JSON.stringify(cartEntries));


    setTimeout(() => {
        button.disabled = true
        location.reload();
        
    }, 100)

}

let cartList = sessionStorage.getItem("allCartEntries")
let allCartEntries = JSON.parse(cartList)
let allCartEntry

const arr = allCartEntries

const count = {};
if (arr === null){
    console.log(arr)
    BtnCheckout.disabled = true
    console.log(BtnCheckout)
} else{
    arr.forEach(element => {
        if (count.hasOwnProperty(element.name)) {
            count[element.name] = parseInt(count[element.name]) + parseInt(element.quant);
          } else {
            count[element.name] = element.quant;
          }
    });

    
    const arr2 = getUniqueListBy(allCartEntries, "name")
    console.log(arr2)
    
    for (let x in allCartEntries){
        console.log(allCartEntries[x])
    }
    
    // 👇️ {one: 3, two: 2, three: 1}
    console.log(count);
    
    const ar = []
    
    for (var x in count) {
    ar.push({ name: x, value: count[x] });
    }
    console.log(ar)
    
    for (let i in arr2){
        for (let y in ar){
            if (arr2[i].name === ar[y].name){
                arr2[i].quant = ar[y].value
                arr2[i].price = arr2[i].price * arr2[i].quant
            }
        }
    }
    sessionStorage.setItem("allcartNow", JSON.stringify(arr2))
    allin =sessionStorage.getItem("allcartNow")
    allCartEntry = JSON.parse(allin)
    
    for (let i in allCartEntry){
        let cartBody = document.querySelector("#cartBody")
        cartBody.insertAdjacentHTML("beforeend", `
        <div class="wew mb-3" id="${allCartEntry[i].id}">
        <div class="d-flex justify-content-between">
            <div class="d-flex justify-content-start align-items-center">
                <div class="">
                    <img src="${allCartEntry[i].pic}">
                </div>
                <div class="cartname" id="${allCartEntry[i].name}">x${(allCartEntry[i].quant)} ${allCartEntry[i].name}</div>
            </div>
            <div class="">
                <span onclick="removeItem()"><i class="fa-solid fa-xmark"></i></span>
            </div>
        </div>
        <div class="d-flex justify-content-between ms-5 me-2">
            <span>Subtotal</span>
            <span>${parseInt(allCartEntry[i].price).toFixed(2)}</span>
        </div>
        <hr class="mb-3">
    </div>
        `)
    }
    checkOutBtn()
    console.log(allCartEntry)
    function checkOutBtn() {
        
        if (allCartEntry === null || allCartEntry.length === 0){
            BtnCheckout.disabled = true;
            console.log("Wew")
        } else{
            BtnCheckout.disabled = false
            console.log("weiw")
        }
    }
    
    function updateTotal() {
        let total = 0;
        for (let i in allCartEntry){
            total = parseFloat(total) + parseFloat(allCartEntry[i].price)
        }
        let cartTotal = document.querySelector("#cartTotal")
        cartTotal.textContent = total.toFixed(2);
        
    }
    updateTotal()
    
    
    function removeItem() {
        //selects the parentNode of the event
        let td = event.target.parentElement.parentElement.parentElement.parentElement;
        console.log(td)
        // to get the id or row
        let cartId = td.id;
        let parent = td.parentElement
        ts = event.target.parentElement.parentElement
        ty = ts.parentElement.firstElementChild
        fuckthishit = ty.lastElementChild.id
        
        console.log(fuckthishit)
        parent.removeChild(td)
        console.log(cartId)
        //to filter the array of objects and update taskEntries2 value
        allCartEntry = allCartEntry.filter((obj) => obj.id != parseInt(cartId))
        allCartEntries = allCartEntries.filter((obj) => obj.name != fuckthishit)
        //to update all entries in local storage
        sessionStorage.setItem("allcartNow", JSON.stringify(allCartEntry));
        sessionStorage.setItem("allCartEntries", JSON.stringify(allCartEntries))
        updateTotal()
        checkOutBtn()
        console.log(allCartEntry)
    }
    
    function handleQuaintityChange(id, diff){
        const product = allCartEntry.find(prod=>prod.id===id);
        if(!product) return;
        product.quantity+=diff;
        return true
     }

}

//Flatpicker DATE TIME

config ={
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    altInput: true,
    altFormat: "F j, Y (h:S K)",
    minDate: "today"
}

flatpickr("input[type=datetime-local", config)

//FUNCTION FOR PICKUP AND DELIVER BUTTON
let deliv = document.querySelector("#delivery")
let pickup = document.querySelector("#pick-up")

let delivBtn = document.querySelector("#for-delivery")
let pickupBtn = document.querySelector("#for-pickup")


let spanOrderType = document.querySelector("#spanOrderType").textContent
let spanOrderTime = document.querySelector("#spanOrderTime").textContent
let spanOrderAddress = document.querySelector("#spancompleteAddressInput").textContent
let pickupLoc = document.querySelector("#spanpickupLoc").textContent
function pickupFunc(){
    deliv.style.display = "none"
    pickup.style.display = "flex"
    orderBtnFunc(delivBtn, pickupBtn)
    spanOrderType = `Ordering for pick-up to `
    console.log(spanOrderType)
    btnTransact.disabled = true
    
}
function delivFunc(){
    deliv.style.display = "flex"
    pickup.style.display = "none"
    orderBtnFunc(pickupBtn, delivBtn)
    spanOrderType = `Ordering for delivery to `
    verifyAddress()
}

function delivTimeFunc(){
    spanOrderTime = event.target.value
    
}
function pickupLocFunc(){
    pickupLoc = event.target.value
    btnTransact.disabled = false
}
function selectTime(){
    btnTransact.disabled = false
}

const btnTransact = document.querySelector("#btn-trans-type")

function verifyAddress(){
    spanOrderAddress = document.querySelector("#completeAddressInput").value
    if (spanOrderAddress == ""){
        btnTransact.disabled = true
        console.log(spanOrderAddress)
    } else{
        btnTransact.disabled = false
        console.log("True")
       
    }
}
verifyAddress()

let btnInfoType = document.querySelector("#btn-info-type")
let completeName;
let contactNum;
let emailAdd;
let paymentMethod;

function verifyInfo(){
    completeName = document.querySelector("#fullName").value
    contactNum = document.querySelector("#numInput").value
    emailAdd = document.querySelector("#emailInput").value
    if (completeName == "" || contactNum == "" || emailAdd == ""){
        btnInfoType.disabled = true
        console.log(emailAdd)
    } else{
        btnInfoType.disabled = false
    }
}
verifyInfo()


let paymentOption = document.getElementsByClassName("payment-option")
function btnTransacFunc(){
    if (spanOrderType == `Ordering for delivery to `){
        spanOrderAddress = document.querySelector("#completeAddressInput").value
        document.querySelector("#order-delivery-time").textContent = spanOrderTime
        document.querySelector("#orderAddressTo").textContent = `${spanOrderAddress}`
    } else{
        spanOrderAddress = document.querySelector("#select-branch").value
        document.querySelector("#order-delivery-time").textContent = document.querySelector("#DeliveryTime").value
        document.querySelector("#orderAddressTo").textContent = `${spanOrderAddress} (${pickupLoc})`
    }
    
    document.querySelector("#orderAddress").textContent = spanOrderType
    
    
    console.log(spanOrderType)
    for (let i of paymentOption){
        if (spanOrderType == `Ordering for pick-up to `){
            i.value = i.value.replace("Delivery", "Pick-up")
            console.log(i.value)
            let payDiv = i.parentElement
            let payName = payDiv.querySelector("h5")
            payName.textContent = i.value
            console.log(payName.textContent)
            let charge = document.querySelector("#delcharge")
            charge.style.display = "none"
        }
    }
}
console.log(document.querySelector("#DeliveryTime").value)

function orderBtnFunc(mybtn, urbtn){
    let pickupDiv = mybtn.querySelector("div")

    pickupDiv.classList.remove("order-div-toggled")
    
    pickupDiv.querySelector("img").classList.remove("order-icon-toggled")

    let thisBtnDiv = urbtn.querySelector("div")
    thisBtnDiv.classList.add("order-div-toggled")
    thisBtnDiv.querySelector("img").classList.add("order-icon-toggled")
    // console.log(thisBtnDiv)
    // console.log(thisBtnPic)
}
document.getElementById("btn-payment").disabled = true
let payOpt;
let mop;
for (let i of paymentOption){
    if (spanOrderType == `Ordering for pick-up to `){
        i.value.replace("Delivery", "Pick-up")
    }
    i.addEventListener("click", function(){
        for (let x = 0; x < paymentOption.length; x++){
            let otherOptdiv = paymentOption[x].parentElement
            let otherOpt =  otherOptdiv.getElementsByClassName("payment-opt")[0]
            console.log(otherOpt)
            otherOpt.classList.add("d-none")
        } 
        let paymentOptDiv = event.target.parentElement
        let paymentOpt = paymentOptDiv.getElementsByClassName("payment-opt")[0]
        paymentOpt.classList.remove("d-none")
        paymentOpt.classList.add("d-block")
        if (event.target.value === "Cash on Delivery" || event.target.value === "Cash on Pick-up"){
            document.getElementById("btn-payment").disabled = true
        } else if(event.target.value === "Online Banking (Delivery)" || event.target.value === "Online Banking (Pick-up)"){
            document.getElementById("btn-payment").disabled = true
            payOpt = bankSelector.value
        } else {
            document.getElementById("btn-payment").disabled = false
            payOpt = ""
        }
        mop = event.target.value
        
    })
}
function changeFunc() {
    if (parseInt(document.querySelector("#changeInput").value) < parseInt(document.querySelector("#cartTotal").textContent) || document.querySelector("#changeInput").value == ""){
        document.getElementById("btn-payment").disabled = true
        payOpt = `change for P${document.querySelector("#changeInput").value}0`
    } else{
        document.getElementById("btn-payment").disabled = false
    }
}

function bankchangeFunc(){
    payOpt = bankSelector.value
    document.getElementById("btn-payment").disabled = false
}

function tyFunc(){
    document.querySelector("#customerName").textContent = completeName
    document.querySelector("#customerEmail").textContent = emailAdd
    document.querySelector("#totalPrice").textContent = `P${document.querySelector("#cartTotal").textContent}`
    document.querySelector("#MoP").textContent = mop
    document.querySelector("#mopOpt").textContent = payOpt
    let orderList = document.querySelector("#items")
    for (let i in allCartEntry){
        orderList.insertAdjacentHTML("beforeend", `
        <div class="d-flex justify-content-between mb-2">
        <p class="item-name">x${(allCartEntry[i].quant)} ${allCartEntry[i].name}</p>
        <p class="item-price">${parseInt(allCartEntry[i].price).toFixed(2)}</p>
    </div>
        `)
    }
}

function tytyFunc(){
    sessionStorage.clear()
    setTimeout(() => {
        location.reload()
    }, 500);
}




var menuIsotope = $('.menu-container').isotope({itemSelector: '.menu-item', layoutMode: 'fitRows'});
$('#menu-flters span').on('click', function (){
    $("#menu-flters span").removeClass('active');
    $(this).addClass('active');

    menuIsotope.isotope({filter: $(this).data('filter')});
});


function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}
