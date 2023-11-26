function obterCPF() {
    let cpfParcial = document.getElementById('cpf').value;
    console.log(cpfParcial);
    let soma = 0;
    let peso = 10;
  
    for (let i = 0; i < cpfParcial.length; i++) {
      soma += parseInt(cpfParcial[i]) * peso;
      peso--;
    }
  
    let resto = soma % 11;
    const digito1 = resto < 2 ? 0 : 11 - resto;

    cpfParcial += digito1;

    soma = 0;
    peso = 11;

    for (let i = 0; i < cpfParcial.length; i++) {
        soma += parseInt(cpfParcial[i]) * peso;
        peso--;
      }
    
      resto = soma % 11;
      const digito2 = resto < 2 ? 0 : 11 - resto;


    document.getElementById('test').innerHTML = `<p>O CPF completo é ${cpfParcial + digito2}<p>`;
  }