
document.getElementById("add-money-btn").addEventListener("click", function(event) {
    event.preventDefault();

    const pinIncorrect = document.getElementById("add-pin-incorrect");
    const accountIncorrect = document.getElementById("add-account-incorrect")
    const amountIncorrect = document.getElementById("add-amount-incorrect");
    
    const accountInput = getInputValueById("account-input");

    const convertAddAmount = getInputValueByIdConverted("add-amount")

    const convertPinInput = getInputValueByIdConverted("add-pin-input");

    let convertMainBalance = getInnerTextByIdConverted("main-balance");


    
    if (accountInput.length === 11) {
        accountIncorrect.style.display = "none"
        if (getInputValueById("add-amount") == "" || convertAddAmount < 0) {
           
            amountIncorrect.style.display = "block"
        }else {
            amountIncorrect.style.display = "none"
            if (convertPinInput === 1235) {
                pinIncorrect.style.display = "none"
                if ( convertAddAmount < convertMainBalance ) {
                    const sum = convertAddAmount + convertMainBalance;
                 setInnerTextValue("main-balance", sum)
                
                
                const transactionSection = document.getElementById("transaction-section");

                const div = document.createElement("div");
                
                 div.innerHTML = `
                
                     <div class="flex items-center gap-4 ">
                         <img class="w-14 h-14 bg-white p-2 rounded-full" src="assets/purse1.png" alt="">
                         <div>
                             <h5 class="text-[24px]">Add Money</h5>
                             <p class="font-bold text-[18px] text-white">${convertAddAmount} tk, Account :  ${accountInput}</p>
                             <p class="text-gray-200">today 01:44 pm</p>
                         </div>
                     </div>
                     <i class="fa-solid fa-ellipsis-vertical mr-3 text-[30px] text-white cursor-pointer"></i>
                     `;
 
                     div.classList.add("bg-gray-400", "p-3", "rounded-lg", "flex", "justify-between","items-center");
 
                 
                    transactionSection.appendChild(div);

                    alert ("Add Money Successful")

                }else {
                    alert ("Insufficient Balance")
                }
            }else {
                pinIncorrect.style.display = "block"
            }
        }
    }else {
        accountIncorrect.style.display = "block"
    }


})


document.getElementById("agent-money-btn").addEventListener("click", function(e) {
    e.preventDefault();

    const agentIncorrect = document.getElementById("agent-incorrect")
    const agentAmountIncorrect = document.getElementById("agent-amount-incorrect")
    const agentPinIncorrect = document.getElementById("agent-pin-incorrect");
    
    const agentInput = document.getElementById("agent-input").value;

    const convertedAgentAmount = getInputValueByIdConverted("agent-amount-input");

    const convertedAgentPin = getInputValueByIdConverted("agent-pin-input")

    let convertMainBalance = getInnerTextByIdConverted("main-balance");

    if (agentInput.length === 11) {
        agentIncorrect.style.display = "none"
        if (getInputValueById("agent-amount-input") == "" || convertedAgentAmount < 0) {
            agentAmountIncorrect.style.display = "block"
        }else {
            if (convertedAgentPin === 12345) {
                agentPinIncorrect.style.display = "none"
               if (convertedAgentAmount < convertMainBalance) {
                const sum = convertMainBalance - convertedAgentAmount;
                setInnerTextValue("main-balance", sum);

                const transactionSection = document.getElementById("transaction-section");

                const div = document.createElement("div");
                
                div.innerHTML = `
               
                    <div class="flex items-center gap-4 ">
                        <img class="w-14 h-14 bg-white p-2 rounded-full" src="assets/purse1.png" alt="">
                        <div>
                            <h5 class="text-[24px]">Cash Out</h5>
                            <p class="font-bold text-[18px] text-white">${convertedAgentAmount} tk, Account :  ${agentInput}</p>
                            <p class="text-gray-200">today 01:44 pm</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical mr-3 text-[30px] text-white cursor-pointer"></i>
                    `;

                     div.classList.add("bg-gray-400", "p-3", "rounded-lg", "flex", "justify-between","items-center");


                    transactionSection.appendChild(div);

                    alert ("Cash Out Successful")

                }else {
                alert ("Insufficient Balance")
                return;
               }
            }else {
                agentPinIncorrect.style.display = "block"
            }
        }
    }else {
        agentIncorrect.style.display = "block"
    }
})


document.getElementById("user-set-money-btn").addEventListener("click", function(event) {
    event.preventDefault();

    const userAccountIncorrect = document.getElementById("user-account-incorrect")
    const agentAmountIncorrect = document.getElementById("agent-amount-incorrect")
    const userPinIncorrect = document.getElementById("user-pin-incorrect")


    const userAccountInput = getInputValueById("user-input");

    const userAmountConverted = getInputValueByIdConverted("user-amount-input");
    const userAmount = getInputValueById("user-amount-input");

    const userPinInputConverted = getInputValueByIdConverted("user-pin-input");

    let convertMainBalance = getInnerTextByIdConverted("main-balance");

    if (userAccountInput.length === 11) {
        userAccountIncorrect.style.display = "none"
        if(userAmount == "" || userAmountConverted < o){
            agentAmountIncorrect.style.display = "block"
        }else {
            agentAmountIncorrect.style.display = "none"
            if (userAmountConverted < convertMainBalance) {
                if (userPinInputConverted === 12345){
                    userPinIncorrect.style.display = "none"
                    const sum = convertMainBalance - userAmountConverted;
                    
                    setInnerTextValue("main-balance", sum)


                    const transactionSection = document.getElementById("transaction-section");

                    const div = document.createElement("div");
                    
                    div.innerHTML = `
                   
                        <div class="flex items-center gap-4 ">
                            <img class="w-14 h-14 bg-white p-2 rounded-full" src="assets/purse1.png" alt="">
                            <div>
                                <h5 class="text-[24px]">Transfer Money</h5>
                                <p class="font-bold text-[18px] text-white">${userAmountConverted} tk, Account :  ${userAccountInput}</p>
                                <p class="text-gray-200">today 01:44 pm</p>
                            </div>
                        </div>
                        <i class="fa-solid fa-ellipsis-vertical mr-3 text-[30px] text-white cursor-pointer"></i>
                        `;
    
                         div.classList.add("bg-gray-400", "p-3", "rounded-lg", "flex", "justify-between","items-center");
    
    
                        transactionSection.appendChild(div);


                    alert ("Transfer Successful")
                }else {
                    userPinIncorrect.style.display = "block"
                    
                }
            }else {
                alert ("Insufficient Balance")
                return;
            }
        }
    }else {
        userAccountIncorrect.style.display = "block"
    }
})


document.getElementById("biller-pay-money-btn").addEventListener("click", function(event) {
    event.preventDefault();

    const billerAccountIncorrect = document.getElementById("biller-account-incorrect");
    const amountPayIncorrect = document.getElementById("biller-amount-incorrect");
    const billerPinIncorrect = document.getElementById("biller-pin-incorrect");

    const billerAccountNumber = getInputValueById("biller-account-input");

    const billerAmountConverted = getInputValueByIdConverted("biller-amount-input");
    const billerAmount = getInputValueById("biller-amount-input");

    const billerPinInputConverted = getInputValueByIdConverted("biller-pin-input");

    let convertMainBalance = getInnerTextByIdConverted("main-balance");

    if (billerAccountNumber.length === 11) {
        billerAccountIncorrect.style.display = "none"
        if(billerAmount == "" || billerAmount < 0) {
            amountPayIncorrect.style.display = "block"
        }else {
            amountPayIncorrect.style.display = "none"
            if (billerPinInputConverted === 12345) {
                billerAccountIncorrect.style.display = "none"
                if(billerAmountConverted < convertMainBalance) {
                    const sum = convertMainBalance - billerAmountConverted;
                    setInnerTextValue("main-balance", sum)

                    const transactionSection = document.getElementById("transaction-section");

                const div = document.createElement("div");
                
                div.innerHTML = `
               
                    <div class="flex items-center gap-4 ">
                        <img class="w-14 h-14 bg-white p-2 rounded-full" src="assets/purse1.png" alt="">
                        <div>
                            <h5 class="text-[24px]">Pay Bill</h5>
                            <p class="font-bold text-[18px] text-white">${billerAmountConverted} tk, Account :  ${billerAccountNumber}</p>
                            <p class="text-gray-200">today 01:44 pm</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical mr-3 text-[30px] text-white cursor-pointer"></i>
                    `;

                div.classList.add("bg-gray-400", "p-3", "rounded-lg", "flex", "justify-between","items-center");

                
                transactionSection.appendChild(div);

                alert ("Bill Pay Successful")


                }else {
                    alert ("Insufficient Balance")
                }
            }else {
                billerAccountIncorrect.style.display = "block"
            }
        }
    }else {
        billerAccountIncorrect.style.display = "block";
    }
})


document.getElementById("log-out-btn").addEventListener("click", function() {
    window.location.href = "./index.html"
})