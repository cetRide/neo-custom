let standardPrices = {
    waterResistance: 32
};
let totalPrice = 0;
// xxx
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

let lines = 1;

let defaultNeon = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #98ff98, 0 0 30px #98ff98, 0 0 40px #98ff98, 0 0 55px #98ff98, 0 0 75px #98ff98";


window.onload = function () {
    let i, tabContent;
    let defaultColor = '#98ff98';
    lines = 1;
    if (lines === 1) {
        document.getElementById('line1').style.display = 'block';
        document.getElementById('box1').classList.add('activeBtn');
        document.getElementById('text1').classList.add('displayInput');
    }
    document.getElementById('line-one').style.textShadow = defaultNeon;
    document.getElementById('line-two').style.textShadow = defaultNeon;
    document.getElementById('line-three').style.color = defaultColor;
    document.getElementById('line-two').style.color = defaultColor;
    document.getElementById('line-one').style.color = defaultColor;
    document.getElementById('line-three').style.textShadow = defaultNeon;
    document.getElementById('toggle1').classList.add('bgColor');
    document.getElementById('togglefont1').classList.add('bgColor');
    document.getElementById('onBtn').style.backgroundColor = 'white';
    document.getElementById('offBtn').style.backgroundColor = "#4D4B4B";
    document.getElementById("box-small").style.display = "block";
    tabContent = document.getElementsByClassName("tabContent");
    document.getElementById('blackboardPrice').innerHTML = 'Free';

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
    document.getElementById('select-font').value = font;

    let selectedLine = document.getElementById('toggleFonts').value;
    if (selectedLine === 'line1') {
        document.getElementById('line-one').style.fontFamily = font, 'cursive';
    } else if (selectedLine === 'line2') {
        document.getElementById('line-two').style.fontFamily = font, 'cursive';
    } else if (selectedLine === 'line3') {
        document.getElementById('line-three').style.fontFamily = font, 'cursive';
    }
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

    let selectedLine = document.getElementById('toggleColors').value;
    if (selectedLine === 'line1') {
        document.getElementById('line-one').style.textShadow = color_string;
        document.getElementById('line-one').style.color = textColor;
        document.getElementById('select-color').value = color;
        localStorage.setItem('glow-color-code', color_string);
        localStorage.setItem('glow-color', color);
        localStorage.setItem('color-code', textColor);
    } else if (selectedLine === 'line2') {
        document.getElementById('line-two').style.textShadow = color_string;
        document.getElementById('line-two').style.color = textColor;
        document.getElementById('select-color-line2').value = color;
        localStorage.setItem('glow-color-code2', color_string);
        localStorage.setItem('glow-color2', color);
        localStorage.setItem('color-cod2', textColor);

    } else if (selectedLine === 'line3') {
        document.getElementById('line-three').style.textShadow = color_string;
        document.getElementById('line-three').style.color = textColor;
        document.getElementById('select-color-line3').value = color;
        localStorage.setItem('glow-color-code3', color_string);
        localStorage.setItem('glow-color3', color);
        localStorage.setItem('color-code3', textColor);
    }

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
    let bg = "#4D4B4B";
    let colorString = localStorage.getItem('glow-color-code');
    let colorString1 = localStorage.getItem('glow-color-code2');
    let colorString2 = localStorage.getItem('glow-color-code3');

    if (state === 'on') {
        document.getElementById('onBtn').style.backgroundColor = 'white';
        document.getElementById('offBtn').style.backgroundColor = bg;
        if (colorString === null) {
            let textColor = localStorage.getItem('color-code');
            document.getElementById('line-one').style.color = textColor;
            document.getElementById('line-one').style.textShadow = colorString;
        } else {
            document.getElementById('line-one').style.textShadow = defaultNeon;
        }
        if (colorString1 !== null) {
            let textColor1 = localStorage.getItem('color-code2');
            document.getElementById('line-two').style.color = textColor1;
            document.getElementById('line-two').style.textShadow = colorString1;
        } else {
            document.getElementById('line-two').style.textShadow = defaultNeon;
        }

        if (colorString2 !== null) {
            let textColor2 = localStorage.getItem('color-code3');
            document.getElementById('line-three').style.color = textColor2;
            document.getElementById('line-three').style.textShadow = colorString2;
        } else {
            document.getElementById('line-three').style.textShadow = defaultNeon;
        }

    } else {
        document.getElementById('onBtn').style.backgroundColor = bg;
        document.getElementById('offBtn').style.backgroundColor = 'white';

        if (colorString === null) {
            let colorCode = localStorage.getItem('color-code');
            document.getElementById('line-one').style.color = colorCode;
            document.getElementById('line-one').style.textShadow = 'none';
            document.getElementById('line-one').style.textShadow = defaultNeon;
        } else {
            document.getElementById('line-one').style.color = defaultColor;
            document.getElementById('line-one').style.textShadow = 'none';
        }
        if (colorString1 !== null) {
            let colorCode2 = localStorage.getItem('color-code3');
            document.getElementById('line-two').style.color = colorCode2;
            document.getElementById('line-two').style.textShadow = 'none';
            document.getElementById('line-two').style.textShadow = defaultNeon;
        } else {
            document.getElementById('line-two').style.color = defaultColor;
            document.getElementById('line-two').style.textShadow = 'none';
        }

        if (colorString2 !== null) {
            let colorCode3 = localStorage.getItem('color-code3');
            document.getElementById('line-three').style.color = colorCode3;
            document.getElementById('line-three').style.textShadow = 'none';
        } else {
            document.getElementById('line-three').style.color = defaultColor;
            document.getElementById('line-three').style.textShadow = 'none';
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

function displayLinesButton() {
    if (lines === 1) {
        document.getElementById('line1').style.display = 'block';
    } else if (lines === 2) {
        document.getElementById('line2').style.display = 'block';
    } else if (lines === 3) {
        document.getElementById('line3').style.display = 'block';
    }
}

function addLine() {
    lines = lines + 1;
    if (lines === 2) {
        document.getElementById('box2').classList.add('activeBtn');
        document.getElementById('box3').classList.remove('activeBtn');
        document.getElementById('box1').classList.remove('activeBtn');
        document.getElementById('text1').classList.remove('displayInput');
        document.getElementById('text3').classList.remove('displayInput');
        document.getElementById('text2').classList.add('displayInput');

    } else if (lines === 3) {
        document.getElementById('box3').classList.add('activeBtn');
        document.getElementById('box2').classList.remove('activeBtn');
        document.getElementById('box1').classList.remove('activeBtn');

        document.getElementById('text1').classList.remove('displayInput');
        document.getElementById('text2').classList.remove('displayInput');
        document.getElementById('text3').classList.add('displayInput');
    }
}

function changeTextBox(textBox) {
    if (textBox === 'text1') {
        document.getElementById('text2').classList.remove('displayInput');
        document.getElementById('text3').classList.remove('displayInput');
        document.getElementById('text1').classList.add('displayInput');

        document.getElementById('box1').classList.add('activeBtn');
        document.getElementById('box3').classList.remove('activeBtn');
        document.getElementById('box2').classList.remove('activeBtn');

    } else if (textBox === 'text2') {
        document.getElementById('box2').classList.add('activeBtn');
        document.getElementById('box3').classList.remove('activeBtn');
        document.getElementById('box1').classList.remove('activeBtn');
        document.getElementById('text1').classList.remove('displayInput');
        document.getElementById('text3').classList.remove('displayInput');
        document.getElementById('text2').classList.add('displayInput');

    } else if (textBox === 'text3') {
        document.getElementById('box3').classList.add('activeBtn');
        document.getElementById('box2').classList.remove('activeBtn');
        document.getElementById('box1').classList.remove('activeBtn');

        document.getElementById('text1').classList.remove('displayInput');
        document.getElementById('text2').classList.remove('displayInput');
        document.getElementById('text3').classList.add('displayInput');
    }
}

function closeInput(box) {
    let text2 = document.getElementById('text2');
    let text3 = document.getElementById('text3');
    let text1 = document.getElementById('text1');
    let line2 = document.getElementById('line2');
    let line3 = document.getElementById('line3');
    let box1 = document.getElementById('box1');
    let box2 = document.getElementById('box2');

    if (box === 'text2') {
        line2.style.display = 'none';
        text2.classList.remove('displayInput');
        text2.value = "";
        text1.classList.add('displayInput');
        box1.classList.add('activeBtn');
        document.getElementById('line-two').innerHTML = "";
    } else {
        line3.style.display = 'none';
        text3.classList.remove('displayInput');
        text1.classList.remove('displayInput');
        text2.classList.add('displayInput');
        box2.classList.add('activeBtn');
        box1.classList.remove('activeBtn');
        text3.value = "";
        document.getElementById('line-three').innerHTML = "";
    }
    lines = lines - 1;
}

function displayLine1(event) {
    document.getElementById('line-one').innerHTML = document.getElementById('text1').value;
}

function displayLine2(event) {
    document.getElementById('line-two').innerHTML = document.getElementById('text2').value;

}

function displayLine3(event) {
    document.getElementById('line-three').innerHTML = document.getElementById('text3').value;

}

function calculateHeight() {

    let sheightOne = document.getElementById("sheight-one");
    let mheightOne = document.getElementById("mheight-one");
    let lheightOne = document.getElementById("lheight-one");
    let xlheightOne = document.getElementById("xlheight-one");

    let sheightTwo = document.getElementById("sheight-two");
    let mheightTwo = document.getElementById("mheight-two");
    let lheightTwo = document.getElementById("lheight-two");
    let xlheightTwo = document.getElementById("xlheight-two");

    sheightOne.innerHTML = (lines * small.heightL).toString();
    mheightOne.innerHTML = (lines * medium.heightL).toString();
    lheightOne.innerHTML = (lines * large.heightL).toString();
    xlheightOne.innerHTML = (lines * extraLarge.heightL).toString();

    sheightTwo.innerHTML = (lines * small.heightR).toString();
    mheightTwo.innerHTML = (lines * medium.heightR).toString();
    lheightTwo.innerHTML = (lines * large.heightR).toString();
    xlheightTwo.innerHTML = (lines * extraLarge.heightR).toString();
}

function calculateLength() {
    let slength = document.getElementById("slength");
    let mlength = document.getElementById("mlength");
    let llength = document.getElementById("llength");
    let xllength = document.getElementById("xllength");

    let text2 = document.getElementById('text2').value;
    let text3 = document.getElementById('text3').value;
    let text1 = document.getElementById('text1').value;
    let longStringCount = 0;
    let data = [text1, text2, text3];
    for (let i = 0; i < 3; i++) {
        if (data[i].length > longStringCount) {
            longStringCount = data[i].length;
        }
    }

    slength.innerHTML = ((longStringCount * small.length) - 1).toString();
    mlength.innerHTML = ((longStringCount * medium.length) - 1).toString();
    llength.innerHTML = ((longStringCount * large.length) - 1).toString();
    xllength.innerHTML = ((longStringCount * extraLarge.length) - 1).toString();
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

setInterval(function () {
    this.displayLinesButton();
    this.calculateHeight();
    this.calculateLength();
    this.displayToggleButtons();
    if (lines === 3) {
        document.getElementById('addLine').style.display = 'none';
        document.getElementById('secondLine').style.display = 'none';
        document.getElementById('firstLine').style.display = 'none';
        document.getElementById('thirdLine').style.display = 'block';
    } else if (lines === 2) {
        document.getElementById('addLine').style.display = 'block';
        document.getElementById('secondLine').style.display = 'block';
        document.getElementById('firstLine').style.display = 'none';
    } else {
        document.getElementById('addLine').style.display = 'block';
        document.getElementById('firstLine').style.display = 'none';
    }
}, 100);
