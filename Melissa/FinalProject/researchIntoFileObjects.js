

const fileInput = document.getElementById("file-input")
const filebtn = document.getElementById("file-btn")
const displayDiv = document.getElementById("display-div")
let fileArray = []

filebtn.addEventListener("click", () => {
    console.log(fileInput.files)

    let reader = new FileReader()
    let fileString
    //need an img element to display it
    //need 

    reader.onloadend = function () {
        let fileSomething = reader.result
        fileString = fileSomething.toString()
        imgInput.src = reader.result
        console.log(fileString)
    }

    if (fileInput.files[0]) {
        reader.readAsDataURL(fileInput.files[0])
    } else {
        imgInput.src = ""
    }
    //console.log(fileInput.files)
    // fileArray.push(fileInput.files)
    // file = fileArray[0]
    // console.log(file)

    // // let img = document.createElement('img');
    // // img.src = URL.createObjectURL(file);
    // // img.style.height = '100px';
    // // img.style.display = 'block'; // Ensure the image is displayed in a block to put it on a new line
    // // img.style.marginBottom = '10px';


    // let fileInfo = document.createElement('p');
    // fileInfo.textContent = `File Name: ${file.name}, Type: ${file.type}, Size: ${file.size} bytes`;
    // fileInfo.style.fontSize = '14px';
    // fileInfo.style.marginTop = '0';

    // // Append the image and file info to the container
    // // displayDiv.appendChild(img);
    // displayDiv.appendChild(fileInfo);
})



