// 1 Implemente uma classe abstrata TaskManager que represente um sistema de gerenciamento de tarefas. Ela deve ter um método abstrato addTask(task: string): void e outro listTasks(): string[].
//Crie duas subclasses: Project e DailyTasks.
//Project deve permitir adicionar tarefas específicas de um projeto e retornar uma lista de todas as tarefas do projeto.
//DailyTasks deve permitir adicionar tarefas diárias e listar as tarefas adicionadas.
//Cada tarefa deve ser única; implemente uma lógica que evite tarefas duplicadas

abstract class TaskManager {
    abstract addTask(task: string): void;
    abstract listTasks(): string[];
  }
  
  interface Task {
    id: number;
    description: string;
  }
  
  class Project extends TaskManager {
    private tasks: Task[] = [];
    private taskIdCounter: number = 1;
  
    addTask(taskDescription: string): void {
      
      if (this.tasks.some(task => task.description === taskDescription)) {
        console.log('Tarefa duplicada! Não foi possível adicionar.');
        return;
      }
  
      const newTask: Task = {
        id: this.taskIdCounter++,
        description: taskDescription
      };
      this.tasks.push(newTask);
      console.log(`Tarefa de projeto "${taskDescription}" adicionada.`);
    }
  
    listTasks(): string[] {
      return this.tasks.map(task => `Tarefa [ID: ${task.id}]: ${task.description}`);
    }
  }
  
  class DailyTasks extends TaskManager {
    private tasks: Task[] = [];
    private taskIdCounter: number = 1;
  
    addTask(taskDescription: string): void {
     
      if (this.tasks.some(task => task.description === taskDescription)) {
        console.log('Tarefa duplicada! Não foi possível adicionar.');
        return;
      }
  
      const newTask: Task = {
        id: this.taskIdCounter++,
        description: taskDescription
      };
      this.tasks.push(newTask);
      console.log(`Tarefa diária "${taskDescription}" adicionada.`);
    }
  
    listTasks(): string[] {
      return this.tasks.map(task => `Tarefa [ID: ${task.id}]: ${task.description}`);
    }
  }
  
  
  
  const project = new Project();
  project.addTask('Desenvolver a tela inicial');
  project.addTask('Configurar banco de dados');
  project.addTask('Desenvolver a tela inicial'); 
  console.log(project.listTasks());
  
  const dailyTasks = new DailyTasks();
  dailyTasks.addTask('Estudar TypeScript');
  dailyTasks.addTask('Revisar código');
  dailyTasks.addTask('Estudar TypeScript'); 
  console.log(dailyTasks.listTasks());

  // 2 Crie uma classe abstrata Inventory que gerencie um inventário de itens. Ela deve ter métodos abstratos addItem(item: string, quantity: number): void, removeItem(item: string): void e getInventory(): Record<string, number>. Dica: ver tipagem com Record para objetos com TypeScript
//Crie duas subclasses WarehouseInventory e StoreInventory.
//WarehouseInventory deve ter a capacidade de armazenar quantidades grandes e controlar os itens de forma genérica.
//StoreInventory deve ter um limite de quantidade por item (máximo 10 unidades) e impedir que itens ultrapassem esse limite.
abstract class Inventory {
    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
  }
  
  class WarehouseInventory extends Inventory {
    private inventory: Record<string, number> = {};
  
    addItem(item: string, quantity: number): void {
      if (this.inventory[item]) {
        this.inventory[item] += quantity;
      } else {
        this.inventory[item] = quantity;
      }
      console.log(`Adicionado ${quantity} unidades de "${item}" ao estoque.`);
    }
  
    removeItem(item: string): void {
      if (this.inventory[item]) {
        delete this.inventory[item];
        console.log(`Item "${item}" removido do estoque.`);
      } else {
        console.log(`O item "${item}" não está no estoque.`);
      }
    }
  
    getInventory(): Record<string, number> {
      return this.inventory;
    }
  }
  
  class StoreInventory extends Inventory {
    private inventory: Record<string, number> = {};
    private readonly maxQuantityPerItem: number = 10;
  
    addItem(item: string, quantity: number): void {
      if (this.inventory[item]) {
        if (this.inventory[item] + quantity > this.maxQuantityPerItem) {
          console.log(`Não é possível adicionar ${quantity} unidades de "${item}". Limite de 10 unidades por item.`);
          return;
        }
        this.inventory[item] += quantity;
      } else {
        if (quantity > this.maxQuantityPerItem) {
          console.log(`Não é possível adicionar ${quantity} unidades de "${item}". Limite de 10 unidades por item.`);
          return;
        }
        this.inventory[item] = quantity;
      }
      console.log(`Adicionado ${quantity} unidades de "${item}" ao estoque.`);
    }
  
    removeItem(item: string): void {
      if (this.inventory[item]) {
        delete this.inventory[item];
        console.log(`Item "${item}" removido do estoque.`);
      } else {
        console.log(`O item "${item}" não está no estoque.`);
      }
    }
  
    getInventory(): Record<string, number> {
      return this.inventory;
    }
  }
  
 
  
  const warehouse = new WarehouseInventory();
  warehouse.addItem('Cadeira', 50);
  warehouse.addItem('Mesa', 20);
  warehouse.removeItem('Cadeira');
  console.log(warehouse.getInventory());
  
  const store = new StoreInventory();
  store.addItem('Camiseta', 5);
  store.addItem('Camiseta', 6); 
  store.addItem('Calça', 10); 
  store.removeItem('Camiseta');
  console.log(store.getInventory());


  // 3 Implemente uma classe abstrata FavoriteManager que gerencia listas de itens favoritos. Ela deve ter métodos abstratos addFavorite(item: string): void e getFavorites(): string[].
//Crie duas subclasses: MoviesFavoriteManager e BooksFavoriteManager.
//MoviesFavoriteManager deve gerenciar uma lista de filmes favoritos sem itens duplicados e retornar a lista em ordem alfabética. Dica: pesquisar pelo método sort para arrays em JavaScript
//BooksFavoriteManager deve gerenciar uma lista de livros favoritos, mas sempre que um novo item é adicionado, ele deve ser inserido no início da lista. 
abstract class FavoriteManager {
    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
  }
  
  class MoviesFavoriteManager extends FavoriteManager {
    private favorites: string[] = [];
  
    addFavorite(item: string): void {
      
      if (!this.favorites.includes(item)) {
        this.favorites.push(item);
      }
    }
  
    getFavorites(): string[] {
      
      return this.favorites.sort();
    }
  }
  
  class BooksFavoriteManager extends FavoriteManager {
    private favorites: string[] = [];
  
    addFavorite(item: string): void {
      
      this.favorites.unshift(item);
    }
  
    getFavorites(): string[] {
      return this.favorites;
    }
  }
  
 
  
  const movieManager = new MoviesFavoriteManager();
  movieManager.addFavorite('Inception');
  movieManager.addFavorite('The Matrix');
  movieManager.addFavorite('Interstellar');
  movieManager.addFavorite('Inception'); 
  
  console.log('Filmes Favoritos (Ordenados):', movieManager.getFavorites());
  
  const bookManager = new BooksFavoriteManager();
  bookManager.addFavorite('The Hobbit');
  bookManager.addFavorite('1984');
  bookManager.addFavorite('Moby Dick');
  bookManager.addFavorite('To Kill a Mockingbird');
  
  console.log('Livros Favoritos (Adicionados ao início):', bookManager.getFavorites());

  // 4 Crie uma classe abstrata VoteSystem que gerencie votos em uma competição. Ela deve ter métodos abstratos voteFor(candidate: string): void e getResults(): object.
//Crie duas subclasses: Election e Poll.
//Election deve permitir adicionar votos para um candidato específico e retornar o total de votos por candidato em um objeto.
//Poll deve retornar uma lista dos candidatos em ordem de votos (do mais votado para o menos votado).
abstract class VoteSystem {
    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
  }
  
  class Election extends VoteSystem {
    private votes: Record<string, number> = {};
  
    voteFor(candidate: string): void {
     
      if (this.votes[candidate]) {
        this.votes[candidate]++;
      } else {
        this.votes[candidate] = 1;
      }
    }
  
    getResults(): object {
      return this.votes;
    }
  }
  
  class Poll extends VoteSystem {
    private votes: Record<string, number> = {};
  
    voteFor(candidate: string): void {
     
      if (this.votes[candidate]) {
        this.votes[candidate]++;
      } else {
        this.votes[candidate] = 1;
      }
    }
  
    getResults(): object {
      
      const sortedResults = Object.entries(this.votes)
        .sort((a, b) => b[1] - a[1])  
        .map(entry => ({ candidate: entry[0], votes: entry[1] }));
  
      return sortedResults;
    }
  }
  
 
  
  const election = new Election();
  election.voteFor('Alice');
  election.voteFor('Bob');
  election.voteFor('Alice');
  election.voteFor('Charlie');
  election.voteFor('Alice');
  
  console.log('Resultado da Eleição:', election.getResults());
  
  const poll = new Poll();
  poll.voteFor('Alice');
  poll.voteFor('Bob');
  poll.voteFor('Bob');
  poll.voteFor('Charlie');
  poll.voteFor('Alice');
  poll.voteFor('Alice');
  poll.voteFor('Bob');
  
  console.log('Resultado da Pesquisa (Ordenado):', poll.getResults());
  


  
  
  