let barBtn = document.querySelector('.navbar-brand span');
let sideBar = document.querySelector('.sidebar');
let sideUl = document.querySelectorAll('.sidebar ul li .link');

barBtn.addEventListener('click',function(){
    sideBar.classList.toggle('sidebarNotActive');
});

sideUl.forEach(link=>{

    link.onclick = function(){
        sideUl.forEach(li=>{
            li.classList.remove('active')
        });

        link.classList.add('active')
    }
})

// ============== block and none

let allContentData = document.querySelectorAll('.visibiltyData');
let clientContent = document.querySelector('.clientContent');
let purchaseContent = document.querySelector('.purchaseContent');
let purchaseOrderContent = document.querySelector('.purchaseOrderContent');
let invoiceContent = document.querySelector('.invoiceContent');
let storesContent = document.querySelector('.storesContent');
let deliveryStoresContent = document.querySelector('.deliveryStoresContent');
let costsStoresContent = document.querySelector('.costsStoresContent');
let inventoryContent = document.querySelector('.inventoryContent');
let salesInvoiceContent = document.querySelector('.salesInvoiceContent');
let salesPointsContent = document.querySelector('.salesPointsContent');


let mainData = document.querySelector('.main-data');
let owners = document.querySelector('.owners');
let purchases = document.querySelector('.purchases');
let purchaseOrder = document.querySelector('.purchaseOrder');
let managePurchase = document.querySelector('.managePurchase');
let invoicePurchase = document.querySelector('.invoicePurchase');
let stores = document.querySelector('.main-content .stores');
let deliveryStores = document.querySelector('.main-content .deliveryStores');
let costsStores = document.querySelector('.main-content .costsStores');
let inventory = document.querySelector('.inventory');
let salesInvoice = document.querySelector('.salesInvoice');
let salesPoints = document.querySelector('.salesPoints');
let salesReports = document.querySelector('.salesReports');


function showData(data){
    allContentData.forEach(item=>{
        item.style.display = 'none';
    });

    data.style.display = 'block';
}

function exit(){
    allContentData.forEach(item=>{
        item.style.display = 'none';
    });

    mainData.style.display = 'block';
}

function openContent(data){
    data.style.display = 'block';
}

function closeContent(event){
    event.parentElement.parentElement.style.display = 'none'; 
}

//======================================= clientContent

let navClient = document.querySelectorAll('.clientContent nav .parent div');
let dataClient = document.querySelectorAll('.clientContent .data');


let personal = document.querySelector('.clientContent .personal');
let payment = document.querySelector('.clientContent .payment');
let supporting = document.querySelector('.clientContent .supporting');

let month = document.querySelector('.clientContent .data .month');
let year = document.querySelector('.clientContent .data .year');


dataClient.forEach((data,index2,arr2)=>{
    personal.classList.add('active')
    let next = data.lastElementChild;//.btns div => contains next,previous
    next.onclick = function(e){
        if(e.target.parentElement.parentElement.classList.contains('personal')){
            // console.log(true)
            data.classList.remove('active');
            payment.classList.add('active');

            navClient.forEach((item,index1,arr)=>{
                item.classList.remove('active');
                navClient[1].classList.add('active')
            });
        }

        if(e.target.parentElement.parentElement.classList.contains('payment')){
            // console.log(true)
            if(e.target.classList.contains('exit')){
                data.classList.remove('active');
                personal.classList.add('active');

                navClient.forEach((item,index1,arr)=>{
                    item.classList.remove('active');
                    navClient[0].classList.add('active')
                });
            }
            else{
                data.classList.remove('active');
                supporting.classList.add('active');

                navClient.forEach((item,index1,arr)=>{
                    item.classList.remove('active');
                    navClient[2].classList.add('active')
                });
            }
        }

        if(e.target.parentElement.parentElement.classList.contains('supporting')){
            // console.log(true)
            if(e.target.classList.contains('exit')){
                data.classList.remove('active');
                payment.classList.add('active');

                navClient.forEach((item,index1,arr)=>{
                    item.classList.remove('active');
                    navClient[1].classList.add('active')
                });
            }
            else{
                //
            }
        }
    }
})   

for(let i=1 ; i<=12; i++){
    i = i < 10 ? '0' + i : i;
    let option = `<option value="${i}">${i}</option>`;
    month.firstElementChild.insertAdjacentHTML('afterend', option);
}
for(let i=2020 ; i <= 2023; i++){
    // i = i < 10 ? '0' + i : i;
    let option = `<option value="${i}">${i}</option>`;
    year.firstElementChild.insertAdjacentHTML('afterend', option);
}

// ============ Sales

let dataSales = document.querySelectorAll('.salesInvoiceContent .data');
let invoiceDataSales = document.querySelector('.salesInvoiceContent .invoiceData');
let paymentDataSales = document.querySelector('.salesInvoiceContent .paymentData');

dataSales.forEach((data)=>{
    invoiceDataSales.classList.add('active')
    let next = data.lastElementChild;//.btns div => contains next,previous
    console.log(next);
    next.onclick = function(e){
        if(e.target.parentElement.parentElement.classList.contains('invoiceData')){
            console.log(true)
            data.classList.remove('active');
            paymentDataSales.classList.add('active');
        }

        if(e.target.parentElement.parentElement.classList.contains('paymentData')){
            // console.log(true)
            if(e.target.classList.contains('exit')){
                data.classList.remove('active');
                invoiceDataSales.classList.add('active');
            }
        }
    }
})   

// ================ purchases , managePurchase , purchaseOrderBtn

let purchasesBtn = document.querySelectorAll('.purchases .listBtn .btn');
let purchasesTable = document.querySelectorAll('.purchases table');
let purchaseOrderBtn = document.querySelectorAll('.purchaseOrder .listBtn .btn');
let purchaseOrderTable = document.querySelectorAll('.purchaseOrder table');
let managePurchaseBtn = document.querySelectorAll('.managePurchase .listBtn .btn');
let managePurchaseTable = document.querySelectorAll('.managePurchase table');
let costsStoresBtn = document.querySelectorAll('.costsStores .listBtn .btn');
let costsStoresTable = document.querySelectorAll('.costsStores table');

purchasesBtn.forEach((btn,index)=>{
    
    btn.onclick = function(){
        purchasesBtn.forEach(b=>{
            b.classList.remove('active');
        });

        btn.classList.add('active');

        purchasesTable.forEach(table=>{
            table.style.display = 'none';
        });

        if(index == 1){
            purchasesTable[1].style.display = 'block'
        }
        else if(index == 2){
            purchasesTable[2].style.display = 'block'
        }
        else{
            purchasesTable[0].style.display = 'block'
        }
        
    }
}) 

purchaseOrderBtn.forEach((btn,index)=>{
    
    btn.onclick = function(){
        purchaseOrderBtn.forEach(b=>{
            b.classList.remove('active');
        });

        btn.classList.add('active');

        purchaseOrderTable.forEach(table=>{
            table.style.display = 'none';
        });

        if(index == 1){
            purchaseOrderTable[1].style.display = 'block'
        }
        else if(index == 2){
            purchaseOrderTable[2].style.display = 'block'
        }
        else{
            purchaseOrderTable[0].style.display = 'block'
        }
        
    }
}) 

managePurchaseBtn.forEach((btn,index)=>{
    
    btn.onclick = function(){
        managePurchaseBtn.forEach(b=>{
            b.classList.remove('active');
        });

        btn.classList.add('active');

        managePurchaseTable.forEach(table=>{
            table.style.display = 'none';
        });

        if(index == 1){
            managePurchaseTable[1].style.display = 'block'
        }
        else if(index == 2){
            managePurchaseTable[2].style.display = 'block'
        }
        else{
            managePurchaseTable[0].style.display = 'block'
        }
        
    }
}) 

costsStoresBtn.forEach((btn,index)=>{
    
    btn.onclick = function(){
        costsStoresBtn.forEach(b=>{
            b.classList.remove('active');
        });

        btn.classList.add('active');

        costsStoresTable.forEach(table=>{
            table.style.display = 'none';
        });

        if(index == 1){
            costsStoresTable[1].style.display = 'block'
        }
        else if(index == 2){
            costsStoresTable[2].style.display = 'block'
        }
        else{
            costsStoresTable[0].style.display = 'block'
        }
        
    }
}) 

//  =============== reports =======

let reportNames = document.querySelectorAll('.salesReports .reportsName .parent div');
let reportTables = document.querySelectorAll('.salesReports .data');

reportNames.forEach((item,index)=>{
    item.onclick = function(){
        reportNames.forEach(report=>{
            report.classList.remove('active');
        });
        item.classList.add('active')
        
        if(index == 1){
            reportTables.forEach(table=>{
                table.classList.remove('active')
            });
            reportTables[1].classList.add('active')
        }
        else if(index == 2){
            reportTables.forEach(table=>{
                table.classList.remove('active')
            });
            reportTables[2].classList.add('active')
        }
        else if(index == 3){
            reportTables.forEach(table=>{
                table.classList.remove('active')
            });
            reportTables[3].classList.add('active')
        }
        else if(index == 4){
            reportTables.forEach(table=>{
                table.classList.remove('active')
            });
            reportTables[4].classList.add('active')
        }
        else if(index == 5){
            reportTables.forEach(table=>{
                table.classList.remove('active')
            });
            reportTables[5].classList.add('active')
        }
        else if(index == 6){
            reportTables.forEach(table=>{
                table.classList.remove('active')
            });
            reportTables[6].classList.add('active')
        }
        else{
            reportTables.forEach(table=>{
                table.classList.remove('active')
            });
            reportTables[0].classList.add('active')
        }
    }
})