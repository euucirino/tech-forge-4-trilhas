// 1 Crie uma classe ContaBancaria com os atributos: titular (string), saldo (number). Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.
class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    sacar(valor: number): void {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente para realizar o saque.");
        }
    }

    mostrarSaldo(): string {
        return `Titular: ${this.titular}, Saldo: R$ ${this.saldo.toFixed(2)}`;
    }
}

const conta = new ContaBancaria("José", 5000);
console.log(conta.mostrarSaldo());
conta.depositar(1500);
console.log(conta.mostrarSaldo());
conta.sacar(2000);
console.log(conta.mostrarSaldo());

// 2 Crie uma classe Livro com os atributos título (string), autor (string), páginas (number) e lido (boolean). Adicione um método para marcar o livro como lido.
class Livro {
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;

    constructor(titulo: string, autor: string, paginas: number, lido: boolean = false) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }

    marcarComoLido(): void {
        this.lido = true;
    }

    mostrarStatus(): string {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.paginas}, Lido: ${this.lido ? "Sim" : "Não"}`;
    }
}

const livro = new Livro("1984", "George Orwell", 328);
console.log(livro.mostrarStatus());
livro.marcarComoLido();
console.log(livro.mostrarStatus());

// 3 Crie uma classe Produto com os atributos nome (string), preço (number) e quantidade (number). Adicione um método para calcular o valor total em estoque (preço * quantidade).
class Produto {
    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularValorEstoque(): number {
        return this.preco * this.quantidade;
    }

    mostrarDetalhes(): string {
        return `Produto: ${this.nome}, Preço: R$ ${this.preco}, Quantidade: ${this.quantidade}`;
    }
}

const produto = new Produto("Camiseta", 39.99, 100);
console.log(produto.mostrarDetalhes());
console.log(`Valor total em estoque: R$ ${produto.calcularValorEstoque()}`);

// 4 Crie uma classe Temperatura com um atributo valor (number em Celsius). Adicione métodos para converter o valor para Fahrenheit e Kelvin.
class Temperatura {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    converterParaFahrenheit(): number {
        return (this.valor * 9/5) + 32;
    }

    converterParaKelvin(): number {
        return this.valor + 273.15;
    }

    mostrarTemperatura(): string {
        return `Temperatura: ${this.valor}°C`;
    }
}

const temperatura = new Temperatura(25);
console.log(temperatura.mostrarTemperatura());
console.log(`Temperatura em Fahrenheit: ${temperatura.converterParaFahrenheit()}°F`);
console.log(`Temperatura em Kelvin: ${temperatura.converterParaKelvin()}K`);

// 5 Crie uma classe Agenda que tenha um atributo compromissos (array de strings). Adicione métodos para adicionar compromissos e listar todos os compromissos.
class Agenda {
    compromissos: string[];

    constructor() {
        this.compromissos = [];
    }

    adicionarCompromisso(compromisso: string): void {
        this.compromissos.push(compromisso);
    }

    listarCompromissos(): string {
        return `Compromissos agendados: ${this.compromissos.join(", ")}`;
    }
}

const agenda = new Agenda();
agenda.adicionarCompromisso("Reunião com cliente");
agenda.adicionarCompromisso("Consulta médica");
console.log(agenda.listarCompromissos());


