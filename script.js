
const personagem = 'HERMIONE GRANGER';

function advinhaPersonagem(){
    let palpite = document.getElementById("personagem").value;
    let mensagem = document.getElementById("mensagem");
    let tamanhoP1 = personagem.length
    let tamanhoP2 = palpite.length
    let verificador=0;

    for(let i=0;i<palpite.length;i++){
        if(palpite[i] == '1' || palpite[i] == '2' || palpite[i] == '3' || palpite[i] == '4' || palpite[i] == '5' ||
            palpite[i] == '6' || palpite[i] == '7' || palpite[i] == '8' || palpite[i] == '9' || palpite[i] == '0'){
            verificador = 1;
            mensagem.innerHTML = "Não é permitido caracteres numéricos:("
            break;
        }
        else if(palpite[i] =='!' || palpite[i] =='@' || palpite[i] =='#' || palpite[i] =='$' || palpite[i] =='%' ||
            palpite[i] =='¨' || palpite[i] =='&' || palpite[i] =='*' || palpite[i] =='(' || palpite[i] ==')' || 
            palpite[i] =='_' || palpite[i] =='-' || palpite[i] =='+' || palpite[i] =='=' || palpite[i] =='{' ||
            palpite[i] =='}' || palpite[i] =='[' || palpite[i] ==']' || palpite[i] =='/' ||palpite[i] =='?' ||
            palpite[i] ==',' || palpite[i] =='.' || palpite[i] ==';'|| palpite[i] ==':' || palpite[i] =='<' || 
            palpite[i] =='>' || palpite[i] =='|'){
            verificador = 3;
            mensagem.innerHTML = "Não é permitido caracteres especiais :("
            break;
        }
    }

    if(verificador==0){
        if(tamanhoP2 < tamanhoP1 || tamanhoP2 > tamanhoP1){
            mensagem.innerHTML = "Você erro :("
        }
        else{
            let aux = palpite.toLowerCase();
            let controle = 1;
            for(let j=0;j<personagem.length;j++){
                if(aux[j]==personagem[j]){
                    controle = 0;
                }
            }
            if(controle == 0){
                mensagem.innerHTML = "Parabéns você acertou (:"+"<br><img src='HermioneGranger.gif'>"
            }
            else{
                mensagem.innerHTML = "Você erro :(" 
            }
            
        }
        
    }
    
    
}