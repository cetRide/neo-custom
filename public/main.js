let smallPrice = 91;
let mediumPrice = 101;
let largePrice = 129;
let xlargePrice = 137
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
    xlHeightOne: 14,
    xlHeightTwo: 68,
};
let smallSize = {
    length: 9,
    heightL: 7,
    heightR: 35
};
let mediumSize = {
    length: 11,
    heightL: 9,
    heightR: 45
};
let largeSize = {
    length: 14,
    heightL: 12,
    heightR: 56
};
let extraLargeSize = {
    length: 17,
    heightL: 14,
    heightR: 68
};
// xxxx
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
let backBoard = [
    {id: "0", url: '/images/back1.png', name: 'Cut Around Acrylic', price: 'Free'},
    {id: "1", url: '/images/back2.png', name: 'Rectangle Acrylic', price: 'Free'},
    {id: "2", url: '/images/back3.png', name: 'Cut To Letter Acrylic', price: 'Free'},
    {id: "3", url: '/images/back4.png', name: 'Stand Acrylic', price: '124'},
    {id: "4", url: '/images/back5.png', name: 'Clear Acrylic Box: For hanging', price: '284'},
    {id: "5", url: '/images/back6.png', name: 'Clear Acrylic Box: For wall Mounting', price: '284'},
    {id: "6", url: '/images/back7.png', name: 'Clear Acrylic Box: Free-Standing', price: '284'},
];

let defaultNeon = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #98ff98, 0 0 30px #98ff98, 0 0 40px #98ff98, 0 0 55px #98ff98, 0 0 75px #98ff98";
let defaultColor = '#98ff98';

window.onload = function () {
    let i, tabContent;
    tabContent = document.getElementsByClassName("tabContent");
    let displayText = document.getElementById("displayText");
    let displayTextMobile = document.getElementById("displayTextMobile");
    let textInput = document.getElementById("textInput");
    document.getElementById('displayText').style.fontFamily = 'Hamillton';
    document.getElementById('displayText').style.color = 'white';
    document.getElementById('displayTextMobile').style.fontFamily = 'Hamillton';
    document.getElementById('displayTextMobile').style.color = 'white';
    document.getElementById('displayText').style.textShadow = defaultNeon;
    document.getElementById('displayTextMobile').style.textShadow = defaultNeon;
    displayText.innerHTML = textInput.value;
    displayTextMobile.innerHTML = textInput.value;
    for (i = 0; i < tabContent.length; i++) {
        if (i === 0) {
            tabContent[i].style.display = "block";
        }
        break;
    }
    document.getElementById("small-size").innerHTML = smallPrice.toString();
    document.getElementById("medium-size").innerHTML = mediumPrice.toString();
    document.getElementById("large-size").innerHTML = largePrice.toString();
    document.getElementById("xlarge-size").innerHTML = xlargePrice.toString();

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
    // document.getElementById('select-font').value = font;
    let displayText = document.getElementById('displayText');
    displayText.style.fontFamily = font, 'cursive';

    let displayTextMobile = document.getElementById('displayTextMobile');
    displayTextMobile.style.fontFamily = font, 'cursive';
}

function setColor(color) {
    let textColor, color_string;
    switch (color) {
        case 'Yellow':
            textColor = "#FFFF00";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #FFFF00, 0 0 30px #FFFF00, 0 0 40px #FFFF00, 0 0 55px #FFFF00, 0 0 75px #FFFF00";
            break;
        case 'Girl Pink':
            textColor = "#f8b9d4";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #f8b9d4, 0 0 30px #f8b9d4, 0 0 40px #f8b9d4, 0 0 55px #f8b9d4, 0 0 75px #f8b9d4";
            break;
        case 'Pink':
            textColor = "#FFC0CB";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #FFC0CB, 0 0 30px #FFC0CB, 0 0 40px #FFC0CB, 0 0 55px #FFC0CB, 0 0 75px #FFC0CB";
            break;
        case 'Lemon Yellow':
            textColor = "#fff44f";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff44f, 0 0 30px #fff44f, 0 0 40px #fff44f, 0 0 55px #fff44f, 0 0 75px #fff44f";
            break;
        case 'Blue Green':
            textColor = "#0d98ba";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #0d98ba, 0 0 30px #0d98ba, 0 0 40px #0d98ba, 0 0 55px #0d98ba, 0 0 75px #0d98ba";
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
        case 'Warm White':
            textColor = "#FFFFFF";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #efebd8, 0 0 30px #efebd8, 0 0 40px #efebd8, 0 0 55px #efebd8, 0 0 75px #efebd8";
            break;
        case 'White':
            textColor = "#ffffff";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff, 0 0 55px #ffffff, 0 0 75px #ffffff";
            break;
        case 'White Yellow':
            textColor = "#FFFFFF";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #c, 0 0 30px #FFFFE0, 0 0 40px #FFFFE0, 0 0 55px #FFFFE0, 0 0 75px #FFFFE0";
            break;
        case 'White Orange':
            textColor = "#FFFFFF";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ffe4b2, 0 0 30px #ffe4b2, 0 0 40px #ffe4b2, 0 0 55px #ffe4b2, 0 0 75px #ffe4b2";
            break;
        case 'White Pink':
            textColor = "#FFFFFF";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ffecef, 0 0 30px #ffecef, 0 0 40px #ffecef, 0 0 55px #ffecef, 0 0 75px #ffecef";
            break;
        case 'White Girl Pink':
            textColor = "#FFFFFF";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #e2b8c5, 0 0 30px #e2b8c5, 0 0 40px #e2b8c5, 0 0 55px #e2b8c5, 0 0 75px #e2b8c5";
            break;
        case 'White Purple':
            textColor = "#FFFFFF";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #e7e0f9, 0 0 30px #e7e0f9, 0 0 40px #e7e0f9, 0 0 55px #e7e0f9, 0 0 75px #e7e0f9";
            break;
        case 'White Red':
            textColor = "#FFFFFF";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff6666, 0 0 30px #ff6666, 0 0 40px #ff6666, 0 0 55px #ff6666, 0 0 75px #ff6666";
            break;
        case 'White Green':
            textColor = "#FFFFFF";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #b2d8b2, 0 0 30px #b2d8b2, 0 0 40px #b2d8b2, 0 0 55px #b2d8b2, 0 0 75px #b2d8b2";
            break;
        case 'White Ice Blue':
            textColor = "#FFFFFF";
            color_string = "0 0 5px #fff, 0 0 10px #a9c7df, 0 0 20px #a9c7df, 0 0 30px #a9c7df, 0 0 40px #a9c7df, 0 0 55px #a9c7df, 0 0 75px #a9c7df";
            break;
        case 'White Blue':
            textColor = "#FFFFFF";
            color_string = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #dff0f9, 0 0 30px #dff0f9, 0 0 40px #dff0f9, 0 0 55px #dff0f9, 0 0 75px #dff0f9";
            break;
        default:
            color_string = "0 1px 0 #e73dcd, 0 2px 0 #d22fba, 0 3px 0 #c42aad, 0 4px 0 #b5219f, 0 0 5px rgba(0,0,0,.23), 0 1px 3px rgba(0,0,0,.43), 1px 4px 6px rgba(0,0,0,.4), 0 5px 10px rgba(0,0,0,.38), 3px 7px 12px rgba(0,0,0,.25)";
            break
    }
    // document.getElementById('select-color').value = color;
    let check = document.getElementById('inputs');
    if (check.checked === true) {
        document.getElementById('displayText').style.textShadow = color_string;
        document.getElementById('displayText').style.color = textColor;
        document.getElementById('displayTextMobile').style.textShadow = color_string;
        document.getElementById('displayTextMobile').style.color = textColor;

    } else {
        document.getElementById('displayText').style.textShadow = 'none';
        document.getElementById('displayText').style.color = textColor;

        document.getElementById('displayTextMobile').style.textShadow = 'none';
        document.getElementById('displayTextMobile').style.color = textColor;
    }
    localStorage.setItem('glow-color-code', color_string);
    localStorage.setItem('glow-color', color);
    localStorage.setItem('color-code', textColor);

}

function search(nameKey, myArray) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].id === nameKey) {
            return myArray[i];
        }
    }
}

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

function toggleTextShadow(state) {

    let colorString = localStorage.getItem('glow-color-code');
    if (state === 'on') {
        if (colorString !== null) {
            let textColor = localStorage.getItem('color-code');
            document.getElementById('displayText').style.color = textColor;
            document.getElementById('displayText').style.textShadow = colorString;
            document.getElementById('displayTextMobile').style.color = textColor;
            document.getElementById('displayTextMobile').style.textShadow = colorString;
        } else {
            document.getElementById('displayText').style.textShadow = defaultNeon;
            document.getElementById('displayTextMobile').style.textShadow = defaultNeon;
        }
    } else {
        if (colorString !== null) {
            let colorCode = localStorage.getItem('color-code');
            document.getElementById('displayText').style.color = colorCode;
            document.getElementById('displayText').style.textShadow = 'none';
            document.getElementById('displayTextMobile').style.color = colorCode;
            document.getElementById('displayTextMobile').style.textShadow = 'none';
        } else {
            document.getElementById('displayText').style.color = defaultColor;
            document.getElementById('displayText').style.textShadow = 'none';
            document.getElementById('displayTextMobile').style.color = defaultColor;
            document.getElementById('displayTextMobile').style.textShadow = 'none';
        }

    }
}

function handleChange(checkbox) {
    if (checkbox.checked === true) {
        this.toggleTextShadow('on')
    } else {
        this.toggleTextShadow('off')
    }
}

function openModal() {
    document.getElementById('dialogBox').style.display = 'block';
}

function closeModal() {
    document.getElementById('dialogBox').style.display = 'none';
    document.getElementById("textInput").disabled = false;
}

function selectTheSize() {
    let size = 'small';
    let elements = document.getElementsByClassName("size");
    for (let i = 0, length = elements.length; i < length; i++) {
        size = elements[i].value;
    }
    switch (size) {
        case 'small' :
            document.getElementById('box-small').style.display = 'block';
            document.getElementById('box-medium').style.display = 'none';
            document.getElementById('box-large').style.display = 'none';
            document.getElementById('box-xlarge').style.display = 'none';
            document.getElementById('select-length').value = smallSize.length;
            document.getElementById('select-heightOne').value = smallSize.heightL;
            document.getElementById('select-heightTwo').value = smallSize.heightR;
            break;
        case 'medium' :
            document.getElementById('box-medium').style.display = 'block';
            document.getElementById('box-small').style.display = 'none';
            document.getElementById('box-large').style.display = 'none';
            document.getElementById('box-xlarge').style.display = 'none';
            document.getElementById('select-length').value = mediumSize.length;
            document.getElementById('select-heightOne').value = mediumSize.heightL;
            document.getElementById('select-heightTwo').value = mediumSize.heightR;
            break;
        case 'large' :
            document.getElementById('box-large').style.display = 'block';
            document.getElementById('box-xlarge').style.display = 'none';
            document.getElementById('box-medium').style.display = 'none';
            document.getElementById('box-small').style.display = 'none';
            document.getElementById('select-length').value = largeSize.length;
            document.getElementById('select-heightOne').value = largeSize.heightL;
            document.getElementById('select-heightTwo').value = largeSize.heightR;
            break;
        case 'xlarge' :
            document.getElementById('box-xlarge').style.display = 'block';
            document.getElementById('box-large').style.display = 'none';
            document.getElementById('box-medium').style.display = 'none';
            document.getElementById('box-small').style.display = 'none';
            document.getElementById('select-length').value = extraLargeSize.length;
            document.getElementById('select-heightOne').value = extraLargeSize.heightL;
            document.getElementById('select-heightTwo').value = extraLargeSize.heightR;
            break;
        default:
            document.getElementById('box-small').style.display = 'block';
    }

}

function displayToggleButtons() {
    let toggle1 = document.getElementById('toggle1');
    let toggle2 = document.getElementById('toggle2');
    let toggle3 = document.getElementById('toggle3');
    let togglefont1 = document.getElementById('togglefont1');
    let togglefont2 = document.getElementById('togglefont2');
    let togglefont3 = document.getElementById('togglefont3');
    if (lines === 3) {
        toggle1.style.display = 'block';
        toggle2.style.display = 'block';
        toggle3.style.display = 'block';

        togglefont1.style.display = 'block';
        togglefont2.style.display = 'block';
        togglefont3.style.display = 'block';
    } else if (lines === 2) {
        toggle1.style.display = 'block';
        toggle2.style.display = 'block';
        toggle3.style.display = 'none';

        togglefont1.style.display = 'block';
        togglefont2.style.display = 'block';
        togglefont3.style.display = 'none';
    } else {
        toggle1.style.display = 'block';
        toggle2.style.display = 'none';
        toggle3.style.display = 'none';

        togglefont1.style.display = 'block';
        togglefont2.style.display = 'none';
        togglefont3.style.display = 'none';
    }
}

function toggleColors(line) {
    document.getElementById('toggleColors').value = line;
    document.getElementById('toggleColors').classList.add('bgColor');
    switch (line) {
        case 'line1':
            document.getElementById('toggle1').classList.add('bgColor');
            document.getElementById('toggle3').classList.remove('bgColor');
            document.getElementById('toggle2').classList.remove('bgColor');
            break;
        case 'line2':
            document.getElementById('toggle2').classList.add('bgColor');
            document.getElementById('toggle1').classList.remove('bgColor');
            document.getElementById('toggle3').classList.remove('bgColor');
            break;
        case 'line3':
            document.getElementById('toggle3').classList.add('bgColor');
            document.getElementById('toggle1').classList.remove('bgColor');
            document.getElementById('toggle2').classList.remove('bgColor');
            break;
        default:
            document.getElementById('toggle1').classList.add('bgColor');
            document.getElementById('toggle3').classList.remove('bgColor');
            document.getElementById('toggle2').classList.remove('bgColor');
            break;

    }
}

function toggleFonts(line) {
    document.getElementById('toggleFonts').value = line;
    document.getElementById('toggleFonts').classList.add('bgColor');
    switch (line) {
        case 'line1':
            document.getElementById('togglefont1').classList.add('bgColor');
            document.getElementById('togglefont2').classList.remove('bgColor');
            document.getElementById('togglefont3').classList.remove('bgColor');
            break;
        case 'line2':
            document.getElementById('togglefont2').classList.add('bgColor');
            document.getElementById('togglefont3').classList.remove('bgColor');
            document.getElementById('togglefont1').classList.remove('bgColor');
            break;
        case 'line3':
            document.getElementById('togglefont3').classList.add('bgColor');
            document.getElementById('togglefont2').classList.remove('bgColor');
            document.getElementById('togglefont1').classList.remove('bgColor');
            break;
        default:
            document.getElementById('togglefont1').classList.add('bgColor');
            document.getElementById('togglefont2').classList.remove('bgColor');
            document.getElementById('togglefont3').classList.remove('bgColor');
            break;

    }
}

function displayText(event) {
    let textInput = document.getElementById("textInput");
    let displayText = document.getElementById("displayText");
    let displayTextMobile = document.getElementById("displayTextMobile");
    let smallPrices = document.getElementById("small-size");
    let mediumPrices = document.getElementById("medium-size");
    let largePrices = document.getElementById("large-size");
    let xlargePrices = document.getElementById("xlarge-size");


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
    smallPrices.innerHTML = (smallPrice + ((text.length - 1) * 12)).toString();
    mediumPrices.innerHTML = (mediumPrice + ((text.length - 1) * 12)).toString();
    largePrices.innerHTML = (largePrice + ((text.length - 1) * 12)).toString();
    xlargePrices.innerHTML = (xlargePrice + ((text.length - 1) * 12)).toString();
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
    localStorage.setItem('user-text', text);
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
        smallSize.length = ((longStringCount * small.length) + 1);
        mediumSize.length = ((longStringCount * medium.length) + 1);
        largeSize.length = ((longStringCount * large.length) + 1);
        extraLargeSize.length = ((longStringCount * extraLarge.length) + 1);
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

        smallSize.heightL = (heightCount * small.heightL);
        mediumSize.heightL = (heightCount * medium.heightL);
        largeSize.heightL = (heightCount * large.heightL);
        extraLarge.heightL = (heightCount * extraLarge.heightL);

        sheightTwo.innerHTML = (heightCount * small.heightR).toString();
        mheightTwo.innerHTML = (heightCount * medium.heightR).toString();
        lheightTwo.innerHTML = (heightCount * large.heightR).toString();
        xlheightTwo.innerHTML = (heightCount * extraLarge.heightR).toString();
        sizeDetails.heightTwo = (heightCount * small.heightR);
        sizeDetails.mHeightTwo = (heightCount * medium.heightR);
        sizeDetails.lHeightTwo = (heightCount * large.heightR);
        sizeDetails.xlHeightTwo = (heightCount * extraLarge.heightR);

        smallSize.heightR = (heightCount * small.heightR);
        mediumSize.heightR = (heightCount * medium.heightR);
        largeSize.heightR = (heightCount * large.heightL);
        extraLarge.heightR = (heightCount * extraLarge.heightR);

    }
    slength.innerHTML = ((longStringCount * small.length) - 1).toString();
    mlength.innerHTML = ((longStringCount * medium.length) - 1).toString();
    llength.innerHTML = ((longStringCount * large.length) - 1).toString();
    xllength.innerHTML = ((longStringCount * extraLarge.length) - 1).toString();
    sizeDetails.length = ((longStringCount * small.length) - 1);
    sizeDetails.mLength = ((longStringCount * medium.length) - 1);
    sizeDetails.lLength = ((longStringCount * large.length) - 1);
    sizeDetails.xLength = ((longStringCount * extraLarge.length) - 1);

    smallSize.length = ((longStringCount * small.length) - 1);
    mediumSize.length = ((longStringCount * medium.length) - 1);
    largeSize.length = ((longStringCount * large.length) - 1);
    extraLargeSize.length = ((longStringCount * extraLarge.length) - 1);
    displayText.innerHTML = finalText;
    displayTextMobile.innerHTML = finalText;


}

function toggleAlignment() {
    let text = localStorage.getItem('user-text');
    if (text !== null) {
        if (text.split('\n').length > 0) {
            document.getElementById('alignText').style.display = 'inline-block';
        } else {
            document.getElementById('alignText').style.display = 'none';
        }
    } else {
        document.getElementById('alignText').style.display = 'none';
    }
}

function alignText(direction) {
    let left = document.getElementById('left');
    let center = document.getElementById('center');
    let right = document.getElementById('right');
    switch (direction) {
        case 'Left':
            document.getElementById('displayText').style.textAlign = 'left';
            document.getElementById('displayTextMobile').style.textAlign = 'left';
            left.classList.add('activate-align');
            center.classList.remove('activate-align');
            right.classList.remove('activate-align');
            break;
        case 'Center':
            document.getElementById('displayText').style.textAlign = 'center';
            document.getElementById('displayTextMobile').style.textAlign = 'center';
            center.classList.add('activate-align');
            right.classList.remove('activate-align');
            left.classList.remove('activate-align');
            break;
        case 'Right':
            document.getElementById('displayText').style.textAlign = 'right';
            document.getElementById('displayTextMobile').style.textAlign = 'right';
            right.classList.add('activate-align');
            center.classList.remove('activate-align');
            left.classList.remove('activate-align');
            break;
        default:
            document.getElementById('displayText').style.textAlign = 'center';
            document.getElementById('displayTextMobile').style.textAlign = 'center';
            break;
    }
}

function openQuote() {
    document.getElementById('send-quote').style.display = 'block';
    document.getElementById('upload').style.display = 'none';
}

function openUpload() {
    document.getElementById('upload').style.display = 'block';
    document.getElementById('send-quote').style.display = 'none'
}

function selectLocation(location) {
    let indoor = document.getElementById("indoor");
    let waterResistant = document.getElementById("waterResistant");
    if (location === 'waterResistant') {
        waterResistant.classList.add('actives');
        indoor.classList.remove('actives');
    } else {
        waterResistant.classList.remove('actives');
        indoor.classList.add('actives');
    }
}

function selectSize(size) {
    let small = document.getElementById('small');
    let medium = document.getElementById('medium');
    let large = document.getElementById('large');
    let xlarge = document.getElementById('xlarge');

    switch (size) {
        case 'small':
            small.classList.add('active');
            large.classList.remove('active');
            medium.classList.remove('active');
            xlarge.classList.remove('active');
            break;
        case 'medium':
            medium.classList.add('active');
            large.classList.remove('active');
            xlarge.classList.remove('active');
            small.classList.remove('active');
            break;
        case 'large':
            large.classList.add('active');
            xlarge.classList.remove('active');
            medium.classList.remove('active');
            small.classList.remove('active');
            break;
        case 'xlarge':
            xlarge.classList.add('active');
            medium.classList.remove('active');
            large.classList.remove('active');
            small.classList.remove('active');
            break;
    }
}

setInterval(function () {
    // this.toggleAlignment();
}, 100);
