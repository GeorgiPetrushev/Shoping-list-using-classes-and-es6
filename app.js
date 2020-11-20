class Button{
    constructor(_name,_className,_type){
        this.btn = document.createElement(_type);
        this.btn.className = `buttons ${_className}`;
        this.btn.textContent = _name;  
    }
    
    show(where){
        let selectPlaice = document.querySelector(`${where}`);
        selectPlaice.appendChild(this.btn);
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
            li.innerHTML = '<h1>'+text+'</h1>';    
            this.item.appendChild(li);
        }
    }

    add(_newItem){
        let li = document.createElement('li');
        li.textContent = _newItem;
        li.className = `${_newItem}`;
        this.item.appendChild(li);
        this.list.push(_newItem);
        let deleteButton = new Button('Delete Item','remove','BUTTON'); 
   
        li.addEventListener("click",() => {
            li.style.backgroundColor = 'rgb(132, 255, 132,0.25)';
            li.style.borderRadius = '15px';
            li.appendChild(deleteButton.btn);
        });
        li.addEventListener('dblclick',(e) => {
            li.style.backgroundColor = null;
            deleteButton.btn.remove();            
        });
        deleteButton.btn.addEventListener('click',() => {
            li.appendChild(deleteButton.btn);
            li.remove();
        });
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
addButton.show('#shopList');
let clearButton = new Button('Clear List','clear','BUTTON');
clearButton.show('#shopList');
let textPlaice = new Button('test','textPlaice','INPUT');
textPlaice.show('#shopList');

x.add('Milk');
x.add('Banana');
x.add('Eggs');
x.add('Bread');
x.add('Butter');

addButton.btn.addEventListener("click", function(){   
    let value = document.getElementsByTagName('INPUT')[0].value; 
    x.add(value);
});
// removeButton.btn.addEventListener("click", function(){
//     let value = document.getElementsByTagName('INPUT')[0].value;
//     x.removeItem(value);
// });
clearButton.btn.addEventListener("click", function(){
    x.restartItems();
});

