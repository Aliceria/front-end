const readline = require('readline');

const conta = {
  titular: 'Marcos Silva',
  agencia: '0001',
  numero: '123456-7',
  saldo: 1500.00
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function moeda(valor) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

function menu() {
  console.log('\n=== BANCO ===');
  console.log('1 - Consultar dados da conta');
  console.log('2 - Consultar saldo');
  console.log('3 - Realizar débito');
  console.log('4 - Realizar crédito');
  console.log('0 - Sair');
  rl.question('Escolha uma opção: ', escolherOpcao);
}

function escolherOpcao(opcao) {
  switch (Number(opcao)) {
    case 1:
      console.log('\nTitular:', conta.titular);
      console.log('Agência:', conta.agencia);
      console.log('Número da conta:', conta.numero);
      menu();
      break;

    case 2:
      console.log('\nSaldo atual:', moeda(conta.saldo));
      menu();
      break;

    case 3:
      rl.question('Digite o valor do débito: ', (valor) => {
        valor = Number(valor.replace(',', '.'));

        if (valor > 0 && valor <= conta.saldo) {
          conta.saldo -= valor;
          console.log('Débito realizado com sucesso!');
          console.log('Saldo atual:', moeda(conta.saldo));
        } else {
          console.log('Saldo insuficiente ou valor inválido.');
        }

        menu();
      });
      break;

    case 4:
      rl.question('Digite o valor do crédito: ', (valor) => {
        valor = Number(valor.replace(',', '.'));

        if (valor > 0) {
          conta.saldo += valor;
          console.log('Crédito realizado com sucesso!');
          console.log('Saldo atual:', moeda(conta.saldo));
        } else {
          console.log('Valor inválido.');
        }

        menu();
      });
      break;

    case 0:
      console.log('\nSaindo do banco');
      rl.close();
      break;

    default:
      console.log('Opção inválida!');
      menu();
      break;
  }
}

console.log('Bem-vindo ao sistema bancário!');
menu();
