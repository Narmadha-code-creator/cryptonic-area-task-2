// MODAL
function openModal(){
    document.getElementById("modal").style.display="block";
}

function closeModal(){
    document.getElementById("modal").style.display="none";
}

// CAROUSEL
const images=[
    "https://picsum.photos/600/300?1",
    "https://picsum.photos/600/300?2",
    "https://picsum.photos/600/300?3"
];

let i=0;

function next(){
    i=(i+1)%images.length;
    document.getElementById("slide").src=images[i];
}

function prev(){
    i=(i-1+images.length)%images.length;
    document.getElementById("slide").src=images[i];
}

// FORM VALIDATION
function validateForm(){
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;

    if(name==="" || email===""){
        document.getElementById("error").innerText="All fields required!";
        return false;
    }

    if(!email.includes("@")){
        document.getElementById("error").innerText="Invalid email!";
        return false;
    }

    alert("Message Sent!");
    return true;
}