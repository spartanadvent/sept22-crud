document.addEventListener('DOMContentLoaded', function(){
    var body = document.getElementsByTagName('body')[0];
    var unordered_list = document.createElement('ul');
    var input_box = document.getElementsByTagName('input')[0];
    var submit_button = document.getElementsByTagName('button')[0];
    var delete_button = document.getElementsByTagName('button')[1];
    var new_element;
    
    body.appendChild(unordered_list);
    
    function create_element(element_name){
        new_element = document.createElement(element_name);
        unordered_list.appendChild(new_element);
        new_element.innerText = input_box.value;
      new_element.addEventListener('click',function(){
          this.innerText = prompt();
      });
        new_element.addEventListener('contextmenu',function(event){
            
            this.remove(this);
            event.preventDefault();
            return false;
        },false);
        
        
    }
    
    delete_button.addEventListener('click',function(){
            
            new_element.remove();
        });
    
   
    
    
    submit_button.addEventListener('click',function(){
        create_element('li');
         
    });
    
    input_box.onkeydown = function(event){
      
      switch(event.keyCode){
         
          case 13:
              create_element('li');
            break;
          case 8:  
                new_element.remove(new_element);
            break;
          case 27:
              new_element.innerText = prompt();
            break;  
              
      }  
            
    };
    
    
    
    
});