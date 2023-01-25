const criaRelatorio = () => {

        let numerosAlunos = 20;

        let classe1 = [];
        let notas1 = [];
        let aprovados1 = [];
        let reprovados1 = [];
        let alunosAprovados1 = [];
        let alunosReprovados1 = [];

        for(let i = 1; i <= numerosAlunos; i++){    
            classe1.push("Aluno " + i);        
            notas1.push(Math.round(Math.random() * (100 - 0 + 1)) + 0);    
        }

        for(var j = 0; j < notas1.length; j++){
            if(notas1[j] >= 60){
                aprovados1.push(notas1[j]);
                alunosAprovados1.push(classe1[j]);
            } else {
                reprovados1.push(notas1[j])
                alunosReprovados1.push(classe1[j]);
            }
        }

        let totalClasse1 = classe1.length;
        let totalAprovados1 = (aprovados1.length / totalClasse1) * 100;
        let totalReprovados1 = (reprovados1.length / totalClasse1) * 100;

        let ondeJogarTabela = document.getElementById('tabelaDinamica1');
        ondeJogarTabela.innerText = "";

        let CriarTabela = document.createElement("CriarTabela");

        let titulo1 = ondeJogarTabela.createCaption();
        titulo1.innerHTML = "Classe 1 - Java Script";

        let cabecalho = ondeJogarTabela.createTHead();
        let linhacabecalho = cabecalho.insertRow();
        let coluna1doCabecalho = linhacabecalho.insertCell();
        coluna1doCabecalho.innerHTML = "Nome";
        let coluna2doCabecalho = linhacabecalho.insertCell();
        coluna2doCabecalho.innerHTML = "Notas";
        let coluna3doCabecalho = linhacabecalho.insertCell();
        coluna3doCabecalho.innerHTML = "Porcentagem atingida";
        let coluna4doCabecalho= linhacabecalho.insertCell();
        coluna4doCabecalho.innerHTML = "Resultado";

        let valores = ondeJogarTabela.createTBody();
        for (var l = 0; l < classe1.length; l++) {
        let linhaValores = valores.insertRow();
        let coluna1Valores = linhaValores.insertCell();
        coluna1Valores.innerHTML = classe1[l];
        let coluna2Valores = linhaValores.insertCell();
        coluna2Valores.innerHTML = notas1[l];
        let coluna3Valores = linhaValores.insertCell();
        coluna3Valores.innerHTML = notas1[l] + "%";
        let coluna4Valores = linhaValores.insertCell();
            if(notas1[l] >= 60){
                coluna4Valores.innerHTML = "Aprovado";
            } else {
                coluna4Valores.innerHTML = "Reprovado";
            }    
        }

        let rodape = ondeJogarTabela.createTFoot();
        let linhaRodape = rodape.insertRow();
        let coluna1doRodape = linhaRodape.insertCell();
        coluna1doRodape.innerHTML = "Total de alunos";
        let coluna2doRodape = linhaRodape.insertCell();
        coluna2doRodape.innerHTML = "Aprovados/Reprovados";
        let coluna3doRodape = linhaRodape.insertCell();
        coluna3doRodape.innerHTML = "% Aprovados";
        let coluna4doRodape = linhaRodape.insertCell();
        coluna4doRodape.innerHTML = "% Reprovados";

        let valores4 = ondeJogarTabela.createTFoot();
        let linhaValores4 = valores4.insertRow();
        let coluna1Valores4 = linhaValores4.insertCell();
        coluna1Valores4.innerHTML = totalClasse1;
        let coluna2Valores4 = linhaValores4.insertCell();
        coluna2Valores4.innerHTML = aprovados1.length + "/" + reprovados1.length;
        let coluna3Valores4 = linhaValores4.insertCell();
        coluna3Valores4.innerHTML = totalAprovados1 + "%" ;
        let coluna4Valores4 = linhaValores4.insertCell();
        coluna4Valores4.innerHTML = totalReprovados1 + "%";

        ondeJogarTabela.appendChild(CriarTabela);
        }
