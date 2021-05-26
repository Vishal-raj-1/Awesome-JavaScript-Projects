function q(selector){
    var o = document;
  
    return o.querySelector(selector);
  };
  
  
  (function(){
    
    var baseInput = q('#base-size'),
        ptrInput = q('#ptr'),
        prtOutput = q('.px-to-rem .output'),
        rtpInput = q('#rtp'),
        rtpOutput =q('.rem-to-px .output');
    
    function getValue(input){
      return parseFloat(input.value.replace(/,/g, '.')) || 0;
    };
  
    function base(){
      return getValue(baseInput) || 16;
    };
    
    
    //Converter functions 
    function ptr(px){
       var x = base() || 16,
           rem = (1/x * px) + 'rem';
  
       return rem;
    };
    
    function rtp(rem){
       var x = base() || 16,
           px = rem / (1/x) + 'px';
  
       return px;
    };
  
  
    function handleInputs(){
      var px = getValue(ptrInput),
          rem = getValue(rtpInput);
      
      prtOutput.value = ptr(px);
      rtpOutput.value = rtp(rem);
    };
    
    
    (function init(){
      var inputs = [baseInput, ptrInput, rtpInput],
          events = ['keydown', 'keyup', 'change'];
      
      inputs.map(function(input){
        events.map(function(event){
          input.addEventListener(event, handleInputs);
        });
      });
      
    }());
  
  }());