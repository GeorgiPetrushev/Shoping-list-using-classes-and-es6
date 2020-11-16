class Button{
    constructor(_name,_className,_type){
        this.btn = document.createElement(_type);
        this.btn.className = `buttons ${_className}`;
        this.btn.textContent = _name;
        this.selectHeader = document.querySelector('#shopList');
        this.selectHeader.appendChild(this.btn);    
    }

}

class List{
    constructor(){
        this.item  = document.querySelector('#list');
        this.list = [];
        }

    clearTheList(){
        while(this.item.firstChild){
            this.item.removeChild(this.item.firstChild);
        }
    }

    updateScreen(){
        this.clearTheList();
        for(const text of this.list){
            let li = document.createElement("li");
            li.textContent = text;    
            this.item.appendChild(li);
        }
    }

    add(_newItem){
        let li = document.createElement('li');
        li.textContent = _newItem;
        this.item.appendChild(li);
        this.list.push(_newItem);
    }
    removeItem(_itemRemove){
        this.list = this.list.filter(e => e.toUpperCase() !== _itemRemove.toUpperCase());
        this.updateScreen();
    }
    restartItems(){
        this.clearTheList();
        this.list.length = 0;                
    }
}

let x = new List();
let addButton = new Button('Add Item','add','BUTTON');
let removeButton = new Button('Remove Item','remove','BUTTON');
let clearButton = new Button('Clear List','clear','BUTTON');
let textPlaice = new Button('test','textPlaice','INPUT');

x.add('Milk');
x.add('Banana');
x.add('Eggs');
x.add('Bred');
x.add('Butter');

addButton.btn.addEventListener("click", function(){   
    let value = document.getElementsByTagName('INPUT')[0].value; 
    x.add(value);
});
removeButton.btn.addEventListener("click", function(){
    let value = document.getElementsByTagName('INPUT')[0].value;
    x.removeItem(value);
});
clearButton.btn.addEventListener("click", function(){
    x.restartItems();
});

