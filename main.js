let isBig = true;
let showDropdown = false;

// Vanilla JavaScript event handler
document.addEventListener("resize", ()=>{
    if(window.innerWidth > 1200){
        isBig = true;
    }else{
        isBig = false;
    }
})

// JQuery version click handler
$("#navBurger_icon").on("click", ()=>{
    const burgerMenu = $("#navBurger_menu");
    burgerMenu.toggleClass("show", false);
    if(!isBig){
        showDropdown = false;
        burgerMenu.toggleClass("hide", true);
        return;
    }else if(showDropdown){
        showDropdown = false;
        burgerMenu.toggleClass("hide", true);
        return
    }else{
        showDropdown = true;
        burgerMenu.toggleClass("show", true);
        return;
    }
})


// Code that is just for fun starts here.

console.log("It's cool that you are checking the console to see what I put here for you to find.");

// Basic data about the user
const onMobile = window.navigator.userAgentData.mobile;
const platform = window.navigator.userAgentData.platform;

// Gets data about the brands used in the browser and returns a clean format
function getBrands() {
    console.log("What da", window.navigator.userAgentData)
    const brandList = window.navigator.userAgentData.brands || [];
    const na = "Not?A_Brand";
    const formatted = [];
    brandList.forEach(br=>{
        if(br.brand !== na){
            const data = `${br.brand} version ${br.version}`;
            formatted.push(data);
        }
    });
    return formatted.join(" and the ");
}


setTimeout(()=>{
    console.debug("I tried to be a bit clever in how I hid stuff. \nI want them to be only found by those that are looking for something.");
    const brands = getBrands()
    console.log(`I see that you are using the ${brands}. I tend to use Opera a lot myself but Chrome has some really nice browser extension tools.`);
    if(onMobile){
        console.log("It's pretty cool how you opened the console from your mobile device. Kudos on you for being a real pro");
    }
}, 200);
