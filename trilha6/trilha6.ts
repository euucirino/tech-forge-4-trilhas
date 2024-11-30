// 1 Crie uma classe Order que gerencie informações de um pedido, como items, totalPrice, paymentStatus e shippingStatus.
//Inicialmente, faça com que a classe Order seja responsável por adicionar itens, calcular o preço total, processar o pagamento e atualizar o status do envio.
//Depois, refatore o código para criar três classes separadas (Cart, Payment, Shipping) e faça com que Order dependa dessas classes para realizar suas funções.

class Order {
    items: string[] = [];
    totalPrice: number = 0;
    paymentStatus: string = 'Pending';
    shippingStatus: string = 'Not Shipped';

    addItem(item: string, price: number): void {
        this.items.push(item);
        this.totalPrice += price;
    }

    processPayment(): void {
        this.paymentStatus = 'Paid';
        console.log('Payment processed');
    }

    updateShippingStatus(status: string): void {
        this.shippingStatus = status;
        console.log('Shipping status updated');
    }
}

const order = new Order();
order.addItem('Item 1', 100);
order.addItem('Item 2', 150);
order.processPayment();
order.updateShippingStatus('Shipped');
console.log(order);

//código para criar três classes separadas (Cart, Payment, Shipping) e faça com que Order dependa dessas classes para realizar suas funções.
class Cart {
    items: { name: string, price: number }[] = [];
    totalPrice: number = 0;

    addItem(name: string, price: number): void {
        this.items.push({ name, price });
        this.totalPrice += price;
    }
}

class Payment {
    processPayment(order: Order): void {
        order.paymentStatus = 'Paid';
        console.log('Payment processed');
    }
}

class Shipping {
    updateShippingStatus(order: Order, status: string): void {
        order.shippingStatus = status;
        console.log('Shipping status updated');
    }
}

class Order {
    cart: Cart;
    payment: Payment;
    shipping: Shipping;
    paymentStatus: string = 'Pending';
    shippingStatus: string = 'Not Shipped';

    constructor() {
        this.cart = new Cart();
        this.payment = new Payment();
        this.shipping = new Shipping();
    }

    addItemToCart(itemName: string, price: number): void {
        this.cart.addItem(itemName, price);
    }

    processPayment(): void {
        this.payment.processPayment(this);
    }

    updateShippingStatus(status: string): void {
        this.shipping.updateShippingStatus(this, status);
    }
}

const order = new Order();
order.addItemToCart('Item 1', 100);
order.addItemToCart('Item 2', 150);
order.processPayment();
order.updateShippingStatus('Shipped');
console.log(order);

// 2 Implemente uma classe UserManager que gerencie a criação de usuários e envie notificações por email.
//Inicialmente, coloque toda a lógica de criação e notificação na classe UserManager.
//Em seguida, refatore para dividir a responsabilidade de envio de notificação em uma classe EmailNotification.
class GerenciadorDeUsuarios {
    usuarios: { nome: string, email: string }[] = [];

    criarUsuario(nome: string, email: string): void {
        const novoUsuario = { nome, email };
        this.usuarios.push(novoUsuario);
        console.log(`Usuário criado: ${nome}`);
        this.enviarNotificacaoPorEmail(novoUsuario);
    }

    enviarNotificacaoPorEmail(usuario: { nome: string, email: string }): void {
        console.log(`Enviando e-mail para ${usuario.email}...`);
        console.log(`Olá ${usuario.nome}, bem-vindo à nossa plataforma!`);
    }
}

const gerenciadorDeUsuarios = new GerenciadorDeUsuarios();
gerenciadorDeUsuarios.criarUsuario('João Silva', 'joao.silva@exemplo.com');

//-------------------------------------------------------------------------
class NotificacaoPorEmail {
    enviarEmail(usuario: { nome: string, email: string }): void {
        console.log(`Enviando e-mail para ${usuario.email}...`);
        console.log(`Olá ${usuario.nome}, bem-vindo à nossa plataforma!`);
    }
}

class GerenciadorDeUsuarios {
    usuarios: { nome: string, email: string }[] = [];
    notificacaoPorEmail: NotificacaoPorEmail;

    constructor(notificacaoPorEmail: NotificacaoPorEmail) {
        this.notificacaoPorEmail = notificacaoPorEmail;
    }

    criarUsuario(nome: string, email: string): void {
        const novoUsuario = { nome, email };
        this.usuarios.push(novoUsuario);
        console.log(`Usuário criado: ${nome}`);
        this.notificacaoPorEmail.enviarEmail(novoUsuario);
    }
}

const notificacaoPorEmail = new NotificacaoPorEmail();
const gerenciadorDeUsuarios = new GerenciadorDeUsuarios(notificacaoPorEmail);
gerenciadorDeUsuarios.criarUsuario('João Silva', 'joao.silva@exemplo.com');


// 3 Crie uma classe EmailSender que envie emails para contatos e valide as informações de contato.
//Implemente a validação e o envio de email na mesma classe.
//Em seguida, separe a validação em uma classe ContactValidator e injete-a em EmailSender.
class EmailSender {
    sendEmail(contact: { name: string, email: string }): void {
        if (this.validateContact(contact)) {
            console.log(`Enviando e-mail para ${contact.email}...`);
            console.log(`Olá ${contact.name}, temos uma atualização importante para você!`);
        } else {
            console.log('Informações de contato inválidas.');
        }
    }

    validateContact(contact: { name: string, email: string }): boolean {
        if (!contact.name || !contact.email.includes('@')) {
            return false;
        }
        return true;
    }
}


const emailSender = new EmailSender();
emailSender.sendEmail({ name: 'Cirino', email: 'cirino@example.com' });
emailSender.sendEmail({ name: '', email: 'invalidemail' });

//---------------------------------------------------------------------------
class ContactValidator {
    validate(contact: { name: string, email: string }): boolean {
      
        if (!contact.name || !contact.email.includes('@')) {
            return false;
        }
        return true;
    }
}

class EmailSender {
    contactValidator: ContactValidator;

    constructor(contactValidator: ContactValidator) {
        this.contactValidator = contactValidator;
    }

    sendEmail(contact: { name: string, email: string }): void {
        if (this.contactValidator.validate(contact)) {
            console.log(`Enviando e-mail para ${contact.email}...`);
            console.log(`Olá ${contact.name}, temos uma atualização importante para você!`);
        } else {
            console.log('Informações de contato inválidas.');
        }
    }
}


const contactValidator = new ContactValidator();
const emailSender = new EmailSender(contactValidator);

emailSender.sendEmail({ name: 'Cirino', email: 'cirino@example.com' });
emailSender.sendEmail({ name: '', email: 'invalidemail' });




