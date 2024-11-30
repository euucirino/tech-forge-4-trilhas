// 1Crie uma classe Veiculo com um método mover() que imprima "O veículo está se movendo". Crie duas subclasses Carro e Bicicleta, ambas herdam de Veiculo. A subclasse Carro deve sobrescrever o método mover() para imprimir "O carro está dirigindo" e Bicicleta deve sobrescrever para "A bicicleta está pedalando". Instancie objetos de ambas as subclasses e chame o método mover().
class Veiculo {
    mover() {
        console.log("O veículo está se movendo");
    }
}

class Carro extends Veiculo {
    mover() {
        console.log("O carro está dirigindo");
    }
}

class Bicicleta extends Veiculo {
    mover() {
        console.log("A bicicleta está pedalando");
    }
}

const carro = new Carro();
const bicicleta = new Bicicleta();

carro.mover();
bicicleta.mover();

// 2 Crie uma classe abstrata FiguraGeometrica com um método abstrato calcularArea(). Crie subclasses Circulo, Quadrado e Triangulo que implementem o método calcularArea() para calcular a área de suas respectivas formas geométricas. Em seguida, crie uma função que aceite um array de diferentes FiguraGeometrica e imprima a área de cada uma.
abstract class FiguraGeometrica {
    abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
    raio: number;

    constructor(raio: number) {
        super();
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }
}

class Quadrado extends FiguraGeometrica {
    lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}

class Triangulo extends FiguraGeometrica {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

function imprimirAreas(figuras: FiguraGeometrica[]) {
    figuras.forEach(figura => {
        console.log(`Área da figura: ${figura.calcularArea()}`);
    });
}

const circulo = new Circulo(3);
const quadrado = new Quadrado(4);
const triangulo = new Triangulo(6, 3);

imprimirAreas([circulo, quadrado, triangulo]);



// 3 Crie uma classe Pagamento com um método processar(). Crie subclasses PagamentoCartao e PagamentoBoleto, cada uma com sua própria implementação do método processar(). A classe PagamentoCartao deve validar o número do cartão e processar o pagamento, e PagamentoBoleto deve gerar um código de boleto. Crie uma função que aceite diferentes tipos de pagamento e processe-os usando polimorfismo.
class Pagamento {
    processar(): void {
        throw new Error("Este método deve ser sobrescrito nas classes derivadas.");
    }
}

class PagamentoCartao extends Pagamento {
    numeroCartao: string;

    constructor(numeroCartao: string) {
        super();
        this.numeroCartao = numeroCartao;
    }

    validarNumeroCartao(): boolean {
        
        return this.numeroCartao.length === 16;
    }

    processar(): void {
        if (this.validarNumeroCartao()) {
            console.log("Pagamento com cartão processado com sucesso.");
        } else {
            console.log("Número do cartão inválido.");
        }
    }
}

class PagamentoBoleto extends Pagamento {
    gerarCodigoBoleto(): string {
        
        return "BOL123456789";
    }

    processar(): void {
        const codigoBoleto = this.gerarCodigoBoleto();
        console.log(`Pagamento via boleto gerado. Código: ${codigoBoleto}`);
    }
}

function processarPagamento(pagamento: Pagamento): void {
    pagamento.processar();
}

const pagamentoCartao = new PagamentoCartao("1234567812345678");
const pagamentoBoleto = new PagamentoBoleto();

processarPagamento(pagamentoCartao);
processarPagamento(pagamentoBoleto);



// 4 Crie uma classe Animal com um atributo privado energia e um método comer() que aumenta a energia. Crie subclasses Leao e Passaro, onde Leao usa o método comer() para caçar (gasta energia primeiro e depois recupera) e Passaro usa comer() para se alimentar (só aumenta energia). Crie um método statusEnergia() que exibe o nível de energia do animal. Use polimorfismo para chamar esses métodos para diferentes animais.
class Animal {
    protected energia: number;

    constructor() {
        this.energia = 50;
    }

    comer(): void {
        this.energia += 10;
    }

    statusEnergia(): void {
        console.log(`Nível de energia: ${this.energia}`);
    }
}

class Leao extends Animal {
    comer(): void {
        this.energia -= 5;
        super.comer();
        console.log("O leão caçou e recuperou energia.");
    }
}

class Passaro extends Animal {
    comer(): void {
        super.comer();
        console.log("O pássaro se alimentou e aumentou sua energia.");
    }
}

function mostrarStatusDeEnergia(animal: Animal): void {
    animal.statusEnergia();
}

const leao = new Leao();
const passaro = new Passaro();

leao.comer(); 
passaro.comer(); 

mostrarStatusDeEnergia(leao); 
mostrarStatusDeEnergia(passaro); 



// 5 Crie uma classe abstrata Funcionario com atributos encapsulados nome, salario e um método abstrato calcularBonus(). Crie subclasses Gerente e Operario. O Gerente tem um bônus de 10% sobre o salário, e o Operario tem um bônus de 5%. Crie uma função calcularSalarioComBonus() que aceite um array de funcionários e calcule o salário final, aplicando o bônus específico de cada um, usando polimorfismo.
abstract class Funcionario {
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    public getNome(): string {
        return this.nome;
    }

    public getSalario(): number {
        return this.salario;
    }

    abstract calcularBonus(): number; 
}

class Gerente extends Funcionario {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }

    calcularBonus(): number {
        return this.getSalario() * 0.10; 
    }
}

class Operario extends Funcionario {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }

    calcularBonus(): number {
        return this.getSalario() * 0.05; 
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        const salarioFinal = funcionario.getSalario() + funcionario.calcularBonus();
        console.log(`${funcionario.getNome()} - Salário final com bônus: R$ ${salarioFinal.toFixed(2)}`);
    });
}

const gerente = new Gerente('Carlos', 5000);
const operario = new Operario('José', 2000);

calcularSalarioComBonus([gerente, operario]);




