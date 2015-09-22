document.addEventListener('DOMContentLoaded', function(){
    var body = document.getElementsByTagName('body')[0];
    var ordered_list = document.createElement('ol');
    var input_box = document.getElementsByTagName('input')[0];
    var submit_button = document.getElementsByTagName('button')[0];
    var delete_button = document.getElementsByTagName('button')[1];
    var new_element;
    var position;
    alert(ordered_list.children);
    body.appendChild(ordered_list);
    
    function create_element(element_name){
        new_element = document.createElement(element_name);
        ordered_list.appendChild(new_element);
        new_element.innerText = input_box.value;
        input_box.value = '';
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
            
        ordered_list.children[ordered_list.children.length - 1].remove();
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
                 ordered_list.children[ordered_list.children.length - 1].remove();
            break;
          case 27:
              position = prompt('which item number do you want to change?');
              
              ordered_list.children[Number(position) - 1].innerText = prompt();
            break;  
              
      }  
            
    };
    
    
    
    
});