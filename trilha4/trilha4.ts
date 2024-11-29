// 1 Crie uma interface chamada Produto que tenha as propriedades id (número), nome (string) e preco (número).
//Em seguida, crie uma classe ItemLoja que implemente essa interface.
//No construtor da classe, atribua valores às propriedades id, nome e preco
interface Produto {
    id: number;
    nome: string;
    preco: number;
}


class ItemLoja implements Produto {
    id: number;
    nome: string;
    preco: number;

    constructor(id: number, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}


const produto1 = new ItemLoja(1, "Camiseta", 49.99);
console.log(produto1);

// 2 Crie uma interface chamada Documento com as propriedades titulo (string) e conteudo (string).
//Implemente essa interface em uma classe chamada Texto e crie um método exibir() que retorna uma string com o título e o conteúdo formatados da seguinte forma: "Título: [titulo], Conteúdo: [conteudo]".
interface Documento {
    titulo: string;
    conteudo: string;
}

class Texto implements Documento {
    titulo: string;
    conteudo: string;

    constructor(titulo: string, conteudo: string) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }

    exibir(): string {
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
}

const texto = new Texto('Meu Documento', 'Este é o conteúdo do documento.');
console.log(texto.exibir());

// 3 Crie uma interface chamada ProdutoLoja com as propriedades codigo (número) e nome (string).
//Crie uma classe Loja que tenha um array de produtos que implemente a interface ProdutoLoja.
//Implemente um método buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined que recebe um código de produto e retorna o produto correspondente, caso exista; caso contrário, retorne undefined

interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    produtos: ProdutoLoja[];

    constructor(produtos: ProdutoLoja[]) {
        this.produtos = produtos;
    }

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}

const loja = new Loja([
    { codigo: 1, nome: 'Produto A' },
    { codigo: 2, nome: 'Produto B' },
    { codigo: 3, nome: 'Produto C' }
]);

console.log(loja.buscarProdutoPorCodigo(2)); 
console.log(loja.buscarProdutoPorCodigo(4)); 

// 4 Crie uma interface Livro com as propriedades titulo (string), autor (string) e disponivel (boolean).
//Crie uma classe Biblioteca que contenha um array de livros que implementem Livro.
//Implemente um método buscarLivrosDisponiveis() que retorne um array com todos os livros cuja propriedade disponivel seja true.

interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    livros: Livro[];

    constructor(livros: Livro[]) {
        this.livros = livros;
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
    }
}

const biblioteca = new Biblioteca([
    { titulo: 'Livro A', autor: 'Autor A', disponivel: true },
    { titulo: 'Livro B', autor: 'Autor B', disponivel: false },
    { titulo: 'Livro C', autor: 'Autor C', disponivel: true }
]);

console.log(biblioteca.buscarLivrosDisponiveis()); 


// 5 Crie uma interface LivroBiblioteca com as propriedades titulo (string), autor (string), genero (string) e disponivel (boolean).
//Crie uma classe BibliotecaGestao que contenha um array de livros implementando a interface LivroBiblioteca.
//Implemente os seguintes métodos:
//filtrarPorGenero(genero: string): LivroBiblioteca[] - retorna um array de livros que pertencem ao gênero especificado.
//buscarPorAutor(autor: string): LivroBiblioteca[] - retorna todos os livros escritos por um autor específico.
//obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] - retorna uma lista de todos os livros disponíveis, ordenada alfabeticamente pelo título.

interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao {
    livros: LivroBiblioteca[];

    constructor(livros: LivroBiblioteca[]) {
        this.livros = livros;
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.genero === genero);
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.autor === autor);
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.disponivel)
                           .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}

const bibliotecaGestao = new BibliotecaGestao([
    { titulo: 'Livro A', autor: 'Autor X', genero: 'Ficção', disponivel: true },
    { titulo: 'Livro B', autor: 'Autor Y', genero: 'Aventura', disponivel: false },
    { titulo: 'Livro C', autor: 'Autor X', genero: 'Ficção', disponivel: true },
    { titulo: 'Livro D', autor: 'Autor Z', genero: 'Mistério', disponivel: true }
]);

console.log(bibliotecaGestao.filtrarPorGenero('Ficção')); 


console.log(bibliotecaGestao.buscarPorAutor('Autor X')); 


console.log(bibliotecaGestao.obterLivrosDisponiveisOrdenados()); 





