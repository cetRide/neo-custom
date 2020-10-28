let standardPrices = {
    waterResistance: 32
};
let totalPrice = 0;
let sizeDetails = {
    length: 9,
    heightOne: 7,
    heightTwo: 35,

    mLength: 11,
    mHeightOne: 9,
    mHeightTwo: 45,

    lLength: 14,
    lHeightOne: 12,
    lHeightTwo: 56,

    xlLength: 17,
    HeightOne: 14,
    HeightTwo: 68,

    xxlLength: 23,
    xxlHeightOne: 18,
    xxlHeightTwo: 86,

    superLength: 31,
    superHeightOne: 22,
    superHeightTwo: 108
};
let small = {
    length: 9,
    heightL: 7,
    heightR: 35
};
let medium = {
    length: 11,
    heightL: 9,
    heightR: 45
};
let large = {
    length: 14,
    heightL: 12,
    heightR: 56
};
let extraLarge = {
    length: 17,
    heightL: 14,
    heightR: 68
};
let xxLarge = {
    length: 23,
    heightL: 18,
    heightR: 86
};
let superSizedLength = {
    length: 31,
    heightL: 22,
    heightR: 108
};
let backBoard = [
    {id: "0", url: '/images/back1.png', name: 'Cut Around Acrylic', price: 'Free'},
    {id: "1", url: '/images/back2.png', name: 'Rectangle Acrylic', price: 'Free'},
    {id: "2", url: '/images/back3.png', name: 'Cut To Letter Acrylic', price: '82'},
    {id: "3", url: '/images/back4.png', name: 'Stand Acrylic', price: '124'},
    {id: "4", url: '/images/back5.png', name: 'Clear Acrylic Box: For hanging', price: '284'},
    {id: "5", url: '/images/back6.png', name: 'Clear Acrylic Box: For wall Mounting', price: '284'},
    {id: "6", url: '/images/back7.png', name: 'Clear Acrylic Box: Free-Standing', price: '284'},
];

let sizePrices = {
    small: 34,
    medium: 63,
    large: 86,
    xlarge: 107,
    xxlarge: 128,
    superSized: 180
};

let defaultNeon = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #98ff98, 0 0 30px #98ff98, 0 0 40px #98ff98, 0 0 55px #98ff98, 0 0 75px #98ff98";


window.onload = function () {
    let i, tabContent;
    document.getElementById('displayText').style.color = 'white';
    document.getElementById('onBtn').style.backgroundColor = 'white';
    document.getElementById('offBtn').style.backgroundColor = "#4D4B4B";
    let displayText = document.getElementById("displayText");
    let textInput = document.getElementById("textInput");
    displayText.innerHTML = textInput.value;
    displayText.style.textAlign = 'center';
    document.getElementById("box-small").style.display = "block";
    tabContent = document.getElementsByClassName("tabContent");
    document.getElementById('blackboardPrice').innerHTML = 'Free';
    document.getElementById('totalPrice').innerHTML = totalPrice;
    document.getElementById('displayText').style.textShadow = defaultNeon;
    document.getElementById('displayText').style.fontFamily = 'Dolce Vita';

    document.getElementById("slength").innerHTML = small.length.toString();
    document.getElementById("llength").innerHTML = large.length.toString();
    document.getElementById("mlength").innerHTML = medium.length.toString();
    document.getElementById("xllength").innerHTML = extraLarge.length.toString();

    document.getElementById("sheight-one").innerHTML = small.heightL.toString();
    document.getElementById("lheight-one").innerHTML = large.heightL.toString();
    document.getElementById("mheight-one").innerHTML = medium.heightL.toString();
    document.getElementById("xlheight-one").innerHTML = extraLarge.heightL.toString();

    document.getElementById("sheight-two").innerHTML = small.heightR.toString();
    document.getElementById("lheight-two").innerHTML = large.heightR.toString();
    document.getElementById("mheight-two").innerHTML = medium.heightR.toString();
    document.getElementById("xlheight-two").innerHTML = extraLarge.heightR.toString();

    localStorage.setItem('size', 'Small');
    localStorage.setItem('length', small.length);
    localStorage.setItem('heightOne', small.heightL);
    localStorage.setItem('heightTwo', small.heightR);
    for (i = 0; i < tabContent.length; i++) {
        if (i === 0) {
            tabContent[i].style.display = "block";
        }
        break;
    }
};


function openTab(evt, actionName) {
    let i, tabContent, tabLink;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLink = document.getElementsByClassName("tabLink");
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(" active", "");
    }
    document.getElementById(actionName).style.display = "block";
    evt.currentTarget.className += " active";
}

function changeFontFamily(font) {
    let displayText = document.getElementById('displayText');
    displayText.style.fontFamily = font, 'cursive';
    localStorage.setItem('font', font);
}

function setColor(color) {
    let textColor, color_string;

    switch (color) {
        case 'Lemon Yellow':
            textColor = "#fff44f";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff44f, 0 0 30px #fff44f, 0 0 40px #fff44f, 0 0 55px #fff44f, 0 0 75px #fff44f";
            break;
        case 'Mint':
            textColor = "#98ff98";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #98ff98, 0 0 30px #98ff98, 0 0 40px #98ff98, 0 0 55px #98ff98, 0 0 75px #98ff98";
            break;
        case 'Golden Yellow':
            textColor = "#FFDF00";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #FFDF00, 0 0 30px #FFDF00, 0 0 40px #FFDF00, 0 0 55px #FFDF00, 0 0 75px #FFDF00";
            break;
        case 'Orange':
            textColor = "#FFA500";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #FFA500, 0 0 30px #FFA500, 0 0 40px #FFA500, 0 0 55px #FFA500, 0 0 75px #FFA500";
            break;
        case 'Red':
            textColor = "#FF0000";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #FF0000, 0 0 30px #FF0000, 0 0 40px #FF0000, 0 0 55px #FF0000, 0 0 75px #FF0000";
            break;
        case 'Deep Blue':
            textColor = "#00BFFF";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #00BFFF, 0 0 30px #00BFFF, 0 0 40px #00BFFF, 0 0 55px #00BFFF, 0 0 75px #00BFFF";
            break;
        case 'Deep Green':
            textColor = "#056608";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #056608, 0 0 30px #056608, 0 0 40px #056608, 0 0 55px #056608, 0 0 75px #056608";
            break;
        case 'Candy Floss':
            textColor = "#f4b8d8";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #f4b8d8, 0 0 30px #f4b8d8, 0 0 40px #f4b8d8, 0 0 55px #f4b8d8, 0 0 75px #f4b8d8";
            break;
        case 'Tropical Blue':
            textColor = "#CBE8F7";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #CBE8F7, 0 0 30px #CBE8F7, 0 0 40px #CBE8F7, 0 0 55px #CBE8F7, 0 0 75px #CBE8F7";
            break;
        case 'Deep Pink':
            textColor = "#FF1493";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #FF1493, 0 0 30px #FF1493, 0 0 40px #FF1493, 0 0 55px #FF1493, 0 0 75px #FF1493";
            break;
        case 'Warm White':
            textColor = "#efebd8";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #efebd8, 0 0 30px #efebd8, 0 0 40px #efebd8, 0 0 55px #efebd8, 0 0 75px #efebd8";
            break;
        case 'White':
            textColor = "#ffffff";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff, 0 0 55px #ffffff, 0 0 75px #ffffff";
            break;
        case 'Light Red':
            textColor = "#ffcccb";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ffcccb, 0 0 30px #ffcccb, 0 0 40px #ffcccb, 0 0 55px #ffcccb, 0 0 75px #ffcccb";
            break;
        case 'Purple':
            textColor = "#800080";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #800080, 0 0 30px #800080, 0 0 40px #800080, 0 0 55px #800080, 0 0 75px #800080";
            break;
        case 'Electric Blue':
            textColor = "#7DF9FF";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #7DF9FF, 0 0 30px #7DF9FF, 0 0 40px #7DF9FF, 0 0 55px #7DF9FF, 0 0 75px #7DF9FF";
            break;
        case 'Ice Blue':
            textColor = "#A5F2F3";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #A5F2F3, 0 0 30px #A5F2F3, 0 0 40px #A5F2F3, 0 0 55px #A5F2F3, 0 0 75px #A5F2F3";
            break;
        case 'Green':
            textColor = "#008000";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #008000, 0 0 30px #008000, 0 0 40px #008000, 0 0 55px #008000, 0 0 75px #008000";
            break;
        default:
            color_string = "0 1px 0 #e73dcd, 0 2px 0 #d22fba, 0 3px 0 #c42aad, 0 4px 0 #b5219f, 0 0 5px rgba(0,0,0,.23), 0 1px 3px rgba(0,0,0,.43), 1px 4px 6px rgba(0,0,0,.4), 0 5px 10px rgba(0,0,0,.38), 3px 7px 12px rgba(0,0,0,.25)";
            break
    }
    document.getElementById('displayText').style.textShadow = color_string;
    document.getElementById('displayText').style.color = textColor;
    document.getElementById('onBtn').style.backgroundColor = 'white';
    document.getElementById('offBtn').style.backgroundColor = "#4D4B4B";
    localStorage.setItem('glow-color-code', color_string);
    localStorage.setItem('glow-color', color);
    localStorage.setItem('color-code', textColor);
}

function alignText(direction) {
    switch (direction) {
        case 'Left':
            document.getElementById('displayText').style.textAlign = 'left';
            break;
        case 'Center':
            document.getElementById('displayText').style.textAlign = 'center';
            break;
        case 'Right':
            document.getElementById('displayText').style.textAlign = 'right';
            break;
        default:
            document.getElementById('displayText').style.textAlign = 'center';
            break;
    }
    localStorage.setItem('alignText', direction);
}

function displayText(event) {
    let textInput = document.getElementById("textInput");
    let displayText = document.getElementById("displayText");

    let slength = document.getElementById("slength");
    let mlength = document.getElementById("mlength");
    let llength = document.getElementById("llength");
    let xllength = document.getElementById("xllength");

    let sheightOne = document.getElementById("sheight-one");
    let mheightOne = document.getElementById("mheight-one");
    let lheightOne = document.getElementById("lheight-one");
    let xlheightOne = document.getElementById("xlheight-one");

    let sheightTwo = document.getElementById("sheight-two");
    let mheightTwo = document.getElementById("mheight-two");
    let lheightTwo = document.getElementById("lheight-two");
    let xlheightTwo = document.getElementById("xlheight-two");


    let text = textInput.value;

    if (text.length > 30) {
        document.getElementById("textInput").disabled = true;
        this.openModal();
    }
    if (event.keyCode === 13 && !event.shiftKey) {
        text = text + '\n';
    }
    text = text.substring(0, 30);
    let finalText = "";
    let newText = text.split('\n');
    let longStringCount = 0;
    for (let i = 0; i < newText.length; i++) {
        if (newText[i] === "") {
            newText.splice(i, 1);
        }
        if (newText[i].length > longStringCount) {
            longStringCount = newText[i].length;
        }
        finalText += newText[i] + "<br>";
    }
    if (text.length === 1) {

        slength.innerHTML = ((longStringCount * small.length) + 1).toString();
        mlength.innerHTML = ((longStringCount * medium.length) + 1).toString();
        llength.innerHTML = ((longStringCount * large.length) + 1).toString();
        xllength.innerHTML = ((longStringCount * extraLarge.length) + 1).toString();
        sizeDetails.length = ((longStringCount * small.length) + 1);
        sizeDetails.mLength = ((longStringCount * medium.length) + 1);
        sizeDetails.lLength = ((longStringCount * large.length) + 1);
        sizeDetails.xLength = ((longStringCount * extraLarge.length) + 1);
        sizeDetails.xxlLength = ((longStringCount * xxLarge.length) + 1);
        sizeDetails.superLength = ((longStringCount * superSizedLength.length) + 1);
    }

    let heightCount = newText.length;
    if (heightCount > 0) {
        sheightOne.innerHTML = (heightCount * small.heightL).toString();
        mheightOne.innerHTML = (heightCount * medium.heightL).toString();
        lheightOne.innerHTML = (heightCount * large.heightL).toString();
        xlheightOne.innerHTML = (heightCount * extraLarge.heightL).toString();
        sizeDetails.heightOne = (heightCount * small.heightL);
        sizeDetails.mHeightOne = (heightCount * medium.heightL);
        sizeDetails.lHeightOne = (heightCount * large.heightL);
        sizeDetails.xlHeightOne = (heightCount * extraLarge.heightL);
        sizeDetails.xxlHeightOne = (heightCount * xxLarge.heightL);
        sizeDetails.superHeightOne = (heightCount * superSizedLength.heightL);

        sheightTwo.innerHTML = (heightCount * small.heightR).toString();
        mheightTwo.innerHTML = (heightCount * medium.heightR).toString();
        lheightTwo.innerHTML = (heightCount * large.heightR).toString();
        xlheightTwo.innerHTML = (heightCount * extraLarge.heightR).toString();
        sizeDetails.heightTwo = (heightCount * small.heightR);
        sizeDetails.mHeightTwo = (heightCount * medium.heightR);
        sizeDetails.lHeightTwo = (heightCount * large.heightR);
        sizeDetails.xlHeightTwo = (heightCount * extraLarge.heightR);
        sizeDetails.xxlHeightTwo = (heightCount * xxLarge.heightR);
        sizeDetails.superHeightTwo = (heightCount * superSizedLength.heightR);
    }
    slength.innerHTML = ((longStringCount * small.length) - 1).toString();
    mlength.innerHTML = ((longStringCount * medium.length) - 1).toString();
    llength.innerHTML = ((longStringCount * large.length) - 1).toString();
    xllength.innerHTML = ((longStringCount * extraLarge.length) - 1).toString();
    sizeDetails.length = ((longStringCount * small.length) - 1);
    sizeDetails.mLength = ((longStringCount * medium.length) - 1);
    sizeDetails.lLength = ((longStringCount * large.length) - 1);
    sizeDetails.xLength = ((longStringCount * extraLarge.length) - 1);
    sizeDetails.xxlLength = ((longStringCount * xxLarge.length) - 1);
    sizeDetails.superLength = ((longStringCount * superSizedLength.length) - 1);

    displayText.innerHTML = finalText;
    localStorage.setItem('text', newText);

}

function selectElectricPug() {
    let electricPug = document.getElementById("selectedElectricPug").value;
    localStorage.setItem('electricPug', electricPug);
}

function search(nameKey, myArray) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].id === nameKey) {
            return myArray[i];
        }
    }
}

//select the blackboard
function selectBlackBord() {
    let selectedBackBoard = document.getElementById("selectedBackBoard").value;
    let resultObject = search(selectedBackBoard, backBoard);
    let image = document.getElementById('blackboard');
    image.src = resultObject.url;
    if (resultObject.price === 'Free') {
        document.getElementById('blackboardPrice').innerHTML = resultObject.price;
    } else {
        document.getElementById('blackboardPrice').innerHTML = '+' + " " + resultObject.price;
    }
    localStorage.setItem('selectBackBoard', selectedBackBoard);
}

function displayTotalPrice() {
    let totalPrice = 0;
    let sizePrice = sizePrices.small;
    let size = localStorage.getItem('size');
    switch (size) {
        case 'Small':
            sizePrice = sizePrices.small;
            break;
        case 'Medium':
            sizePrice = sizePrices.medium;
            break;
        case 'Large':
            sizePrice = sizePrices.large;
            break;
        case 'Extra Large':
            sizePrice = sizePrices.xlarge;
            break;
        case 'XXLarge':
            sizePrice = sizePrices.xxlarge;
            break;
        case 'Super Sized':
            sizePrice = sizePrices.superSized;
            break;
        default:
            sizePrice = sizePrices.small;
            break;

    }
    let usage = localStorage.getItem('selectType');
    let back = localStorage.getItem('selectBackBoard');
    if (usage !== 'indoor') {
        totalPrice = totalPrice + parseInt(standardPrices.waterResistance);
    }
    if (back !== null) {
        let resultObject = search(back, backBoard);
        if (resultObject.price !== 'Free') {
            totalPrice = totalPrice + parseInt(resultObject.price);
        }
    }
    totalPrice = totalPrice + parseInt(sizePrice);
    if (totalPrice !== null) {
        document.getElementById('totalPrice').innerHTML = totalPrice.toString();
        localStorage.setItem('totalPrice', totalPrice.toString());
    }
}

function toggleTextShadow(state) {
    let bg = "#4D4B4B";
    let colorString = localStorage.getItem('glow-color-code');
    if (state === 'on') {
        document.getElementById('onBtn').style.backgroundColor = 'white';
        document.getElementById('offBtn').style.backgroundColor = bg;
        if (colorString === null) {
            document.getElementById('displayText').style.textShadow = defaultNeon;
        } else {
            let textColor = localStorage.getItem('color-code');
            document.getElementById('displayText').style.color = textColor;
            document.getElementById('displayText').style.textShadow = colorString;
        }
    } else {
        document.getElementById('onBtn').style.backgroundColor = bg;
        document.getElementById('offBtn').style.backgroundColor = 'white';
        if (colorString === null) {
            document.getElementById('displayText').style.color = 'white';
            document.getElementById('displayText').style.textShadow = 'none';
        } else {
            let colorCode = localStorage.getItem('color-code');
            document.getElementById('displayText').style.color = colorCode;
            document.getElementById('displayText').style.textShadow = 'none';
        }
    }
}

function addToCart() {

    let text = localStorage.getItem('text');
    let board = localStorage.getItem('selectBackBoard');
    let pug = localStorage.getItem('electricPug');
    if (text === null) {
        alert('Text is missing');
    }
    if (board === null) {
        alert('Select the back board');
    }
    if (pug === null) {
        alert('Select the electric pug');
    }
    if (text !== null && board !== null && pug !== null) {
        alert('Your customization added to cart');
        window.location.href = window.location.origin + '/add-to-cart';
    }
}

setInterval(function () {
    this.displayTotalPrice();
}, 100);

function openModal() {
    document.getElementById('dialogBox').style.display = 'block';
}

function closeModal() {
    document.getElementById('dialogBox').style.display = 'none';
    document.getElementById("textInput").disabled = false;
}

function selectTheSize() {
    let size = document.getElementById("size").value;
    console.log(size);
    switch (size) {
        case 'small' :
            document.getElementById('box-small').style.display = 'block';
            document.getElementById('box-medium').style.display = 'none';
            document.getElementById('box-large').style.display = 'none';
            document.getElementById('box-xlarge').style.display = 'none';
            break;
        case 'medium' :
            document.getElementById('box-medium').style.display = 'block';
            document.getElementById('box-small').style.display = 'none';
            document.getElementById('box-large').style.display = 'none';
            document.getElementById('box-xlarge').style.display = 'none';
            break;
        case 'large' :
            document.getElementById('box-large').style.display = 'block';
            document.getElementById('box-xlarge').style.display = 'none';
            document.getElementById('box-medium').style.display = 'none';
            document.getElementById('box-small').style.display = 'none';
            break;
        case 'xlarge' :
            document.getElementById('box-xlarge').style.display = 'block';
            document.getElementById('box-large').style.display = 'none';
            document.getElementById('box-medium').style.display = 'none';
            document.getElementById('box-small').style.display = 'none';
            break;
        default:
            document.getElementById('box-small').style.display = 'block';
    }
}
