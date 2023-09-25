//Configuração Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBMjuRynq9ZPRuSK-iBKBJjhMbbJzbJw2w",
    authDomain: "monitoramentodeusina.firebaseapp.com",
    databaseURL: "https://monitoramentodeusina-default-rtdb.firebaseio.com",
    projectId: "monitoramentodeusina",
    storageBucket: "monitoramentodeusina.appspot.com",
    messagingSenderId: "134978899951",
    appId: "1:134978899951:web:78a8e6d3cfdb060065701a"
  };

firebase.initializeApp(firebaseConfig);

var login = localStorage.getItem("user");
firebase.database().ref("/").child(login).update({
    purpose : "adicionar sala"
  });

function prox(){
    equipamento = document.getElementById("nomeEquipamento").value;
    marca = document.getElementById("marca").value;
    quantidade = document.getElementById("quantidade").value;
    serie = document.getElementById("serie").value;

    firebase.database().ref(login).push({
        equipment:equipamento,
        brand:marca,
        amount:quantidade,
        serie: serie,
       });

       document.getElementById("nomeEquipamento").value ="";
       document.getElementById("marca").value ="";
       document.getElementById("quantidade").value ="";
       document.getElementById("serie").value ="";
}

function getData() { firebase.database().ref("/"+login).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

    
    console.log(firebase_message_id);
    console.log(message_data);

    equipment = message_data['equipment'];
    brand = message_data['brand'];
    amount = message_data['amount'];
    serie = message_data['serie'];

    tag_equipment = "<h4 class='text-muted'> "+ equipment;
    tag_brand = "  | Marca: " + brand ;
    tag_amount = "  |Quantidade: " + amount;
    tag_serie = "  | Série: " + serie + "</h4>";
    
    button ="<button class='btnC' id="+firebase_message_id+" onclick='updateLike(this.id)'>Apagar</button><hr>";
    
    row = tag_equipment + tag_brand + tag_amount + tag_serie + button;       
    document.getElementById("output").innerHTML += row;
 } });  }); }
getData();

function voltar() 
{
    window.location.replace("nav.html");
}